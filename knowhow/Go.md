# Go

##  環境
  |Machine        |Env／FW       |Last Updated
  |---------------|--------------|----------
  |Chrome OS Flex |Go 1.24.2     |[2025/05/04](https://go.dev/dl/)
  |               |ToolBox 2.6.1 |2025/05/04
  |               |GoLand 2025.1 |2025/05/04
  

##  ノウハウ
  - [GOでLINE風リアルタイムチャットアプリを作ってみよう](https://www.cetus-media.info/article/2021/line-chat/)
  - [SliceData](https://pkg.go.dev/unsafe@go1.20#SliceData)

  - プロジェクトの作成
    ```
    go mod init chat
    ```
  - Packageのインポート/更新
    ```
    go get github.com/gin-gonic/gin
    go get gopkg.in/olahol/melody.v1
    ```
  - goの実行
    ```
    go run cmd/main.go
    ```

- Chrome OS Flex
  - 準備
    ```
    sudo apt install gnome-text-editor gimp vlc nautilus x11-apps -y
    sudo apt install libfuse2 libxi6 libxrender1 libxtst6 mesa-utils libfontconfig libgtk-3-bin tar -y
    ```

  - ToolBox Appインストール
    ```
    curl -fsSL https://raw.githubusercontent.com/nagygergo/jetbrains-toolbox-install/master/jetbrains-toolbox.sh | bash
    ```

  - インストール
    ```
    sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.24.2.linux-amd64.tar.gz
    ```
