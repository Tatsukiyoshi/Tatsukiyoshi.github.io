---
title:  Swift
layout: single
sidebar:
  nav: programming
---

##  環境
  1.  Windows

      |Machine         |Env / FW                   |Last Updated
      |----------------|---------------------------|----------
      |Windows Insider |Swift 6.2.0                |[2025/09/23](https://www.swift.org/install/windows/)
      |                |- Python 3.9.13            |2025/09/23

##  ノウハウ

- Windows環境
  ```
  winget install --id Microsoft.VisualStudio.2022.Community --exact --force --custom "--add Microsoft.VisualStudio.Component.Windows11SDK.22000 --add Microsoft.VisualStudio.Component.VC.Tools.x86.x64 --add Microsoft.VisualStudio.Component.VC.Tools.ARM64"
  ```

- 必要コンポーネント
  1.  git
  1.  VC++ 2015 再頒布ファイル 
  1.  Python 3.9

- インストール
  ```
  winget install --id Swift.Toolchain -e
  ```

  <details>
  <summary>
  ログ
  </summary>

  ```
  見つかりました Swift [Swift.Toolchain] バージョン 6.1.2
  このアプリケーションは所有者からライセンス供与されます。
  Microsoft はサードパーティのパッケージに対して責任を負わず、ライセンスも付与しません。
  このパッケージには次の依存関係が必要です:
    - パッケージ
        Git.Git
        Microsoft.VCRedist.2015+.x64 [>= 14.28.29913.0]
        Python.Python.3.9
  (1/1) 見つかりました Python 3.9 [Python.Python.3.9] バージョン 3.9.13
  このアプリケーションは所有者からライセンス供与されます。
  Microsoft はサードパーティのパッケージに対して責任を負わず、ライセンスも付与しません。
  ダウンロード中 https://www.python.org/ftp/python/3.9.13/python-3.9.13-amd64.exe
    ██████████████████████████████  27.8 MB / 27.8 MB
  インストーラーハッシュが正常に検証されました
  パッケージのインストールを開始しています...
  インストールが完了しました

  ダウンロード中 https://download.swift.org/swift-6.1.2-release/windows10/swift-6.1.2-RELEASE/swift-6.1.2-RELEASE-windows10.exe
    ██████████████████████████████   543 MB /  543 MB
  インストーラーハッシュが正常に検証されました
  パッケージのインストールを開始しています...
  インストールが完了しました
  ```

  </details>

- プロジェクト作成
  ```
  swift package init --name MyCLI --type executable
  ```

- 実行
  ```
  swift run MyCLI
  ```

- 旧情報
  - コンパイル
    ```
    set SDKROOT=%SystemDrive%/Library/Developer/Platforms/Windows.platform/Developer/SDKs/Windows.sdk
    swiftc -target x86_64-unknown-windows-msvc -sdk %SDKROOT% -I %SDKROOT%/usr/lib/swift -L %SDKROOT%/usr/lib/swift/windows helloworld.swift -o helloworld.exe
    ```
