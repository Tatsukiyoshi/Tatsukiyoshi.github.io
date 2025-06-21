---
layout: single
sidebar:
  nav: main
---
# PHP

##  環境

  |Machine        |Env / FW        |Last Updated
  |---------------|----------------|----------
  |Chrome OS Flex |ToolBox 2.6.1   |2025/05/04
  |               |PhpStorm 2025.1 |2025/05/04
  |               |Php 8.2.8       |[2025/05/04](https://www.php.net/)

##  ノウハウ
### Chrome OS Flex
- Chrome OS Flex は Debianなので、一パッケージとしてインストールする
  ```
  sudo apt install php -y
  ```

- PostgreSQL を最新（17.4）に更新する
  1. PostgreSQL 公式APTリポジトリの追加
      ```
      sudo apt update
      sudo mkdir -p /etc/apt/keyrings
      sudo wget --quiet -O /etc/apt/keyrings/postgresql-org.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
      ```
  1. Debian12に対応したリポジトリの追加
      ```
      echo "deb [signed-by=/etc/apt/keyrings/postgresql-org.asc] http://apt.postgresql.org/pub/repos/apt bookworm-pgdg main" | sudo tee /etc/apt/sources.list.d/postgresql.list
      ```
  1. パッケージリストの更新
      ```
      sudo apt update
      ```
  1. PostgreSQLのインストール
      ```
      sudo apt install postgresql postgresql-contrib
      ```
  1. PostgreSQLサービスの確認
      ```
      sudo systemctl status postgresql
      ```
  1. 初期設定
      1. ユーザ切替
          ```
          sudo -i -u postgres
          ```
      1. PSQL
          ```
          psql
          ```
      1. パスワード設定
          ```sql
          ALTER ROLE postgres WITH PASSWORD 'your_secure_password';
          \q
          ```
      1. 元のユーザに戻る
          ```
          exit
          ```

- PHPを最新（8.4.6）に更新する
  1. 必要なパッケージのインストール
      ```
      sudo apt update
      sudo apt install apt-transport-https lsb-release ca-certificates gnupg
      ```
  1. PHPリポジトリの追加
      ```
      sudo mkdir -p /etc/apt/keyrings
      sudo wget -O /etc/apt/keyrings/sury.org.gpg https://packages.sury.org/php/apt.gpg
      ```
  1. パッケージリストの更新
      ```
      sudo apt update
      ```
  1. PHPと関連モジュールのインストール
      ```
      sudo apt install php8.4 php8.4-fpm php8.4-cli php8.4-common [その他の必要なPHP拡張モジュール]
      ```
      ```
      php8.4-pgsql
      ```
  1. PHPのバージョン確認
      ```
      php -v
      ```
- PostgreSQLクライアントライブラリをインストールする
  ```
  sudo apt install php-pgsql
  ```

### Windows
-  Apache + PHP
  - [WindowsにApache＋PHPの環境構築](https://qiita.com/blue-mountain/items/53a3bdc1c0c5f7c73a54)
  - [WindowsのサービスにApacheを登録する](https://qiita.com/hiromaru/items/455975d789715a48eb9d)
    ```
    .\httpd -k install -n "Apache24" -f "C:\httpd-2.4.58-win64-VS17\Apache24\conf\httpd.conf"
    ```
- PostgreSQL
  - [Windows 10 で Apache + PHP + PostgreSQL をする](https://qiita.com/skytomo221/items/94aec65da2c7bddb5c2d)
    - Httpd.conf
      ```
      LoadModule php_module "C:\php-8.3.1-Win32-vs16-x64\php8apache2_4.dll"
      LoadFile "C:\php-8.3.1-Win32-vs16-x64\php8ts.dll"
      LoadFile "C:\php-8.3.1-Win32-vs16-x64\libpq.dll"
      LoadFile "C:\php-8.3.1-Win32-vs16-x64\ext\php_pdo_pgsql.dll"
      LoadFile "C:\php-8.3.1-Win32-vs16-x64\ext\php_pgsql.dll"
      ```
