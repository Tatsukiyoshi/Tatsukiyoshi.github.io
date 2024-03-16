##  Pascal

  - Delphi
    - CardPanelDemo
  - Lazarus(FreePascal) [Lazarus日本語情報トップページ](https://ja.osdn.net/projects/sfnet_lazarus/)/[Lazarus Tutorial](https://wiki.freepascal.org/Lazarus_Tutorial/ja)
    - Project1(Press Again)

##  Swift
  - コンパイル
    ```
    set SDKROOT=%SystemDrive%/Library/Developer/Platforms/Windows.platform/Developer/SDKs/Windows.sdk
    swiftc -target x86_64-unknown-windows-msvc -sdk %SDKROOT% -I %SDKROOT%/usr/lib/swift -L %SDKROOT%/usr/lib/swift/windows helloworld.swift -o helloworld.exe
    ```

## LLVM

  |端末       |環境／FW                           |日付
  |-----------|----------------------------------|----------
  |IdeaPad    |[LLVM 16.0.6](https://llvm.org/)  |2023/09/02

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
      - [for Winfows](https://releases.llvm.org/download.html)

    - 「きつねさんでもわかるLLVM」で学習中
      - DummyCCompiler実践中
        **@2021/01/11** : Front-End(to Chapter 5.9) finished
      - [きつねさんでもわかるLLVM公式リポジトリ](https://github.com/Kmotiko/DummyCCompiler)

