# ダイジェスト更新スキル

ユーザーから提供された更新情報をもとに、ダイジェストファイルを更新します。

## ダイジェストの構造

### ファイル配置
- `digest/YYYY/Month/1stH.md` - 上期（第1週〜第2週）
- `digest/YYYY/Month/2ndH.md` - 下期（第3週以降）

### フォーマット
```yaml
---
title: YYYY年M月上期/下期
layout: single
classes: wide
sidebar:
  nav: digest
---
```

### セクション構成
1. **Topic** - 期間中の主なトピック（1-3行程度）
2. **Daily** - 日付ごとの更新記録

### エントリ形式
```markdown
##  【M/D】
- **＜カテゴリ＞**  [ツール名 バージョン](URL)に更新/導入
  - 補足情報（必要に応じて）
```

## カテゴリ一覧
- OS - Windows, macOS, Chrome OS Flex
- 開発ツール - エディタ、IDE以外のツール
- MCP - Claude Desktop, Claude Code, MCP関連
- .NET - Visual Studio, .NET, MAUI, Blazor
- Rust - Rust言語、RustRover、Rust製ツール
- JavaScript - Node.js, Bun, React, Svelte等
- Kotlin - Android Studio, Kotlin
- Container - Docker, Rancher Desktop等

## 参照すべきファイル
更新内容の詳細を確認する際は、以下のファイルを参照してください：
- `knowhow/NET.md` - .NET関連の詳細
- `knowhow/Mcp.md` - MCP/Claude関連の詳細
- `knowhow/Tools.md` - 開発ツールの詳細
- `knowhow/Rust.md` - Rust関連の詳細
- `knowhow/JavaScript.md` - JavaScript関連の詳細

## 更新手順

1. 今日の日付から対象のダイジェストファイルを特定
   - 第1週〜第2週: 1stH.md
   - 第3週以降: 2ndH.md

2. ユーザーから更新内容を聞く
   - ソフトウェアのアップデート
   - 新しいツールの導入
   - 学習の進捗

3. 関連するknowhowファイルを確認して詳細を補足
   - バージョン番号
   - 公式URL
   - 補足説明

4. 適切なカテゴリと形式でエントリを追加
   - 既存の日付エントリがあれば追記
   - なければ新規に日付セクションを作成

$ARGUMENTS
