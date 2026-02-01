# ダイジェスト更新スキル

knowhowファイルから更新情報を収集し、ダイジェストファイルを更新します。

## ダイジェストの構造

### ファイル配置
- `digest/YYYY/Month/1stH.md` - 上期（第1週〜第2週）
- `digest/YYYY/Month/2ndH.md` - 下期（第3週以降）
- 月名は英語（January, February, March, ...）

### フォーマット
```yaml
---
title: YYYY年M月上期/下期
layout: single
classes: wide
sidebar:
  nav: digest
---
YYYY年M月上期/下期（YYYY/M/D～YYYY/M/D）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic
- 主なトピック（1-3行程度）

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください
---
# Daily
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
- Kotlin - Android Studio, IntelliJ IDEA, Kotlin
- Container - Docker, Rancher Desktop等

## 参照すべきファイル
更新内容の詳細を確認する際は、以下のファイルを参照してください：
- `knowhow/Platform.md` - OS関連（Windows, macOS, Chrome OS Flex, WSL）
- `knowhow/Tools.md` - 開発ツールの詳細（エディタ等）
- `knowhow/Mcp.md` - MCP/Claude関連の詳細
- `knowhow/NET.md` - .NET関連の詳細
- `knowhow/Rust.md` - Rust関連の詳細
- `knowhow/TypeScript.md` - JavaScript/TypeScript関連の詳細
- `knowhow/Kotlin.md` - Kotlin/Android Studio/IntelliJ IDEA関連の詳細
- `knowhow/Container.md` - Docker/コンテナ関連の詳細

## 更新情報の判定方法
knowhowファイル内で以下のパターンを確認して更新日を特定する：
- `Last Updated` 列の日付
- `<<YYYY/MM/DD updated>>` マーカー
- `<<YYYY/MM/DD installed>>` マーカー

## 更新手順

1. 今日の日付から対象のダイジェストファイルを特定
   - 第1週〜第2週: 1stH.md
   - 第3週以降: 2ndH.md
   - 判定は週単位（日付ではなく、その月の第何週目かで判定）

2. 対象ファイルの存在確認
   - ファイルが存在しない場合は、ディレクトリとファイルを新規作成
   - フォーマットに従ってヘッダーを作成

3. ユーザーの指示を確認
   - 「knowhow配下を参照して収集」の場合: 参照すべきファイルを読み込み、対象期間の更新を自動収集
   - 個別の更新内容を提供された場合: その内容をもとに更新

4. knowhowファイルから更新情報を収集（自動収集の場合）
   - 各knowhowファイルを読み込む
   - 対象期間（上期: 第1週〜第2週、下期: 第3週以降）の更新を抽出
   - バージョン番号、公式URL、補足説明を確認

5. 適切なカテゴリと形式でエントリを追加
   - 記載順は、カテゴリ一覧の順とする
   - 既存の日付エントリがあれば追記
   - なければ新規に日付セクションを作成
   - 同一日付内では、カテゴリ順に記載

6. 関連ファイルの更新（新規ダイジェスト作成時）
   - `digest/list.md` - ダイジェスト一覧に新しいエントリを追加
     - 該当年月のセクションがなければ作成
     - 形式: `- [上期/下期（YYYY/M/D～YYYY/M/D）](YYYY/Month/1stH または 2ndH)`
   - `README.md` - 最新ダイジェストのリンクを更新
     - 「最新ダイジェスト」の行を新しいダイジェストへのリンクに変更

$ARGUMENTS
