# Jekyll から Astro への移行記録（#756）

**実施日**: 2026/04/12  
**PR**: #760

## 移行の背景

- Jekyll (minimal-mistakes テーマ) の更新が約1年停滞
- より洗練されたデザインとモダンな構成を求めて Astro を採用（#755 で検討済み）

## 変更前後の対応表

| 項目 | 移行前（Jekyll） | 移行後（Astro） |
|------|-----------------|----------------|
| フレームワーク | Jekyll 4.4.1 + minimal-mistakes 4.27.3 | Astro 5.x |
| コンテンツ置き場 | `knowhow/`, `digest/` | `src/pages/knowhow/`, `src/pages/digest/` |
| トップページ | `README.md`（frontmatter で `/` にルーティング） | `src/pages/index.md` |
| レイアウト | `_layouts/default.html`（Liquid テンプレート） | `src/layouts/*.astro` |
| ナビゲーション | `_data/navigation.yml` | `src/layouts/BaseLayout.astro` 内にハードコード |
| スタイル | minimal-mistakes CSS（リモートテーマ） | `src/styles/global.css`（独自CSS） |
| コードコピーボタン | `assets/css/copy-button.css` + `assets/js/copy-code.js` | `src/layouts/BaseLayout.astro` 内に統合 |
| デプロイ | GitHub Pages の Jekyll 自動ビルド | GitHub Actions (`.github/workflows/deploy.yml`) |
| 静的アセット配信 | Jekyll が `images/` 等をそのまま配信 | `vite-plugin-static-copy` で `dist/` にコピー |
| 依存管理 | `Gemfile` / Ruby | `package.json` / Bun |

## 削除したファイル・ディレクトリ

| 削除したもの | 移行先 |
|---|---|
| `Gemfile`, `Gemfile.lock` | — (不要) |
| `_config.yml` | `astro.config.mjs` |
| `_data/navigation.yml` | `src/layouts/BaseLayout.astro` の `navItems` |
| `_layouts/default.html` | `src/layouts/BaseLayout.astro` |
| `assets/css/copy-button.css` | `src/layouts/BaseLayout.astro` の `<style>` |
| `assets/js/copy-code.js` | `src/layouts/BaseLayout.astro` の `<script>` |
| `knowhow/*.md` | `src/pages/knowhow/*.md` |
| `digest/**/*.md` | `src/pages/digest/**/*.md` |
| `README.md`（サイトトップ） | `src/pages/index.md` |

## 画像ファイルの移動

Jekyll では相対パスで参照されていた画像を `images/` 配下に移動した：

| 移動前 | 移動後 |
|---|---|
| `knowhow/sub/windows/IMECustomize.png` | `images/Windows/IMECustomize.png` |
| `knowhow/sub/Rhel/20250601_link_wsl_image.png` | `images/Rhel/20250601_link_wsl_image.png` |
