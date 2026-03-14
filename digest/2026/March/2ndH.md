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
- （更新なし）

## [営業日報システム](#営業日報システム-1)
- CI/CD: Node.js 24早期対応・PR時の自動テストワークフロー追加
- バグ修正: formatIsoToDisplay のタイムゾーン非依存JST表示対応、E2Eテスト修正

## [近況確認アプリ](#近況確認アプリ-1)
- v0.2.3以降: Activeメンバー優先検索・GitHub Actions のNode.js 24移行

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

## 営業日報システム

- CI/CD: Node.js 24対応とPR時の自動テストワークフローを追加（3/14）
- ドキュメント: CI/CDワークフローのドキュメントを追加しREADMEにサマリを追記（3/14）
- バグ修正: formatIsoToDisplay をタイムゾーン非依存のJST表示に修正（3/15）
- テスト: CI環境でのE2Eテスト失敗・フラッキーを修正（3/15）

## 近況確認アプリ

### v0.2.3以降（3/14）
- Activeメンバーを先にバッチ処理しOGメンバーは後回しにする優先検索を実装（#315）
- 全GitHub Actionsワークフローを Node.js 24 に早期移行（#310）
