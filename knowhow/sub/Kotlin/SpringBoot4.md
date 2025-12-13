---
title:  Spring Boot 4.0 GuideLine
layout: single
classes: wide
sidebar:
  nav: main
---
##  Spring Boot 4.0 / Spring Batch 6.0対応
### Gradleのバージョン変更（-> 8.14）
```
distributionUrl=https\://services.gradle.org/distributions/gradle-8.14-bin.zip
```

### 依存関係変更
- Spring Batch Coreの追加
  ```
  implementation("org.springframework.batch:spring-batch-core")
  ```
- MyBatis Spring Boot Starterのバージョン変更
  ```
  implementation("org.mybatis.spring.boot:mybatis-spring-boot-starter:4.0.0")
  ```

### Spring Batch 必須パラメータ不足エラーの解消ドキュメント
1.  概要
    本ドキュメントは、Spring Boot 4.0.0 (Spring Batch 6.0.0) 環境において、JobIncrementerとJobParametersValidatorが同時に設定されたジョブを起動する際に発生する「必須パラメータ不足 (require1が欠落)」のエラーを解消するために行った修正とその設計意図を記録します。

    従来の JobLauncherApplicationRunner による自動起動を停止し、手動で**JobOperator**をトランザクション管理下で使用することで、必須パラメータの要件を満たしました。

1.  修正前後の比較と解決された問題

    項目|修正前 (エラー時)|修正後 (最終案)|解決された問題
    ---|---------------|-------------|------------
    起動主体|JobLauncherApplicationRunner (自動)|JobManualLauncher (CommandLineRunner / 手動)|自動起動によるカスタムパラメータの破棄。
    実行メソッド|JobOperator.startNextInstance()|JobOperator.start(Job, JobParameters)|startNextInstanceの制約によるパラメータの無視。
    パラメータ|run.id のみ|run.id (手動生成) と require1, option1|require1 必須チェックの失敗。
    非推奨要素|N/A (エラーで起動せず)|JobOperator.start() (非推奨)|(ユーザーの要求により、非推奨でもコンパイル可能な案を採用)

1.  修正内容と実装詳細

    1.  `application.yml` の設定変更

        `JobLauncherApplicationRunner`による自動起動を停止し、手動起動に切り替えるための設定を追加しました。

        ```yaml
        spring:
          # ... 既存の設定 ...
          batch:
            job:
              # 自動ジョブ実行を無効化
              enabled: false
        ```

    1.  JobManualLauncher の実装 (パラメータ構築と起動)

        CommandLineRunnerを実装し、アプリケーション起動時にパラメータを構築して上記サービスを呼び出します。

        - パラメータ収集: コマンドライン引数 (args) をパースして Map<String, String> に変換し、パラメータの存在チェックを容易にしました。

        - 必須パラメータの保証: require1が引数に含まれない場合、デフォルト値 (10) を設定します。

        - 一意性の保証: JobOperator.start()はJobIncrementerを起動しないため、JobParametersValidatorが必須とする run.id を、現在時刻 (Date().time) を使って手動で一意に生成し、ジョブパラメータに追加しました。
