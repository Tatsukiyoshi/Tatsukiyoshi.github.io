# トップページ

##  ダイジェスト
```
毎週日曜日に更新
```
[最新ダイジェスト：（2025/1/12～2025/1/18）](https://zenn.dev/tatsukiyoshi/articles/07af1ff37b5b07) / [一覧](./digest/digestList.md)

##  創作物
```
知識を形にする
```
- [Tauriデスクトップアプリケーション](./design/tauriApp/index.md)
- [Reactアプリ](./design/reactApp/index.md) / [詳細検討](./design/reactApp/detail.md)
- [課題整理 with Dioxus](./design/dioxusApp/system.md)

##  環境
```
独学環境の情報
```
OS                          |端末
----------------------------|---------
InsiderDev(Windows Insider) |OmniBook Ultra Flip
Windows                     |Mini-S12
Windows on Arm              |OmniBook X
Mac OS                      |MacBook Air
Chrome OS Flex              |IdeaPad
Ubuntu Desktop              |TransBook

- 移行計画
  - (v) InsiderDev環境 を OmniBook Ultra Flip に構築
  - (v) Windows on Arm環境追加（OmniBook X）
  - (v) Chrome OS Flex環境を IdeaPad に再構築
  - (v) Ubuntu Desktop環境を構築

### OS
- [Windows Insider](https://blogs.windows.com/windows-insider/)
  - [Dev Channel for Next of Windows 11 24H2 (Build 26100)](https://aka.ms/DevLatest)
    - Build 26120.3000 (Cumulative Update) <span style="color: red;">*<<2025/01/18 updated from Build 26120.2992 >>*</span>
      ![Cumulative Update](./images/Windows/20250125_WindowsUpdate_DevChannel.png)
      - ウォーターマーク（右下のバージョン情報：今後復活予定）の代わりに「システム > バージョン情報」で確認
        ![Version Information](./images/Windows/20250118_Windows11_Build26120.png)
      - タスクバーのバッテリアイコンが改善（スタートとタスクビューのアイコンがない！）
        ![Taskbar](./images/Windows/TaskBar_20250125_134309.png)
        ↓再起動で復活した！検索アイコンも！
        ![Taskbar](./images/Windows/TaskBar_20250125_160253.png)
    - [履歴](./history/Windows.md)
  - [Canary Channel](https://aka.ms/CanaryLatest)

- [Windows 11](https://www.microsoft.com/ja-jp/windows/?r=1)
  - Windows 11 24H2 <span style="color: red;">*<<2024/11/23 updated from 23H2(10.0.22631.4460)>>*</span>
    - ついに、24H2が降臨
      ![Cumulative Update](./images/Windows/20241123_Windows11Update_24H2.png)
    - しかし、空き容量不足のため、WSL2アンインストールで何とか準備OK！
      ![Almost Ready After Shapeup](./images/Windows/20241123_Windows11Update_24H2_2.png)
    - インストール中に謎のフォルダ出現（2025年？）
      ![Nexstgo.sav](./images/Windows/20241123_Windows11Update_24H2_3.png)
    - 更新完了後のバージョン情報
      ![Version Information](./images/Windows/20241123_MiniS12_WindowsVersion.png)
  - Windows 11 on Arm 24H2 <span style="color: red;">*<<2024/11/14 setup>>*</span>
    ![Version Information](./images/Windows/20241114_OmniBookX_WindowsVersion.png)
  - Updated to Windows Insider Dev Channel
    - Windows 11 24H2 <span style="color: red;">*<<2024/11/14 setup>>*</span>
      ![Version Information](./images/Windows/20241114_OmniBookUF_WindowsVersion.png)

- [WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install)
  1.  InsiderDev
      - [WSL 2.4.8.0](https://github.com/microsoft/WSL) <span style="color: red;">*<<2024/12/19 updated from 2.4.4.0>>*</span>

        <details>
        <summary>カーネルバージョン: 5.15.167.4-1</summary>

        ```
        WSL バージョン: 2.4.8.0
        カーネル バージョン: 5.15.167.4-1
        WSLg バージョン: 1.0.65
        MSRDC バージョン: 1.2.5716
        Direct3D バージョン: 1.611.1-81528511
        DXCore バージョン: 10.0.26100.1-240331-1435.ge-release
        Windows バージョン: 10.0.26120.2705
        ```
        </details>

      - [Ubuntu 24.04.1](https://www.releases.ubuntu.com/noble/) <span style="color: red;">*<<2024/11/15 installed>>*</span>

        <details>
        <summary>ディストリビューション・バージョン情報</summary>

        ```
        PRETTY_NAME="Ubuntu 24.04.1 LTS"
        NAME="Ubuntu"
        VERSION_ID="24.04"
        VERSION="24.04.1 LTS (Noble Numbat)"
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

- [Mac OS](https://www.apple.com/jp/macos/)
  - [Sequoia 15.2](https://www.apple.com/jp/macos/macos-sequoia/)
    <span style="color: red;">*<<2024/12/12 updated from Sequoia 15.1.1>>*</span>
    - ソフトウェアアップデート
      ![Update Check](./images/Mac/20241212_MacOS_Sequoia15.2Update.png)
    - バージョン情報
      ![Sequoia 15.2](./images/Mac/20241212_MacOS_Sequoia15.2.png)
  - [履歴](./history/Mac.md)

- [Chrome OS Flex](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)
  - バージョン 132.0.6834.154 <span style="color: red;">*<<2025/01/25 updated from 131.0.6778.241>>*</span>
    ![Chrome OS Flexバージョン情報](./images/Chrome/20250125_Chrome_OS_Flex_132.0.6834.154.png)
      - 更新中(to 132.0.6834.154)
        ![Updating2](./images/Chrome/20250125_Chrome_OS_Flex_Updating132.0.6834.154.png)
      - 更新中(to 132.0.6834.94)
        ![Updating1](./images/Chrome/20250125_Chrome_OS_Flex_Updating132.0.6834.94.png)
  - [履歴](./history/Chrome.md)

- [Ubuntu Desktop 24.10](https://jp.ubuntu.com/download) <span style="color: red;">*<<2025/01/11 updated from 24.04.1>>*</span>
  ![Version Information](./images/Ubuntu/20250111_Ubuntu24.10.png)
  ![System Detail](./images/Ubuntu/20250112_Ubuntu24.10_Detail.png)

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

### ツール
```
OS/言語を問わず利用するツールの情報
```
- [Visual Studio Code 1.96.4](https://code.visualstudio.com/) <span style="color: red;">*<<2025/01/17 updated from 1.96.2>>*</span>
  - GitHub Copilot
    - 表示メニューから選択するとサイドパネルにCopilotが出現する
      ![Menu](./images/VisualStudioCode/20241220_Menu_of_GitHub_Copilot_Free.png)
      ![AI Chat](./images/VisualStudioCode/20241220_GitHub_Copilot_Free.png)
  - [以前の新機能](./history/VSCode.md)
  - 開発環境は、Visual Studio Codeを中心に使っている。
  - インストールしている拡張機能の一覧は、[VSCode拡張機能](./sub/vscodeExtensions.md)にまとめている。<BR />
- [Git](https://git-scm.com/download)
  - Windows
    - Git 2.47.1 <span style="color: red;">*<<2025/01/25 updated from 2.47>>*</span>
  - Mac OS
    - Git 2.48.1 <span style="color: red;">*<<2025/01/25 updated from 2.47.1>>*</span>

**Windows**
- [PowerShell 7.4.6](https://github.com/PowerShell/PowerShell)<span style="color: red;">*<<2024/10/25 updated from 7.4.5>>*</span>
  - 製品版では、ストアアプリとして自動更新される
  - Insider Preview環境では、ストアで更新できない。
    - Windowsターミナルに表示されたリンクからインストーラをダウンロードする
      ![New Version Available](./images/Windows/20240728_Windows_PowerShell_7.4.4.png)
    - インストーラを起動して、セットアップする
      ![Setup with Installer](./images/Windows/20240728_Windows_PowerShell_Setup7.4.4.png)
- [GitHub Desktop 3.4.8](https://desktop.github.com/release-notes/) <span style="color: red;">*<<2024/10/25 updated from 3.4.6>>*</span>
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

### サービス
- [Penpot 2.1](https://design.penpot.app/) <span style="color: red;">*<<2024/07/10 released>>*</span>

##  ノウハウ
### プログラミング言語
```
独学で取り組んでいる言語／データベース／ドキュメント作成に関するノウハウは、各ページに蓄積
```
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

### OS／ツール
```
OSやツールのノウハウは、以下を参照
```
- Windows
  - [USBメモリの復旧](https://jp.easeus.com/partition-manager/fix-usb-drive-incorrect-size.html)
  - [Dev Channelへの変更](https://mitomoha.hatenablog.com/entry/2023/08/11/010623)
  - [システムロケールの変更](./windows/systemLocale.md)
  - [フォントの変更](./windows/font.md)
- Mac
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
- Ubuntu
  - ISOイメージを作成する
    [balenaEtcher - Flash OS images to SD cards & USB drives](https://etcher.balena.io/)
  - スクリーンショット
    既定値では、SHIFT+CTRL+ALT+Rで撮ることが可能
- GitHub
  - GitHub Copilot Free
    ![GitHub Copilot Free](./images/20241220_GitHub_Copilot_Free.png)
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
[プロフィール](./sub/Profile.md)
