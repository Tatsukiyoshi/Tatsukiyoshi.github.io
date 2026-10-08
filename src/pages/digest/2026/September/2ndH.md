---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年9月下期
---
2026年9月下期（2026/9/15～2026/9/30）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- **＜OS＞** [macOS Golden Gate 27.0](https://www.apple.com/jp/os/macos/)にアップグレード（Tahoe 26.6.2からのメジャーアップグレード）し、[27.0.1](https://www.apple.com/jp/os/macos/)に更新。Windows Insiderは[Build 29671.1000](https://blogs.windows.com/windows-insider/2026/09/18/announcing-new-builds-for-18-september-2026/)、[Ubuntu Desktop 26.04.1](https://jp.ubuntu.com/download)にも更新
- **＜開発ツール＞** [Visual Studio Code 1.139.1](https://code.visualstudio.com/)、Windowsで[Zed 1.21.0](https://zed.dev/windows)、macOSで[Zed 1.20.2](https://zed.dev)、[GitHub CLI 2.101.0](https://cli.github.com/)に更新
- **＜TypeScript＞** 近況確認アプリの開発環境に[TanStack Query 5.103.1](https://tanstack.com/)・[@pandacss/dev 1.12.1](https://github.com/chakra-ui/panda)を新規導入。設計書サイト構築ツール[Blume](https://useblume.dev/)も1.7.1を経て[2.0.3](https://useblume.dev/)へメジャーアップデート

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v10.4.0〜v10.4.2でメンバー詳細画面の関連ライブ表示等の不具合を修正した後、新着投稿・メンバー一覧・都道府県別公演の各画面データ取得をTanStack QueryベースのBFFアーキテクチャへ順次刷新（v10.5.0〜v10.5.2）。中盤は合言葉入力時のみ見られる世代マトリックス画面を新設し、フェスの開催・出演時刻表示や関連ライブのキャッシュ層刷新を実施（v10.6.0〜v10.6.3）。後半は対比機能をNeon DB手動作成方式へ再構築したうえで、CSSフレームワークをTailwind CSSからPanda CSS単独構成へ完全移行し、一覧画面全般をレスポンシブグリッドに刷新（v10.7.0〜v11.0.0）。期末にはBlobデータ参照設定の不整合を毎朝自動検知する診断ワークフローを追加（v11.0.1）

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【9/15】
- **＜OS＞** [macOS Golden Gate 27.0](https://www.apple.com/jp/os/macos/)にアップグレード
  - Tahoe 26.6.2からのメジャーアップグレード

##  【9/16】
- **＜TypeScript＞** 近況確認アプリの開発環境で、設計書サイト構築ツール[Blume 1.7.0](https://useblume.dev/)に更新

##  【9/17】
- **＜開発ツール＞** [Visual Studio Code 1.138.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** macOSで、[Zed 1.20.2](https://zed.dev)に更新
- **＜TypeScript＞** 近況確認アプリの開発環境に[TanStack Query 5.103.1](https://tanstack.com/)を導入

##  【9/18】
- **＜開発ツール＞** Windowsで、[Zed 1.20.2](https://zed.dev/windows)に更新

##  【9/19】
- **＜OS＞** Windows Insiderで、[Windows 11 Insider Experimental (Future Platforms) Preview Build 29671.1000](https://blogs.windows.com/windows-insider/2026/09/18/announcing-new-builds-for-18-september-2026/)にアップデート

##  【9/21】
- **＜TypeScript＞** 近況確認アプリの開発環境で、設計書サイト構築ツール[Blume 1.7.1](https://useblume.dev/)に更新

##  【9/24】
- **＜開発ツール＞** Windowsで、[Zed 1.21.0](https://zed.dev/windows)に更新

##  【9/26】
- **＜OS＞** [Ubuntu Desktop 26.04.1](https://jp.ubuntu.com/download)にアップデート
- **＜開発ツール＞** [Visual Studio Code 1.139.1](https://code.visualstudio.com/)に更新

##  【9/27】
- **＜TypeScript＞** 近況確認アプリの開発環境に[@pandacss/dev 1.12.1](https://github.com/chakra-ui/panda)を導入
- **＜開発ツール＞** macOSで、[GitHub CLI 2.101.0](https://cli.github.com/)に更新

##  【9/28】
- **＜TypeScript＞** 近況確認アプリの開発環境で、設計書サイト構築ツール[Blume 2.0.3](https://useblume.dev/)に更新

##  【9/29】
- **＜OS＞** [macOS Golden Gate 27.0.1](https://www.apple.com/jp/os/macos/)にアップデート

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v10.4.0
- v10.4.0: メンバー詳細画面の関連ライブ・ご当地ライブセクションにフェス出演の表示を追加（#1622, 9/15）

### v10.4.1〜v10.4.2
- v10.4.1: メンバー詳細画面の関連ライブで、同一年内に月の桁数が異なるツアー・フェスが混在すると表示順序が入れ替わる不具合を修正（#1624, 9/16）
- v10.4.2: 公式Amebaブログ未登録のメンバーが他者のameblo.jp URLを拾い「Ameba投稿」と誤表示される不具合と、bun run type-checkがlib/blob.tsのfetchオプションで失敗する不具合を修正（#1628, #1629, 9/16）

### v10.5.0〜v10.5.2
- v10.5.0: トップ画面の新着投稿セクションのデータ取得をTanStack QueryベースのBFFアーキテクチャへ刷新（#1569, 9/17）
- v10.5.1: メンバー一覧画面のデータ取得をTanStack QueryベースのBFFパターンへ移行（#1640, 9/17）
- v10.5.2: 都道府県別公演画面のデータ取得をRoute Handler + TanStack Queryへ刷新（#1636, 9/19）

### v10.6.0〜v10.6.3
- v10.6.0: 合言葉を入力したときだけ見られる世代マトリックス画面（メンバー本人・子供の誕生年を並べた世代の重なり表示）を追加（#1632, 9/20）
- v10.6.1: 世代マトリックスの表示を、卒業が決まっているメンバーを現役として扱う・凡例を3行に固定するなど原仕様に沿う形に修正（#1650, 9/21）
- v10.6.2: フェスの開催時刻・出演時刻を登録・編集できるようにし、各画面・タイムラインに表示（#1545, 9/22）
- v10.6.3: メンバー詳細画面の関連ライブ・ご当地ライブのデータ取得をTanStack Queryベースのキャッシュ層へ刷新（#1657, 9/23）

### v10.7.0〜v11.0.1
- v10.7.0: 対比機能をタイトル自動判定方式から、デスクトップモードでの手動グループ作成・編集・削除方式に再構築（#1658, 9/25）
- v10.8.0: CSSフレームワークとしてPanda CSSを導入し、既存のTailwind CSSとの共存方式を確立（#1655, 9/25）
- v11.0.0: Tailwind CSSを撤去しPanda CSS単独構成へ完全移行。一覧画面全般をモバイルファーストのレスポンシブグリッドに刷新（#1656, 9/27）
- v11.0.1: Blobデータの参照先設定のズレや取得失敗を毎朝自動で検知する診断ワークフローを追加（#1618, 9/27）
