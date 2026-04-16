---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年4月下期
---
2026年4月下期（2026/4/13～2026/4/30）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## [リスキリング](#リスキリング-1)
- OS: macOS Tahoe 26.4.1にアップデート
- 開発ツール: Visual Studio Code 1.116.0・Codex 26.409.20454（macOS）・26.409.61251（Windows）・Zed 0.232.2@macOSに更新
- MCP: Claude Code 2.1.109@Windows・macOSに更新
- Kotlin: Android Studio Panda 2025.3.4 Canary 4（Android Emulator v.36.6.4）に更新

## [営業日報システム](#営業日報システム-1)
- 対象期間中の更新なし

## [近況確認アプリ](#近況確認アプリ-1)
- v2.7.3: 手動リリースのトラックへのYouTubeリンク同期漏れを修正
- ライブ機能: ライブ一覧・詳細ページ実装、都道府県別公演件数集計・地域ブロックマップ・都道府県別公演ページ実装、Prisma+Neonによるデータベース基盤整備、Zodスキーマ導入によるBlobバリデーター・型定義の一元化

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【4/13】
- **＜OS＞** macOSで、[macOS Tahoe 26.4.1](https://www.apple.com/jp/macos/) にアップデート
- **＜開発ツール＞** macOSで、[Codex 26.409.20454](https://openai.com/ja-JP/codex/) に更新

##  【4/15】
- **＜開発ツール＞** [Visual Studio Code 1.116.0](https://code.visualstudio.com/) に更新
- **＜開発ツール＞** Windowsで、[Codex 26.409.61251](https://openai.com/ja-JP/codex/) に更新
- **＜MCP＞** Windowsで、[Claude Code 2.1.109](https://github.com/anthropics/claude-code) に更新

##  【4/16】
- **＜MCP＞** macOSで、[Claude Code 2.1.109](https://github.com/anthropics/claude-code) に更新
- **＜開発ツール＞** macOSで、[Zed 0.232.2](https://zed.dev) に更新
- **＜Kotlin＞** [Android Studio Panda 2025.3.4 Canary 4](https://developer.android.com/studio) に更新
  - Android Emulator v.36.6.4 との組み合わせで更新を確認

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v2.7.3
- 手動リリースのトラックへのYouTubeリンク同期漏れを修正。同一タイトルトラックへの重複API呼び出し削減のため、既存YouTubeリンクからタイトルキャッシュを事前構築するよう改善（#631, #632, 4/13）

### ライブ機能（4/13）
- Prisma導入・Neonスキーマ実装・シードスクリプト追加（#609, 4/13）
- ライブ一覧・詳細ページを実装し、トップにライブ一覧リンクを追加（#516, 4/13）
- ライブ一覧の地図リンクを準備中表示にし、前後ナビテストのアサーションを修正（#641, #642, 4/13）
- 都道府県別公演件数の集計ロジックと地域ブロックマップ・都道府県別公演ページを実装（#518, #525, 4/13）
- Zodスキーマを導入しBlobバリデーターと型定義を一元化（#629, 4/13）
