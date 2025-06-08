# GitHub Pages (`jekyll-theme-minimal`) で左側を活用する方法

`jekyll-theme-minimal` はデフォルトではサイドバー機能を持たないシンプルなテーマです。左側のスペースにナビゲーションなどを配置するには、テーマのレイアウトをカスタマイズし、CSSでスタイルを調整する必要があります。

## 手順

### 1. 必要なディレクトリとファイルの準備

- 以下のディレクトリがリポジトリのルートに存在しない場合は作成します。
  *   `_includes/`
  *   `_layouts/`
  *   `assets/css/`

### 2. サイドバーのコンテンツを作成

左側に表示するナビゲーションメニューなどのHTMLを記述します。

**ファイル:** `_includes/sidebar.html`

```html
<nav class="sidebar-nav">
  <h4>ナビゲーション</h4>
  <ul>
    <li><a href="{{ "/" | relative_url }}">ホーム</a></li>
    <li><a href="{{ "/about/" | relative_url }}">概要</a></li>
    <li><a href="#">別のページ</a></li>
  </ul>
</nav>
```

### 3. メインレイアウトのカスタマイズ
テーマのデフォルトレイアウト (_layouts/default.html) を上書きし、作成したサイドバーを組み込みます。

まず、jekyll-theme-minimal の元の ```_layouts/default.html``` の内容をコピーして、ご自身のリポジトリの ```_layouts/default.html``` に貼り付けます。

テーマのファイルは、通常、ローカル環境で bundle show jekyll-theme-minimal コマンドを実行すると表示されるパス内の _layouts ディレクトリにあります。

その後、以下のように変更してサイドバーを組み込みます。

**ファイル:** リポジトリの ```_layouts/default.html```
```html
<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

{% seo %}
    <link rel="stylesheet" href="{{ "/assets/css/style.css?v=" | append: site.github.build_revision | relative_url }}">
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <![endif]-->
    {% include head-custom.html %}
  </head>
  <body>
    <div class="page-container">
      <aside class="sidebar">
        {% include sidebar.html %}
      </aside>
      <div class="main-content-wrapper">
        <div class="wrapper">
          <header>
            <h1><a href="{{ "/" | absolute_url }}">{{ site.title | default: site.github.repository_name }}</a></h1>
            
            {% if site.logo %}
              <img src="{{site.logo | relative_url}}" alt="Logo" />
            {% endif %}

            <p>{{ site.description | default: site.github.project_tagline }}</p>

            {% if site.github.is_project_page %}
            <p class="view"><a href="{{ site.github.repository_url }}">View the Project on GitHub <small>{{ site.github.owner_name }}/{{ site.github.repository_name }}</small></a></p>
            {% endif %}

            {% if site.github.is_user_page %}
            <p class="view"><a href="{{ site.github.owner_url }}">View My GitHub Profile</a></p>
            {% endif %}

            {% if site.show_downloads %}
            <ul class="downloads">
              <li><a href="{{ site.github.zip_url }}">Download <strong>ZIP File</strong></a></li>
              <li><a href="{{ site.github.tar_url }}">Download <strong>TAR Ball</strong></a></li>
              <li><a href="{{ site.github.repository_url }}">View On <strong>GitHub</strong></a></li>
            </ul>
            {% endif %}
          </header>
          <section>

          {{ content }}

          </section>
          <footer>
            {% if site.github.is_project_page %}
            <p>This project is maintained by <a href="{{ site.github.owner_url }}">{{ site.github.owner_name }}</a></p>
            {% endif %}
            <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
          </footer>
        </div>
      </div>
    </div>
    <script src="{{ "/assets/js/scale.fix.js" | relative_url }}"></script>
  </body>
</html>
```

(注意: 上記は、元の jekyll-theme-minimal の _layouts/default.html の内容に、サイドバー用の ```<aside class="sidebar">``` と、メインコンテンツを囲む ```<div class="main-content-wrapper">``` および ```<div class="page-container">``` を追加した完全なファイル内容です。)

### 4. CSSでレイアウトを定義
jekyll-theme-minimal のスタイルをインポートしつつ、サイドバーとメインコンテンツのレイアウトのためのカスタムスタイルを追加します。

**ファイル:** ```assets/css/style.scss```
```scss
@import "jekyll-theme-minimal";

/* Your custom styles below */

body {
  margin: 0; /* Ensure no default body margin interferes */
}

.page-container {
  display: flex;
  min-height: 100vh; /* Make container at least full viewport height */
}

.sidebar {
  width: 250px; /* Adjust width as needed */
  padding: 20px;
  background-color: #f8f9fa; /* Example background color */
  border-right: 1px solid #dee2e6; /* Example border */
  flex-shrink: 0; /* Prevent sidebar from shrinking */
}

.main-content-wrapper {
  flex-grow: 1; /* Allow main content to take remaining space */
  /* The .wrapper class from the theme will handle max-width and centering of content */
}

/* Responsive adjustments (optional) */
@media (max-width: 768px) {
  .page-container {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #dee2e6;
  }
}
```

### ５．設定の確認
```_config.yml``` ファイルでテーマが jekyll-theme-minimal に設定されていることを確認してください。

これらの変更を適用し、Jekyllサイトをローカルでビルドするか、GitHub Pagesにプッシュすると、左側にサイドバーが表示され、その右側にメインコンテンツが表示されるようになります。CSSの値を調整して、お好みのデザインにカスタマイズしてください。
