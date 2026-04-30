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

## 確認手順

1. 各knowhowファイルを読み込む

2. バージョン情報を抽出し、チェック方法を判定する
   - クレート名で検索できるもの → cargo info
   - npmパッケージ → npm info
   - 公式サイトURLがある → WebFetch
   - 確認方法が不明なものはスキップしてその旨を報告

3. 最新バージョンを取得する
   - 複数ツールを並列で確認して効率化する

4. 結果を以下のフォーマットで報告する：

```
## 更新あり

| ファイル | ツール | 現在 | 最新 | 最終更新 |
|----------|--------|------|------|----------|
| Rust.md  | Dioxus | 0.7.3 | 0.7.6 | 2026/01/23 |

## 最新（更新不要）

| ファイル | ツール | バージョン |
|----------|--------|-----------|
| Rust.md  | Tauri  | 2.10.3    |

## 確認できなかったもの

- RustRover: 公式サイトからバージョン取得できず
```

## 注意事項

- OS（Windows, macOS, ChromeOS）はバージョンチェック不要
- 「Last Updated」列の日付が古いものは優先的に確認する
- メジャーバージョンアップ（例: 1.x → 2.x）は互換性リスクがあるため⚠️マークを付ける
- 同一ツールが複数OS・マシンで異なるバージョンの場合は、Windows Insiderのバージョンを基準とする
