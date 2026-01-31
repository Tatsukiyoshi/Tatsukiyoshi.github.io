---
title:  ダイジェスト更新手順
layout: single
classes:  wide
sidebar:
  nav: environment
---
# 概要
`/update-digest` スキルは、日々の学習・開発活動をダイジェストファイルに記録するためのClaude Codeスキルです。

# 使い方
1. Claude Codeで `/update-digest` と入力
2. 更新内容を伝える
   - ソフトウェアのアップデート（ツール名、バージョン）
   - 新しいツールの導入
   - 学習の進捗
3. スキルが自動で以下を実行
   - 今日の日付から対象ファイルを特定
   - 関連するknowhowファイルからバージョン・URLを補足
   - 適切なカテゴリ・形式でダイジェストに追記

# ダイジェストファイルの構造
## ファイル配置
- `digest/YYYY/Month/1stH.md` - 上期（第1週〜第2週）
- `digest/YYYY/Month/2ndH.md` - 下期（第3週以降）

## フォーマット
```yaml
---
title: YYYY年M月上期/下期
layout: single
classes: wide
sidebar:
  nav: digest
---
```

## セクション構成
1. **Topic** - 期間中の主なトピック（1-3行程度）
2. **Daily** - 日付ごとの更新記録

# エントリ形式
```markdown
##  【M/D】
- **＜カテゴリ＞**  [ツール名 バージョン](URL)に更新/導入
  - 補足情報（必要に応じて）
```

# カテゴリ一覧

| カテゴリ | 対象 |
|---------|------|
| OS | Windows, macOS, Chrome OS Flex |
| 開発ツール | エディタ、IDE以外のツール |
| MCP | Claude Desktop, Claude Code, MCP関連 |
| .NET | Visual Studio, .NET, MAUI, Blazor |
| Rust | Rust言語、RustRover、Rust製ツール |
| JavaScript | Node.js, Bun, React, Svelte等 |
| Kotlin | Android Studio, Kotlin |
| Container | Docker, Rancher Desktop等 |

# 参照ファイル
更新内容の詳細確認に使用するファイル：
- `knowhow/NET.md` - .NET関連
- `knowhow/Mcp.md` - MCP/Claude関連
- `knowhow/Tools.md` - 開発ツール
- `knowhow/Rust.md` - Rust関連
- `knowhow/JavaScript.md` - JavaScript関連
