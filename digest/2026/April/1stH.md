---
title: 2026年4月上期
layout: single
classes: wide
sidebar:
  nav: digest
---
2026年4月上期（2026/4/1～2026/4/12）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## [リスキリング](#リスキリング-1)
- OS: Windows Insider Preview Dev Channel Build 26300.8155（Quality Update）にアップデート。ChromeOS Flex 146.0.7680.184にアップデート。Ubuntu Desktop 26.04（development branch）にアップグレード
- 開発ツール: Visual Studio Code 1.114.0→1.115.0に更新。Cursor 3.0.9に更新。AntiGravity 1.21.9@Windows・1.22.2@ChromeOS Flexに更新。Zed 0.230.1@Windowsに更新
- MCP: macOSでClaude Code 2.1.92に更新
- TypeScript: Windows InsiderでReact Native Windows 0.82.3（React Native 0.82.1・React 19.2.4）に更新
- Kotlin: Android Studio Panda 2025.3.4 Canary 2（Android Emulator v.36.6.2）・IntelliJ IDEA 2026.1に更新

## [営業日報システム](#営業日報システム-1)
- テスト: PlaywrightのE2EテストにScreencast Capture Fixtureを追加・ローカル実行手順とスクリーンキャスト記録を整備（4/1）
- テスト: reports.spec.ts の前提依存による不安定テストを日付フィルターフォールバックで安定化（4/1）
- テスト: WebKitフォームsubmit後の不安定テストを修正、スクリーンキャストフィクスチャを全reportスペックに適用（4/2）

## [近況確認アプリ](#近況確認アプリ-1)
- v1.5.0: ユニット一覧・詳細ページを実装。メンバー詳細に所属ユニットセクション、リリース詳細・曲詳細にユニット情報、プレイリスト詳細にユニット遷移リンクを追加
- v2.0.0: MusicBrainz MBID基盤への刷新。MBID照合によるディスコグラフィー自動集約とアーティスト名ルックアップ改善
- v2.5.0〜v2.6.1: サブユニットMBID登録・全MBID対応ディスコグラフィー自動取得・メンバープロフィールへの出身地追加

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【4/2】
- **＜開発ツール＞** [Visual Studio Code 1.114.0](https://code.visualstudio.com/) に更新

##  【4/3】
- **＜開発ツール＞** [Cursor 3.0.9](https://www.cursor.com/) に更新
- **＜Kotlin＞** [Android Studio Panda 2025.3.4 Canary 2](https://developer.android.com/studio) に更新
  - Android Emulator v.36.6.2 との組み合わせで更新を確認

##  【4/4】
- **＜開発ツール＞** Windowsで、[AntiGravity 1.21.9](https://antigravity.google/) に更新
- **＜開発ツール＞** Windowsで、[Zed 0.230.1](https://zed.dev/windows) に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.92](https://github.com/anthropics/claude-code) に更新
- **＜TypeScript＞** Windows Insiderで、[React Native Windows 0.82.3](https://microsoft.github.io/react-native-windows/) に更新
  - React Native 0.82.1・React 19.2.4 との組み合わせでスターターアプリの動作を確認

##  【4/5】
- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8155 (Quality Update)](https://aka.ms/DevLatest) にアップデート

##  【4/6】
- **＜Kotlin＞** [IntelliJ IDEA 2026.1](https://www.jetbrains.com/ja-jp/idea/) に更新

##  【4/8】
- **＜OS＞** [ChromeOS Flex 146.0.7680.184](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex) にアップデート
- **＜OS＞** [Ubuntu Desktop 26.04 (development branch)](https://jp.ubuntu.com/download) にアップグレード
- **＜開発ツール＞** [Visual Studio Code 1.115.0](https://code.visualstudio.com/) に更新
- **＜開発ツール＞** ChromeOS Flexで、[AntiGravity 1.22.2](https://antigravity.google/) に更新

##  【4/9】
- **＜OS＞** Ubuntu Desktopで、Linux Kernel 7.0.0-12 に更新

## 営業日報システム

- テスト: PlaywrightのE2EテストにScreencast Capture Fixtureを追加（4/1）
- ドキュメント: ローカルE2E実行手順・スクリーンキャスト記録手順を追加（#297）（4/1）
- テスト: reports.spec.ts の前提依存による不安定テストを日付フィルターフォールバックで安定化（#298）（4/1）
- テスト: WebKit フォーム submit 後のリスト取得待機を追加し不安定テストを修正（4/2）
- テスト: スクリーンキャストフィクスチャを残りの report スペックに適用（4/2）
- ドキュメント: WebKit CI リトライでシード下書きが枯渇する問題の開発メモを追加（4/2）

## 近況確認アプリ

### v1.5.0（4/5）
- ユニット一覧・詳細ページを実装（#535・#536）
- メンバー詳細に所属ユニットセクションを追加（#537）
- リリース詳細・曲詳細にユニット情報を追加（#538・#572）
- プレイリスト詳細にユニット遷移リンクを追加（#539）
- sync-discography で units.json を Vercel Blob にアップロード（#574）
- メンバー一覧にユニット一覧へのリンクを追加（#576）

### v2.0.0（4/6）
- Unit.mbid / Track.artistMbid フィールドを型定義に追加（#580）
- units.json に MBID を追加（#582）
- sync-discography に artistMbid 取得・MBID 優先照合・artist-credit 再取得・releaseIds 自動集約を追加（#583）
- releaseIdsAddedCount を ID ベースの countAddedReleaseIds にリファクタリング（#590, #584）
- プレイリスト詳細のアーティスト名ルックアップを Track.unitId ベースに変更し、コンピレーションアルバムでも正しいユニット名を表示（#585）

### v2.5.0〜v2.6.1（4/7）
- v2.5.0: サブユニットの MBID を調査・登録。全 MBID を対象にユニット・サブユニット名義リリースを自動取得できるよう基盤を整備。環境変数 ARTIST_MBID を廃止（#594, #595, #596）
- v2.6.0: メンバープロフィールに出身地（birthplace）を追加。全48メンバーの出身地データを登録し、メンバー詳細ページに表示（#519）
- v2.6.1: メンバー詳細の出身地表示に「出身地」見出しが欠けていたバグを修正（#601）
