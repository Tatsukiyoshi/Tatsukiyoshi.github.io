# トップページ

##  ダイジェスト
**毎週日曜日に更新**

  [最新ダイジェスト（2024/3/18～3/24）](https://note.com/taishow2020/n/n0aa1d7326546)/
  [一覧](./digest/digestList.md)

##  創作物
**知識を形にする**
- [Tauriデスクトップアプリケーション](./design/tauriApp/index.md)

##  OS
**独学環境の情報**
- [Windows Insider](https://aka.ms/DevLatest)
  - Dev Channel for Windows 11 24H2 (Build 26xxx)
    - Build 26090 <span style="color: red;">*<<2024/03/29 updated from 26085>>*</span>
      - 右下のバージョン情報はない（今後復活する）ため、代わりに「システム > バージョン情報」で確認
      ![デスクトップ](./images/Windows/20240329_Windows11_Build26090.png)
    - [履歴](./history/Windows.md)
- [WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install)
  - [Ubuntu 22.04.4](https://www.releases.ubuntu.com/jammy/) <span style="color: red;">*<<2024/02/29 updated from 22.04.3>>*</span>
    <details>
    <summary>ディストリビューション・バージョン情報</summary>

    ```
    PRETTY_NAME="Ubuntu 22.04.4 LTS"
    NAME="Ubuntu"
    VERSION_ID="22.04"
    VERSION="22.04.4 LTS (Jammy Jellyfish)"
    VERSION_CODENAME=jammy
    ID=ubuntu
    ID_LIKE=debian
    HOME_URL="https://www.ubuntu.com/"
    SUPPORT_URL="https://help.ubuntu.com/"
    BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
    PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
    UBUNTU_CODENAME=jammy
    ```
    </details>
  - [履歴](./history/Wsl.md)
- [Chrome OS Flex](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)
  - バージョン 122.0.6261.137 <span style="color: red;">*<<2024/03/23 updated from 122.0.6261.118>>*</span>
    ![Chrome OS Flexバージョン情報](./images/Chrome/20240323_Chrome_OS_Flex_122.0.6261.137.png)
  - [履歴](./history/Chrome.md)
- [Oracle Cloud](./knowhow/OracleCloud.md)

## ツール
**OS/言語を問わず利用するツールの情報**
- [Visual Studio Code 1.87.2](https://code.visualstudio.com/) <span style="color: red;">*<<2024/03/13 updated from 1.87.1>>*</span> <BR />
  開発環境はVisual Studio Codeを中心に使っており、インストールしている拡張機能の一覧は、[VSCode拡張機能](./sub/vscodeExtensions.md)にまとめてあります。<BR />
  - 1.82で発生していたデバッグコンソールがクリアできなくなった問題は、1.82.2で解消
- [Git 2.44](https://git-scm.com/download) <span style="color: red;">*<<2024/03/10 updated from 2.43>>*</span>
- [GitHub Desktop 3.3.11](https://desktop.github.com/release-notes/) <span style="color: red;">*<<2024/03/10 updated from 3.3.8>>*</span>
  - サイトでのリリース通知があってから、アップデートできるまでにはタイムラグがありそう
- PowerShell 7.4.1
- [Docker](./knowhow/Docker.md)

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
  - [【WSL2】Ubuntu 20.04.4 LTS を 22.04 LTS へアップグレードした](https://zenn.dev/ryuu/articles/upgrade-ubuntu2204-wsl)
- Chrome OS Flex
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
  - Visual Studio Code
    - コマンドでアップデート
      ![Upgrade on Chrome OS Flex](./images/Chrome/20240119_code_1.85.2.png)
    - [VS Codeで日本語入力できるようにする](https://gotoblog.org/chromebook-vscode-japanese/)
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
---
[プロフィール](./sub/Profile.md)
