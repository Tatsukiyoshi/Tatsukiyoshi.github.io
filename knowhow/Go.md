# Go

##  環境
  |端末       |環境／FW    |日付
  |-----------|-----------|----------
  |IdeaPad    |Go 1.21    |[2023/08/12](https://go.dev/dl/)

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
