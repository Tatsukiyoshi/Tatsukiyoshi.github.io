# 開発メモ

## Astro

### 1. Markdown 内の画像パスは絶対パスのみ使用可能

Astro（Vite）は Markdown の**相対パス画像**（例: `![img](foo.png)`）をモジュールインポートとして解釈する。  
ファイルが `src/` 内にないとビルドエラーになるため、**絶対パス**（`/images/...`）を使用すること。

```markdown
# NG: 相対パス
![スクリーンショット](screenshot.png)

# OK: 絶対パス（images/ 配下に置く）
![スクリーンショット](/images/Category/screenshot.png)
```

**Why:** Astro/Vite の設計上、`src/pages/` 内の Markdown の相対パスは file import として処理されるため。  
**How to apply:** 新しい画像を追加するときは `images/<カテゴリ>/` に置き、`/images/...` で参照する。

---

### 2. layout パスの深さはファイルの階層に合わせる

Astro の Markdown `layout` フィールドは **ファイルの場所からの相対パス** で指定する。  
ディレクトリ階層が変わると `../` の数が変わる。

| ファイルの場所 | layout パス例 |
|---|---|
| `src/pages/knowhow/Foo.md` | `../../layouts/KnowhowLayout.astro` |
| `src/pages/knowhow/sub/Foo.md` | `../../../layouts/KnowhowLayout.astro` |
| `src/pages/knowhow/sub/Bar/Foo.md` | `../../../../layouts/KnowhowLayout.astro` |
| `src/pages/digest/list.md` | `../../layouts/DigestLayout.astro` |
| `src/pages/digest/YYYY/Month/Foo.md` | `../../../../layouts/DigestLayout.astro` |

**Why:** Astro の Markdown layout は相対パスで解決されるため、深さが違うとレイアウトが見つからずビルドエラーになる。  
**How to apply:** 新しいページを作るとき、または既存ページをサブディレクトリに移動するときはパスの深さを確認する。

---

### 3. `images/` 等のルート配下ディレクトリは vite-plugin-static-copy で配信

Astro の静的ファイルは `public/` に置くのが原則だが、`images/` はリポジトリルートに残し `vite-plugin-static-copy` で `dist/` にコピーする設定にした。

```js
// astro.config.mjs
viteStaticCopy({
  targets: [
    { src: 'images', dest: '.' },
    { src: 'captures', dest: '.' },
  ],
})
```

**Why:** `images/` を `public/` に移動すると既存の大量ファイルのパスが変わるため、ルートに残す方針にした。  
**How to apply:** ルートに新しい静的ファイルディレクトリを追加する場合は `astro.config.mjs` の `targets` に追加する。
