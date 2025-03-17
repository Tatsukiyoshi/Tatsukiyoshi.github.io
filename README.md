# トップページ <a id="Top"></a>
[ダイジェスト](#Digest) | [環境(OS/ツール/サービス)](#Environment) | [プログラミング言語](#ProgrammingLanguage)

---
##  ダイジェスト <a id="Digest"></a>
```
毎週日曜日に更新
```
[最新ダイジェスト：第２週（2025/3/9～2025/3/15）](https://zenn.dev/tatsukiyoshi/articles/8c3efc852cb590) / [一覧](./digest/digestList.md)

##  創作物
```
知識を形にする
```
- [Tauriデスクトップアプリケーション](./design/tauriApp/index.md)
- [Reactアプリ](./design/reactApp/index.md) / [詳細検討](./design/reactApp/detail.md)
- [課題整理 with Dioxus](./design/dioxusApp/system.md)

##  環境 <a id="Environment"></a>
```
独学環境の情報
```
[OS](#os) | [ツール](#Tools) | [サービス](#Service)

OS                                 |端末                |リンク
-----------------------------------|--------------------|---
[Windows](#Windows)                |Mini-S12            |[ノウハウ](#WindowsKnowhow)
[Windows on Arm](#WindowsArm)      |OmniBook X          |↑
[Windows Insider](#WindowsInsider) |OmniBook Ultra Flip |↑
[Mac OS](#Mac)                     |MacBook Air         |[ノウハウ](#MacKnowhow)
[Chrome OS Flex](#ChromeOSFlex)    |IdeaPad             |[ノウハウ](#ChromeKnowhow)
[Ubuntu Desktop](#UbuntuDesktop)   |TransBook           |[ノウハウ](#UbuntuKnowhow)

- 移行計画
  - (v) Windows Insider環境 を OmniBook Ultra Flip に構築
  - (v) Windows on Arm環境追加（OmniBook X）
  - (v) Chrome OS Flex環境を IdeaPad に再構築
  - (v) Ubuntu Desktop環境を構築

### OS <a id="OS"></a>
- [Windows Insider](https://blogs.windows.com/windows-insider/)<a id="WindowsInsider"></a>
  - [Dev Channel for Next of Windows 11 24H2 (Build 26100)](https://aka.ms/DevLatest)
    - Build 26120.3380 (Cumulative Update) <span style="color: red;">*<<2025/03/11 updated from Build 26120.3360 >>*</span>
      ![Cumulative Update](./images/Windows/20250311_WindowsUpdate_DevChannel.png)
      - ウォーターマーク（右下のバージョン情報：今後復活予定）の代わりに「システム > バージョン情報」で確認
        ![Version Information](./images/Windows/20250311_Windows11_Build26120.png)
    - [履歴](./history/Windows.md)
  - [Canary Channel](https://aka.ms/CanaryLatest)

- [Windows 11](https://www.microsoft.com/ja-jp/windows/?r=1)<a id="Windows"></a>
  - Windows 11 24H2 <span style="color: red;">*<<2024/11/23 updated from 23H2(10.0.22631.4460)>>*</span>
    - ついに、24H2が降臨
      ![Cumulative Update](./images/Windows/20241123_Windows11Update_24H2.png)
    - しかし、空き容量不足のため、WSL2アンインストールで何とか準備OK！
      ![Almost Ready After Shapeup](./images/Windows/20241123_Windows11Update_24H2_2.png)
    - インストール中に謎のフォルダ出現（2025年？）
      ![Nexstgo.sav](./images/Windows/20241123_Windows11Update_24H2_3.png)
    - 更新完了後のバージョン情報
      ![Version Information](./images/Windows/20241123_MiniS12_WindowsVersion.png)
  - Windows 11 on Arm 24H2 Build 26100.3476 <span style="color: red;">*<<2025/03/13 updated>>*</span><a id="WindowsArm"></a>
    ![Version Information](./images/Windows/20250318_OmniBookX_WindowsVersion.png)
  - Updated to Windows Insider Dev Channel
    - Windows 11 24H2 <span style="color: red;">*<<2024/11/14 setup>>*</span>
      ![Version Information](./images/Windows/20241114_OmniBookUF_WindowsVersion.png)

- [WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install)
  1.  Windows Insider
      - [WSL 2.5.1.0](https://github.com/microsoft/WSL) <span style="color: red;">*<<2025/03/13 updated from 2.4.11.0>>*</span>

        <details>
        <summary>カーネルバージョン: 6.6.75.1-1</summary>

        ```
        WSL バージョン: 2.5.1.0
        カーネル バージョン: 6.6.75.1-1
        WSLg バージョン: 1.0.66
        MSRDC バージョン: 1.2.5716
        Direct3D バージョン: 1.611.1-81528511
        DXCore バージョン: 10.0.26100.1-240331-1435.ge-release
        Windows バージョン: 10.0.26120.3380
        ```
        </details>

      - [Ubuntu 24.04.2](https://www.releases.ubuntu.com/noble/) <span style="color: red;">*<<2025/02/06 updated from Ubuntu 24.04.1>>*</span>
        - [Upgrade@2025/02/01](./sub/Ubuntu/20250201_Upgrade.md)

        <details>
        <summary>ディストリビューション・バージョン情報</summary>

        ```
        PRETTY_NAME="Ubuntu 24.04.2 LTS"
        NAME="Ubuntu"
        VERSION_ID="24.04"
        VERSION="24.04.2 LTS (Noble Numbat)"
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

- [Mac OS](https://www.apple.com/jp/macos/)<a id="Mac"></a>
  - [Sequoia 15.3.2](https://www.apple.com/jp/macos/macos-sequoia/)
    <span style="color: red;">*<<2025/03/13 updated from Sequoia 15.3.1>>*</span>
    - ソフトウェアアップデート
      ![Update Check](./images/Mac/20250313_MacOS_Sequoia15.3.2Update.png)
    - バージョン情報
      ![Sequoia 15.3.2](./images/Mac/20250313_MacOS_Sequoia15.3.2.png)
  - [履歴](./history/Mac.md)

- [Chrome OS Flex](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)<a id="ChromeOSFlex"></a>
  - バージョン 133.0.6943.184 <span style="color: red;">*<<2025/03/17 updated from 133.0.6943.146>>*</span>
    ![Chrome OS Flexバージョン情報](./images/Chrome/20250317_Chrome_OS_Flex_133.0.6943.184.png)
      - 更新中
        ![Updating](./images/Chrome/20250317_Chrome_OS_Flex_Updating133.0.6943.184.png)
      - [Debian 12.10](https://www.debian.org/) <span style="color: red;">*<<2025/03/17 updated from 12.9>>*</span>
        <details>
        <summary>ディストリビューション・バージョン情報</summary>

        ```
        PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"
        NAME="Debian GNU/Linux"
        VERSION_ID="12"
        VERSION="12 (bookworm)"
        VERSION_CODENAME=bookworm
        ID=debian
        HOME_URL="https://www.debian.org/"
        SUPPORT_URL="https://www.debian.org/support"
        BUG_REPORT_URL="https://bugs.debian.org/"
        ```
  - [履歴](./history/Chrome.md)

- [Ubuntu Desktop 24.10](https://jp.ubuntu.com/download) <span style="color: red;">*<<2025/01/11 updated from 24.04.1>>*</span><a id="UbuntuDesktop"></a>
  ![Version Information](./images/Ubuntu/20250111_Ubuntu24.10.png)

  <details>
  <summary>System Details</summary>

  ```
  # System Details Report
  ---

  ## Report details
  - **Date generated:**                              2025-03-01 21:47:59

  ## Hardware Information:
  - **Hardware Model:**                              ASUSTeK COMPUTER INC. T103HAF
  - **Memory:**                                      4.0 GiB
  - **Processor:**                                   Intel® Atom™ x5-Z8350  × 4
  - **Graphics:**                                    Intel® HD Graphics (CHV)
  - **Disk Capacity:**                               125.1 GB

  ## Software Information:
  - **Firmware Version:**                            T103HAF.307
  - **OS Name:**                                     Ubuntu 24.10
  - **OS Build:**                                    (null)
  - **OS Type:**                                     64-bit
  - **GNOME Version:**                               47
  - **Windowing System:**                            Wayland
  - **Kernel Version:**                              Linux 6.11.0-18-generic
  ```
  </details>

  <details>
  <summary>ディストリビューション・バージョン情報</summary>

  ```
  PRETTY_NAME="Ubuntu 24.10"
  NAME="Ubuntu"
  VERSION_ID="24.10"
  VERSION="24.10 (Oracular Oriole)"
  VERSION_CODENAME=oracular
  ID=ubuntu
  ID_LIKE=debian
  HOME_URL="https://www.ubuntu.com/"
  SUPPORT_URL="https://help.ubuntu.com/"
  BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
  PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
  UBUNTU_CODENAME=oracular
  LOGO=ubuntu-logo
  ```
  </details>

  - カーネルバージョン
    - 6.11.0-13 / Ubuntu 24.10
    - 6.8.0-51 / Ubuntu 24.04

  - [履歴](./history/Ubuntu%20Desktop.md)

- [Oracle Cloud](./knowhow/OracleCloud.md)

### ツール <a id="Tools"></a>
```
OS/言語を問わず利用するツールの情報
```
- [Visual Studio Code 1.98.2](https://code.visualstudio.com/) <span style="color: red;">*<<2025/03/14 updated from 1.98.1>>*</span>
  - [以前の新機能](./history/VSCode.md)
  - 開発環境は、Visual Studio Codeを中心に使っている。
  - インストールしている拡張機能の一覧は、[VSCode拡張機能](./sub/vscodeExtensions.md)にまとめている。<BR />
- [Git](https://git-scm.com/download)
  - Windows
    - Git 2.48.1 <span style="color: red;">*<<2025/02/15 updated from 2.47.1>>*</span>
  - Mac OS
    - Git 2.48.1 <span style="color: red;">*<<2025/01/25 updated from 2.47.1>>*</span>

**Windows**
- [PowerShell 7.5.0](https://github.com/PowerShell/PowerShell)<span style="color: red;">*<<2025/01/25 updated from 7.4.6>>*</span>
  - 製品版では、ストアアプリとして自動更新される
    ```
    2025/1/25 ストアアプリにて更新できないため、PowerShellの起動時に出るアップデートを通知するメッセージ内のリンクからダウンロード
    ```
  - Insider Preview環境では、ストアで更新できない。
    - Windowsターミナルに表示されたリンクからインストーラをダウンロードする
      ![New Version Available](./images/Windows/20240728_Windows_PowerShell_7.4.4.png)
    - インストーラを起動して、セットアップする
      ![Setup with Installer](./images/Windows/20240728_Windows_PowerShell_Setup7.4.4.png)
- [GitHub Desktop 3.4.16](https://desktop.github.com/release-notes/) <span style="color: red;">*<<2025/02/23 updated from 3.4.8>>*</span>
  - サイトでのリリース通知があってから、アップデートできるまでにはタイムラグがありそう
  - 起動したGitHub Desktopでアップデートできる場合とできない場合があるみたい
    - 3.4.5 -> 3.4.6 OK
    - 3.4.0 -> 3.4.5 OK
    - 3.4.2 -> 3.4.5 NG
- [Docker](./knowhow/Docker.md)

**Mac**
- [Xcode 16.2](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/01/09 Updated from 16.1>>*</span>
- [CocoaPods 1.16.2](https://github.com/CocoaPods/CocoaPods) <span style="color: red;">*<<2025/01/09 Updated from 1.16.1>>*</span>
- [Zed 0.152.3](https://zed.dev) <span style="color: red;">*<<2024/09/10 installed>>*</span>

### サービス <a id="Service"></a>
- [Penpot 2.1](https://design.penpot.app/) <span style="color: red;">*<<2024/07/10 released>>*</span>

[トップへ戻る](#Top)

##  ノウハウ
### プログラミング言語 <a id="ProgrammingLanguage"></a>
```
独学で取り組んでいる言語／データベース／ドキュメント作成に関するノウハウは、各ページに蓄積
```
言語                                 |最新トピック||
-------------------------------------|----------|--------
[Rust](./knowhow/Rust.md)            |2025/03/15|Update: RustRover 2025.1 EAP build 6
[.NET](./knowhow/NET.md)             |2025/03/13|Update: Visual Studio 2022 17.14 Preview 2.0
[TypeScript](./knowhow/TypeScript.md)|2025/03/08|Update: Astro 5.4.2 / Next.js 15.2.1 / Svelte 5.22.6
[Kotlin](./knowhow/Kotlin.md)        |2025/03/08|Update: Android Studio Meerkat 2024.3.2 Canary 8
[Python](./knowhow/Python.md)        |2025/03/08|Setup: Python 3.13.2
[Flutter](./knowhow/Flutter.md)      |2025/03/05|Update: Flutter 3.29.0
[Carbon](./knowhow/Carbon.md)        |2025/02/01|Update on Ubuntu 24.04
[Java](./knowhow/Java.md)            |2025/01/07|Setup: Pleiades 2024-12

言語共通                                    |日付      |トピック
-------------------------------------------|----------|--------
[Database & SQL](./knowhow/Database.md)    |2025/03/02|Update: PostgreSQL 17.4
[Documentation](./knowhow/Documentation.md)|-
[Exercism](./knowhow/Exercism.md)          |2024/08/03|tournament@Rust finished

その他（更新停滞）                          |日付      |トピック
-------------------------------------------|----------|--------
[PHP](./knowhow/Php.md)
[Go](./knowhow/Go.md)
[Pascal](./knowhow/Others.md#pascal)
[Swift](./knowhow/Others.md#swift)
[LLVM](./knowhow/Others.md#llvm)
[Unity](./knowhow/Unity.md)

### OS／ツール
```
OSやツールのノウハウは、以下を参照
```
- Windows <a id="WindowsKnowhow"></a>
  - [USBメモリの復旧](https://jp.easeus.com/partition-manager/fix-usb-drive-incorrect-size.html)
  - [Dev Channelへの変更](https://mitomoha.hatenablog.com/entry/2023/08/11/010623)
  - [システムロケールの変更](./windows/systemLocale.md)
  - [フォントの変更](./windows/font.md)
- Mac <a id="MacKnowhow"></a>
  - gitを有効化するには、コマンドラインデベロッパーツールをインストールする
    - [コマンドラインデベロッパツールのインストール](https://tracpath.com/bootcamp/git-install-to-mac.html)
      ![CommandLineDeveloperTools](./images/Mac/20240813_CommandLineDeveloperTools.png)
  - gitを最新化するには、[homebrew](https://brew.sh)を使って、gitをインストールする
  - gitには、PAT(Personal Access Token)を使ってPushする
    -> [アクセストークンがないとGitHubでpushができない](https://qiita.com/masa_code/items/bb935c499f20d0fae7b0)
  - iOS Simulatorの更新
    - [Xcodeを使用してiOS simulatorを追加する方法](https://qiita.com/shint_1/items/656044190516a3926364)
    - XCodeで新しいバージョンをダウンロードする
    - XCodeで古いバージョンは削除し、単一のバージョンのみとすること（複数存在するとシミュレータでの実行時にエラーとなる模様）
    ![Components Update](/images/Mac/20250301_XCode_Components_Update.png)
    ![Components Updating](/images/Mac/20250301_XCode_Components_Updating.png)
  - CocoaPods
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
- Chrome OS Flex <a id="ChromeKnowhow"></a>
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
- Ubuntu <a id="UbuntuKnowhow"></a>
  - ISOイメージを作成する
    - [balenaEtcher - Flash OS images to SD cards & USB drives](https://etcher.balena.io/)
  - スクリーンショット
    - 既定値では、SHIFT+CTRL+ALT+Rで撮ることが可能
- GitHub
  - GitHub Copilot Free
    ![GitHub Copilot Free](./images/GitHub/20241220_GitHub_Copilot_Free.png)
  - GitHub Issue
    - GitHubも改良が進んでおり、Issueを作成すると、そのIssueのためのBranchを作成し、そのBranchをGitHub Desktopで開くとかもできる
      ![GitHub Issue](./images/GitHub/20250223_GitHub_Issue_to_Branch.png)
    - BranchからのMerge Requestを作成すると、Issueに関連付けられる
      ![GitHub PR](./images/GitHub/20250223_GitHub_Pull_Request_to_Issue.png)
    - Sub Issueの並び替え（Issueにカーソルを合わせるとカーソルが手になって並び替えできる）
      ![SubIssue Manually Sort](./images/GitHub/20250301_GitHub_SubIssue_ManuallySort.png)
      - Insider BuildのEdgeではできない模様（カーソルが手に変わらない！）
        ![SubIssue Not Manually Sort](./images/GitHub/20250301_GitHub_SubIssue_NotManuallySort.png)
  - GitHub ProjectsでBoard作成してみた
    ![GitHub Projects Board](./images/GitHub/20250301_GitHub_Projects_Board.png)
- Git
  - ユーザ設定
    ```
    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com
    ```
  - [ssh接続について](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - Windowsでの更新
    ```
    git update-git-for-windows
    ```
  - Macでの更新
    ```
    brew upgrade git
    ```
    <details>
    <summary>Update Log</summary>

    ```
    ==> Auto-updating Homebrew...
    Adjust how often this is run with HOMEBREW_AUTO_UPDATE_SECS or disable with
    HOMEBREW_NO_AUTO_UPDATE. Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
    ==> Auto-updated Homebrew!
    Updated 2 taps (homebrew/core and homebrew/cask).
    ==> New Formulae
    argtable3           jikken              m68k-elf-binutils   python-gdbm@3.13
    blisp               jxl-oxide           m68k-elf-gcc        python-tk@3.13
    djlint              libcss              openapi-diff        python@3.13
    dug                 libdom              oxlint              tllist
    gptme               libhubbub           paperjam            tmux-sessionizer
    icu4c@75            libparserutils      pipet
    ==> New Casks
    ableset                                  font-matemasie
    anytype@alpha                            font-moderustic
    anytype@beta                             font-new-amsterdam
    backyard-ai                              font-noto-serif-todhri
    cap                                      font-sour-gummy
    colemak-dh                               font-suse
    colemak-dhk                              homerow
    displaybuddy                             imaging-edge
    font-bungee-tint                         magicquit
    font-edu-au-vic-wa-nt-arrows             microsoft-edge@canary
    font-edu-au-vic-wa-nt-dots               quba
    font-edu-au-vic-wa-nt-guides             sanctum
    font-edu-au-vic-wa-nt-pre                thunderbird@esr
    font-funnel-display                      typefully
    font-funnel-sans

    You have 3 outdated formulae installed.

    ==> Upgrading 1 outdated package:
    git 2.46.0 -> 2.47.0
    ==> Downloading https://ghcr.io/v2/homebrew/core/git/manifests/2.47.0
    ######################################################################### 100.0%
    ==> Fetching git
    ==> Downloading https://ghcr.io/v2/homebrew/core/git/blobs/sha256:7c09abec73bcb8
    ######################################################################### 100.0%
    ==> Upgrading git
      2.46.0 -> 2.47.0 
    ==> Pouring git--2.47.0.arm64_sequoia.bottle.tar.gz
    ==> Caveats
    The Tcl/Tk GUIs (e.g. gitk, git-gui) are now in the `git-gui` formula.
    Subversion interoperability (git-svn) is now in the `git-svn` formula.

    zsh completions and functions have been installed to:
      /opt/homebrew/share/zsh/site-functions
    ==> Summary
    🍺  /opt/homebrew/Cellar/git/2.47.0: 1,684 files, 54.4MB
    ==> Running `brew cleanup git`...
    Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
    Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
    Removing: /opt/homebrew/Cellar/git/2.46.0... (1,678 files, 51.5MB)
    Removing: /Users/taishow2024/Library/Caches/Homebrew/git_bottle_manifest--2.46.0... (15.4KB)
    ```
    </details>
  - ブランチ確認
    ```
    git branch --contains
    ```
  - ブランチ変更
    ```
    git checkout <ブランチ名>
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
- PenPot
  - 日本語表示に切り替える<BR />
    ![Setting](./images/Penpot/20240421_Setting.png)
  - パーツをまとめるには、レイヤーを活用する<BR />
    ![Layer](./images/Penpot/20240421_Layer.png)
  - ファイルに出力する<BR />
    ![Export](./images/Penpot/20240421_Export.png)
    - ファイル名は、小文字がよい。Next.JSには、SVGがよい。
---
[プロフィール](./sub/Profile.md) | [トップへ戻る](#Top)
