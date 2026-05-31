---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年5月下期
---
2026年5月下期（2026/5/15～2026/5/31）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- OS: Windows InsiderでBuild 26300にQuality Updateを3回適用、ChromeOS Flexを148系にアップデート
- 開発ツール: VS Code 1.122.0・Zed 1.4.2 (Windows)・Zed 1.4.4 (macOS)・AntiGravity 2.0.3 (ChromeOS Flex)に更新
- MCP: Windows InsiderでClaude Code 2.1.158に更新
- Container: Windows InsiderでRancher Desktop 1.22.3に更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v4.3.0〜v4.3.6: ラジオオンエアリスト機能追加・TikTokサムネイル改善・ナビゲーション改善
- v4.4.0〜v4.4.1: TikTok一覧グルーピング改善・Neon/BlobキャッシュによるDB転送量削減
- v4.5.0〜v4.6.2: YouTube Shorts廃止、Instagram・Ameba一覧新設、ラジオ・X収集バッチ追加
- v5.0.0: 歴史タイムライン（/timeline）を新設
- v5.1.0〜v5.2.0: X投稿収集をtwitterapi.ioに移行、Instagram複数アカウント対応
- v5.3.0〜v5.4.3: タイムライン表示の全面改善（年別スライダー・ツアーグループ表示・メンバーカラー等）

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

##  【5/24】
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.150](https://github.com/anthropics/claude-code) に更新

##  【5/26】
- **＜開発ツール＞** Windowsで、[Zed 1.3.7](https://zed.dev/windows) に更新

##  【5/27】
- **＜開発ツール＞** macOSで、[Codex 26.519.81530](https://openai.com/ja-JP/codex/) に更新

##  【5/28】
- **＜開発ツール＞** [Visual Studio Code 1.122.0](https://code.visualstudio.com/) に更新
- **＜開発ツール＞** Windowsで、[Zed 1.4.2](https://zed.dev/windows) に更新
- **＜TypeScript＞** 近況確認アプリで使用する[Neon](https://neon.com/) のDBをPostgreSQL 17からPostgreSQL 18にアップグレード

##  【5/29】
- **＜OS＞** [ChromeOS Flex 148.0.7778.214](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex) にアップデート
- **＜開発ツール＞** ChromeOS Flexで、[AntiGravity 2.0.3](https://antigravity.google/) に更新
- **＜開発ツール＞** macOSで、[Zed 1.4.4](https://zed.dev) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.153](https://github.com/anthropics/claude-code) に更新

##  【5/30】
- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8553 (Quality Update)](https://blogs.windows.com/windows-insider/2026/05/29/announcing-new-builds-for-29-may-2026/) にアップデート

##  【5/31】
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.158](https://github.com/anthropics/claude-code) に更新

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

### v4.5.0〜v4.5.5
- v4.5.0: YouTube Shorts収集を廃止。Instagram・Ameba一覧ページを新設し、TikTok楽曲プロモーション投稿機能を追加（#938, 5/21）
- v4.5.1: 2013年以前リリースに紐づく楽曲のユニット名が誤表示されるバグを修正（#949, 5/21）
- v4.5.2: Instagram一覧をメンバーごとの最新投稿カバー表示に変更し、サムネイル表示差異バグを修正（#951, 5/21）
- v4.5.3: Instagram投稿の参考表示ができないバグを修正（#958, 5/22）
- v4.5.4: TikTok投稿のトラックリンクをシングル版トラックに統一し、誤リンクを自動補正するバッチ処理を追加（#961, 5/22）
- v4.5.5: TikTok曲紐づけで全角「！」と半角「!」の表記ゆれを吸収するよう修正（#965, 5/23）

### v4.6.0〜v4.6.2
- v4.6.0: ヤングタウン土曜日の放送データ（出演メンバー）をX投稿から毎週自動収集するバッチを追加（#930, 5/24）
- v4.6.1: ラジオ出演セクションの放送日に年を追加表示。収集バッチの年次自動対応も改善（#978, 5/24）
- v4.6.2: 曲目ツイートのコロン付きフォーマットで曲名先頭に「：」が混入するバグを修正（#981, 5/24）

### v5.0.0〜v5.0.3
- v5.0.0: 歴史タイムライン（/timeline）を新設。加入・卒業・リリース・ライブ・メディア出演を年ごとにグループ化して時系列表示できるようになった（#928, 5/24）
- v5.0.1: メンバーカラーをタイムライン・メンバー詳細・期バッジに適用。CSVから一括登録するスクリプトを追加（#991, 5/25）
- v5.0.2: ディスコグラフィー同期バッチでYouTubeリンクが毎回全消去されるバグを修正（#1002, 5/25）
- v5.0.3: デスクトップモードでのYouTubeリンク編集が保存されないバグを修正（#1000, 5/25）

### v5.1.0〜v5.1.4
- v5.1.0: X投稿収集をtwitterapi.ioに移行。モーニング女学院・ヤングタウン土曜日の定期収集バッチを再開（#986, 5/26）
- v5.1.1: モーニング女学院収集バッチで既存放送回への楽曲・エピソードタイトル補完に対応（#1009, 5/27）
- v5.1.2: モーニング女学院収集で1ページ分で情報が揃わない場合に次ページを自動取得するよう改善（#1013, 5/27）
- v5.1.3: セクション見出しをSectionLabelコンポーネントに統一し、SNSブランドカラー定数を共通化（#941, 5/28）
- v5.1.4: TikTok収集を2フェーズ設計（新着取得＋遡及蓄積）に刷新（#933, 5/28）

### v5.2.0
- v5.2.0: Instagram複数アカウントを持つメンバーの投稿収集・表示に対応。CDNチェックを廃止しクライアント側フォールバック表示に移行（#875, 5/28）

### v5.3.0〜v5.3.1
- v5.3.0: タイムラインを年別表示に変更し、ツアー公演を初日・千秋楽フルカード＋中間日コンパクトリストで表示するよう改善（#997, 5/29）
- v5.3.1: メンバー詳細にメンバーカラーの色見本と色名称を追加（#1029, 5/30）

### v5.4.0〜v5.4.3
- v5.4.0: タイムラインを全面改善。年セレクターをスライダー形式に刷新、リリースカードに種別バッジを追加、ツアーの同日公演集約・時刻昇順ソートを改善（#1026, 5/31）
- v5.4.1: タイムラインのツアー表示に千秋楽での卒業・ツアー期間中の加入メンバー情報をミックスイン表示（#1037, 5/31）
- v5.4.2: X投稿収集で402エラー（クレジット不足）受信時に収集済みデータを保存して中断するよう修正（#1038, 5/31）
- v5.4.3: 告知ツイートと曲目ツイートが別放送回に分散するバグを修正（#1041, 5/31）
