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
- Rust 1.94.0 / Tauri 2.10.3 への更新（Windows Insider・macOS）
- macOSおよびiOS 26.3.1（iPhone 17 Pro）でのTauriアプリ動作確認
- Claude Code 2.1.81（Windows Insider・macOS）への更新
- macOSで Zed 0.227.1 / Codex 26.309.31024 に更新
- Visual Studio Code 1.112.0 / AntiGravity 1.20.6 / Zed 0.228.0（Windows Insider）への更新
- Windows Insiderで Android Studio Panda 2025.3.3 Canary 4 / Kotlin 2.3.20 に更新
- Windows Insider Preview Build 26300.8085（Dev Channel）にアップデート
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
