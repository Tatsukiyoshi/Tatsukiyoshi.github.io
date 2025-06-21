---
layout: single
sidebar:
  nav: main
---
#   Carbon

##  環境

  |Machine         |Env / FW      |Last Updated
  |----------------|--------------|----------
  |Windows Insider |Carbon        |2025/04/06
  |                |- clang 19.1.7|2025/04/06
  |Ubuntu Desktop  |Carbon        |2025/04/27
  |                |- clang 20.1.2|2025/04/26

##  概要
-   [carbon language](https://github.com/carbon-language/carbon-lang)
    *   [公式Dockerfile](https://github.com/carbon-language/carbon-lang/blob/trunk/docker/ubuntu2204/base/Dockerfile)

##  導入
### 環境更新（１回目） [on Ubuntu Desktop 25.04 **@2025/04/27** <span style="color: red;">*Updated!*</span>]
1.  Carbon コードの取得
    ```
    git clone https://github.com/carbon-language/carbon-lang
    ```

    <details>
    <summary>ログ</summary>

    ```
    Cloning into 'carbon-lang'...
    remote: Enumerating objects: 108922, done.
    remote: Counting objects: 100% (2723/2723), done.
    remote: Compressing objects: 100% (1282/1282), done.
    remote: Total 108922 (delta 2326), reused 1443 (delta 1441), pack-reused 106199 (from 3)
    Receiving objects: 100% (108922/108922), 54.97 MiB | 3.20 MiB/s, done.
    Resolving deltas: 100% (90818/90818), done.
    Updating files: 100% (4533/4533), done.
    ```
    </details>

1.  ツールチェーンのヘルプ表示
    ```
    cd carbon-lang
    ./scripts/run_bazelisk.py run //toolchain -- help
    ```
    <details>
    <summary>ログ</summary>

    ```
    Starting local Bazel server (8.0.1) and connecting to it...
    INFO: Invocation ID: 7a2c1fd5-f889-4248-b735-24614213e06b
    INFO: Analyzed target //toolchain:toolchain (108 packages loaded, 11539 targets configured).
    INFO: Found 1 target...
    Target //toolchain:carbon up-to-date:
    bazel-bin/toolchain/carbon
    INFO: Elapsed time: 46568.132s, Critical Path: 1283.29s
    INFO: 2748 processes: 1341 action cache hit, 3 disk cache hit, 71 internal, 2674 processwrapper-sandbox.
    INFO: Build completed successfully, 2748 total actions
    INFO: Running command line: bazel-bin/toolchain/carbon <args omitted>
    Carbon Language toolchain version: 0.0.0-0.dev+e52b51e66

    This is the unified Carbon Language toolchain driver. Its subcommands provide all of the core behavior of the toolchain, including compilation, linking, and developer tools. Each of these has its own subcommand, and you can pass a specific subcommand to the `help` subcommand to get details about its usage.

    Usage:
    carbon [OPTIONS] clang [<ARG>...]
    carbon [OPTIONS] compile [OPTIONS] <FILE>...
    carbon [OPTIONS] format [--output=FILE] <FILE>...
    carbon [OPTIONS] language-server
    carbon [OPTIONS] link [OPTIONS] <OBJECT_FILE>...
    carbon [OPTIONS] lld [OPTIONS] [<ARG>...]
    carbon [OPTIONS] llvm ar [<ARG>...]
    carbon [OPTIONS] llvm cgdata [<ARG>...]
    carbon [OPTIONS] llvm cxxfilt [<ARG>...]
    carbon [OPTIONS] llvm debuginfod-find [<ARG>...]
    carbon [OPTIONS] llvm dsymutil [<ARG>...]
    carbon [OPTIONS] llvm dwp [<ARG>...]
    carbon [OPTIONS] llvm gsymutil [<ARG>...]
    carbon [OPTIONS] llvm ifs [<ARG>...]
    carbon [OPTIONS] llvm libtool-darwin [<ARG>...]
    carbon [OPTIONS] llvm lipo [<ARG>...]
    carbon [OPTIONS] llvm ml [<ARG>...]
    carbon [OPTIONS] llvm mt [<ARG>...]
    carbon [OPTIONS] llvm nm [<ARG>...]
    carbon [OPTIONS] llvm objcopy [<ARG>...]
    carbon [OPTIONS] llvm objdump [<ARG>...]
    carbon [OPTIONS] llvm profdata [<ARG>...]
    carbon [OPTIONS] llvm rc [<ARG>...]
    carbon [OPTIONS] llvm readobj [<ARG>...]
    carbon [OPTIONS] llvm sancov [<ARG>...]
    carbon [OPTIONS] llvm size [<ARG>...]
    carbon [OPTIONS] llvm symbolizer [<ARG>...]
    carbon [OPTIONS] llvm ranlib [<ARG>...]
    carbon [OPTIONS] llvm lib [<ARG>...]
    carbon [OPTIONS] llvm dlltool [<ARG>...]
    carbon [OPTIONS] llvm bitcode-strip [<ARG>...]
    carbon [OPTIONS] llvm install-name-tool [<ARG>...]
    carbon [OPTIONS] llvm strip [<ARG>...]
    carbon [OPTIONS] llvm otool [<ARG>...]
    carbon [OPTIONS] llvm windres [<ARG>...]
    carbon [OPTIONS] llvm readelf [<ARG>...]
    carbon [OPTIONS] llvm addr2line [<ARG>...]

    Subcommands:
    clang
            Runs Clang on arguments.

            This is equivalent to running the `clang` command line directly, and provides the full command line interface.

            Use `carbon clang -- ARGS` to pass flags to `clang`. Although there are currently no flags for `carbon clang`, the `--` reserves the ability to add flags in the future.

            This is provided to help guarantee consistent compilation of C++ files, both when Clang is invoked directly and when a Carbon file importing a C++ file results in an indirect Clang invocation.

    compile
            Compile Carbon source code.

            This subcommand runs the Carbon compiler over input source code, checking it for errors and producing the requested output.

            Error messages are written to the standard error stream.

            Different phases of the compiler can be selected to run, and intermediate state can be written to standard output as these phases progress.

    format
            Format Carbon source code.

    language-server
            Runs the language server.

    link
            Link Carbon executables.

            This subcommand links Carbon executables by combining object files.

            TODO: Support linking binary libraries, both archives and shared libraries. TODO: Support linking against binary libraries.

    lld
            Runs LLD with the provided arguments.

            Note that a specific LLD platform must be selected, and it is actually that particular platform's LLD-driver that is run with the arguments. There is no generic LLD command line.

            For a given platform, this is equivalent to running that platform's LLD alias directly, and provides the full command line interface.

            Use `carbon lld --platform=elf -- ARGS` to separate the `ARGS` forwarded to LLD from the flags passed to the Carbon subcommand.

            Note that typically it is better to use a higher level command to link code, such as invoking `carbon link` with the relevant flags. However, this subcommand supports when you already have a specific invocation using existing command line syntaxes, as well as testing and debugging of the underlying tool.

    llvm
            Runs LLVM's command line tools with the provided arguments.

            This subcommand provides access to a collection of LLVM's command line tools via further subcommands. For each of these tools, their command line can be provided using positional arguments.

    help
            Prints help information for the command, including a description, command line usage, and details of each subcommand and option that can be provided.

    version
            Prints the version of this command.

    Command options:
    -v, --verbose
            Enable verbose logging to the stderr stream.

        --fuzzing
            Configure the command line for fuzzing.

        --include-diagnostic-kind
            When printing diagnostics, include the diagnostic kind as part of output. This applies to each message that forms a diagnostic, not just the primary message.

    For questions, issues, or bug reports, please use our GitHub project:

    https://github.com/carbon-language/carbon-lang
    ```

### 環境更新（２回目） [on Ubuntu 24.04 **@2025/04/06** <span style="color: red;">*Updated!*</span>]
-   手動でのllvm19セットアップに失敗したため、Ubuntu 24.04を再セットアップ

1.  Carbon コードの取得
    ```
    git clone https://github.com/carbon-language/carbon-lang
    ```

    <details>
    <summary>ログ</summary>

    ```
    Cloning into 'carbon-lang'...
    remote: Enumerating objects: 105684, done.
    remote: Counting objects: 100% (427/427), done.
    remote: Compressing objects: 100% (303/303), done.
    remote: Total 105684 (delta 311), reused 124 (delta 124), pack-reused 105257 (from 2)
    Receiving objects: 100% (105684/105684), 51.40 MiB | 23.83 MiB/s, done.
    Resolving deltas: 100% (88257/88257), done.
    ```
    </details>

1.  ツールチェーンのヘルプ表示
    ```
    cd carbon-lang
    ./scripts/run_bazelisk.py run //toolchain -- help
    ```

    <details>
    <summary>ログ</summary>

    ```
    2025/04/06 00:36:53 Downloading https://releases.bazel.build/8.0.1/release/bazel-8.0.1-linux-x86_64...
    Downloading: 61 MB out of 61 MB (100%)
    Extracting Bazel installation...
    Starting local Bazel server (8.0.1) and connecting to it...
    INFO: Invocation ID: 5926a27f-0c90-4c3c-be65-5f2d6a4d4a36
    INFO: Analyzed target //toolchain:toolchain (114 packages loaded, 11416 targets configured).
    INFO: Found 1 target...
    Target //toolchain:carbon up-to-date:
    bazel-bin/toolchain/carbon
    INFO: Elapsed time: 5061.826s, Critical Path: 316.78s
    INFO: 4015 processes: 511 internal, 3504 linux-sandbox.
    INFO: Build completed successfully, 4015 total actions
    INFO: Running command line: bazel-bin/toolchain/carbon <args omitted>
    Carbon Language toolchain version: 0.0.0-0.dev+8e7bb2f95

    This is the unified Carbon Language toolchain driver. Its subcommands provide all of the core behavior of the toolchain, including compilation, linking, and developer tools. Each of these has its own subcommand, and you can pass a specific subcommand to the `help` subcommand to get details about its usage.

    Usage:
    carbon [OPTIONS] clang [<ARG>...]
    carbon [OPTIONS] compile [OPTIONS] <FILE>...
    carbon [OPTIONS] format [--output=FILE] <FILE>...
    carbon [OPTIONS] language-server
    carbon [OPTIONS] link [OPTIONS] <OBJECT_FILE>...
    carbon [OPTIONS] lld [OPTIONS] [<ARG>...]
    carbon [OPTIONS] llvm ar [<ARG>...]
    carbon [OPTIONS] llvm cgdata [<ARG>...]
    carbon [OPTIONS] llvm cxxfilt [<ARG>...]
    carbon [OPTIONS] llvm debuginfod-find [<ARG>...]
    carbon [OPTIONS] llvm dsymutil [<ARG>...]
    carbon [OPTIONS] llvm dwp [<ARG>...]
    carbon [OPTIONS] llvm gsymutil [<ARG>...]
    carbon [OPTIONS] llvm ifs [<ARG>...]
    carbon [OPTIONS] llvm libtool-darwin [<ARG>...]
    carbon [OPTIONS] llvm lipo [<ARG>...]
    carbon [OPTIONS] llvm ml [<ARG>...]
    carbon [OPTIONS] llvm mt [<ARG>...]
    carbon [OPTIONS] llvm nm [<ARG>...]
    carbon [OPTIONS] llvm objcopy [<ARG>...]
    carbon [OPTIONS] llvm objdump [<ARG>...]
    carbon [OPTIONS] llvm profdata [<ARG>...]
    carbon [OPTIONS] llvm rc [<ARG>...]
    carbon [OPTIONS] llvm readobj [<ARG>...]
    carbon [OPTIONS] llvm sancov [<ARG>...]
    carbon [OPTIONS] llvm size [<ARG>...]
    carbon [OPTIONS] llvm symbolizer [<ARG>...]
    carbon [OPTIONS] llvm ranlib [<ARG>...]
    carbon [OPTIONS] llvm lib [<ARG>...]
    carbon [OPTIONS] llvm dlltool [<ARG>...]
    carbon [OPTIONS] llvm bitcode-strip [<ARG>...]
    carbon [OPTIONS] llvm install-name-tool [<ARG>...]
    carbon [OPTIONS] llvm strip [<ARG>...]
    carbon [OPTIONS] llvm otool [<ARG>...]
    carbon [OPTIONS] llvm windres [<ARG>...]
    carbon [OPTIONS] llvm readelf [<ARG>...]
    carbon [OPTIONS] llvm addr2line [<ARG>...]

    Subcommands:
    clang
            Runs Clang on arguments.

            This is equivalent to running the `clang` command line directly, and provides the full command line interface.

            Use `carbon clang -- ARGS` to pass flags to `clang`. Although there are currently no flags for `carbon clang`, the `--` reserves the ability to add flags in the future.

            This is provided to help guarantee consistent compilation of C++ files, both when Clang is invoked directly and when a Carbon file importing a C++ file results in an indirect Clang invocation.

    compile
            Compile Carbon source code.

            This subcommand runs the Carbon compiler over input source code, checking it for errors and producing the requested output.

            Error messages are written to the standard error stream.

            Different phases of the compiler can be selected to run, and intermediate state can be written to standard output as these phases progress.

    format
            Format Carbon source code.

    language-server
            Runs the language server.

    link
            Link Carbon executables.

            This subcommand links Carbon executables by combining object files.

            TODO: Support linking binary libraries, both archives and shared libraries. TODO: Support linking against binary libraries.

    lld
            Runs LLD with the provided arguments.

            Note that a specific LLD platform must be selected, and it is actually that particular platform's LLD-driver that is run with the arguments. There is no generic LLD command line.

            For a given platform, this is equivalent to running that platform's LLD alias directly, and provides the full command line interface.

            Use `carbon lld --platform=elf -- ARGS` to separate the `ARGS` forwarded to LLD from the flags passed to the Carbon subcommand.

            Note that typically it is better to use a higher level command to link code, such as invoking `carbon link` with the relevant flags. However, this subcommand supports when you already have a specific invocation using existing command line syntaxes, as well as testing and debugging of the underlying tool.

    llvm
            Runs LLVM's command line tools with the provided arguments.

            This subcommand provides access to a collection of LLVM's command line tools via further subcommands. For each of these tools, their command line can be provided using positional arguments.

    help
            Prints help information for the command, including a description, command line usage, and details of each subcommand and option that can be provided.

    version
            Prints the version of this command.

    Command options:
    -v, --verbose
            Enable verbose logging to the stderr stream.

        --fuzzing
            Configure the command line for fuzzing.

        --include-diagnostic-kind
            When printing diagnostics, include the diagnostic kind as part of output. This applies to each message that forms a diagnostic, not just the primary message.

    For questions, issues, or bug reports, please use our GitHub project:

    https://github.com/carbon-language/carbon-lang
    ```

1.  clang-19, libc++-19-dev, libc++abi-19-dev, lld-19の導入
    1.  必要なパッケージのインストール
        ```
        sudo apt update
        ```

        <details>
        <summary>実行結果</summary>

        ```
        Get:1 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
        Hit:2 http://archive.ubuntu.com/ubuntu noble InRelease
        Get:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
        Get:4 http://security.ubuntu.com/ubuntu noble-security/main amd64 Components [9000 B]
        Get:5 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Components [52.2 kB]
        Get:6 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Components [212 B]
        Get:7 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Components [208 B]
        Get:8 http://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
        Get:9 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [987 kB]
        Get:10 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Components [151 kB]
        Get:11 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1050 kB]
        Get:12 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 Components [365 kB]
        Get:13 http://archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Components [212 B]
        Get:14 http://archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Components [940 B]
        Get:15 http://archive.ubuntu.com/ubuntu noble-backports/main amd64 Components [7060 B]
        Get:16 http://archive.ubuntu.com/ubuntu noble-backports/universe amd64 Components [15.7 kB]
        Get:17 http://archive.ubuntu.com/ubuntu noble-backports/restricted amd64 Components [216 B]
        Get:18 http://archive.ubuntu.com/ubuntu noble-backports/multiverse amd64 Components [212 B]
        Fetched 3017 kB in 3s (885 kB/s)
        Reading package lists... Done
        Building dependency tree... Done
        Reading state information... Done
        All packages are up to date.
        ```
        </details>

        ```
        sudo apt install -y wget software-properties-common gnupg
        ```

        <details>
        <summary>実行結果</summary>

        ```
        Reading package lists... Done
        Building dependency tree... Done
        Reading state information... Done
        wget is already the newest version (1.21.4-1ubuntu4.1).
        wget set to manually installed.
        software-properties-common is already the newest version (0.99.49.1).
        software-properties-common set to manually installed.
        gnupg is already the newest version (2.4.4-2ubuntu17.2).
        gnupg set to manually installed.
        0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
        ```
        </details>

    1.  LLVM GPGキーの追加
        ```
        wget -qO- https://apt.llvm.org/llvm-snapshot.gpg.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/llvm-archive-keyring.gpg
        ```

        <details>
        <summary>実行結果</summary>

        ```
        （出力なし）
        ```
        </details>

    1.  LLVM APTリポジトリの追加
        ```
        sudo add-apt-repository "deb http://apt.llvm.org/noble/ llvm-toolchain-noble-19 main"
        # 必要であればソースリポジトリも追加
        # sudo add-apt-repository "deb-src http://apt.llvm.org/noble/ llvm-toolchain-noble-19 main"
        ```

        <details>
        <summary>実行結果</summary>

        ```
        Repository: 'deb http://apt.llvm.org/noble/ llvm-toolchain-noble-19 main'
        Description:
        Archive for codename: llvm-toolchain-noble-19 components: main
        More info: http://apt.llvm.org/noble/
        Adding repository.
        Press [ENTER] to continue or Ctrl-c to cancel.
        Adding deb entry to /etc/apt/sources.list.d/archive_uri-http_apt_llvm_org_noble_-noble.list
        Adding disabled deb-src entry to /etc/apt/sources.list.d/archive_uri-http_apt_llvm_org_noble_-noble.list
        Hit:2 http://archive.ubuntu.com/ubuntu noble InRelease
        Hit:3 http://security.ubuntu.com/ubuntu noble-security InRelease
        Hit:4 http://archive.ubuntu.com/ubuntu noble-updates InRelease
        Hit:5 http://archive.ubuntu.com/ubuntu noble-backports InRelease
        Get:1 https://apt.llvm.org/noble llvm-toolchain-noble-19 InRelease [5554 B]
        Get:6 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 Packages [12.7 kB]
        Fetched 18.3 kB in 1s (14.2 kB/s)
        Reading package lists... Done
        ```
        </details>

    1.  パッケージリストの更新
        ```
        sudo apt update
        ```

        <details>
        <summary>実行結果</summary>

        ```
        Hit:2 http://archive.ubuntu.com/ubuntu noble InRelease
        Hit:3 http://security.ubuntu.com/ubuntu noble-security InRelease
        Hit:4 http://archive.ubuntu.com/ubuntu noble-updates InRelease
        Hit:5 http://archive.ubuntu.com/ubuntu noble-backports InRelease
        Hit:1 https://apt.llvm.org/noble llvm-toolchain-noble-19 InRelease
        Reading package lists... Done
        Building dependency tree... Done
        Reading state information... Done
        1 package can be upgraded. Run 'apt list --upgradable' to see it.
        ```
        </details>

        ```
        sudo apt list --upgradable
        ```

        <details>
        <summary>アップグレードリスト確認結果１</summary>

        ```
        Listing... Done
        libllvm19/unknown 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 amd64 [upgradable from: 1:19.1.1-1ubuntu1~24.04.2]
        N: There is 1 additional version. Please use the '-a' switch to see it
        ```
        </details>

        ```
        sudo apt list --upgradable -a
        ```

        <details>
        <summary>アップグレードリスト確認結果２</summary>

        ```
        Listing... Done
        libllvm19/unknown 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 amd64 [upgradable from: 1:19.1.1-1ubuntu1~24.04.2]
        libllvm19/noble-updates,now 1:19.1.1-1ubuntu1~24.04.2 amd64 [installed,upgradable to: 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78]
        ```
        </details>

    1.  Clang 19と関連パッケージのインストール
        ```
        sudo apt install -y clang-19 libc++-19-dev libc++abi-19-dev lld-19
        ```

        <details>
        <summary>インストール結果</summary>

        ```
        Reading package lists... Done
        Building dependency tree... Done
        Reading state information... Done
        The following additional packages will be installed:
        libc++1-19 libc++abi1-19 libclang-common-19-dev libclang-cpp19 libclang-rt-19-dev libclang1-19 libllvm19
        libunwind-19 libunwind-19-dev llvm-19 llvm-19-dev llvm-19-linker-tools llvm-19-runtime llvm-19-tools
        Suggested packages:
        clang-19-doc wasi-libc llvm-19-doc
        The following packages will be REMOVED:
        libc++-18-dev libc++-dev libc++1-18 libc++abi-18-dev libc++abi-dev libc++abi1-18 libunwind-18 libunwind-18-dev
        The following NEW packages will be installed:
        clang-19 libc++-19-dev libc++1-19 libc++abi-19-dev libc++abi1-19 libclang-common-19-dev libclang-cpp19
        libclang-rt-19-dev libclang1-19 libunwind-19 libunwind-19-dev lld-19 llvm-19 llvm-19-dev llvm-19-linker-tools
        llvm-19-runtime llvm-19-tools
        The following packages will be upgraded:
        libllvm19
        1 upgraded, 17 newly installed, 8 to remove and 0 not upgraded.
        Need to get 128 MB of archives.
        After this operation, 615 MB of additional disk space will be used.
        Get:1 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libllvm19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [28.7 MB]
        Get:2 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libclang-cpp19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [14.3 MB]
        Get:3 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libclang-common-19-dev amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [744 kB]
        Get:4 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 llvm-19-linker-tools amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [1370 kB]
        Get:5 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libclang1-19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [8321 kB]
        Get:6 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 clang-19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [119 kB]
        Get:7 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libunwind-19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [63.8 kB]
        Get:8 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libc++abi1-19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [112 kB]
        Get:9 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libc++1-19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [331 kB]
        Get:10 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libc++abi-19-dev amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [136 kB]
        Get:11 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libunwind-19-dev amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [85.4 kB]
        Get:12 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libc++-19-dev amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [1348 kB]
        Get:13 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 libclang-rt-19-dev amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [3912 kB]
        Get:14 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 lld-19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [1491 kB]
        Get:15 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 llvm-19-runtime amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [594 kB]
        Get:16 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 llvm-19 amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [17.9 MB]
        Get:17 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 llvm-19-tools amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [542 kB]
        Get:18 https://apt.llvm.org/noble llvm-toolchain-noble-19/main amd64 llvm-19-dev amd64 1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78 [47.5 MB]
        Fetched 128 MB in 6s (21.9 MB/s)
        (Reading database ... 52454 files and directories currently installed.)
        Removing libc++-dev:amd64 (1:18.0-59~exp2) ...
        Removing libc++-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
        Removing libc++1-18:amd64 (1:18.1.3-1ubuntu1) ...
        Removing libc++abi-dev:amd64 (1:18.0-59~exp2) ...
        Removing libc++abi-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
        Removing libc++abi1-18:amd64 (1:18.1.3-1ubuntu1) ...
        Removing libunwind-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
        Removing libunwind-18:amd64 (1:18.1.3-1ubuntu1) ...
        (Reading database ... 51166 files and directories currently installed.)
        Preparing to unpack ./00-libllvm19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libllvm19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) over (1:19.1.1-1ubuntu1~24.04.2) ...
        Selecting previously unselected package libclang-cpp19.
        Preparing to unpack ./01-libclang-cpp19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libclang-cpp19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libclang-common-19-dev:amd64.
        Preparing to unpack ./02-libclang-common-19-dev_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libclang-common-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package llvm-19-linker-tools.
        Preparing to unpack ./03-llvm-19-linker-tools_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking llvm-19-linker-tools (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libclang1-19.
        Preparing to unpack ./04-libclang1-19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libclang1-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package clang-19.
        Preparing to unpack ./05-clang-19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking clang-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libunwind-19:amd64.
        Preparing to unpack ./06-libunwind-19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libunwind-19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libc++abi1-19:amd64.
        Preparing to unpack ./07-libc++abi1-19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libc++abi1-19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libc++1-19:amd64.
        Preparing to unpack ./08-libc++1-19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libc++1-19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libc++abi-19-dev:amd64.
        Preparing to unpack ./09-libc++abi-19-dev_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libc++abi-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libunwind-19-dev:amd64.
        Preparing to unpack ./10-libunwind-19-dev_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libunwind-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libc++-19-dev:amd64.
        Preparing to unpack ./11-libc++-19-dev_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libc++-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package libclang-rt-19-dev:amd64.
        Preparing to unpack ./12-libclang-rt-19-dev_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking libclang-rt-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package lld-19.
        Preparing to unpack ./13-lld-19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking lld-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package llvm-19-runtime.
        Preparing to unpack ./14-llvm-19-runtime_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking llvm-19-runtime (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package llvm-19.
        Preparing to unpack ./15-llvm-19_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking llvm-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package llvm-19-tools.
        Preparing to unpack ./16-llvm-19-tools_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking llvm-19-tools (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Selecting previously unselected package llvm-19-dev.
        Preparing to unpack ./17-llvm-19-dev_1%3a19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78_amd64.deb ...
        Unpacking llvm-19-dev (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libllvm19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libclang1-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libunwind-19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libclang-common-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libc++abi1-19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libc++1-19:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libclang-rt-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up llvm-19-linker-tools (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libunwind-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up llvm-19-runtime (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up lld-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up llvm-19-tools (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libclang-cpp19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libc++abi-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up clang-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up libc++-19-dev:amd64 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up llvm-19 (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Setting up llvm-19-dev (1:19.1.7~++20250114103332+cd708029e0b2-1~exp1~20250114103446.78) ...
        Processing triggers for systemd (255.4-1ubuntu8.6) ...
        Processing triggers for man-db (2.12.0-4build2) ...
        Processing triggers for libc-bin (2.39-0ubuntu8.4) ...
        ```
        </details>

    1.  優先度の設定
        1.  clang
            ```
            # 例: clang の優先度を設定
            # sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-19 100
            ```

            <details>
            <summary>設定結果</summary>

            ```
            update-alternatives: using /usr/bin/clang-19 to provide /usr/bin/clang (clang) in auto mode
            ```
            </details>
        1.  clang++
            ```
            # sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-19 100
            ```

            <details>
            <summary>設定結果</summary>

            ```
            update-alternatives: using /usr/bin/clang++-19 to provide /usr/bin/clang++ (clang++) in auto mode
            ```
            </details>
        1.  lld
            ```
            # 例: clang の優先度を設定
            # sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-19 100
            # sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-19 100
            # sudo update-alternatives --install /usr/bin/lld lld /usr/bin/lld-19 100
            ```
            <details>
            <summary>設定結果</summary>

            ```
            update-alternatives: using /usr/bin/lld-19 to provide /usr/bin/lld (lld) in auto mode
            ```
            </details>

    1.  Carbon コードの取得
        ```
        git clone https://github.com/carbon-language/carbon-lang
        ```

        <details>
        <summary>取得ログ</summary>

        ```
        Cloning into 'carbon-lang'...
        remote: Enumerating objects: 105825, done.
        remote: Counting objects: 100% (400/400), done.
        remote: Compressing objects: 100% (261/261), done.
        remote: Total 105825 (delta 318), reused 139 (delta 139), pack-reused 105425 (from 3)
        Receiving objects: 100% (105825/105825), 51.52 MiB | 20.36 MiB/s, done.
        Resolving deltas: 100% (88480/88480), done.
        ```
        </details>
    
    1.  ツールチェーンのヘルプ表示
        ```
        cd carbon-lang
        ./scripts/run_bazelisk.py run //toolchain -- help
        ```

        <details>
        <summary>ログ</summary>

        ```
        Starting local Bazel server (8.0.1) and connecting to it...
        INFO: Invocation ID: 72f37e3a-5228-4422-a802-c15fc64d8a1b
        INFO: Analyzed target //toolchain:toolchain (114 packages loaded, 11416 targets configured).
        INFO: Found 1 target...
        Target //toolchain:carbon up-to-date:
        bazel-bin/toolchain/carbon
        INFO: Elapsed time: 4185.492s, Critical Path: 238.47s
        INFO: 3530 processes: 487 action cache hit, 41 internal, 3489 linux-sandbox.
        INFO: Build completed successfully, 3530 total actions
        INFO: Running command line: bazel-bin/toolchain/carbon <args omitted>
        Carbon Language toolchain version: 0.0.0-0.dev+a45dc42d8

        This is the unified Carbon Language toolchain driver. Its subcommands provide all of the core behavior of the toolchain, including compilation, linking, and developer tools. Each of these has its own subcommand, and you can pass a specific subcommand to the `help` subcommand to get details about its usage.

        Usage:
        carbon [OPTIONS] clang [<ARG>...]
        carbon [OPTIONS] compile [OPTIONS] <FILE>...
        carbon [OPTIONS] format [--output=FILE] <FILE>...
        carbon [OPTIONS] language-server
        carbon [OPTIONS] link [OPTIONS] <OBJECT_FILE>...
        carbon [OPTIONS] lld [OPTIONS] [<ARG>...]
        carbon [OPTIONS] llvm ar [<ARG>...]
        carbon [OPTIONS] llvm cgdata [<ARG>...]
        carbon [OPTIONS] llvm cxxfilt [<ARG>...]
        carbon [OPTIONS] llvm debuginfod-find [<ARG>...]
        carbon [OPTIONS] llvm dsymutil [<ARG>...]
        carbon [OPTIONS] llvm dwp [<ARG>...]
        carbon [OPTIONS] llvm gsymutil [<ARG>...]
        carbon [OPTIONS] llvm ifs [<ARG>...]
        carbon [OPTIONS] llvm libtool-darwin [<ARG>...]
        carbon [OPTIONS] llvm lipo [<ARG>...]
        carbon [OPTIONS] llvm ml [<ARG>...]
        carbon [OPTIONS] llvm mt [<ARG>...]
        carbon [OPTIONS] llvm nm [<ARG>...]
        carbon [OPTIONS] llvm objcopy [<ARG>...]
        carbon [OPTIONS] llvm objdump [<ARG>...]
        carbon [OPTIONS] llvm profdata [<ARG>...]
        carbon [OPTIONS] llvm rc [<ARG>...]
        carbon [OPTIONS] llvm readobj [<ARG>...]
        carbon [OPTIONS] llvm sancov [<ARG>...]
        carbon [OPTIONS] llvm size [<ARG>...]
        carbon [OPTIONS] llvm symbolizer [<ARG>...]
        carbon [OPTIONS] llvm ranlib [<ARG>...]
        carbon [OPTIONS] llvm lib [<ARG>...]
        carbon [OPTIONS] llvm dlltool [<ARG>...]
        carbon [OPTIONS] llvm bitcode-strip [<ARG>...]
        carbon [OPTIONS] llvm install-name-tool [<ARG>...]
        carbon [OPTIONS] llvm strip [<ARG>...]
        carbon [OPTIONS] llvm otool [<ARG>...]
        carbon [OPTIONS] llvm windres [<ARG>...]
        carbon [OPTIONS] llvm readelf [<ARG>...]
        carbon [OPTIONS] llvm addr2line [<ARG>...]

        Subcommands:
        clang
                Runs Clang on arguments.

                This is equivalent to running the `clang` command line directly, and provides the full command line interface.

                Use `carbon clang -- ARGS` to pass flags to `clang`. Although there are currently no flags for `carbon clang`, the `--` reserves the ability to add flags in the future.

                This is provided to help guarantee consistent compilation of C++ files, both when Clang is invoked directly and when a Carbon file importing a C++ file results in an indirect Clang invocation.

        compile
                Compile Carbon source code.

                This subcommand runs the Carbon compiler over input source code, checking it for errors and producing the requested output.

                Error messages are written to the standard error stream.

                Different phases of the compiler can be selected to run, and intermediate state can be written to standard output as these phases progress.

        format
                Format Carbon source code.

        language-server
                Runs the language server.

        link
                Link Carbon executables.

                This subcommand links Carbon executables by combining object files.

                TODO: Support linking binary libraries, both archives and shared libraries. TODO: Support linking against binary libraries.

        lld
                Runs LLD with the provided arguments.

                Note that a specific LLD platform must be selected, and it is actually that particular platform's LLD-driver that is run with the arguments. There is no generic LLD command line.

                For a given platform, this is equivalent to running that platform's LLD alias directly, and provides the full command line interface.

                Use `carbon lld --platform=elf -- ARGS` to separate the `ARGS` forwarded to LLD from the flags passed to the Carbon subcommand.

                Note that typically it is better to use a higher level command to link code, such as invoking `carbon link` with the relevant flags. However, this subcommand supports when you already have a specific invocation using existing command line syntaxes, as well as testing and debugging of the underlying tool.

        llvm
                Runs LLVM's command line tools with the provided arguments.

                This subcommand provides access to a collection of LLVM's command line tools via further subcommands. For each of these tools, their command line can be provided using positional arguments.

        help
                Prints help information for the command, including a description, command line usage, and details of each subcommand and option that can be provided.

        version
                Prints the version of this command.

        Command options:
        -v, --verbose
                Enable verbose logging to the stderr stream.

            --fuzzing
                Configure the command line for fuzzing.

            --include-diagnostic-kind
                When printing diagnostics, include the diagnostic kind as part of output. This applies to each message that forms a diagnostic, not just the primary message.

        For questions, issues, or bug reports, please use our GitHub project:

        https://github.com/carbon-language/carbon-lang
        ```
        </details>

### 環境構築（２回目） [on Ubuntu Desktop 24.10 **@2025/03/31** <span style="color: red;">*Installed!*</span>]
1.  Carbon コードの取得
    ```
    git clone https://github.com/carbon-language/carbon-lang
    ```

    <details>
    <summary>ログ</summary>

    ```
    Cloning into 'carbon-lang'...
    remote: Enumerating objects: 104850, done.
    remote: Counting objects: 100% (2156/2156), done.
    remote: Compressing objects: 100% (1253/1253), done.
    remote: Total 104850 (delta 1763), reused 903 (delta 903), pack-reused 102694 (from 4)
    Receiving objects: 100% (104850/104850), 50.72 MiB | 3.02 MiB/s, done.
    Resolving deltas: 100% (87106/87106), done.
    Updating files: 100% (5471/5471), done.
    ```
    </details>

1.  ツールチェーンのヘルプ表示
    ```
    cd carbon-lang
    ./scripts/run_bazelisk.py run //toolchain -- help
    ```

    <details>
    <summary>ログ</summary>

    ```sh
    2025/03/30 13:48:59 Downloading https://releases.bazel.build/8.0.1/release/bazel-8.0.1-linux-x86_64...
    Downloading: 61 MB out of 61 MB (100%) 
    Extracting Bazel installation...
    Starting local Bazel server (8.0.1) and connecting to it...
    INFO: Invocation ID: 5b7cd8ad-b5d8-4016-bcae-b14c37324d46
    INFO: Analyzed target //toolchain:toolchain (114 packages loaded, 11413 targets configured).
    ```
    (After Restart x2)
    ```sh
    Starting local Bazel server (8.0.1) and connecting to it...
    INFO: Invocation ID: 228d7cf5-f280-45e6-b8ce-5469c0bfa3fe
    INFO: Analyzed target //toolchain:toolchain (114 packages loaded, 11413 targets configured).
    INFO: Found 1 target...
    Target //toolchain:carbon up-to-date:
    bazel-bin/toolchain/carbon
    INFO: Elapsed time: 15182.363s, Critical Path: 2299.54s
    INFO: 526 processes: 3493 action cache hit, 41 internal, 485 processwrapper-sandbox.
    INFO: Build completed successfully, 526 total actions
    INFO: Running command line: bazel-bin/toolchain/carbon <args omitted>
    Carbon Language toolchain version: 0.0.0-0.dev+9134e36ec

    This is the unified Carbon Language toolchain driver. Its subcommands provide all of the core behavior of the toolchain, including compilation, linking, and developer tools. Each of these has its own subcommand, and you can pass a specific subcommand to the `help` subcommand to get details about its usage.

    Usage:
    carbon [OPTIONS] clang [<ARG>...]
    carbon [OPTIONS] compile [OPTIONS] <FILE>...
    carbon [OPTIONS] format [--output=FILE] <FILE>...
    carbon [OPTIONS] language-server
    carbon [OPTIONS] link [OPTIONS] <OBJECT_FILE>...
    carbon [OPTIONS] lld [OPTIONS] [<ARG>...]
    carbon [OPTIONS] llvm ar [<ARG>...]
    carbon [OPTIONS] llvm cgdata [<ARG>...]
    carbon [OPTIONS] llvm cxxfilt [<ARG>...]
    carbon [OPTIONS] llvm debuginfod-find [<ARG>...]
    carbon [OPTIONS] llvm dsymutil [<ARG>...]
    carbon [OPTIONS] llvm dwp [<ARG>...]
    carbon [OPTIONS] llvm gsymutil [<ARG>...]
    carbon [OPTIONS] llvm ifs [<ARG>...]
    carbon [OPTIONS] llvm libtool-darwin [<ARG>...]
    carbon [OPTIONS] llvm lipo [<ARG>...]
    carbon [OPTIONS] llvm ml [<ARG>...]
    carbon [OPTIONS] llvm mt [<ARG>...]
    carbon [OPTIONS] llvm nm [<ARG>...]
    carbon [OPTIONS] llvm objcopy [<ARG>...]
    carbon [OPTIONS] llvm objdump [<ARG>...]
    carbon [OPTIONS] llvm profdata [<ARG>...]
    carbon [OPTIONS] llvm rc [<ARG>...]
    carbon [OPTIONS] llvm readobj [<ARG>...]
    carbon [OPTIONS] llvm sancov [<ARG>...]
    carbon [OPTIONS] llvm size [<ARG>...]
    carbon [OPTIONS] llvm symbolizer [<ARG>...]
    carbon [OPTIONS] llvm ranlib [<ARG>...]
    carbon [OPTIONS] llvm lib [<ARG>...]
    carbon [OPTIONS] llvm dlltool [<ARG>...]
    carbon [OPTIONS] llvm bitcode-strip [<ARG>...]
    carbon [OPTIONS] llvm install-name-tool [<ARG>...]
    carbon [OPTIONS] llvm strip [<ARG>...]
    carbon [OPTIONS] llvm otool [<ARG>...]
    carbon [OPTIONS] llvm windres [<ARG>...]
    carbon [OPTIONS] llvm readelf [<ARG>...]
    carbon [OPTIONS] llvm addr2line [<ARG>...]

    Subcommands:
    clang
            Runs Clang on arguments.

            This is equivalent to running the `clang` command line directly, and provides the full command line interface.

            Use `carbon clang -- ARGS` to pass flags to `clang`. Although there are currently no flags for `carbon clang`, the `--` reserves the ability to add flags in the future.

            This is provided to help guarantee consistent compilation of C++ files, both when Clang is invoked directly and when a Carbon file importing a C++ file results in an indirect Clang invocation.

    compile
            Compile Carbon source code.

            This subcommand runs the Carbon compiler over input source code, checking it for errors and producing the requested output.

            Error messages are written to the standard error stream.

            Different phases of the compiler can be selected to run, and intermediate state can be written to standard output as these phases progress.

    format
            Format Carbon source code.

    language-server
            Runs the language server.

    link
            Link Carbon executables.

            This subcommand links Carbon executables by combining object files.

            TODO: Support linking binary libraries, both archives and shared libraries. TODO: Support linking against binary libraries.

    lld
            Runs LLD with the provided arguments.

            Note that a specific LLD platform must be selected, and it is actually that particular platform's LLD-driver that is run with the arguments. There is no generic LLD command line.

            For a given platform, this is equivalent to running that platform's LLD alias directly, and provides the full command line interface.

            Use `carbon lld --platform=elf -- ARGS` to separate the `ARGS` forwarded to LLD from the flags passed to the Carbon subcommand.

            Note that typically it is better to use a higher level command to link code, such as invoking `carbon link` with the relevant flags. However, this subcommand supports when you already have a specific invocation using existing command line syntaxes, as well as testing and debugging of the underlying tool.

    llvm
            Runs LLVM's command line tools with the provided arguments.

            This subcommand provides access to a collection of LLVM's command line tools via further subcommands. For each of these tools, their command line can be provided using positional arguments.

    help
            Prints help information for the command, including a description, command line usage, and details of each subcommand and option that can be provided.

    version
            Prints the version of this command.

    Command options:
    -v, --verbose
            Enable verbose logging to the stderr stream.

        --fuzzing
            Configure the command line for fuzzing.

        --include-diagnostic-kind
            When printing diagnostics, include the diagnostic kind as part of output. This applies to each message that forms a diagnostic, not just the primary message.

    For questions, issues, or bug reports, please use our GitHub project:

    https://github.com/carbon-language/carbon-lang
    ```
    </details>
    途中、10時間経過した頃に再起動してしまったので、実時間は分からないかも。
    さらに1時間程度後、フリーズしたので、強制再起動

### 環境更新 [on Ubuntu 24.04 **@2025/02/01** <span style="color: red;">*Updated!*</span>]
-   [LLVM 18 から 19 への更新](/knowhow/sub/Ubuntu/20250201_Upgrade)を受け、環境更新を試みた

1.  Carbon コードの取得
    ```
    git clone https://github.com/carbon-language/carbon-lang
    ```

    <details>
    <summary>ログ</summary>

    ```
    Cloning into 'carbon-lang'...
    remote: Enumerating objects: 96837, done.
    remote: Counting objects: 100% (5074/5074), done.
    remote: Compressing objects: 100% (2828/2828), done.
    remote: Total 96837 (delta 4357), reused 2248 (delta 2246), pack-reused 91763 (from 5)
    Receiving objects: 100% (96837/96837), 45.47 MiB | 21.12 MiB/s, done.
    Resolving deltas: 100% (79772/79772), done.
    ```
    </details>

1.  ツールチェーンのヘルプ表示
    ```
    cd carbon-lang
    ./scripts/run_bazelisk.py run //toolchain -- help
    ```

    <details>
    <summary>ログ</summary>

    ```
    Starting local Bazel server and connecting to it...
    INFO: Invocation ID: e3f66832-f0a5-4029-a0a9-360855b01b4f
    INFO: Analyzed target //toolchain:toolchain (116 packages loaded, 10931 targets configured).
    INFO: Found 1 target...
    Target //toolchain:carbon up-to-date:
    bazel-bin/toolchain/carbon
    INFO: Elapsed time: 4999.111s, Critical Path: 231.73s
    INFO: 3323 processes: 216 action cache hit, 80 internal, 3243 linux-sandbox.
    INFO: Build completed successfully, 3323 total actions
    INFO: Running command line: bazel-bin/toolchain/carbon <args omitted>
    Carbon Language toolchain version: 0.0.0-0.dev+e25705161

    This is the unified Carbon Language toolchain driver. Its subcommands provide all of the core behavior of the toolchain, including compilation, linking, and developer tools. Each of these has its own subcommand, and you can pass a specific subcommand to the `help` subcommand to get details about its usage.

    Usage:
    carbon [OPTIONS] clang [<ARG>...]
    carbon [OPTIONS] compile [OPTIONS] <FILE>...
    carbon [OPTIONS] format [--output=FILE] <FILE>...
    carbon [OPTIONS] language-server
    carbon [OPTIONS] link [OPTIONS] <OBJECT_FILE>...

    Subcommands:
    clang
            Runs Clang on arguments.

            This is equivalent to running the `clang` command line directly, and provides the full command line interface.

            Use `carbon clang -- ARGS` to pass flags to `clang`. Although there are currently no flags for `carbon clang`, the `--` reserves the ability to add flags in the future.

            This is provided to help guarantee consistent compilation of C++ files, both when Clang is invoked directly and when a Carbon file importing a C++ file results in an indirect Clang invocation.

    compile
            Compile Carbon source code.

            This subcommand runs the Carbon compiler over input source code, checking it for errors and producing the requested output.

            Error messages are written to the standard error stream.

            Different phases of the compiler can be selected to run, and intermediate state can be written to standard output as these phases progress.

    format
            Format Carbon source code.

    language-server
            Runs the language server.

    link
            Link Carbon executables.

            This subcommand links Carbon executables by combining object files.

            TODO: Support linking binary libraries, both archives and shared libraries. TODO: Support linking against binary libraries.

    help
            Prints help information for the command, including a description, command line usage, and details of each subcommand and option that can be provided.

    version
            Prints the version of this command.

    Command options:
    -v, --verbose
            Enable verbose logging to the stderr stream.

        --fuzzing
            Configure the command line for fuzzing.

        --include-diagnostic-kind
            When printing diagnostics, include the diagnostic kind as part of output. This applies to each message that forms a diagnostic, not just the primary message.

    For questions, issues, or bug reports, please use our GitHub project:

    https://github.com/carbon-language/carbon-lang
    ```
    </details>

1.  explorerを実行
    ```
    ./scripts/run_bazelisk.py run //explorer -- ./explorer/testdata/print/format_only.carbon
    ```

    <details>
    <summary>ログ</summary>

    ```
    INFO: Invocation ID: 87bae7b4-8736-404c-b4b3-13dc77ab5dde
    INFO: Analyzed target //explorer:explorer (17 packages loaded, 722 targets configured).
    INFO: Found 1 target...
    Target //explorer:explorer up-to-date:
    bazel-bin/explorer/explorer
    INFO: Elapsed time: 83.597s, Critical Path: 59.78s
    INFO: 41 processes: 335 action cache hit, 2 internal, 39 linux-sandbox.
    INFO: Build completed successfully, 41 total actions
    INFO: Running command line: bazel-bin/explorer/explorer <args omitted>
    Hello world!
    result: 0
    ```
    </details>

### 環境再構築 [on Ubuntu 24.04 **@2025/01/13** <span style="color: red;">*Installed!*</span>]
1.  環境確認
    ```
    sudo apt update
    ```

1.  ツール群のインストール
    ```
    sudo apt install \
    clang \
    libc++-dev \
    libc++abi-dev \
    lld
    ```

    <details>
    <summary>ログ</summary>

    ```
    Reading package lists... Done
    Building dependency tree... Done
    Reading state information... Done
    The following additional packages will be installed:
    clang-18 lib32gcc-s1 lib32stdc++6 libc++-18-dev libc++1-18 libc++abi-18-dev libc++abi1-18 libc6-i386
    libclang-common-18-dev libclang-cpp18 libclang-rt-18-dev libclang1-18 libgc1 libllvm18 libncurses-dev
    libobjc-13-dev libobjc4 libpfm4 libunwind-18 libunwind-18-dev libxml2-dev libz3-4 libz3-dev lld-18 llvm-18
    llvm-18-dev llvm-18-linker-tools llvm-18-runtime llvm-18-tools
    Suggested packages:
    clang-18-doc wasi-libc ncurses-doc llvm-18-doc
    The following NEW packages will be installed:
    clang clang-18 lib32gcc-s1 lib32stdc++6 libc++-18-dev libc++-dev libc++1-18 libc++abi-18-dev libc++abi-dev
    libc++abi1-18 libc6-i386 libclang-common-18-dev libclang-cpp18 libclang-rt-18-dev libclang1-18 libgc1
    libllvm18 libncurses-dev libobjc-13-dev libobjc4 libpfm4 libunwind-18 libunwind-18-dev libxml2-dev libz3-4
    libz3-dev lld lld-18 llvm-18 llvm-18-dev llvm-18-linker-tools llvm-18-runtime llvm-18-tools
    0 upgraded, 33 newly installed, 0 to remove and 0 not upgraded.
    Need to get 141 MB of archives.
    After this operation, 809 MB of additional disk space will be used.
    Do you want to continue? [Y/n] Y
    Get:1 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libllvm18 amd64 1:18.1.3-1ubuntu1 [27.5 MB]
    Get:2 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libclang-cpp18 amd64 1:18.1.3-1ubuntu1 [13.5 MB]
    Get:3 http://archive.ubuntu.com/ubuntu noble/main amd64 libgc1 amd64 1:8.2.6-1build1 [90.3 kB]
    Get:4 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libobjc4 amd64 14.2.0-4ubuntu2~24.04 [47.0 kB]
    Get:5 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libobjc-13-dev amd64 13.3.0-6ubuntu2~24.04 [194 kB]
    Get:6 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libclang-common-18-dev amd64 1:18.1.3-1ubuntu1 [736 kB]
    Get:7 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 llvm-18-linker-tools amd64 1:18.1.3-1ubuntu1 [1314 kB]
    Get:8 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libclang1-18 amd64 1:18.1.3-1ubuntu1 [7803 kB]
    Get:9 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 clang-18 amd64 1:18.1.3-1ubuntu1 [80.0 kB]
    Get:10 http://archive.ubuntu.com/ubuntu noble/universe amd64 clang amd64 1:18.0-59~exp2 [5846 B]
    Get:11 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libc6-i386 amd64 2.39-0ubuntu8.3 [2829 kB]
    Get:12 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 lib32gcc-s1 amd64 14.2.0-4ubuntu2~24.04 [92.3 kB]
    Get:13 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libunwind-18 amd64 1:18.1.3-1ubuntu1 [60.3 kB]
    Get:14 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libc++abi1-18 amd64 1:18.1.3-1ubuntu1 [70.7 kB]
    Get:15 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libc++1-18 amd64 1:18.1.3-1ubuntu1 [285 kB]
    Get:16 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libc++abi-18-dev amd64 1:18.1.3-1ubuntu1 [95.8 kB]
    Get:17 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libunwind-18-dev amd64 1:18.1.3-1ubuntu1 [44.9 kB]
    Get:18 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libc++-18-dev amd64 1:18.1.3-1ubuntu1 [1195 kB]
    Get:19 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 lib32stdc++6 amd64 14.2.0-4ubuntu2~24.04 [814 kB]
    Get:20 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 libclang-rt-18-dev amd64 1:18.1.3-1ubuntu1 [3772 kB]
    Get:21 http://archive.ubuntu.com/ubuntu noble/main amd64 libncurses-dev amd64 6.4+20240113-1ubuntu2 [384 kB]
    Get:22 http://archive.ubuntu.com/ubuntu noble/main amd64 libxml2-dev amd64 2.9.14+dfsg-1.3ubuntu3 [780 kB]
    Get:23 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 lld-18 amd64 1:18.1.3-1ubuntu1 [1372 kB]
    Get:24 http://archive.ubuntu.com/ubuntu noble/universe amd64 lld amd64 1:18.0-59~exp2 [5494 B]
    Get:25 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 llvm-18-runtime amd64 1:18.1.3-1ubuntu1 [538 kB]
    Get:26 http://archive.ubuntu.com/ubuntu noble/universe amd64 libpfm4 amd64 4.13.0+git32-g0d4ed0e-1 [414 kB]
    Get:27 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 llvm-18 amd64 1:18.1.3-1ubuntu1 [25.3 MB]
    Get:28 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 llvm-18-tools amd64 1:18.1.3-1ubuntu1 [534 kB]
    Get:29 http://archive.ubuntu.com/ubuntu noble/universe amd64 libz3-4 amd64 4.8.12-3.1build1 [5836 kB]
    Get:30 http://archive.ubuntu.com/ubuntu noble/universe amd64 libz3-dev amd64 4.8.12-3.1build1 [72.2 kB]
    Get:31 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 llvm-18-dev amd64 1:18.1.3-1ubuntu1 [45.1 MB]
    Get:32 http://archive.ubuntu.com/ubuntu noble/universe amd64 libc++-dev amd64 1:18.0-59~exp2 [5620 B]
    Get:33 http://archive.ubuntu.com/ubuntu noble/universe amd64 libc++abi-dev amd64 1:18.0-59~exp2 [5622 B]
    Fetched 141 MB in 15s (9134 kB/s)
    Extracting templates from packages: 100%
    Selecting previously unselected package libllvm18:amd64.
    (Reading database ... 93909 files and directories currently installed.)
    Preparing to unpack ./00-libllvm18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libllvm18:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libclang-cpp18.
    Preparing to unpack ./01-libclang-cpp18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libclang-cpp18 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libgc1:amd64.
    Preparing to unpack ./02-libgc1_1%3a8.2.6-1build1_amd64.deb ...
    Unpacking libgc1:amd64 (1:8.2.6-1build1) ...
    Selecting previously unselected package libobjc4:amd64.
    Preparing to unpack ./03-libobjc4_14.2.0-4ubuntu2~24.04_amd64.deb ...
    Unpacking libobjc4:amd64 (14.2.0-4ubuntu2~24.04) ...
    Selecting previously unselected package libobjc-13-dev:amd64.
    Preparing to unpack ./04-libobjc-13-dev_13.3.0-6ubuntu2~24.04_amd64.deb ...
    Unpacking libobjc-13-dev:amd64 (13.3.0-6ubuntu2~24.04) ...
    Selecting previously unselected package libclang-common-18-dev:amd64.
    Preparing to unpack ./05-libclang-common-18-dev_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libclang-common-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package llvm-18-linker-tools.
    Preparing to unpack ./06-llvm-18-linker-tools_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking llvm-18-linker-tools (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libclang1-18.
    Preparing to unpack ./07-libclang1-18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libclang1-18 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package clang-18.
    Preparing to unpack ./08-clang-18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking clang-18 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package clang.
    Preparing to unpack ./09-clang_1%3a18.0-59~exp2_amd64.deb ...
    Unpacking clang (1:18.0-59~exp2) ...
    Selecting previously unselected package libc6-i386.
    Preparing to unpack ./10-libc6-i386_2.39-0ubuntu8.3_amd64.deb ...
    Unpacking libc6-i386 (2.39-0ubuntu8.3) ...
    Selecting previously unselected package lib32gcc-s1.
    Preparing to unpack ./11-lib32gcc-s1_14.2.0-4ubuntu2~24.04_amd64.deb ...
    Unpacking lib32gcc-s1 (14.2.0-4ubuntu2~24.04) ...
    Selecting previously unselected package libunwind-18:amd64.
    Preparing to unpack ./12-libunwind-18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libunwind-18:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libc++abi1-18:amd64.
    Preparing to unpack ./13-libc++abi1-18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libc++abi1-18:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libc++1-18:amd64.
    Preparing to unpack ./14-libc++1-18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libc++1-18:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libc++abi-18-dev:amd64.
    Preparing to unpack ./15-libc++abi-18-dev_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libc++abi-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libunwind-18-dev:amd64.
    Preparing to unpack ./16-libunwind-18-dev_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libunwind-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libc++-18-dev:amd64.
    Preparing to unpack ./17-libc++-18-dev_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libc++-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package lib32stdc++6.
    Preparing to unpack ./18-lib32stdc++6_14.2.0-4ubuntu2~24.04_amd64.deb ...
    Unpacking lib32stdc++6 (14.2.0-4ubuntu2~24.04) ...
    Selecting previously unselected package libclang-rt-18-dev:amd64.
    Preparing to unpack ./19-libclang-rt-18-dev_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking libclang-rt-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libncurses-dev:amd64.
    Preparing to unpack ./20-libncurses-dev_6.4+20240113-1ubuntu2_amd64.deb ...
    Unpacking libncurses-dev:amd64 (6.4+20240113-1ubuntu2) ...
    Selecting previously unselected package libxml2-dev:amd64.
    Preparing to unpack ./21-libxml2-dev_2.9.14+dfsg-1.3ubuntu3_amd64.deb ...
    Unpacking libxml2-dev:amd64 (2.9.14+dfsg-1.3ubuntu3) ...
    Selecting previously unselected package lld-18.
    Preparing to unpack ./22-lld-18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking lld-18 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package lld:amd64.
    Preparing to unpack ./23-lld_1%3a18.0-59~exp2_amd64.deb ...
    Unpacking lld:amd64 (1:18.0-59~exp2) ...
    Selecting previously unselected package llvm-18-runtime.
    Preparing to unpack ./24-llvm-18-runtime_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking llvm-18-runtime (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libpfm4:amd64.
    Preparing to unpack ./25-libpfm4_4.13.0+git32-g0d4ed0e-1_amd64.deb ...
    Unpacking libpfm4:amd64 (4.13.0+git32-g0d4ed0e-1) ...
    Selecting previously unselected package llvm-18.
    Preparing to unpack ./26-llvm-18_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking llvm-18 (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package llvm-18-tools.
    Preparing to unpack ./27-llvm-18-tools_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking llvm-18-tools (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libz3-4:amd64.
    Preparing to unpack ./28-libz3-4_4.8.12-3.1build1_amd64.deb ...
    Unpacking libz3-4:amd64 (4.8.12-3.1build1) ...
    Selecting previously unselected package libz3-dev:amd64.
    Preparing to unpack ./29-libz3-dev_4.8.12-3.1build1_amd64.deb ...
    Unpacking libz3-dev:amd64 (4.8.12-3.1build1) ...
    Selecting previously unselected package llvm-18-dev.
    Preparing to unpack ./30-llvm-18-dev_1%3a18.1.3-1ubuntu1_amd64.deb ...
    Unpacking llvm-18-dev (1:18.1.3-1ubuntu1) ...
    Selecting previously unselected package libc++-dev:amd64.
    Preparing to unpack ./31-libc++-dev_1%3a18.0-59~exp2_amd64.deb ...
    Unpacking libc++-dev:amd64 (1:18.0-59~exp2) ...
    Selecting previously unselected package libc++abi-dev:amd64.
    Preparing to unpack ./32-libc++abi-dev_1%3a18.0-59~exp2_amd64.deb ...
    Unpacking libc++abi-dev:amd64 (1:18.0-59~exp2) ...
    Setting up libncurses-dev:amd64 (6.4+20240113-1ubuntu2) ...
    Setting up libunwind-18:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libc++abi1-18:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up llvm-18-tools (1:18.1.3-1ubuntu1) ...
    Setting up libxml2-dev:amd64 (2.9.14+dfsg-1.3ubuntu3) ...
    Setting up libz3-4:amd64 (4.8.12-3.1build1) ...
    Setting up libpfm4:amd64 (4.13.0+git32-g0d4ed0e-1) ...
    Setting up libc++1-18:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libunwind-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libclang-common-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libgc1:amd64 (1:8.2.6-1build1) ...
    Setting up libc6-i386 (2.39-0ubuntu8.3) ...
    Setting up libc++abi-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libc++abi-dev:amd64 (1:18.0-59~exp2) ...
    Setting up libllvm18:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libclang1-18 (1:18.1.3-1ubuntu1) ...
    Setting up libz3-dev:amd64 (4.8.12-3.1build1) ...
    Setting up libc++-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libobjc4:amd64 (14.2.0-4ubuntu2~24.04) ...
    Setting up lib32gcc-s1 (14.2.0-4ubuntu2~24.04) ...
    Setting up lib32stdc++6 (14.2.0-4ubuntu2~24.04) ...
    Setting up llvm-18-linker-tools (1:18.1.3-1ubuntu1) ...
    Setting up libc++-dev:amd64 (1:18.0-59~exp2) ...
    Setting up llvm-18-runtime (1:18.1.3-1ubuntu1) ...
    Setting up libclang-cpp18 (1:18.1.3-1ubuntu1) ...
    Setting up libclang-rt-18-dev:amd64 (1:18.1.3-1ubuntu1) ...
    Setting up libobjc-13-dev:amd64 (13.3.0-6ubuntu2~24.04) ...
    Setting up lld-18 (1:18.1.3-1ubuntu1) ...
    Setting up lld:amd64 (1:18.0-59~exp2) ...
    Setting up clang-18 (1:18.1.3-1ubuntu1) ...
    Setting up clang (1:18.0-59~exp2) ...
    Setting up llvm-18 (1:18.1.3-1ubuntu1) ...
    Setting up llvm-18-dev (1:18.1.3-1ubuntu1) ...
    Processing triggers for systemd (255.4-1ubuntu8.4) ...
    Processing triggers for man-db (2.12.0-4build2) ...
    Processing triggers for libc-bin (2.39-0ubuntu8.3) ...
    ```
    </details>


1.  Carbon コードの取得
    ```
    git clone https://github.com/carbon-language/carbon-lang
    ```

    <details>
    <summary>ログ</summary>

    ```
    Cloning into 'carbon-lang'...
    remote: Enumerating objects: 92548, done.
    remote: Counting objects: 100% (2102/2102), done.
    remote: Compressing objects: 100% (1422/1422), done.
    remote: Total 92548 (delta 1720), reused 686 (delta 680), pack-reused 90446 (from 3)
    Receiving objects: 100% (92548/92548), 41.95 MiB | 11.96 MiB/s, done.
    Resolving deltas: 100% (76384/76384), done.
    ```
    </details>

1.  ツールチェーンのヘルプ表示
    ```
    cd carbon-lang
    ./scripts/run_bazelisk.py run //toolchain -- help
    ```

    <details>
    <summary>ログ</summary>

    ```
    2025/01/13 15:22:46 Downloading https://releases.bazel.build/8.0.0/release/bazel-8.0.0-linux-x86_64...
    Downloading: 61 MB out of 61 MB (100%)
    Extracting Bazel installation...
    Starting local Bazel server and connecting to it...
    INFO: Invocation ID: 72abb705-a889-488c-bafb-3784444b469b
    WARNING: WORKSPACE support will be removed in Bazel 9 (late 2025), please migrate to Bzlmod, see https://bazel.build/external/migration.
    INFO: Analyzed target //toolchain:toolchain (158 packages loaded, 11287 targets configured).
    INFO: Found 1 target...
    Target //toolchain:carbon up-to-date:
    bazel-bin/toolchain/carbon
    INFO: Elapsed time: 5318.293s, Critical Path: 276.61s
    INFO: 3519 processes: 186 internal, 3333 linux-sandbox.
    INFO: Build completed successfully, 3519 total actions
    INFO: Running command line: bazel-bin/toolchain/carbon <args omitted>
    Carbon Language toolchain version: 0.0.0-0.dev+230a8ee59

    This is the unified Carbon Language toolchain driver. Its subcommands provide all of the core behavior of the toolchain, including compilation, linking, and developer tools. Each of these has its own subcommand, and you can pass a specific subcommand to the `help` subcommand to get details about its usage.

    Usage:
    carbon [OPTIONS] clang [<ARG>...]
    carbon [OPTIONS] compile [OPTIONS] <FILE>...
    carbon [OPTIONS] format [--output=FILE] <FILE>...
    carbon [OPTIONS] language-server
    carbon [OPTIONS] link [OPTIONS] <OBJECT_FILE>...

    Subcommands:
    clang
            Runs Clang on arguments.

            This is equivalent to running the `clang` command line directly, and provides the full command line interface.

            Use `carbon clang -- ARGS` to pass flags to `clang`. Although there are currently no flags for `carbon clang`, the `--` reserves the ability to add flags in the future.

            This is provided to help guarantee consistent compilation of C++ files, both when Clang is invoked directly and when a Carbon file importing a C++ file results in an indirect Clang invocation.

    compile
            Compile Carbon source code.

            This subcommand runs the Carbon compiler over input source code, checking it for errors and producing the requested output.

            Error messages are written to the standard error stream.

            Different phases of the compiler can be selected to run, and intermediate state can be written to standard output as these phases progress.

    format
            Format Carbon source code.

    language-server
            Runs the language server.

    link
            Link Carbon executables.

            This subcommand links Carbon executables by combining object files.

            TODO: Support linking binary libraries, both archives and shared libraries. TODO: Support linking against binary libraries.

    help
            Prints help information for the command, including a description, command line usage, and details of each subcommand and option that can be provided.

    version
            Prints the version of this command.

    Command options:
    -v, --verbose
            Enable verbose logging to the stderr stream.

        --fuzzing
            Configure the command line for fuzzing.

    For questions, issues, or bug reports, please use our GitHub project:

    https://github.com/carbon-language/carbon-lang
    ```
    </details>

1.  explorerを実行
    ```
    ./scripts/run_bazelisk.py run //explorer -- ./explorer/testdata/print/format_only.carbon
    ```

    <details>
    <summary>ログ</summary>

    ```
    INFO: Invocation ID: c74eaf33-c404-471e-b0a2-152ef8133939
    INFO: Analyzed target //explorer:explorer (17 packages loaded, 722 targets configured).
    INFO: Found 1 target...
    Target //explorer:explorer up-to-date:
    bazel-bin/explorer/explorer
    INFO: Elapsed time: 105.327s, Critical Path: 75.19s
    INFO: 376 processes: 148 internal, 228 linux-sandbox.
    INFO: Build completed successfully, 376 total actions
    INFO: Running command line: bazel-bin/explorer/explorer <args omitted>
    Hello world!
    result: 0
    ```
    </details>

### 環境構築（１回目） [on Ubuntu Desktop 24.10 **@2025/01/12** <span style="color: red;">*Build Failed!*</span>]

1.  環境確認
    ```
    sudo apt update
    ```

1.  ツール群のインストール
    ```
    sudo apt install \
    clang \
    libc++-dev \
    libc++abi-dev \
    lld
    ```

    <details>
    <summary>ログ</summary>

    ```
    Installing:                                                 
    clang  libc++-dev  libc++abi-dev  lld

    Installing dependencies:
    clang-19                libffi-dev        libtsan2
    icu-devtools            libgc1            libubsan1
    lib32gcc-s1             libgcc-14-dev     libunwind-19
    lib32stdc++6            libhwasan0        libunwind-19-dev
    libasan8                libicu-dev        libxml2-dev
    libc++-19-dev           libitm1           lld-19
    libc++1-19              liblsan0          llvm-19
    libc++abi-19-dev        liblzma-dev       llvm-19-dev
    libc++abi1-19           libncurses-dev    llvm-19-linker-tools
    libc6-i386              libobjc-14-dev    llvm-19-runtime
    libclang-common-19-dev  libobjc4          llvm-19-tools
    libclang-cpp19          libpfm4           zlib1g-dev
    libclang-rt-19-dev      libquadmath0
    libclang1-19            libstdc++-14-dev

    提案パッケージ:
    clang-19-doc  icu-doc      ncurses-doc       pkgconf
    wasi-libc     liblzma-doc  libstdc++-14-doc  llvm-19-doc

    Summary:
    Upgrading: 0, Installing: 44, Removing: 0, Not Upgrading: 0
    Download size: 132 MB
    Space needed: 778 MB / 97.3 GB available

    Continue? [Y/n] Y
    取得:1 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libclang-cpp19 amd64 1:19.1.1-1ubuntu1 [14.2 MB]
    取得:2 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libitm1 amd64 14.2.0-4ubuntu2 [29.3 kB]
    取得:3 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libasan8 amd64 14.2.0-4ubuntu2 [2,997 kB]
    取得:4 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 liblsan0 amd64 14.2.0-4ubuntu2 [1,316 kB]
    取得:5 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libtsan2 amd64 14.2.0-4ubuntu2 [2,733 kB]
    取得:6 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libubsan1 amd64 14.2.0-4ubuntu2 [1,178 kB]
    取得:7 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libhwasan0 amd64 14.2.0-4ubuntu2 [1,634 kB]
    取得:8 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libquadmath0 amd64 14.2.0-4ubuntu2 [153 kB]
    取得:9 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libgcc-14-dev amd64 14.2.0-4ubuntu2 [2,814 kB]
    取得:10 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libstdc++-14-dev amd64 14.2.0-4ubuntu2 [2,501 kB]
    取得:11 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libgc1 amd64 1:8.2.6-2 [90.6 kB]
    取得:12 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libobjc4 amd64 14.2.0-4ubuntu2 [47.0 kB]
    取得:13 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libobjc-14-dev amd64 14.2.0-4ubuntu2 [194 kB]
    取得:14 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libclang-common-19-dev amd64 1:19.1.1-1ubuntu1 [742 kB]
    取得:15 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 llvm-19-linker-tools amd64 1:19.1.1-1ubuntu1 [1,312 kB]
    取得:16 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libclang1-19 amd64 1:19.1.1-1ubuntu1 [8,246 kB]
    取得:17 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 clang-19 amd64 1:19.1.1-1ubuntu1 [78.9 kB]
    取得:18 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 clang amd64 1:19.0-60~exp1 [5,980 B]
    取得:19 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 icu-devtools amd64 74.2-1ubuntu4 [213 kB]
    取得:20 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libc6-i386 amd64 2.40-1ubuntu3 [2,800 kB]
    取得:21 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 lib32gcc-s1 amd64 14.2.0-4ubuntu2 [92.2 kB]
    取得:22 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libunwind-19 amd64 1:19.1.1-1ubuntu1 [62.7 kB]
    取得:23 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libc++abi1-19 amd64 1:19.1.1-1ubuntu1 [70.5 kB]
    取得:24 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libc++1-19 amd64 1:19.1.1-1ubuntu1 [283 kB]
    取得:25 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libc++abi-19-dev amd64 1:19.1.1-1ubuntu1 [95.8 kB]
    取得:26 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libunwind-19-dev amd64 1:19.1.1-1ubuntu1 [44.9 kB]
    取得:27 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libc++-19-dev amd64 1:19.1.1-1ubuntu1 [1,305 kB]
    取得:28 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 lib32stdc++6 amd64 14.2.0-4ubuntu2 [812 kB]
    取得:29 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libclang-rt-19-dev amd64 1:19.1.1-1ubuntu1 [3,877 kB]
    取得:30 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libicu-dev amd64 74.2-1ubuntu4 [11.9 MB]
    取得:31 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libncurses-dev amd64 6.5-2 [384 kB]
    取得:32 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 liblzma-dev amd64 5.6.2-2 [176 kB]
    取得:33 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 zlib1g-dev amd64 1:1.3.dfsg+really1.3.1-1ubuntu1 [895 kB]
    取得:34 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libxml2-dev amd64 2.12.7+dfsg-3 [73.0 kB]
    取得:35 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 lld-19 amd64 1:19.1.1-1ubuntu1 [1,446 kB]
    取得:36 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 lld amd64 1:19.0-60~exp1 [5,626 B]
    取得:37 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 llvm-19-runtime amd64 1:19.1.1-1ubuntu1 [554 kB]
    取得:38 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libpfm4 amd64 4.13.0+git32-g0d4ed0e-1 [414 kB]
    取得:39 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 llvm-19 amd64 1:19.1.1-1ubuntu1 [17.8 MB]
    取得:40 http://jp.archive.ubuntu.com/ubuntu oracular/main amd64 libffi-dev amd64 3.4.6-1build1 [62.8 kB]
    取得:41 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 llvm-19-tools amd64 1:19.1.1-1ubuntu1 [539 kB]
    取得:42 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 llvm-19-dev amd64 1:19.1.1-1ubuntu1 [47.3 MB]
    取得:43 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libc++-dev amd64 1:19.0-60~exp1 [5,758 B]
    取得:44 http://jp.archive.ubuntu.com/ubuntu oracular/universe amd64 libc++abi-dev amd64 1:19.0-60~exp1 [5,762 B]
    132 MB を 40秒 で取得しました (3,281 kB/s)                                     
    パッケージからテンプレートを展開しています: 100%
    以前に未選択のパッケージ libclang-cpp19 を選択しています。
    (データベースを読み込んでいます ... 現在 210983 個のファイルとディレクトリがイン
    ストールされています。)
    ./00-libclang-cpp19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています .
    ..
    libclang-cpp19 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libitm1:amd64 を選択しています。
    ./01-libitm1_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libitm1:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libasan8:amd64 を選択しています。
    ./02-libasan8_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libasan8:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ liblsan0:amd64 を選択しています。
    ./03-liblsan0_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    liblsan0:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libtsan2:amd64 を選択しています。
    ./04-libtsan2_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libtsan2:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libubsan1:amd64 を選択しています。
    ./05-libubsan1_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libubsan1:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libhwasan0:amd64 を選択しています。
    ./06-libhwasan0_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libhwasan0:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libquadmath0:amd64 を選択しています。
    ./07-libquadmath0_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libquadmath0:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libgcc-14-dev:amd64 を選択しています。
    ./08-libgcc-14-dev_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libgcc-14-dev:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libstdc++-14-dev:amd64 を選択しています。
    ./09-libstdc++-14-dev_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libstdc++-14-dev:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libgc1:amd64 を選択しています。
    ./10-libgc1_1%3a8.2.6-2_amd64.deb を展開する準備をしています ...
    libgc1:amd64 (1:8.2.6-2) を展開しています...
    以前に未選択のパッケージ libobjc4:amd64 を選択しています。
    ./11-libobjc4_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libobjc4:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libobjc-14-dev:amd64 を選択しています。
    ./12-libobjc-14-dev_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    libobjc-14-dev:amd64 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libclang-common-19-dev:amd64 を選択しています。
    ./13-libclang-common-19-dev_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をして
    います ...
    libclang-common-19-dev:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ llvm-19-linker-tools を選択しています。
    ./14-llvm-19-linker-tools_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしてい
    ます ...
    llvm-19-linker-tools (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libclang1-19 を選択しています。
    ./15-libclang1-19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ...
    libclang1-19 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ clang-19 を選択しています。
    ./16-clang-19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ...
    clang-19 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ clang を選択しています。
    ./17-clang_1%3a19.0-60~exp1_amd64.deb を展開する準備をしています ...
    clang (1:19.0-60~exp1) を展開しています...
    以前に未選択のパッケージ icu-devtools を選択しています。
    ./18-icu-devtools_74.2-1ubuntu4_amd64.deb を展開する準備をしています ...
    icu-devtools (74.2-1ubuntu4) を展開しています...
    以前に未選択のパッケージ libc6-i386 を選択しています。
    ./19-libc6-i386_2.40-1ubuntu3_amd64.deb を展開する準備をしています ...
    libc6-i386 (2.40-1ubuntu3) を展開しています...
    以前に未選択のパッケージ lib32gcc-s1 を選択しています。
    ./20-lib32gcc-s1_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    lib32gcc-s1 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libunwind-19:amd64 を選択しています。
    ./21-libunwind-19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ...
    libunwind-19:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libc++abi1-19:amd64 を選択しています。
    ./22-libc++abi1-19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ..
    .
    libc++abi1-19:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libc++1-19:amd64 を選択しています。
    ./23-libc++1-19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ...
    libc++1-19:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libc++abi-19-dev:amd64 を選択しています。
    ./24-libc++abi-19-dev_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています
    ...
    libc++abi-19-dev:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libunwind-19-dev:amd64 を選択しています。
    ./25-libunwind-19-dev_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています
    ...
    libunwind-19-dev:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libc++-19-dev:amd64 を選択しています。
    ./26-libc++-19-dev_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ..
    .
    libc++-19-dev:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ lib32stdc++6 を選択しています。
    ./27-lib32stdc++6_14.2.0-4ubuntu2_amd64.deb を展開する準備をしています ...
    lib32stdc++6 (14.2.0-4ubuntu2) を展開しています...
    以前に未選択のパッケージ libclang-rt-19-dev:amd64 を選択しています。
    ./28-libclang-rt-19-dev_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしていま
    す ...
    libclang-rt-19-dev:amd64 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libicu-dev:amd64 を選択しています。
    ./29-libicu-dev_74.2-1ubuntu4_amd64.deb を展開する準備をしています ...
    libicu-dev:amd64 (74.2-1ubuntu4) を展開しています...
    以前に未選択のパッケージ libncurses-dev:amd64 を選択しています。
    ./30-libncurses-dev_6.5-2_amd64.deb を展開する準備をしています ...
    libncurses-dev:amd64 (6.5-2) を展開しています...
    以前に未選択のパッケージ liblzma-dev:amd64 を選択しています。
    ./31-liblzma-dev_5.6.2-2_amd64.deb を展開する準備をしています ...
    liblzma-dev:amd64 (5.6.2-2) を展開しています...
    以前に未選択のパッケージ zlib1g-dev:amd64 を選択しています。
    ./32-zlib1g-dev_1%3a1.3.dfsg+really1.3.1-1ubuntu1_amd64.deb を展開する準備をし
    ています ...
    zlib1g-dev:amd64 (1:1.3.dfsg+really1.3.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libxml2-dev:amd64 を選択しています。
    ./33-libxml2-dev_2.12.7+dfsg-3_amd64.deb を展開する準備をしています ...
    libxml2-dev:amd64 (2.12.7+dfsg-3) を展開しています...
    以前に未選択のパッケージ lld-19 を選択しています。
    ./34-lld-19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ...
    lld-19 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ lld:amd64 を選択しています。
    ./35-lld_1%3a19.0-60~exp1_amd64.deb を展開する準備をしています ...
    lld:amd64 (1:19.0-60~exp1) を展開しています...
    以前に未選択のパッケージ llvm-19-runtime を選択しています。
    ./36-llvm-19-runtime_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています 
    ...
    llvm-19-runtime (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libpfm4:amd64 を選択しています。
    ./37-libpfm4_4.13.0+git32-g0d4ed0e-1_amd64.deb を展開する準備をしています ...
    libpfm4:amd64 (4.13.0+git32-g0d4ed0e-1) を展開しています...
    以前に未選択のパッケージ llvm-19 を選択しています。
    ./38-llvm-19_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ...
    llvm-19 (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libffi-dev:amd64 を選択しています。
    ./39-libffi-dev_3.4.6-1build1_amd64.deb を展開する準備をしています ...
    libffi-dev:amd64 (3.4.6-1build1) を展開しています...
    以前に未選択のパッケージ llvm-19-tools を選択しています。
    ./40-llvm-19-tools_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ..
    .
    llvm-19-tools (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ llvm-19-dev を選択しています。
    ./41-llvm-19-dev_1%3a19.1.1-1ubuntu1_amd64.deb を展開する準備をしています ...
    llvm-19-dev (1:19.1.1-1ubuntu1) を展開しています...
    以前に未選択のパッケージ libc++-dev:amd64 を選択しています。
    ./42-libc++-dev_1%3a19.0-60~exp1_amd64.deb を展開する準備をしています ...
    libc++-dev:amd64 (1:19.0-60~exp1) を展開しています...
    以前に未選択のパッケージ libc++abi-dev:amd64 を選択しています。
    ./43-libc++abi-dev_1%3a19.0-60~exp1_amd64.deb を展開する準備をしています ...
    libc++abi-dev:amd64 (1:19.0-60~exp1) を展開しています...
    libncurses-dev:amd64 (6.5-2) を設定しています ...
    libclang1-19 (1:19.1.1-1ubuntu1) を設定しています ...
    libunwind-19:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    libclang-common-19-dev:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    libc++abi1-19:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    libffi-dev:amd64 (3.4.6-1build1) を設定しています ...
    libpfm4:amd64 (4.13.0+git32-g0d4ed0e-1) を設定しています ...
    libquadmath0:amd64 (14.2.0-4ubuntu2) を設定しています ...
    icu-devtools (74.2-1ubuntu4) を設定しています ...
    libc++1-19:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    libgc1:amd64 (1:8.2.6-2) を設定しています ...
    liblzma-dev:amd64 (5.6.2-2) を設定しています ...
    libubsan1:amd64 (14.2.0-4ubuntu2) を設定しています ...
    zlib1g-dev:amd64 (1:1.3.dfsg+really1.3.1-1ubuntu1) を設定しています ...
    libhwasan0:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libasan8:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libc6-i386 (2.40-1ubuntu3) を設定しています ...
    llvm-19-linker-tools (1:19.1.1-1ubuntu1) を設定しています ...
    libtsan2:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libunwind-19-dev:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    llvm-19-runtime (1:19.1.1-1ubuntu1) を設定しています ...
    lld-19 (1:19.1.1-1ubuntu1) を設定しています ...
    llvm-19-tools (1:19.1.1-1ubuntu1) を設定しています ...
    libicu-dev:amd64 (74.2-1ubuntu4) を設定しています ...
    liblsan0:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libitm1:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libclang-cpp19 (1:19.1.1-1ubuntu1) を設定しています ...
    libc++abi-19-dev:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    lld:amd64 (1:19.0-60~exp1) を設定しています ...
    libobjc4:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libc++-19-dev:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    libxml2-dev:amd64 (2.12.7+dfsg-3) を設定しています ...
    lib32gcc-s1 (14.2.0-4ubuntu2) を設定しています ...
    lib32stdc++6 (14.2.0-4ubuntu2) を設定しています ...
    libclang-rt-19-dev:amd64 (1:19.1.1-1ubuntu1) を設定しています ...
    llvm-19 (1:19.1.1-1ubuntu1) を設定しています ...
    libgcc-14-dev:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libc++-dev:amd64 (1:19.0-60~exp1) を設定しています ...
    libstdc++-14-dev:amd64 (14.2.0-4ubuntu2) を設定しています ...
    libc++abi-dev:amd64 (1:19.0-60~exp1) を設定しています ...
    libobjc-14-dev:amd64 (14.2.0-4ubuntu2) を設定しています ...
    clang-19 (1:19.1.1-1ubuntu1) を設定しています ...
    clang (1:19.0-60~exp1) を設定しています ...
    llvm-19-dev (1:19.1.1-1ubuntu1) を設定しています ...
    base-files (13.3ubuntu6) のトリガを処理しています ...
    libc-bin (2.40-1ubuntu3) のトリガを処理しています ...
    systemd (256.5-2ubuntu3.1) のトリガを処理しています ...
    man-db (2.12.1-3) のトリガを処理しています ...
    install-info (7.1-3build2) のトリガを処理しています ...
    ```
    </details>

1.  Carbon コードの取得
    ```
    git clone https://github.com/carbon-language/carbon-lang
    ```

    <details>
    <summary>ログ</summary>

    ```
    Cloning into 'carbon-lang'...
    remote: Enumerating objects: 92548, done.
    remote: Counting objects: 100% (2074/2074), done.
    remote: Compressing objects: 100% (1404/1404), done.
    remote: Total 92548 (delta 1700), reused 676 (delta 670), pack-reused 90474 (from 3)
    Receiving objects: 100% (92548/92548), 41.88 MiB | 3.48 MiB/s, done.
    Resolving deltas: 100% (76493/76493), done.
    Updating files: 100% (5331/5331), done.
    ```
    </details>

1.  ツールチェーンのヘルプ表示
    ```
    cd carbon-lang
    ./scripts/run_bazelisk.py run //toolchain -- help
    ```

    <details>
    <summary>ログ</summary>

    ```
    Starting local Bazel server and connecting to it...
    INFO: Invocation ID: 6eb351c2-2870-4337-a394-a61dcd431e39
    WARNING: WORKSPACE support will be removed in Bazel 9 (late 2025), please migrate to Bzlmod, see https://bazel.build/external/migration.
    INFO: Analyzed target //toolchain:toolchain (158 packages loaded, 11287 targets configured).

    ERROR: /home/taishow/.cache/bazel/_bazel_taishow/72d0ad9945d9497741a773f035acb5b0/external/+llvm_project+llvm-project/clang/BUILD.bazel:1134:11: Compiling clang/lib/Sema/SemaExpr.cpp failed: (Killed): clang++ failed: error executing CppCompile command (from target @@+llvm_project+llvm-project//clang:sema) /usr/lib/llvm-19/bin/clang++ -no-canonical-prefixes -fcolor-diagnostics -Werror -Wall -Wextra -Wthread-safety -Wself-assign -Wimplicit-fallthrough -Wctad-maybe-unsupported -Wextra-semi ... (remaining 141 arguments skipped)

    Use --sandbox_debug to see verbose messages from the sandbox and retain the sandbox build root for debugging
    Target //toolchain:carbon failed to build
    Use --verbose_failures to see the command lines of failed build steps.
    INFO: Elapsed time: 37161.093s, Critical Path: 2193.93s
    INFO: 2593 processes: 425 action cache hit, 2 disk cache hit, 54 internal, 2537 processwrapper-sandbox.
    ERROR: Build did NOT complete successfully
    ERROR: Build failed. Not running target
    ```
    </details>

1.  explorerを実行
    ```
    ./scripts/run_bazelisk.py run //explorer -- ./explorer/testdata/print/format_only.carbon
    ```

    <details>
    <summary>ログ</summary>

    ```
    INFO: Invocation ID: d0c84f32-03f9-44b9-8e1d-f42fd2ad04d5
    INFO: Analyzed target //explorer:explorer (17 packages loaded, 722 targets configured).
    INFO: Found 1 target...
    Target //explorer:explorer up-to-date:
    bazel-bin/explorer/explorer
    INFO: Elapsed time: 880.525s, Critical Path: 530.41s
    INFO: 376 processes: 148 internal, 228 processwrapper-sandbox.
    INFO: Build completed successfully, 376 total actions
    INFO: Running command line: bazel-bin/explorer/explorer <args omitted>
    Hello world!
    result: 0
    ```
    </details>

### 環境更新 [on ubuntu 24.04 **@2024/10/27** <span style="color: red;">*Updated!*</span>]
1.  carbon-explorerを実行
    -   gitからクローン
        *   コマンド
            ```
            git clone https://github.com/carbon-language/carbon-lang
            ```
            <details>
            <summary>ログ</summary>

            ```
            Cloning into 'carbon-lang'...
            remote: Enumerating objects: 79131, done.
            remote: Counting objects: 100% (5614/5614), done.
            remote: Compressing objects: 100% (2363/2363), done.
            remote: Total 79131 (delta 4664), reused 3817 (delta 3227), pack-reused 73517 (from 1)
            Receiving objects: 100% (79131/79131), 32.03 MiB | 8.44 MiB/s, done.
            Resolving deltas: 100% (64584/64584), done.
            ```
            </details>
    -   実行
        *   コマンド
            ```
            cd carbon-lang
            bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
            ```
            <details>
            <summary>ログ</summary>
            
            ```
            2024/10/27 18:34:07 Downloading https://releases.bazel.build/7.3.0/release/bazel-7.3.0-linux-x86_64...
            Extracting Bazel installation...
            Starting local Bazel server and connecting to it...
            INFO: Invocation ID: b8d43c6b-1481-4597-b6f8-c996e60bc3c3
            DEBUG: /home/taishow/.cache/bazel/_bazel_taishow/72d0ad9945d9497741a773f035acb5b0/external/rules_python~/python/private/bzlmod/python.bzl:46:10: WARNING: Ignoring toolchain 'python_3_11' from module 'rules_fuzzing': Toolchain 'python_3_11' from module 'carbon' already registered Python version 3.11 and has precedence
            INFO: Analyzed target //explorer:explorer (131 packages loaded, 2879 targets configured).
            INFO: Found 1 target...
            Target //explorer:explorer up-to-date:
            bazel-bin/explorer/explorer
            INFO: Elapsed time: 343.018s, Critical Path: 167.97s
            INFO: 600 processes: 159 internal, 441 linux-sandbox.
            INFO: Build completed successfully, 600 total actions
            INFO: Running command line: bazel-bin/explorer/explorer ./explorer/testdata/print/format_only.carbon
            Hello world!
            result: 0
            ```
            </details>

### 環境更新 [on ubuntu 22.04 **@2024/03/16** <span style="color: red;">*Updated!*</span>]
1.  carbon-explorerを実行
    -   gitからクローン
        *   コマンド
            ```
            git clone https://github.com/carbon-language/carbon-lang
            ```
            <details>
            <summary>ログ</summary>

            ```
            Cloning into 'carbon-lang'...
            remote: Enumerating objects: 53359, done.
            remote: Counting objects: 100% (3589/3589), done.
            remote: Compressing objects: 100% (1299/1299), done.
            remote: Total 53359 (delta 2892), reused 2778 (delta 2288), pack-reused 49770
            Receiving objects: 100% (53359/53359), 18.23 MiB | 18.76 MiB/s, done.
            Resolving deltas: 100% (42073/42073), done.
            ```
            </details>
    -   実行
        *   コマンド
            ```
            cd carbon-lang
            bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
            ```
            <details>
            <summary>ログ</summary>
            
            ```
            2024/03/16 19:08:57 Downloading https://releases.bazel.build/7.1.0/release/bazel-7.1.0-linux-x86_64...
            Extracting Bazel installation...
            Starting local Bazel server and connecting to it...
            INFO: Invocation ID: 6491b086-f4e5-4225-97e0-2028f257c3dd
            INFO: Analyzed target //explorer:explorer (109 packages loaded, 2101 targets configured).
            INFO: Found 1 target...
            Target //explorer:explorer up-to-date:
            bazel-bin/explorer/explorer
            INFO: Elapsed time: 179.582s, Critical Path: 57.60s
            INFO: 591 processes: 159 internal, 432 linux-sandbox.
            INFO: Build completed successfully, 591 total actions
            INFO: Running command line: bazel-bin/explorer/explorer ./explorer/testdata/print/format_only.carbon
            Hello world!
            result: 0    
            ```
            </details>

### 環境構築（３回目）[on ubuntu 22.04 **@2023/09/02** <span style="color: red;">*Installed!*</span>]
1.  HomeBrewインストール
    *   コマンド
        ```
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        ```
        <details>
        <summary>ログ</summary>

        ```
        taishow@Ideapad550-2023:~$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        ==> Checking for `sudo` access (which may request your password)...
        [sudo] password for taishow:
        ==> This script will install:
        /home/linuxbrew/.linuxbrew/bin/brew
        /home/linuxbrew/.linuxbrew/share/doc/homebrew
        /home/linuxbrew/.linuxbrew/share/man/man1/brew.1
        /home/linuxbrew/.linuxbrew/share/zsh/site-functions/_brew
        /home/linuxbrew/.linuxbrew/etc/bash_completion.d/brew
        /home/linuxbrew/.linuxbrew/Homebrew
        ==> The following new directories will be created:
        /home/linuxbrew/.linuxbrew/bin
        /home/linuxbrew/.linuxbrew/etc
        /home/linuxbrew/.linuxbrew/include
        /home/linuxbrew/.linuxbrew/lib
        /home/linuxbrew/.linuxbrew/sbin
        /home/linuxbrew/.linuxbrew/share
        /home/linuxbrew/.linuxbrew/var
        /home/linuxbrew/.linuxbrew/opt
        /home/linuxbrew/.linuxbrew/share/zsh
        /home/linuxbrew/.linuxbrew/share/zsh/site-functions
        /home/linuxbrew/.linuxbrew/var/homebrew
        /home/linuxbrew/.linuxbrew/var/homebrew/linked
        /home/linuxbrew/.linuxbrew/Cellar
        /home/linuxbrew/.linuxbrew/Caskroom
        /home/linuxbrew/.linuxbrew/Frameworks

        Press RETURN/ENTER to continue or any other key to abort:
        ==> /usr/bin/sudo /usr/bin/install -d -o taishow -g taishow -m 0755 /home/linuxbrew/.linuxbrew
        ==> /usr/bin/sudo /bin/mkdir -p /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
        ==> /usr/bin/sudo /bin/chmod ug=rwx /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
        ==> /usr/bin/sudo /bin/chmod go-w /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions
        ==> /usr/bin/sudo /bin/chown taishow /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
        ==> /usr/bin/sudo /bin/chgrp taishow /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
        ==> /usr/bin/sudo /bin/mkdir -p /home/linuxbrew/.linuxbrew/Homebrew
        ==> /usr/bin/sudo /bin/chown -R taishow:taishow /home/linuxbrew/.linuxbrew/Homebrew
        ==> Downloading and installing Homebrew...
        remote: Enumerating objects: 246592, done.
        remote: Counting objects: 100% (876/876), done.
        remote: Compressing objects: 100% (542/542), done.
        remote: Total 246592 (delta 382), reused 763 (delta 306), pack-reused 245716
        Receiving objects: 100% (246592/246592), 72.63 MiB | 25.49 MiB/s, done.
        Resolving deltas: 100% (180206/180206), done.
        From https://github.com/Homebrew/brew
        * [new branch]          dependabot/bundler/Library/Homebrew/rubocop-sorbet-0.7.3 -> origin/dependabot/bundler/Library/Homebrew/rubocop-sorbet-0.7.3
        * [new branch]          master                               -> origin/master
        * [new branch]          sponsors-maintainers-man-completions -> origin/sponsors-maintainers-man-completions
        * [new tag]             0.1                                  -> 0.1
        * [new tag]             0.2                                  -> 0.2
        * [new tag]             0.3                                  -> 0.3
        * [new tag]             0.4                                  -> 0.4
        * [new tag]             0.5                                  -> 0.5
        * [new tag]             0.6                                  -> 0.6
        * [new tag]             0.7                                  -> 0.7
        * [new tag]             0.7.1                                -> 0.7.1
        * [new tag]             0.8                                  -> 0.8
        * [new tag]             0.8.1                                -> 0.8.1
        * [new tag]             0.9                                  -> 0.9
        * [new tag]             0.9.1                                -> 0.9.1
        * [new tag]             0.9.2                                -> 0.9.2
        * [new tag]             0.9.3                                -> 0.9.3
        * [new tag]             0.9.4                                -> 0.9.4
        * [new tag]             0.9.5                                -> 0.9.5
        * [new tag]             0.9.8                                -> 0.9.8
        * [new tag]             0.9.9                                -> 0.9.9
        * [new tag]             1.0.0                                -> 1.0.0
        * [new tag]             1.0.1                                -> 1.0.1
        * [new tag]             1.0.2                                -> 1.0.2
        * [new tag]             1.0.3                                -> 1.0.3
        * [new tag]             1.0.4                                -> 1.0.4
        * [new tag]             1.0.5                                -> 1.0.5
        * [new tag]             1.0.6                                -> 1.0.6
        * [new tag]             1.0.7                                -> 1.0.7
        * [new tag]             1.0.8                                -> 1.0.8
        * [new tag]             1.0.9                                -> 1.0.9
        * [new tag]             1.1.0                                -> 1.1.0
        * [new tag]             1.1.1                                -> 1.1.1
        * [new tag]             1.1.10                               -> 1.1.10
        * [new tag]             1.1.11                               -> 1.1.11
        * [new tag]             1.1.12                               -> 1.1.12
        * [new tag]             1.1.13                               -> 1.1.13
        * [new tag]             1.1.2                                -> 1.1.2
        * [new tag]             1.1.3                                -> 1.1.3
        * [new tag]             1.1.4                                -> 1.1.4
        * [new tag]             1.1.5                                -> 1.1.5
        * [new tag]             1.1.6                                -> 1.1.6
        * [new tag]             1.1.7                                -> 1.1.7
        * [new tag]             1.1.8                                -> 1.1.8
        * [new tag]             1.1.9                                -> 1.1.9
        * [new tag]             1.2.0                                -> 1.2.0
        * [new tag]             1.2.1                                -> 1.2.1
        * [new tag]             1.2.2                                -> 1.2.2
        * [new tag]             1.2.3                                -> 1.2.3
        * [new tag]             1.2.4                                -> 1.2.4
        * [new tag]             1.2.5                                -> 1.2.5
        * [new tag]             1.2.6                                -> 1.2.6
        * [new tag]             1.3.0                                -> 1.3.0
        * [new tag]             1.3.1                                -> 1.3.1
        * [new tag]             1.3.2                                -> 1.3.2
        * [new tag]             1.3.3                                -> 1.3.3
        * [new tag]             1.3.4                                -> 1.3.4
        * [new tag]             1.3.5                                -> 1.3.5
        * [new tag]             1.3.6                                -> 1.3.6
        * [new tag]             1.3.7                                -> 1.3.7
        * [new tag]             1.3.8                                -> 1.3.8
        * [new tag]             1.3.9                                -> 1.3.9
        * [new tag]             1.4.0                                -> 1.4.0
        * [new tag]             1.4.1                                -> 1.4.1
        * [new tag]             1.4.2                                -> 1.4.2
        * [new tag]             1.4.3                                -> 1.4.3
        * [new tag]             1.5.0                                -> 1.5.0
        * [new tag]             1.5.1                                -> 1.5.1
        * [new tag]             1.5.10                               -> 1.5.10
        * [new tag]             1.5.11                               -> 1.5.11
        * [new tag]             1.5.12                               -> 1.5.12
        * [new tag]             1.5.13                               -> 1.5.13
        * [new tag]             1.5.14                               -> 1.5.14
        * [new tag]             1.5.2                                -> 1.5.2
        * [new tag]             1.5.3                                -> 1.5.3
        * [new tag]             1.5.4                                -> 1.5.4
        * [new tag]             1.5.5                                -> 1.5.5
        * [new tag]             1.5.6                                -> 1.5.6
        * [new tag]             1.5.7                                -> 1.5.7
        * [new tag]             1.5.8                                -> 1.5.8
        * [new tag]             1.5.9                                -> 1.5.9
        * [new tag]             1.6.0                                -> 1.6.0
        * [new tag]             1.6.1                                -> 1.6.1
        * [new tag]             1.6.10                               -> 1.6.10
        * [new tag]             1.6.11                               -> 1.6.11
        * [new tag]             1.6.12                               -> 1.6.12
        * [new tag]             1.6.13                               -> 1.6.13
        * [new tag]             1.6.14                               -> 1.6.14
        * [new tag]             1.6.15                               -> 1.6.15
        * [new tag]             1.6.16                               -> 1.6.16
        * [new tag]             1.6.17                               -> 1.6.17
        * [new tag]             1.6.2                                -> 1.6.2
        * [new tag]             1.6.3                                -> 1.6.3
        * [new tag]             1.6.4                                -> 1.6.4
        * [new tag]             1.6.5                                -> 1.6.5
        * [new tag]             1.6.6                                -> 1.6.6
        * [new tag]             1.6.7                                -> 1.6.7
        * [new tag]             1.6.8                                -> 1.6.8
        * [new tag]             1.6.9                                -> 1.6.9
        * [new tag]             1.7.0                                -> 1.7.0
        * [new tag]             1.7.1                                -> 1.7.1
        * [new tag]             1.7.2                                -> 1.7.2
        * [new tag]             1.7.3                                -> 1.7.3
        * [new tag]             1.7.4                                -> 1.7.4
        * [new tag]             1.7.5                                -> 1.7.5
        * [new tag]             1.7.6                                -> 1.7.6
        * [new tag]             1.7.7                                -> 1.7.7
        * [new tag]             1.8.0                                -> 1.8.0
        * [new tag]             1.8.1                                -> 1.8.1
        * [new tag]             1.8.2                                -> 1.8.2
        * [new tag]             1.8.3                                -> 1.8.3
        * [new tag]             1.8.4                                -> 1.8.4
        * [new tag]             1.8.5                                -> 1.8.5
        * [new tag]             1.8.6                                -> 1.8.6
        * [new tag]             1.9.0                                -> 1.9.0
        * [new tag]             1.9.1                                -> 1.9.1
        * [new tag]             1.9.2                                -> 1.9.2
        * [new tag]             1.9.3                                -> 1.9.3
        * [new tag]             2.0.0                                -> 2.0.0
        * [new tag]             2.0.1                                -> 2.0.1
        * [new tag]             2.0.2                                -> 2.0.2
        * [new tag]             2.0.3                                -> 2.0.3
        * [new tag]             2.0.4                                -> 2.0.4
        * [new tag]             2.0.5                                -> 2.0.5
        * [new tag]             2.0.6                                -> 2.0.6
        * [new tag]             2.1.0                                -> 2.1.0
        * [new tag]             2.1.1                                -> 2.1.1
        * [new tag]             2.1.10                               -> 2.1.10
        * [new tag]             2.1.11                               -> 2.1.11
        * [new tag]             2.1.12                               -> 2.1.12
        * [new tag]             2.1.13                               -> 2.1.13
        * [new tag]             2.1.14                               -> 2.1.14
        * [new tag]             2.1.15                               -> 2.1.15
        * [new tag]             2.1.16                               -> 2.1.16
        * [new tag]             2.1.2                                -> 2.1.2
        * [new tag]             2.1.3                                -> 2.1.3
        * [new tag]             2.1.4                                -> 2.1.4
        * [new tag]             2.1.5                                -> 2.1.5
        * [new tag]             2.1.6                                -> 2.1.6
        * [new tag]             2.1.7                                -> 2.1.7
        * [new tag]             2.1.8                                -> 2.1.8
        * [new tag]             2.1.9                                -> 2.1.9
        * [new tag]             2.2.0                                -> 2.2.0
        * [new tag]             2.2.1                                -> 2.2.1
        * [new tag]             2.2.10                               -> 2.2.10
        * [new tag]             2.2.11                               -> 2.2.11
        * [new tag]             2.2.12                               -> 2.2.12
        * [new tag]             2.2.13                               -> 2.2.13
        * [new tag]             2.2.14                               -> 2.2.14
        * [new tag]             2.2.15                               -> 2.2.15
        * [new tag]             2.2.16                               -> 2.2.16
        * [new tag]             2.2.17                               -> 2.2.17
        * [new tag]             2.2.2                                -> 2.2.2
        * [new tag]             2.2.3                                -> 2.2.3
        * [new tag]             2.2.4                                -> 2.2.4
        * [new tag]             2.2.5                                -> 2.2.5
        * [new tag]             2.2.6                                -> 2.2.6
        * [new tag]             2.2.7                                -> 2.2.7
        * [new tag]             2.2.8                                -> 2.2.8
        * [new tag]             2.2.9                                -> 2.2.9
        * [new tag]             2.3.0                                -> 2.3.0
        * [new tag]             2.4.0                                -> 2.4.0
        * [new tag]             2.4.1                                -> 2.4.1
        * [new tag]             2.4.10                               -> 2.4.10
        * [new tag]             2.4.11                               -> 2.4.11
        * [new tag]             2.4.12                               -> 2.4.12
        * [new tag]             2.4.13                               -> 2.4.13
        * [new tag]             2.4.14                               -> 2.4.14
        * [new tag]             2.4.15                               -> 2.4.15
        * [new tag]             2.4.16                               -> 2.4.16
        * [new tag]             2.4.2                                -> 2.4.2
        * [new tag]             2.4.3                                -> 2.4.3
        * [new tag]             2.4.4                                -> 2.4.4
        * [new tag]             2.4.5                                -> 2.4.5
        * [new tag]             2.4.6                                -> 2.4.6
        * [new tag]             2.4.7                                -> 2.4.7
        * [new tag]             2.4.8                                -> 2.4.8
        * [new tag]             2.4.9                                -> 2.4.9
        * [new tag]             2.5.0                                -> 2.5.0
        * [new tag]             2.5.1                                -> 2.5.1
        * [new tag]             2.5.10                               -> 2.5.10
        * [new tag]             2.5.11                               -> 2.5.11
        * [new tag]             2.5.12                               -> 2.5.12
        * [new tag]             2.5.2                                -> 2.5.2
        * [new tag]             2.5.3                                -> 2.5.3
        * [new tag]             2.5.4                                -> 2.5.4
        * [new tag]             2.5.5                                -> 2.5.5
        * [new tag]             2.5.6                                -> 2.5.6
        * [new tag]             2.5.7                                -> 2.5.7
        * [new tag]             2.5.8                                -> 2.5.8
        * [new tag]             2.5.9                                -> 2.5.9
        * [new tag]             2.6.0                                -> 2.6.0
        * [new tag]             2.6.1                                -> 2.6.1
        * [new tag]             2.6.2                                -> 2.6.2
        * [new tag]             2.7.0                                -> 2.7.0
        * [new tag]             2.7.1                                -> 2.7.1
        * [new tag]             2.7.2                                -> 2.7.2
        * [new tag]             2.7.3                                -> 2.7.3
        * [new tag]             2.7.4                                -> 2.7.4
        * [new tag]             2.7.5                                -> 2.7.5
        * [new tag]             2.7.6                                -> 2.7.6
        * [new tag]             2.7.7                                -> 2.7.7
        * [new tag]             3.0.0                                -> 3.0.0
        * [new tag]             3.0.1                                -> 3.0.1
        * [new tag]             3.0.10                               -> 3.0.10
        * [new tag]             3.0.11                               -> 3.0.11
        * [new tag]             3.0.2                                -> 3.0.2
        * [new tag]             3.0.3                                -> 3.0.3
        * [new tag]             3.0.4                                -> 3.0.4
        * [new tag]             3.0.5                                -> 3.0.5
        * [new tag]             3.0.6                                -> 3.0.6
        * [new tag]             3.0.7                                -> 3.0.7
        * [new tag]             3.0.8                                -> 3.0.8
        * [new tag]             3.0.9                                -> 3.0.9
        * [new tag]             3.1.0                                -> 3.1.0
        * [new tag]             3.1.1                                -> 3.1.1
        * [new tag]             3.1.10                               -> 3.1.10
        * [new tag]             3.1.11                               -> 3.1.11
        * [new tag]             3.1.12                               -> 3.1.12
        * [new tag]             3.1.2                                -> 3.1.2
        * [new tag]             3.1.3                                -> 3.1.3
        * [new tag]             3.1.4                                -> 3.1.4
        * [new tag]             3.1.5                                -> 3.1.5
        * [new tag]             3.1.6                                -> 3.1.6
        * [new tag]             3.1.7                                -> 3.1.7
        * [new tag]             3.1.8                                -> 3.1.8
        * [new tag]             3.1.9                                -> 3.1.9
        * [new tag]             3.2.0                                -> 3.2.0
        * [new tag]             3.2.1                                -> 3.2.1
        * [new tag]             3.2.10                               -> 3.2.10
        * [new tag]             3.2.11                               -> 3.2.11
        * [new tag]             3.2.12                               -> 3.2.12
        * [new tag]             3.2.13                               -> 3.2.13
        * [new tag]             3.2.14                               -> 3.2.14
        * [new tag]             3.2.15                               -> 3.2.15
        * [new tag]             3.2.16                               -> 3.2.16
        * [new tag]             3.2.17                               -> 3.2.17
        * [new tag]             3.2.2                                -> 3.2.2
        * [new tag]             3.2.3                                -> 3.2.3
        * [new tag]             3.2.4                                -> 3.2.4
        * [new tag]             3.2.5                                -> 3.2.5
        * [new tag]             3.2.6                                -> 3.2.6
        * [new tag]             3.2.7                                -> 3.2.7
        * [new tag]             3.2.8                                -> 3.2.8
        * [new tag]             3.2.9                                -> 3.2.9
        * [new tag]             3.3.0                                -> 3.3.0
        * [new tag]             3.3.1                                -> 3.3.1
        * [new tag]             3.3.10                               -> 3.3.10
        * [new tag]             3.3.11                               -> 3.3.11
        * [new tag]             3.3.12                               -> 3.3.12
        * [new tag]             3.3.13                               -> 3.3.13
        * [new tag]             3.3.14                               -> 3.3.14
        * [new tag]             3.3.15                               -> 3.3.15
        * [new tag]             3.3.16                               -> 3.3.16
        * [new tag]             3.3.2                                -> 3.3.2
        * [new tag]             3.3.3                                -> 3.3.3
        * [new tag]             3.3.4                                -> 3.3.4
        * [new tag]             3.3.5                                -> 3.3.5
        * [new tag]             3.3.6                                -> 3.3.6
        * [new tag]             3.3.7                                -> 3.3.7
        * [new tag]             3.3.8                                -> 3.3.8
        * [new tag]             3.3.9                                -> 3.3.9
        * [new tag]             3.4.0                                -> 3.4.0
        * [new tag]             3.4.1                                -> 3.4.1
        * [new tag]             3.4.10                               -> 3.4.10
        * [new tag]             3.4.11                               -> 3.4.11
        * [new tag]             3.4.2                                -> 3.4.2
        * [new tag]             3.4.3                                -> 3.4.3
        * [new tag]             3.4.4                                -> 3.4.4
        * [new tag]             3.4.5                                -> 3.4.5
        * [new tag]             3.4.6                                -> 3.4.6
        * [new tag]             3.4.7                                -> 3.4.7
        * [new tag]             3.4.8                                -> 3.4.8
        * [new tag]             3.4.9                                -> 3.4.9
        * [new tag]             3.5.0                                -> 3.5.0
        * [new tag]             3.5.1                                -> 3.5.1
        * [new tag]             3.5.10                               -> 3.5.10
        * [new tag]             3.5.2                                -> 3.5.2
        * [new tag]             3.5.3                                -> 3.5.3
        * [new tag]             3.5.4                                -> 3.5.4
        * [new tag]             3.5.5                                -> 3.5.5
        * [new tag]             3.5.6                                -> 3.5.6
        * [new tag]             3.5.7                                -> 3.5.7
        * [new tag]             3.5.8                                -> 3.5.8
        * [new tag]             3.5.9                                -> 3.5.9
        * [new tag]             3.6.0                                -> 3.6.0
        * [new tag]             3.6.1                                -> 3.6.1
        * [new tag]             3.6.10                               -> 3.6.10
        * [new tag]             3.6.11                               -> 3.6.11
        * [new tag]             3.6.12                               -> 3.6.12
        * [new tag]             3.6.13                               -> 3.6.13
        * [new tag]             3.6.14                               -> 3.6.14
        * [new tag]             3.6.15                               -> 3.6.15
        * [new tag]             3.6.16                               -> 3.6.16
        * [new tag]             3.6.17                               -> 3.6.17
        * [new tag]             3.6.18                               -> 3.6.18
        * [new tag]             3.6.19                               -> 3.6.19
        * [new tag]             3.6.2                                -> 3.6.2
        * [new tag]             3.6.20                               -> 3.6.20
        * [new tag]             3.6.21                               -> 3.6.21
        * [new tag]             3.6.3                                -> 3.6.3
        * [new tag]             3.6.4                                -> 3.6.4
        * [new tag]             3.6.5                                -> 3.6.5
        * [new tag]             3.6.6                                -> 3.6.6
        * [new tag]             3.6.7                                -> 3.6.7
        * [new tag]             3.6.8                                -> 3.6.8
        * [new tag]             3.6.9                                -> 3.6.9
        * [new tag]             4.0.0                                -> 4.0.0
        * [new tag]             4.0.1                                -> 4.0.1
        * [new tag]             4.0.10                               -> 4.0.10
        * [new tag]             4.0.11                               -> 4.0.11
        * [new tag]             4.0.12                               -> 4.0.12
        * [new tag]             4.0.13                               -> 4.0.13
        * [new tag]             4.0.14                               -> 4.0.14
        * [new tag]             4.0.15                               -> 4.0.15
        * [new tag]             4.0.16                               -> 4.0.16
        * [new tag]             4.0.17                               -> 4.0.17
        * [new tag]             4.0.18                               -> 4.0.18
        * [new tag]             4.0.19                               -> 4.0.19
        * [new tag]             4.0.2                                -> 4.0.2
        * [new tag]             4.0.20                               -> 4.0.20
        * [new tag]             4.0.21                               -> 4.0.21
        * [new tag]             4.0.22                               -> 4.0.22
        * [new tag]             4.0.23                               -> 4.0.23
        * [new tag]             4.0.24                               -> 4.0.24
        * [new tag]             4.0.25                               -> 4.0.25
        * [new tag]             4.0.26                               -> 4.0.26
        * [new tag]             4.0.27                               -> 4.0.27
        * [new tag]             4.0.28                               -> 4.0.28
        * [new tag]             4.0.3                                -> 4.0.3
        * [new tag]             4.0.4                                -> 4.0.4
        * [new tag]             4.0.5                                -> 4.0.5
        * [new tag]             4.0.6                                -> 4.0.6
        * [new tag]             4.0.7                                -> 4.0.7
        * [new tag]             4.0.8                                -> 4.0.8
        * [new tag]             4.0.9                                -> 4.0.9
        * [new tag]             4.1.0                                -> 4.1.0
        * [new tag]             4.1.1                                -> 4.1.1
        * [new tag]             4.1.2                                -> 4.1.2
        * [new tag]             4.1.3                                -> 4.1.3
        * [new tag]             4.1.4                                -> 4.1.4
        * [new tag]             4.1.5                                -> 4.1.5
        * [new tag]             4.1.6                                -> 4.1.6
        * [new tag]             4.1.7                                -> 4.1.7
        remote: Enumerating objects: 13, done.
        remote: Counting objects: 100% (7/7), done.
        remote: Total 13 (delta 7), reused 7 (delta 7), pack-reused 6
        Unpacking objects: 100% (13/13), 2.77 KiB | 567.00 KiB/s, done.
        From https://github.com/Homebrew/brew
        * [new tag]             4.0.29     -> 4.0.29
        HEAD is now at de50e8418 Merge pull request #15930 from issyl0/markdown-numbering
        ==> Downloading https://ghcr.io/v2/homebrew/portable-ruby/portable-ruby/blobs/sha256:68923daf3e139482b977c3deba63a3b54ea37bb5f716482948878819ef911bad
        ######################################################################## 100.0%
        ==> Pouring portable-ruby-2.6.10_1.x86_64_linux.bottle.tar.gz
        Warning: /home/linuxbrew/.linuxbrew/bin is not in your PATH.
        Instructions on how to configure your shell for Homebrew
        can be found in the 'Next steps' section below.
        ==> Installation successful!

        ==> Homebrew has enabled anonymous aggregate formulae and cask analytics.
        Read the analytics documentation (and how to opt-out) here:
        https://docs.brew.sh/Analytics
        No analytics data has been sent yet (nor will any be during this install run).

        ==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
        https://github.com/Homebrew/brew#donations

        ==> Next steps:
        - Run these two commands in your terminal to add Homebrew to your PATH:
            (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/taishow/.profile
            eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
        - Install Homebrew's dependencies if you have sudo access:
            sudo apt-get install build-essential
        For more information, see:
            https://docs.brew.sh/Homebrew-on-Linux
        - We recommend that you install GCC:
            brew install gcc
        - Run brew help to get started
        - Further documentation:
            https://docs.brew.sh
        ```
        </details>
1.  PATH設定
    ```
    (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/taishow/.profile
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
    ```
1.  HomeBrewの必須パッケージ（確認）
    1.  コマンド
        ```
        sudo apt-get install build-essential
        ```
        <details>
        <summary>ログ</summary>

        ```
        Reading package lists... Done
        Building dependency tree... Done
        Reading state information... Done
        build-essential is already the newest version (12.9ubuntu3).
        0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
        ```
        </details>
1.  gcc インストール
    *   コマンド
        ```
        brew install gcc
        ```
        <details>
        <summary>ログ</summary>

        ```
        ==> Fetching dependencies for gcc: gmp, isl, mpfr, libmpc, lz4, xz, zlib, zstd and binutils
        ==> Fetching gmp
        ==> Downloading https://ghcr.io/v2/homebrew/core/gmp/manifests/6.2.1_1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/gmp/blobs/sha256:786ae29f0c0b06ea86e42bd9c6ac2c49bd5757da03
        ##################################################################################################### 100.0%
        ==> Fetching isl
        ==> Downloading https://ghcr.io/v2/homebrew/core/isl/manifests/0.26
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/isl/blobs/sha256:db14ba1e4ea23ab41e06930dcf25ae9023c5e395c8
        ##################################################################################################### 100.0%
        ==> Fetching mpfr
        ==> Downloading https://ghcr.io/v2/homebrew/core/mpfr/manifests/4.2.0-p12
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/mpfr/blobs/sha256:57c89c97863cb0d08251271de84ae157b364af3b3
        ##################################################################################################### 100.0%
        ==> Fetching libmpc
        ==> Downloading https://ghcr.io/v2/homebrew/core/libmpc/manifests/1.3.1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/libmpc/blobs/sha256:f6542ae5bcf643ca0c980c7000cde1585922e76
        ##################################################################################################### 100.0%
        ==> Fetching lz4
        ==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.9.4
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/lz4/blobs/sha256:1757fefc3840e11c4822e4c2a95aa62aca44a4eacc
        ##################################################################################################### 100.0%
        ==> Fetching xz
        ==> Downloading https://ghcr.io/v2/homebrew/core/xz/manifests/5.4.4
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/xz/blobs/sha256:f68637417bc856ba59f1ec25f7fcb0ccba14a9d5355
        ##################################################################################################### 100.0%
        ==> Fetching zlib
        ==> Downloading https://ghcr.io/v2/homebrew/core/zlib/manifests/1.3
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/zlib/blobs/sha256:a47a3b5c8ee68010ab374a3d395e7a39a2d08f4f0
        ##################################################################################################### 100.0%
        ==> Fetching zstd
        ==> Downloading https://ghcr.io/v2/homebrew/core/zstd/manifests/1.5.5-1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/zstd/blobs/sha256:96afcbd191c9961446161a6fabf09cbbb4c6b3df3
        ##################################################################################################### 100.0%
        ==> Fetching binutils
        ==> Downloading https://ghcr.io/v2/homebrew/core/binutils/manifests/2.41
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/binutils/blobs/sha256:3b91a59270365b124e3d73d14d75c9085f156
        ##################################################################################################### 100.0%
        ==> Fetching gcc
        ==> Downloading https://ghcr.io/v2/homebrew/core/gcc/manifests/13.2.0
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/gcc/blobs/sha256:fea0256da0e5ef8a08fe08f6130de799e038b008ac
        ##################################################################################################### 100.0%
        ==> Installing dependencies for gcc: gmp, isl, mpfr, libmpc, lz4, xz, zlib, zstd and binutils
        ==> Installing gcc dependency: gmp
        ==> Pouring gmp--6.2.1_1.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/gmp/6.2.1_1: 23 files, 3.9MB
        ==> Installing gcc dependency: isl
        ==> Pouring isl--0.26.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/isl/0.26: 74 files, 9.8MB
        ==> Installing gcc dependency: mpfr
        ==> Pouring mpfr--4.2.0-p12.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/mpfr/4.2.0-p12: 31 files, 3.9MB
        ==> Installing gcc dependency: libmpc
        ==> Pouring libmpc--1.3.1.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/libmpc/1.3.1: 13 files, 638.3KB
        ==> Installing gcc dependency: lz4
        ==> Pouring lz4--1.9.4.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/lz4/1.9.4: 22 files, 695.3KB
        ==> Installing gcc dependency: xz
        ==> Pouring xz--5.4.4.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/xz/5.4.4: 313 files, 4MB
        ==> Installing gcc dependency: zlib
        ==> Pouring zlib--1.3.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/zlib/1.3: 13 files, 473.0KB
        ==> Installing gcc dependency: zstd
        ==> Pouring zstd--1.5.5.x86_64_linux.bottle.1.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/zstd/1.5.5: 31 files, 2.8MB
        ==> Installing gcc dependency: binutils
        ==> Pouring binutils--2.41.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/binutils/2.41: 4,729 files, 469MB
        ==> Installing gcc
        ==> Pouring gcc--13.2.0.x86_64_linux.bottle.tar.gz
        ==> Creating the GCC specs file: /home/linuxbrew/.linuxbrew/Cellar/gcc/13.2.0/bin//lib/gcc/current/gcc/x86
        🍺  /home/linuxbrew/.linuxbrew/Cellar/gcc/13.2.0: 1,668 files, 320.2MB
        ==> Running `brew cleanup gcc`...
        Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
        Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
        ```
        </details>
1.  Carbon必須パッケージ(bazel,llvm)のインストール
    *   コマンド
        ```
        brew install bazelisk llvm
        ```
        <details>
        <summary>ログ</summary>

        ```
        ==> Fetching bazelisk
        ==> Downloading https://ghcr.io/v2/homebrew/core/bazelisk/manifests/1.18.0
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/bazelisk/blobs/sha256:d9b0b8bc184b022a101560244285ee27a3c31
        ##################################################################################################### 100.0%
        ==> Fetching dependencies for llvm: mpdecimal, ca-certificates, openssl@3, ncurses, readline, sqlite, berkeley-db@5, libedit, krb5, libtirpc, libnsl, bzip2, expat, libffi, libxcrypt, unzip, python@3.11, six, z3 and elfutils
        ==> Fetching mpdecimal
        ==> Downloading https://ghcr.io/v2/homebrew/core/mpdecimal/manifests/2.5.1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/mpdecimal/blobs/sha256:c5d64a4dd47dc1b66887c0cecd884f0848a8
        ##################################################################################################### 100.0%
        ==> Fetching ca-certificates
        ==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/manifests/2023-08-22
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/blobs/sha256:68805f32523ea598c61d118e1a41cc
        ##################################################################################################### 100.0%
        ==> Fetching openssl@3
        ==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/manifests/3.1.2-1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/blobs/sha256:8e331173f849ca5d02237f086b80568aff17
        ##################################################################################################### 100.0%
        ==> Fetching ncurses
        ==> Downloading https://ghcr.io/v2/homebrew/core/ncurses/manifests/6.4-1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/ncurses/blobs/sha256:58970126fed5ca09650b60c453e2b911a85f03
        ##################################################################################################### 100.0%
        ==> Fetching readline
        ==> Downloading https://ghcr.io/v2/homebrew/core/readline/manifests/8.2.1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/readline/blobs/sha256:7dc8f7ebbfcb22adcd5535a8da083ed8aa3c4
        ##################################################################################################### 100.0%
        ==> Fetching sqlite
        ==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/manifests/3.43.0
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/blobs/sha256:35dcead7390fef5dd96c80f876b32fd988836e5
        ##################################################################################################### 100.0%
        ==> Fetching berkeley-db@5
        ==> Downloading https://ghcr.io/v2/homebrew/core/berkeley-db/5/manifests/5.3.28_1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/berkeley-db/5/blobs/sha256:c0e2906cc6657dc497fec75629560b0a
        ##################################################################################################### 100.0%
        ==> Fetching libedit
        ==> Downloading https://ghcr.io/v2/homebrew/core/libedit/manifests/20230828-3.1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/libedit/blobs/sha256:5cb9c8007d6d9b21cc81c5bcd92e50ee75bc96
        ##################################################################################################### 100.0%
        ==> Fetching krb5
        ==> Downloading https://ghcr.io/v2/homebrew/core/krb5/manifests/1.21.2
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/krb5/blobs/sha256:4bb56ec3b3263b64169a57e3722f54f60ee048a57
        ##################################################################################################### 100.0%
        ==> Fetching libtirpc
        ==> Downloading https://ghcr.io/v2/homebrew/core/libtirpc/manifests/1.3.3
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/libtirpc/blobs/sha256:26371c5e683f16a4b2ebf4475150672f76d45
        ##################################################################################################### 100.0%
        ==> Fetching libnsl
        ==> Downloading https://ghcr.io/v2/homebrew/core/libnsl/manifests/2.0.0_1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/libnsl/blobs/sha256:ed70b285939e2ab21ba53d122ce2d4beab4cd0f
        ##################################################################################################### 100.0%
        ==> Fetching bzip2
        ==> Downloading https://ghcr.io/v2/homebrew/core/bzip2/manifests/1.0.8-2
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/bzip2/blobs/sha256:a731afa70daaafec28359b4f10f1c68455c1955a
        ##################################################################################################### 100.0%
        ==> Fetching expat
        ==> Downloading https://ghcr.io/v2/homebrew/core/expat/manifests/2.5.0
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/expat/blobs/sha256:ed2b581249b57581db4178a3f219f94f75d8b540
        ##################################################################################################### 100.0%
        ==> Fetching libffi
        ==> Downloading https://ghcr.io/v2/homebrew/core/libffi/manifests/3.4.4
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/libffi/blobs/sha256:dcc9412995b5e319f64796a77b1eb8e684f1d1b
        ##################################################################################################### 100.0%
        ==> Fetching libxcrypt
        ==> Downloading https://ghcr.io/v2/homebrew/core/libxcrypt/manifests/4.4.36
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/libxcrypt/blobs/sha256:ad1c4b570d7a66046038c13345b54337d858
        ##################################################################################################### 100.0%
        ==> Fetching unzip
        ==> Downloading https://ghcr.io/v2/homebrew/core/unzip/manifests/6.0_8
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/unzip/blobs/sha256:baf15e19852a0f9756e3302fa6f3866eaeccc067
        ##################################################################################################### 100.0%
        ==> Fetching python@3.11
        ==> Downloading https://ghcr.io/v2/homebrew/core/python/3.11/manifests/3.11.5
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/python/3.11/blobs/sha256:f1eca7b66462d0075e7df897ef5a8cf56c
        ##################################################################################################### 100.0%
        ==> Fetching six
        ==> Downloading https://ghcr.io/v2/homebrew/core/six/manifests/1.16.0_3
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/six/blobs/sha256:0dee50367c6facbfc8f65e8a82bcd3e08d43da262b
        ##################################################################################################### 100.0%
        ==> Fetching z3
        ==> Downloading https://ghcr.io/v2/homebrew/core/z3/manifests/4.12.2
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/z3/blobs/sha256:2f947a5b0ea9e97728008bff971b390dc6140849ceb
        ##################################################################################################### 100.0%
        ==> Fetching elfutils
        ==> Downloading https://ghcr.io/v2/homebrew/core/elfutils/manifests/0.189-1
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/elfutils/blobs/sha256:e1116a1bf56bc021c9dd68cbe11bd2142c529
        ##################################################################################################### 100.0%
        ==> Fetching llvm
        ==> Downloading https://ghcr.io/v2/homebrew/core/llvm/manifests/16.0.6
        ##################################################################################################### 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/llvm/blobs/sha256:eac29c15c4e506aa90ab2b95d2845fea812aee43a
        ##################################################################################################### 100.0%
        ==> Pouring bazelisk--1.18.0.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/bazelisk/1.18.0: 7 files, 5.3MB
        ==> Running `brew cleanup bazelisk`...
        Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
        Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
        ==> Installing dependencies for llvm: mpdecimal, ca-certificates, openssl@3, ncurses, readline, sqlite, berkeley-db@5, libedit, krb5, libtirpc, libnsl, bzip2, expat, libffi, libxcrypt, unzip, python@3.11, six, z3 and
        elfutils
        ==> Installing llvm dependency: mpdecimal
        ==> Pouring mpdecimal--2.5.1.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/mpdecimal/2.5.1: 71 files, 2.4MB
        ==> Installing llvm dependency: ca-certificates
        ==> Pouring ca-certificates--2023-08-22.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/ca-certificates/2023-08-22: 3 files, 237.2KB
        ==> Installing llvm dependency: openssl@3
        ==> Pouring openssl@3--3.1.2.x86_64_linux.bottle.1.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/openssl@3/3.1.2: 6,504 files, 35.3MB
        ==> Installing llvm dependency: ncurses
        ==> Pouring ncurses--6.4.x86_64_linux.bottle.1.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/ncurses/6.4: 3,991 files, 10.8MB
        ==> Installing llvm dependency: readline
        ==> Pouring readline--8.2.1.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/readline/8.2.1: 50 files, 2MB
        ==> Installing llvm dependency: sqlite
        ==> Pouring sqlite--3.43.0.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/sqlite/3.43.0: 12 files, 5.9MB
        ==> Installing llvm dependency: berkeley-db@5
        ==> Pouring berkeley-db@5--5.3.28_1.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/berkeley-db@5/5.3.28_1: 5,271 files, 87.7MB
        ==> Installing llvm dependency: libedit
        ==> Pouring libedit--20230828-3.1.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/libedit/20230828-3.1: 54 files, 791.8KB
        ==> Installing llvm dependency: krb5
        ==> Pouring krb5--1.21.2.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/krb5/1.21.2: 163 files, 5.3MB
        ==> Installing llvm dependency: libtirpc
        ==> Pouring libtirpc--1.3.3.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/libtirpc/1.3.3: 85 files, 1MB
        ==> Installing llvm dependency: libnsl
        ==> Pouring libnsl--2.0.0_1.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/libnsl/2.0.0_1: 18 files, 182.2KB
        ==> Installing llvm dependency: bzip2
        ==> Pouring bzip2--1.0.8.x86_64_linux.bottle.2.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/bzip2/1.0.8: 31 files, 605KB
        ==> Installing llvm dependency: expat
        ==> Pouring expat--2.5.0.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/expat/2.5.0: 21 files, 856.9KB
        ==> Installing llvm dependency: libffi
        ==> Pouring libffi--3.4.4.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/libffi/3.4.4: 18 files, 728.9KB
        ==> Installing llvm dependency: libxcrypt
        ==> Pouring libxcrypt--4.4.36.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/libxcrypt/4.4.36: 24 files, 369.2KB
        ==> Installing llvm dependency: unzip
        ==> Pouring unzip--6.0_8.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/unzip/6.0_8: 16 files, 597.1KB
        ==> Installing llvm dependency: python@3.11
        ==> Pouring python@3.11--3.11.5.x86_64_linux.bottle.tar.gz
        ==> /home/linuxbrew/.linuxbrew/Cellar/python@3.11/3.11.5/bin/python3.11 -Im ensurepip
        ==> /home/linuxbrew/.linuxbrew/Cellar/python@3.11/3.11.5/bin/python3.11 -Im pip install -v --no-index --upgr
        🍺  /home/linuxbrew/.linuxbrew/Cellar/python@3.11/3.11.5: 2,846 files, 67.2MB
        ==> Installing llvm dependency: six
        ==> Pouring six--1.16.0_3.all.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/six/1.16.0_3: 20 files, 168.6KB
        ==> Installing llvm dependency: z3
        ==> Pouring z3--4.12.2.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/z3/4.12.2: 118 files, 44.6MB
        ==> Installing llvm dependency: elfutils
        ==> Pouring elfutils--0.189.x86_64_linux.bottle.1.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/elfutils/0.189: 66 files, 7MB
        ==> Installing llvm
        ==> Pouring llvm--16.0.6.x86_64_linux.bottle.tar.gz
        ==> Caveats
        Emacs Lisp files have been installed to:
        /home/linuxbrew/.linuxbrew/share/emacs/site-lisp/llvm
        ==> Summary
        🍺  /home/linuxbrew/.linuxbrew/Cellar/llvm/16.0.6: 6,881 files, 2GB
        ==> Running `brew cleanup llvm`...
        ==> Caveats
        ==> llvm
        Emacs Lisp files have been installed to:
        /home/linuxbrew/.linuxbrew/share/emacs/site-lisp/llvm            
        ```
        </details>
1.  carbon-explorerを実行
    -   gitからクローン
        *   コマンド
            ```
            git clone https://github.com/carbon-language/carbon-lang
            ```
            <details>
            <summary>ログ</summary>

            ```
            Cloning into 'carbon-lang'...
            remote: Enumerating objects: 36382, done.
            remote: Counting objects: 100% (1184/1184), done.
            remote: Compressing objects: 100% (624/624), done.
            remote: Total 36382 (delta 814), reused 834 (delta 557), pack-reused 35198
            Receiving objects: 100% (36382/36382), 12.68 MiB | 21.89 MiB/s, done.
            Resolving deltas: 100% (27241/27241), done.
            ```
            </details>
    -   実行
        *   コマンド
            ```
            cd carbon-lang
            bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
            ```
            <details>
            <summary>ログ</summary>
            
            ```
            2023/09/02 12:07:08 Downloading https://releases.bazel.build/6.0.0/release/bazel-6.0.0-linux-x86_64...
            Extracting Bazel installation...
            Starting local Bazel server and connecting to it...
            INFO: Invocation ID: cc011d3e-78e4-44f9-9d32-22dd59db14df
            INFO: Analyzed target //explorer:explorer (69 packages loaded, 1725 targets configured).
            INFO: Found 1 target...
            Target //explorer:explorer up-to-date:
            bazel-bin/explorer/explorer
            INFO: Elapsed time: 288.827s, Critical Path: 157.09s
            INFO: 598 processes: 163 internal, 435 linux-sandbox.
            INFO: Build completed successfully, 598 total actions
            INFO: Running command line: bazel-bin/explorer/explorer ./explorer/testdata/print/format_only.carbon
            Hello world!
            result: 0
            ```
            </details>
*   再導入（検討のみ）
    *   [Bazelのインストール](https://bazel.build/install/ubuntu?hl=ja)
    *   Clang/LLVMのインストール
        *   [【LLVM】最新のClangをaptでインストールする方法](https://e-penguiner.com/install-latest-clang/)
        *   [LLVM Debian/Ubuntu nightly packages](https://apt.llvm.org/)

            1.  リポジトリ登録
                ```
                echo 'deb http://apt.llvm.org/jammy/ llvm-toolchain-jammy-17 main' | tee /etc/apt/sources.list.d/llvm.list
                echo 'deb-src http://apt.llvm.org/jammy/ llvm-toolchain-jammy-17 main' | tee -a /etc/apt/sources.list.d/llvm.list
                wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | sudo apt-key add -
                sudo apt update
                ```
            1.  インストール
                ```
                sudo apt install clang-17
                ```
*   再確認
    -   WSL2のUbuntuを22.04.2に再更新したので、実行確認。実行できた模様。
        ![Carbon](/images/20230514_carbon_wsl2_ubuntu22.04.2.png)
### 環境構築（２回目）[on ubuntu 20.04 **@2022/11/13** <span style="color: red;">*Install Failed!*</span>]
*   carbonは、LinuxまたはMac OSが必要。
*   WindowsのWSL2であれば、Linux環境が構築できるので、下記を参考にしながら、Ubuntu20.04にインストールすることに。
    [Linux(WSL)でCarbonを動かしてみた](https://zenn.dev/shiena/articles/6ef15e65a87b96)

1.  homebrew インストール
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    <details>
    <summary>ログ</summary>

    ```
    taishow@IdeaPad550-2022:~$  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ==> Checking for `sudo` access (which may request your password)...
    ==> This script will install:
    /home/linuxbrew/.linuxbrew/bin/brew
    /home/linuxbrew/.linuxbrew/share/doc/homebrew
    /home/linuxbrew/.linuxbrew/share/man/man1/brew.1
    /home/linuxbrew/.linuxbrew/share/zsh/site-functions/_brew
    /home/linuxbrew/.linuxbrew/etc/bash_completion.d/brew
    /home/linuxbrew/.linuxbrew/Homebrew
    ==> The following new directories will be created:
    /home/linuxbrew/.linuxbrew/bin
    /home/linuxbrew/.linuxbrew/etc
    /home/linuxbrew/.linuxbrew/include
    /home/linuxbrew/.linuxbrew/lib
    /home/linuxbrew/.linuxbrew/sbin
    /home/linuxbrew/.linuxbrew/share
    /home/linuxbrew/.linuxbrew/var
    /home/linuxbrew/.linuxbrew/opt
    /home/linuxbrew/.linuxbrew/share/zsh
    /home/linuxbrew/.linuxbrew/share/zsh/site-functions
    /home/linuxbrew/.linuxbrew/var/homebrew
    /home/linuxbrew/.linuxbrew/var/homebrew/linked
    /home/linuxbrew/.linuxbrew/Cellar
    /home/linuxbrew/.linuxbrew/Caskroom
    /home/linuxbrew/.linuxbrew/Frameworks

    Press RETURN/ENTER to continue or any other key to abort:
    ==> /usr/bin/sudo /usr/bin/install -d -o taishow -g taishow -m 0755 /home/linuxbrew/.linuxbrew
    ==> /usr/bin/sudo /bin/mkdir -p /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/chmod ug=rwx /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/chmod go-w /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions
    ==> /usr/bin/sudo /bin/chown taishow /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/chgrp taishow /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/mkdir -p /home/linuxbrew/.linuxbrew/Homebrew
    ==> /usr/bin/sudo /bin/chown -R taishow:taishow /home/linuxbrew/.linuxbrew/Homebrew
    ==> Downloading and installing Homebrew...
    remote: Enumerating objects: 220293, done.
    remote: Counting objects: 100% (44/44), done.
    remote: Compressing objects: 100% (44/44), done.
    remote: Total 220293 (delta 0), reused 44 (delta 0), pack-reused 220249
    Receiving objects: 100% (220293/220293), 61.92 MiB | 4.13 MiB/s, done.
    Resolving deltas: 100% (162113/162113), done.
    From https://github.com/Homebrew/brew
    * [new branch]      dependabot/bundler/Library/Homebrew/rubocop-1.38.0 -> origin/dependabot/bundler/Library/Homebrew/rubocop-1.38.0
    * [new branch]      less-agressive-core-tap -> origin/less-agressive-core-tap
    * [new branch]      master                  -> origin/master
    * [new tag]             0.1                     -> 0.1
    * [new tag]             0.2                     -> 0.2
    * [new tag]             0.3                     -> 0.3
    * [new tag]             0.4                     -> 0.4
    * [new tag]             0.5                     -> 0.5
    * [new tag]             0.6                     -> 0.6
    * [new tag]             0.7                     -> 0.7
    * [new tag]             0.7.1                   -> 0.7.1
    * [new tag]             0.8                     -> 0.8
    * [new tag]             0.8.1                   -> 0.8.1
    * [new tag]             0.9                     -> 0.9
    * [new tag]             0.9.1                   -> 0.9.1
    * [new tag]             0.9.2                   -> 0.9.2
    * [new tag]             0.9.3                   -> 0.9.3
    * [new tag]             0.9.4                   -> 0.9.4
    * [new tag]             0.9.5                   -> 0.9.5
    * [new tag]             0.9.8                   -> 0.9.8
    * [new tag]             0.9.9                   -> 0.9.9
    * [new tag]             1.0.0                   -> 1.0.0
    * [new tag]             1.0.1                   -> 1.0.1
    * [new tag]             1.0.2                   -> 1.0.2
    * [new tag]             1.0.3                   -> 1.0.3
    * [new tag]             1.0.4                   -> 1.0.4
    * [new tag]             1.0.5                   -> 1.0.5
    * [new tag]             1.0.6                   -> 1.0.6
    * [new tag]             1.0.7                   -> 1.0.7
    * [new tag]             1.0.8                   -> 1.0.8
    * [new tag]             1.0.9                   -> 1.0.9
    * [new tag]             1.1.0                   -> 1.1.0
    * [new tag]             1.1.1                   -> 1.1.1
    * [new tag]             1.1.10                  -> 1.1.10
    * [new tag]             1.1.11                  -> 1.1.11
    * [new tag]             1.1.12                  -> 1.1.12
    * [new tag]             1.1.13                  -> 1.1.13
    * [new tag]             1.1.2                   -> 1.1.2
    * [new tag]             1.1.3                   -> 1.1.3
    * [new tag]             1.1.4                   -> 1.1.4
    * [new tag]             1.1.5                   -> 1.1.5
    * [new tag]             1.1.6                   -> 1.1.6
    * [new tag]             1.1.7                   -> 1.1.7
    * [new tag]             1.1.8                   -> 1.1.8
    * [new tag]             1.1.9                   -> 1.1.9
    * [new tag]             1.2.0                   -> 1.2.0
    * [new tag]             1.2.1                   -> 1.2.1
    * [new tag]             1.2.2                   -> 1.2.2
    * [new tag]             1.2.3                   -> 1.2.3
    * [new tag]             1.2.4                   -> 1.2.4
    * [new tag]             1.2.5                   -> 1.2.5
    * [new tag]             1.2.6                   -> 1.2.6
    * [new tag]             1.3.0                   -> 1.3.0
    * [new tag]             1.3.1                   -> 1.3.1
    * [new tag]             1.3.2                   -> 1.3.2
    * [new tag]             1.3.3                   -> 1.3.3
    * [new tag]             1.3.4                   -> 1.3.4
    * [new tag]             1.3.5                   -> 1.3.5
    * [new tag]             1.3.6                   -> 1.3.6
    * [new tag]             1.3.7                   -> 1.3.7
    * [new tag]             1.3.8                   -> 1.3.8
    * [new tag]             1.3.9                   -> 1.3.9
    * [new tag]             1.4.0                   -> 1.4.0
    * [new tag]             1.4.1                   -> 1.4.1
    * [new tag]             1.4.2                   -> 1.4.2
    * [new tag]             1.4.3                   -> 1.4.3
    * [new tag]             1.5.0                   -> 1.5.0
    * [new tag]             1.5.1                   -> 1.5.1
    * [new tag]             1.5.10                  -> 1.5.10
    * [new tag]             1.5.11                  -> 1.5.11
    * [new tag]             1.5.12                  -> 1.5.12
    * [new tag]             1.5.13                  -> 1.5.13
    * [new tag]             1.5.14                  -> 1.5.14
    * [new tag]             1.5.2                   -> 1.5.2
    * [new tag]             1.5.3                   -> 1.5.3
    * [new tag]             1.5.4                   -> 1.5.4
    * [new tag]             1.5.5                   -> 1.5.5
    * [new tag]             1.5.6                   -> 1.5.6
    * [new tag]             1.5.7                   -> 1.5.7
    * [new tag]             1.5.8                   -> 1.5.8
    * [new tag]             1.5.9                   -> 1.5.9
    * [new tag]             1.6.0                   -> 1.6.0
    * [new tag]             1.6.1                   -> 1.6.1
    * [new tag]             1.6.10                  -> 1.6.10
    * [new tag]             1.6.11                  -> 1.6.11
    * [new tag]             1.6.12                  -> 1.6.12
    * [new tag]             1.6.13                  -> 1.6.13
    * [new tag]             1.6.14                  -> 1.6.14
    * [new tag]             1.6.15                  -> 1.6.15
    * [new tag]             1.6.16                  -> 1.6.16
    * [new tag]             1.6.17                  -> 1.6.17
    * [new tag]             1.6.2                   -> 1.6.2
    * [new tag]             1.6.3                   -> 1.6.3
    * [new tag]             1.6.4                   -> 1.6.4
    * [new tag]             1.6.5                   -> 1.6.5
    * [new tag]             1.6.6                   -> 1.6.6
    * [new tag]             1.6.7                   -> 1.6.7
    * [new tag]             1.6.8                   -> 1.6.8
    * [new tag]             1.6.9                   -> 1.6.9
    * [new tag]             1.7.0                   -> 1.7.0
    * [new tag]             1.7.1                   -> 1.7.1
    * [new tag]             1.7.2                   -> 1.7.2
    * [new tag]             1.7.3                   -> 1.7.3
    * [new tag]             1.7.4                   -> 1.7.4
    * [new tag]             1.7.5                   -> 1.7.5
    * [new tag]             1.7.6                   -> 1.7.6
    * [new tag]             1.7.7                   -> 1.7.7
    * [new tag]             1.8.0                   -> 1.8.0
    * [new tag]             1.8.1                   -> 1.8.1
    * [new tag]             1.8.2                   -> 1.8.2
    * [new tag]             1.8.3                   -> 1.8.3
    * [new tag]             1.8.4                   -> 1.8.4
    * [new tag]             1.8.5                   -> 1.8.5
    * [new tag]             1.8.6                   -> 1.8.6
    * [new tag]             1.9.0                   -> 1.9.0
    * [new tag]             1.9.1                   -> 1.9.1
    * [new tag]             1.9.2                   -> 1.9.2
    * [new tag]             1.9.3                   -> 1.9.3
    * [new tag]             2.0.0                   -> 2.0.0
    * [new tag]             2.0.1                   -> 2.0.1
    * [new tag]             2.0.2                   -> 2.0.2
    * [new tag]             2.0.3                   -> 2.0.3
    * [new tag]             2.0.4                   -> 2.0.4
    * [new tag]             2.0.5                   -> 2.0.5
    * [new tag]             2.0.6                   -> 2.0.6
    * [new tag]             2.1.0                   -> 2.1.0
    * [new tag]             2.1.1                   -> 2.1.1
    * [new tag]             2.1.10                  -> 2.1.10
    * [new tag]             2.1.11                  -> 2.1.11
    * [new tag]             2.1.12                  -> 2.1.12
    * [new tag]             2.1.13                  -> 2.1.13
    * [new tag]             2.1.14                  -> 2.1.14
    * [new tag]             2.1.15                  -> 2.1.15
    * [new tag]             2.1.16                  -> 2.1.16
    * [new tag]             2.1.2                   -> 2.1.2
    * [new tag]             2.1.3                   -> 2.1.3
    * [new tag]             2.1.4                   -> 2.1.4
    * [new tag]             2.1.5                   -> 2.1.5
    * [new tag]             2.1.6                   -> 2.1.6
    * [new tag]             2.1.7                   -> 2.1.7
    * [new tag]             2.1.8                   -> 2.1.8
    * [new tag]             2.1.9                   -> 2.1.9
    * [new tag]             2.2.0                   -> 2.2.0
    * [new tag]             2.2.1                   -> 2.2.1
    * [new tag]             2.2.10                  -> 2.2.10
    * [new tag]             2.2.11                  -> 2.2.11
    * [new tag]             2.2.12                  -> 2.2.12
    * [new tag]             2.2.13                  -> 2.2.13
    * [new tag]             2.2.14                  -> 2.2.14
    * [new tag]             2.2.15                  -> 2.2.15
    * [new tag]             2.2.16                  -> 2.2.16
    * [new tag]             2.2.17                  -> 2.2.17
    * [new tag]             2.2.2                   -> 2.2.2
    * [new tag]             2.2.3                   -> 2.2.3
    * [new tag]             2.2.4                   -> 2.2.4
    * [new tag]             2.2.5                   -> 2.2.5
    * [new tag]             2.2.6                   -> 2.2.6
    * [new tag]             2.2.7                   -> 2.2.7
    * [new tag]             2.2.8                   -> 2.2.8
    * [new tag]             2.2.9                   -> 2.2.9
    * [new tag]             2.3.0                   -> 2.3.0
    * [new tag]             2.4.0                   -> 2.4.0
    * [new tag]             2.4.1                   -> 2.4.1
    * [new tag]             2.4.10                  -> 2.4.10
    * [new tag]             2.4.11                  -> 2.4.11
    * [new tag]             2.4.12                  -> 2.4.12
    * [new tag]             2.4.13                  -> 2.4.13
    * [new tag]             2.4.14                  -> 2.4.14
    * [new tag]             2.4.15                  -> 2.4.15
    * [new tag]             2.4.16                  -> 2.4.16
    * [new tag]             2.4.2                   -> 2.4.2
    * [new tag]             2.4.3                   -> 2.4.3
    * [new tag]             2.4.4                   -> 2.4.4
    * [new tag]             2.4.5                   -> 2.4.5
    * [new tag]             2.4.6                   -> 2.4.6
    * [new tag]             2.4.7                   -> 2.4.7
    * [new tag]             2.4.8                   -> 2.4.8
    * [new tag]             2.4.9                   -> 2.4.9
    * [new tag]             2.5.0                   -> 2.5.0
    * [new tag]             2.5.1                   -> 2.5.1
    * [new tag]             2.5.10                  -> 2.5.10
    * [new tag]             2.5.11                  -> 2.5.11
    * [new tag]             2.5.12                  -> 2.5.12
    * [new tag]             2.5.2                   -> 2.5.2
    * [new tag]             2.5.3                   -> 2.5.3
    * [new tag]             2.5.4                   -> 2.5.4
    * [new tag]             2.5.5                   -> 2.5.5
    * [new tag]             2.5.6                   -> 2.5.6
    * [new tag]             2.5.7                   -> 2.5.7
    * [new tag]             2.5.8                   -> 2.5.8
    * [new tag]             2.5.9                   -> 2.5.9
    * [new tag]             2.6.0                   -> 2.6.0
    * [new tag]             2.6.1                   -> 2.6.1
    * [new tag]             2.6.2                   -> 2.6.2
    * [new tag]             2.7.0                   -> 2.7.0
    * [new tag]             2.7.1                   -> 2.7.1
    * [new tag]             2.7.2                   -> 2.7.2
    * [new tag]             2.7.3                   -> 2.7.3
    * [new tag]             2.7.4                   -> 2.7.4
    * [new tag]             2.7.5                   -> 2.7.5
    * [new tag]             2.7.6                   -> 2.7.6
    * [new tag]             2.7.7                   -> 2.7.7
    * [new tag]             3.0.0                   -> 3.0.0
    * [new tag]             3.0.1                   -> 3.0.1
    * [new tag]             3.0.10                  -> 3.0.10
    * [new tag]             3.0.11                  -> 3.0.11
    * [new tag]             3.0.2                   -> 3.0.2
    * [new tag]             3.0.3                   -> 3.0.3
    * [new tag]             3.0.4                   -> 3.0.4
    * [new tag]             3.0.5                   -> 3.0.5
    * [new tag]             3.0.6                   -> 3.0.6
    * [new tag]             3.0.7                   -> 3.0.7
    * [new tag]             3.0.8                   -> 3.0.8
    * [new tag]             3.0.9                   -> 3.0.9
    * [new tag]             3.1.0                   -> 3.1.0
    * [new tag]             3.1.1                   -> 3.1.1
    * [new tag]             3.1.10                  -> 3.1.10
    * [new tag]             3.1.11                  -> 3.1.11
    * [new tag]             3.1.12                  -> 3.1.12
    * [new tag]             3.1.2                   -> 3.1.2
    * [new tag]             3.1.3                   -> 3.1.3
    * [new tag]             3.1.4                   -> 3.1.4
    * [new tag]             3.1.5                   -> 3.1.5
    * [new tag]             3.1.6                   -> 3.1.6
    * [new tag]             3.1.7                   -> 3.1.7
    * [new tag]             3.1.8                   -> 3.1.8
    * [new tag]             3.1.9                   -> 3.1.9
    * [new tag]             3.2.0                   -> 3.2.0
    * [new tag]             3.2.1                   -> 3.2.1
    * [new tag]             3.2.10                  -> 3.2.10
    * [new tag]             3.2.11                  -> 3.2.11
    * [new tag]             3.2.12                  -> 3.2.12
    * [new tag]             3.2.13                  -> 3.2.13
    * [new tag]             3.2.14                  -> 3.2.14
    * [new tag]             3.2.15                  -> 3.2.15
    * [new tag]             3.2.16                  -> 3.2.16
    * [new tag]             3.2.17                  -> 3.2.17
    * [new tag]             3.2.2                   -> 3.2.2
    * [new tag]             3.2.3                   -> 3.2.3
    * [new tag]             3.2.4                   -> 3.2.4
    * [new tag]             3.2.5                   -> 3.2.5
    * [new tag]             3.2.6                   -> 3.2.6
    * [new tag]             3.2.7                   -> 3.2.7
    * [new tag]             3.2.8                   -> 3.2.8
    * [new tag]             3.2.9                   -> 3.2.9
    * [new tag]             3.3.0                   -> 3.3.0
    * [new tag]             3.3.1                   -> 3.3.1
    * [new tag]             3.3.10                  -> 3.3.10
    * [new tag]             3.3.11                  -> 3.3.11
    * [new tag]             3.3.12                  -> 3.3.12
    * [new tag]             3.3.13                  -> 3.3.13
    * [new tag]             3.3.14                  -> 3.3.14
    * [new tag]             3.3.15                  -> 3.3.15
    * [new tag]             3.3.16                  -> 3.3.16
    * [new tag]             3.3.2                   -> 3.3.2
    * [new tag]             3.3.3                   -> 3.3.3
    * [new tag]             3.3.4                   -> 3.3.4
    * [new tag]             3.3.5                   -> 3.3.5
    * [new tag]             3.3.6                   -> 3.3.6
    * [new tag]             3.3.7                   -> 3.3.7
    * [new tag]             3.3.8                   -> 3.3.8
    * [new tag]             3.3.9                   -> 3.3.9
    * [new tag]             3.4.0                   -> 3.4.0
    * [new tag]             3.4.1                   -> 3.4.1
    * [new tag]             3.4.10                  -> 3.4.10
    * [new tag]             3.4.11                  -> 3.4.11
    * [new tag]             3.4.2                   -> 3.4.2
    * [new tag]             3.4.3                   -> 3.4.3
    * [new tag]             3.4.4                   -> 3.4.4
    * [new tag]             3.4.5                   -> 3.4.5
    * [new tag]             3.4.6                   -> 3.4.6
    * [new tag]             3.4.7                   -> 3.4.7
    * [new tag]             3.4.8                   -> 3.4.8
    * [new tag]             3.4.9                   -> 3.4.9
    * [new tag]             3.5.0                   -> 3.5.0
    * [new tag]             3.5.1                   -> 3.5.1
    * [new tag]             3.5.10                  -> 3.5.10
    * [new tag]             3.5.2                   -> 3.5.2
    * [new tag]             3.5.3                   -> 3.5.3
    * [new tag]             3.5.4                   -> 3.5.4
    * [new tag]             3.5.5                   -> 3.5.5
    * [new tag]             3.5.6                   -> 3.5.6
    * [new tag]             3.5.7                   -> 3.5.7
    * [new tag]             3.5.8                   -> 3.5.8
    * [new tag]             3.5.9                   -> 3.5.9
    * [new tag]             3.6.0                   -> 3.6.0
    * [new tag]             3.6.1                   -> 3.6.1
    * [new tag]             3.6.10                  -> 3.6.10
    * [new tag]             3.6.2                   -> 3.6.2
    * [new tag]             3.6.3                   -> 3.6.3
    * [new tag]             3.6.4                   -> 3.6.4
    * [new tag]             3.6.5                   -> 3.6.5
    * [new tag]             3.6.6                   -> 3.6.6
    * [new tag]             3.6.7                   -> 3.6.7
    * [new tag]             3.6.8                   -> 3.6.8
    * [new tag]             3.6.9                   -> 3.6.9
    HEAD is now at b683bebd2 Merge pull request #14139 from EricFromCanada/rubydoc-fixes
    ==> Tapping homebrew/core
    remote: Enumerating objects: 1331070, done.
    remote: Counting objects: 100% (741/741), done.
    remote: Compressing objects: 100% (380/380), done.
    remote: Total 1331070 (delta 412), reused 687 (delta 361), pack-reused 1330329
    Receiving objects: 100% (1331070/1331070), 507.35 MiB | 2.92 MiB/s, done.
    Resolving deltas: 100% (923360/923360), done.
    From https://github.com/Homebrew/homebrew-core
    * [new branch]      master     -> origin/master
    HEAD is now at 522d42deab7 citus: change head branch to main
    ==> Downloading https://ghcr.io/v2/homebrew/portable-ruby/portable-ruby/blobs/sha256:fc45ee6eddf4c7a17f4373dde7b1bc8a58255ea61e6847d3bf895225b28d072a
    ######################################################################## 100.0%
    ==> Pouring portable-ruby-2.6.8_1.x86_64_linux.bottle.tar.gz
    Warning: /home/linuxbrew/.linuxbrew/bin is not in your PATH.
    Instructions on how to configure your shell for Homebrew
    can be found in the 'Next steps' section below.
    ==> Installation successful!

    ==> Homebrew has enabled anonymous aggregate formulae and cask analytics.
    Read the analytics documentation (and how to opt-out) here:
    https://docs.brew.sh/Analytics
    No analytics data has been sent yet (nor will any be during this install run).

    ==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
    https://github.com/Homebrew/brew#donations

    ==> Next steps:
    - Run these three commands in your terminal to add Homebrew to your PATH:
        echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /home/taishow/.profile
        echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/taishow/.profile
        eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
    - Install Homebrew's dependencies if you have sudo access:
        sudo apt-get install build-essential
    For more information, see:
        https://docs.brew.sh/Homebrew-on-Linux
    - We recommend that you install GCC:
        brew install gcc
    - Run brew help to get started
    - Further documentation:
        https://docs.brew.sh
    ```
1.  gccインストール
    ```
    brew install gcc
    ```
    <details>
    <summary>ログ</summary>

    ```
    taishow@IdeaPad550-2022:~$ brew install gcc
    ==> Downloading https://ghcr.io/v2/homebrew/core/linux-headers/5.15/manifests/5.15.57-1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/linux-headers/5.15/blobs/sha256:8692682830cbb1fb74bb61190b644da9de0f4c3
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:8692682830cbb1fb74bb61190b644da9de0
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/glibc/manifests/2.35_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/glibc/blobs/sha256:274dd06ae6ecaee3025d6bf21cf4c7641df9a1cc3973e162911a
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:274dd06ae6ecaee3025d6bf21cf4c7641df
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/gmp/manifests/6.2.1_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/gmp/blobs/sha256:786ae29f0c0b06ea86e42bd9c6ac2c49bd5757da037dead7053e8b
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:786ae29f0c0b06ea86e42bd9c6ac2c49bd5
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/isl/manifests/0.25
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/isl/blobs/sha256:c0244c95ed9cc89b826868de83bec3150fcc120add126501717677
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:c0244c95ed9cc89b826868de83bec3150fc
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/mpfr/manifests/4.1.0-p13
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/mpfr/blobs/sha256:345a3d99db0f4149f84f0aa16c0ee9c4275f695e4fa0f6d2ae1e8
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:345a3d99db0f4149f84f0aa16c0ee9c4275
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libmpc/manifests/1.2.1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libmpc/blobs/sha256:d74eb5f1377d8fa72fad88baca1bd5f00c29d45ba186fbec89a
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:d74eb5f1377d8fa72fad88baca1bd5f00c2
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.9.4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/lz4/blobs/sha256:1757fefc3840e11c4822e4c2a95aa62aca44a4eaccce6f5c414ea5
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:1757fefc3840e11c4822e4c2a95aa62aca4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/xz/manifests/5.2.7
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/xz/blobs/sha256:dda25f66145c180884d0550a36d68491abd648011b9ac9156677396
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:dda25f66145c180884d0550a36d68491abd
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zlib/manifests/1.2.13
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zlib/blobs/sha256:0082aa29a61507e237389ee4e9fb6a6ed0cbd5d341e3905527c08
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:0082aa29a61507e237389ee4e9fb6a6ed0c
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zstd/manifests/1.5.2-3
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zstd/blobs/sha256:006b5ab6a4616a8b6f59953cb9efb546d312e3ba231c303bb5674
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:006b5ab6a4616a8b6f59953cb9efb546d31
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/binutils/manifests/2.39_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/binutils/blobs/sha256:efa7497e2ea56d9b68ce41363cdc1a41cad032b3ae2fa2cbe
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:efa7497e2ea56d9b68ce41363cdc1a41cad
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/gcc/manifests/12.2.0-1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/gcc/blobs/sha256:c7f773f9af560766b2d971d815a8d224c267088c05ed1f2b864bd1
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:c7f773f9af560766b2d971d815a8d224c26
    ######################################################################## 100.0%
    ==> Installing dependencies for gcc: linux-headers@5.15, glibc, gmp, isl, mpfr, libmpc, lz4, xz, zlib, zstd and binutils
    ==> Installing gcc dependency: linux-headers@5.15
    ==> Pouring linux-headers@5.15--5.15.57.x86_64_linux.bottle.1.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/linux-headers@5.15/5.15.57: 963 files, 5.7MB
    ==> Installing gcc dependency: glibc
    ==> Pouring glibc--2.35_1.x86_64_linux.bottle.tar.gz
    ==> /home/linuxbrew/.linuxbrew/Cellar/glibc/2.35_1/sbin/ldconfig
    ==> Installing locale data for en_US.UTF-8
    ==> /home/linuxbrew/.linuxbrew/Cellar/glibc/2.35_1/bin/localedef -i en_US -f UTF-8 en_US.UTF-8
    🍺  /home/linuxbrew/.linuxbrew/Cellar/glibc/2.35_1: 1,404 files, 47MB
    ==> Installing gcc dependency: gmp
    ==> Pouring gmp--6.2.1_1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/gmp/6.2.1_1: 23 files, 3.9MB
    ==> Installing gcc dependency: isl
    ==> Pouring isl--0.25.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/isl/0.25: 74 files, 9.2MB
    ==> Installing gcc dependency: mpfr
    ==> Pouring mpfr--4.1.0-p13.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/mpfr/4.1.0-p13: 31 files, 6.0MB
    ==> Installing gcc dependency: libmpc
    ==> Pouring libmpc--1.2.1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/libmpc/1.2.1: 13 files, 550.2KB
    ==> Installing gcc dependency: lz4
    ==> Pouring lz4--1.9.4.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/lz4/1.9.4: 22 files, 695.6KB
    ==> Installing gcc dependency: xz
    ==> Pouring xz--5.2.7.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/xz/5.2.7: 151 files, 2.5MB
    ==> Installing gcc dependency: zlib
    ==> Pouring zlib--1.2.13.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/zlib/1.2.13: 13 files, 472.7KB
    ==> Installing gcc dependency: zstd
    ==> Pouring zstd--1.5.2.x86_64_linux.bottle.3.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/zstd/1.5.2: 31 files, 2.6MB
    ==> Installing gcc dependency: binutils
    ==> Pouring binutils--2.39_1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/binutils/2.39_1: 4,687 files, 370.5MB
    ==> Installing gcc
    ==> Pouring gcc--12.2.0.x86_64_linux.bottle.1.tar.gz
    ==> Creating the GCC specs file: /home/linuxbrew/.linuxbrew/Cellar/gcc/12.2.0/bin//lib/gcc/current/gcc/x86_64-pc-linux
    🍺  /home/linuxbrew/.linuxbrew/Cellar/gcc/12.2.0: 1,633 files, 306.4MB
    ==> Running `brew cleanup gcc`...
    Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
    Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
    ```
1.  Homebrewで必須パッケージのインストール
    ```
    brew install bazelisk llvm
    ```
    <details>
    <summary>ログ</summary>

    ```
    taishow@IdeaPad550-2022:~$ brew install bazelisk llvm
    ==> Downloading https://ghcr.io/v2/homebrew/core/bazelisk/manifests/1.15.0
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/bazelisk/blobs/sha256:03a1c1c57e7ca4b69c3ff1715a6b9263bd82d518fe1ca7be1
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:03a1c1c57e7ca4b69c3ff1715a6b9263bd8
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/mpdecimal/manifests/2.5.1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/mpdecimal/blobs/sha256:c5d64a4dd47dc1b66887c0cecd884f0848a801cb2f684cde
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:c5d64a4dd47dc1b66887c0cecd884f0848a
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/manifests/2022-10-11
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/blobs/sha256:1b264e579e31b3041a87ff91f09d5f7cc0d51fea1c
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:1b264e579e31b3041a87ff91f09d5f7cc0d
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/manifests/1.1.1s
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/blobs/sha256:b7c45d0cd6d99a60b1fe7511db1dd46bf2c52b2575dbf8
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:b7c45d0cd6d99a60b1fe7511db1dd46bf2c
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/ncurses/manifests/6.3
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/ncurses/blobs/sha256:09c1d079d3b5cf1c855afa9da1fc7251234b73971d4cbe0bf7
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:09c1d079d3b5cf1c855afa9da1fc7251234
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/readline/manifests/8.2.1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/readline/blobs/sha256:7dc8f7ebbfcb22adcd5535a8da083ed8aa3c42c8579c465a2
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:7dc8f7ebbfcb22adcd5535a8da083ed8aa3
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/manifests/3.39.4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/blobs/sha256:860c9a2682f775c298770caa3d667d8f4e598a9693bcdab4a8d
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:860c9a2682f775c298770caa3d667d8f4e5
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/bzip2/manifests/1.0.8-1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/bzip2/blobs/sha256:c9e18abf0be3de0f15101a7411aa05a65807b0f9c8f68d634b91
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:c9e18abf0be3de0f15101a7411aa05a6580
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/expat/manifests/2.5.0
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/expat/blobs/sha256:ed2b581249b57581db4178a3f219f94f75d8b540867cc27fe1b8
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:ed2b581249b57581db4178a3f219f94f75d
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libedit/manifests/20221030-3.1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libedit/blobs/sha256:bee1f6bfb90dd3c9b26ce4732e04025a468fe2fa29d63049cb
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:bee1f6bfb90dd3c9b26ce4732e04025a468
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libffi/manifests/3.4.4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libffi/blobs/sha256:dcc9412995b5e319f64796a77b1eb8e684f1d1b6b5d7ac824f4
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:dcc9412995b5e319f64796a77b1eb8e684f
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libxcrypt/manifests/4.4.29
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libxcrypt/blobs/sha256:3e2de70a22e315a97f1d49f5b172e66a4d0e78699381c8c6
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:3e2de70a22e315a97f1d49f5b172e66a4d0
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/unzip/manifests/6.0_8
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/unzip/blobs/sha256:baf15e19852a0f9756e3302fa6f3866eaeccc06730c9907bffc1
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:baf15e19852a0f9756e3302fa6f3866eaec
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/berkeley-db/5/manifests/5.3.28_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/berkeley-db/5/blobs/sha256:c0e2906cc6657dc497fec75629560b0a404b81cebadf
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:c0e2906cc6657dc497fec75629560b0a404
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/m4/manifests/1.4.19
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/m4/blobs/sha256:f6d1087a51e0ff2e582b3043a25a51b67971b2246cf65167ef3abf1
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:f6d1087a51e0ff2e582b3043a25a51b6797
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/bison/manifests/3.8.2
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/bison/blobs/sha256:d708c29c7e44f28a4fa77d353ff7adfbe673b31cef6f24c3c384
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:d708c29c7e44f28a4fa77d353ff7adfbe67
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/krb5/manifests/1.20
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/krb5/blobs/sha256:17c3f6518fc7f836cd1bcc8ae0f2d8a8cc9d8ca063fa78d2faaf6
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:17c3f6518fc7f836cd1bcc8ae0f2d8a8cc9
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libtirpc/manifests/1.3.3
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libtirpc/blobs/sha256:26371c5e683f16a4b2ebf4475150672f76d45e3d43583c942
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:26371c5e683f16a4b2ebf4475150672f76d
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libnsl/manifests/2.0.0_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libnsl/blobs/sha256:ed70b285939e2ab21ba53d122ce2d4beab4cd0f9c86925c3d3a
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:ed70b285939e2ab21ba53d122ce2d4beab4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/python/3.11/manifests/3.11.0
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/python/3.11/blobs/sha256:b9cbd3443baea4eccfdb88dac7a9d83f4a6405ae1474ad
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:b9cbd3443baea4eccfdb88dac7a9d83f4a6
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/six/manifests/1.16.0_3
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/six/blobs/sha256:0dee50367c6facbfc8f65e8a82bcd3e08d43da262b1adff6ccf943
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:0dee50367c6facbfc8f65e8a82bcd3e08d4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/z3/manifests/4.11.2-2
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/z3/blobs/sha256:cf1f56a098a185de89c0fb2341cbae1e8f8a0aa0de74623db7d45e2
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:cf1f56a098a185de89c0fb2341cbae1e8f8
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/elfutils/manifests/0.188
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/elfutils/blobs/sha256:983caa6f06b51634dc97b1cbe20ae78d2af6b6d6fbef80cb6
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:983caa6f06b51634dc97b1cbe20ae78d2af
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/llvm/manifests/15.0.4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/llvm/blobs/sha256:0bf9e38aa2205a1f621b51018a30730b587afd5732945d3b9356e
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:0bf9e38aa2205a1f621b51018a30730b587
    ######################################################################## 100.0%
    ==> Pouring bazelisk--1.15.0.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/bazelisk/1.15.0: 7 files, 5MB
    ==> Running `brew cleanup bazelisk`...
    Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
    Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
    ==> Installing dependencies for llvm: mpdecimal, ca-certificates, openssl@1.1, ncurses, readline, sqlite, bzip2, expat, libedit, libffi, libxcrypt, unzip, berkeley-db@5, m4, bison, krb5, libtirpc, libnsl, python@3.11, six, z3 and elfutils
    ==> Installing llvm dependency: mpdecimal
    ==> Pouring mpdecimal--2.5.1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/mpdecimal/2.5.1: 71 files, 2.4MB
    ==> Installing llvm dependency: ca-certificates
    ==> Pouring ca-certificates--2022-10-11.all.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/ca-certificates/2022-10-11: 3 files, 241.3KB
    ==> Installing llvm dependency: openssl@1.1
    ==> Pouring openssl@1.1--1.1.1s.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/openssl@1.1/1.1.1s: 8,409 files, 24.4MB
    ==> Installing llvm dependency: ncurses
    ==> Pouring ncurses--6.3.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/ncurses/6.3: 3,958 files, 9.9MB
    ==> Installing llvm dependency: readline
    ==> Pouring readline--8.2.1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/readline/8.2.1: 50 files, 2MB
    ==> Installing llvm dependency: sqlite
    ==> Pouring sqlite--3.39.4.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/sqlite/3.39.4: 12 files, 5.6MB
    ==> Installing llvm dependency: bzip2
    ==> Pouring bzip2--1.0.8.x86_64_linux.bottle.1.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/bzip2/1.0.8: 30 files, 550.0KB
    ==> Installing llvm dependency: expat
    ==> Pouring expat--2.5.0.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/expat/2.5.0: 21 files, 857.1KB
    ==> Installing llvm dependency: libedit
    ==> Pouring libedit--20221030-3.1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/libedit/20221030-3.1: 54 files, 793.1KB
    ==> Installing llvm dependency: libffi
    ==> Pouring libffi--3.4.4.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/libffi/3.4.4: 18 files, 729.2KB
    ==> Installing llvm dependency: libxcrypt
    ==> Pouring libxcrypt--4.4.29.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/libxcrypt/4.4.29: 24 files, 367KB
    ==> Installing llvm dependency: unzip
    ==> Pouring unzip--6.0_8.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/unzip/6.0_8: 16 files, 597.4KB
    ==> Installing llvm dependency: berkeley-db@5
    ==> Pouring berkeley-db@5--5.3.28_1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/berkeley-db@5/5.3.28_1: 5,271 files, 87.7MB
    ==> Installing llvm dependency: m4
    ==> Pouring m4--1.4.19.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/m4/1.4.19: 39 files, 1.1MB
    ==> Installing llvm dependency: bison
    ==> Pouring bison--3.8.2.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/bison/3.8.2: 208 files, 5.0MB
    ==> Installing llvm dependency: krb5
    ==> Pouring krb5--1.20.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/krb5/1.20: 165 files, 5.2MB
    ==> Installing llvm dependency: libtirpc
    ==> Pouring libtirpc--1.3.3.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/libtirpc/1.3.3: 85 files, 1MB
    ==> Installing llvm dependency: libnsl
    ==> Pouring libnsl--2.0.0_1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/libnsl/2.0.0_1: 18 files, 182.4KB
    ==> Installing llvm dependency: python@3.11
    ==> Pouring python@3.11--3.11.0.x86_64_linux.bottle.tar.gz
    ==> /home/linuxbrew/.linuxbrew/Cellar/python@3.11/3.11.0/bin/python3.11 -m ensurepip
    ==> /home/linuxbrew/.linuxbrew/Cellar/python@3.11/3.11.0/bin/python3.11 -m pip install -v --no-deps --no-index --upgrade
    🍺  /home/linuxbrew/.linuxbrew/Cellar/python@3.11/3.11.0: 2,730 files, 66.7MB
    ==> Installing llvm dependency: six
    ==> Pouring six--1.16.0_3.all.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/six/1.16.0_3: 20 files, 169.8KB
    ==> Installing llvm dependency: z3
    ==> Pouring z3--4.11.2.x86_64_linux.bottle.2.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/z3/4.11.2: 142 files, 43.6MB
    ==> Installing llvm dependency: elfutils
    ==> Pouring elfutils--0.188.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/elfutils/0.188: 66 files, 7MB
    ==> Installing llvm
    ==> Pouring llvm--15.0.4.x86_64_linux.bottle.tar.gz
    ==> Caveats
    Emacs Lisp files have been installed to:
    /home/linuxbrew/.linuxbrew/share/emacs/site-lisp/llvm
    ==> Summary
    🍺  /home/linuxbrew/.linuxbrew/Cellar/llvm/15.0.4: 6,512 files, 1.9GB
    ==> Running `brew cleanup llvm`...
    ==> Caveats
    ==> llvm
    Emacs Lisp files have been installed to:
    /home/linuxbrew/.linuxbrew/share/emacs/site-lisp/llvm
    ```
    ```
    echo 'export PATH="$(brew --prefix llvm)/bin:${PATH}"' >> ~/.profile
    export PATH="$(brew --prefix llvm)/bin:${PATH}"
    ```
    </details>
1.  carbon-explorerを実行
    -   gitからクローン
        ```
        git clone https://github.com/carbon-language/carbon-lang
        ```
        <details>
        <summary>ログ</summary>

        ```
        Cloning into 'carbon-lang'...
        remote: Enumerating objects: 21442, done.
        remote: Counting objects: 100% (231/231), done.
        remote: Compressing objects: 100% (190/190), done.
        remote: Total 21442 (delta 124), reused 87 (delta 41), pack-reused 21211
        Receiving objects: 100% (21442/21442), 7.43 MiB | 5.07 MiB/s, done.
        Resolving deltas: 100% (14801/14801), done.
        ```
    -   実行
        <details>
        <summary>ログ</summary>

        ```
        cd carbon-lang
        bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
        ```
        ```
        taishow@IdeaPad550-2022:~$ cd carbon-lang
        taishow@IdeaPad550-2022:~/carbon-lang$ bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
        2022/11/13 17:52:06 Downloading https://releases.bazel.build/5.1.1/release/bazel-5.1.1-linux-x86_64...
        Extracting Bazel installation...
        Starting local Bazel server and connecting to it...
        INFO: Invocation ID: 414b8300-97bf-4ee9-b09d-f7994e6c33c2
        WARNING: Download from https://mirror.bazel.build/ftp.gnu.org/gnu/m4/m4-1.4.18.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        WARNING: Download from https://mirror.bazel.build/github.com/jmillikin/rules_m4/releases/download/v0.1/m4-gnulib-788db09a9f88abbef73c97e8d7291c40455336d8.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        WARNING: Download from https://mirror.bazel.build/ftp.gnu.org/gnu/bison/bison-3.3.2.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        WARNING: Download from https://mirror.bazel.build/github.com/jmillikin/rules_bison/releases/download/v0.1/bison-gnulib-788db09a9f88abbef73c97e8d7291c40455336d8.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        INFO: Analyzed target //explorer:explorer (68 packages loaded, 1569 targets configured).
        INFO: Found 1 target...
        Target //explorer:explorer up-to-date:
        bazel-bin/explorer/explorer
        INFO: Elapsed time: 210.275s, Critical Path: 75.61s
        INFO: 545 processes: 161 internal, 384 linux-sandbox.
        INFO: Build completed successfully, 545 total actions
        INFO: Build completed successfully, 545 total actions
        ==15803==ERROR: AddressSanitizer failed to allocate 0x0 (0) bytes of SetAlternateSignalStack (error code: 22)
        ==15803==Process memory map follows:
                0x00007fff7000-0x00008fff7000
                0x00008fff7000-0x02008fff7000
                0x02008fff7000-0x10007fff8000
                0x56282fe57000-0x562830343000   /home/taishow/.cache/bazel/_bazel_taishow/72d0ad9945d9497741a773f035acb5b0/execroot/carbon/bazel-out/k8-fastbuild/bin/explorer/explorer
                0x562830343000-0x562830922000   /home/taishow/.cache/bazel/_bazel_taishow/72d0ad9945d9497741a773f035acb5b0/execroot/carbon/bazel-out/k8-fastbuild/bin/explorer/explorer
                0x562830922000-0x56283096b000   /home/taishow/.cache/bazel/_bazel_taishow/72d0ad9945d9497741a773f035acb5b0/execroot/carbon/bazel-out/k8-fastbuild/bin/explorer/explorer
                0x56283096b000-0x562830a85000   /home/taishow/.cache/bazel/_bazel_taishow/72d0ad9945d9497741a773f035acb5b0/execroot/carbon/bazel-out/k8-fastbuild/bin/explorer/explorer
                0x562830a85000-0x562831462000
                0x7ff4fd900000-0x7ff4fda00000
                0x7ff4fdb00000-0x7ff4fdc00000
                0x7ff4fdd00000-0x7ff4fde00000
                0x7ff4fdf00000-0x7ff4fe000000
                0x7ff4fe100000-0x7ff4fe200000
                0x7ff4fe2c3000-0x7ff4fe664000
                0x7ff4fe664000-0x7ff4fe686000   /usr/lib/x86_64-linux-gnu/libc-2.31.so
                0x7ff4fe686000-0x7ff4fe7fe000   /usr/lib/x86_64-linux-gnu/libc-2.31.so
                0x7ff4fe7fe000-0x7ff4fe84c000   /usr/lib/x86_64-linux-gnu/libc-2.31.so
                0x7ff4fe84c000-0x7ff4fe850000   /usr/lib/x86_64-linux-gnu/libc-2.31.so
                0x7ff4fe850000-0x7ff4fe852000   /usr/lib/x86_64-linux-gnu/libc-2.31.so
                0x7ff4fe852000-0x7ff4fe858000
                0x7ff4fe858000-0x7ff4fe85c000   /usr/lib/x86_64-linux-gnu/libresolv-2.31.so
                0x7ff4fe85c000-0x7ff4fe86c000   /usr/lib/x86_64-linux-gnu/libresolv-2.31.so
                0x7ff4fe86c000-0x7ff4fe870000   /usr/lib/x86_64-linux-gnu/libresolv-2.31.so
                0x7ff4fe870000-0x7ff4fe871000   /usr/lib/x86_64-linux-gnu/libresolv-2.31.so
                0x7ff4fe871000-0x7ff4fe872000   /usr/lib/x86_64-linux-gnu/libresolv-2.31.so
                0x7ff4fe872000-0x7ff4fe874000
                0x7ff4fe874000-0x7ff4fe876000   /usr/lib/x86_64-linux-gnu/librt-2.31.so
                0x7ff4fe876000-0x7ff4fe87a000   /usr/lib/x86_64-linux-gnu/librt-2.31.so
                0x7ff4fe87a000-0x7ff4fe87c000   /usr/lib/x86_64-linux-gnu/librt-2.31.so
                0x7ff4fe87c000-0x7ff4fe87d000   /usr/lib/x86_64-linux-gnu/librt-2.31.so
                0x7ff4fe87d000-0x7ff4fe87e000   /usr/lib/x86_64-linux-gnu/librt-2.31.so
                0x7ff4fe87e000-0x7ff4fe880000   /usr/lib/x86_64-linux-gnu/libz.so.1.2.11
                0x7ff4fe880000-0x7ff4fe891000   /usr/lib/x86_64-linux-gnu/libz.so.1.2.11
                0x7ff4fe891000-0x7ff4fe897000   /usr/lib/x86_64-linux-gnu/libz.so.1.2.11
                0x7ff4fe897000-0x7ff4fe898000   /usr/lib/x86_64-linux-gnu/libz.so.1.2.11
                0x7ff4fe898000-0x7ff4fe899000   /usr/lib/x86_64-linux-gnu/libz.so.1.2.11
                0x7ff4fe899000-0x7ff4fe89a000   /usr/lib/x86_64-linux-gnu/libz.so.1.2.11
                0x7ff4fe89a000-0x7ff4fe8a7000   /usr/lib/x86_64-linux-gnu/libm-2.31.so
                0x7ff4fe8a7000-0x7ff4fe94e000   /usr/lib/x86_64-linux-gnu/libm-2.31.so
                0x7ff4fe94e000-0x7ff4fe9e7000   /usr/lib/x86_64-linux-gnu/libm-2.31.so
                0x7ff4fe9e7000-0x7ff4fe9e8000   /usr/lib/x86_64-linux-gnu/libm-2.31.so
                0x7ff4fe9e8000-0x7ff4fe9e9000   /usr/lib/x86_64-linux-gnu/libm-2.31.so
                0x7ff4fe9e9000-0x7ff4fe9ea000   /usr/lib/x86_64-linux-gnu/libdl-2.31.so
                0x7ff4fe9ea000-0x7ff4fe9ec000   /usr/lib/x86_64-linux-gnu/libdl-2.31.so
                0x7ff4fe9ec000-0x7ff4fe9ed000   /usr/lib/x86_64-linux-gnu/libdl-2.31.so
                0x7ff4fe9ed000-0x7ff4fe9ee000   /usr/lib/x86_64-linux-gnu/libdl-2.31.so
                0x7ff4fe9ee000-0x7ff4fe9ef000   /usr/lib/x86_64-linux-gnu/libdl-2.31.so
                0x7ff4fe9ef000-0x7ff4fe9f5000   /usr/lib/x86_64-linux-gnu/libpthread-2.31.so
                0x7ff4fe9f5000-0x7ff4fea06000   /usr/lib/x86_64-linux-gnu/libpthread-2.31.so
                0x7ff4fea06000-0x7ff4fea0c000   /usr/lib/x86_64-linux-gnu/libpthread-2.31.so
                0x7ff4fea0c000-0x7ff4fea0d000   /usr/lib/x86_64-linux-gnu/libpthread-2.31.so
                0x7ff4fea0d000-0x7ff4fea0e000   /usr/lib/x86_64-linux-gnu/libpthread-2.31.so
                0x7ff4fea0e000-0x7ff4fea14000
                0x7ff4fea16000-0x7ff4fea24000
                0x7ff4fea24000-0x7ff4fea25000   /usr/lib/x86_64-linux-gnu/ld-2.31.so
                0x7ff4fea25000-0x7ff4fea48000   /usr/lib/x86_64-linux-gnu/ld-2.31.so
                0x7ff4fea48000-0x7ff4fea50000   /usr/lib/x86_64-linux-gnu/ld-2.31.so
                0x7ff4fea50000-0x7ff4fea51000
                0x7ff4fea51000-0x7ff4fea52000   /usr/lib/x86_64-linux-gnu/ld-2.31.so
                0x7ff4fea52000-0x7ff4fea53000   /usr/lib/x86_64-linux-gnu/ld-2.31.so
                0x7ff4fea53000-0x7ff4fea54000
                0x7ffebfae7000-0x7ffebfb09000   [stack]
                0x7ffebfbec000-0x7ffebfbf0000   [vvar]
                0x7ffebfbf0000-0x7ffebfbf1000   [vdso]
        ==15803==End of process memory map.
        AddressSanitizer: CHECK failed: sanitizer_common.cpp:61 "((0 && "unable to mmap")) != (0)" (0x0, 0x0) (tid=15803)
            <empty stack>
        ```
        </details>
### 環境構築（１回目）[on ubuntu 22.04 **@2022/07/31** <span style="color: red;">*Install Failed!*</span>]
*   WindowsのWSL2であれば、Linux環境が構築できるので、Ubuntu22.04にインストールすることに。
1.  homebrewをインストール
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    <details>
    <summary>ログ</summary>

    ```
    taishow@IdeaPad550-2022:~$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ==> Checking for `sudo` access (which may request your password)...
    ==> Select a Homebrew installation directory:
    - Enter your password to install to /home/linuxbrew/.linuxbrew (recommended)
    - Press Control-D to install to /home/taishow/.linuxbrew
    - Press Control-C to cancel installation
    [sudo] password for taishow:
    ==> This script will install:
    /home/linuxbrew/.linuxbrew/bin/brew
    /home/linuxbrew/.linuxbrew/share/doc/homebrew
    /home/linuxbrew/.linuxbrew/share/man/man1/brew.1
    /home/linuxbrew/.linuxbrew/share/zsh/site-functions/_brew
    /home/linuxbrew/.linuxbrew/etc/bash_completion.d/brew
    /home/linuxbrew/.linuxbrew/Homebrew
    ==> The following new directories will be created:
    /home/linuxbrew/.linuxbrew/bin
    /home/linuxbrew/.linuxbrew/etc
    /home/linuxbrew/.linuxbrew/include
    /home/linuxbrew/.linuxbrew/lib
    /home/linuxbrew/.linuxbrew/sbin
    /home/linuxbrew/.linuxbrew/share
    /home/linuxbrew/.linuxbrew/var
    /home/linuxbrew/.linuxbrew/opt
    /home/linuxbrew/.linuxbrew/share/zsh
    /home/linuxbrew/.linuxbrew/share/zsh/site-functions
    /home/linuxbrew/.linuxbrew/var/homebrew
    /home/linuxbrew/.linuxbrew/var/homebrew/linked
    /home/linuxbrew/.linuxbrew/Cellar
    /home/linuxbrew/.linuxbrew/Caskroom
    /home/linuxbrew/.linuxbrew/Frameworks

    Press RETURN/ENTER to continue or any other key to abort:
    ==> /usr/bin/sudo /usr/bin/install -d -o taishow -g taishow -m 0755 /home/linuxbrew/.linuxbrew
    ==> /usr/bin/sudo /bin/mkdir -p /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/chmod ug=rwx /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/chmod go-w /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions
    ==> /usr/bin/sudo /bin/chown taishow /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/chgrp taishow /home/linuxbrew/.linuxbrew/bin /home/linuxbrew/.linuxbrew/etc /home/linuxbrew/.linuxbrew/include /home/linuxbrew/.linuxbrew/lib /home/linuxbrew/.linuxbrew/sbin /home/linuxbrew/.linuxbrew/share /home/linuxbrew/.linuxbrew/var /home/linuxbrew/.linuxbrew/opt /home/linuxbrew/.linuxbrew/share/zsh /home/linuxbrew/.linuxbrew/share/zsh/site-functions /home/linuxbrew/.linuxbrew/var/homebrew /home/linuxbrew/.linuxbrew/var/homebrew/linked /home/linuxbrew/.linuxbrew/Cellar /home/linuxbrew/.linuxbrew/Caskroom /home/linuxbrew/.linuxbrew/Frameworks
    ==> /usr/bin/sudo /bin/mkdir -p /home/linuxbrew/.linuxbrew/Homebrew
    ==> /usr/bin/sudo /bin/chown -R taishow:taishow /home/linuxbrew/.linuxbrew/Homebrew
    ==> Downloading and installing Homebrew...
    remote: Enumerating objects: 212766, done.
    remote: Counting objects: 100% (79/79), done.
    remote: Compressing objects: 100% (65/65), done.
    remote: Total 212766 (delta 23), reused 66 (delta 14), pack-reused 212687
    Receiving objects: 100% (212766/212766), 59.17 MiB | 895.00 KiB/s, done.
    Resolving deltas: 100% (156462/156462), done.
    From https://github.com/Homebrew/brew
    * [new branch]          dependabot/bundler/Library/Homebrew/sorbet-static-and-runtime-0.5.10172 -> origin/dependabot/bundler/Library/Homebrew/sorbet-static-and-runtime-0.5.10172
    * [new branch]          master     -> origin/master
    * [new tag]             0.1        -> 0.1
    * [new tag]             0.2        -> 0.2
    * [new tag]             0.3        -> 0.3
    * [new tag]             0.4        -> 0.4
    * [new tag]             0.5        -> 0.5
    * [new tag]             0.6        -> 0.6
    * [new tag]             0.7        -> 0.7
    * [new tag]             0.7.1      -> 0.7.1
    * [new tag]             0.8        -> 0.8
    * [new tag]             0.8.1      -> 0.8.1
    * [new tag]             0.9        -> 0.9
    * [new tag]             0.9.1      -> 0.9.1
    * [new tag]             0.9.2      -> 0.9.2
    * [new tag]             0.9.3      -> 0.9.3
    * [new tag]             0.9.4      -> 0.9.4
    * [new tag]             0.9.5      -> 0.9.5
    * [new tag]             0.9.8      -> 0.9.8
    * [new tag]             0.9.9      -> 0.9.9
    * [new tag]             1.0.0      -> 1.0.0
    * [new tag]             1.0.1      -> 1.0.1
    * [new tag]             1.0.2      -> 1.0.2
    * [new tag]             1.0.3      -> 1.0.3
    * [new tag]             1.0.4      -> 1.0.4
    * [new tag]             1.0.5      -> 1.0.5
    * [new tag]             1.0.6      -> 1.0.6
    * [new tag]             1.0.7      -> 1.0.7
    * [new tag]             1.0.8      -> 1.0.8
    * [new tag]             1.0.9      -> 1.0.9
    * [new tag]             1.1.0      -> 1.1.0
    * [new tag]             1.1.1      -> 1.1.1
    * [new tag]             1.1.10     -> 1.1.10
    * [new tag]             1.1.11     -> 1.1.11
    * [new tag]             1.1.12     -> 1.1.12
    * [new tag]             1.1.13     -> 1.1.13
    * [new tag]             1.1.2      -> 1.1.2
    * [new tag]             1.1.3      -> 1.1.3
    * [new tag]             1.1.4      -> 1.1.4
    * [new tag]             1.1.5      -> 1.1.5
    * [new tag]             1.1.6      -> 1.1.6
    * [new tag]             1.1.7      -> 1.1.7
    * [new tag]             1.1.8      -> 1.1.8
    * [new tag]             1.1.9      -> 1.1.9
    * [new tag]             1.2.0      -> 1.2.0
    * [new tag]             1.2.1      -> 1.2.1
    * [new tag]             1.2.2      -> 1.2.2
    * [new tag]             1.2.3      -> 1.2.3
    * [new tag]             1.2.4      -> 1.2.4
    * [new tag]             1.2.5      -> 1.2.5
    * [new tag]             1.2.6      -> 1.2.6
    * [new tag]             1.3.0      -> 1.3.0
    * [new tag]             1.3.1      -> 1.3.1
    * [new tag]             1.3.2      -> 1.3.2
    * [new tag]             1.3.3      -> 1.3.3
    * [new tag]             1.3.4      -> 1.3.4
    * [new tag]             1.3.5      -> 1.3.5
    * [new tag]             1.3.6      -> 1.3.6
    * [new tag]             1.3.7      -> 1.3.7
    * [new tag]             1.3.8      -> 1.3.8
    * [new tag]             1.3.9      -> 1.3.9
    * [new tag]             1.4.0      -> 1.4.0
    * [new tag]             1.4.1      -> 1.4.1
    * [new tag]             1.4.2      -> 1.4.2
    * [new tag]             1.4.3      -> 1.4.3
    * [new tag]             1.5.0      -> 1.5.0
    * [new tag]             1.5.1      -> 1.5.1
    * [new tag]             1.5.10     -> 1.5.10
    * [new tag]             1.5.11     -> 1.5.11
    * [new tag]             1.5.12     -> 1.5.12
    * [new tag]             1.5.13     -> 1.5.13
    * [new tag]             1.5.14     -> 1.5.14
    * [new tag]             1.5.2      -> 1.5.2
    * [new tag]             1.5.3      -> 1.5.3
    * [new tag]             1.5.4      -> 1.5.4
    * [new tag]             1.5.5      -> 1.5.5
    * [new tag]             1.5.6      -> 1.5.6
    * [new tag]             1.5.7      -> 1.5.7
    * [new tag]             1.5.8      -> 1.5.8
    * [new tag]             1.5.9      -> 1.5.9
    * [new tag]             1.6.0      -> 1.6.0
    * [new tag]             1.6.1      -> 1.6.1
    * [new tag]             1.6.10     -> 1.6.10
    * [new tag]             1.6.11     -> 1.6.11
    * [new tag]             1.6.12     -> 1.6.12
    * [new tag]             1.6.13     -> 1.6.13
    * [new tag]             1.6.14     -> 1.6.14
    * [new tag]             1.6.15     -> 1.6.15
    * [new tag]             1.6.16     -> 1.6.16
    * [new tag]             1.6.17     -> 1.6.17
    * [new tag]             1.6.2      -> 1.6.2
    * [new tag]             1.6.3      -> 1.6.3
    * [new tag]             1.6.4      -> 1.6.4
    * [new tag]             1.6.5      -> 1.6.5
    * [new tag]             1.6.6      -> 1.6.6
    * [new tag]             1.6.7      -> 1.6.7
    * [new tag]             1.6.8      -> 1.6.8
    * [new tag]             1.6.9      -> 1.6.9
    * [new tag]             1.7.0      -> 1.7.0
    * [new tag]             1.7.1      -> 1.7.1
    * [new tag]             1.7.2      -> 1.7.2
    * [new tag]             1.7.3      -> 1.7.3
    * [new tag]             1.7.4      -> 1.7.4
    * [new tag]             1.7.5      -> 1.7.5
    * [new tag]             1.7.6      -> 1.7.6
    * [new tag]             1.7.7      -> 1.7.7
    * [new tag]             1.8.0      -> 1.8.0
    * [new tag]             1.8.1      -> 1.8.1
    * [new tag]             1.8.2      -> 1.8.2
    * [new tag]             1.8.3      -> 1.8.3
    * [new tag]             1.8.4      -> 1.8.4
    * [new tag]             1.8.5      -> 1.8.5
    * [new tag]             1.8.6      -> 1.8.6
    * [new tag]             1.9.0      -> 1.9.0
    * [new tag]             1.9.1      -> 1.9.1
    * [new tag]             1.9.2      -> 1.9.2
    * [new tag]             1.9.3      -> 1.9.3
    * [new tag]             2.0.0      -> 2.0.0
    * [new tag]             2.0.1      -> 2.0.1
    * [new tag]             2.0.2      -> 2.0.2
    * [new tag]             2.0.3      -> 2.0.3
    * [new tag]             2.0.4      -> 2.0.4
    * [new tag]             2.0.5      -> 2.0.5
    * [new tag]             2.0.6      -> 2.0.6
    * [new tag]             2.1.0      -> 2.1.0
    * [new tag]             2.1.1      -> 2.1.1
    * [new tag]             2.1.10     -> 2.1.10
    * [new tag]             2.1.11     -> 2.1.11
    * [new tag]             2.1.12     -> 2.1.12
    * [new tag]             2.1.13     -> 2.1.13
    * [new tag]             2.1.14     -> 2.1.14
    * [new tag]             2.1.15     -> 2.1.15
    * [new tag]             2.1.16     -> 2.1.16
    * [new tag]             2.1.2      -> 2.1.2
    * [new tag]             2.1.3      -> 2.1.3
    * [new tag]             2.1.4      -> 2.1.4
    * [new tag]             2.1.5      -> 2.1.5
    * [new tag]             2.1.6      -> 2.1.6
    * [new tag]             2.1.7      -> 2.1.7
    * [new tag]             2.1.8      -> 2.1.8
    * [new tag]             2.1.9      -> 2.1.9
    * [new tag]             2.2.0      -> 2.2.0
    * [new tag]             2.2.1      -> 2.2.1
    * [new tag]             2.2.10     -> 2.2.10
    * [new tag]             2.2.11     -> 2.2.11
    * [new tag]             2.2.12     -> 2.2.12
    * [new tag]             2.2.13     -> 2.2.13
    * [new tag]             2.2.14     -> 2.2.14
    * [new tag]             2.2.15     -> 2.2.15
    * [new tag]             2.2.16     -> 2.2.16
    * [new tag]             2.2.17     -> 2.2.17
    * [new tag]             2.2.2      -> 2.2.2
    * [new tag]             2.2.3      -> 2.2.3
    * [new tag]             2.2.4      -> 2.2.4
    * [new tag]             2.2.5      -> 2.2.5
    * [new tag]             2.2.6      -> 2.2.6
    * [new tag]             2.2.7      -> 2.2.7
    * [new tag]             2.2.8      -> 2.2.8
    * [new tag]             2.2.9      -> 2.2.9
    * [new tag]             2.3.0      -> 2.3.0
    * [new tag]             2.4.0      -> 2.4.0
    * [new tag]             2.4.1      -> 2.4.1
    * [new tag]             2.4.10     -> 2.4.10
    * [new tag]             2.4.11     -> 2.4.11
    * [new tag]             2.4.12     -> 2.4.12
    * [new tag]             2.4.13     -> 2.4.13
    * [new tag]             2.4.14     -> 2.4.14
    * [new tag]             2.4.15     -> 2.4.15
    * [new tag]             2.4.16     -> 2.4.16
    * [new tag]             2.4.2      -> 2.4.2
    * [new tag]             2.4.3      -> 2.4.3
    * [new tag]             2.4.4      -> 2.4.4
    * [new tag]             2.4.5      -> 2.4.5
    * [new tag]             2.4.6      -> 2.4.6
    * [new tag]             2.4.7      -> 2.4.7
    * [new tag]             2.4.8      -> 2.4.8
    * [new tag]             2.4.9      -> 2.4.9
    * [new tag]             2.5.0      -> 2.5.0
    * [new tag]             2.5.1      -> 2.5.1
    * [new tag]             2.5.10     -> 2.5.10
    * [new tag]             2.5.11     -> 2.5.11
    * [new tag]             2.5.12     -> 2.5.12
    * [new tag]             2.5.2      -> 2.5.2
    * [new tag]             2.5.3      -> 2.5.3
    * [new tag]             2.5.4      -> 2.5.4
    * [new tag]             2.5.5      -> 2.5.5
    * [new tag]             2.5.6      -> 2.5.6
    * [new tag]             2.5.7      -> 2.5.7
    * [new tag]             2.5.8      -> 2.5.8
    * [new tag]             2.5.9      -> 2.5.9
    * [new tag]             2.6.0      -> 2.6.0
    * [new tag]             2.6.1      -> 2.6.1
    * [new tag]             2.6.2      -> 2.6.2
    * [new tag]             2.7.0      -> 2.7.0
    * [new tag]             2.7.1      -> 2.7.1
    * [new tag]             2.7.2      -> 2.7.2
    * [new tag]             2.7.3      -> 2.7.3
    * [new tag]             2.7.4      -> 2.7.4
    * [new tag]             2.7.5      -> 2.7.5
    * [new tag]             2.7.6      -> 2.7.6
    * [new tag]             2.7.7      -> 2.7.7
    * [new tag]             3.0.0      -> 3.0.0
    * [new tag]             3.0.1      -> 3.0.1
    * [new tag]             3.0.10     -> 3.0.10
    * [new tag]             3.0.11     -> 3.0.11
    * [new tag]             3.0.2      -> 3.0.2
    * [new tag]             3.0.3      -> 3.0.3
    * [new tag]             3.0.4      -> 3.0.4
    * [new tag]             3.0.5      -> 3.0.5
    * [new tag]             3.0.6      -> 3.0.6
    * [new tag]             3.0.7      -> 3.0.7
    * [new tag]             3.0.8      -> 3.0.8
    * [new tag]             3.0.9      -> 3.0.9
    * [new tag]             3.1.0      -> 3.1.0
    * [new tag]             3.1.1      -> 3.1.1
    * [new tag]             3.1.10     -> 3.1.10
    * [new tag]             3.1.11     -> 3.1.11
    * [new tag]             3.1.12     -> 3.1.12
    * [new tag]             3.1.2      -> 3.1.2
    * [new tag]             3.1.3      -> 3.1.3
    * [new tag]             3.1.4      -> 3.1.4
    * [new tag]             3.1.5      -> 3.1.5
    * [new tag]             3.1.6      -> 3.1.6
    * [new tag]             3.1.7      -> 3.1.7
    * [new tag]             3.1.8      -> 3.1.8
    * [new tag]             3.1.9      -> 3.1.9
    * [new tag]             3.2.0      -> 3.2.0
    * [new tag]             3.2.1      -> 3.2.1
    * [new tag]             3.2.10     -> 3.2.10
    * [new tag]             3.2.11     -> 3.2.11
    * [new tag]             3.2.12     -> 3.2.12
    * [new tag]             3.2.13     -> 3.2.13
    * [new tag]             3.2.14     -> 3.2.14
    * [new tag]             3.2.15     -> 3.2.15
    * [new tag]             3.2.16     -> 3.2.16
    * [new tag]             3.2.17     -> 3.2.17
    * [new tag]             3.2.2      -> 3.2.2
    * [new tag]             3.2.3      -> 3.2.3
    * [new tag]             3.2.4      -> 3.2.4
    * [new tag]             3.2.5      -> 3.2.5
    * [new tag]             3.2.6      -> 3.2.6
    * [new tag]             3.2.7      -> 3.2.7
    * [new tag]             3.2.8      -> 3.2.8
    * [new tag]             3.2.9      -> 3.2.9
    * [new tag]             3.3.0      -> 3.3.0
    * [new tag]             3.3.1      -> 3.3.1
    * [new tag]             3.3.10     -> 3.3.10
    * [new tag]             3.3.11     -> 3.3.11
    * [new tag]             3.3.12     -> 3.3.12
    * [new tag]             3.3.13     -> 3.3.13
    * [new tag]             3.3.14     -> 3.3.14
    * [new tag]             3.3.15     -> 3.3.15
    * [new tag]             3.3.16     -> 3.3.16
    * [new tag]             3.3.2      -> 3.3.2
    * [new tag]             3.3.3      -> 3.3.3
    * [new tag]             3.3.4      -> 3.3.4
    * [new tag]             3.3.5      -> 3.3.5
    * [new tag]             3.3.6      -> 3.3.6
    * [new tag]             3.3.7      -> 3.3.7
    * [new tag]             3.3.8      -> 3.3.8
    * [new tag]             3.3.9      -> 3.3.9
    * [new tag]             3.4.0      -> 3.4.0
    * [new tag]             3.4.1      -> 3.4.1
    * [new tag]             3.4.10     -> 3.4.10
    * [new tag]             3.4.11     -> 3.4.11
    * [new tag]             3.4.2      -> 3.4.2
    * [new tag]             3.4.3      -> 3.4.3
    * [new tag]             3.4.4      -> 3.4.4
    * [new tag]             3.4.5      -> 3.4.5
    * [new tag]             3.4.6      -> 3.4.6
    * [new tag]             3.4.7      -> 3.4.7
    * [new tag]             3.4.8      -> 3.4.8
    * [new tag]             3.4.9      -> 3.4.9
    * [new tag]             3.5.0      -> 3.5.0
    * [new tag]             3.5.1      -> 3.5.1
    * [new tag]             3.5.2      -> 3.5.2
    * [new tag]             3.5.3      -> 3.5.3
    * [new tag]             3.5.4      -> 3.5.4
    * [new tag]             3.5.5      -> 3.5.5
    * [new tag]             3.5.6      -> 3.5.6
    HEAD is now at e217fd35c Merge pull request #12770 from carlocab/deprecated-dependencies
    ==> Tapping homebrew/core
    remote: Enumerating objects: 1237525, done.
    remote: Counting objects: 100% (114/114), done.
    remote: Compressing objects: 100% (66/66), done.
    remote: Total 1237525 (delta 64), reused 95 (delta 48), pack-reused 1237411
    Receiving objects: 100% (1237525/1237525), 503.24 MiB | 1.09 MiB/s, done.
    Resolving deltas: 100% (851589/851589), done.
    From https://github.com/Homebrew/homebrew-core
    * [new branch]              master     -> origin/master
    HEAD is now at de4c8473175 pigz: update 2.7_1 bottle.
    ==> Downloading https://ghcr.io/v2/homebrew/portable-ruby/portable-ruby/blobs/sha256:fc45ee6eddf4c7a17f4373dde7b1bc8a58255ea61e6847d3bf895225b28d072a
    ######################################################################## 100.0%
    ==> Pouring portable-ruby-2.6.8_1.x86_64_linux.bottle.tar.gz
    Warning: /home/linuxbrew/.linuxbrew/bin is not in your PATH.
    Instructions on how to configure your shell for Homebrew
    can be found in the 'Next steps' section below.
    ==> Installation successful!

    ==> Homebrew has enabled anonymous aggregate formulae and cask analytics.
    Read the analytics documentation (and how to opt-out) here:
    https://docs.brew.sh/Analytics
    No analytics data has been sent yet (nor will any be during this install run).

    ==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
    https://github.com/Homebrew/brew#donations

    ==> Next steps:
    - Run these two commands in your terminal to add Homebrew to your PATH:
        echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/taishow/.profile
        eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
    - Install Homebrew's dependencies if you have sudo access:
        sudo apt-get install build-essential
    For more information, see:
        https://docs.brew.sh/Homebrew-on-Linux
    - We recommend that you install GCC:
        brew install gcc
    - Run brew help to get started
    - Further documentation:
        https://docs.brew.sh
    ```
    </details>
1.  gccインストールログ
    <details>
    <summary>ログ</summary>

    ```
    $ brew install gcc
    ==> Downloading https://ghcr.io/v2/homebrew/core/gmp/manifests/6.2.1_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/gmp/blobs/sha256:786ae29f0c0b06ea86e42bd9c6ac2c49bd5757da037dead7053e8b
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:786ae29f0c0b06ea86e42bd9c6ac2c49bd5
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/isl/manifests/0.25
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/isl/blobs/sha256:c0244c95ed9cc89b826868de83bec3150fcc120add126501717677
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:c0244c95ed9cc89b826868de83bec3150fc
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/mpfr/manifests/4.1.0
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/mpfr/blobs/sha256:4c5f1cfd038e8fbd640795e34e5e23c11244be3eca7781979600e
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:4c5f1cfd038e8fbd640795e34e5e23c1124
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libmpc/manifests/1.2.1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/libmpc/blobs/sha256:d74eb5f1377d8fa72fad88baca1bd5f00c29d45ba186fbec89a
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:d74eb5f1377d8fa72fad88baca1bd5f00c2
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.9.3
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/lz4/blobs/sha256:902257ec34dd2beebcf22bb68c9ccd179008c2ba8d725436c3c5cd
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:902257ec34dd2beebcf22bb68c9ccd17900
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/xz/manifests/5.2.5_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/xz/blobs/sha256:5308bba4329d4ca980f8a2a8cb6b26e746f498e5dc76cc32b02ff97
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:5308bba4329d4ca980f8a2a8cb6b26e746f
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zlib/manifests/1.2.12
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zlib/blobs/sha256:23b1d8f0500bbccdf5cc466e7acbd7eddc40cd1465687239af423
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:23b1d8f0500bbccdf5cc466e7acbd7eddc4
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zstd/manifests/1.5.2-3
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/zstd/blobs/sha256:006b5ab6a4616a8b6f59953cb9efb546d312e3ba231c303bb5674
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:006b5ab6a4616a8b6f59953cb9efb546d31
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/binutils/manifests/2.38_1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/binutils/blobs/sha256:9a90a33ab3678b5a325d8f5f16470f17a04700717ae936d7d
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:9a90a33ab3678b5a325d8f5f16470f17a04
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/gcc/manifests/11.3.0_2-1
    ######################################################################## 100.0%
    ==> Downloading https://ghcr.io/v2/homebrew/core/gcc/blobs/sha256:e826c10b577ca561cdcef55042c426bc7aabb4a937e5e2aab66c0f
    ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:e826c10b577ca561cdcef55042c426bc7aa
    ######################################################################## 100.0%
    ==> Installing dependencies for gcc: gmp, isl, mpfr, libmpc, lz4, xz, zlib, zstd and binutils
    ==> Installing gcc dependency: gmp
    ==> Pouring gmp--6.2.1_1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/gmp/6.2.1_1: 23 files, 3.9MB
    ==> Installing gcc dependency: isl
    ==> Pouring isl--0.25.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/isl/0.25: 74 files, 9.2MB
    ==> Installing gcc dependency: mpfr
    ==> Pouring mpfr--4.1.0.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/mpfr/4.1.0: 31 files, 7.9MB
    ==> Installing gcc dependency: libmpc
    ==> Pouring libmpc--1.2.1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/libmpc/1.2.1: 13 files, 550.0KB
    ==> Installing gcc dependency: lz4
    ==> Pouring lz4--1.9.3.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/lz4/1.9.3: 22 files, 643.2KB
    ==> Installing gcc dependency: xz
    ==> Pouring xz--5.2.5_1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/xz/5.2.5_1: 130 files, 1.9MB
    ==> Installing gcc dependency: zlib
    ==> Pouring zlib--1.2.12.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/zlib/1.2.12: 12 files, 464.3KB
    ==> Installing gcc dependency: zstd
    ==> Pouring zstd--1.5.2.x86_64_linux.bottle.3.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/zstd/1.5.2: 31 files, 2.6MB
    ==> Installing gcc dependency: binutils
    ==> Pouring binutils--2.38_1.x86_64_linux.bottle.tar.gz
    🍺  /home/linuxbrew/.linuxbrew/Cellar/binutils/2.38_1: 4,766 files, 261.1MB
    ==> Installing gcc
    ==> Pouring gcc--11.3.0_2.x86_64_linux.bottle.1.tar.gz
    ==> Creating the GCC specs file: /home/linuxbrew/.linuxbrew/Cellar/gcc/11.3.0_2/bin//lib/gcc/11/gcc/x86_64-pc-linux-gn
    🍺  /home/linuxbrew/.linuxbrew/Cellar/gcc/11.3.0_2: 2,194 files, 347.3MB
    ==> Running `brew cleanup gcc`...
    Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
    Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
    ```
    </details>
1.  carbon環境を構築
    -   Install bazelisk using Homebrew.
        <details>
        <summary>ログ</summary>

        ```            
        $ brew install bazelisk
        ==> Downloading https://ghcr.io/v2/homebrew/core/bazelisk/manifests/1.12.0
        ######################################################################## 100.0%
        ==> Downloading https://ghcr.io/v2/homebrew/core/bazelisk/blobs/sha256:10f980dadb7506495e909514ca621356553c8e138e33048d1
        ==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:10f980dadb7506495e909514ca621356553
        ######################################################################## 100.0%
        ==> Pouring bazelisk--1.12.0.x86_64_linux.bottle.tar.gz
        🍺  /home/linuxbrew/.linuxbrew/Cellar/bazelisk/1.12.0: 7 files, 4.9MB
        ==> Running `brew cleanup bazelisk`...
        Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
        Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
        ```
        </details>
    -   Install Clang/LLVM using Homebrew.
        -   Many Clang/LLVM releases aren't built with options we rely on.
        ```
        $ brew install llvm
        $ export PATH="$(brew --prefix llvm)/bin:${PATH}"
        ```
    -   Download Carbon's code.
        ```
        $ git clone https://github.com/carbon-language/carbon-lang
        ```
    -   Build and run the explorer.
        <details>
        <summary>ログ</summary>

        ```
        $ cd carbon-lang
        $ bazel run //explorer -- ./explorer/testdata/print/format_only.carbon
        2022/07/31 11:16:21 Downloading https://releases.bazel.build/5.1.1/release/bazel-5.1.1-linux-x86_64...
        Extracting Bazel installation...
        Starting local Bazel server and connecting to it...
        INFO: Invocation ID: 08a17816-441c-4fc7-a7bc-f9e871fa3ea8
        WARNING: Download from https://mirror.bazel.build/ftp.gnu.org/gnu/m4/m4-1.4.18.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        WARNING: Download from https://mirror.bazel.build/github.com/jmillikin/rules_m4/releases/download/v0.1/m4-gnulib-788db09a9f88abbef73c97e8d7291c40455336d8.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        WARNING: Download from https://mirror.bazel.build/ftp.gnu.org/gnu/bison/bison-3.3.2.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        WARNING: Download from https://mirror.bazel.build/github.com/jmillikin/rules_bison/releases/download/v0.1/bison-gnulib-788db09a9f88abbef73c97e8d7291c40455336d8.tar.xz failed: class java.io.FileNotFoundException GET returned 404 Not Found
        INFO: Analyzed target //explorer:explorer (67 packages loaded, 1555 targets configured).
        INFO: Found 1 target...
        ERROR: /home/taishow/.cache/bazel/_bazel_taishow/72d0ad9945d9497741a773f035acb5b0/external/llvm-project/llvm/BUILD.bazel:164:11: Compiling llvm/lib/Support/CRC.cpp failed: (Exit 1): clang++ failed: error executing command /home/linuxbrew/.linuxbrew/Cellar/llvm/14.0.6_1/bin/clang++ -no-canonical-prefixes -fcolor-diagnostics -Werror -Wall -Wextra -Wthread-safety -Wself-assign -Wimplicit-fallthrough ... (remaining 86 arguments skipped)

        Use --sandbox_debug to see verbose messages from the sandbox
        external/llvm-project/llvm/lib/Support/CRC.cpp:86:10: fatal error: 'zlib.h' file not found
        #include <zlib.h>
                ^~~~~~~~
        1 error generated.
        Target //explorer:explorer failed to build
        Use --verbose_failures to see the command lines of failed build steps.
        INFO: Elapsed time: 241.429s, Critical Path: 7.36s
        INFO: 367 processes: 176 internal, 191 linux-sandbox.
        FAILED: Build did NOT complete successfully
        FAILED: Build did NOT complete successfully
        ```
        </details>

#   LLVM

  |端末       |環境／FW      |最終更新
  |-----------|-------------|----------
  |InsiderDev |LLVM 16.0.6  |[2023/09/02](https://llvm.org/)

  - LLVM
    - LLVM 16.0.6

      Carbon環境を再構築したため、最新である16.0.6をインストール。**@2023/09/02**

    - LLVM 15.0.4

      Carbon環境構築にLLVMが必要なため、インストール。最新は、15.0.4。**@2022/11/13**

    - LLVM 12.0

      - [for Ubuntu](https://apt.llvm.org/)
        ```
        apt-get install clang-format clang-tidy clang-tools clang clangd libc++-dev libc++1 libc++abi-dev libc++abi1 libclang-dev libclang1 liblldb-dev libllvm-ocaml-dev libomp-dev libomp5 lld lldb llvm-dev llvm-runtime llvm python-clang
        ```
      - [for Windows](https://releases.llvm.org/download.html)

    - 「きつねさんでもわかるLLVM」で学習中
      - DummyCCompiler実践中
        **@2021/01/11** : Front-End(to Chapter 5.9) finished
      - [きつねさんでもわかるLLVM公式リポジトリ](https://github.com/Kmotiko/DummyCCompiler)

