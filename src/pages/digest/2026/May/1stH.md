---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年5月上期
---
2026年5月上期（2026/4/30～2026/5/14）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- OS: ChromeOS Flex 147.0.7727.142にアップデート。Windows 11 Insider Preview (Experimental Channel) Build 26300.8346にアップデート
- 開発ツール: ChromeOS FlexでAntiGravity 1.23.2に更新。Zed 1.0.0（Windows Insider・macOS）・Cursor 3.2.21・Codex 26.429.30905に更新
- MCP: Claude Code 2.1.126@Windows Insider・macOSに更新
- Rust: Rust 1.95.0・Tauri 2.11.0をWindows Insider・ChromeOS Flex・macOSの全環境に更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v3.6.2: InstagramキャプションnullによるバグFix
- v3.6.3〜v3.6.7: 新着Instagram投稿セクション改善・セッション失効検出追加・メンバー一覧専用ページ分離・メール通知追加
- v3.7.0: 地域別公演マップUI改善（地域別ページに都道府県マーカー付き地図を追加）
- v3.7.1〜v3.7.2: Instagram通知メール改善（メンバーソート・本文修正・SNS状態修正）
- v3.7.3: 近況をMarkdownでレンダリング
- v3.7.4〜v3.7.5: メール通知送信修正・Ameba共有ブログ投稿者特定改善
- v3.7.6〜v3.7.7: 新着投稿セクション拡張・Geniusリンク同期マッチング精度向上

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【5/1】
- **＜OS＞** [ChromeOS Flex 147.0.7727.142](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex) にアップデート
- **＜開発ツール＞** ChromeOS Flexで、[AntiGravity 1.23.2](https://antigravity.google/) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.126](https://github.com/anthropics/claude-code) に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.126](https://github.com/anthropics/claude-code) に更新
- **＜Rust＞** Windows Insider・ChromeOS Flex・macOSで、[Rust 1.95.0](https://www.rust-lang.org/) に更新
- **＜Rust＞** Windows Insider・ChromeOS Flex・macOSで、[Tauri 2.11.0](https://tauri.app/) に更新

##  【5/2】
- **＜OS＞** [Windows 11 Insider Preview (Experimental Channel) Build 26300.8346 (Quality Update)](https://blogs.windows.com/windows-insider/2026/05/01/announcing-new-builds-for-1-may-2026-and-extending-iso-support/) にアップデート
  - ウォーターマーク（右下のバージョン情報）がBuild 26300から復活
- **＜開発ツール＞** Windows Insiderで、[Codex 26.429.30905](https://openai.com/ja-JP/codex/) に自動更新

##  【5/4】
- **＜開発ツール＞** Windows Insiderで、[Zed 1.0.0](https://zed.dev/windows) に更新
- **＜開発ツール＞** macOSで、[Zed 1.0.0](https://zed.dev) に更新
- **＜開発ツール＞** [Cursor 3.2.21](https://www.cursor.com/) に更新
- **＜開発ツール＞** macOSで、[Codex 26.429.30905](https://openai.com/ja-JP/codex/) に更新

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v3.6.2
- Instagram投稿のcaptionがnullのデータを含む場合に全件表示されなくなるバグを修正（#732, 4/30）

### v3.6.3〜v3.6.7
- v3.6.3: 新着Instagram投稿セクションのタイトルに収集日（JST）を表示（#733, 5/1）
- v3.6.4: 新着Instagram投稿セクションに前回実行分が混入するバグを修正（#772, 5/1）
- v3.6.5: Instagram収集ループ中のセッション失効を検出し非ゼロ終了するよう修正。リリース一覧等に処理中スケルトンを追加（#771, #735, 5/1）
- v3.6.6: メンバー一覧を専用ページ（/members）に分離しトップページを軽量化。ヘッダロゴクリックでトップへ直接遷移（#734, #736, 5/1）
- v3.6.7: Instagram収集ワークフローに新規投稿メール通知を追加（#731, 5/1）

### v3.7.0
- 地域別公演マップのUI改善。トップページから都道府県一覧を廃止し地域リストのみに簡略化。地域別ページに都道府県ごとの公演数マーカー付き地図を追加（#710, 5/1）

### v3.7.1〜v3.7.2
- v3.7.1: Instagram通知メールのメンバー表示を現役→OG・期数順にソート。ユニット詳細・曲詳細のメンバーソートを共通関数に統一（#782, #726, 5/2）
- v3.7.2: Instagram通知メールの本文が空になる不具合を修正。SNS更新状態の判定にInstagramを反映。グループブログで一部メンバーしか近況取得できない不具合を修正（#787, #788, #789, 5/2）

### v3.7.3〜v3.7.5
- v3.7.3: メンバーの最新近況および近況履歴をMarkdown形式でレンダリングするよう改善（5/3）
- v3.7.4: Instagram通知メールの送信失敗（GitHub Actionsのマルチラインoutputパースエラー）を修正（#796, 5/3）
- v3.7.5: Ameba共有ブログでの投稿者特定ロジックを改善（タイトル優先マッチング・短い投稿の同期漏れ防止）（#928, 5/3）

### v3.7.6〜v3.7.7
- v3.7.6: 新着Instagram投稿セクションを「新着投稿」に拡張し、ブログ・SNS更新もメンバーごとにグループ化して表示（5/4）
- v3.7.7: Geniusリンク同期のマッチング精度を向上（normalizeTextの改善・完全一致優先マッチング実装・GENIUS_LINKS_STATUS_BLOB_URLの自動導出）（5/4）
