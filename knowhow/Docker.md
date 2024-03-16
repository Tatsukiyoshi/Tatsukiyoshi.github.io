# Docker

##  ノウハウ
- [windowsにWSL2+Docker環境を構築する手順](https://qiita.com/taka777n/items/ea3a1b3a2802aabf3db2)
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
