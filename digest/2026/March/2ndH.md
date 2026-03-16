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

## [営業日報システム](#営業日報システム-1)
- CI/CD: Node.js 24早期対応・PR時の自動テストワークフロー追加、E2Eテストのブラウザ分離・bunキャッシュ追加
- バグ修正: システム管理者の営業マスタ編集不可・report_date のdate-only処理・visit_time nullスキーマ対応など複数修正
- テスト: 全APIテストへのテスト仕様書ID付与・未実装テストケース92件追加、E2E多ブラウザ対応（Firefox/WebKit）・テストIDのCST-xxx/SLS-xxx形式統一

## [近況確認アプリ](#近況確認アプリ-1)
- v0.2.3以降: Activeメンバー優先検索・GitHub Actions のNode.js 24移行
- v0.3.0: トップ画面にリリース一覧・ナビゲーションリンク追加、リリース一覧をカテゴリ別・新しい順に再構成

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

###  【3/15】

- **＜Rust＞** Windows Insiderで、[Rust 1.94.0](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/) に更新
  - Svelte 5.53.12 / Vite 8.0.0 との組み合わせで、Windows上でのTauriアプリの動作を確認

###  【3/16】

- **＜Rust＞** macOSで、[Rust 1.94](https://www.rust-lang.org/) / [Tauri 2.10.3](https://tauri.app/) に更新
  - React 19.2.4 / Vite 8.0.0 との組み合わせで、macOS Tahoe 26.3.1 および iOS 26.3.1（iPhone 17 Pro）上でのTauriアプリの動作を確認

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

## 近況確認アプリ

### v0.2.3以降（3/14）
- Activeメンバーを先にバッチ処理しOGメンバーは後回しにする優先検索を実装（#315）
- 全GitHub Actionsワークフローを Node.js 24 に早期移行（#310）

### v0.3.0（3/16）
- トップ画面にリリース一覧・現役/OGセクションへのナビゲーションリンクを追加（#320）
- リリース一覧をカテゴリ別（シングル/アルバム/EP/その他）・新しい順に再構成し、カテゴリ間アンカーナビを追加
