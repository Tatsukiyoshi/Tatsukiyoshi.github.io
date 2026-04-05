---
title: 2026年4月上期
layout: single
classes: wide
sidebar:
  nav: digest
---
2026年4月上期（2026/4/1～2026/4/12）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## [リスキリング](#リスキリング-1)
- OS: Windows Insider Preview Dev Channel Build 26300.8155（Quality Update）にアップデート
- 開発ツール: Visual Studio Code 1.114.0、Cursor 3.0.9に更新。AntiGravity 1.21.9・Zed 0.230.1@Windowsに更新
- MCP: macOSでClaude Code 2.1.92に更新
- TypeScript: Windows InsiderでReact Native Windows 0.82.3（React Native 0.82.1・React 19.2.4）に更新
- Kotlin: Android Studio Panda 2025.3.4 Canary 2（Android Emulator v.36.6.2）に更新

## [営業日報システム](#営業日報システム-1)
- テスト: PlaywrightのE2EテストにScreencast Capture Fixtureを追加・ローカル実行手順とスクリーンキャスト記録を整備（4/1）
- テスト: reports.spec.ts の前提依存による不安定テストを日付フィルターフォールバックで安定化（4/1）
- テスト: WebKitフォームsubmit後の不安定テストを修正、スクリーンキャストフィクスチャを全reportスペックに適用（4/2）

## [近況確認アプリ](#近況確認アプリ-1)
- v1.5.0: ユニット一覧・詳細ページを実装。メンバー詳細に所属ユニットセクション、リリース詳細・曲詳細にユニット情報、プレイリスト詳細にユニット遷移リンクを追加

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【4/2】
- **＜開発ツール＞** [Visual Studio Code 1.114.0](https://code.visualstudio.com/) に更新

##  【4/3】
- **＜開発ツール＞** [Cursor 3.0.9](https://www.cursor.com/) に更新
- **＜Kotlin＞** [Android Studio Panda 2025.3.4 Canary 2](https://developer.android.com/studio) に更新
  - Android Emulator v.36.6.2 との組み合わせで更新を確認

##  【4/4】
- **＜開発ツール＞** Windowsで、[AntiGravity 1.21.9](https://antigravity.google/) に更新
- **＜開発ツール＞** Windowsで、[Zed 0.230.1](https://zed.dev/windows) に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.92](https://github.com/anthropics/claude-code) に更新
- **＜TypeScript＞** Windows Insiderで、[React Native Windows 0.82.3](https://microsoft.github.io/react-native-windows/) に更新
  - React Native 0.82.1・React 19.2.4 との組み合わせでスターターアプリの動作を確認

##  【4/5】
- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8155 (Quality Update)](https://aka.ms/DevLatest) にアップデート

## 営業日報システム

- テスト: PlaywrightのE2EテストにScreencast Capture Fixtureを追加（4/1）
- ドキュメント: ローカルE2E実行手順・スクリーンキャスト記録手順を追加（#297）（4/1）
- テスト: reports.spec.ts の前提依存による不安定テストを日付フィルターフォールバックで安定化（#298）（4/1）
- テスト: WebKit フォーム submit 後のリスト取得待機を追加し不安定テストを修正（4/2）
- テスト: スクリーンキャストフィクスチャを残りの report スペックに適用（4/2）
- ドキュメント: WebKit CI リトライでシード下書きが枯渇する問題の開発メモを追加（4/2）

## 近況確認アプリ

### v1.5.0（4/5）
- ユニット一覧・詳細ページを実装（#535・#536）
- メンバー詳細に所属ユニットセクションを追加（#537）
- リリース詳細・曲詳細にユニット情報を追加（#538・#572）
- プレイリスト詳細にユニット遷移リンクを追加（#539）
- sync-discography で units.json を Vercel Blob にアップロード（#574）
- メンバー一覧にユニット一覧へのリンクを追加（#576）
