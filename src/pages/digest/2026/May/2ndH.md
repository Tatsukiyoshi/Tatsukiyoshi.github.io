---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年5月下期
---
2026年5月下期（2026/5/15～2026/5/31）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- OS: Windows InsiderでBuild 26300.8493・8497 (Quality Update)に更新
- 開発ツール: VS Code 1.121.0に更新、Zed 1.3.6 (Windows・macOS)およびCodex 26.519.22136 (macOS)に更新
- MCP: Windows InsiderでClaude Code 2.1.145に更新
- Container: Windows InsiderでRancher Desktop 1.22.3に更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v4.3.0〜v4.3.6: ラジオオンエアリスト機能追加・TikTokサムネイル改善・ナビゲーション改善
- v4.4.0〜v4.4.1: TikTok一覧グルーピング改善・Neon/BlobキャッシュによるDB転送量削減
- v4.5.0〜v4.5.4: YouTube Shorts廃止、Instagram・Ameba一覧新設、TikTok楽曲プロモーション機能追加

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【5/15】
- **＜開発ツール＞** Windows Insiderで、[Zed 1.2.5](https://zed.dev/windows) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.142](https://github.com/anthropics/claude-code) に更新

##  【5/16】
- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8493 (Quality Update)](https://blogs.windows.com/windows-insider/2026/05/15/announcing-new-builds-for-15-may-2026/) にアップデート
- **＜Container＞** Windows Insiderで、[Rancher Desktop 1.22.3](https://rancherdesktop.io/) に更新

##  【5/20】
- **＜開発ツール＞** [Visual Studio Code 1.121.0](https://code.visualstudio.com/) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.145](https://github.com/anthropics/claude-code) に更新

##  【5/22】
- **＜開発ツール＞** Windowsで、[Zed 1.3.6](https://zed.dev/windows) に更新
- **＜開発ツール＞** macOSで、[Zed 1.3.6](https://zed.dev) に更新
- **＜開発ツール＞** macOSで、[Codex 26.519.22136](https://openai.com/ja-JP/codex/) に更新

##  【5/23】
- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8497 (Quality Update)](https://blogs.windows.com/windows-insider/2026/05/22/announcing-new-builds-for-22-may-2026/) にアップデート

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v4.2.2〜v4.2.3
- v4.2.2: Prismaクライアント生成ステップを同期系ワークフローに追加し、実行エラーを修正（#884, 5/15）
- v4.2.3: TikTok投稿データの保存先をVercel BlobからNeon（PostgreSQL）に移行。「本日の新着」フィルタが実際の投稿日時ベースに改善（#888, 5/15）

### v4.3.0〜v4.3.6
- v4.3.0: ラジオ番組・放送回の一覧・詳細ページを追加し、曲詳細・メンバー詳細ページで放送実績をラジオ番組単位にグループ化して折りたたみ表示できるようになった（#806, 5/16）
- v4.3.1: メンバー詳細ページのラジオ出演セクションが別カードになっていたバグを修正（#906, 5/16）
- v4.3.2: 検索画面のモバイルレイアウト改善（5/17）
- v4.3.3: TikTokサムネイル有効期限切れ時にキャプションのカードリンクとして表示するよう改善（#910, 5/17）
- v4.3.4: メンバー詳細のナビゲーションにラジオ出演リンクを追加し、各詳細ページのリンクをカードリンクスタイルに統一（#909, 5/17）
- v4.3.5: ダークモードでTikTokアイコンが見えない問題を修正。サムネイル期限切れ時のキャプション全文ツールチップ追加（#893, 5/18）
- v4.3.6: `server-only`モジュールのエラーでGitHub Actionsワークフローが動作しなかった問題を修正（#931, 5/18）

### v4.4.0〜v4.4.1
- v4.4.0: TikTok一覧をメンバーごとのグルーピング表示に改善し、保存件数上限を撤廃（#935, 5/19）
- v4.4.1: Neon DB・Vercel Blobへのリクエストにキャッシュを導入し月間データ転送量を削減（#944, 5/20）

### v4.5.0〜v4.5.4
- v4.5.0: YouTube Shorts収集を廃止。Instagram・Ameba一覧ページを新設し、TikTok楽曲プロモーション投稿機能を追加（#938, 5/21）
- v4.5.1: 2013年以前リリースに紐づく楽曲のユニット名が誤表示されるバグを修正（#949, 5/21）
- v4.5.2: Instagram一覧をメンバーごとの最新投稿カバー表示に変更し、サムネイル表示差異バグを修正（#951, 5/21）
- v4.5.3: Instagram投稿の参考表示ができないバグを修正（#958, 5/22）
- v4.5.4: TikTok投稿のトラックリンクをシングル版トラックに統一し、誤リンクを自動補正するバッチ処理を追加（#961, 5/22）
