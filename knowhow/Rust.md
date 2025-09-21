---
title:  Rust
layout: single
sidebar:
  nav: main
---
##  独学書

  |Text                                                           |Date      |Status
  |---------------------------------------------------------------|----------|---
  |[パーフェクトRust](https://gihyo.jp/book/2023/978-4-297-13322-1) |2024/01/05|<span style="color: red;">*finished*</span> ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/rust/PerfectRust)

##  コンテンツ

  |Contents                                                                                 |Date      |Status
  |-----------------------------------------------------------------------------------------|----------|-------
  |[Webアプリ実装で学ぶ、現場で役立つRust入門](https://atmarkit.itmedia.co.jp/ait/series/36943/)  |2024/05/17|第8回 RustとDioxusでSPAを新バージョンに対応させよう

##  環境
  1. Windows 11

      |Machine        |Env / FW                                       |Last Updated
      |---------------|-----------------------------------------------|----------
      |Windows        |[Rust 1.89](#rust-1)                           |[2025/08/19](https://www.rust-lang.org/)
      |               |[RustRover 2025.2.1](#rustrover)               |[2025/09/06](https://www.jetbrains.com/rust/)
      |               |[Bevy 0.16](#game-engine)                      |[2025/04/27](https://bevyengine.org/)
      |               |[Dioxus 0.6.1](#dioxuscross-platform-library)  |[2024/12/31](https://dioxuslabs.com/)
      |               |[Slint 1.11.0](#slint)                         |[2025/04/27](https://slint.dev/)
      |Windows Insider|Rust 1.90                                      |2025/09/20
      |               |[Tauri 2.8.5](#tauridesktop-framework)         |[2025/09/04](https://tauri.app/)
      |               |Svelte 5.39.3                                  |2025/09/20
      |               |Bun 1.2.21                                     |2025/08/30
      |               |Vite 7.1.6                                     |2025/09/20

  1. Ubuntu 24.04.3 on Windows 11

      |Machine         |Env / FW        |Last Updated
      |----------------|----------------|----------
      |Windows Insider |Rust 1.90       |2025/09/20
      |                |Tauri 2.8.5     |2025/09/04
      |                |React 19.1.1    |2025/08/17
      |                |Bun 1.2.22      |2025/09/20
      |                |Vite 7.1.6      |2025/09/20

  1. Chrome OS Flex 140.0.7339.201 (Official Build)

      |Machine    |Env / FW                                  |Last Updated
      |-----------|------------------------------------------|----------
      |Chrome OS  |Rust 1.90                                 |2025/09/20
      |           |[Node.js 24.7.0](TypeScript#typescript)  |[2025/09/04](https://nodejs.org/en)
      |           |Tauri 2.8.5                               |2025/09/04
      |           |React 19.1.1                              |2025/08/19
      |           |Bun 1.2.22                                |2025/09/20
      |           |Vite 7.1.6                                |2025/09/20

  1. macOS Tahoe 26

      |Machine    |Env / FW             |Last Updated
      |-----------|---------------------|----------
      |macOS      |Rust 1.90            |2025/09/20
      |           |Node 22.6.0          |2024/08/17
      |           |Tauri 2.8.5          |2025/09/04
      |           |React 19.1.1         |2025/08/19
      |           |Bun 1.2.22           |2025/09/16
      |           |Vite 7.1.6           |2025/09/20

##  ノウハウ
### Rust
  - Bug
    - 時差の計算結果が不正(1.72,2023/09/16)
      ![Duration](/images/rust/20230916_Rust_Duration_Bug.png)
  - インストールおよびドキュメント
    - [Rustのインストール](https://www.rust-lang.org/learn/get-started)
    - [ヘルプドキュメント](https://doc.rust-lang.org/std/all.html)
    - [The Rust Programming Language 日本語版](https://doc.rust-jp.rs/book-ja/)
    - [WSL2 Ubuntu に Rust をインストールする](https://qiita.com/cointoss1973/items/a4d15b203f985baaa34e)
    - [WSL(Ubuntu)とVSCodeでRustの学習環境準備](https://qiita.com/evid/items/f81534518b30847a24d2)
    - [Rust言語用スニペット](https://qiita.com/s4i/items/bd29911487c0ee4b296d)
      - [修正版](https://github.com/Tatsukiyoshi/Weekend_Programming/blob/main/rust/snippet/rust.json)

  - バージョン情報
    ```
    cargo --version
    rustup show
    ```
  - ツール更新
    ```
    rustup update
    ```
    - default 設定している場合
      ```
      rustup default <version>
      ```
  - プロジェクト作成
    ```
    cargo new --bin <プロジェクト名>
    ```
  - ビルド
    ```
    cargo build
    ```
  - 実行
    ```
    cargo run
    ```

### WASM
  - [Wasmtime](https://wasmtime.dev/)
    - Install
      ```sh
      curl https://wasmtime.dev/install.sh -sSf | bash
      ```
    - ターゲット
      - 一覧出力
        ```sh
        rustc --print=target-list
        ```
      - 追加
        ```sh
        rustup target add wasm32-wasi
        ```
    - コンパイル
      ```sh
      rustc hello.rs --target wasm32-wasi
      ```
    - 実行
      ```sh
      wasmtime hello.wasm
      ```

### RustRover
  - RustRover 2025.2.1 Build #RR-252.25557.134, built on August 28, 2025 <span style="color: red;">**Updated 2025/09/06**</span>
    ```
    RustRover 2025.2.1
    Build #RR-252.25557.134, built on August 28, 2025
    Source revision: ee1e6cb62e111
    ライセンス対象: Shinya Watanabe
    サブスクリプションは 2026年5月22日 まで有効です。
    For non-commercial use only.
    Runtime version: 21.0.8+1-b1038.68 amd64 (JCEF 122.1.9)
    VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
    Toolkit: sun.awt.windows.WToolkit
    Windows 11.0
    GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
    Memory: 2048M
    Cores: 4
    Registry:
      debugger.attach.dialog.enabled=true
      ide.experimental.ui=true
      llm.ai.assistant.toolwindow.activation.on.start=false
      org.toml.json.schema=false
      transferSettings.vscode.onlyCargoToml=true
    Non-Bundled Plugins:
      JavaScriptDebugger (252.25557.178)
      org.toml.lang (252.25557.135)
      com.jetbrains.space (252.25557.23)
      Subversion (252.25557.175)
      ru.adelf.idea.dotenv (252.23892.201)
      com.jetbrains.rust (252.25557.134)
      com.intellij.ml.llm (252.25557.171)
      com.intellij.react (252.25557.178)
      org.jetbrains.plugins.vue (252.25557.175)
    ```
    - [履歴](/history/RustRover)
  - データベース
    - ドライバのインストール＋データソース設定をすることでアクセス可能
      ![ドライバー設定](/images/rust/20231126_PostgreSQL.png)
  - Web APIのテスト
    - RustRoverのHTTPクライアントでリクエストを作成してテストできる
      ![Httpクライアント](/images/rust/20231229_RustRover_HttpClient.png)
      - GETリクエスト
        ```
        GET http://localhost:80/api/item?id=99
        Accept: application/json
        ```
      - POSTのテキスト本体(Json)
        ```
        POST http://localhost:80/api/item
        Content-Type: application/json

        {}
        ```
      - POSTのパラメータ本体(Form)
        ```
        POST http://localhost:80/api/item
        Content-Type: application/x-www-form-urlencoded

        id = 99 &
        content = new-element
        ```

### Visual Studio Code
  - デバッグ
    - [デバッグについて](https://qiita.com/lechatthecat/items/c5444fdf0656cab6c0e4)
      - CodeLLDBをインストール
    - デバッグ実行
      - rustのプロジェクトフォルダを開く
      - デバッグ開始（初回）
        - デバッグについて、選択が必要になるため、LLDBを選択する
        - プロジェクト内のCargo.tomlに従って、構成ファイルが作成される
      - デバッグ開始（２回目以降）
        - LLDBを使って、デバッグ実行できる

### クレート
  - サンプルWebApp(Actix-Web/SeaORM)
    ![Chapter18_WebApp_Search](/images/rust/20240105_WebApp_Search.png)
  - SeaORM
    - テーブルからModel生成
      ```
      sea-orm-cli generate entity -u postgres://postgres:pgsuper@localhost:5432/sample_db -o src/models 
      ```
  - time
    - Rust 1.80 以降は、0.3.35 以上にする必要あり

### セッション管理
  - [Redis](https://github.com/MicrosoftArchive/redis/releases)

### SSL
  - ローカル認証局のインストール、証明鍵および秘密鍵の作成には、[mkcert 1.4.4](https://github.com/FiloSottile/mkcert)を利用
    - [Chocolatey v2.2.2](https://chocolatey.org/install)でインストール
      - Chocolatelyのインストール
        ```sh
        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        ```
      - mkcertのインストール
        ```
        choco install mkcert
        ```
      - ローカル認証局のインストール
        ```
        mkcert -install
        ```
      - 証明鍵、秘密鍵の作成(localhost用)
        ```
        mkcert localhost
        ```
  - OpenSSLクレートにより、SSL/HTTP2対応が可能
    - 利用には、vcpkgを使って、OpenSSLのインストールが必要
      ```sh
      git clone https://github.com/Microsoft/vcpkg.git
      cd vcpkg
      .\bootstrap-vcpkg.bat
      .\vcpkg.exe install openssl:x64-windows-static

      $env:OPENSSL_DIR = 'C:\Tools\vcpkg\installed\x64-windows-static'
      $env:OPENSSL_STATIC = 'Yes'
      [System.Environment]::SetEnvironmentVariable('OPENSSL_DIR', $env:OPENSSL_DIR, [System.EnvironmentVariableTarget]::User)
      [System.Environment]::SetEnvironmentVariable('OPENSSL_STATIC', $env:OPENSSL_STATIC, [System.EnvironmentVariableTarget]::User)
      ```
      <details>
      <summary>
      セットアップログ
      </summary>

      ```sh
      PS C:\> git clone https://github.com/Microsoft/vcpkg.git
      Cloning into 'vcpkg'...
      remote: Enumerating objects: 217763, done.
      remote: Counting objects: 100% (18573/18573), done.
      remote: Compressing objects: 100% (567/567), done.
      remote: Total 217763 (delta 18225), reused 18117 (delta 18006), pack-reused 199190
      Receiving objects: 100% (217763/217763), 65.63 MiB | 11.53 MiB/s, done.
      Resolving deltas: 100% (143607/143607), done.
      Updating files: 100% (10999/10999), done.
      PS C:\> cd .\vcpkg\
      PS C:\vcpkg> .\bootstrap-vcpkg.bat
      Downloading https://github.com/microsoft/vcpkg-tool/releases/download/2023-12-12/vcpkg.exe -> C:\vcpkg\vcpkg.exe... done.
      Validating signature... done.

      vcpkg package management program version 2023-12-12-1c9ec1978a6b0c2b39c9e9554a96e3e275f7556e

      See LICENSE.txt for license information.
      Telemetry
      ---------
      vcpkg collects usage data in order to help us improve your experience.
      The data collected by Microsoft is anonymous.
      You can opt-out of telemetry by re-running the bootstrap-vcpkg script with -disableMetrics,
      passing --disable-metrics to vcpkg on the command line,
      or by setting the VCPKG_DISABLE_METRICS environment variable.

      Read more about vcpkg telemetry at docs/about/privacy
      PS C:\vcpkg> .\vcpkg.exe install openssl:x64-windows-static
      Computing installation plan...
      A suitable version of cmake was not found (required v3.27.1) Downloading portable cmake 3.27.1...
      Downloading cmake...
      https://github.com/Kitware/CMake/releases/download/v3.27.1/cmake-3.27.1-windows-i386.zip->C:\vcpkg\downloads\cmake-3.27.1-windows-i386.zip
      Downloading https://github.com/Kitware/CMake/releases/download/v3.27.1/cmake-3.27.1-windows-i386.zip
      Extracting cmake...
      The following packages will be built and installed:
          openssl:x64-windows-static@3.2.0#1
        * vcpkg-cmake:x64-windows@2023-05-04
        * vcpkg-cmake-config:x64-windows@2022-02-06#1
        * vcpkg-cmake-get-vars:x64-windows@2023-03-02
      Additional packages (*) will be modified to complete this operation.
      Detecting compiler hash for triplet x64-windows...
      Detecting compiler hash for triplet x64-windows-static...
      A suitable version of 7zip was not found (required v23.1.0) Downloading portable 7zip 23.1.0...
      Downloading 7zip...
      https://www.7-zip.org/a/7z2301-extra.7z->C:\vcpkg\downloads\7z2301-extra.7z
      Downloading https://www.7-zip.org/a/7z2301-extra.7z
      Extracting 7zip...
      Restored 0 package(s) from C:\Users\taish\AppData\Local\vcpkg\archives in 709 us. Use --debug to see more details.
      Installing 1/4 vcpkg-cmake:x64-windows@2023-05-04...
      Building vcpkg-cmake:x64-windows@2023-05-04...
      -- Installing: C:/vcpkg/packages/vcpkg-cmake_x64-windows/share/vcpkg-cmake/vcpkg_cmake_configure.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake_x64-windows/share/vcpkg-cmake/vcpkg_cmake_build.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake_x64-windows/share/vcpkg-cmake/vcpkg_cmake_install.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake_x64-windows/share/vcpkg-cmake/vcpkg-port-config.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake_x64-windows/share/vcpkg-cmake/copyright
      -- Performing post-build validation
      Stored binaries in 1 destinations in 197 ms.
      Elapsed time to handle vcpkg-cmake:x64-windows: 616 ms
      vcpkg-cmake:x64-windows package ABI: eca4282c32436c46756ed3dbef87cbfe5d8902ff35dce71aa65c6590e286fed4
      Installing 2/4 vcpkg-cmake-config:x64-windows@2022-02-06#1...
      Building vcpkg-cmake-config:x64-windows@2022-02-06#1...
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-config_x64-windows/share/vcpkg-cmake-config/vcpkg_cmake_config_fixup.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-config_x64-windows/share/vcpkg-cmake-config/vcpkg-port-config.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-config_x64-windows/share/vcpkg-cmake-config/copyright
      -- Performing post-build validation
      Stored binaries in 1 destinations in 120 ms.
      Elapsed time to handle vcpkg-cmake-config:x64-windows: 391 ms
      vcpkg-cmake-config:x64-windows package ABI: ef27e6b3ea08f719dada133e2943a3a3807f3f45ff10bb01c28d37b10ea9af9e
      Installing 3/4 vcpkg-cmake-get-vars:x64-windows@2023-03-02...
      Building vcpkg-cmake-get-vars:x64-windows@2023-03-02...
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-get-vars_x64-windows/share/vcpkg-cmake-get-vars/vcpkg_cmake_get_vars.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-get-vars_x64-windows/share/vcpkg-cmake-get-vars/cmake_get_vars
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-get-vars_x64-windows/share/vcpkg-cmake-get-vars/cmake_get_vars/CMakeLists.txt
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-get-vars_x64-windows/share/vcpkg-cmake-get-vars/vcpkg-port-config.cmake
      -- Installing: C:/vcpkg/packages/vcpkg-cmake-get-vars_x64-windows/share/vcpkg-cmake-get-vars/copyright
      -- Performing post-build validation
      Stored binaries in 1 destinations in 92.1 ms.
      Elapsed time to handle vcpkg-cmake-get-vars:x64-windows: 298 ms
      vcpkg-cmake-get-vars:x64-windows package ABI: c6a58b84fee5293d74af1bf6faf21c9f147a1ac9e7600b84ba19aedd0eb61761
      Installing 4/4 openssl:x64-windows-static@3.2.0#1...
      Building openssl:x64-windows-static@3.2.0#1...
      -- Downloading https://github.com/openssl/openssl/archive/openssl-3.2.0.tar.gz -> openssl-openssl-openssl-3.2.0.tar.gz...
      -- Extracting source C:/vcpkg/downloads/openssl-openssl-openssl-3.2.0.tar.gz
      -- Applying patch asm-comments.patch
      -- Applying patch declspec-align.patch
      -- Applying patch qt-msvc.patch
      -- Applying patch script-prefix.patch
      -- Applying patch windows/install-layout.patch
      -- Applying patch windows/install-pdbs.patch
      -- Applying patch unix/android-cc.patch
      -- Applying patch unix/move-openssldir.patch
      -- Applying patch unix/no-empty-dirs.patch
      -- Applying patch unix/no-static-libs-for-shared.patch
      -- Using source at C:/vcpkg/buildtrees/openssl/src/nssl-3.2.0-06d693f20a.clean
      -- Downloading https://github.com/StrawberryPerl/Perl-Dist-Strawberry/releases/download/SP_5380_5361/strawberry-perl-5.38.0.1-64bit-portable.zip -> strawberry-perl-5.38.0.1-64bit-portable.zip...
      -- Found external ninja('1.11.0').
      -- Getting CMake variables for x64-windows-static
      -- Downloading https://www.nasm.us/pub/nasm/releasebuilds/2.16.01/win64/nasm-2.16.01-win64.zip;https://gstreamer.freedesktop.org/src/mirror/nasm-2.16.01-win64.zip -> nasm-2.16.01-win64.zip...
      -- Getting CMake variables for x64-windows-static
      -- Downloading https://download.qt.io/official_releases/jom/jom_1_1_4.zip;https://mirrors.ocf.berkeley.edu/qt/official_releases/jom/jom_1_1_4.zip;https://mirrors.ukfast.co.uk/sites/qt.io/official_releases/jom/jom_1_1_4.zip -> jom_1_1_4.zip...
      -- Prerunning x64-windows-static-dbg
      -- Building x64-windows-static-dbg
      -- Prerunning x64-windows-static-rel
      -- Building x64-windows-static-rel
      -- Fixing pkgconfig file: C:/vcpkg/packages/openssl_x64-windows-static/lib/pkgconfig/libcrypto.pc
      -- Fixing pkgconfig file: C:/vcpkg/packages/openssl_x64-windows-static/lib/pkgconfig/libssl.pc
      -- Fixing pkgconfig file: C:/vcpkg/packages/openssl_x64-windows-static/lib/pkgconfig/openssl.pc
      -- Downloading https://mirror.msys2.org/mingw/mingw64/mingw-w64-x86_64-pkgconf-1~2.1.0-1-any.pkg.tar.zst;https://repo.msys2.org/mingw/mingw64/mingw-w64-x86_64-pkgconf-1~2.1.0-1-any.pkg.tar.zst;https://mirror.yandex.ru/mirrors/msys2/mingw/mingw64/mingw-w64-x86_64-pkgconf-1~2.1.0-1-any.pkg.tar.zst;https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/mingw64/mingw-w64-x86_64-pkgconf-1~2.1.0-1-any.pkg.tar.zst;https://mirrors.ustc.edu.cn/msys2/mingw/mingw64/mingw-w64-x86_64-pkgconf-1~2.1.0-1-any.pkg.tar.zst;https://mirror.selfnet.de/msys2/mingw/mingw64/mingw-w64-x86_64-pkgconf-1~2.1.0-1-any.pkg.tar.zst -> mingw-w64-x86_64-pkgconf-1~2.1.0-1-any.pkg.tar.zst...
      -- Downloading https://mirror.msys2.org/msys/x86_64/msys2-runtime-3.4.9-3-x86_64.pkg.tar.zst;https://repo.msys2.org/msys/x86_64/msys2-runtime-3.4.9-3-x86_64.pkg.tar.zst;https://mirror.yandex.ru/mirrors/msys2/msys/x86_64/msys2-runtime-3.4.9-3-x86_64.pkg.tar.zst;https://mirrors.tuna.tsinghua.edu.cn/msys2/msys/x86_64/msys2-runtime-3.4.9-3-x86_64.pkg.tar.zst;https://mirrors.ustc.edu.cn/msys2/msys/x86_64/msys2-runtime-3.4.9-3-x86_64.pkg.tar.zst;https://mirror.selfnet.de/msys2/msys/x86_64/msys2-runtime-3.4.9-3-x86_64.pkg.tar.zst -> msys2-msys2-runtime-3.4.9-3-x86_64.pkg.tar.zst...
      -- Using msys root at C:/vcpkg/downloads/tools/msys2/023cdb3ca06f77f2
      -- Fixing pkgconfig file: C:/vcpkg/packages/openssl_x64-windows-static/debug/lib/pkgconfig/libcrypto.pc
      -- Fixing pkgconfig file: C:/vcpkg/packages/openssl_x64-windows-static/debug/lib/pkgconfig/libssl.pc
      -- Fixing pkgconfig file: C:/vcpkg/packages/openssl_x64-windows-static/debug/lib/pkgconfig/openssl.pc
      -- Installing: C:/vcpkg/packages/openssl_x64-windows-static/share/openssl/usage
      -- Installing: C:/vcpkg/packages/openssl_x64-windows-static/share/openssl/copyright
      -- Performing post-build validation
      Stored binaries in 1 destinations in 9.5 s.
      Elapsed time to handle openssl:x64-windows-static: 12 min
      openssl:x64-windows-static package ABI: 085051ba976c0f33cbbdec2e32cf8f9b52171432fda578c128d7223fc763ec07
      Total install time: 12 min
      The package openssl is compatible with built-in CMake targets:

          find_package(OpenSSL REQUIRED)
          target_link_libraries(main PRIVATE OpenSSL::SSL OpenSSL::Crypto)
      ```
      </details>

### Tauri(Desktop Framework)
  - [Build smaller, faster, and more secure desktop applications with a web frontend](https://tauri.studio/)
  - Document
    - [SplashScreen](#Splashscreen)
  - V2.8.5 + Rust 1.90
    - Windows
      ![On Windows](/images/rust/20250920_Tauri2.8.5_Windows.png)
    - Ubuntu 24.04.3 on WSL2
      ![On Ubuntu 24.04.3](/images/rust/20250920_Tauri2.8.5_Ubuntu24.04.3.png)
    - macOS 26
      ![On macOS](/images/rust/20250920_Tauri2.8.5_mac26.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250920_Tauri2.8.5_Chrome_OS_Flex.png)
    - Android 16 QPR2 Beta 1 / Pixel 9a
      ![On Android 16](/images/rust/20250920_Tauri2.8.5_Pixel_9a_Android16_QPR2B1.png)
    - iOS 26.0 / iPhone 17 Pro
      ![On iOS 26](/images/rust/20250920_Tauri2.8.5_iPhone17_Pro_iOS26.png)
  - V2.8.5 + Rust 1.89
    - iOS 26.0 / iPhone 17 Pro
      - FE/BEともにクリーンして再ビルド
        ```
        cargo clean
        ```
        ```
        rm -rf node_modules/
        bun install
        bun tauri ios dev
        ```
        ![On iOS 26](/images/rust/20250916_Tauri2.8.5_iPhone17_Pro_iOS26.png)
    - Windows
      ![On Windows](/images/rust/20250904_Tauri2.8.5_Windows.png)
    - Ubuntu 24.04.3 on WSL2
      ![On Ubuntu 24.04.3](/images/rust/20250904_Tauri2.8.5_Ubuntu24.04.3.png)
    - macOS
      ![On macOS](/images/rust/20250904_Tauri2.8.5_mac15.6.1.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250904_Tauri2.8.5_Chrome_OS_Flex.png)
    - Android 16 QPR2 Beta 1 / Pixel 9a
      ![On Android 16](/images/rust/20250904_Tauri2.8.5_Pixel_9a_Android16_QPR2B1.png)
    - iOS 26.0 Beta 6 / iPhone 16 Pro
      ![On iOS 26 Beta 6](/images/rust/20250904_Tauri2.8.5_iPhone16_Pro_iOS26.0B6.png)
  - V2.8.2
    - Windows
      ![On Windows](/images/rust/20250822_Tauri2.8.2_Windows.png)
    - Ubuntu 24.04.3 on WSL2
      ![On Ubuntu 24.04.3](/images/rust/20250822_Tauri2.8.2_Ubuntu24.04.3.png)
    - macOS
      ![On macOS](/images/rust/20250822_Tauri2.8.2_mac15.6.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250822_Tauri2.8.2_Chrome_OS_Flex.png)
    - Android 16 QPR2 Beta 1 / Pixel 9a
      ![On Android 16](/images/rust/20250822_Tauri2.8.2_Pixel_9a_Android16_QPR2B1.png)
    - iOS 26.0 Beta 6 / iPhone 16 Pro
      ![On iOS 26 Beta 6](/images/rust/20250822_Tauri2.8.2_iPhone16_Pro_iOS26.0B6.png)
  - V2.8.1
    - macOS
      ![On macOS](/images/rust/20250819_Tauri2.8.1_Mac15.6.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250819_Tauri2.8.1_Chrome_OS_Flex.png)
    - iOS 26.0 Beta 6 / iPhone 16 Pro
      ![On iOS 26 Beta 6](/images/rust/20250819_Tauri2.8.1_iPhone16_Pro_iOS26.0B6.png)
  - V2.7.0
    - Windows
      ![On Windows](/images/rust/20250721_Tauri2.7.0_Windows.png)
    - Ubuntu 24.04.2 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250721_Tauri2.7.0_Ubuntu24.04.png)
    - macOS
      ![On macOS](/images/rust/20250721_Tauri2.7.0_Mac15.5.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250726_Tauri2.7.0_Chrome_OS_Flex.png)
    - Android 16 / Pixel 9 Pro
      ![On Android 16](/images/rust/20250721_Tauri2.7.0_Pixel_9_Pro_Android16.png)
    - iOS 18.5 / iPhone 16e
      ![On iPhone 16e](/images/rust/20250721_Tauri2.7.0_iPhone16e_iOS18.5.png)
    - iOS 26.0 Beta 3 / iPhone 16 Pro
      ![On iOS 26 Beta 3](/images/rust/20250721_Tauri2.7.0_iPhone16_Pro_iOS26.0B3.png)
  - V2.6.2
    - Windows
      ![On Windows](/images/rust/20250627_Tauri2.6.2_Windows.png)
    - Ubuntu 24.04.2 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250628_Tauri2.6.2_Ubuntu24.04.png)
    - macOS
      ![On macOS](/images/rust/20250628_Tauri2.6.2_Mac15.5.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250628_Tauri2.6.2_Chrome_OS_Flex.png)
    - Android 16 / Pixel 9 Pro
      ![On Android 16](/images/rust/20250628_Tauri2.6.2_Pixel_9_Pro_Android16.png)
    - iOS 18.5 / iPhone 16e
      ![On iPhone 16e](/images/rust/20250628_Tauri2.6.2_iPhone16e_iOS18.5.png)
    - iOS 26.0 Beta 3 / iPhone 16 Pro
      ![On iOS 26 Beta 3](/images/rust/20250713_Tauri2.6.2_iPhone16_Pro_iOS26.0B3.png)
    - iOS 26.0 Beta 2 / iPhone 16 Pro
      ![On iOS 26 Beta 2](/images/rust/20250628_Tauri2.6.2_iPhone16_Pro_iOS26.0B2.png)
  - V2.6.1
    - Ubuntu 24.04.2 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250627_Tauri2.6.1_Ubuntu24.04.png)
    - Android 16 / Pixel 9 Pro
      ![On Android 16](/images/rust/20250627_Tauri2.6.1_Pixel_9_Pro_Android16.png)
  - V2.6.0
    - Windows
      ![On Windows](/images/rust/20250626_Tauri2.6.0_Windows.png)
    - Ubuntu 24.04.2 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250626_Tauri2.6.0_Ubuntu24.04.png)
    - macOS
      ![On macOS](/images/rust/20250626_Tauri2.6.0_Mac15.5.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250626_Tauri2.6.0_Chrome_OS_Flex.png)
    - iOS 18.5 / iPhone 16e
      ![On iPhone 16e](/images/rust/20250626_Tauri2.6.0_iPhone16e_iOS18.5.png)
    - iOS 26.0 Beta 2 / iPhone 16 Pro
      ![On iOS 26 Beta 2](/images/rust/20250627_Tauri2.6.0_iPhone16_Pro_iOS26.0B2.png)
  - V2.5.1
    - Windows
      ![On Windows](/images/rust/20250427_Tauri2.5.1_Windows.png)
    - Ubuntu 24.04.2 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250427_Tauri2.5.1_Ubuntu24.04.png)
    - macOS
      ![On macOS](/images/rust/20250427_Tauri2.5.1_Mac15.4.1.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250429_Tauri2.5.1_Chrome_OS_Flex.png)
    - Android 16 / Pixel 9a
      ![On Android 16](/images/rust/20250427_Tauri2.5.1_Pixel9a_Android16.png)
    - iOS 18.4 / iPhone 16e
      ![On iPhone 16e](/images/rust/20250427_Tauri2.5.1_iPhone16e_iOS18.4.png)
  - V2.5.0
    - Windows
      ![On Windows](/images/rust/20250417_Tauri2.5.0_Windows.png)
    - Ubuntu 24.04.2 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250416_Tauri2.5.0_Ubuntu24.04.png)
    - macOS
      ![On macOS](/images/rust/20250417_Tauri2.5.0_Mac15.4.png)
    - Chrome OS Flex
      ![On Chrome OS Flex](/images/rust/20250417_Tauri2.5.0_Chrome_OS_Flex.png)
    - Android 16 / Pixel 9 Pro
      ![On Android 16](/images/rust/20250417_Tauri2.5.0_Pixel9Pro_Android16.png)
    - iOS 18.4 / iPhone 16e
      ![On iPhone 16e](/images/rust/20250417_Tauri2.5.0_iPhone16e_iOS18.4.png)
  - V2.4.1
    - Windows
      ![On Windows](/images/rust/20250403_Tauri2.4.1_Windows.png)
    - Ubuntu 24.04.2 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250403_Tauri2.4.1_Ubuntu24.04.png)
    - macOS
      ![On macOS](/images/rust/20250403_Tauri2.4.1_Mac15.4.png)
    - Chrome OS Flex
      - 最初ウィンドウだけでコンテンツが表示されなかった。しかし、Reloadすることで表示された！
        ![On Chrome OS Flex](/images/rust/20250411_Tauri2.4.1_Chrome_OS_Flex.png)
    - iOS 18.4 / iPhone 16e
      - cannot build target -> [[bug] version '-sim' in target triple 'arm64-apple-ios13.0-simulator-sim' is invalid](https://github.com/tauri-apps/tauri/issues/13128)
    - Android 15 / Pixel 9
      - [Log](/knowhow/sub/rust/20250410_tauri_android15)
        ![On Android 15](/images/rust/20250409_Tauri2.4.1_Pixel9_Android15.png)
    - Android 16 / Pixel 9 Pro
      - error sending request for url
        - [Log](/knowhow/sub/rust/20250410_tauri_android16)
          ![error sending request for url](/images/rust/20250406_Tauri2.4.1_AndroidError.png)
          -> https://github.com/tauri-apps/tauri/issues/9509
  - V2.4.0
    - テンプレートで作成したアプリでは、tauri-pluginのバージョンを明示していない
      そのため、tauri-plugin 2.1.0（最新）を取り込まれず、ビルドエラーとなる
      回避策として、tauri-pluginを明示するように修正
      ```
      error[E0308]: mismatched types
        --> /home/taishow/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/tauri-plugin-2.0.3/src/build/mod.rs:140:58
          |
      140 |       tauri_utils::plugin::define_global_api_script_path(path);
          |       -------------------------------------------------- ^^^^ expected `&Path`, found `PathBuf`
          |       |
          |       arguments to this function are incorrect
          |
      note: function defined here
        --> /home/taishow/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/tauri-utils-2.3.0/src/plugin.rs:22:10
          |
      22  |   pub fn define_global_api_script_path(path: &Path) {
          |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      help: consider borrowing here
          |
      140 |       tauri_utils::plugin::define_global_api_script_path(&path);
          |                                                          +

      For more information about this error, try `rustc --explain E0308`.
      error: could not compile `tauri-plugin` (lib) due to 1 previous error
      warning: build failed, waiting for other jobs to finish...
      error: script "dev" was terminated by signal SIGTERM (Polite quit request)
      error: script "tauri" exited with code 101
      ```
    - Windows
      ![On Windows](/images/rust/20250323_Tauri2.4.0_Windows.png)
    - Ubuntu 24.04 on WSL2
      ![On Ubuntu 24.04](/images/rust/20250323_Tauri2.4.0_Ubuntu24.04.png)
    - macOS
      ![On macOS](/images/rust/20250323_Tauri2.4.0_Mac15.3.2.png)
    - iOS 18.3 / iPhone 16e
      ![On iPhone 16e](/images/rust/20250323_Tauri2.4.0_iPhone16e_iOS18.3.png)
  - V2.0
    - xcodebuildが異常終了する場合、関連ツール含めた環境の初期化を再度実施する
      ```
      npm run tauri ios init
      ```
      （参考）[xcodebuild exited with code 65 on "npm run tauri ..."](https://stackoverflow.com/questions/77712461/xcodebuild-exited-with-code-65-on-npm-run-tauri)
    - [V2.0 RC](https://v2.tauri.app/blog/tauri-2-0-0-release-candidate/)
      ```
      bun create tauri-app --rc
      ```
      - Failed to run custom build on Ubuntu 24.04 as follows:

        ```
        error: failed to run custom build command for `tauri2-beta-app v0.2.7 (/mnt/d/Repository/Weekend_Programming/rust/tauri/tauri-app-wsl2/tauri2-beta-app/src-tauri)`

        Caused by:
          process didn't exit successfully: `/mnt/d/Repository/Weekend_Programming/rust/tauri/tauri-app-wsl2/tauri2-beta-app/src-tauri/target/debug/build/tauri2-beta-app-70091410f6bc5232/build-script-build` (exit status: 1)
          --- stdout
          cargo:rerun-if-env-changed=TAURI_CONFIG
          cargo:rerun-if-changed=tauri.conf.json
          cargo:rustc-check-cfg=cfg(desktop)
          cargo:rustc-cfg=desktop
          cargo:rustc-check-cfg=cfg(mobile)
          cargo:rustc-env=TAURI_ANDROID_PACKAGE_NAME_APP_NAME=dev
          cargo:rustc-env=TAURI_ANDROID_PACKAGE_NAME_PREFIX=com_tauri
          cargo:rustc-check-cfg=cfg(dev)
          cargo:rustc-cfg=dev
          cargo:PERMISSION_FILES_PATH=/mnt/d/Repository/Weekend_Programming/rust/tauri/tauri-app-wsl2/tauri2-beta-app/src-tauri/target/debug/build/tauri2-beta-app-b76333ce2e6ee747/out/app-manifest/__app__-permission-files
          cargo:rerun-if-changed=capabilities
          Permission path:default not found, expected one of core:app:default, ...
        ```
        -> Fixed (capabilitiesの記述変更を取り込むことで解決)
    - iOS target
      - Rustターゲットへの追加
        ```
        rustup target add aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim
        ```
      - nodeのインストール -> https://zenn.dev/shichi18/articles/20230325-01-50eb75b9096004
        - nodebrewをインストール
          ```
          brew install nodebrew
          nodebrew setup
          ```
        - nodebrewのPathを反映
          ```
          echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
          source ~/.zshrc
          ```
        - インストールしたいnodeのバージョンを確認
          ```
          nodebrew ls-remote
          ```
        - インストールしたいnodeのバージョンを指定してインストール
          ```
          nodebrew install stable
          ```
        - iOS ターゲットの初期化
          ```
          bun tauri ios init
          ```
        - iOS ターゲットのビルド
          ```
          bun tauri ios dev
          ```
          ![iOS Emulator](/images/macOS/20240817_Tauri2.0RC2_iOS_Target.png)

          - 現状、bun で初期化を行うと、ビルドでエラーとなるため、npm で初期化を行うことで回避する
            ```
            npm run tauri ios init
            ```
            -> [tauri1.x→tauri2.0(beta.19)migration + iOSアプリ開発(現在エラー発生中 beta.23でNG)](https://zenn.dev/myuna/scraps/618340df8575bb)でも言及されている
          - difference files which npm init and bun init
            - src-tauri/gen/apple/project.yml
              - output which use 'npm init'
                ```
                - script: npm run -- tauri ios xcode-script -v --platform ${PLATFORM_DISPLAY_NAME:?} --sdk-root ${SDKROOT:?} --framework-search-paths "${FRAMEWORK_SEARCH_PATHS:?}" --header-search-paths "${HEADER_SEARCH_PATHS:?}" --gcc-preprocessor-definitions "${GCC_PREPROCESSOR_DEFINITIONS:-}" --configuration ${CONFIGURATION:?} ${FORCE_COLOR} ${ARCHS:?}
                ```
              - output which use 'bun init'
                ```
                - script: bun tauri ios xcode-script -v --platform ${PLATFORM_DISPLAY_NAME:?} --sdk-root ${SDKROOT:?} --framework-search-paths "${FRAMEWORK_SEARCH_PATHS:?}" --header-search-paths "${HEADER_SEARCH_PATHS:?}" --gcc-preprocessor-definitions "${GCC_PREPROCESSOR_DEFINITIONS:-}" --configuration ${CONFIGURATION:?} ${FORCE_COLOR} ${ARCHS:?}
                ```
            - src-tauri/gen/apple/tauri-mac-ios-app.xcodeproj/project.pbxproj
              - output which use 'npm init'
                ```
                shellScript = "npm run -- tauri ios xcode-script -v --platform ${PLATFORM_DISPLAY_NAME:?} --sdk-root ${SDKROOT:?} --framework-search-paths \"${FRAMEWORK_SEARCH_PATHS:?}\" --header-search-paths \"${HEADER_SEARCH_PATHS:?}\" --gcc-preprocessor-definitions \"${GCC_PREPROCESSOR_DEFINITIONS:-}\" --configuration ${CONFIGURATION:?} ${FORCE_COLOR} ${ARCHS:?}";
                ```
              - output which use 'bun init'
                ```
                shellScript = "bun tauri ios xcode-script -v --platform ${PLATFORM_DISPLAY_NAME:?} --sdk-root ${SDKROOT:?} --framework-search-paths \"${FRAMEWORK_SEARCH_PATHS:?}\" --header-search-paths \"${HEADER_SEARCH_PATHS:?}\" --gcc-preprocessor-definitions \"${GCC_PREPROCESSOR_DEFINITIONS:-}\" --configuration ${CONFIGURATION:?} ${FORCE_COLOR} ${ARCHS:?}";
                ```

          <details>
          <summary>
          bunで初期化した場合のビルドエラーログ
          </summary>

            ```
          taishow2024@Air2024 tauri-mac-ios-app % bun tauri ios dev    
          $ tauri ios dev
          /opt/homebrew/bin/ios-deploy
              Info package `ios-deploy` present: true
          Detected iOS simulators:
            [0] iPad (10th generation)
            [1] iPad Air 11-inch (M2)
            [2] iPad Air 13-inch (M2)
            [3] iPad Pro 11-inch (M4)
            [4] iPad Pro 13-inch (M4)
            [5] iPad mini (6th generation)
            [6] iPhone 15
            [7] iPhone 15 Plus
            [8] iPhone 15 Pro
            [9] iPhone 15 Pro Max
            [10] iPhone SE (3rd generation)
            Enter an index for a simulator above.
          Simulator: 8
              Info Starting simulator iPhone 15 Pro
              Warn No code signing certificates found. You must add one and set the certificate development team ID on the `bundle > iOS > developmentTeam` config value or the `APPLE_DEVELOPMENT_TEAM` environment variable. To list the available certificates, run `tauri info`.
          tauri_mac_ios_app_lib
              Running BeforeDevCommand (`bun run dev`)
          $ vite

            VITE v5.4.1  ready in 148 ms

            ➜  Local:   http://localhost:1420/
              Info detected host target triple "aarch64-apple-darwin"
          Building app...
          Command line invocation:
              /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -scheme tauri-mac-ios-app_iOS -workspace /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app.xcodeproj/project.xcworkspace/ -sdk iphonesimulator -configuration debug -arch arm64-sim -allowProvisioningUpdates build

          User defaults from command line:
              IDEPackageSupportUseBuiltinSCM = YES

          Build settings from command line:
              ARCHS = arm64-sim
              SDKROOT = iphonesimulator17.5

          --- xcodebuild: WARNING: Using the first of multiple matching destinations:
          { platform:iOS Simulator, id:dvtdevice-DVTiOSDeviceSimulatorPlaceholder-iphonesimulator:placeholder, name:Any iOS Simulator Device }
          { platform:iOS Simulator, id:00810BEF-31C9-4141-9D8E-BBBB49D83756, OS:17.5, name:iPad (10th generation) }
          { platform:iOS Simulator, id:87DB5CB8-D2AA-443A-91F3-1898D1CD5ED5, OS:17.5, name:iPad Air 11-inch (M2) }
          { platform:iOS Simulator, id:C8A3752C-D116-4F3D-9B71-DE95F9684F7D, OS:17.5, name:iPad Air 13-inch (M2) }
          { platform:iOS Simulator, id:7DAC59FB-94C8-4DD2-B485-FEDCDB4AB2FD, OS:17.5, name:iPad Pro 11-inch (M4) }
          { platform:iOS Simulator, id:79B5CFCD-BFDC-452F-94B9-04B4B4192360, OS:17.5, name:iPad Pro 13-inch (M4) }
          { platform:iOS Simulator, id:49D9DB03-68AF-49B5-B128-3DA7E1B152B7, OS:17.5, name:iPad mini (6th generation) }
          { platform:iOS Simulator, id:4FA03170-5731-49DC-AEDD-1D05134DFF26, OS:17.5, name:iPhone 15 }
          { platform:iOS Simulator, id:C9B8FC40-88F7-40B6-8C09-980AD2169571, OS:17.5, name:iPhone 15 Plus }
          { platform:iOS Simulator, id:74261D67-5D15-40E2-BEDD-A6DB5779F75E, OS:17.5, name:iPhone 15 Pro }
          { platform:iOS Simulator, id:FA8AE8ED-F0E8-4471-B840-CB136F0379BC, OS:17.5, name:iPhone 15 Pro Max }
          { platform:iOS Simulator, id:F4B6AB6F-3373-4E45-B549-54E0CFFB437A, OS:17.5, name:iPhone SE (3rd generation) }
          { platform:macOS, arch:arm64, variant:Designed for [iPad,iPhone], id:00008122-001650CC2106001C, name:My Mac }
          { platform:iOS, id:dvtdevice-DVTiPhonePlaceholder-iphoneos:placeholder, name:Any iOS Device }
          Prepare packages

          ComputeTargetDependencyGraph
          note: Building targets in dependency order
          note: Target dependency graph (1 target)
              Target 'tauri-mac-ios-app_iOS' in project 'tauri-mac-ios-app' (no dependencies)

          GatherProvisioningInputs

          CreateBuildDescription

          ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/usr/bin/ibtool --version --output-format xml1

          ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -v -E -dM -arch arm64-sim -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -x objective-c++ -c /dev/null

          ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -v -E -dM -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -x c -c /dev/null

          ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/usr/bin/actool --print-asset-tag-combinations --output-format xml1 /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/Assets.xcassets

          ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/usr/bin/actool --version --output-format xml1

          ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -v -E -dM -arch arm64-sim -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -x c -c /dev/null

          ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/ld -version_details

          Build description signature: e7dd0519ded7714945a9bb35ffe4e917
          Build description path: /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/XCBuildData/e7dd0519ded7714945a9bb35ffe4e917.xcbuilddata
          ClangStatCache /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang-stat-cache /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk /Users/taishow2024/Library/Developer/Xcode/DerivedData/SDKStatCaches.noindex/iphonesimulator17.5-21F77-c098706a9f71eba4e76ae92ab367209a.sdkstatcache
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app.xcodeproj
              /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang-stat-cache /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -o /Users/taishow2024/Library/Developer/Xcode/DerivedData/SDKStatCaches.noindex/iphonesimulator17.5-21F77-c098706a9f71eba4e76ae92ab367209a.sdkstatcache

          note: Run script build phase 'Build Rust Code' will be run during every build because the option to run the script phase "Based on dependency analysis" is unchecked. (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
          ProcessProductPackaging /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app_iOS/tauri-mac-ios-app_iOS.entitlements /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app.xcent (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              
              Entitlements:
              
              {
              "com.apple.security.get-task-allow" = 1;
          }
              
              builtin-productPackagingUtility /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app_iOS/tauri-mac-ios-app_iOS.entitlements -entitlements -format xml -o /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app.xcent

          ProcessProductPackaging /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app_iOS/tauri-mac-ios-app_iOS.entitlements /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              
              Entitlements:
              
              {
              "application-identifier" = "FAKETEAMID.com.taurirc2.app";
          }
              
              builtin-productPackagingUtility /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app_iOS/tauri-mac-ios-app_iOS.entitlements -entitlements -format xml -o /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent

          ProcessProductPackagingDER /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent.der (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              /usr/bin/derq query -f xml -i /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent -o /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent.der --raw

          ProcessProductPackagingDER /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app.xcent /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app.xcent.der (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              /usr/bin/derq query -f xml -i /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app.xcent -o /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app.xcent.der --raw

          PhaseScriptExecution Build\ Rust\ Code /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Script-5F64848F2C39506EBBF993BE.sh (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              export ACTION\=build
              export AD_HOC_CODE_SIGNING_ALLOWED\=YES
              export AGGREGATE_TRACKED_DOMAINS\=YES
              export ALLOW_TARGET_PLATFORM_SPECIALIZATION\=NO
              export ALTERNATE_GROUP\=staff
              export ALTERNATE_MODE\=u+w,go-w,a+rX
              export ALTERNATE_OWNER\=taishow2024
              export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=YES
              export ALWAYS_SEARCH_USER_PATHS\=NO
              export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
              export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
              export APPLE_INTERNAL_DIR\=/AppleInternal
              export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
              export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
              export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
              export APPLICATION_EXTENSION_API_ONLY\=NO
              export APPLY_RULES_IN_COPY_FILES\=NO
              export APPLY_RULES_IN_COPY_HEADERS\=NO
              export APP_SHORTCUTS_ENABLE_FLEXIBLE_MATCHING\=YES
              export ARCHS\=arm64-sim
              export ARCHS_STANDARD\=arm64\ x86_64
              export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
              export ARCHS_STANDARD_32_BIT\=i386
              export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
              export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64
              export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
              export ASSETCATALOG_COMPILER_APPICON_NAME\=AppIcon
              export ASSETCATALOG_COMPILER_GENERATE_ASSET_SYMBOLS\=YES
              export AUTOMATICALLY_MERGE_DEPENDENCIES\=NO
              export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ driverkit\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator\ xros\ xrsimulator
              export AppIdentifierPrefix\=FAKETEAMID.
              export BITCODE_GENERATION_MODE\=marker
              export BUILD_ACTIVE_RESOURCES_ONLY\=NO
              export BUILD_COMPONENTS\=headers\ build
              export BUILD_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products
              export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
              export BUILD_ROOT\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products
              export BUILD_STYLE\=
              export BUILD_VARIANTS\=normal
              export BUILT_PRODUCTS_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator
              export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
              export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
              export BUNDLE_EXTENSIONS_FOLDER_PATH\=Extensions
              export BUNDLE_FORMAT\=shallow
              export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
              export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
              export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
              export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
              export CACHE_ROOT\=/var/folders/6k/ffx3pc1j5ql4h8r_hd45bxnm0000gn/C/com.apple.DeveloperTools/15.4-15F31d/Xcode
              export CCHROOT\=/var/folders/6k/ffx3pc1j5ql4h8r_hd45bxnm0000gn/C/com.apple.DeveloperTools/15.4-15F31d/Xcode
              export CHMOD\=/bin/chmod
              export CHOWN\=/usr/sbin/chown
              export CLANG_ANALYZER_NONNULL\=YES
              export CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION\=YES_AGGRESSIVE
              export CLANG_COMPILE_CACHE_PATH\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/CompilationCache.noindex
              export CLANG_CXX_LANGUAGE_STANDARD\=gnu++14
              export CLANG_CXX_LIBRARY\=libc++
              export CLANG_ENABLE_EXPLICIT_MODULES\=NO
              export CLANG_ENABLE_MODULES\=YES
              export CLANG_ENABLE_OBJC_ARC\=YES
              export CLANG_ENABLE_OBJC_WEAK\=YES
              export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
              export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
              export CLANG_WARN_BOOL_CONVERSION\=YES
              export CLANG_WARN_COMMA\=YES
              export CLANG_WARN_CONSTANT_CONVERSION\=YES
              export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
              export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
              export CLANG_WARN_DOCUMENTATION_COMMENTS\=YES
              export CLANG_WARN_EMPTY_BODY\=YES
              export CLANG_WARN_ENUM_CONVERSION\=YES
              export CLANG_WARN_INFINITE_RECURSION\=YES
              export CLANG_WARN_INT_CONVERSION\=YES
              export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
              export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
              export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
              export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
              export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=YES
              export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
              export CLANG_WARN_STRICT_PROTOTYPES\=YES
              export CLANG_WARN_SUSPICIOUS_MOVE\=YES
              export CLANG_WARN_UNGUARDED_AVAILABILITY\=YES_AGGRESSIVE
              export CLANG_WARN_UNREACHABLE_CODE\=YES
              export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
              export CLASS_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/JavaClasses
              export CLEAN_PRECOMPS\=YES
              export CLONE_HEADERS\=NO
              export CODESIGNING_FOLDER_PATH\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/tauri-mac-ios-app.app
              export CODE_SIGNING_ALLOWED\=YES
              export CODE_SIGNING_REQUIRED\=YES
              export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
              export CODE_SIGN_ENTITLEMENTS\=tauri-mac-ios-app_iOS/tauri-mac-ios-app_iOS.entitlements
              export CODE_SIGN_IDENTITY\=iPhone\ Developer
              export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
              export CODE_SIGN_STYLE\=Automatic
              export COLOR_DIAGNOSTICS\=YES
              export COMBINE_HIDPI_IMAGES\=NO
              export COMPILATION_CACHE_KEEP_CAS_DIRECTORY\=YES
              export COMPILER_INDEX_STORE_ENABLE\=Default
              export COMPOSITE_SDK_DIRS\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/CompositeSDKs
              export COMPRESS_PNG_FILES\=YES
              export CONFIGURATION\=debug
              export CONFIGURATION_BUILD_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator
              export CONFIGURATION_TEMP_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator
              export CONTENTS_FOLDER_PATH\=tauri-mac-ios-app.app
              export CONTENTS_FOLDER_PATH_SHALLOW_BUNDLE_NO\=tauri-mac-ios-app.app/Contents
              export CONTENTS_FOLDER_PATH_SHALLOW_BUNDLE_YES\=tauri-mac-ios-app.app
              export COPYING_PRESERVES_HFS_DATA\=NO
              export COPY_HEADERS_RUN_UNIFDEF\=NO
              export COPY_PHASE_STRIP\=NO
              export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
              export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
              export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS17.5.sdk
              export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos17.5
              export CP\=/bin/cp
              export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
              export CURRENT_ARCH\=undefined_arch
              export CURRENT_VARIANT\=normal
              export DEAD_CODE_STRIPPING\=YES
              export DEBUGGING_SYMBOLS\=YES
              export DEBUG_INFORMATION_FORMAT\=dwarf
              export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
              export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
              export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
              export DEFINES_MODULE\=NO
              export DEPLOYMENT_LOCATION\=NO
              export DEPLOYMENT_POSTPROCESSING\=NO
              export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
              export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=12.0\ 12.1\ 12.2\ 12.3\ 12.4\ 13.0\ 13.1\ 13.2\ 13.3\ 13.4\ 13.5\ 13.6\ 14.0\ 14.1\ 14.2\ 14.3\ 14.4\ 14.5\ 14.6\ 14.7\ 15.0\ 15.1\ 15.2\ 15.3\ 15.4\ 15.5\ 15.6\ 16.0\ 16.1\ 16.2\ 16.3\ 16.4\ 16.5\ 16.6\ 17.0\ 17.1\ 17.2\ 17.3\ 17.4\ 17.5
              export DERIVED_FILES_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/DerivedSources
              export DERIVED_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/DerivedSources
              export DERIVED_SOURCES_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/DerivedSources
              export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
              export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
              export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
              export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
              export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
              export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
              export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
              export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
              export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
              export DEVELOPMENT_LANGUAGE\=en
              export DIFF\=/usr/bin/diff
              export DOCUMENTATION_FOLDER_PATH\=tauri-mac-ios-app.app/en.lproj/Documentation
              export DONT_GENERATE_INFOPLIST_FILE\=NO
              export DO_HEADER_SCANNING_IN_JAM\=NO
              export DSTROOT\=/tmp/tauri-mac-ios-app.dst
              export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
              export DWARF_DSYM_FILE_NAME\=tauri-mac-ios-app.app.dSYM
              export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
              export DWARF_DSYM_FOLDER_PATH\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator
              export DYNAMIC_LIBRARY_EXTENSION\=dylib
              export EAGER_LINKING\=NO
              export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
              export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
              export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
              export ENABLE_APP_SANDBOX\=NO
              export ENABLE_BITCODE\=NO
              export ENABLE_CODE_COVERAGE\=YES
              export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
              export ENABLE_DEFAULT_SEARCH_PATHS\=YES
              export ENABLE_HARDENED_RUNTIME\=NO
              export ENABLE_HEADER_DEPENDENCIES\=YES
              export ENABLE_ON_DEMAND_RESOURCES\=YES
              export ENABLE_PREVIEWS\=NO
              export ENABLE_STRICT_OBJC_MSGSEND\=YES
              export ENABLE_TESTABILITY\=YES
              export ENABLE_TESTING_SEARCH_PATHS\=NO
              export ENABLE_USER_SCRIPT_SANDBOXING\=NO
              export ENABLE_XOJIT_PREVIEWS\=NO
              export ENTITLEMENTS_ALLOWED\=NO
              export ENTITLEMENTS_DESTINATION\=__entitlements
              export ENTITLEMENTS_REQUIRED\=NO
              export EXCLUDED_ARCHS\=arm64
              export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
              export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
              export EXECUTABLES_FOLDER_PATH\=tauri-mac-ios-app.app/Executables
              export EXECUTABLE_FOLDER_PATH\=tauri-mac-ios-app.app
              export EXECUTABLE_FOLDER_PATH_SHALLOW_BUNDLE_NO\=tauri-mac-ios-app.app/MacOS
              export EXECUTABLE_FOLDER_PATH_SHALLOW_BUNDLE_YES\=tauri-mac-ios-app.app
              export EXECUTABLE_NAME\=tauri-mac-ios-app
              export EXECUTABLE_PATH\=tauri-mac-ios-app.app/tauri-mac-ios-app
              export EXPANDED_CODE_SIGN_IDENTITY\=-
              export EXPANDED_CODE_SIGN_IDENTITY_NAME\=-
              export EXTENSIONS_FOLDER_PATH\=tauri-mac-ios-app.app/Extensions
              export FILE_LIST\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects/LinkFileList
              export FIXED_FILES_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/FixedFiles
              export FRAMEWORKS_FOLDER_PATH\=tauri-mac-ios-app.app/Frameworks
              export FRAMEWORK_FLAG_PREFIX\=-framework
              export FRAMEWORK_SEARCH_PATHS\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator\ \ \".\"
              export FRAMEWORK_VERSION\=A
              export FULL_PRODUCT_NAME\=tauri-mac-ios-app.app
              export FUSE_BUILD_PHASES\=YES
              export FUSE_BUILD_SCRIPT_PHASES\=NO
              export GCC3_VERSION\=3.3
              export GCC_C_LANGUAGE_STANDARD\=gnu11
              export GCC_DYNAMIC_NO_PIC\=NO
              export GCC_INLINES_ARE_PRIVATE_EXTERN\=YES
              export GCC_NO_COMMON_BLOCKS\=YES
              export GCC_OBJC_LEGACY_DISPATCH\=YES
              export GCC_OPTIMIZATION_LEVEL\=0
              export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
              export GCC_PREPROCESSOR_DEFINITIONS\=\ DEBUG\=1
              export GCC_SYMBOLS_PRIVATE_EXTERN\=NO
              export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
              export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
              export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
              export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
              export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
              export GCC_WARN_UNDECLARED_SELECTOR\=YES
              export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
              export GCC_WARN_UNUSED_FUNCTION\=YES
              export GCC_WARN_UNUSED_VARIABLE\=YES
              export GENERATED_MODULEMAP_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
              export GENERATE_INFOPLIST_FILE\=NO
              export GENERATE_INTERMEDIATE_TEXT_BASED_STUBS\=YES
              export GENERATE_MASTER_OBJECT_FILE\=NO
              export GENERATE_PKGINFO_FILE\=YES
              export GENERATE_PROFILING_CODE\=NO
              export GENERATE_TEXT_BASED_STUBS\=NO
              export GID\=20
              export GROUP\=staff
              export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
              export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
              export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
              export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
              export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
              export HEADERMAP_USES_VFS\=NO
              export HEADER_SEARCH_PATHS\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/include\ 
              export HIDE_BITCODE_SYMBOLS\=YES
              export HOME\=/Users/taishow2024
              export HOST_ARCH\=arm64
              export HOST_PLATFORM\=macosx
              export ICONV\=/usr/bin/iconv
              export INFOPLIST_ENABLE_CFBUNDLEICONS_MERGE\=YES
              export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
              export INFOPLIST_FILE\=tauri-mac-ios-app_iOS/Info.plist
              export INFOPLIST_OUTPUT_FORMAT\=binary
              export INFOPLIST_PATH\=tauri-mac-ios-app.app/Info.plist
              export INFOPLIST_PREPROCESS\=NO
              export INFOSTRINGS_PATH\=tauri-mac-ios-app.app/en.lproj/InfoPlist.strings
              export INLINE_PRIVATE_FRAMEWORKS\=NO
              export INSTALLHDRS_COPY_PHASE\=NO
              export INSTALLHDRS_SCRIPT_PHASE\=NO
              export INSTALL_DIR\=/tmp/tauri-mac-ios-app.dst/Applications
              export INSTALL_GROUP\=staff
              export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
              export INSTALL_OWNER\=taishow2024
              export INSTALL_PATH\=/Applications
              export INSTALL_ROOT\=/tmp/tauri-mac-ios-app.dst
              export IPHONEOS_DEPLOYMENT_TARGET\=13.0
              export IS_UNOPTIMIZED_BUILD\=YES
              export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
              export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
              export JAVA_ARCHIVE_CLASSES\=YES
              export JAVA_ARCHIVE_TYPE\=JAR
              export JAVA_COMPILER\=/usr/bin/javac
              export JAVA_FOLDER_PATH\=tauri-mac-ios-app.app/Java
              export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
              export JAVA_JAR_FLAGS\=cv
              export JAVA_SOURCE_SUBDIR\=.
              export JAVA_USE_DEPENDENCIES\=YES
              export JAVA_ZIP_FLAGS\=-urg
              export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
              export KEEP_PRIVATE_EXTERNS\=NO
              export LD_DEPENDENCY_INFO_FILE\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/undefined_arch/tauri-mac-ios-app_dependency_info.dat
              export LD_ENTITLEMENTS_SECTION\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent
              export LD_ENTITLEMENTS_SECTION_DER\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent.der
              export LD_EXPORT_SYMBOLS\=YES
              export LD_GENERATE_MAP_FILE\=NO
              export LD_MAP_FILE_PATH\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app-LinkMap-normal-undefined_arch.txt
              export LD_NO_PIE\=NO
              export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
              export LD_RUNPATH_SEARCH_PATHS\=\ @executable_path/Frameworks
              export LD_RUNPATH_SEARCH_PATHS_YES\=@loader_path//Frameworks
              export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
              export LEX\=lex
              export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
              export LIBRARY_FLAG_NOSPACE\=YES
              export LIBRARY_FLAG_PREFIX\=-l
              export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
              export LIBRARY_SEARCH_PATHS\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator\ 
              export LINKER_DISPLAYS_MANGLED_NAMES\=NO
              export LINK_FILE_LIST_normal_arm64-sim\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/arm64-sim/tauri-mac-ios-app.LinkFileList
              export LINK_OBJC_RUNTIME\=YES
              export LINK_WITH_STANDARD_LIBRARIES\=YES
              export LLVM_TARGET_TRIPLE_OS_VERSION\=ios13.0
              export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
              export LLVM_TARGET_TRIPLE_VENDOR\=apple
              export LM_AUX_CONST_METADATA_LIST_PATH_normal_arm64-sim\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/arm64-sim/tauri-mac-ios-app.SwiftConstValuesFileList
              export LOCALIZATION_EXPORT_SUPPORTED\=YES
              export LOCALIZATION_PREFERS_STRING_CATALOGS\=NO
              export LOCALIZED_RESOURCES_FOLDER_PATH\=tauri-mac-ios-app.app/en.lproj
              export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
              export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
              export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
              export LOCAL_APPS_DIR\=/Applications
              export LOCAL_DEVELOPER_DIR\=/Library/Developer
              export LOCAL_LIBRARY_DIR\=/Library
              export LOCROOT\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              export LOCSYMROOT\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              export MACH_O_TYPE\=mh_execute
              export MAC_OS_X_PRODUCT_BUILD_VERSION\=23G93
              export MAC_OS_X_VERSION_ACTUAL\=140601
              export MAC_OS_X_VERSION_MAJOR\=140000
              export MAC_OS_X_VERSION_MINOR\=140600
              export MAKE_MERGEABLE\=NO
              export MERGEABLE_LIBRARY\=NO
              export MERGED_BINARY_TYPE\=none
              export MERGE_LINKED_LIBRARIES\=NO
              export METAL_LIBRARY_FILE_BASE\=default
              export METAL_LIBRARY_OUTPUT_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/tauri-mac-ios-app.app
              export MODULES_FOLDER_PATH\=tauri-mac-ios-app.app/Modules
              export MODULE_CACHE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
              export MTL_ENABLE_DEBUG_INFO\=INCLUDE_SOURCE
              export MTL_FAST_MATH\=YES
              export NATIVE_ARCH\=arm64
              export NATIVE_ARCH_32_BIT\=arm
              export NATIVE_ARCH_64_BIT\=arm64
              export NATIVE_ARCH_ACTUAL\=arm64
              export NO_COMMON\=YES
              export OBJC_ABI_VERSION\=2
              export OBJECT_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects
              export OBJECT_FILE_DIR_normal\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal
              export OBJROOT\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex
              export ONLY_ACTIVE_ARCH\=NO
              export OS\=MACOS
              export OSAC\=/usr/bin/osacompile
              export PACKAGE_TYPE\=com.apple.package-type.wrapper.application
              export PASCAL_STRINGS\=YES
              export PATH\=/Applications/Xcode.app/Contents/SharedFrameworks/XCBuild.framework/Versions/A/PlugIns/XCBBuildService.bundle/Contents/PlugIns/XCBSpecifications.ideplugin/Contents/Resources:/Applications/Xcode.app/Contents/SharedFrameworks/XCBuild.framework/Versions/A/PlugIns/XCBBuildService.bundle/Contents/PlugIns/XCBSpecifications.ideplugin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/appleinternal/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/appleinternal/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/node_modules/.bin:/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/node_modules/.bin:/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/node_modules/.bin:/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/node_modules/.bin:/Users/taishow2024/Documents/Repository/Weekend_Programming/node_modules/.bin:/Users/taishow2024/Documents/Repository/node_modules/.bin:/Users/taishow2024/Documents/node_modules/.bin:/Users/taishow2024/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/taishow2024/.nodebrew/current/bin:/Users/taishow2024/.bun/bin:/Users/taishow2024/.cargo/bin
              export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
              export PBDEVELOPMENTPLIST_PATH\=tauri-mac-ios-app.app/pbdevelopment.plist
              export PER_ARCH_OBJECT_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/undefined_arch
              export PER_VARIANT_OBJECT_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal
              export PKGINFO_FILE_PATH\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/PkgInfo
              export PKGINFO_PATH\=tauri-mac-ios-app.app/PkgInfo
              export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
              export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
              export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
              export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
              export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
              export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
              export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
              export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
              export PLATFORM_FAMILY_NAME\=iOS
              export PLATFORM_NAME\=iphonesimulator
              export PLATFORM_PREFERRED_ARCH\=x86_64
              export PLATFORM_PRODUCT_BUILD_VERSION\=21F77
              export PLIST_FILE_OUTPUT_FORMAT\=binary
              export PLUGINS_FOLDER_PATH\=tauri-mac-ios-app.app/PlugIns
              export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
              export PRECOMP_DESTINATION_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/PrefixHeaders
              export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
              export PRIVATE_HEADERS_FOLDER_PATH\=tauri-mac-ios-app.app/PrivateHeaders
              export PROCESSED_INFOPLIST_PATH\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/undefined_arch/Processed-Info.plist
              export PRODUCT_BUNDLE_IDENTIFIER\=com.taurirc2.app
              export PRODUCT_BUNDLE_PACKAGE_TYPE\=APPL
              export PRODUCT_MODULE_NAME\=tauri_mac_ios_app
              export PRODUCT_NAME\=tauri-mac-ios-app
              export PRODUCT_SETTINGS_PATH\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app_iOS/Info.plist
              export PRODUCT_TYPE\=com.apple.product-type.application
              export PROFILING_CODE\=NO
              export PROJECT\=tauri-mac-ios-app
              export PROJECT_DERIVED_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/DerivedSources
              export PROJECT_DIR\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              export PROJECT_FILE_PATH\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/tauri-mac-ios-app.xcodeproj
              export PROJECT_NAME\=tauri-mac-ios-app
              export PROJECT_TEMP_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build
              export PROJECT_TEMP_ROOT\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex
              export PROVISIONING_PROFILE_REQUIRED\=NO
              export PROVISIONING_PROFILE_REQUIRED_YES_YES\=YES
              export PROVISIONING_PROFILE_SUPPORTED\=YES
              export PUBLIC_HEADERS_FOLDER_PATH\=tauri-mac-ios-app.app/Headers
              export RECOMMENDED_IPHONEOS_DEPLOYMENT_TARGET\=12.5
              export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
              export REMOVE_CVS_FROM_RESOURCES\=YES
              export REMOVE_GIT_FROM_RESOURCES\=YES
              export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
              export REMOVE_HG_FROM_RESOURCES\=YES
              export REMOVE_STATIC_EXECUTABLES_FROM_EMBEDDED_BUNDLES\=YES
              export REMOVE_SVN_FROM_RESOURCES\=YES
              export REZ_COLLECTOR_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/ResourceManagerResources
              export REZ_OBJECTS_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/ResourceManagerResources/Objects
              export REZ_SEARCH_PATHS\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator\ 
              export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
              export SCRIPTS_FOLDER_PATH\=tauri-mac-ios-app.app/Scripts
              export SCRIPT_INPUT_FILE_COUNT\=0
              export SCRIPT_INPUT_FILE_LIST_COUNT\=0
              export SCRIPT_OUTPUT_FILE_0\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/Externals/x86_64/debug/libtauri_mac_ios_app_lib.a
              export SCRIPT_OUTPUT_FILE_1\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/Externals/arm64/debug/libtauri_mac_ios_app_lib.a
              export SCRIPT_OUTPUT_FILE_2\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/Externals/arm64-sim/debug/libtauri_mac_ios_app_lib.a
              export SCRIPT_OUTPUT_FILE_COUNT\=3
              export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
              export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk
              export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk
              export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk
              export SDK_DIR_iphonesimulator17_5\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk
              export SDK_NAME\=iphonesimulator17.5
              export SDK_NAMES\=iphonesimulator17.5
              export SDK_PRODUCT_BUILD_VERSION\=21F77
              export SDK_STAT_CACHE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData
              export SDK_STAT_CACHE_ENABLE\=YES
              export SDK_STAT_CACHE_PATH\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/SDKStatCaches.noindex/iphonesimulator17.5-21F77-c098706a9f71eba4e76ae92ab367209a.sdkstatcache
              export SDK_VERSION\=17.5
              export SDK_VERSION_ACTUAL\=170500
              export SDK_VERSION_MAJOR\=170000
              export SDK_VERSION_MINOR\=170500
              export SED\=/usr/bin/sed
              export SEPARATE_STRIP\=NO
              export SEPARATE_SYMBOL_EDIT\=NO
              export SET_DIR_MODE_OWNER_GROUP\=YES
              export SET_FILE_MODE_OWNER_GROUP\=NO
              export SHALLOW_BUNDLE\=YES
              export SHALLOW_BUNDLE_TRIPLE\=ios-simulator
              export SHALLOW_BUNDLE_ios_macabi\=NO
              export SHALLOW_BUNDLE_macos\=NO
              export SHARED_DERIVED_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/DerivedSources
              export SHARED_FRAMEWORKS_FOLDER_PATH\=tauri-mac-ios-app.app/SharedFrameworks
              export SHARED_PRECOMPS_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/PrecompiledHeaders
              export SHARED_SUPPORT_FOLDER_PATH\=tauri-mac-ios-app.app/SharedSupport
              export SKIP_INSTALL\=NO
              export SOURCE_ROOT\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              export SRCROOT\=/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              export STRINGSDATA_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/undefined_arch
              export STRINGSDATA_ROOT\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build
              export STRINGS_FILE_INFOPLIST_RENAME\=YES
              export STRINGS_FILE_OUTPUT_ENCODING\=binary
              export STRIP_BITCODE_FROM_COPIED_FILES\=NO
              export STRIP_INSTALLED_PRODUCT\=NO
              export STRIP_STYLE\=all
              export STRIP_SWIFT_SYMBOLS\=YES
              export SUPPORTED_DEVICE_FAMILIES\=1,2
              export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
              export SUPPORTS_MACCATALYST\=NO
              export SUPPORTS_ON_DEMAND_RESOURCES\=YES
              export SUPPORTS_TEXT_BASED_API\=NO
              export SUPPRESS_WARNINGS\=NO
              export SWIFT_ACTIVE_COMPILATION_CONDITIONS\=DEBUG
              export SWIFT_EMIT_LOC_STRINGS\=NO
              export SWIFT_OPTIMIZATION_LEVEL\=-Onone
              export SWIFT_PLATFORM_TARGET_PREFIX\=ios
              export SWIFT_RESPONSE_FILE_PATH_normal_arm64-sim\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/arm64-sim/tauri-mac-ios-app.SwiftFileList
              export SWIFT_VERSION\=5.0
              export SYMROOT\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products
              export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
              export SYSTEM_APPS_DIR\=/Applications
              export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
              export SYSTEM_DEMOS_DIR\=/Applications/Extras
              export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
              export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
              export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
              export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
              export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
              export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
              export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
              export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
              export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
              export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
              export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
              export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
              export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
              export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
              export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
              export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
              export SYSTEM_EXTENSIONS_FOLDER_PATH\=tauri-mac-ios-app.app/SystemExtensions
              export SYSTEM_EXTENSIONS_FOLDER_PATH_SHALLOW_BUNDLE_NO\=tauri-mac-ios-app.app/Library/SystemExtensions
              export SYSTEM_EXTENSIONS_FOLDER_PATH_SHALLOW_BUNDLE_YES\=tauri-mac-ios-app.app/SystemExtensions
              export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
              export SYSTEM_LIBRARY_DIR\=/System/Library
              export TAPI_DEMANGLE\=YES
              export TAPI_ENABLE_PROJECT_HEADERS\=NO
              export TAPI_LANGUAGE\=objective-c
              export TAPI_LANGUAGE_STANDARD\=compiler-default
              export TAPI_USE_SRCROOT\=YES
              export TAPI_VERIFY_MODE\=Pedantic
              export TARGETED_DEVICE_FAMILY\=1,2
              export TARGETNAME\=tauri-mac-ios-app_iOS
              export TARGET_BUILD_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator
              export TARGET_NAME\=tauri-mac-ios-app_iOS
              export TARGET_TEMP_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build
              export TEMP_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build
              export TEMP_FILES_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build
              export TEMP_FILE_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build
              export TEMP_ROOT\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex
              export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk/Developer/Library/Frameworks
              export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
              export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
              export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
              export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
              export TeamIdentifierPrefix\=FAKETEAMID.
              export UID\=501
              export UNINSTALLED_PRODUCTS_DIR\=/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/UninstalledProducts
              export UNLOCALIZED_RESOURCES_FOLDER_PATH\=tauri-mac-ios-app.app
              export UNLOCALIZED_RESOURCES_FOLDER_PATH_SHALLOW_BUNDLE_NO\=tauri-mac-ios-app.app/Resources
              export UNLOCALIZED_RESOURCES_FOLDER_PATH_SHALLOW_BUNDLE_YES\=tauri-mac-ios-app.app
              export UNSTRIPPED_PRODUCT\=NO
              export USER\=taishow2024
              export USER_APPS_DIR\=/Users/taishow2024/Applications
              export USER_LIBRARY_DIR\=/Users/taishow2024/Library
              export USE_DYNAMIC_NO_PIC\=YES
              export USE_HEADERMAP\=YES
              export USE_HEADER_SYMLINKS\=NO
              export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
              export VALIDATE_PRODUCT\=NO
              export VALID_ARCHS\=arm64\ \ arm64-sim
              export VERBOSE_PBXCP\=NO
              export VERSIONPLIST_PATH\=tauri-mac-ios-app.app/version.plist
              export VERSION_INFO_BUILDER\=taishow2024
              export VERSION_INFO_FILE\=tauri-mac-ios-app_vers.c
              export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:tauri-mac-ios-app\ \ PROJECT:tauri-mac-ios-app-\"
              export WRAPPER_EXTENSION\=app
              export WRAPPER_NAME\=tauri-mac-ios-app.app
              export WRAPPER_SUFFIX\=.app
              export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
              export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
              export XCODE_PRODUCT_BUILD_VERSION\=15F31d
              export XCODE_VERSION_ACTUAL\=1540
              export XCODE_VERSION_MAJOR\=1500
              export XCODE_VERSION_MINOR\=1540
              export XPCSERVICES_FOLDER_PATH\=tauri-mac-ios-app.app/XPCServices
              export YACC\=yacc
              export _WRAPPER_CONTENTS_DIR_SHALLOW_BUNDLE_NO\=/Contents
              export _WRAPPER_PARENT_PATH_SHALLOW_BUNDLE_NO\=/..
              export _WRAPPER_RESOURCES_DIR_SHALLOW_BUNDLE_NO\=/Resources
              export __IS_NOT_MACOS\=YES
              export __IS_NOT_MACOS_macosx\=NO
              export __IS_NOT_SIMULATOR\=NO
              export __IS_NOT_SIMULATOR_simulator\=NO
              export arch\=undefined_arch
              export diagnostic_message_length\=134
              export variant\=normal
              /bin/sh -c /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Script-5F64848F2C39506EBBF993BE.sh
          $ tauri ios xcode-script -v --platform iOS Simulator --sdk-root /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk --framework-search-paths /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator  "." --header-search-paths /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/include  --gcc-preprocessor-definitions  DEBUG=1 --configuration debug arm64-sim
              Debug [globset] built glob set; 0 literals, 3 basenames, 0 extensions, 0 prefixes, 0 suffixes, 0 required extensions, 0 regexes
              Debug [globset] glob converted to regex: Glob { glob: "**/hs_err_pid*", re: "(?-u)^(?:/?|.*/)hs_err_pid[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, Literal('h'), Literal('s'), Literal('_'), Literal('e'), Literal('r'), Literal('r'), Literal('_'), Literal('p'), Literal('i'), Literal('d'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: ".vscode/*", re: "(?-u)^\\.vscode/[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([Literal('.'), Literal('v'), Literal('s'), Literal('c'), Literal('o'), Literal('d'), Literal('e'), Literal('/'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: "**/vite.config.ts.timestamp*", re: "(?-u)^(?:/?|.*/)vite\\.config\\.ts\\.timestamp[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, Literal('v'), Literal('i'), Literal('t'), Literal('e'), Literal('.'), Literal('c'), Literal('o'), Literal('n'), Literal('f'), Literal('i'), Literal('g'), Literal('.'), Literal('t'), Literal('s'), Literal('.'), Literal('t'), Literal('i'), Literal('m'), Literal('e'), Literal('s'), Literal('t'), Literal('a'), Literal('m'), Literal('p'), ZeroOrMore]) }
              Debug [globset] built glob set; 4 literals, 14 basenames, 20 extensions, 0 prefixes, 0 suffixes, 2 required extensions, 3 regexes
              Debug [globset] glob converted to regex: Glob { glob: "**/npm-debug.log*", re: "(?-u)^(?:/?|.*/)npm\\-debug\\.log[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, Literal('n'), Literal('p'), Literal('m'), Literal('-'), Literal('d'), Literal('e'), Literal('b'), Literal('u'), Literal('g'), Literal('.'), Literal('l'), Literal('o'), Literal('g'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: "**/yarn-debug.log*", re: "(?-u)^(?:/?|.*/)yarn\\-debug\\.log[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, Literal('y'), Literal('a'), Literal('r'), Literal('n'), Literal('-'), Literal('d'), Literal('e'), Literal('b'), Literal('u'), Literal('g'), Literal('.'), Literal('l'), Literal('o'), Literal('g'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: "**/yarn-error.log*", re: "(?-u)^(?:/?|.*/)yarn\\-error\\.log[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, Literal('y'), Literal('a'), Literal('r'), Literal('n'), Literal('-'), Literal('e'), Literal('r'), Literal('r'), Literal('o'), Literal('r'), Literal('.'), Literal('l'), Literal('o'), Literal('g'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: "**/pnpm-debug.log*", re: "(?-u)^(?:/?|.*/)pnpm\\-debug\\.log[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, Literal('p'), Literal('n'), Literal('p'), Literal('m'), Literal('-'), Literal('d'), Literal('e'), Literal('b'), Literal('u'), Literal('g'), Literal('.'), Literal('l'), Literal('o'), Literal('g'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: "**/lerna-debug.log*", re: "(?-u)^(?:/?|.*/)lerna\\-debug\\.log[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, Literal('l'), Literal('e'), Literal('r'), Literal('n'), Literal('a'), Literal('-'), Literal('d'), Literal('e'), Literal('b'), Literal('u'), Literal('g'), Literal('.'), Literal('l'), Literal('o'), Literal('g'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: ".vscode/*", re: "(?-u)^\\.vscode/[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([Literal('.'), Literal('v'), Literal('s'), Literal('c'), Literal('o'), Literal('d'), Literal('e'), Literal('/'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: "**/*.ntvs*", re: "(?-u)^(?:/?|.*/)[^/]*\\.ntvs[^/]*$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, ZeroOrMore, Literal('.'), Literal('n'), Literal('t'), Literal('v'), Literal('s'), ZeroOrMore]) }
              Debug [globset] glob converted to regex: Glob { glob: "**/*.sw?", re: "(?-u)^(?:/?|.*/)[^/]*\\.sw[^/]$", opts: GlobOptions { case_insensitive: false, literal_separator: true, backslash_escape: true, empty_alternates: false }, tokens: Tokens([RecursivePrefix, ZeroOrMore, Literal('.'), Literal('s'), Literal('w'), Any]) }
              Debug [globset] built glob set; 1 literals, 6 basenames, 5 extensions, 0 prefixes, 0 suffixes, 0 required extensions, 8 regexes
              Debug [globset] built glob set; 2 literals, 0 basenames, 0 extensions, 0 prefixes, 0 suffixes, 0 required extensions, 0 regexes
              Debug [globset] built glob set; 0 literals, 3 basenames, 0 extensions, 0 prefixes, 0 suffixes, 0 required extensions, 0 regexes
              Debug [ignore::walk] ignoring /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/Externals: Ignore(IgnoreMatch(Gitignore(Glob { from: Some("/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/.gitignore"), original: "Externals/", actual: "**/Externals", is_whitelist: false, is_only_dir: true })))
              Debug [ignore::walk] ignoring /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/.gitignore: Ignore(IgnoreMatch(Hidden))
          thread '<unnamed>' panicked at src/helpers/app_paths.rs:105:5:
          Couldn't recognize the current folder as a Tauri project. It must contain a `tauri.conf.json`, `tauri.conf.json5` or `Tauri.toml` file in any subfolder.
          note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

          CompileStoryboard /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/LaunchScreen.storyboard (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              /Applications/Xcode.app/Contents/Developer/usr/bin/ibtool --errors --warnings --notices --module tauri_mac_ios_app --output-partial-info-plist /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/LaunchScreen-SBPartialInfo.plist --auto-activate-custom-fonts --target-device iphone --target-device ipad --minimum-deployment-target 13.0 --output-format human-readable-text --compilation-directory /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/LaunchScreen.storyboard

          Ld /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/tauri-mac-ios-app.app/tauri-mac-ios-app normal (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
              cd /Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple
              /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang++ -Xlinker -reproducible -target arm64-sim-apple-ios13.0-simulator -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -O0 -L/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/EagerLinkingTBDs/debug-iphonesimulator -L/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator -L/Users/taishow2024/Documents/Repository/Weekend_Programming/rust/tauri/tauri-app-mac/tauri-mac-ios-app/src-tauri/gen/apple/Externals/arm64-sim/debug -L/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk/usr/lib/swift -L/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift/iphonesimulator -L/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift-5.0/iphonesimulator -F/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/EagerLinkingTBDs/debug-iphonesimulator -F/Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator -F. -filelist /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/arm64-sim/tauri-mac-ios-app.LinkFileList -Xlinker -rpath -Xlinker @executable_path/Frameworks -dead_strip -Xlinker -object_path_lto -Xlinker /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/arm64-sim/tauri-mac-ios-app_lto.o -Xlinker -export_dynamic -Xlinker -no_deduplicate -Xlinker -objc_abi_version -Xlinker 2 -stdlib\=libc++ -fobjc-arc -fobjc-link-runtime -Xlinker -sectcreate -Xlinker __TEXT -Xlinker __entitlements -Xlinker /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent -Xlinker -sectcreate -Xlinker __TEXT -Xlinker __ents_der -Xlinker /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/tauri-mac-ios-app.app-Simulated.xcent.der -ltauri_mac_ios_app_lib -framework CoreGraphics -framework Metal -framework MetalKit -framework QuartzCore -framework Security -framework UIKit -framework WebKit -Xlinker -no_adhoc_codesign -Xlinker -dependency_info -Xlinker /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Intermediates.noindex/tauri-mac-ios-app.build/debug-iphonesimulator/tauri-mac-ios-app_iOS.build/Objects-normal/arm64-sim/tauri-mac-ios-app_dependency_info.dat -o /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/tauri-mac-ios-app.app/tauri-mac-ios-app
          ld: library 'tauri_mac_ios_app_lib' not found
          clang: error: linker command failed with exit code 1 (use -v to see invocation)

          ** BUILD FAILED **


          The following build commands failed:
                  Ld /Users/taishow2024/Library/Developer/Xcode/DerivedData/tauri-mac-ios-app-fkgghnkfowwavudpzidsempidwnk/Build/Products/debug-iphonesimulator/tauri-mac-ios-app.app/tauri-mac-ios-app normal (in target 'tauri-mac-ios-app_iOS' from project 'tauri-mac-ios-app')
          (1 failure)
              Error command ["xcodebuild"] exited with code 65
          error: script "tauri" exited with code 1
          ```
          </details>
    - V2.0 Beta
      ```
      yarn create tauri-app --beta
      ```
      - Beta.24
        - Windows 11
          - Tauri環境確認
            ```
            [✔] Environment
                - OS: Windows 10.0.22631 X64
                ✔ WebView2: 126.0.2592.102
                ✔ MSVC: Visual Studio Community 2022
                ✔ rustc: 1.79.0 (129f3b996 2024-06-10)
                ✔ cargo: 1.79.0 (ffa9cf99a 2024-06-03)
                ✔ rustup: 1.27.1 (54dd3d00f 2024-04-24)
                ✔ Rust toolchain: stable-x86_64-pc-windows-msvc (default)
                - node: 18.17.1
                - yarn: 1.22.21
                - npm: 9.6.7
                - bun: 1.1.20

            [-] Packages
                - tauri [RUST]: 2.0.0-beta.24
                - tauri-build [RUST]: 2.0.0-beta.19
                - wry [RUST]: 0.41.0
                - tao [RUST]: 0.28.1
                - @tauri-apps/api [NPM]: 2.0.0-beta.15
                - @tauri-apps/cli [NPM]: 2.0.0-beta.22

            [-] App
                - build-type: bundle
                - CSP: unset
                - frontendDist: /public
                - devUrl: http://localhost:8083/
                - framework: Svelte
                - bundler: Rollup
            ```
        - Ubuntu 24.04 on Windows 11
          - Tauri環境確認
            ```
            [✔] Environment
                - OS: Ubuntu 24.04 X64
                ✔ webkit2gtk-4.1: 2.44.2
                ✔ rsvg2: 2.58.0
                ✔ rustc: 1.79.0 (129f3b996 2024-06-10)
                ✔ cargo: 1.79.0 (ffa9cf99a 2024-06-03)
                ✔ rustup: 1.27.1 (54dd3d00f 2024-04-24)
                ✔ Rust toolchain: stable-x86_64-unknown-linux-gnu (default)
                - node: 20.11.0
                - yarn: 1.22.21
                - npm: 10.2.4
                - bun: 1.1.20

            [-] Packages
                - tauri [RUST]: 2.0.0-beta.24
                - tauri-build [RUST]: 2.0.0-beta.19
                - wry [RUST]: 0.41.0
                - tao [RUST]: 0.28.1
                - @tauri-apps/api [NPM]: 2.0.0-beta.15
                - @tauri-apps/cli [NPM]: 2.0.0-beta.22

            [-] App
                - build-type: bundle
                - CSP: unset
                - frontendDist: /dist
                - devUrl: http://localhost:1420/
                - framework: React
                - bundler: Vite
            ```
            ![Tauri 2.0Beta](/images/rust/20240716_Tauri2.0_Ubuntu24.04.png)
          - Compile error happend
            ```
              Compiling tauri-plugin v2.0.0-beta.12
            error[E0061]: this function takes 3 arguments but 2 arguments were supplied
              --> /home/taishow/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tauri-plugin-2.0.0-beta.12/src/build/mod.rs:124:7
                |
            124 |       acl::build::generate_docs(&permissions, &autogenerated)?;
                |       ^^^^^^^^^^^^^^^^^^^^^^^^^------------------------------ an argument of type `&str` is missing
                |
            note: function defined here
              --> /home/taishow/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tauri-utils-2.0.0-beta.19/src/acl/build.rs:240:8
                |
            240 | pub fn generate_docs(
                |        ^^^^^^^^^^^^^
            help: provide the argument
                |
            124 |       acl::build::generate_docs(&permissions, &autogenerated, /* &str */)?;
                |                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

            For more information about this error, try `rustc --explain E0061`.
            error: could not compile `tauri-plugin` (lib) due to 1 previous error
            warning: build failed, waiting for other jobs to finish...
            error: script "tauri" exited with code 101
            ```
            -> Fixed (tauri-plugin-shell を最新にすることで解決)
      - Breaking Change @ Beta.21
        - [This release contains breaking changes to the tray event structure because of newly added events](https://github.com/tauri-apps/tauri/pull/9777)
    - V2.0 への移行
      - Betaの間は、差分コンパイルではなく、全コンパイルが妥当（cargo clean->cargo build->bun tauri dev）
      - [Upgrade from Tauri 1.0](https://beta.tauri.app/guides/upgrade-migrate/from-tauri-1/)
      - 上記Guideにない事項
        - on_window_eventクロージャの引数が変更になっている <span style="color: red;">**Added 2024/03/20**</span>
          - V1.x
            ```rust
            .on_window_event(|event| match event.event() {
              tauri::WindowEvent::CloseRequested { api, .. } => {
                event.window().hide().unwrap();
                api.prevent_close();
              }
              _ => {}
            })
            ```
          - V2.0 Beta
            ```rust
            .on_window_event(|window, event| match event {
              tauri::WindowEvent::CloseRequested { api, .. } => {
                window.hide().unwrap();
                api.prevent_close();
              }
              _ => {}
            })
            ```
  - npm and yarn
    - [Node.js](https://nodejs.org/ja)インストール
    - yarnインストール
      ```
      npm install yarn -g
      ```
    - スクリプト実行ポリシーの変更
      ```
      Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
      ```
  - セットアップについて
    - Windows 11
    1.  Start a New Tauri Project
        ```
        npx create-tauri-app
        ```
    1.  Install Tauri CLI package as a dev dependency
        ```
        npm init
        npm install -D @tauri-apps/cli
        ```
    1.  install Tauri CLI as a cargo subcommand
        ```
        cargo install tauri-cli --locked --version "^1.0.0-rc"
        ```
    1.  Install Tauri API Package as a Dependency (optional)
        ```
        npm install @tauri-apps/api
        ```
    1.  Initialize Tauri in Your App
        ```
        cargo tauri init
        ```
    1.  Check tauri info to Make Sure Everything Is Set up Properly
        ```
        cargo tauri info
        ```

        ```txt
        Environment
          › OS: Windows 10.0.25393 X64
          › Webview2: 114.0.1823.51
          › MSVC: 
          › Node.js: 20.0.0
          › npm: 9.1.2
          › pnpm: Not installed!
          › yarn: 1.22.19
          › rustup: 1.26.0
          › rustc: 1.70.0
          › cargo: 1.70.0
          › Rust toolchain: stable-x86_64-pc-windows-msvc 

        Packages
          › @tauri-apps/cli [NPM]: 1.0.0-rc.13
          › @tauri-apps/api [NPM]: 1.4.0
          › tauri [RUST]: 1.4.1,
          › tauri-build [RUST]: 1.4.0,
          › tao [RUST]: 0.16.2,
          › wry [RUST]: 0.24.3,

        App
          › build-type: bundle
          › CSP: unset
          › distDir: /public
          › devPath: http://localhost:8083/
          › framework: Svelte
          › bundler: Rollup

        App directory structure
          ├─ .vscode
          ├─ node_modules
          ├─ public
          ├─ src
          └─ src-tauri
        ```
    1.  Start Tauri Development Window
        ```
        cargo tauri dev
        ```
    - Ubuntu 24.04
      - Tauri 1.x
        - そもそも、libjavascriptcoregtk-4.1ではなく、libjavascriptcoregtk-4.0を必要としているため、対応不可と判断。
      - Tauri 2.0
        - 不足するライブラリを追加インストールすることで、実行まで確認
          ```
          sudo apt install libjavascriptcoregtk-4.1*
          sudo apt install libsoup-3.0*
          sudo apt install libwebkit2gtk-4.1*
          ```
          ![Tauri 2.0Beta](/images/rust/20240418_Tauri2.0_Ubuntu24.04.png)
    - Ubuntu 22.04
    1.  必須パッケージインストール
        ```
        sudo apt -y install build-essential
        sudo apt -y install libdbus-1-dev
        sudo apt -y install libssl-dev
        sudo apt -y install libgtk-3-dev
        sudo apt -y install libwebkit2gtk-4.0-dev
        ```
    1.  npmインストール
        ```
        sudo apt-get install npm -y
        ```
    1.  nodeインストール
        ```
        sudo npm install n -g
        sudo n stable
        node -v
        ```
    1.  yarnインストール
        ```
        sudo npm install yarn -g
        ```
    1.  create tauri-app
        ```
        yarn create tauri-app
        ```
    1.  start tauri-app
        ```
        cd tauri-app
        yarn
        yarn tauri dev
        ```
    - Chrome OS Flex
    1.  npmインストール
        ```
        sudo apt install npm -y
        ```
    1.  nodeインストール
        ```
        sudo npm install n -g
        sudo n stable
        node -v
        ```
    - Build エラー対策
      ```
      export PKG_CONFIG_PATH="/usr/lib/x86_64-linux-gnu/pkgconfig:/usr/share/pkgconfig"
      ```
      - webkit2gtk-4.0が見つからない
        ```
        sudo apt install libwebkit2gtk-4.0-dev
        ```
  - Tauri環境のアップデートについて
  1.  windows 11 / Chrome OS Flex
      ```
      % cargo update
      % npm update
      ```
  1.  Ubuntu 20.04.5 on Windows 11
      ```
      % yarn upgrade
      ```
  - 環境情報
  1.  Windows 11
      ```
      Default host: x86_64-pc-windows-msvc
      rustup home:  C:\Users\taish\.rustup

      stable-x86_64-pc-windows-msvc (default)
      rustc 1.71.0 (8ede3aae2 2023-07-12)
      ```
      ![Tauri-app](/images/rust/20230504_tauri1.3_windows11.png)
      - Mcafeeにウイルスとしてブロックされる
        ![Mcafee抑止](/images/rust/20230723_tauri_virus_check_windows11.png)
  1.  ubuntu 22.04.2 on Windows 11
      ```
      Default host: x86_64-unknown-linux-gnu
      rustup home:  /home/taishow/.rustup

      stable-x86_64-unknown-linux-gnu (default)
      rustc 1.71.0 (8ede3aae2 2023-07-12)
      ```
      ![Tauri-app](/images/rust/20230728_tauri1.4_windows11_wsl.png)
  1.  Chrome OS Flex
      - Tauri環境確認
        ```
        bun tauri info
        ```
        ```
        [✔] Environment
            - OS: Debian 12.0.0 X64
            ✔ webkit2gtk-4.0: 2.44.2
            ✔ rsvg2: 2.54.7
            ✔ rustc: 1.79.0 (129f3b996 2024-06-10)
            ✔ cargo: 1.79.0 (ffa9cf99a 2024-06-03)
            ✔ rustup: 1.27.1 (54dd3d00f 2024-04-24)
            ✔ Rust toolchain: stable-x86_64-unknown-linux-gnu (default)
            - node: 16.19.0
            - npm: 8.19.3
            - bun: 1.1.20

        [-] Packages
            - tauri [RUST]: 1.7.1
            - tauri-build [RUST]: 1.5.3
            - wry [RUST]: 0.24.10
            - tao [RUST]: 0.16.8
            - @tauri-apps/api [NPM]: 1.6.0
            - @tauri-apps/cli [NPM]: 1.6.0

        [-] App
            - build-type: bundle
            - CSP: unset
            - distDir: /dist
            - devPath: http://localhost:1420/
            - framework: React
            - bundler: Vite
        ```
        ![Tauri-app](/images/rust/20240714_Tauri1.7.1_Chrome_OS_Flex.png)
  - フロントエンドサーバのポート番号変更
    ```
    "build": {
      "beforeBuildCommand": "npm run build",
      "beforeDevCommand": "npm run dev",
      "devPath": "http://localhost:8083",
      "distDir": "/public"
    },
    ```
  - Visual Studio Codeでのデバッグ
    - [Debugging in VS Code](https://tauri.app/v1/guides/debugging/vs-code/)
  - デスクトップアプリケーションの参考情報
    - [Tauri(Rust+React+TypeScript) から始めるディスクトップアプリ #4[Menuの実装]](https://zenn.dev/wara0516/articles/5af7ab30483185)
  - [LifeLogApp](https://github.com/Tatsukiyoshi/LifeLogApp)

### Slint
  - Install cargo-generate
    ```
    cargo install cargo-generate
    ```
  - Set up with the template
    ```
    cargo generate --git https://github.com/slint-ui/slint-rust-template --name my-project
    ```

### Dioxus(Cross Platform Library)
  - [Fullstack, crossplatform, lightning fast, fully typed.](https://dioxuslabs.com/)
  - V0.6.1
    ```
    cargo install dioxus-cli --version 0.6.1 --force
    ```
    - dioxus-cliを更新する際、Cmakeが見つからないらしく、cmakeの配置先をPATHに追加
      ```
      C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin
      ```
      - tauriなどで問題とならないため、dioxusの問題という認識
    - WASMのフォーマットが異なるらしく、wasm-bidgen を 0.2.92 -> 0.2.99に更新
      ```
      cargo install -f wasm-bindgen-cli --version 0.2.99
      ```
    - サーバ起動
      ```
      dx serve
      ```
      ![dx serve](/images/rust/20241231_dioxus_0.6.1_dx_serve.png)
  - CLIツール
    ```
    cargo install dioxus-cli --force
    ```
  - wasm32-unknown-unknown(WebAssemblyのビルドターゲット)有効化
    ```
    rustup target add wasm32-unknown-unknown
    ```
  - 実行
    ```
    dx serve
    ```
  - 課題整理 <span style="color: red;">*researching from 2024/04/30*</span>
    - [Overview](/design/dioxusApp/system)

### Game Engine
  - [Bevy](https://bevyengine.org/)
    - Bevy 0.13
      - [Migration Guide](https://bevyengine.org/learn/migration-guides/0-12-to-0-13/)
    - Bevy 0.12.1
      - winitクレートが0.29以降nightly buildのrustでビルドされているためか、0.29.9に更新すると、ビルドできなくなるため、現状、0.28.7でビルド確認している。
        ```
        error[E0308]: mismatched types
        ```
    - Bevy 0.11
      - [Migration to 0.11](https://bevyengine.org/learn/migration-guides/0.10-0.11/)
      ![Bevy 0.11](/images/rust/20230723_bevy0.11_windows11.png)
    - Bevy 0.10.1
      - Window Size
        - [Migration to 0.10.1](https://bevyengine.org/learn/migration-guides/0.9-0.10/)
        ![Bevy 0.10.1](/images/rust/20230430_bevy_windows11.png)
      - Icon
        - [スマイル](https://icon-icons.com/ja/download/152131/PNG/512/)
        - Add image crate
          ```
          cargo add image
          ```
        - [Can not set the icon to Windows desktop app](https://github.com/bevyengine/bevy/pull/8130)
        - [Rust: How to add a window icon in Bevy?](https://stackoverflow.com/questions/74586997/how-to-add-a-window-icon-in-bevy)
    - WSL2 and Ubuntu
      - [Installing Linux dependencies](https://github.com/bevyengine/bevy/blob/main/docs/linux_dependencies)
        ```
        sudo apt-get install g++ pkg-config libx11-dev libasound2-dev libudev-dev
        ```
      - [alsa-sys](https://github.com/Spotifyd/spotifyd/issues/1046)
        ```
        sudo apt-get install -y -qq libasound2-dev libssl-dev libpulse-dev libdbus-1-dev portaudio19-dev
        ```
      - Failed to run custom build command for 'libudev-sys'
        ```
        sudo apt install libudev*
        ```
  - [Fyrox](https://fyrox.rs/)

# Tauri Documents
##  Splashscreen
  Webページが読み込みに時間がかかったり、メインウィンドウを表示する前に初期処理を実行する必要がある場合、スプラッシュスクリーンによって、ユーザの起動体験を改善できる。

### Setup
  まず、実行環境のディレクトリにsplashscreen.html（スプラッシュスクリーンのためのHTMLコード）を作る。

  ```json
  "windows": [
      {
          "title": "Tauri App",
          "width": 800,
          "height": 600,
          "resizable": true,
          "fullscreen": false,
      +   "visible": false // Hide the main window by default
      },
      // Add the splashscreen window
      + {
      +   "width": 400,
      +   "height": 200,
      +   "decorations": false,
      +   "url": "splashscreen.html",
      +   "label": "splashscreen"
      + }
  ]
  ```

  さて、アプリケーション起動時には、メインウィンドウを非表示にして、スプラッシュスクリーンを表示するようにします。続けて、メインウィンドウが準備できたら、スプラッシュスクリーンを閉じる手段を準備する必要があります。何を待っているかによって、スプラッシュスクリーンを閉じる手段は決まる。

### Waiting for Webpage
  Webコンテンツを待っているのであれば、フロントエンドからスプラッシュスクリーンを閉じるコマンドを準備したいでしょう。

  ```rust
  use tauri::Manager;
  // Create the command:
  // This command must be async so that it doesn't run on the main thread.
  #[tauri::command]
  async fn close_splashscreen(window: tauri::Window) {
    // Close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
      splashscreen.close().unwrap();
    }
    // Show main window
    window.get_window("main").unwrap().show().unwrap();
  }

  // Register the command:
  fn main() {
    tauri::Builder::default()
      // Add this line
      .invoke_handler(tauri::generate_handler![close_splashscreen])
      .run(tauri::generate_context!())
      .expect("failed to run app");
  }
  ```
  ２つの方法のうち、いずれかでプロジェクトへインポートできる。

  ```js
  // With the Tauri API npm package:
  import { invoke } from '@tauri-apps/api/tauri'
  ```

  または

  ```js
  // With the Tauri global script:
  const invoke = window.__TAURI__.invoke
  ```

  最後にイベントリスナに追加する。（または閉じたいときにinvokeを使って呼び出すだけです）:)

  ```js
  document.addEventListener('DOMContentLoaded', () => {
    // This will wait for the window to load, but you could
    // run this function on whatever trigger you want
    invoke('close_splashscreen')
  })
  ```

### Waiting for Rust
  サーバサイドでのRustコードの実行を待っているのであれば、setup関数ハンドラに置いて、Appインスタンスからアクセスできるようにする。

  ```rust
  use tauri::Manager;
  fn main() {
    tauri::Builder::default()
      .setup(|app| {
        let splashscreen_window = app.get_window("splashscreen").unwrap();
        let main_window = app.get_window("main").unwrap();
        // we perform the initialization code on a new task so the app doesn't freeze
        tauri::async_runtime::spawn(async move {
          // initialize your app here instead of sleeping :)
          println!("Initializing...");
          std::thread::sleep(std::time::Duration::from_secs(2));
          println!("Done initializing.");

          // After it's done, close the splashscreen and display the main window
          splashscreen_window.close().unwrap();
          main_window.show().unwrap();
        });
        Ok(())
      })
      .run(tauri::generate_context!())
      .expect("failed to run app");
  }
  ```
