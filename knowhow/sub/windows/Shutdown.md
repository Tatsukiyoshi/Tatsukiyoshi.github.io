---
title:  シャットダウン
layout: single
sidebar:
  nav: main
---
## シャットダウンや再起動、サインアウトをコマンドで実行する

* シャットダウンする

  ```
  shutdown /s /t <minutes> /hybrid
  ```

  * /s： シャットダウンを実行する
  * /t 0： コマンド実行後、即座にシャットダウンを始める
  * /hybrid： 次回の起動時に、より早く起動できる「高速スタートアップ」機能を利用する


* 再起動する

  ```
  shutdown /r /t <minutes>
  ```

  * /r : 再起動のためのオプション


* サインアウトする

  ```
  logoff
  ```
