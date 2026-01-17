---
title:  Python
layout: single
sidebar:
  nav: programming
---
##  独学書

  |Text                                                                          |Date      |Status
  |------------------------------------------------------------------------------|----------|----
  |[独学プログラマー](http://theselftaughtprogrammer.io/)                           |2019/10/05|<span style="color: red;">*finished*</span> ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/python/self-taught)
  |[MCP入門](https://gihyo.jp/book/2025/978-4-297-15295-6)                        |2026/01/17|第9章 MCPホストを自作する <span style="color: red;">*finished*</span>
  |[MCPサーバー開発大全](https://gihyo.jp/book/2025/978-4-297-15327-4)              |          |not started
  |[MCP&A2Aプログラミング入門](https://book.mynavi.jp/ec/products/detail/id=148859) |          |not started

##  環境

  |Machine         |Env / FW                   |Last Updated
  |----------------|---------------------------|----------
  |Chrome OS       |[Python 3.13.2](#python-1) |[2025/03/08](https://www.python.org/downloads/)
  |                |pip 25.2                   |2025/09/21
  |                |Django 5.1.7               |[2025/03/08](https://www.djangoproject.com/)
  |                |TkEasyGUI 1.0.38           |[2025/09/21](https://github.com/kujirahand/tkeasygui-python)
  |Windows Insider |Python 3.14.2              |2025/12/12
  |                |uv 0.9.17                  |2025/12/14
  |                |fastmcp 2.14.3             |2026/01/17
  |                |inspector 0.18.0           |2026/01/02
  |                |mcp-remote 0.1.31          |[2025/12/16](https://github.com/geelen/mcp-remote)
  |                |mcp-proxy 0.10.0           |2025/12/15

##  ノウハウ
### Python
  - install on Debian 12 @ Chrome OS Flex
    - [Install Python 3.11 on Debian 12 / Debian 11](https://cloudspinx.com/how-to-install-python-on-debian/)

    - パッケージのインストール
      ```
      python3 -m pip install <Package Name>
      ```

  - Install on Windows
    - インストール後の対応
      - 下記をPATHに追加する。
        ```
        C:\Users\taish\AppData\Local\Programs\Python\Python312
        ```
      - Djangoをインストールする
        ```
        python -m pip install django
        ```
    - uv (Package Manager)
      ```
      irm https://astral.sh/uv/install.ps1 | iex
      ```
      - プロジェクト作成
        ```
        uv init
        ```
      - 実行
        ```
        uv run python <filename>
        ```

### MCP入門
- [ソースコード](https://github.com/gamasenninn/MCP_Learning)
- 進捗

  Contents                            |Finished
  ------------------------------------|---------
  第1章 MCPを30分で体験する              |2025/12/13
  第3章 最初のMCPサーバを作る             |2025/12/14
  第5章 MCPをもっと便利に使う2つの通信方式  |2025/12/16
  第6章 データベース連携サーバ             |2025/12/23
  第7章 外部API連携サーバ                 |2026/01/02
  第8章 汎用MCPツール群を作る              |2026/01/17
  第9章 MCPホストを自作する               |2026/01/17

- Claude Desktopの設定
  - 「ファイル」ー「設定」メニューから設定画面を開く
  - 設定画面の「設定」ー「開発者」タブの「設定を編集」から行う
    ![ローカルMCPサーバの設定](/images/python/20251212_claude_setting.png)
  - 設定を反映するために、システムトレイに常駐するClaude Desktopを終了し、再起動する
  - Web検索の無効化
    ![Web Off](/images/python/20260117_claude_web_off.png)

- MCPサーバの作成(fastmcp)
  ```
  uv add fastmcp
  ```

  <details>
  <summary>
  fastmcp 追加ログ
  </summary>

  ```
  Using CPython 3.14.2 interpreter at: C:\Users\taish\AppData\Local\Programs\Python\Python314\python.exe
  Creating virtual environment at: .venv
  Resolved 88 packages in 773ms
  Prepared 85 packages in 2.48s
  ░░░░░░░░░░░░░░░░░░░░ [0/85] Installing wheels...                                                                                             warning: Failed to hardlink files; falling back to full copy. This may lead to degraded performance.                                         
          If the cache and target directories are on different filesystems, hardlinking may not be supported.                                 
          If this is intentional, set `export UV_LINK_MODE=copy` or use `--link-mode=copy` to suppress this warning.                          
  Installed 85 packages in 1.00s
  + annotated-types==0.7.0
  + anyio==4.12.0
  + attrs==25.4.0
  + authlib==1.6.6
  + beartype==0.22.9
  + cachetools==6.2.3
  + certifi==2025.11.12
  + cffi==2.0.0
  + charset-normalizer==3.4.4
  + click==8.3.1
  + cloudpickle==3.1.2
  + colorama==0.4.6
  + cryptography==46.0.3
  + cyclopts==4.3.0
  + diskcache==5.6.3
  + dnspython==2.8.0
  + docstring-parser==0.17.0
  + docutils==0.22.3
  + email-validator==2.3.0
  + exceptiongroup==1.3.1
  + fakeredis==2.32.1
  + fastmcp==2.14.0
  + h11==0.16.0
  + httpcore==1.0.9
  + httpx==0.28.1
  + httpx-sse==0.4.3
  + idna==3.11
  + importlib-metadata==8.7.0
  + jaraco-classes==3.4.0
  + jaraco-context==6.0.1
  + jaraco-functools==4.3.0
  + jsonschema==4.25.1
  + jsonschema-path==0.3.4
  + jsonschema-specifications==2025.9.1
  + keyring==25.7.0
  + lupa==2.6
  + markdown-it-py==4.0.0
  + mcp==1.24.0
  + mdurl==0.1.2
  + more-itertools==10.8.0
  + openapi-pydantic==0.5.1
  + opentelemetry-api==1.39.1
  + opentelemetry-exporter-prometheus==0.60b1
  + opentelemetry-instrumentation==0.60b1
  + opentelemetry-sdk==1.39.1
  + opentelemetry-semantic-conventions==0.60b1
  + packaging==25.0
  + pathable==0.4.4
  + pathvalidate==3.3.1
  + platformdirs==4.5.1
  + prometheus-client==0.23.1
  + py-key-value-aio==0.3.0
  + py-key-value-shared==0.3.0
  + pycparser==2.23
  + pydantic==2.12.5
  + pydantic-core==2.41.5
  + pydantic-settings==2.12.0
  + pydocket==0.15.5
  + pygments==2.19.2
  + pyjwt==2.10.1
  + pyperclip==1.11.0
  + python-dotenv==1.2.1
  + python-json-logger==4.0.0
  + python-multipart==0.0.20
  + pywin32==311
  + pywin32-ctypes==0.2.3
  + pyyaml==6.0.3
  + redis==7.1.0
  + referencing==0.36.2
  + requests==2.32.5
  + rich==14.2.0
  + rich-rst==1.3.2
  + rpds-py==0.30.0
  + shellingham==1.5.4
  + sortedcontainers==2.4.0
  + sse-starlette==3.0.3
  + starlette==0.50.0
  + typer==0.20.0
  + typing-extensions==4.15.0
  + typing-inspection==0.4.2
  + urllib3==2.6.2
  + uvicorn==0.38.0
  + websockets==15.0.1
  + wrapt==1.17.3
  + zipp==3.23.0
  ```
  </details>

- MCPサーバの検証(inspector)
  ```
  npx @modelcontextprotocol/inspector uv run python <filename>
  ```
  - 初期画面(localhost:6277でサーバが起動した後、自動でブラウザが起動)
    ![Inspector1](/images/python/20251214_mcp_inspector1.png)
  - 接続 / ツール一覧確認
    ![Inspector2](/images/python/20251214_mcp_inspector2.png)
  - ツール実行
    ![Inspector3](/images/python/20251214_mcp_inspector3.png)
  - 結果確認
    ![Inspector4](/images/python/20251214_mcp_inspector4.png)

- 仲介ツール for Claude Desktop
  - mcp-remote
    - Claude Desktopでhttp接続するための設定(claude_desktop_config.json)
      ```json
      {
        "mcpServers": {
          "calculator-http": {
            "command": "npx",
            "args": ["mcp-remote@latest", "http://localhost:8000/mcp"]
          }
        }
      }
      ```
  - mcp-proxy
    ```
    uv tool install mcp-proxy
    ```
- 外部API
  - [OpenWeather API](https://api.openweathermap.org/)
    - API Keyは下記リンクから取得する
      ![API Key](/images/python/20260102_mcp_weather_api_key.png)
    - 取得後、有効になるまで待つ（無効の場合、401認証エラーとなる）
  - [News API](https://newsapi.org/)
    - API Keyは下記リンクから取得する
      ![API Key](/images/python/20260102_mcp_news_api_key.png)
  - [Tavily](https://tavily.com)
    - API Keyは下記画面に表示のキーを使用する
      ![API Key](/images/python/20260117_mcp_tavily_api_key.png)

### numpy/scikit-learn
  - VSCodeで実行してみた
    ![グラフ表示](/images/python/20240102_matplotlib.png)
  - Jupyter Notebookを使ってみた
    ![Jupyter Notebook](/images/python/20240102_jupyter_notebook.png)

### TkEasyGUI
  - [First Code](https://kujirahand.com/TkEasyGUI/)

    ![Started](/images/python/20250921_TkEasyGUI_Started.png)

### Django
  - [Django Tutorial](https://docs.djangoproject.com/ja/4.1/intro/tutorial01/)
    **@2022/08/27** その７ adminフォームのカスタマイズ <span style="color: red;">*finished*</span>
  - 日本語に変える方法
    - https://codor.co.jp/django/how-change-language
  - Djangoのソースディレクトリを確認する方法
    ```
    py -c "import django; print(django.__path__)"
    ```
  - Djangoのバージョン確認
    ```
    py -m django --version
    ```
  - Djangoのアップグレード
    ```
    py -m pip install --upgrade Django
    ```
  - Python/Djangoのテスト
    ```
    py -Wa manage.py test
    ```
  - チュートリアル
    - サーバ起動
      ```
      python manage.py runserver
      ```
    - SHELLでの確認
      ```
      python manage.py shell
      ```
    - テストコードの実行
      ```
      python manage.py test polls
      ```
    - URL
      サイト|パス
      ------|----
      投票  |localhost:8000/polls
      管理  |localhost:8000/admin

    - 管理サイトのパスワード
      admin / djangoadmin

### Flet
  - [Flet-Counter](https://github.com/Tatsukiyoshi/Flet-Counter)

##  雑誌記事
  - nsw
    - 202005 : 日経ソフトウェア2020年5月号 **@2020/08/10**
  - pygame2 : 5日でできる！Pythonでゲーム作成入門（日経ソフトウェア2020年5月号）
    - [ケニーのサイト](https://kenney.nl/assets/space-shooter-extension)
    - ３日目：迷路 **@2020/06/29 -> 2020/07/25**
    - ４日目：月面着陸ゲーム **@2020/07/26 -> 2020/08/01**
    - ５日目：シューティングゲーム **@2020/08/10**
  - pygame : Pygame Zero ゲームプログラミング入門（日経ソフトウェア2020年3月号）
    - jumpgame **@2020/04/11**
    - shooting **@2020/04/12**
  - reversi : PythonでAIと対戦できるリバーシを作ろう
    - データ構造とUI編（日経ソフトウェア2019年9月号）
      - **@2019/09/28**コンピュータが隅に優先して石を打つよう改良
      - **@2019/10/04**コンピュータが隅を優先して石を打つかを変更するチェックボックス追加
    - AI(人工知能編)（日経ソフトウェア2019年11月号）<BR>
      - ミニマックス法
      - アルファベータ法
  - ginza - Universal Dependenciesに基づくオープンソース日本語NLPライブラリ
    ```
    pip install "https://github.com/megagonlabs/ginza/releases/download/v1.0.2/ja_ginza_nopn-1.0.2.tgz"
    ```
  - flask - 日経ソフトウェア 2019年3月号/5月号
  - opencv - ５日でわかるOpenCVプログラミング入門（日経ソフトウェア2019年3月号特別付録２）
    ```
    pip install opencv-python
    ```
  - [鎖プログラム](https://pg-chain.com/)
