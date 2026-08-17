# 履歴チェックスキル

knowhowファイルに記載されている「現在のバージョン」が、対応する履歴ファイル（`([履歴](./history/X))` リンク先）の最新エントリとして反映されているかを確認します。手動更新の際、現在バージョンの表記だけ更新して履歴ファイルへの追記を忘れるケースを検知するためのスキルです。

## 背景

knowhowファイル（例: `Platform.md`）には「現在のバージョン」が1件だけ表示され、`([履歴](./history/X))` で対応する履歴ファイルにリンクしている。履歴ファイル（例: `history/macOS.md`）には過去分も含めた更新履歴が新しい順で並ぶ。

更新作業は本来「現在のバージョン表記の更新」と「履歴ファイルへの追記」がセットだが、後者だけ忘れられることがある（例: 2026/07/01のmacOS Tahoe 26.5.2、2026/07/31のTahoe 26.6は`Platform.md`のみ更新され、`history/macOS.md`への追記が漏れていた）。

## チェック対象の対応表

`src/pages/knowhow/*.md` 内の `[履歴](./history/X)` / `([履歴](./history/X))` 形式のリンクを起点に、以下の組み合わせを確認する（新規追加された対応があれば都度拾う）：

| knowhowファイル内の項目 | 履歴ファイル |
|---|---|
| Platform.md - Windows 11 / Windows Insider | history/Windows.md |
| Platform.md - WSL2 | history/Wsl.md |
| Platform.md - macOS | history/macOS.md |
| Platform.md - ChromeOS Flex | history/Chrome.md |
| Platform.md - Ubuntu Desktop | history/UbuntuDesktop.md |
| Container.md - Rancher Desktop | history/Container.md |
| Kotlin.md - IntelliJ IDEA | history/IntelliJIDEA.md |
| NET.md - Visual Studio | history/VisualStudio.md |
| NET.md - .NET MAUI | history/MAUI.md |
| Rust.md - RustRover | history/RustRover.md |
| Rust.md - Tauri | history/Tauri.md |
| TypeScript.md - 近況確認アプリ | history/MorningStatusApp.md |
| TypeScript.md - Lynx | history/javascript/Lynx.md |
| TypeScript.md - React Native実行 | history/javascript/ReactNative.md |
| TypeScript.md - React Native for Windows | history/javascript/ReactNativeWindows.md |
| Flutter.md - flutter gpu | history/flutter/flutter_gpu.md |

Tools.md（VSCode, VisualStudioInsiders, SqlServer等）に同様のリンクが増えた場合も同じ方法で対象に加える。

## 判定方法

各対応ペアについて：

1. knowhowファイル側から「現在のバージョン名」と更新マーカー（`<<YYYY/MM/DD updated from X>>` または `**Updated YYYY/MM/DD from X**` / `**Updated YYYY/MM/DD**`）を抽出する
2. 履歴ファイル側の**先頭エントリ**（リストの一番上、最新）のバージョン名を確認する
3. 両者が一致しない場合は「履歴ファイル未反映」として報告する
   - knowhow側のバージョンが履歴ファイル内に存在するが先頭でない → 履歴ファイルへの追記漏れの可能性が高い
   - knowhow側のバージョンが履歴ファイル内に全く存在しない → 追記漏れが確定

## 実行手順

1. 対応表の各knowhowファイルを読み込み、`[履歴](./history/X)` を含む項目を洗い出す
2. 各項目の現在バージョンと更新マーカーを抽出する
3. 対応する `history/X.md` を読み込み、先頭エントリのバージョンを取得する
4. 一致しないペアを一覧化する
5. 結果を以下のフォーマットで報告する：

```
## 履歴ファイル未反映あり

| knowhowファイル | 項目 | 現在バージョン | 履歴ファイル最新エントリ |
|---|---|---|---|
| Platform.md | macOS | Tahoe 26.6.1 | Tahoe 26.5.1 |

## 一致（問題なし）

| knowhowファイル | 項目 | バージョン |
|---|---|---|
| Rust.md | RustRover | 2025.3.3 |
```

## 注意事項

- このスキルはチェックのみを行い、ファイルの自動修正は行わない（修正が必要な場合はユーザーに確認の上で追記する）
- 履歴ファイルが存在しない・リンク切れの項目があれば、その旨も報告する

$ARGUMENTS
