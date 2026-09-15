# バージョンチェックスキル

knowhowファイルに記載されたツール・言語・フレームワークについて、最新リリースが存在するかを確認し、更新可能なものを一覧で報告します。

## チェック対象ファイル

- `src/pages/knowhow/Platform.md` - OS関連
- `src/pages/knowhow/Tools.md` - 開発ツール
- `src/pages/knowhow/Mcp.md` - MCP/Claude関連
- `src/pages/knowhow/NET.md` - .NET関連
- `src/pages/knowhow/Rust.md` - Rust関連
- `src/pages/knowhow/TypeScript.md` - TypeScript/JavaScript関連
- `src/pages/knowhow/Kotlin.md` - Kotlin/Android Studio関連
- `src/pages/knowhow/Flutter.md` - Flutter関連
- `src/pages/knowhow/Container.md` - Docker/コンテナ関連

## バージョン情報の抽出方法

knowhowファイル内で以下のパターンを探してバージョンと日付を取得する：

- リンクテキスト: `[ToolName X.Y.Z](URL)` → バージョンはリンクテキストから
- 更新マーカー: `<<YYYY/MM/DD updated from X.Y.Z>>` → 現在バージョンはリンクテキスト、旧バージョンはマーカーから
- テーブル行: `|ToolName X.Y.Z|...|YYYY/MM/DD|URL|` → バージョンはセル内テキストから

## 最新バージョンの確認方法

ツールの種類に応じて以下の方法を使い分ける：

### cargo info（Rustクレート）
```bash
cargo info <crate-name> 2>&1 | grep "^version:"
```
対象: Rust本体以外のクレート（tauri, dioxus, bevy, slint, cargo-generate, wasm-pack 等）

### rustup check（Rustツールチェーン）
```bash
rustup check
```
対象: Rust本体のバージョン確認

### npm/bun（npmパッケージ）
```bash
npm info <package-name> version
```
対象: Node.js, Bun, Vite, Next.js, React, Expo, Playwright 等

### winget（Windowsアプリ）
```bash
winget show <package-id> --versions 2>&1 | head -10
```
対象: VS Code, Docker Desktop 等（package-idはwingetで確認）

### WebFetch（公式サイト）
`[バージョン](URL)` のURLに対してWebFetchを使いバージョンを確認する。
対象: Rust（rust-lang.org）, Flutter, Android Studio, Claude Code, Zed, Cursor 等

## LTSポリシーの考慮

以下のツールはLTS（Long Term Support）等の複数トラックの運用ポリシーを持つため、単純な「最新版」チェックではなく、ポリシーに沿った基準で判定する。

- **Node.js**: 偶数メジャー（18, 20, 22, 24, 26...）が10月にActive LTSへ移行し、以降約30ヶ月サポートされる。奇数メジャー（23, 25, 27...）はLTSに移行しない「Current」限定リリース
  - WebFetchで https://nodejs.org/en/about/previous-releases を確認し、現在のメジャーバージョンのトラック（Current / Active LTS / Maintenance）を判定
  - 現在がLTS対象メジャーの場合、「最新」は**同一メジャー内の最新パッチ・マイナー**とする。より新しいメジャーが既にLTSへ移行済みの場合のみ、乗り換え候補として別途注記する
  - 現在がLTS非対象の奇数メジャー（Current限定）の場合は、直近のLTSメジャーへの切り替えを提案する

- **.NET（.NET / ASP.NET Core / EF Core共通）**: 偶数メジャー（8, 10, 12...）がLTS（3年サポート）、奇数メジャー（9, 11...）がSTS（18ヶ月）
  - WebFetchで https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core を確認し、現在のメジャーバージョンの区分（LTS/STS）とEOL予定を確認
  - 現在がLTSメジャーの場合、「最新」は**同一メジャー内の最新パッチ**とする。新しいLTSメジャーが既にリリース済みの場合のみ、乗り換え候補として別途注記する

- **Oracle JDK / OpenJDK**: 2年ごと（17, 21, 25, 29...）のリリースがLTS、その間の6ヶ月サイクルリリース（26, 27, 28等）は非LTS
  - WebFetchで https://www.oracle.com/java/technologies/java-se-support-roadmap.html を確認し、現在のバージョンがLTSかどうか、次のLTSリリース時期を確認
  - 現在がLTSの場合、非LTSの中間リリースへの更新は「更新あり」に含めず、**同一メジャー内の最新パッチ**のみを基準にする

### 報告への反映
- 該当ツールは、テーブルの「最新」列を**同一トラック（LTS/STS等）内の最新パッチ**で埋める（非LTS/非対象トラックの最新ビルドをそのまま「最新」として提示しない）
- 現在のトラックより新しいLTS/STSメジャーが既にリリース済みの場合は、行末や備考欄に一言注記する（例:「次期LTSはNode.js 26（2026/10 LTS移行予定）」）
- ツール名の後ろに `(LTS)` / `(STS/Current)` 等トラックを付記し、どの基準で判定したかを明示する

## 確認手順

1. 各knowhowファイルを読み込む

2. バージョン情報を抽出し、チェック方法を判定する
   - クレート名で検索できるもの → cargo info
   - npmパッケージ → npm info
   - 公式サイトURLがある → WebFetch
   - Node.js / .NET / Oracle JDK・OpenJDK → 上記「LTSポリシーの考慮」に従う
   - 確認方法が不明なものはスキップしてその旨を報告

3. 最新バージョンを取得する
   - 複数ツールを並列で確認して効率化する
   - LTSポリシーを持つツールは、まずトラック（LTS/STS/Current）を確認したうえで、同一トラック内の最新版を取得する

4. 結果を以下のフォーマットで報告する：

```
## 更新あり

| ファイル | ツール | 現在 | 最新 | 最終更新 |
|----------|--------|------|------|----------|
| Rust.md  | Dioxus | 0.7.3 | 0.7.6 | 2026/01/23 |
| NET.md   | .NET (LTS) | 10.0.11 | 10.0.13 | 2026/08/13 |
| TypeScript.md | Node.js (LTS) | 24.1.0 | 24.9.0 | 2025/06/01 |

## 最新（更新不要）

| ファイル | ツール | バージョン |
|----------|--------|-----------|
| Rust.md  | Tauri  | 2.10.3    |

## 確認できなかったもの

- RustRover: 公式サイトからバージョン取得できず
```

LTSポリシーを持つツール（Node.js / .NET / Oracle JDK・OpenJDK）で、現在より新しいLTS/STSメジャーが既にリリース済みの場合は、該当行の末尾に一言注記を添える（例:「次期LTSはNode.js 26（2026/10 LTS移行予定）」）。

## 注意事項

- OS（Windows, macOS, ChromeOS）はバージョンチェック不要
- 「Last Updated」列の日付が古いものは優先的に確認する
- メジャーバージョンアップ（例: 1.x → 2.x）は互換性リスクがあるため⚠️マークを付ける
- 同一ツールが複数OS・マシンで異なるバージョンの場合は、Windows Insiderのバージョンを基準とする
- Node.js / .NET / Oracle JDK・OpenJDKは、最新版ではなく現在のトラック（LTS/STS等）に沿った推奨バージョンを基準に判定する（詳細は「LTSポリシーの考慮」参照）。非LTSの中間リリースへの追従は提案しない
