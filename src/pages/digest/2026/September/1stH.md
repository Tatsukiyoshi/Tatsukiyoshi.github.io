---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年9月上期
---
2026年9月上期（2026/9/1～2026/9/14）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- **＜開発ツール＞** [Visual Studio Code 1.137.0](https://code.visualstudio.com/)、Zed 1.19.2（Windows/macOS共通）に更新
- **＜OS＞** Windows Insiderのビルド系統がBuild 26340系からBuild 29xxx系（Experimental Future Platforms）へ切り替わり、[Build 29661.1000](https://blogs.windows.com/windows-insider/2026/09/08/announcing-new-builds-for-8-september-2026/)まで順次更新
- **＜Kotlin＞** Windows Insiderで、Android Studio Rabbit 1をCanary 4に更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v10.1.0〜v10.1.5: 手動イベント登録の拡充（他アーティスト楽曲指定・validate-onlyモード追加）に続き、デスクトップアプリのキャッシュ無効化・権限ガード関連の不具合修正、Prisma 7.10.0への更新を実施。後半は手動登録リリースをMusicBrainz IDへ洗い替えるスクリプトを追加し、タイトル表記ゆれの正規化にも対応

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【9/4】
- **＜開発ツール＞** [Visual Studio Code 1.136.1](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** macOSで、[Zed 1.18.0](https://zed.dev)に更新

##  【9/5】
- **＜開発ツール＞** Windowsで、[Zed 1.18.1](https://zed.dev/windows)に更新

##  【9/6】
- **＜OS＞** Windows Insiderで、[Windows 11 Insider Experimental (Future Platforms) Preview Build 29648.1000](https://blogs.windows.com/windows-insider/2026/08/17/announcing-new-builds-for-17-august-2026/)にアップデート
  - ビルド系統がBuild 26340系からBuild 29xxx系（Experimental Future Platforms）に切り替わった
  - 26H2で採用されたタスクバーの配置がなくなっている（下固定）
- **＜Kotlin＞** Windows Insiderで、[Android Studio Rabbit 1 Canary 4](https://developer.android.com/studio) / Android Emulator v.37.2.7 に更新

##  【9/10】
- **＜OS＞** Windows Insiderで、[Windows 11 Insider Experimental (Future Platforms) Preview Build 29661.1000](https://blogs.windows.com/windows-insider/2026/09/08/announcing-new-builds-for-8-september-2026/)にアップデート
  - 26H2に採用されたタスクバーの配置が反映された（配置は上）
- **＜開発ツール＞** [Visual Studio Code 1.137.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** Windowsで、[Zed 1.19.2](https://zed.dev/windows)に更新
- **＜開発ツール＞** macOSで、[Zed 1.19.2](https://zed.dev)に更新

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v10.1.0〜v10.1.5
- v10.1.0: 手動イベント登録データのバリデーション個別化とevent_songsへのartist指定対応（#1585, #1590, 9/5）
- v10.1.1: manual-events.json単体をDB・外部API呼び出しなしで検証できるvalidate-onlyモードを追加（#1592, 9/6）
- v10.1.2: デスクトップアプリでメンバー編集・楽曲リンク編集を保存しても本番Webに反映されない不具合を修正（#1600, 9/7）
- v10.1.3: メンバー編集の保存APIがデスクトップアプリ以外からも呼び出せてしまう不具合を修正（#1603, 9/7）
- v10.1.4: Prisma関連パッケージ（prisma / @prisma/client / @prisma/adapter-neon）をv7.10.0に更新（#1560, 9/7）
- 同期元テーブルのID変更で孤立したEvent.sourceIdレコードを削除するユーティリティスクリプトを追加（#1607, 9/8）
- v10.1.5: 手動登録したリリースをMusicBrainz登録済みIDへ洗い替える手動実行専用スクリプトを追加。あわせてMusicBrainz同期処理で取得するタイトルのハイフン・三点リーダーの表記揺れを正規化する不具合を修正（#1594, #1553, 9/8）
