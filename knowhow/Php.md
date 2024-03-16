# PHP

##  環境
  |端末       |環境／FW                                                   |日付
  |-----------|----------------------------------------------------------|----------
  |IdeaPad    |[PHP 8.3](https://windows.php.net/download)               |2024/01/02
  |           |[Apache 2.4.58](https://www.apachelounge.com/download/)   |2024/01/02

##  ノウハウ

  - Apache + PHP
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
