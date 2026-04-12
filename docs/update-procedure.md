# コンテンツ更新手順

Astro 移行後（#756）の更新手順をまとめます。

## ローカル確認

```bash
bun install        # 初回のみ
bun run dev        # 開発サーバー起動 → http://localhost:4321
bun run build      # 本番ビルド確認（dist/ に出力）
```

---

## ダイジェストの更新

`/update-digest` スキルで対応（詳細は `.claude/commands/update-digest.md` を参照）。

**主なファイルパス（Astro 移行後）:**

| 操作 | ファイル |
|---|---|
| ダイジスト記事 | `src/pages/digest/YYYY/Month/1stH.md` または `2ndH.md` |
| 一覧ページ | `src/pages/digest/list.md` |
| トップページの「最新ダイジェスト」リンク | `src/pages/index.md` |

**新規ダイジェスト作成時の frontmatter:**

```yaml
---
layout: ../../../../layouts/DigestLayout.astro
title: YYYY年M月上期
---
```

> `list.md` のみ `../../layouts/DigestLayout.astro`（階層が浅いため）

---

## knowhow ページの更新

`src/pages/knowhow/*.md` を直接編集する。  
frontmatter の `layout` と `nav` は変えないこと。

### 新しい knowhow ページの追加

1. `src/pages/knowhow/NewPage.md` を作成：

   ```yaml
   ---
   layout: ../../layouts/KnowhowLayout.astro
   title: ページタイトル
   nav: programming  # または environment
   ---
   ```

2. サイドバーナビに追加する場合は `src/layouts/BaseLayout.astro` の `navItems` を編集：

   ```ts
   programming: [
     // ...既存エントリ
     { title: 'NewPage', url: '/knowhow/NewPage' },
   ],
   ```

---

## 画像の追加

`images/<カテゴリ>/ファイル名.png` に置き、Markdown から絶対パスで参照する：

```markdown
![説明](/images/Kotlin/20260412_example.png)
```

> 相対パス（`![img](example.png)`）はビルドエラーになるため使用不可。  
> 詳細: `docs/DEVELOPMENT_NOTES.md` §1

---

## デプロイ

`main` ブランチへのマージで GitHub Actions (`deploy.yml`) が自動デプロイする。

手動でデプロイする場合：  
GitHub → Actions タブ → `Deploy to GitHub Pages` → `Run workflow`
