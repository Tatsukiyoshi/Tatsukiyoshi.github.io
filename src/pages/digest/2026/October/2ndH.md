---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年10月下期
---
2026年10月下期（2026/10/17～2026/10/31）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- OS: Windows 11が26H2（Build 26300.9711）に更新、Ubuntu Desktop 26.10（KDE Plasma 6.7）、macOS Golden Gate 27.2に更新。Windows Insider Experimental Previewは29695.1000、29698.1000と継続して更新
- 開発ツール: Visual Studio Code 1.142.0→1.144.0、Zed 1.24.2→1.26.2（Windows）、Zed 1.25.2・Delta 0.21.0（macOS）に更新
- .NET: Visual Studio Community 2026を18.11.1→18.11.3に更新し、.NET 10.0.14 / 8.0.33を適用
- TypeScript: 近況確認アプリの開発環境をNext.js 16.4.3、Panda CSS 2.3.0に更新

## 営業日報システム
- 今期は更新なし

## 近況確認アプリ
- v11.6.0〜v11.6.2: TikTok投稿をカード表示に変更し、投稿一覧のモバイル表示崩れとTikTok紐付けの不具合を修正
- v11.7.0: プレイリストの保存先をVercel BlobからNeonへ移行し、外部アーティストの曲を登録可能に
- v11.8.0〜v11.8.2: Panda CSS 2.3.0・Next.js 16.4.3へ更新し、配色をsemantic tokensへ集約（ダーク／ライトモード対応の土台）
- v11.9.0〜v11.9.1: タイムラインに最大4人のメンバーを並べて比べられる比較ビューを追加し、年スライダーの見た目を改善
- v11.10.0: 外部サイトへのリンクを、広い画面では別ウィンドウで開くよう変更

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【10/18】
- **＜OS＞** [Windows 11 26H2 Build 26300.9711](https://www.microsoft.com/ja-jp/windows/)にアップデート
  - 25H2 Build 26200.9550から10/14に自動更新されたものを、10/18にバージョン情報で確認

##  【10/19】
- **＜OS＞** [Ubuntu Desktop 26.10](https://ubuntu.com/download/desktop)にアップデート
  - カーネルは7.0.0-34-generic（Ubuntu 26.04）から7.3.0-9-genericに更新
  - KDE Plasmaを6.6.6から6.7に更新

##  【10/21】
- **＜開発ツール＞** [Visual Studio Code 1.143.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** Windowsで、[Zed 1.24.4](https://zed.dev)に更新
- **＜.NET＞** Windows Insiderで、[Visual Studio Community 2026 18.11.1](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes)に更新

##  【10/22】
- **＜開発ツール＞** macOSで、[Zed 1.25.2](https://zed.dev)に更新
- **＜開発ツール＞** macOSで、[Delta 0.21.0](https://delta.dev/)に更新
  - Zed Pro以外ではLLMプロバイダーの選択が必要だが、SubscriptionsのClaude Codeは「Coming Soon」で選択できないため、引き続き対応待ち
- **＜TypeScript＞** Windows Insiderで、近況確認アプリの開発環境を[@pandacss/dev 2.3.0](https://github.com/chakra-ui/panda)に更新

##  【10/24】
- **＜開発ツール＞** [Visual Studio Code 1.143.1](https://code.visualstudio.com/)に更新
- **＜TypeScript＞** Windows Insiderで、近況確認アプリの開発環境を[Next.js 16.4.3](https://nextjs.org/)に更新

##  【10/26】
- **＜OS＞** [Windows 11 Insider Experimental (Future Platforms) Preview Build 29695.1000](https://blogs.windows.com/windows-insider/)にアップデート
- **＜開発ツール＞** Windowsで、[Zed 1.25.3](https://zed.dev/windows)に更新

##  【10/28】
- **＜OS＞** [macOS Golden Gate 27.2](https://www.apple.com/jp/os/macos/)にアップデート

##  【10/29】
- **＜開発ツール＞** [Visual Studio Code 1.144.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** Windowsで、[Zed 1.26.2](https://zed.dev/windows)に更新

##  【10/30】
- **＜.NET＞** Windows Insiderで、[Visual Studio Community 2026 18.11.3](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes)（10月 2026 機能更新プログラム）に更新
  - [.NET 10.0.14](https://dotnet.microsoft.com/ja-jp/download/dotnet)、.NET 8.0.33を適用

##  【10/31】
- **＜OS＞** [Windows 11 Insider Experimental (Future Platforms) Preview Build 29698.1000](https://blogs.windows.com/windows-insider/2026/10/30/announcing-new-builds-for-30-october-2026/)にアップデート

## 営業日報システム

- 今期の更新なし

## 近況確認アプリ

### v11.6.0〜v11.6.2
- v11.6.0: 曲詳細のTikTokを埋め込みからキャプションと登場メンバー付きのカード表示に変更。「overload-protect triggered」が読めない不具合を解消（#1661, 10/17）
- v11.6.1: TikTok・YouTube・Instagramの投稿一覧がモバイル幅からはみ出さないよう、投稿グリッドをメンバー詳細と同じ形に統一（#1762, 10/18）
- v11.6.2: TikTok公式アカウント詳細で、同じ曲名の別トラックに紐づいた投稿が表示されない不具合を修正し、曲ごとのアコーディオンにまとめて表示（#1765, 10/18）

### v11.7.0
- v11.7.0: プレイリストのデータの保存先をVercel BlobからNeonに移行し、`playlists.json`を編集してローカルから同期する運用に変更。外部アーティストの曲も登録可能に（#1680, 10/21）

### v11.8.0〜v11.8.2
- v11.8.0: Panda CSSを2.3.0に更新。プリセットの明示と、フォールダブル端末向けの画面幅の境目の単位をremに変更（#1672, 10/22）
- v11.8.1: 画面の配色の定義をPanda CSSのsemantic tokensに集約し、ダーク／ライトモード対応の土台を整備（#1773, 10/23）
- v11.8.2: Next.jsを16.4.0から16.4.3に更新し、脆弱性3件（リモートコード実行2件・サービス拒否1件）を解消（#1778, 10/25）
- 配色の直書きをトークン経由に置き換えるリファクタリング（カテゴリ色分け辞書・EventCard・関係性マップ・レーダーチャート）（#1774, #1787, 10/31〜11/1）

### v11.9.0〜v11.9.1
- v11.9.0: タイムライン画面に、選んだメンバー（最大4人）の1年分の出来事を月ごとに横並びで比べられる比較ビューを追加（#1675, 10/25）
- v11.9.1: 年ビューと比較ビューの年スライダーを、1つの年を選ぶ操作と分かる見た目に変更（#1781, 10/26）

### v11.10.0
- v11.10.0: 外部サイトへのリンクを、画面幅768px以上のパソコンやフォルダブル端末では別ウィンドウで開くよう変更（#1674, 10/29）
