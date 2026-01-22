---
title:  Platform
layout: single
sidebar:
  nav: environment
---

OS                                 |Hardware            |Language
-----------------------------------|--------------------|--------------------------------------------------
[Windows](#Windows)                |Mini-S12            |.NET / Rust / TypeScript
[Windows on Arm](#WindowsArm)      |OmniBook X          |
[Windows Insider](#WindowsInsider) |OmniBook Ultra Flip |.NET / Rust / Kotlin / Java / Flutter / TypeScript
[macOS](#Mac)                      |MacBook Air         |Rust / Flutter
[Chrome OS Flex](#ChromeOSFlex)    |IdeaPad             |Rust / Flutter / Python / Go / PHP 
[Ubuntu Desktop](#UbuntuDesktop)   |TransBook           |Carbon

- 移行計画
  - (v) Windows Insider環境 を OmniBook Ultra Flip に構築
  - (v) Windows on Arm環境追加（OmniBook X）
  - (v) Chrome OS Flex環境を IdeaPad に再構築
  - (v) Ubuntu Desktop環境を構築

##  [Windows 11](https://www.microsoft.com/ja-jp/windows/?r=1)<a id="Windows"></a> ([履歴](/history/Windows))
  - Windows 11 25H2 <span style="color: red;">*<<2025/10/12 auto updated from 24H2>>*</span>
    - アップデート(2025-10)
      ![Update](/images/Windows/20251015_MiniS12_WindowsUpdate.png)
      - バージョン情報
        ![Version Information](/images/Windows/20251015_MiniS12_WindowsVersion.png)
  - [Moralerspace 2.0.0](https://github.com/yuru7/moralerspace) <span style="color: red;">*<<2025/07/31 installed>>*</span>
    ![Moralerspace](/images/Windows/20250731_Moralerspace.png)
  - ノウハウ
    - [USBメモリの復旧](https://jp.easeus.com/partition-manager/fix-usb-drive-incorrect-size.html)
    - [システムロケールの変更](/knowhow/sub/windows/systemLocale)
    - [フォントの変更](/knowhow/sub/windows/font)
    - [IMEのカスタマイズ](/knowhow/sub/windows/IMECustomize)
    - [シャットダウン](/knowhow/sub/windows/Shutdown)

##  Windows on Arm
- Windows 11 on Arm 24H2 Build 26100.3476 <span style="color: red;">*<<2025/03/13 updated>>*</span><a id="WindowsArm"></a>
  ![Version Information](/images/Windows/20250318_OmniBookX_WindowsVersion.png)

##  [Windows Insider](https://blogs.windows.com/windows-insider/)<a id="WindowsInsider"></a> ([履歴](/history/Windows))
  - [Dev Channel for Windows 11 Next (Build 26220 / Next of Windows 11 25H2)](https://aka.ms/DevLatest)
    - Build 26220.7653 (Quality Update) <span style="color: red;">*<<2026/01/22 updated from Build 26220.7535 >>*</span>
      - ウォーターマーク（右下のバージョン情報：今後復活予定）の代わりに「システム > バージョン情報」で確認
        ![Version Information](/images/Windows/20260122_Windows11_Build26220.png)
    - Updated to Windows Insider Dev Channel
      - Windows 11 24H2 <span style="color: red;">*<<2024/11/14 setup>>*</span>
        ![Version Information](/images/Windows/20241114_OmniBookUF_WindowsVersion.png)
  - [Canary Channel](https://aka.ms/CanaryLatest)
  - [Dev Channelへの変更](https://mitomoha.hatenablog.com/entry/2023/08/11/010623)

### WSL
- [WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install) ([履歴](/history/Wsl))
    - [WSL 2.7.0.0](https://github.com/microsoft/WSL) <span style="color: red;">*<<2025/12/13 updated from 2.6.2.0>>*</span>

      <details>
      <summary>
      カーネルバージョン: 6.6.114.1-1
      </summary>

      ```
      WSL バージョン: 2.7.0.0
      カーネル バージョン: 6.6.114.1-1
      WSLg バージョン: 1.0.71
      MSRDC バージョン: 1.2.6676
      Direct3D バージョン: 1.611.1-81528511
      DXCore バージョン: 10.0.26100.1-240331-1435.ge-release
      Windows バージョン: 10.0.26220.7344
      ```

      </details>

    - [Ubuntu 24.04.3](https://www.releases.ubuntu.com/noble/) <span style="color: red;">*<<2025/08/17 updated from Ubuntu 24.04.2>>*</span>
      - [Upgrade@2025/02/01](/knowhow/sub/Ubuntu/20250201_Upgrade)

      <details>
      <summary>
      ディストリビューション・バージョン情報
      </summary>

      ```
      PRETTY_NAME="Ubuntu 24.04.3 LTS"
      NAME="Ubuntu"
      VERSION_ID="24.04"
      VERSION="24.04.3 LTS (Noble Numbat)"
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

    - [Red Hat Enterprise Linux 10](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux-10) <span style="color: red;">*<<2025/06/01 installed>>*</span>
      - [インストール](/knowhow/sub/Rhel/wsl_rhel10)

      <details>
      <summary>
      ディストリビューション・バージョン情報
      </summary>

      ```
      NAME="Red Hat Enterprise Linux"
      VERSION="10.0 (Coughlan)"
      ID="rhel"
      ID_LIKE="centos fedora"
      VERSION_ID="10.0"
      PLATFORM_ID="platform:el10"
      PRETTY_NAME="Red Hat Enterprise Linux 10.0 (Coughlan)"
      ANSI_COLOR="0;31"
      LOGO="fedora-logo-icon"
      CPE_NAME="cpe:/o:redhat:enterprise_linux:10::baseos"
      HOME_URL="https://www.redhat.com/"
      VENDOR_NAME="Red Hat"
      VENDOR_URL="https://www.redhat.com/"
      DOCUMENTATION_URL="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/10"
      BUG_REPORT_URL="https://issues.redhat.com/"

      REDHAT_BUGZILLA_PRODUCT="Red Hat Enterprise Linux 10"
      REDHAT_BUGZILLA_PRODUCT_VERSION=10.0
      REDHAT_SUPPORT_PRODUCT="Red Hat Enterprise Linux"
      REDHAT_SUPPORT_PRODUCT_VERSION="10.0"
      ```

      </details>
    - ノウハウ
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

##  [macOS](https://www.apple.com/jp/macos/)<a id="Mac"></a> ([履歴](/history/macOS))
  - [Tahoe 26.2](https://www.apple.com/jp/os/macos/)
    <span style="color: red;">*<<2025/12/17 updated from Sequoia 26.1>>*</span>
    - ソフトウェアアップデート
      ![Update Check](/images/macOS/20251217_macOS_Tahoe26.2Update.png)
      ![Updated](/images/macOS/20251217_macOS_Tahoe26.2Updated.png)
    - バージョン情報
      ![Tahoe 26.2](/images/macOS/20251217_macOS_Tahoe26.2.png)
  - ノウハウ
    - [開発ツール](/knowhow/Tools#macos)

##  [Chrome OS Flex](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)<a id="ChromeOSFlex"></a> ([履歴](/history/Chrome))
  - バージョン 143.0.7499.196 <span style="color: red;">*<<2026/01/12 updated from 143.0.7499.150>>*</span>
    ![Chrome OS Flexバージョン情報](/images/Chrome/20260112_Chrome_OS_Flex_143.0.7499.196.png)
      - 更新中
        ![Updating](/images/Chrome/20260112_Chrome_OS_Flex_Updating143.0.7499.196.png)
        <details>
        <summary>
        ディストリビューション・バージョン情報
        </summary>

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

        </details>
      - ロック画面の温度表示
        ![Weather](/images/Chrome/20260112_Chrome_OS_Flex_Weather.png)
      - Debian 12.13 <span style="color: red;">*<<2026/01/12 updated from 12.12>>*</span>
        ```
        cat /etc/debian_version
        ```
  - ノウハウ
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
      - Debianのバージョンを確認する方法
        ```
        cat /etc/debian_version
        ```
    - アップデート
      - Visual Studio Code
        ![Upgrade on Chrome OS Flex](/images/Chrome/20240119_code_1.85.2.png)
    - カスタマイズ
      - 追加された「IPAmj明朝フォント」をVisual Studio Codeで使ってみた
        ![フォント設定](/images/Chrome/20240406_VSCode_IPAexMincho.png)
      - キーボードのショートカットのカスタマイズ
        ![ショートカット表示](/images/Chrome/20240413_Chrome_ShortcutCustomize1.png)
        ![ショートカット一覧](/images/Chrome/20240413_Chrome_ShortcutCustomize2.png)
        ![ショートカットカスタマイズ](/images/Chrome/20240413_Chrome_ShortcutCustomize3.png)
      - マウスボタンのカスタマイズ
        ![マウスボタンカスタマイズ1](/images/Chrome/20240413_Chrome_MouseCustomize1.png)
        ![マウスボタンカスタマイズ2](/images/Chrome/20240413_Chrome_MouseCustomize2.png)
    - トラブルシューティング
      - Could not create Moklist: Volume Full と出て起動できない
        - 何らかの原因でSecure Bootできなくなったことから、Bios / Secure Boot menuで、Delete all Secure Boot variablesを選択する
        - 起動できた後、安易にEnroll all Factory Default Keys しないほうが良い。

##  Ubuntu Desktop
- [Ubuntu Desktop 25.10](https://jp.ubuntu.com/download) <span style="color: red;">*<<2025/10/19 updated from 25.04>>*</span><a id="UbuntuDesktop"></a> ([履歴](/history/UbuntuDesktop))
  ![Version Information](/images/Ubuntu/20251019_Ubuntu25.10.png)
  - [Upgrade Log](/knowhow/sub/Ubuntu/20251019_Upgrade)

    <details>
    <summary>
    System Details
    </summary>

    ```
    # System Details Report
    ---

    ## Report details
    - **Date generated:**                              2025-10-19 00:50:47

    ## Hardware Information:
    - **Hardware Model:**                              ASUSTeK COMPUTER INC. T103HAF
    - **Memory:**                                      4.0 GiB
    - **Processor:**                                   Intel® Atom™ x5-Z8350  × 4
    - **Graphics:**                                    Intel® HD Graphics (CHV)
    - **Disk Capacity:**                               125.1 GB

    ## Software Information:
    - **Firmware Version:**                            T103HAF.307
    - **OS Name:**                                     Ubuntu 25.10
    - **OS Build:**                                    (null)
    - **OS Type:**                                     64-bit
    - **GNOME Version:**                               49
    - **Windowing System:**                            Wayland
    - **Kernel Version:**                              Linux 6.17.0-5-generic
    ```
    </details>

    <details>
    <summary>
    ディストリビューション・バージョン情報
    </summary>

    ```
    PRETTY_NAME="Ubuntu 25.10"
    NAME="Ubuntu"
    VERSION_ID="25.10"
    VERSION="25.10 (Questing Quokka)"
    VERSION_CODENAME=questing
    ID=ubuntu
    ID_LIKE=debian
    HOME_URL="https://www.ubuntu.com/"
    SUPPORT_URL="https://help.ubuntu.com/"
    BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
    PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
    UBUNTU_CODENAME=questing
    LOGO=ubuntu-logo
    ```

    </details>

  - カーネルバージョン
    - 6.17.0-6 / Ubuntu 25.10 <span style="color: red;">*<<2025/11/23 Updated from 6.17.0-5>>*</span>

  - Ubuntu Budgie 10.9.2 <span style="color: red;">*<<2025/05/30 Installed>>*</span>
    ![Desktop](/images/Ubuntu/20250530_Budgie.png) 
  - KDE Plasma 6.4.5 <span style="color: red;">*<<2025/11/23 Re-Installed>>*</span>
    ![Information](/images/Ubuntu/20251123_Plasma6.4.5.png)
    - 
  - ノウハウ
    - ISOイメージを作成する
      - [balenaEtcher - Flash OS images to SD cards & USB drives](https://etcher.balena.io/)
    - スクリーンショット
      - 既定値では、SHIFT+CTRL+ALT+Rで撮ることが可能
    - ディスプレイ
      - 回転してしまったら、```xrandr```で出力先を確認し、回転し直す
        - 例）右回転
          ```
          xrandr --output DSI-1 --rotate right
          ```
- [Oracle Cloud](/knowhow/OracleCloud)
