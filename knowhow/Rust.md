# Rust

  ##  独学書

  |テキスト                                                         |日付      |進捗状況
  |----------------------------------------------------------------|----------|---
  |[パーフェクトRust](https://gihyo.jp/book/2023/978-4-297-13322-1) |2024/01/05|<span style="color: red;">*finished*</span> ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/rust/PerfectRust)

  ##  環境
  1. Windows 11
      |端末       |環境／FW                                        |最終更新
      |-----------|-----------------------------------------------|----------
      |Mini-S12   |[Rust 1.76](#rust-1)                           |[2024/02/22](https://www.rust-lang.org/)  
      |           |[RustRover 2023.3 EAP Build 12](#rustrover)    |[2024/03/07](https://www.jetbrains.com/rust/)
      |           |[Tauri 2.0.0-beta.11](#tauridesktop-framework) |[2024/03/17](https://beta.tauri.app/)
      |           |[Bevy 0.13](#game-engine)                      |[2024/03/15](https://bevyengine.org/)

  1. Ubuntu 22.04.4 on Windows 11
      |端末       |環境／FW      |日付
      |-----------|-------------|----------
      |Mini-S12   |Rust 1.77.0  |2024/03/27
      |           |Tauri 1.6.1  |2024/03/27
      |           |React 18.2.38|2023/11/24
      |           |Vite 5.2.6   |2024/03/27
      |           |Bun 1.0.35   |2024/03/27
      |           |Bevy 0.10.1  |2023/04/30

  1. Chrome OS Flex 122.0.6261.137(Official Build)
      |端末       |環境／FW         |日付
      |-----------|-----------------|----------
      |TransBook  |Rust 1.77.1      |2024/03/30
      |           |Tauri 1.6.1      |2024/03/30
      |           |Node.js 20.12.0  |2024/03/30
      |           |React 18.2.0     |2022/09/03
      |           |Vite 5.2.7       |2024/03/30
      |           |Bevy 0.10.1      |2023/04/01

  ##  ノウハウ
  ### Rust
  - Bug
    - 時差の計算結果が不正(1.72,2023/09/16)
    ![Duration](../images/rust/20230916_Rust_Duration_Bug.png)
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
  ### RustRover
  - 2023.3 EAP Build 12(#RR-233.14015.155) <span style="color: red;">**Updated 2024/03/07**</span>
  - データベース
    - ドライバのインストール＋データソース設定をすることでアクセス可能
      ![ドライバー設定](../images/rust/20231126_PostgreSQL.png)
  - Web APIのテスト
    - RustRoverのHTTPクライアントでリクエストを作成してテストできる
      ![Httpクライアント](../images/rust/20231229_RustRover_HttpClient.png)
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
  - 履歴
    - 2023.3 EAP Build 11(#RR-233.14015.153) <span style="color: red;">**Updated 2024/02/29**</span>
    - 2023.3 EAP Build 9(#RR-233.14015.147) <span style="color: red;">**Updated 2024/02/11**</span>
    - 2023.3 EAP Build 8(#RR-233.13135.127) <span style="color: red;">**Updated 2024/01/25**</span>
    - 2023.3 EAP Build 7(#RR-233.13135.116) <span style="color: red;">**Updated 2024/01/14**</span>
    - 2023.3 EAP Build 6(#RR-233.11799.306) BugFix Update <span style="color: red;">**Updated 2023/12/20**</span>
    - 2023.3 EAP Build 5(#RR-233.11799.284) <span style="color: red;">**Updated 2023/12/16**</span>
    - 2023.3 EAP Build 4(#RR-233.10527.212) <span style="color: red;">**Updated 2023/12/01**</span>
    - 2023.3 EAP Build #RR-233.10527.39 <span style="color: red;">**Updated 2023/11/11**</span>
    - 2023.3 EAP 2 <span style="color: red;">**Updated 2023/10/25**</span>
    - 2023.3 EAP・・・2023.2 EAPが期限切れのため、再セットアップ <span style="color: red;">**Updated 2023/10/14**</span>
    - 2023.2 EAP <span style="color: red;">**Installed 2023/09/14**</span>
      ![2023.2 EAP](../images/rust/20230914_RustRover2023.2.png)
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
    ![Chapter18_WebApp_Search](../images/rust/20240105_WebApp_Search.png)
  - SeaORM
    - テーブルからModel生成
      ```
      sea-orm-cli generate entity -u postgres://postgres:pgsuper@localhost:5432/sample_db -o src/models 
      ```
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
      <summary>セットアップログ</summary>

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

      Read more about vcpkg telemetry at docs/about/privacy.md
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
  - V2.0
    - V2.0 Beta
      ```
      yarn create tauri-app --beta
      ```
    - V2.0 への移行
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
          › distDir: ../public
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
  - tauri環境のアップデートについて
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
      ![Tauri-app](../images/rust/20230504_tauri1.3_windows11.png)
      - Mcafeeにウイルスとしてブロックされる
        ![Mcafee抑止](../images/rust/20230723_tauri_virus_check_windows11.png)
  1.  ubuntu 22.04.2 on Windows 11
      ```
      Default host: x86_64-unknown-linux-gnu
      rustup home:  /home/taishow/.rustup

      stable-x86_64-unknown-linux-gnu (default)
      rustc 1.71.0 (8ede3aae2 2023-07-12)
      ```
      ![Tauri-app](../images/rust/20230728_tauri1.4_windows11_wsl.png)
  1.  Chrome OS Flex
      ```
      [✔] Environment
          - OS: Debian 12.0.0 X64
          ✔ webkit2gtk-4.0: 2.42.5
          ✔ rsvg2: 2.54.7
          ✔ rustc: 1.77.1 (7cf61ebde 2024-03-27)
          ✔ cargo: 1.77.1 (e52e36006 2024-03-26)
          ✔ rustup: 1.27.0 (bbb9276d2 2024-03-08)
          ✔ Rust toolchain: stable-x86_64-unknown-linux-gnu (default)
          - node: 16.19.0
          - npm: 8.19.3

      [-] Packages
          - tauri [RUST]: 1.6.1
          - tauri-build [RUST]: 1.5.1
          - wry [RUST]: 0.24.7
          - tao [RUST]: 0.16.8
          - @tauri-apps/api [NPM]: 1.5.3
          - @tauri-apps/cli [NPM]: 1.5.11

      [-] App
          - build-type: bundle
          - CSP: unset
          - distDir: ../dist
          - devPath: http://localhost:1420/
          - framework: React
          - bundler: Vite
      ```
      ![Tauri-app](../images/rust/20240330_Tauri1.6.1_Rust1.77.png)
  - フロントエンドサーバのポート番号変更
    ```
    "build": {
      "beforeBuildCommand": "npm run build",
      "beforeDevCommand": "npm run dev",
      "devPath": "http://localhost:8083",
      "distDir": "../public"
    },
    ```
  - Visual Studio Codeでのデバッグ
    - [Debugging in VS Code](https://tauri.app/v1/guides/debugging/vs-code/)
  - [LifeLogApp](https://github.com/Tatsukiyoshi/LifeLogApp)
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
      ![Bevy 0.11](../images/rust/20230723_bevy0.11_windows11.png)
    - Bevy 0.10.1
      - Window Size
        - [Migration to 0.10.1](https://bevyengine.org/learn/migration-guides/0.9-0.10/)
        ![Bevy 0.10.1](../images/rust/20230430_bevy_windows11.png)
      - Icon
        - [スマイル](https://icon-icons.com/ja/download/152131/PNG/512/)
        - Add image crate
          ```
          cargo add image
          ```
        - [Can not set the icon to Windows desktop app](https://github.com/bevyengine/bevy/pull/8130)
        - [Rust: How to add a window icon in Bevy?](https://stackoverflow.com/questions/74586997/how-to-add-a-window-icon-in-bevy)
    - WSL2 and Ubuntu
      - [Installing Linux dependencies](https://github.com/bevyengine/bevy/blob/main/docs/linux_dependencies.md)
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
