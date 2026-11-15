---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年11月上期
---
2026年11月上期（2026/11/1～2026/11/15）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- OS: Windows Insider Experimental Previewを Build 29704.1000→29704.1010（Quality Update）→29708.1003へ更新
- 開発ツール: Visual Studio Code 1.144.0→1.146.0（1.145.0／1.145.2経由）、Zed 1.27.0→1.28.1（Windows）に更新
- Kotlin: Android Studio Rabbit 3 Canary 2（2026.2.3）に更新し、Kotlin 2.4.21、Android Emulator 37.3.6、Android Gradle Plugin 9.5.0を適用
- TypeScript: Playwright 1.64.1に更新（近況確認アプリのInstagram収集をUbuntu 26.04ランナーに対応）。近況確認アプリでPanda CSS 2.3.0の配色トークン活用を推進

## 営業日報システム
- 今期は更新なし

## 近況確認アプリ
- v11.10.1: 画面全体の色（カード・バッジ・チャート・地図・編集画面ほか）をPanda CSSのトークンに移行し、ダーク／ライトモード対応の土台を整備
- v12.0.0〜v12.0.2: ダークモード／ライトモードの切り替えを実装し、ライトモードで読みにくい文字を改善。Playwright更新でInstagram投稿の自動収集を復旧
- v12.1.0: 複数の音楽グループを扱うデータの土台を整備（モーニング娘。をグループの1つとして移行、ドライラン対応のメンバー投入）
- v13.0.0: 姉妹グループ（アンジュルム・Juice=Juice・つばきファクトリー・BEYOOOONDS・OCHA NORMA・ロージークロニクル）への拡張が完了

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【11/3】
- **＜開発ツール＞** [Visual Studio Code 1.144.1](https://code.visualstudio.com/)に更新
- **＜TypeScript＞** 近況確認アプリで、Panda CSS 2.3.0の配色トークン活用を推進
  - トップページとメンバー一覧で、トークン経由に置き換えた配色の表示を確認
- **＜Kotlin＞** Windows Insiderで、[Android Studio Rabbit 3 Canary 2](https://developer.android.com/studio)（2026.2.3）に更新
  - [Kotlin 2.4.21](https://kotlinlang.org/docs/home.html)、Android Emulator 37.3.6、Android Gradle Plugin 9.4.1→9.5.0を適用

##  【11/5】
- **＜開発ツール＞** [Visual Studio Code 1.145.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** Windows Insiderで、[Zed 1.27.0](https://zed.dev/windows)に更新

##  【11/7】
- **＜OS＞** [Windows 11 Insider Experimental (Future Platforms) Preview Build 29704.1000](https://blogs.windows.com/windows-insider/2026/11/06/announcing-new-builds-for-6-november-2026/)にアップデート（Build 29698.1000から。同日に再更新）
- **＜開発ツール＞** [Visual Studio Code 1.145.2](https://code.visualstudio.com/)に更新

##  【11/8】
- **＜TypeScript＞** 近況確認アプリで、[Playwright 1.64.1](https://playwright.dev/)に更新
  - Ubuntu 26.04のランナーでInstagram投稿の収集が動くようにするための更新（v12.0.2）

##  【11/10】
- **＜OS＞** Windows 11 Insider Experimental (Future Platforms) Preview Build 29704.1010（Quality Update）にアップデート

##  【11/13】
- **＜開発ツール＞** [Visual Studio Code 1.146.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** Windows Insiderで、[Zed 1.28.1](https://zed.dev/windows)に更新

##  【11/14】
- **＜OS＞** [Windows 11 Insider Experimental (Future Platforms) Preview Build 29708.1003](https://blogs.windows.com/windows-insider/2026/11/13/announcing-new-builds-for-13-november-2026/)にアップデート（Build 29704.1010から）

## 営業日報システム

- 今期の更新なし

## 近況確認アプリ

### v11.10.1
- v11.10.1: 画面全体の色（カード・バッジ・チャート・地図・編集画面ほか）をPanda CSSのトークンに移行。見た目はほぼ変わらず、一部の色を統一（#1774, 10/31〜11/3）
  - CSS Modulesとglobals.cssの直書きの色をトークン経由に置換（#1788, 11/1）
  - カード・バッジ・詳細表示の直書きの色をトークン経由に置換（#1789, 11/2）
  - 画面ページ・編集画面・グラフ・地図・選択部品の直書きの色をトークン経由に置換（#1790, 11/3）

### v12.0.0〜v12.0.2
- v12.0.0: ダークモード・ライトモードへの対応（システムとの連動、手動切り替えの実装）（#1735, 11/4〜11/6）
  - 切り替えボタンと基本配色を追加（#1800, 11/4）
  - ライトモードの残りのトークンの配色を定義（#1801, 11/5〜11/6）
- v12.0.1: ライトモードで読みにくかった文字（メンバーカラーの世代バッジ・メンバータグ・リリースのバッジ等）のコントラストを改善（#1805, 11/6〜11/7）
- v12.0.2: Playwrightを1.64.1に更新し、Ubuntu 26.04のランナーでInstagram投稿の自動収集が動くよう修正（#1823, 11/8）

### v12.1.0
- 複数の音楽グループを扱うデータの土台を整備（#1808, 11/8〜11/14）
  - 音楽グループの型と、グループごとのメンバー読み込み・メンバー索引を実装（#1812, 11/8）
  - units.jsonのモーニング娘。をgroups.jsonへ移すデータ移行スクリプトを実装（#1813, 11/8〜11/9）
  - sync-discographyとBlobファイル診断バッチをgroups.jsonに対応（#1814, 11/10）
  - upload-membersに音楽グループの指定を追加（#1815, 11/12〜11/13）
  - upload-membersの`--dry-run`と、ユニットをマージするパッチを追加（#1816, 11/14）
- ユニット一覧に音楽グループのカードを表示し、モーニング娘。が消える不具合を修正（#1826, 11/9）

### v13.0.0
- 姉妹グループへの拡張が完了（#1803, 11/9〜11/15）
  - 音楽グループのトップ画面（/groups/{groupId}）と、他グループのメンバー・リリース詳細への導線を実装（#1817, 11/9）
  - 他の音楽グループのメンバー・アーティストを、ラジオ・イベント・ユニット・曲・プレイリスト・メンバーの画面に表示（#1818〜#1820, 11/13〜11/15）
