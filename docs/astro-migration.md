# Jekyll から Astro への移行記録（#756）

## 概要

2026/04/12 に Jekyll (minimal-mistakes テーマ) から Astro 5.x に移行した。

---

## 変更点の対応表

| 項目 | 移行前（Jekyll） | 移行後（Astro） |
|------|-----------------|----------------|
| フレームワーク | Jekyll 4.4.1 + minimal-mistakes 4.27.3 | Astro 5.x |
| ページ定義 | `knowhow/*.md`, `digest/**/*.md` | `src/pages/knowhow/*.md`, `src/pages/digest/**/*.md` |
| トップページ | `README.md`（frontmatter で `/` にルーティング） | `src/pages/index.md` |
| レイアウト | `_layouts/default.html`（Liquid テンプレート） | `src/layouts/*.astro` |
| ナビゲーション | `_data/navigation.yml` | `src/layouts/BaseLayout.astro` 内にハードコード |
| スタイル | minimal-mistakes CSS（リモートテーマ） | `src/styles/global.css`（独自CSS、mint テーマを参考） |
| コードコピーボタン | `assets/css/copy-button.css` + `assets/js/copy-code.js` | `src/layouts/BaseLayout.astro` 内に統合 |
| デプロイ | GitHub Pages の Jekyll 自動ビルド | GitHub Actions (`.github/workflows/deploy.yml`) |
| 静的アセット | リポジトリルートの `images/`, `captures/` | `vite-plugin-static-copy` で `dist/` にコピー |
| 依存管理 | `Gemfile` / Ruby | `package.json` / Bun |

## 削除したもの

- `Gemfile`, `Gemfile.lock`, `_config.yml`
- `_data/navigation.yml`
- `_layouts/default.html`
- `assets/css/copy-button.css`, `assets/js/copy-code.js`
- `knowhow/` (→ `src/pages/knowhow/` に移動)
- `digest/` (→ `src/pages/digest/` に移動)

---

## Astro Markdown の frontmatter 規則

### knowhow ページ（`src/pages/knowhow/*.md`）

```yaml
---
layout: ../../layouts/KnowhowLayout.astro   # src/pages/knowhow/ から src/layouts/ への相対パス
title: ページタイトル
nav: programming   # または environment
---
```

knowhow/sub 配下（1段深い `src/pages/knowhow/sub/*.md`）：

```yaml
---
layout: ../../../layouts/KnowhowLayout.astro
title: ページタイトル
nav: programming
---
```

さらに深い場合（`src/pages/knowhow/sub/Chrome/*.md`）：

```yaml
---
layout: ../../../../layouts/KnowhowLayout.astro
title: ページタイトル
nav: programming
---
```

### digest ページ（`src/pages/digest/YYYY/Month/*.md`）

```yaml
---
layout: ../../../../layouts/DigestLayout.astro   # 4段上へ
title: YYYY年M月上期/下期
---
```

`src/pages/digest/list.md`（1段の場合）：

```yaml
---
layout: ../../layouts/DigestLayout.astro
title: ダイジェスト
---
```

---

## 技術的知見

### 1. Markdown 内の画像パスについて

- **相対パス不可**：Astro（Vite）が Markdown の相対画像パスをモジュールインポートとして解釈するため、ファイルが `src/` にないとビルドエラーになる
- **絶対パス（`/images/...`）を使用する**：`images/` ディレクトリのファイルは `vite-plugin-static-copy` により `dist/images/` にコピーされ、`/images/...` で参照可能
- Jekyll で相対パスだった画像は `images/` 配下に移動して絶対パスに変更した（例：`images/Windows/IMECustomize.png`、`images/Rhel/20250601_link_wsl_image.png`）

### 2. レイアウトパスの深さ

Astro の Markdown layout は **ファイルの場所からの相対パス** で指定する。  
ディレクトリ階層が変わると `../` の数が変わるため注意：

| ファイルの場所 | layout パス |
|---|---|
| `src/pages/knowhow/Foo.md` | `../../layouts/XxxLayout.astro` |
| `src/pages/knowhow/sub/Foo.md` | `../../../layouts/XxxLayout.astro` |
| `src/pages/knowhow/sub/Bar/Foo.md` | `../../../../layouts/XxxLayout.astro` |
| `src/pages/digest/list.md` | `../../layouts/DigestLayout.astro` |
| `src/pages/digest/YYYY/Month/Foo.md` | `../../../../layouts/DigestLayout.astro` |

### 3. 静的ファイルの配置

`images/` と `captures/` はリポジトリルートに残し、`astro.config.mjs` の `vite-plugin-static-copy` で `dist/` にコピーする設定にした：

```js
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          { src: 'images', dest: '.' },
          { src: 'captures', dest: '.' },
        ],
      }),
    ],
  },
});
```

---

## 今後の更新手順

### ダイジェストの更新

`/update-digest` スキルで対応。ファイルパスが変わっている点に注意：

- 作成・更新対象: `src/pages/digest/YYYY/Month/1stH.md` または `2ndH.md`
- 一覧更新: `src/pages/digest/list.md`
- トップページ: `src/pages/index.md`
- knowhow 参照元: `src/pages/knowhow/*.md`

### knowhow ページの更新

`src/pages/knowhow/*.md` を直接編集する。frontmatter の `layout` と `nav` を変えないこと。

### 新しい knowhow ページの追加

1. `src/pages/knowhow/NewPage.md` を作成
2. frontmatter を設定：
   ```yaml
   ---
   layout: ../../layouts/KnowhowLayout.astro
   title: ページタイトル
   nav: programming  # または environment
   ---
   ```
3. ナビゲーションに追加する場合は `src/layouts/BaseLayout.astro` の `navItems` を編集

### 新しいダイジェストの作成（手動の場合）

```yaml
---
layout: ../../../../layouts/DigestLayout.astro
title: YYYY年M月上期/下期
---
YYYY年M月上期（YYYY/M/D～YYYY/M/D）に...
```

### ローカル確認

```bash
bun run dev    # 開発サーバー（http://localhost:4321）
bun run build  # 本番ビルド確認
```

### デプロイ

`main` ブランチへのマージで GitHub Actions が自動デプロイする。  
手動実行は GitHub の Actions タブから `Deploy to GitHub Pages` ワークフローを実行。
