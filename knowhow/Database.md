# Database & SQL

##  環境

  |端末      |環境／FW                                                                                             |日付
  |----------|----------------------------------------------------------------------------------------------------|----------
  |IdeaPad   |[PostgreSQL 16](https://www.postgresql.org/download/windows/)                                       |2023/09/18
  |Mini-S12  |[SQL Server 2022 Developer 16.0.4105.2](https://www.microsoft.com/ja-jp/sql-server/sql-server-2022) |2024/01/14
  |          |- SQL Server Management Studio 19.3                                                                 |2024/01/14
  |          |PostgreSQL 16.1                                                                                     |2023/11/26
  |          |MongoDB 7.1.1                                                                                       |2023/12/10

##  ノウハウ
### データベース全般
  - [データベースを作成し、テーブルを追加する](https://docs.microsoft.com/ja-jp/visualstudio/data-tools/create-a-sql-database-by-using-a-designer?view=vs-2019)
  - [大量データの作成、日付の加工](https://www.excellence-blog.com/2017/06/01/sql-server%E3%81%B8%E5%A4%A7%E9%87%8F%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E9%AB%98%E9%80%9F%E3%81%A7%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B/)
### MongoDB
  - インストール
    1.  Scoopのインストール
        ```sh
        Set-ExecutionPolicy RemoteSigned -scope CurrentUser
        iex (new-object net.webclient).downloadstring('https://get.scoop.sh') 
        ```
    1.  MongoDBのインストール
        ```sh
        scoop install mongodb
        ```
    1.  MongoDB起動
        ```sh
        mongod
        ```
    1.  接続文字列
        ```
        mongodb://localhost:27017
        ```
  - MongoDB for VS Codeをインストールしておくとよい
    ![VSCode](../images/MongoDB/20231216_MongoDB_VSCode.png)
### [SQL Server](https://www.microsoft.com/ja-jp/sql-server/sql-server-2022)
  - [接続文字列](https://learn.microsoft.com/ja-jp/sql/connect/ado-net/connection-string-syntax?view=sql-server-ver16)
    ```
    Server=localhost;Database=master;Trusted_Connection=True;
    ```
  - [データベース ユーザーの作成](https://learn.microsoft.com/ja-jp/sql/relational-databases/security/authentication-access/create-a-database-user?view=sql-server-ver16)
    - admin/sqlsuper
  - [エラー:18456 でログインできない場合](https://qiita.com/sugasaki/items/a95c2495085e32851707)
    - サーバ認証について、Windows認証モードとSQL Server認証モードが選択されているかを確認する
    - SQL Serverを再起動する
  - [SSMS(SQL Server Management Studio)](https://learn.microsoft.com/ja-jp/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)
  - [特定の位置にカラムを追加する](https://urashita.com/archives/13652)
### PostgreSQL
  - postgres/pgsuper
  - PostgreSQL 16.1
    - PgAdmin4 7.8
  - PostgreSQL 16
    - PgAdmin4 7.6
  - [リリース間移行](https://www.postgresql.jp/docs/9.0/migration.html)
    - 並行稼働のため、新バージョンは現行バージョンとは異なるポート番号とする（現行：5432、新：5433）
    - 現行バージョンのバックアップ
      ```
      set PGCLIENTENCODING="UTF8"
      pg_dumpall -p 5432 --username=postgres > <BackupFile>
      ```
    - ロケールの編集（データベース作成部分）
      - バックアップされた内容例
        ```sql
        CREATE DATABASE batch WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Japanese_Japan.932';
        ```
      - 編集後の内容例
        ```sql
        CREATE DATABASE batch WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Japanese_Japan.932' LC_CTYPE = 'Japanese_Japan.932';
        ```
    - 新バージョンへのリストア
      ```
      set PGCLIENTENCODING="UTF8"
      type <Edited_BackupFile> | psql -d postgres -p 5433 --username=postgres
      ```
  - タイムアウト時間の設定（マシン性能の問題等で、PgAdminを起動できない場合の対応）
    - サーバとの接続がタイムアウトしているため、タイムアウト時間を延ばす
  - コマンドラインでのSQL
    - psqlにPATHが設定されていないので、追加する必要あり
  - 参照専用ユーザの作成
    - データを更新することはなく、参照だけできれば良い場合
      運用時のユーザや開発者向けユーザとは別に、参照専用のユーザがあると有効
    - PostgreSQL 14以降の場合、データの参照向けロールがあるので、そのロールを設定すればよい。
      ```
      >grant pg_read_all_data to <User>
      ```
### MySQL
  - ZIPファイルを任意のディレクトリに展開する
  - my.iniを展開したディレクトリに作成する
    ```ini
    [mysqld]
    # set basedir to your installation path
    basedir=D:\mysql-8.0.28-winx64
    # set datadir to the location of your data directory
    datadir=D:\mysql-8.0.28-winx64\data
    ```
  - データディレクトリを初期化する（パスワード生成せず）
    ```
    mysqld.exe --initialize-insecure --console
    ```
  - MySQL Server を起動する（パスワードなし）
    ```
    mysql.exe -u root --skip-password
    ```
  - MySQLをサービスに登録する
    ```
    D:\mysql-8.0.28-winx64\bin\mysqld --install MYSQL80
    ```
  - MySQLのサービスを開始する
    ```
    net start MYSQL80
    ```
  - DDL
    * rootパスワードの変更
      ```
      mysql> ALTER USER root@localhost IDENTIFIED BY "root";
      ```
    * ユーザの追加およびパスワードの登録
      ```
      mysql> CREATE USER taish;
      mysql> ALTER USER taish@localhost IDENTIFIED BY "taishow";
      ```
