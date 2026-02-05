---
title:  Tools
layout: single
sidebar:
  nav: environment
---

```
OS/言語を問わず利用するツールの情報
```
[共通](#Common) | [Windows](#Windows) | [macOS](#macOS)

##  共通 <a id="Common"></a>
### エディタ
- [Visual Studio Code January 2026(1.109.0)](https://code.visualstudio.com/) <span style="color: red;">*<<2026/02/05 updated from 1.108.2>>*</span>
  ```
  Atomをベースに開発された業界標準エディタ（Electonで実装）
  ```
  - [以前の新機能](/history/VSCode)
  - 開発環境は、Visual Studio Codeを中心に使っている。
  - インストールしている拡張機能の一覧は、[VSCode拡張機能](/knowhow/sub/vscodeExtensions)にまとめている。<BR />

- [Antigravity 1.15.8](https://antigravity.google/) <span style="color: red;">*<<2026/01/28 updated from 1.14.2 >>*</span>
  ```
  GoogleによるAIエディタ（Visual Studio Codeクローン）
  ```
  - セットアップ
    ![Setup](/images/Antigravity/20251120_Antigravity.png)
    ![Google Authenticated](/images/Antigravity/20251120_Antigravity2.png)
  - for Chrome OS Flex / Linux(Debian/Ubuntu) 
    1.  Add the repository to sources.list.d
        ```
        sudo mkdir -p /etc/apt/keyrings
        curl -fsSL https://us-central1-apt.pkg.dev/doc/repo-signing-key.gpg | \
        sudo gpg --dearmor --yes -o /etc/apt/keyrings/antigravity-repo-key.gpg
        echo "deb [signed-by=/etc/apt/keyrings/antigravity-repo-key.gpg] https://us-central1-apt.pkg.dev/projects/antigravity-auto-updater-dev/ antigravity-debian main" | \
        sudo tee /etc/apt/sources.list.d/antigravity.list > /dev/null
        ```
    1.  Update the package cache
        ```
        sudo apt update
        ```
    1. Install the package
        ```
        sudo apt install antigravity
        ```
  - 日本語化
    - 拡張機能からMicrosoftが提供するLanguage Packをインストールする

- [Zed](https://zed.dev)
  ```
  Atom開発者によるエディタ（Rustで実装）
  ```
  - Windows
    - [Zed 0.221.5](https://zed.dev/windows) <span style="color: red;">*<<2026/01/30 updated from 0.220.7>>*</span>
      ![On boarding](/images/Zed/20251018_Zed_On_boarding.png)
  - macOS
    - [Zed 0.220.3](https://zed.dev) <span style="color: red;">*<<2026/01/23 Re-installed>>*</span>

- [Codex 260202.859](https://openai.com/ja-JP/codex/)<span style="color: red;">*<<2026/02/03 installed>>*</span>
  ![Codex](/images/macOS/20260203_macOS_Codex.png)

- [Cursor 2.4.23](https://www.cursor.com/) <span style="color: red;">*<<2026/01/31 updated from 2.3.41>>*</span>
  ```
  元祖AIエディタ（Visual Studio Codeクローン）
  ```

### その他
- [Git](/knowhow/sub/Git)

- [HTTPS対応 ローカル開発サーバー](/knowhow/HttpsServer)

- [proto 0.53.1](https://moonrepo.dev/proto) <span style="color: red;">*<<2025/10/05 installed>>*</span>
  - インストール
    - Windows
      ```
      irm https://moonrepo.dev/install/proto.ps1 | iex
      ```
  - ツールのインストール
    - [Pkl 0.29.1](https://pkl-lang.org/) <span style="color: red;">*<<2025/10/05 installed>>*</span>
      ```
      proto plugin add pkl https://raw.githubusercontent.com/milesj/proto-plugins/refs/heads/master/pkl.toml
      proto install pkl --pin
      ```

##  Windows <a id="Windows"></a>
- [PowerShell 7.5.3](https://github.com/PowerShell/PowerShell)<span style="color: red;">*<<2025/09/12 auto updated from 7.5.2>>*</span>
  - インストール
    ```
    winget install --id Microsoft.Powershell --source winget
    ```
  - 更新
    - 製品版では、ストアアプリとして自動更新される
      ```
      2025/1/25 ストアアプリにて更新できないため、PowerShellの起動時に出るアップデートを通知するメッセージ内のリンクからダウンロード
      ```
    - Windows Insider 環境では、ストアで更新できない。
      - Windowsターミナルに表示されたリンクからインストーラをダウンロードする
        ![New Version Available](/images/Windows/20240728_Windows_PowerShell_7.4.4.png)
      - インストーラを起動して、セットアップする
        ![Setup with Installer](/images/Windows/20240728_Windows_PowerShell_Setup7.4.4.png)
  - 環境変数の確認
    ```shell
    $env:Path.Split(";")
    ```
  - 一覧を時間順で出力
    - 昇順
      ```
      Get-ChildItem . | Sort-Object LastWriteTime
      ```
    - 降順
      ```
      Get-ChildItem . | Sort-Object LastWriteTime -Descending
      ```
  - [文字エンコードについて](https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_character_encoding?view=powershell-7.3)
    - PowerShell上でUTF-8(BOMなし)に変更する
      ```shell
      $PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
      ```
- [GitHub Desktop 3.5.0](https://desktop.github.com/release-notes/) <span style="color: red;">*<<2025/06/18 updated from 3.4.16>>*</span>
  - サイトでのリリース通知があってから、アップデートできるまでにはタイムラグがありそう
  - 起動したGitHub Desktopでアップデートできる場合とできない場合があるみたい
    - 3.4.5 -> 3.4.6 OK
    - 3.4.0 -> 3.4.5 OK
    - 3.4.2 -> 3.4.5 NG

- [GitHub CLI 2.85](https://cli.github.com/) <span style="color: red;">*<<2026/01/24 Installed>>*</span>
  - インストール@Windows
    ```
    winget install --id GitHub.cli
    ```
  - インストール@macOS
    ```
    brew install gh
    ```

- [Claude Desktop 1.1.1520](https://claude.com/ja-jp/download) <span style="color: red;">*<<2026/01/30 Auto Updated from 1.0.2339 >>*</span>

- [mise 2026.1.6](https://mise.jdx.dev/) <span style="color: red;">*<<2026/01/24 installed >>*</span>
  - インストール
    ```
    winget install jdx.mise
    ```
  - 更新
    ```
    mise self-update
    ```
  - ツールの更新
    - bun upgrade
      ```
      mise use -g bun@latest
      ```

##  macOS <a id="macOS"></a>
- Xcode
  - [Xcode 26.2](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/12/17 Updated from 26.2 Beta>>*</span>
  - iOS Simulatorの更新
    - [Xcodeを使用してiOS simulatorを追加する方法](https://qiita.com/shint_1/items/656044190516a3926364)
    - XCodeで新しいバージョンをダウンロードする
    - XCodeで古いバージョンは削除し、単一のバージョンのみとすること（複数存在するとシミュレータでの実行時にエラーとなる模様）
      ![Components Update](/images/macOS/20250301_XCode_Components_Update.png)
      ![Components Updating](/images/macOS/20250301_XCode_Components_Updating.png)
  - 履歴
    - [Xcode 26.2 Beta](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/11/08 Updated from 26.1>>*</span>
    - [Xcode 26.1](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/11/08 Updated from 26.1 RC>>*</span>
    - [Xcode 26.1 RC](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/10/31 Updated from 26>>*</span>
    - [Xcode 26](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/09/16 Updated from 26 Beta 7>>*</span>
    - [Xcode 26 Beta 7](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/09/05 Updated from 26 Beta 6>>*</span>
    - [Xcode 16.4](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/05/31 Updated from 16.3>>*</span>
      ![iOS 18.5 Simulator](/images/macOS/20250531_Download_iOS18.5_Simulator.png)
- Homebrew 5.0.5 <span style="color: red;">*<<2025/12/09 Updated>>*</span>
- [CocoaPods 1.16.2_2](https://github.com/CocoaPods/CocoaPods) <span style="color: red;">*<<2026/02/01 Updated from 1.16.2_1>>*</span>
  - Homebrew / CocoaPodsのインストール
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    ```
    brew install cocoapods
    ```
  - バージョンを確認する
    ```
    pod --version
    ```
  - 最新に更新する(CocoaPods/Ruby/Git)
    ```
    brew update
    brew upgrade
    ```
- watchman <br>
  react native + expoでの実行エラーで watchmanに繋がらないみたいなエラーが出るので、インストール
  ```
  brew install watchman
  ```
- [GIMP 3.0](https://www.gimp.org/) <span style="color: red;">*<<2025/03/18 updated from 3.0.0 RC1>>*</span>
