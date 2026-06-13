---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年6月上期
---
2026年6月上期（2026/6/1～2026/6/14）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- macOS Tahoe 26.5.1 および Windows Insider Build 26300.8687 でOSを更新
- Visual Studio Code 1.123.0→1.124.2・Zed 1.5.3→1.5.5 で開発ツールを更新
- Claude Code 2.1.162→2.1.167 を Windows で更新
- Android Studio Quail 2 Canary 5・Kotlin 2.4.0 で Android 開発環境を更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v5.5.0〜v5.6.2: 楽曲リンク修正・ディスコグラフィー同期改善・タイムライン手動イベント登録・sync後キャッシュ改善
- v5.7.0〜v5.9.0: TikTok一覧改良・タイムラインイベントカード画像強化・新着投稿セクション改良
- v6.0.0〜v6.0.5: 「過去のこの日」セクション新設と各種修正
- v6.5.0〜v6.5.3: YouTube投稿一覧機能追加と各種修正
- 18期新メンバーのデータ登録

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【6/4】
- **＜開発ツール＞** Windowsで、[Visual Studio Code 1.123.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** Windowsで、[Zed 1.5.3](https://zed.dev/windows)に更新
- **＜MCP＞** Windowsで、[Claude Code 2.1.162](https://github.com/anthropics/claude-code)に更新

##  【6/6】
- **＜OS＞** [macOS Tahoe 26.5.1](https://www.apple.com/jp/os/macos/)にアップデート
- **＜開発ツール＞** macOSで、[Codex 26.602.40724](https://openai.com/ja-JP/codex/)に更新
- **＜開発ツール＞** macOSで、[Zed 1.5.4](https://zed.dev)に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.167](https://github.com/anthropics/claude-code)に更新
- **＜TypeScript＞** Windows Insiderで、[React Native 0.85.3](https://reactnative.dev/) / [Expo 56.0.9](https://github.com/expo/expo)に更新
- **＜Kotlin＞** Windows Insiderで、[Android Studio Quail 2 Canary 5](https://developer.android.com/studio) / [Kotlin 2.4.0](https://kotlinlang.org/docs/home.html) / Android Emulator 37.1.2 に更新

##  【6/10】
- **＜開発ツール＞** Windowsで、[Visual Studio Code 1.123.2](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** Windowsで、[Zed 1.5.5](https://zed.dev/windows)に更新
  - New Claude LLM "Fable 5" が利用可能に

##  【6/12】
- **＜開発ツール＞** Windowsで、[Visual Studio Code 1.124.2](https://code.visualstudio.com/)に更新

##  【6/13】
- **＜OS＞** [Windows 11 Insider Experimental Preview Build 26300.8687 (Quality Update)](https://blogs.windows.com/windows-insider/2026/06/12/announcing-new-builds-for-12-june-2026/)にアップデート

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v5.5.0〜v5.5.1
- v5.5.0: 楽曲リンク修正ページを新設し、TikTok・YouTube・Genius の手動リンク編集に対応（#1035, 6/1）
- v5.5.1: 楽曲リンク修正ページでTikTok 投稿をトラック名トークン分解で絞り込んで表示するよう改善。修正保存後に別トラックへ切り替えると未リンクフィルターが古い状態を参照するバグの修正（#1044, #1045, 6/1）

### v5.5.2〜v5.5.3
- v5.5.2: TikTok 一覧ページの楽曲プロモーション投稿グループに link-editor で手動設定した紐づけを反映するよう修正。オンエア収集バッチおよびプレイリスト同期でシングル優先の楽曲 trackId 自動付与に対応（#1050, #1014, 6/2）
- v5.5.3: ディスコグラフィー同期でインスト・映像・MC 等の非楽曲トラックを除外し、シングルは全エディションの楽曲をマージしてカップリング曲の欠落を防ぐよう改善。既存 DB の非楽曲トラック一括削除パッチスクリプトを追加（#1055, #1057, 6/2〜6/3）

### v5.5.4〜v5.6.1
- v5.5.4: ディスコグラフィー同期に REFETCH_ALL_SINGLES=1 フラグを追加し、既存シングルを全エディション再取得して映像・非楽曲トラックの削除とカップリング曲の補完を一括実行できるよう対応。--dry-run で削除候補を事前確認可能（#1061, 6/3）
- v5.6.0: タイムラインへの手動イベント登録を JSON ファイルで管理・同期できるよう対応。再実行時の重複生成なし（冪等）（#1048, 6/3）
- v5.6.1: REFETCH_ALL_SINGLES=1 実行時に別エディションのトラックがシングル配下に移行しないバグの修正（#1061, 6/4）

### v5.6.2
- v5.6.2: sync後のNext.jsキャッシュ未更新バグ修正・デプロイ後キャッシュ一括破棄機能追加（#1065, #1034, 6/4）

### v5.7.0〜v5.8.2
- v5.7.0: TikTok一覧のアコーディオンUI・ソート改善、タイムラインのラジオ番組に番組別アクセントカラーを適用、TikTok曲名マッチングのNFKC正規化対応（#1056, #1052, #1053, #972, 6/5）
- v5.8.0: タイムラインのイベントカードにリリースのジャケット画像・ライブ等のSVGテキストアートを表示（#1070, 6/5）
- v5.8.1: TypeScript 6.0 へアップグレード（#443, 6/6）
- v5.8.2: ヤングタウン土曜日の収集を最新回のみに変更、モーニング女学院の遡及取得を全件ページネーション取得に対応（#1080, #1081, 6/7）

### v5.9.0
- v5.9.0: 新着投稿セクションに参照日ヘッダ・メディアタグ・取得日時表示を追加（#1088, #1079, 6/7）

### v6.0.0〜v6.0.5
- v6.0.0: TOPページに「過去のこの日」セクションを追加（月日一致のイベント・誕生日等を年別ブロックで表示）（#1089, 6/8）
- v6.0.1: 「過去のこの日」にイベント詳細情報補完（会場・楽曲リスト等）と配色改善（#1092, 6/8）
- v6.0.2: Instagramサムネイル取得エラー時に投稿カードを非表示（#1094, 6/8）
- v6.0.3: ツアー中途卒業メンバーがコンパクトリストにミックスイン表示されないバグの修正（#1095, 6/8）
- v6.0.4: 「過去のこの日」の基準日をリクエスト時点の今日（JST）に修正（#1096, 6/8）
- v6.0.5: Instagram収集のサムネイル有効性検証を廃止し429エラーによる取得スキップを解消（#1114, 6/10）

### v6.5.0〜v6.5.3
- v6.5.0: YouTube投稿一覧機能の追加（公式・OGチャンネル新着収集・埋め込み再生）、メンバー詳細編集にYouTubeチャンネル名入力追加（#1097, 6/12）
- v6.5.1: ディスコグラフィー同期のリリース単位MV取得廃止・定期実行停止（#1123, 6/13）
- v6.5.2: メイボンソワのパーソナリティ「グループ名 メンバー名」形式対応（#1125, 6/13）
- v6.5.3: メンバー詳細のYouTubeチャンネル名閲覧モード表示バグ修正（#1124, 6/13）

### データ更新
- 18期メンバーのデータを登録（6/2）
- 追加メンバ発表イベントを登録（6/3）
- 18期新メンバーのデータを登録（6/11）
