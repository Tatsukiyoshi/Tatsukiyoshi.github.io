# トップページ

##  ダイジェスト
**毎週日曜日に更新**

  [最新ダイジェスト（2024/5/27～6/2）](https://note.com/taishow2020/n/n0f9d50a873bd)/
  [一覧](./digest/digestList.md)

##  創作物
**知識を形にする**
- [Tauriデスクトップアプリケーション](./design/tauriApp/index.md)
- [課題整理 with Dioxus](./design/dioxusApp/system.md)
##  OS
**独学環境の情報**
- [Windows Insider](https://blogs.windows.com/windows-insider/)
  - [Dev Channel for Next of Windows 11 24H2 (Build 26xxx)](https://aka.ms/DevLatest)
    - Build 26120.961 (Cumulative Update) <span style="color: red;">*<<2024/06/15 updated from 26120.770>>*</span> 
      - 右下のバージョン情報はない（今後復活する）ため、代わりに「システム > バージョン情報」で確認
        ![Version Information](./images/Windows/20240615_Windows11_Build26120.png)
    - [履歴](./history/Windows.md)
  - [Canary Channel](https://aka.ms/CanaryLatest)
- [WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install)
  - [Ubuntu 24.04](https://www.releases.ubuntu.com/noble/) <BR />
    - <span style="color: red;">*<<2024/04/26 updated from 24.04-beta>>*</span>
    - <span style="color: red;">*<<2024/05/27 updated from 22.04.3>>*</span>
    <details>
    <summary>ディストリビューション・バージョン情報</summary>

    ```
    PRETTY_NAME="Ubuntu 24.04 LTS"
    NAME="Ubuntu"
    VERSION_ID="24.04"
    VERSION="24.04 LTS (Noble Numbat)"
    VERSION_CODENAME=noble
    ID=ubuntu
    ID_LIKE=debian
    HOME_URL="https://www.ubuntu.com/"
    SUPPORT_URL="https://help.ubuntu.com/"
    BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
    PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
    UBUNTU_CODENAME=noble
    LOGO=ubuntu-logo
    ```
    </details>
  - [履歴](./history/Wsl.md)
- [Chrome OS Flex](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)
  - バージョン 125.0.6422.140 <span style="color: red;">*<<2024/05/31 updated from 124.0.6367.225>>*</span>
    ![Chrome OS Flexバージョン情報](./images/Chrome/20240531_Chrome_OS_Flex_125.0.6422.140.png)
    - 新機能紹介
      - ゲームダッシュボード
        ![新機能１](./images/Chrome/20240531_Chrome_OS_Flex_125_NewFunction1.png)
      - ToDoリスト
        ![新機能２](./images/Chrome/20240531_Chrome_OS_Flex_125_NewFunction2.png)
      - GIF形式でのスクリーンキャプチャ
        ![新機能３](./images/Chrome/20240531_Chrome_OS_Flex_125_NewFunction3.png)
      - マウスボタンのカスタマイズ（124系から）
        ![新機能４](./images/Chrome/20240531_Chrome_OS_Flex_125_NewFunction4.png)
      - キーボードショートカット（124系から）
        ![新機能５](./images/Chrome/20240531_Chrome_OS_Flex_125_NewFunction5.png)
  - [履歴](./history/Chrome.md)
- [Oracle Cloud](./knowhow/OracleCloud.md)

## ツール
**OS/言語を問わず利用するツールの情報**
- [Visual Studio Code 1.90.2](https://code.visualstudio.com/) <span style="color: red;">*<<2024/06/21 updated from 1.90.1>>*</span>
  - 新機能(1.90)
    - Ctrl + Clickで複数のタブを選択し、移動することが可能に
      [![Multi Tabs Select](./captures/20240606_vscode1.90.png)](./captures/20240606_vscode1.90.mp4)
  - 開発環境はVisual Studio Codeを中心に使っており、インストールしている拡張機能の一覧は、[VSCode拡張機能](./sub/vscodeExtensions.md)にまとめてあります。<BR />
- [Git 2.45.1](https://git-scm.com/download) <span style="color: red;">*<<2024/05/16 updated from 2.45>>*</span>
- [GitHub Desktop 3.4.0](https://desktop.github.com/release-notes/) <span style="color: red;">*<<2024/05/30 updated from 3.3.14>>*</span>
  - サイトでのリリース通知があってから、アップデートできるまでにはタイムラグがありそう
- [PowerShell 7.4.2](https://github.com/PowerShell/PowerShell)
- [Docker](./knowhow/Docker.md)

##  サービス
- [Penpot 2.0](https://design.penpot.app/)

#  プログラミング言語
**独学で取り組んでいる言語／データベース／ドキュメント作成に関するノウハウは、各ページに蓄積**
- 言語共通
  - [Database & SQL](./knowhow/Database.md)
  - [Documentation](./knowhow/Documentation.md)
  - [Exercism](./knowhow/Exercism.md)
- [.NET](./knowhow/NET.md)
- [Rust](./knowhow/Rust.md)
- [Kotlin](./knowhow/Kotlin.md)
- [Java](./knowhow/Java.md)  
- [Dart/Flutter](./knowhow/Flutter.md)
- [TypeScript/JavaScript](./knowhow/TypeScript.md)
- [PHP](./knowhow/Php.md)
- [Go](./knowhow/Go.md)
- [Python](./knowhow/Python.md)
- [Pascal](./knowhow/Others.md#pascal)
- [Swift](./knowhow/Others.md#swift)
- [Carbon](./knowhow/Carbon.md)
- [LLVM](./knowhow/Others.md#llvm)
- [Unity](./knowhow/Unity.md)

# ノウハウ
**OSやツールのノウハウは、以下を参照**
- Windows
  - [USBメモリの復旧](https://jp.easeus.com/partition-manager/fix-usb-drive-incorrect-size.html)
  - [Dev Channelへの変更](https://mitomoha.hatenablog.com/entry/2023/08/11/010623)
  - [システムロケールの変更](./windows/systemLocale.md)
  - [フォントの変更](./windows/font.md)
- WSL
  - WSLバージョンを確認する
    ```
    wsl --version
    ```
  - WSLを更新する
    ```
    wsl --update
    ``` 
  - ディストリビューションのバージョンを確認する
    ```
    cat /etc/os-release
    ```
    ```
    lsb_release -a
    ```
  - [Ubuntu Upgrade to 24.04 Noble Numbat: A step by step howto guide](https://linuxconfig.org/ubuntu-upgrade-to-24-04-noble-numbat-a-step-by-step-howto-guide)
  - [【WSL2】Ubuntu 20.04.4 LTS を 22.04 LTS へアップグレードした](https://zenn.dev/ryuu/articles/upgrade-ubuntu2204-wsl)
- Chrome OS Flex
  - セットアップ
    - [インストールガイド](https://support.google.com/chromeosflex/answer/11552529?hl=ja)
    - Linux開発環境
      - [ChromebookのLinux環境(日本語)セットアップ](https://3nmt.com/chromebook_linux_japanese/)
      - [fcitx.confについて](https://qiita.com/suzuki_sh/items/1319b050ba41e03890f5)
      - github
        ```
        git config --global user.name
        git config --global user.email
        sudo apt install gnome-keyring
        ```
      - gcc
        ```
        sudo apt install build-essential
        sudo apt install gcc
        ```
      - [VS Codeで日本語入力できるようにする](https://gotoblog.org/chromebook-vscode-japanese/)
  - アップデート
    - Visual Studio Code
      ![Upgrade on Chrome OS Flex](./images/Chrome/20240119_code_1.85.2.png)
  - カスタマイズ
    - 追加された「IPAmj明朝フォント」をVisual Studio Codeで使ってみた
      ![フォント設定](./images/Chrome/20240406_VSCode_IPAexMincho.png)
    - キーボードのショートカットのカスタマイズ
      ![ショートカット表示](./images/Chrome/20240413_Chrome_ShortcutCustomize1.png)
      ![ショートカット一覧](./images/Chrome/20240413_Chrome_ShortcutCustomize2.png)
      ![ショートカットカスタマイズ](./images/Chrome/20240413_Chrome_ShortcutCustomize3.png)
    - マウスボタンのカスタマイズ
      ![マウスボタンカスタマイズ1](./images/Chrome/20240413_Chrome_MouseCustomize1.png)
      ![マウスボタンカスタマイズ2](./images/Chrome/20240413_Chrome_MouseCustomize2.png)
  - トラブルシューティング
    - Could not create Moklist: Volume Full と出て起動できない
      - 何らかの原因でSecure Bootできなくなったことから、Bios / Secure Boot menuで、Delete all Secure Boot variablesを選択する
      - 起動できた後、安易にEnroll all Factory Default Keys しないほうが良い。 
- Git
  - Windowsでの更新
    ```
    git update-git-for-windows
    ```
  - ユーザ設定
    ```
    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com
    ```
- PowerShell
  - インストール
    ```
    winget install --id Microsoft.Powershell --source winget
    ```
  - 環境変数の確認
    ```shell
    $env:Path.Split(";")
    ```
  - [文字エンコードについて](https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_character_encoding?view=powershell-7.3)
    - PowerShell上でUTF-8(BOMなし)に変更する
      ```shell
      $PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
      ```
- PenPot
  - 日本語表示に切り替える<BR />
    ![Setting](./images/Penpot/20240421_Setting.png)
  - パーツをまとめるには、レイヤーを活用する<BR />
    ![Layer](./images/Penpot/20240421_Layer.png)
  - ファイルに出力する<BR />
    ![Export](./images/Penpot/20240421_Export.png)
    - ファイル名は、小文字がよい。Next.JSには、SVGがよい。
---
[プロフィール](./sub/Profile.md)
