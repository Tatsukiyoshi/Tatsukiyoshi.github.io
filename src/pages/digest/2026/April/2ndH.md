---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年4月下期
---
2026年4月下期（2026/4/13～2026/4/30）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## [リスキリング](#リスキリング-1)
- OS: Windows 11 25H2 Build 26200.8246に自動更新。Windows Insider Preview Build 26300.8276にアップデート。macOS Tahoe 26.4.1にアップデート
- 開発ツール: Visual Studio Code 1.117.0・Codex 26.417.41555（macOS）・26.409.61251（Windows）・Zed 0.232.2（Windows）・0.233.7（macOS）・Cursor 3.1.15@Windowsに更新
- MCP: Claude Code 2.1.118@Windows Insider・2.1.118@macOSに更新
- .NET: Visual Studio Community 2026 18.5.0・.NET MAUI SR5.1（10.0.51）・.NET 10.0.6/9.0.15/8.0.26に更新
- Kotlin: Android Studio Quail 2026.1.1 Canary 1・Panda 2025.3.4 Canary 4に更新
- Flutter: VS2022アンインストール後のFlutter環境に無影響であることを確認（Android SDK 37.0.0・エミュレータ 36.6.4.0はAndroid Studio更新の影響）
- TypeScript: React Native Windows 0.82.3をVS2026 18.5.0 + Windows 11 SDK 10.0.26100環境で動作確認

## [営業日報システム](#営業日報システム-1)
- 対象期間中の更新なし

## [近況確認アプリ](#近況確認アプリ-1)
- v2.7.3: 手動リリースのトラックへのYouTubeリンク同期漏れを修正
- v3.0.0〜v3.0.5: ライブ一覧機能 - ライブ一覧・詳細ページ実装、地域ブロックマップ・都道府県別公演ページ実装、メンバー詳細への関連ライブセクション追加・ライブアルバムとライブ詳細の相互リンク、ご当地ライブバッジ追加、各種バグ修正
- v3.1.0〜v3.1.4: ライブ一覧を年別・地域別ページに分割、Amebaブログの近況取得をRSSフィードに切り替え、グループブログ投稿のメンバー別振り分け修正、デスクトップモードCSS修正
- v3.2.0〜v3.2.2: Windows向けInno Setupインストーラスクリプト追加、AppId GUID形式変更、リリース詳細のサブユニット名表示改善

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【4/13】
- **＜OS＞** macOSで、[macOS Tahoe 26.4.1](https://www.apple.com/jp/macos/) にアップデート
- **＜開発ツール＞** macOSで、[Codex 26.409.20454](https://openai.com/ja-JP/codex/) に更新

##  【4/15】
- **＜OS＞** [Windows 11 25H2 Build 26200.8246](https://www.microsoft.com/ja-jp/windows/?r=1) に自動更新
- **＜開発ツール＞** [Visual Studio Code 1.116.0](https://code.visualstudio.com/) に更新
- **＜開発ツール＞** Windowsで、[Codex 26.409.61251](https://openai.com/ja-JP/codex/) に更新
- **＜MCP＞** Windowsで、[Claude Code 2.1.109](https://github.com/anthropics/claude-code) に更新

##  【4/16】
- **＜MCP＞** macOSで、[Claude Code 2.1.109](https://github.com/anthropics/claude-code) に更新
- **＜開発ツール＞** macOSで、[Zed 0.232.2](https://zed.dev) に更新
- **＜Kotlin＞** [Android Studio Panda 2025.3.4 Canary 4](https://developer.android.com/studio) に更新
  - Android Emulator v.36.6.4 との組み合わせで更新を確認

##  【4/17】
- **＜開発ツール＞** macOSで、[Codex 26.415.21839](https://openai.com/ja-JP/codex/) に更新

##  【4/18】
- **＜OS＞** [Windows 11 Insider Preview (Dev Channel) Build 26300.8276 (Quality Update)](https://aka.ms/DevLatest) にアップデート
- **＜開発ツール＞** macOSで、[Codex 26.415.32059](https://openai.com/ja-JP/codex/) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.114](https://github.com/anthropics/claude-code) に更新

##  【4/19】
- **＜開発ツール＞** macOSで、[Codex 26.415.40636](https://openai.com/ja-JP/codex/) に更新
- **＜.NET＞** Windows Insiderで、[Visual Studio Community 2026 18.5.0](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes) に更新
  - [.NET MAUI 10.0.51](https://github.com/dotnet/maui) との組み合わせで、Pixel 10 Pro（Androidエミュレータ）上でスターターアプリの動作を確認
  - [.NET 10.0.6](https://dotnet.microsoft.com/ja-jp/download/dotnet) / [.NET 9.0.15](https://dotnet.microsoft.com/ja-jp/download/dotnet) / [.NET 8.0.26](https://dotnet.microsoft.com/ja-jp/download/dotnet) に更新
- **＜Kotlin＞** [Android Studio Quail 2026.1.1 Canary 1](https://developer.android.com/studio) に更新

##  【4/20】
- **＜開発ツール＞** Windowsで、[Zed 0.232.2](https://zed.dev/windows) に更新
- **＜開発ツール＞** [Cursor 3.1.15](https://www.cursor.com/) に更新

##  【4/21】
- **＜TypeScript＞** Windows Insiderで、[React Native Windows 0.82.3](https://microsoft.github.io/react-native-windows/) をVS2026 18.5.0 + Windows 11 SDK 10.0.26100環境で動作確認
- **＜Flutter＞** Windows Insiderで、VS2022アンインストール後のFlutter環境に無影響であることを確認
  - Android Studio更新の影響でAndroid SDK 36.1.0 → 37.0.0・エミュレータ 36.5.3.0 → 36.6.4.0に変化
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.116](https://github.com/anthropics/claude-code) に更新

##  【4/22】
- **＜開発ツール＞** [Visual Studio Code 1.117.0](https://code.visualstudio.com/) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.117](https://github.com/anthropics/claude-code) に更新

##  【4/23】
- **＜開発ツール＞** macOSで、[Zed 0.233.7](https://zed.dev) に更新
- **＜開発ツール＞** macOSで、[Codex 26.417.41555](https://openai.com/ja-JP/codex/) に更新
- **＜MCP＞** Windows Insiderで、[Claude Code 2.1.118](https://github.com/anthropics/claude-code) に更新
- **＜MCP＞** macOSで、[Claude Code 2.1.118](https://github.com/anthropics/claude-code) に更新

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v2.7.3
- 手動リリースのトラックへのYouTubeリンク同期漏れを修正。同一タイトルトラックへの重複API呼び出し削減のため、既存YouTubeリンクからタイトルキャッシュを事前構築するよう改善（#631, #632, 4/13）

### v3.0.0
- Prisma導入・Neonスキーマ実装・シードスクリプト追加（#609, 4/13）
- ライブ一覧・詳細ページを実装し、トップにライブ一覧リンクを追加（#516, 4/13）
- ライブ一覧の地図リンクを準備中表示にし、前後ナビテストのアサーションを修正（#641, #642, 4/13）
- 都道府県別公演件数の集計ロジックと地域ブロックマップ・都道府県別公演ページを実装（#518, #525, 4/13）
- Zodスキーマを導入しBlobバリデーターと型定義を一元化（#629, 4/13）
- メンバー詳細に関連ライブセクションを追加し、ライブアルバムとライブ詳細を相互リンク（#517, #526, 4/17）
- ご当地ライブバッジを追加し、dead code・テスト不足を解消（#520, #652, #653, 4/18）

### v3.0.1〜v3.0.5
- v3.0.1: メンバー詳細の関連ライブセクションが表示されないバグを修正。遅延初期化を実装（#654, 4/18）
- v3.0.2: Exa検索に `startPublishedDate` を追加し、古い投稿が近況として返される問題を修正（#658, 4/18）
- v3.0.3: ライブ詳細ナビテキスト修正・関連ライブ初期化エラーハンドリング・ツアージャンプ選択と折りたたみ機能追加（#657, #662, #660, 4/18）
- v3.0.4: YouTube取得対象をシングル・アルバム・コンピレーションに限定し、APIクォータ消費を削減（#659, 4/18）
- v3.0.5: メンバー詳細ツアージャンプで折りたたみセクション選択時、展開後の正確な位置へスクロール改善（#669, 4/19）

### v3.1.0〜v3.1.2
- v3.1.0: ライブ一覧を年別ページに分割し、地域別公演マップを地域ごとのページに分割。ライブ詳細に同一会場の過去公演一覧を追加（#648, #649, #650, 4/19）
- v3.1.1: VenueMapのuseMemo安定化・未使用関数削除・バッジ色CSS変数統一（#645, #646, #647, 4/19）
- v3.1.2: Amebaブログの近況取得をExa検索からRSSフィード直接取得に切り替え（#664, 4/19）

### v3.1.3〜v3.1.4
- v3.1.3: Amebaグループブログ（12〜16期生）のRSS投稿をメンバー名で振り分け、著作権表示を除去（#679, 4/20）
- v3.1.4: デスクトップモード用CSSをbody.desktop-modeにスコープ限定しWeb版の退行を解消。isDesktopMode=false時の編集ボタン非表示テストを追加（#680, #604, 4/21）

### v3.2.0〜v3.2.2
- v3.2.0: Windows向けInno Setupインストーラスクリプトを追加。バージョンはroot package.jsonから自動取得、build-installer.ps1でISSC.exeを自動検出してビルド（#684, 4/21）
- v3.2.1: installer.issのAppIdをGUID形式に変更し、アプリリネーム時のアンインストール情報引き継ぎとWindowsレジストリキーの衝突リスクを解消（#690, 4/21）
- v3.2.2: リリース詳細で上位ユニットに紐づく場合もリリース年に一致するサブユニット名を表示（#607, 4/21）
