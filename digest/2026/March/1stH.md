---
title: 2026年3月上期
layout: single
classes: wide
sidebar:
  nav: digest
---
2026年3月上期（2026/3/1～2026/3/14）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- OSアップデート（macOS Tahoe 26.3.1, ChromeOS Flex 145.0.7632.165, Windows Insider Build 26300.7965/26300.8068）
- 開発ツールのアップデート（VS Code March 2026 (1.111.0), Visual Studio Community 2026 18.4.0, Cursor 2.6.19, Claude Code 2.1.76）
- Expo 55.0.5 / Bun 1.3.10 / Rust 1.94 / .NET 10.0.4 への更新、Exa-js 2.8.0 導入

## 営業日報システム
- Cloud SQLからNeon PostgreSQLへのDB移行、JWT_SECRET環境変数設定
- システム管理者ロール追加、部署コンボボックス実装、CI/CDデプロイ最適化
- 認証・エラーコード統合、date-utils集約、テスト品質向上

## 近況確認アプリ
- v0.1.5〜v0.1.9: 公式SNS対応強化（有効/無効切り替え・限定検索・4状態バッジ表示）、トップ画面・詳細編集改善
- v0.2.0: ディスコグラフィー機能追加（MusicBrainzからリリース情報取得、メンバー紐づけ、リリースUI、週次自動同期）
- v0.2.1〜v0.2.3: Exa Search API移行、同期頻度最適化（週3回）、メンバー保存後即時反映

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

###  【3/3】

- **＜開発ツール＞** macOSで、[Codex 26.228.1430](https://openai.com/ja-JP/codex/)に更新

###  【3/4】

- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.68](https://claude.ai/)に更新

###  【3/5】

- **＜開発ツール＞** [Visual Studio Code February 2026 (1.110.0)](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** macOSで、[Codex 26.303.1606](https://openai.com/ja-JP/codex/)に更新
- **＜開発ツール＞** Windowsで、[Codex 26.304.1528](https://openai.com/ja-JP/codex/)を導入
- **＜TypeScript＞** Windows Insiderで、[Expo 55.0.5](https://github.com/expo/expo) / Expo Go 55.0.3 / [Bun 1.3.10](https://bun.sh/) に更新
  - [React Native 0.83.2](https://reactnative.dev/) との組み合わせで、Pixel 9 Pro（Androidエミュレータ）上でスターターアプリの動作を確認

###  【3/6】

- **＜OS＞** [macOS Tahoe 26.3.1](https://www.apple.com/jp/os/macos/)にアップデート
- **＜開発ツール＞** macOSで、[Codex 26.305.950](https://openai.com/ja-JP/codex/)に更新
- **＜開発ツール＞** macOSで、[Zed 0.226.5](https://zed.dev)に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.70](https://claude.ai/)に更新

###  【3/7】

- **＜開発ツール＞** [Visual Studio Code February 2026 Recovery 1(1.110.1)](https://code.visualstudio.com/)に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.71](https://claude.ai/)に更新

###  【3/8】

- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.7965 (Quality Update)](https://blogs.windows.com/windows-insider/)にアップデート
- **＜OS＞** [ChromeOS Flex 145.0.7632.165](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)にアップデート
- **＜開発ツール＞** [Cursor 2.6.13](https://www.cursor.com/)に更新
- **＜開発ツール＞** ChromeOS Flexで、[AntiGravity 1.20.4](https://antigravity.google/)に更新
- **＜開発ツール＞** Windowsで、[Codex 26.305.950](https://openai.com/ja-JP/codex/)に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.71](https://claude.ai/)に更新
- **＜Rust＞** ChromeOS Flexで、[Rust 1.94](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/)に更新
  - React 19.2.4 / Bun 1.3.10 との組み合わせで、ChromeOS Flex上での動作を確認

###  【3/10】

- **＜開発ツール＞** [Visual Studio Code March 2026 (1.111.0)](https://code.visualstudio.com/)に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.72](https://claude.ai/)に更新
- **＜TypeScript＞** Windows Insiderで、[lucide-react 0.577.0](https://lucide.dev/)に更新

###  【3/11】

- **＜開発ツール＞** [Cursor 2.6.14](https://www.cursor.com/)に更新
- **＜.NET＞** [Visual Studio Community 2026 18.4.0](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes)に更新
- **＜.NET＞** [.NET 10.0.4](https://dotnet.microsoft.com/ja-jp/download/dotnet) / [.NET MAUI 10.0.50](https://github.com/dotnet/maui) / .NET 9.0.14 / .NET 8.0.25 に更新

###  【3/12】

- **＜OS＞** Windows Insiderで、[2026-03 Standalone Insider Preview Update (KB5082257)](https://blogs.windows.com/windows-insider/)を適用
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.74](https://claude.ai/)に更新

###  【3/13】

- **＜開発ツール＞** Windowsで、[Codex 26.311.2262](https://openai.com/ja-JP/codex/)に更新
- **＜TypeScript＞** Windows Insiderで、[Exa-js 2.8.0](https://dashboard.exa.ai/home)を導入

###  【3/14】

- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8068 (Quality Update)](https://blogs.windows.com/windows-insider/)にアップデート
- **＜開発ツール＞** [Cursor 2.6.19](https://www.cursor.com/)に更新
- **＜開発ツール＞** Windows Insiderで、[AntiGravity 1.20.5](https://antigravity.google/)に更新
- **＜開発ツール＞** Windows Insiderで、[Zed 0.227.1](https://zed.dev/windows)に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.76](https://claude.ai/)に更新

## 営業日報システム

- DB基盤: [Cloud SQL](https://cloud.google.com/sql) から [Neon PostgreSQL](https://neon.tech/) へ移行、JWT_SECRET環境変数設定（3/13）
- 機能追加: システム管理者ロール追加、部署入力をコンボボックスに変更（3/12）
- CI/CD: deployトリガーを実装関連ファイルの変更時のみに限定（3/12）
- 認証/UI: ログインフォーム・AuthContext改善、エラーコード統合、date-utils集約（3/10）
- テスト: 認証・ソート・バリデーション等のテスト品質向上（3/9〜3/12）

## 近況確認アプリ

### v0.1.5〜v0.1.9（3/1〜3/6）
- v0.1.5: 公式SNSを `{url, active}` 形式に変更、有効/無効切り替えとSNSドメイン限定検索対応、近況履歴に情報ソース入力欄を追加
- v0.1.6: トップ画面改善（公式SNSエラーのバッジ可視化、最終更新日表示、メンバードロップダウン追加）
- v0.1.7: SNS限定検索失敗時にofficialSnsのactiveを自動更新しBlobに永続化
- v0.1.8: 詳細編集画面の近況内容・情報ソース独立フィールドを廃止し近況履歴に統一
- v0.1.9: SNSバッジを前回バッチ結果ベースの4状態表示（更新あり/更新なし/取得エラー/未確認）に変更

### v0.2.0（3/7）
- ディスコグラフィー機能追加（MusicBrainzからリリース情報取得・正規化、メンバー在籍期間ベースの紐づけ、リリースUI実装、週次自動同期）

### v0.2.1〜v0.2.3（3/13〜3/14）
- v0.2.1: メンバー近況同期を週3回（月・水・金 JST 20:30）に変更（月次クレジット上限対策）
- v0.2.2: [Tavily](https://tavily.com) から [Exa Search API](https://dashboard.exa.ai/home) へ移行、SNS検索エラー処理改善
- v0.2.3: メンバー保存後にサーバーレスポンスで状態を更新し公式SNSの変更を即時反映
