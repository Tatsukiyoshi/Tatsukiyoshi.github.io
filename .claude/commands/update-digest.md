# ダイジェスト更新スキル

knowhowファイルから更新情報を収集し、ダイジェストファイルを更新します。

## ダイジェストの構造

### ファイル配置
- `digest/YYYY/Month/1stH.md` - 上期（第1週〜第2週）
- `digest/YYYY/Month/2ndH.md` - 下期（第3週以降）
- 月名は英語（January, February, March, ...）

### フォーマット
```yaml
---
title: YYYY年M月上期/下期
layout: single
classes: wide
sidebar:
  nav: digest
---
YYYY年M月上期/下期（YYYY/M/D～YYYY/M/D）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic
- 主なトピック（1-3行程度）

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください
---
# Daily
```

### セクション構成
1. **Topic** - 期間中の主なトピック（1-3行程度）
2. **Daily** - 日付ごとの更新記録

### エントリ形式
```markdown
##  【M/D】
- **＜カテゴリ＞**  [ツール名 バージョン](URL)に更新/導入
  - 補足情報（必要に応じて）
```

#### 言語・フレームワーク系更新の補足ルール

TypeScript / Kotlin / Rust / Flutter 等の言語系カテゴリで更新がある場合、knowhowファイルに動作確認のスクリーンショットが添付されていることがある。その場合は**画像は埋め込まず**、以下のように検証内容と環境をテキストで補足する：

```markdown
- **＜TypeScript＞** Windows Insiderで、[Expo 55.0.5](URL) に更新
  - [React Native 0.83.2](URL) との組み合わせで、Pixel 9 Pro（Androidエミュレータ）上でスターターアプリの動作を確認
```

補足に含める情報（確認できるもの）：
- 組み合わせるフレームワーク・ライブラリのバージョン
- 検証に使用したデバイス／エミュレータ名
- 何を確認したか（スターターアプリの動作確認、ビルド成功 等）

#### OS アップデートとツール更新の表記ルール

**OS 自体のアップデート**（カテゴリ：OS）は OS 名をリンクテキストに含める：
```
- **＜OS＞** [macOS Tahoe 26.3](URL)にアップデート
- **＜OS＞** [ChromeOS Flex 144.0.7559.221](URL)にアップデート
- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.7877 (Quality Update)](URL)にアップデート
```

**特定 OS でのツール更新**は「OS名で、」を前置する：
```
- **＜開発ツール＞** macOSで、[Zed 0.224.6](URL)に更新
- **＜開発ツール＞** ChromeOS Flexで、[AntiGravity 1.18.4](URL)に更新
- **＜Flutter＞** Windows Insiderで、[Flutter 3.41.1](URL)に更新
- **＜TypeScript＞** macOSおよびChromeOS Flexで、Rust 1.93に更新
```

全 OS 共通の更新は「OS名で、」を省略する：
```
- **＜開発ツール＞** [Visual Studio Code 1.109.5](URL)に更新
```

## カテゴリ一覧
- OS - Windows, macOS, ChromeOS Flex
- 開発ツール - エディタ、IDE以外のツール
- MCP - Claude Desktop, Claude Code, MCP関連
- .NET - Visual Studio, .NET, MAUI, Blazor
- Rust - Rust言語、RustRover、Rust製ツール
- TypeScript - Node.js, Bun, React, Svelte等
- Kotlin - Android Studio, IntelliJ IDEA, Kotlin
- Container - Docker, Rancher Desktop等

## 参照すべきファイル
更新内容の詳細を確認する際は、以下のファイルを参照してください：
- `knowhow/Platform.md` - OS関連（Windows, macOS, Chrome OS Flex, WSL）
- `knowhow/Tools.md` - 開発ツールの詳細（エディタ等）
- `knowhow/Mcp.md` - MCP/Claude関連の詳細
- `knowhow/NET.md` - .NET関連の詳細
- `knowhow/Rust.md` - Rust関連の詳細
- `knowhow/TypeScript.md` - JavaScript/TypeScript関連の詳細
- `knowhow/Kotlin.md` - Kotlin/Android Studio/IntelliJ IDEA関連の詳細
- `knowhow/Container.md` - Docker/コンテナ関連の詳細

## 更新情報の判定方法
knowhowファイル内で以下のパターンを確認して更新日を特定する：
- `Last Updated` 列の日付
- `<<YYYY/MM/DD updated>>` マーカー
- `<<YYYY/MM/DD installed>>` マーカー

### コミット履歴による補完
knowhowファイルのマーカーだけでは更新日が正確に特定できない場合があるため、コミット履歴も必ず確認する：
```bash
git log --oneline --after="YYYY-MM-DD" --before="YYYY-MM-DD" --format="%ad %s" --date=short
```
- knowhowファイルの日付とコミット日付が食い違う場合は、knowhowファイル内の日付（実際の更新日）を優先する
- コミット日付はツールのインストールや確認作業を行った翌日以降になることがある

## 更新手順

1. 今日の日付から対象のダイジェストファイルを特定
   - 第1週〜第2週: 1stH.md
   - 第3週以降: 2ndH.md
   - 判定は週単位（日付ではなく、その月の第何週目かで判定）

2. 対象ファイルの存在確認
   - ファイルが存在しない場合は、ディレクトリとファイルを新規作成
   - フォーマットに従ってヘッダーを作成

3. 前期クローズ後の持ち越し確認（新規ダイジェスト作成時）
   - 前期ダイジェストを読み込み、最後の日付エントリを確認する
   - 前期の期間終了日（例: 上期なら2/14）と最後のエントリ日付が異なる場合、
     期間終了日に行われた更新が取り込まれていない可能性がある
   - コミット履歴で前期クローズ日の更新を確認する：
     ```bash
     git log --after="YYYY-MM-DD" --before="YYYY-MM-DD" --format="%ad %s" --date=short
     ```
   - 持ち越し更新がある場合は：
     - 新規ダイジェストの期間開始日をクローズ日に合わせる（例: 2/15→2/14）
     - Daily セクションの先頭に `## 【M/D】（前期クローズ後の更新）` として追加する

4. ユーザーの指示を確認
   - 「knowhow配下を参照して収集」の場合: 参照すべきファイルを読み込み、対象期間の更新を自動収集
   - 個別の更新内容を提供された場合: その内容をもとに更新

5. knowhowファイルから更新情報を収集（自動収集の場合）
   - 各knowhowファイルを読み込む
   - 対象期間（上期: 第1週〜第2週、下期: 第3週以降）の更新を抽出
   - バージョン番号、公式URL、補足説明を確認
   - Windows InsiderなどのOSアップデートは、Build番号を詳細に記載する（例：Build 26300.7733）

6. 適切なカテゴリと形式でエントリを追加
   - 記載順は、カテゴリ一覧の順とする
   - 既存の日付エントリがあれば追記
   - なければ新規に日付セクションを作成
   - 同一日付内では、カテゴリ順に記載

7. 関連ファイルの更新（新規ダイジェスト作成時）
   - `digest/list.md` - ダイジェスト一覧に新しいエントリを追加
     - 該当年月のセクションがなければ作成
     - 形式: `- [上期/下期（YYYY/M/D～YYYY/M/D）](YYYY/Month/1stH または 2ndH)`
   - `README.md` - 最新ダイジェストのリンクを更新
     - 「最新ダイジェスト」の行を新しいダイジェストへのリンクに変更

$ARGUMENTS
