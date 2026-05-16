---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年5月上期
---
2026年5月上期（2026/4/30～2026/5/14）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- OS: ChromeOS Flex 147.0.7727.142・Windows Insider Build 26300.8346〜26300.8376にアップデート。macOS Tahoe 26.5にアップデート
- 開発ツール: ChromeOS FlexでAntiGravity 1.23.2に更新。Zed 1.0.0〜1.2.3（Windows Insider・macOS）・Cursor 3.2.21・Codex 26.429.30905〜26.506.31421（macOS）に更新。Visual Studio Code 1.119.0〜1.120.0に更新。PowerShell 7.6.1に更新。ZedにClaude Agent Integrationが追加された
- MCP: Claude Code 2.1.126〜2.1.141@Windows Insider・2.1.129〜2.1.138@macOSに更新。2.1.129でWindows起動不可の不具合が発生し2.1.131で解消
- Rust: Rust 1.95.0・Tauri 2.11.0をWindows Insider・ChromeOS Flex・macOSの全環境に更新
- Kotlin: Android Studio Quail 2026.1.1 Canary 4に更新
- TypeScript: Electrobun 1.18.1に更新。近況確認アプリのPrisma 7.8.0に更新
- .NET: Visual Studio Community 2026 18.6.0・.NET 10.0.8に更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v3.6.2: InstagramキャプションnullによるバグFix
- v3.6.3〜v3.6.7: 新着Instagram投稿セクション改善・セッション失効検出追加・メンバー一覧専用ページ分離・メール通知追加
- v3.7.0: 地域別公演マップUI改善（地域別ページに都道府県マーカー付き地図を追加）
- v3.7.1〜v3.7.2: Instagram通知メール改善（メンバーソート・本文修正・SNS状態修正）
- v3.7.3: 近況をMarkdownでレンダリング
- v3.7.4〜v3.7.5: メール通知送信修正・Ameba共有ブログ投稿者特定改善
- v3.7.6〜v3.7.10: 新着投稿セクション拡張・Genius/DiscographyのBlob URL自動導出・同期状況UI改善
- v3.8.0〜v3.8.3: YouTube Shorts埋め込み・リンク管理機能追加
- v3.8.4〜v3.9.0: Shorts進捗グラフ追加・ユニット名修正・Geniusエラーハンドリング・フェス機能追加
- v3.9.1: 地域別公演マップにフェスを追加
- v4.0.0: セットリスト表示機能を追加
- v4.0.1〜v4.0.4: Instagramサムネイル改善・曲検索レイアウト改善・モバイル修正
- v4.1.0〜v4.1.1: ディスコグラフィーデータのNeon移行・Instagram CORP修正
- v4.2.0〜v4.2.1: TikTok投稿リンク追加・新着投稿Suspenseストリーミング分離

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

##  【5/6】
- **＜開発ツール＞** [Visual Studio Code 1.119.0](https://code.visualstudio.com/) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.129](https://github.com/anthropics/claude-code) に更新（起動できない不具合が発生し、2.1.126にダウングレード）
- **＜MCP＞** macOSで、[Claude Code 2.1.129](https://github.com/anthropics/claude-code) に更新

##  【5/7】
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.131](https://github.com/anthropics/claude-code) に更新

##  【5/8】
- **＜開発ツール＞** Windows Insiderで、[Zed 1.1.6](https://zed.dev/windows) に更新
  - Claude Agent Integrationが追加された
- **＜開発ツール＞** macOSで、[Zed 1.1.6](https://zed.dev) に更新
- **＜開発ツール＞** macOSで、[Codex 26.506.21252](https://openai.com/ja-JP/codex/) に更新
- **＜TypeScript＞** [Electrobun 1.18.1](https://github.com/blackboardsh/electrobun) に更新

##  【5/9】
- **＜OS＞** [Windows 11 Insider Preview (Experimental Channel) Build 26300.8376 (Quality Update)](https://blogs.windows.com/windows-insider/2026/05/08/announcing-new-builds-for-8-may-2026/) にアップデート

##  【5/10】
- **＜Kotlin＞** Windows Insiderで、[Android Studio Quail 2026.1.1 Canary 4](https://developer.android.com/studio) に更新

##  【5/11】
- **＜開発ツール＞** macOSで、[Codex 26.506.31421](https://openai.com/ja-JP/codex/) に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.138](https://github.com/anthropics/claude-code) に更新
- **＜TypeScript＞** Windows Insiderで、近況確認アプリの[Prisma 7.8.0](https://www.prisma.io/) に更新

##  【5/13】
- **＜開発ツール＞** [Visual Studio Code 1.120.0](https://code.visualstudio.com/) に更新

##  【5/14】
- **＜OS＞** [macOS Tahoe 26.5](https://www.apple.com/jp/os/macos/) にアップデート
- **＜開発ツール＞** Windows Insiderで、[Zed 1.2.3](https://zed.dev/windows) に更新
- **＜開発ツール＞** macOSで、[Zed 1.2.3](https://zed.dev) に更新
- **＜開発ツール＞** [PowerShell 7.6.1](https://github.com/PowerShell/PowerShell) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.141](https://github.com/anthropics/claude-code) に更新
- **＜.NET＞** Windows Insiderで、[Visual Studio Community 2026 18.6.0](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes) に更新
  - 18.5.3への更新確認中に18.6.0への通知があり、18.6.0に更新
  - .NET 10.0.8 / .NET 9.0.16 / .NET 8.0.27 に更新

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

### v3.7.8〜v3.7.10
- v3.7.8: 新着投稿セクションをAmeba・Instagram限定に変更し、種別ごとにまとめて表示（5/5）
- v3.7.9: 同期状況画面の視認性を向上。グラフの最小1件表示・サマリーセクション追加・Blob URL自動導出フォールバック実装（5/5）
- v3.7.10: 新着投稿セクション改良。Instagram投稿をメンバー順でソート、Ameba投稿を公式SNS設定メンバーのみに限定（5/5）

### v3.8.0〜v3.8.3
- v3.8.0: シングル曲詳細にYouTube Shorts埋め込み追加。MV/Shorts切り替え動画セレクターを実装し、バッチで公式チャンネルからShortsを自動収集（#774, 5/6）
- v3.8.1: デスクトップモードの曲詳細画面にYouTube Shortsリンク編集機能追加。個別削除・再取得フラグ編集・処理中状態の視覚的表示（#824, #825, 5/6）
- v3.8.2: YouTube Shorts取得上限を3件から10件に拡大。Instrumental除外・ドロップダウンUI・フラグ駆動再取得（#828, #823, 5/6）
- v3.8.3: YouTube Shortsの検索クエリに「Shorts」キーワード追加で誤登録防止。同期状況にShortsリンク取得率を追加（#830, 5/7）

### v3.8.4〜v3.9.0
- v3.8.4: 同期状況画面のディスコグラフィーチャートにShortsの取得進捗グラフ追加（#832, #834, 5/8）
- v3.8.5: リリース詳細・曲詳細でサブユニット直接紐づき楽曲のユニット名を正しく表示するよう修正（#826, 5/8）
- v3.8.6: Geniusリンク同期で補助的なスナップショット保存失敗時のエラーハンドリング追加（#767, 5/8）
- v3.9.0: フェス機能を追加。参加フェスの開催情報（フェス名・日程・会場）を一覧・詳細ページで閲覧可能（#776, 5/8）

### v3.9.1
- 地域別公演マップにフェスを追加。都道府県別公演ページにフェスセクションを追加し、地図マーカーにフェス会場も含めるよう改善（#843, 5/8）

### v4.0.0
- セットリスト表示機能を追加。フェス詳細ページに演奏曲リストを表示し、ライブ詳細・フェス詳細から専用のセットリストページにアクセスできるようになった（#775, 5/9）

### v4.0.1〜v4.0.4
- v4.0.1: Instagram投稿のサムネイル表示を改善。安定したリダイレクトURL（/media/?size=m）と実行時検証（403/404フィルタリング）を導入（5/12）
- v4.0.2: スマートフォンでの曲検索画面のレイアウトを改善（#869, 5/13）
- v4.0.3: モバイル端末でライブリストのドロップダウンが過度に幅広になる問題を修正（#863, 5/13）
- v4.0.4: フェス一覧ページにローディング表示を追加（#872, 5/13）

### v4.1.0〜v4.1.1
- v4.1.0: ディスコグラフィーデータの保存先をVercel BlobからNeon PostgreSQLに移行。テーブル設計・一括移行・アプリ読み取り切り替え・同期ワークフロー再開を順次対応（#853, #854, #855, #856, #851, 5/14）
- v4.1.1: InstagramサムネイルがCORPポリシーでブロックされる問題を修正。Next.js Imageプロキシ経由のサーバーサイド取得に切り替え（#878, 5/14）

### v4.2.0〜v4.2.1
- v4.2.0: TikTok投稿リンク機能を追加。公式アカウント（@morningmusume_uf）の投稿を定期収集し、キャプションからメンバーを自動判定してトップ画面・メンバー詳細・一覧ページ（/tiktok）で閲覧可能（#805, 5/14）
- v4.2.1: トップページの新着投稿セクションをSuspenseでストリーミング分離。ヘッダー・ナビゲーション部分が即座に表示されるよう改善（#881, 5/14）
