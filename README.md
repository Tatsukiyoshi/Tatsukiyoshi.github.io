# リスキリング（プログラミング）

独学プログラミング演習のサイトです。

公開URL: [https://tatsukiyoshi.github.io](https://tatsukiyoshi.github.io)

> **Note:** このリポジトリは Jekyll から Astro へ移行しました（#756）。
> サイトのトップページコンテンツは `README.md` ではなく [`src/pages/index.md`](src/pages/index.md) で管理しています。

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | [Astro](https://astro.build/) |
| ホスティング | GitHub Pages |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) |

## ディレクトリ構成

```
src/
  layouts/           # レイアウト（BaseLayout / KnowhowLayout / DigestLayout）
  pages/
    index.md         # トップページ（旧 README.md 相当）
    knowhow/         # ノウハウページ（言語・ツール別 Markdown）
    digest/          # ダイジェスト（年月別 Markdown）
  styles/
    global.css       # グローバルスタイル
images/              # 画像ファイル（/images/... で参照）
public/              # その他の静的ファイル
```

## ローカル開発

```bash
bun install   # 依存パッケージのインストール
bun run dev   # 開発サーバー起動（http://localhost:4321）
bun run build # 静的ビルド（dist/ に出力）
```

## コンテンツ更新

ノウハウページ: `src/pages/knowhow/*.md`
ダイジェスト: `src/pages/digest/YYYY/Month/1stH.md` または `2ndH.md`
トップページ: `src/pages/index.md`
