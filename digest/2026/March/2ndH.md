---
title: 2026年3月下期
layout: single
classes: wide
sidebar:
  nav: digest
---
2026年3月下期（2026/3/14～2026/3/31）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## [リスキリング](#リスキリング-1)
- macOS Tahoe 26.4 / ChromeOS Flex 145.0.7632.216 へのアップデート、Xcode 26.4 更新
- Rust 1.94.1 / Tauri 2.10.3 への更新（Windows Insider・ChromeOS Flex・macOS）
- macOS Tahoe 26.4・iOS 26.4（iPhone 17 Pro）・ChromeOS Flex 上でのTauriアプリ動作確認
- Claude Code 2.1.81（Windows Insider・macOS）→ 2.1.85（Windows Insider）への更新
- Visual Studio Code March 2026(1.113.0) / AntiGravity 1.21.6 / Zed 0.229.0 への更新
- Codex 26.325.31654（macOS）・26.325.21211（Windows Insider）に更新
- Windows InsiderでAndroid Studio Panda 2025.3.4 Canary 1 / Kotlin 2.3.20 に更新
- Windows Insider Preview Build 26300.8085（Dev Channel）にアップデート
- Cursor 2.6.21 に更新
- AI駆動開発入門 営業日報システムの残課題対応が完了

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

## [営業日報システム](#営業日報システム-1)
- CI/CD: Node.js 24早期対応・PR時の自動テストワークフロー追加、E2Eテストのブラウザ分離・bunキャッシュ追加
- バグ修正: システム管理者の営業マスタ編集不可・report_date のdate-only処理・visit_time nullスキーマ対応など複数修正
- テスト: 全APIテストへのテスト仕様書ID付与・未実装テストケース92件追加、E2E多ブラウザ対応（Firefox/WebKit）・テストIDのCST-xxx/SLS-xxx形式統一
- インフラ: Prisma v7へのバージョンアップ・seedコマンドのprisma.config.tsへの移行

## [近況確認アプリ](#近況確認アプリ-1)
- v0.2.3以降: Activeメンバー優先検索・GitHub Actions のNode.js 24移行
- v0.3.0: トップ画面にリリース一覧・ナビゲーションリンク追加
- v0.4.0-v0.4.1: SNS検索戦略改善・各種バグ修正・設計書追加
- v0.5.0-v0.5.4: YouTube Data API v3を活用したMV URL自動取得・収録曲一覧・Track単位外部リンク取得
- v0.6.0-v0.6.7: 曲詳細画面実装・プレイリスト機能の基盤整備・各種修正
- v0.7.0-v0.7.3: プレイリスト管理機能リリース・ナビゲーション改善・共通コンポーネント整理
- v0.7.4-v0.7.8: プレイリストリンク管理CLI追加・YouTube API上限検出・リンク構造改善・バグ修正
- v0.7.9-v0.7.11: Next.js 16.2.1更新・メンバー詳細ソートトグル追加・曲詳細YouTube MVインライン表示
- v0.8.0: リリース・プレイリスト詳細に前後ナビゲーション追加・プレイリスト選曲のリリース紐付け改善・Vite 8.0更新
- v1.0.0-v1.0.2: 曲名・期間による検索機能追加・検索フォーム URL state 永続化
- v1.1.0: 曲名前方一致によるオリジナル/リメイク対比機能追加（対比一覧・詳細ページ）

# Daily

## リスキリング

###  【3/15】

- **＜Rust＞** Windows Insiderで、[Rust 1.94.0](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/) に更新
  - Svelte 5.53.12 / Vite 8.0.0 との組み合わせで、Windows上でのTauriアプリの動作を確認

###  【3/16】

- **＜Rust＞** macOSで、[Rust 1.94](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/) に更新
  - React 19.2.4 / Vite 8.0.0 との組み合わせで、macOS Tahoe 26.3.1 および iOS 26.3.1（iPhone 17 Pro）上でのTauriアプリの動作を確認
- **＜MCP＞** macOSで、[Claude Code 2.1.76](https://github.com/anthropics/claude-code) に更新

###  【3/17】

- **＜開発ツール＞** macOSで、[Zed 0.227.1](https://zed.dev) に更新
- **＜MCP＞** macOSで、[Codex 26.309.31024](https://openai.com/ja-JP/codex/) に更新

###  【3/19】

- **＜開発ツール＞** [Visual Studio Code 1.112.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** [AntiGravity 1.20.6](https://antigravity.google/)に更新
- **＜開発ツール＞** Windows Insiderで、[Zed 0.228.0](https://zed.dev/windows)に更新
- **＜開発ツール＞** [Cursor 2.6.20](https://www.cursor.com/)に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.79](https://github.com/anthropics/claude-code) に更新
- **＜Kotlin＞** Windows Insiderで、[Android Studio Panda 2025.3.3 Canary 4](https://developer.android.com/studio) / Android Emulator v.36.5.8 に更新
  - Kotlin 2.3.20 との組み合わせで動作確認

###  【3/21】

- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8085 (Quality Update)](https://blogs.windows.com/windows-insider/)にアップデート
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.81](https://github.com/anthropics/claude-code) に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.81](https://github.com/anthropics/claude-code) に更新

###  【3/22】

- **＜Kotlin＞** Windows Insiderで、[Android Studio Panda 2025.3.4 Canary 1](https://developer.android.com/studio) に更新
  - Android Gradle Plugin 9.2.0-alpha04 → 9.2.0-alpha05
  - 動作検証に至らず！

###  【3/24】

- **＜開発ツール＞** [Cursor 2.6.21](https://www.cursor.com/)に更新

###  【3/26】

- **＜開発ツール＞** [Visual Studio Code March 2026(1.113.0)](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** macOSで、[Zed 0.229.0](https://zed.dev)に更新
- **＜開発ツール＞** macOSで、[Codex 26.324.21641](https://openai.com/ja-JP/codex/)に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.84](https://github.com/anthropics/claude-code) に更新

###  【3/27】

- **＜開発ツール＞** macOSで、[Codex 26.325.21211](https://openai.com/ja-JP/codex/)に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.85](https://github.com/anthropics/claude-code) に更新

###  【3/28】

- **＜OS＞** [macOS Tahoe 26.4](https://www.apple.com/jp/os/macos/)にアップデート
- **＜OS＞** [ChromeOS Flex 145.0.7632.216](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)にアップデート
- **＜開発ツール＞** [AntiGravity 1.21.6](https://antigravity.google/)に更新
- **＜開発ツール＞** ChromeOS Flexで、[AntiGravity 1.21.6](https://antigravity.google/)に更新
- **＜開発ツール＞** Windows Insiderで、[Zed 0.229.0](https://zed.dev/windows)に更新
- **＜開発ツール＞** Windows Insiderで、[Codex 26.325.21211](https://openai.com/ja-JP/codex/)に更新
- **＜開発ツール＞** macOSで、[Codex 26.325.31654](https://openai.com/ja-JP/codex/)に更新
- **＜開発ツール＞** macOSで、[Xcode 26.4](https://developer.apple.com/jp/xcode/)に更新
- **＜Rust＞** Windows Insiderで、[Rust 1.94.1](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/) に更新
  - Svelte 5.55.0 / Bun 1.3.11 / Vite 8.0.3 との組み合わせで、Windows および Ubuntu 24.04.4（WSL2）上でのTauriアプリの動作を確認
- **＜Rust＞** ChromeOS Flexで、[Rust 1.94.1](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/) に更新
  - React 19.2.4 との組み合わせで、ChromeOS Flex上でのTauriアプリの動作を確認
- **＜Rust＞** macOSで、[Rust 1.94.1](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/) に更新
  - React 19.2.4 / Bun 1.3.11 / Vite 8.0.3 との組み合わせで、macOS Tahoe 26.4 および iOS 26.4（iPhone 17 Pro）上でのTauriアプリの動作を確認

## 営業日報システム

- CI/CD: Node.js 24対応とPR時の自動テストワークフローを追加（3/14）
- ドキュメント: CI/CDワークフローのドキュメントを追加しREADMEにサマリを追記（3/14）
- バグ修正: システム管理者が営業マスタを編集できない問題を修正（#270）（3/14）
- バグ修正: formatIsoToDisplay をタイムゾーン非依存のJST表示に修正（3/15）
- バグ修正: report_date のdate-only処理・ローカル日付使用・日付入力読み取り・空visit_time省略・明示的顧客選択を修正（#271）（3/15）
- スキーマ修正: visit_time を nullable().optional() に変更しnullを許容（#278）（3/15）
- テスト: CI環境でのE2Eテスト失敗・フラッキーを修正（3/15）
- テスト: 異常系テスト仕様書に未実装テストケース92件を追加（#274）（3/15）
- テスト: 全APIテストにテスト仕様書IDを付与し不足テストケースを追加（#276）（3/15）
- ドキュメント: PR #271バグ修正に合わせてAPI仕様書・テスト仕様書を修正（3/15）
- CI/CD: ブラウザごとのジョブ分離でE2EテストのDB干渉を解消・Firefox/WebKitインストール追加（3/16）
- CI/CD: bunキャッシュ追加・冗長なシードステップを削除（#272, #273）（3/16）
- テスト: E2EシードデータのDB競合修正・Firefox/WebKit有効化（#175, #174）（3/16）
- テスト: 顧客テストIDをCST-xxx形式に統一しテスト仕様書を整備（#280, #282）（3/16）
- テスト: 営業マスタAPIテストIDをSLS-xxx形式に統一（#281, #285）（3/16）
- ドキュメント: Prismaスキーマ変更後のprisma generate必要性を開発ノートに追記（#272）（3/16）
- ドキュメント: POST/PUT /customersの誤った409仕様をAPI仕様書から削除（#286）（3/16）
- 依存関係: Prisma をv6系からv7系へバージョンアップ（#290）（3/17）
- テスト: seed.tsの副作用実行を防ぐためseed定数をseed-constants.tsに分離（#292）（3/17）
- CI/CD: Prisma v7対応で型チェック前にprisma generateを追加（3/17）
- インフラ: seedコマンドをprisma.config.tsのmigrations.seedに移動（3/18）
- インフラ: cleanup-dbとseedにPrismaPgアダプターを追加（3/18）
- CI/CD: 全ジョブにprisma generateを追加（3/18）
- ドキュメント: DEVELOPMENT_NOTESにseed設定先の変更を追記（3/18）

## 近況確認アプリ

### v0.2.3以降（3/14）
- Activeメンバーを先にバッチ処理しOGメンバーは後回しにする優先検索を実装（#315）
- 全GitHub Actionsワークフローを Node.js 24 に早期移行（#310）

### v0.3.0（3/16）
- トップ画面にリリース一覧・現役/OGセクションへのナビゲーションリンクを追加（#320）
- リリース一覧をカテゴリ別（シングル/アルバム/EP/その他）・新しい順に再構成し、カテゴリ間アンカーナビを追加

### v0.4.0（3/17）
- sync-statusの検索戦略・実行頻度をActive/OGで分離。officialSnsあり→SNS専用（Webフォールバックなし）、officialSnsなし→Web専用（#321）
- OGメンバーはOG_SYNC_WEEKDAYS環境変数で実行頻度を制御（デフォルト週1回・月曜）

### v0.4.1（3/18）
- SNS検索エラー判定の誤動作を修正。SNSコンテンツ取得失敗時のactive: false自動変更を廃止し「更新なし」として扱う（#326）
- Web検索でコンテンツ取得できた場合はsnsCheck.hasRecentUpdate=trueを反映
- 画面設計書・バッチ設計書・テスト設計書を追加（#305）

### v0.4.1以降（3/19）
- SalesReportの知見を開発ノートに吸収（#352 @3/19）
- Release型定義にTrackインターフェースとtracksフィールドを追加（#339 @3/19）
- リリース収録曲（トラックリスト）のデータ設計書・ER図・ドキュメント一覧を追加（#338 @3/19）
- 保存成功後のlastUpdated表示テストの競合状態を修正（@3/19）

### v0.5.0〜v0.5.4（3/20〜3/21）
- v0.5.0: YouTube Data API v3を活用したMV URL自動取得機能を追加し、リリース詳細画面にリンクを表示。ExternalLink共通型・トラックリスト同期スクリプトを追加（#350, #348, #347, #340 @3/20）
- v0.5.1: リリース詳細画面に収録曲一覧セクションを追加。M:SS形式の再生時間・マルチディスク対応（#360 @3/20）
- v0.5.2: sync-discographyにTrack単位のYouTube・Spotify URL自動取得機能を追加（#363 @3/21）
- v0.5.3: Track単位外部リンク取得をSpotifyからYouTube Musicに変更（#363 @3/21）
- v0.5.4: メンバー選択ドロップダウンの暗色テーマ視認性を修正（#374 @3/21）

### v0.6.0〜v0.6.7（3/21〜3/22）
- v0.6.0: 曲詳細画面（/songs/[id]）を実装。収録リリース一覧・外部リンク・プレイリスト掲載情報を表示（#366 @3/21）
- v0.6.1: sync-playlists-to-blobのデータ形式不一致を修正（#382 @3/21）
- v0.6.2: PlaylistEntry.memberIdを省略可能に変更しグループ曲プレイリストに対応（#384 @3/21）
- v0.6.5: メンバー・プレイリスト追加後のBlob上書きアップロード対応（#389 @3/21）
- v0.6.6: upload-members実行時にBlobの既存メンバーデータを保持するよう修正（#391 @3/21）
- v0.6.7: プレイリスト掲載情報の表示先をリリース詳細から曲詳細画面に移動（#402, #400, #401 @3/22）

### v0.7.0〜v0.7.3（3/22）
- v0.7.0: プレイリスト管理機能（一覧・詳細ページ、各画面への掲載情報セクション）をリリース（#336 @3/22）
- v0.7.1: PlaylistEntryへのreleaseId/trackId自動紐付けスクリプト追加、syncTrackLinksのvideoIdキャッシュ追加（#411, #372, #373 @3/22）
- v0.7.2: メンバー一覧画面のナビゲーション改善・曲詳細の戻るリンクをブラウザ履歴ベースに変更（#393, #394 @3/22）
- v0.7.3: BackLinkフォールバック追加・外部リンクバッジ共通化・formatTrackLength共通化（#415, #399, #381 @3/22）

### v0.7.4（3/22）
- プレイリストリンク管理CLIスクリプト（scripts/playlist-link.ts）を追加。YouTube検索・プレイリスト一覧・エントリ表示・リンク修正の各モードに対応（#413）

### v0.7.5〜v0.7.7（3/23）
- v0.7.5: YouTube APIのデイリー上限超過（quotaExceeded / userRateLimitExceeded）を検出して処理を中断。1回の実行あたり最大100件に制限（#427）
- v0.7.6: プレイリストのYouTubeリンクを楽曲単位で管理するよう内部構造を変更。リリース選択ロジックをシングル優先に改善（#424, #425, #426）
- v0.7.7: syncPlaylistTrackIdsで楽曲へのtrackId自動補完がスキップされるバグを修正（#435, #434）

### v0.7.8〜v0.7.11（3/24〜3/25）
- v0.7.8: プレイリスト楽曲のreleaseId/trackIdペア不整合バグ修正。ディスコグラフィー同期でプレイリスト掲載曲へのYouTubeリンクを優先取得（#439, #437）
- v0.7.9: Next.js を 16.1.6 から 16.2.1 に更新（#375）
- v0.7.10: メンバー詳細画面の「選曲した楽曲」セクションに並び替えトグルを追加（#410）
- v0.7.11: 曲詳細画面のYouTube MVをインライン iframe 表示に変更。外部リンクバッジ共通コンポーネント化（#452, #454）Vite 8.0.2 / Vitest 4.1.1 に更新 （#441）TypeScript 6.0への更新は保留（#443）

### v0.8.0（3/26〜3/27）
- リリース・プレイリスト詳細に前後ナビゲーションを追加（#462）
- プレイリスト選曲のリリース紐付けをシングル優先で自動解決、メンバー詳細の選曲セクションのレイアウトを調整（#461）
- Vite 8.0 に更新（#441）
- findPreferredRelease 型整理・buildMemberPlaylistIndex 統合テスト追加（#471, #472）

### v1.0.0〜v1.0.2（3/27）
- v1.0.0: 曲名キーワード・リリース期間による曲検索機能を追加。ヘッダー右上に検索アイコンを配置（#473）
- v1.0.1: 検索フォームを form 要素化・URL state 永続化で検索条件を維持（#479, #480）
- v1.0.2: 検索時の履歴スタック重複を防止（router.replace化）（#482）

### v1.1.0（3/28）
- 曲名の前方一致で同名曲のオリジナルとリメイクを対比できる曲対比機能を追加。対比一覧・対比詳細ページ、曲詳細への対比リンクを実装（#474）
- 曲対比の後処理：型共有・全角スペース対応・設計書更新（#486 #487 #488 #489）
- 型再エクスポート削除と画面遷移図への曲検索経路追加（#491 #492）
