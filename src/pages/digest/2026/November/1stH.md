---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年11月上期
---
2026年11月上期（2026/11/1～2026/11/3）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- 開発ツール: Visual Studio Code 1.144.0→1.144.1に更新
- Kotlin: Android Studio Rabbit 3 Canary 2（2026.2.3）に更新し、Kotlin 2.4.21、Android Emulator 37.3.6、Android Gradle Plugin 9.5.0を適用
- TypeScript: 近況確認アプリでPanda CSS 2.3.0の配色トークン活用を推進

## 営業日報システム
- 今期は更新なし

## 近況確認アプリ
- v11.10.1: 画面全体の色（カード・バッジ・チャート・地図・編集画面ほか）をPanda CSSのトークンに移行し、ダーク／ライトモード対応の土台を整備

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【11/3】
- **＜開発ツール＞** [Visual Studio Code 1.144.1](https://code.visualstudio.com/)に更新
- **＜TypeScript＞** 近況確認アプリで、Panda CSS 2.3.0の配色トークン活用を推進
  - トップページとメンバー一覧で、トークン経由に置き換えた配色の表示を確認
- **＜Kotlin＞** Windows Insiderで、[Android Studio Rabbit 3 Canary 2](https://developer.android.com/studio)（2026.2.3）に更新
  - [Kotlin 2.4.21](https://kotlinlang.org/docs/home.html)、Android Emulator 37.3.6、Android Gradle Plugin 9.4.1→9.5.0を適用

## 営業日報システム

- 今期の更新なし

## 近況確認アプリ

### v11.10.1
- v11.10.1: 画面全体の色（カード・バッジ・チャート・地図・編集画面ほか）をPanda CSSのトークンに移行。見た目はほぼ変わらず、一部の色を統一（#1774, 10/31〜11/3）
  - CSS Modulesとglobals.cssの直書きの色をトークン経由に置換（#1788, 11/1）
  - カード・バッジ・詳細表示の直書きの色をトークン経由に置換（#1789, 11/2）
  - 画面ページ・編集画面・グラフ・地図・選択部品の直書きの色をトークン経由に置換（#1790, 11/3）
