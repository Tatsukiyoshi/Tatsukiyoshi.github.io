# Container
##  環境
  |Machine        |Env／FW                 |Last Updated
  |---------------|------------------------|----------
  |Windows Insider|Rancher Desktop 1.18.2  |[2025/03/13](https://rancherdesktop.io/)

##  ノウハウ
- [Rancher Desktop](https://rancherdesktop.io/)
  - Docker Desktopをアンインストールし、Rancher Desktopをセットアップ
  - MySQL公式イメージでコンテナ化
    ```
    docker pull mysql
    docker run --name InsiderDev_MySQL -e MYSQL_ROOT_PASSWORD=mysqlsuper -d -p 3306:3306 mysql:latest
    ```
  - Container Build
    - [Astro with Docker Container](https://zenn.dev/tatsukiyoshi/articles/a94bd125bf660f)
    - Svelte
      <!-- original is buildFlow.png -->
      ![Container Build Flow](/images/JavaScript/20250329_SvelteAppContainerBuildFlow.png)
- [Windows 11にDocker Desktopを入れる手順（令和5年最新版）](https://qiita.com/zembutsu/items/a98f6f25ef47c04893b3)
  - Windows 11にWSLをセットアップして、Docker DesktopをLinux＋Windowsのコンテナ切り換えを可能にする
    1.  Hyper-Vを有効化する
    1.  WSL2をセットアップする
        ```
        wsl --update
        ```
    1.  Ubuntu24.04をセットアップ
        ```
        wsl install -D Ubuntu-24.04
        ```
    1.  Docker Desktopをインストール
    1.  docker-usersグループに追加する
        - Docker Desktopは、一般ユーザでの起動は推奨されない
- [windowsにWSL2+Docker環境を構築する手順](https://qiita.com/taka777n/items/ea3a1b3a2802aabf3db2)
  - 参考
    - Docker導入のために必要なパッケージをインストールする
      ```
      sudo apt install curl -y
      sudo apt install apt-transport-https -y
      ```
    - Docker Engineのインストール
      - Docker公式GPG鍵の追加
        ```
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
        ```
      - Docker安定版のレポジトリ追加
        ```
        echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        ```
      - リポジトリアップデート＋Docker Engineインストール
        ```
        sudo apt update
        sudo apt install docker-ce docker-ce-cli containerd.io -y
        ```
      - docker-composeインストール
        ```
        sudo apt install docker-compose -y
        ```
      - Docker デーモンを起動
        ```
        sudo service docker start
        ```
    - Dockerイメージ作成
      ```
      docker build . -t <name>
      ```
    - Dockerイメージ起動
