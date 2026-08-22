---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年8月下期
---
2026年8月下期（2026/8/14～2026/8/31）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- **＜OS＞** [ChromeOS Flex 151.0.7922.141](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)、[macOS Tahoe 26.6.2](https://www.apple.com/jp/os/macos/)にアップデート。Windows Insiderも[Build 26340.9212](https://blogs.windows.com/windows-insider/2026/08/17/announcing-new-builds-for-17-august-2026/)→[26340.9233](https://blogs.windows.com/windows-insider/2026/08/21/announcing-new-builds-for-21-august-2026/)と順次更新
- **＜開発ツール＞** macOSで[Zed 1.15.0](https://zed.dev)に更新。Windowsでも[Zed](https://zed.dev/windows)を1.15.1→1.16.1と更新し、[Visual Studio Code 1.134.0](https://code.visualstudio.com/)・[PowerShell 7.6.5](https://github.com/PowerShell/PowerShell)にも更新
- **＜Kotlin＞** Windows Insiderで、[Android Studio](https://developer.android.com/studio)をQuail 4 Canary 4からRabbit 1 Canary 1へ更新
- **＜TypeScript＞** 近況確認アプリの開発環境で、[Blume 1.5.1](https://useblume.dev/)に更新。[Bun](https://bun.sh/)もWindows Insider・macOSともに1.4.0に更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v9.16.4〜v9.19.0: メンバー詳細画面の近況履歴・最新の近況表示を改善し、過去投稿の新着誤表示・Amebaブログ投稿日時保存の不具合を修正。後半はTikTok新着投稿セクションへのアカウント別見出し追加、TikTok公式アカウント（モーニング娘。公式・ミニモちゃん）向け詳細画面の新設を実施
- v9.20.0〜v9.22.6: メンバー詳細・新着投稿セクションのSNS表示順を新着順に統一し、新着投稿は公式/現役/OGの3ブロック構成へ再編。フェス・ツアーの登録一括バッチを新設したほか、都道府県別公演画面のフェスリンク不具合修正、デスクトップアプリ同梱Bunバイナリの更新（macOS起動不具合の修正含む）等を実施

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【8/15】
- **＜開発ツール＞** macOSで、[Zed 1.15.0](https://zed.dev)に更新

##  【8/16】
- **＜OS＞** [ChromeOS Flex 151.0.7922.141](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)にアップデート
  - Debianも12.14から12.15に更新

##  【8/17】
- **＜TypeScript＞** 近況確認アプリの開発環境で、[Blume 1.5.1](https://useblume.dev/)に更新

##  【8/18】
- **＜OS＞** Windows Insiderで、[Windows 11 Insider Experimental Preview Build 26340.9212 (Feature Update)](https://blogs.windows.com/windows-insider/2026/08/17/announcing-new-builds-for-17-august-2026/)にアップデート
- **＜開発ツール＞** [PowerShell 7.6.5](https://github.com/PowerShell/PowerShell)に更新

##  【8/19】
- **＜開発ツール＞** [Visual Studio Code 1.134.0](https://code.visualstudio.com/)に更新。Windowsで、[Zed 1.15.1](https://zed.dev/windows)にも更新
- **＜Kotlin＞** Windows Insiderで、[Android Studio](https://developer.android.com/studio)をQuail 4 Canary 4からRabbit 1 Canary 1へ更新
  - Android SDK Command-line Tools 23.0 / Android Emulator v.37.2.5に更新

##  【8/20】
- **＜開発ツール＞** Windowsで、[Zed 1.16.1](https://zed.dev/windows)に更新

##  【8/21】
- **＜OS＞** [macOS Tahoe 26.6.2](https://www.apple.com/jp/os/macos/)にアップデート

##  【8/22】
- **＜OS＞** Windows Insiderで、[Windows 11 Insider Experimental Preview Build 26340.9233 (Feature Update)](https://blogs.windows.com/windows-insider/2026/08/21/announcing-new-builds-for-21-august-2026/)にアップデート
- **＜TypeScript＞** Windows Insiderで、[Bun 1.4.0](https://bun.sh/)に更新。macOSでも、Bunを1.3.14から[1.4.0](https://bun.sh/)に更新

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v9.16.4（前期クローズ後の更新）
- v9.16.4: メンバー詳細画面「最新の近況」「近況履歴」の表示改善。情報ソースが1件（ブログ投稿）のときは本文自体をソースへのリンクにし、生URL表示を省略（#1496, 8/14）

### v9.16.5〜v9.17.0
- v9.16.5: 収集が遅れた過去の投稿が新着投稿・デイリーダイジェストで実際の投稿日と分からず表示される不具合を修正。該当投稿には実際の投稿日時を併記。あわせてAmebaブログ投稿の投稿日時が時刻情報を切り捨てて保存されていた不具合を修正（#1502, 8/15）
- v9.17.0: メンバー詳細画面「近況履歴」を改善。直近30日以内の履歴が無くても導線を常に表示し、「さらに古い履歴を表示」操作で30日を超える履歴（最大100件）を確認可能に。「最新の近況」も直近30日以内の更新が無い場合は「近況なし」表示に変更（#1503, 8/15）

### v9.18.0〜v9.19.0
- v9.18.0: トップページ「新着投稿」セクションのTikTok部分に、投稿元アカウント（モーニング娘。公式／ミニモちゃん／OGメンバー個別）ごとの見出し表示を追加（#1507, 8/16）
- v9.19.0: TikTok公式アカウント（モーニング娘。公式・ミニモちゃん）に、YouTube同様の詳細画面（/tiktok/official/[accountId]）を追加。/tiktok画面は各アカウントへのリンクカードのみを表示するように変更（#1508, 8/17）

### v9.20.0〜v9.21.1
- v9.20.0: メンバー詳細画面のSNS投稿部（Ameba投稿/Exa検索結果・Instagram投稿・TikTok投稿・YouTube投稿）を固定順から、各セクションの最新投稿日時が新しい順に並び替えるよう変更。あわせて「最新の近況」見出しを廃止し、情報ソースに応じて「Ameba投稿」「Exa検索結果」を動的表示するよう改善（#1513, 8/17）
- v9.21.0: ホーム画面の新着投稿セクションを、SNS別の4ブロック固定順から「公式」「現役」「OG」の3ブロック構成へ再編。各ブロック内はSNSを問わず最新投稿日時順に並び替え表示するよう変更。あわせて「過去のこの日」セクションを新着投稿セクションより上に表示するよう順序変更（#1514, 8/17）
- v9.21.1: ラジオ放送回詳細画面のオンエアリストで、モーニング娘。以外の楽曲にアーティスト名を併記するよう改善（#1501, 8/18）

### v9.22.0〜v9.22.6
- v9.22.0: フェス・ツアーの公演・会場・セットリストを一括登録する手動実行バッチを新設。会場の緯度経度・都道府県の自動取得、フェス/ツアーIDの自動採番、セットリストの楽曲自動紐付けに対応（#1520, 8/19）
- v9.22.1: メイボンソワの選曲データ収集（定期実行停止済）で、外部アーティスト楽曲が緩いタイトル一致によりモーニング娘。関連楽曲へ誤って紐付けられる不具合を修正（#1523, 8/20）
- v9.22.2: デスクトップアプリ（Electrobun）に同梱するBunバイナリをBun 1.4へ更新（#1534, 8/21）
- v9.22.3: 都道府県別公演画面のフェス一覧で、会場名でなくフェス名がリンクになっておりライブ一覧と表示構造が異なっていた不具合を修正。あわせてフェスの自動採番IDが不正な形式（例: `2026--1`）になる不具合を修正（#1527, 8/21）
- v9.22.4: 都道府県別公演画面のフェス一覧リンク修正時に検出した、フェスの自動採番IDが不正な形式になっていた既存データを是正するパッチスクリプトを追加（#1538, 8/22）
- v9.22.5: トップページ「過去のこの日」セクションで、ライブの時刻が0:00の場合も表示されていた不具合を修正（#1531, 8/22）
- v9.22.6: macOSデスクトップアプリ起動時、同梱Bunバイナリのパス解決に失敗しNext.jsサーバーへ接続できない不具合を修正（#1535, 8/22）
