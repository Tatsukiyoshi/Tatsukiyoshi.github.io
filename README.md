# リスキリング（プログラミング）
##  プラットフォーム
### OS
  1.  Windows
      - [Windows Insider Dev Channel Build 23620](https://aka.ms/DevLatest)
        <span style="color: red;">*<<2024/01/26 updated from 23619>>*</span>
        ![デスクトップ](./images/Windows/20240126_Windows11_Build23620.png)
        - [履歴](./windows/history.md)
  1.  Windows Subsyatem for Linux
      - [Ubuntu 22.04.3](https://www.releases.ubuntu.com/jammy/)
        ![22.04.3 LTS](./images/Windows/20230826_WSL_Ubuntu22.04.3.png)
        - [履歴](./wsl/history.md)
        - ディストリビューションのバージョンを確認する
          ```
          lsb_release -a
          ```
      - [WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install)
        - WSLバージョンを確認する
          ```
          wsl --version
          ```
        - WSLを更新する
          ```
          wsl --update
          ``` 
  1.  Chrome OS Flex
      - [Chrome OS Flex 120.0.6099.235](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex) <span style="color: red;">*<<2024/01/19 updated from 120.0.6099.203>>*</span>
        ![Chrome OS Flexバージョン情報](./images/Chrome/20240119_Chrome_OS_Flex_120.0.6099.235.png)
        - [履歴](./chrome/history.md)
  1.  その他
      - [Oracle Cloud](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/OracleCloud)
### ツール
  1.  Visual Studio Code
      - [Visual Studio Code 1.86](https://code.visualstudio.com/) <span style="color: red;">*<<2024/02/04 updated from 1.85.2>>*</span> <BR />
        開発環境はVisual Studio Codeを中心に使っており、インストールしている拡張機能の一覧は、[VSCode拡張機能](_sub/vscodeExtensions.md)にまとめてあります。<BR />
        - Chrome OS Flexではコマンドでアップデート
        ![Upgrade on Chrome OS Flex](./images/Chrome/20240119_code_1.85.2.png)
        - 1.82で発生していたデバッグコンソールがクリアできなくなった問題は、1.82.2で解消
  1.  Git
      - [Git 2.43](https://git-scm.com/download) <span style="color: red;">*<<2023/11/30 updated from 2.42>>*</span>
        - Windowsでの更新
          ```
          git update-git-for-windows
          ```
      - [GitHub Desktop 3.3.8](https://desktop.github.com/release-notes/) <span style="color: red;">*<<2024/01/20 updated from 3.3.6>>*</span>
        - サイトでのリリース通知があってから、アップデートできるまでにはタイムラグがありそう
      - ユーザ設定
        ```
        $ git config --global user.name "John Doe"
        $ git config --global user.email johndoe@example.com
        ```

##  プログラミング言語
1.  言語共通
    1.  [Database & SQL](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Database)
    1.  [Documentation](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Documentation)
    1.  [Docker](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Docker)
    1.  [Exercism](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Exercism)
1.  [.NET](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/.NET)
1.  [Rust](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Rust)
1.  [Kotlin](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Kotlin)
1.  [Java](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Java)
1.  [Dart/flutter](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Flutter)
1.  [TypeScript/JavaScript](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/TypeScript)
1.  [PHP](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Php)
1.  [Go](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Go)
1.  [Python](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Python)
1.  [Pascal](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Others#pascal)
1.  [Swift](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Others#swift)
1.  [Carbon](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Carbon)
1.  [LLVM](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Others#llvm)
1.  フレームワーク
    1.  [Unity](https://github.com/Tatsukiyoshi/Weekend_Programming/wiki/Unity)

---
[プロフィール](_sub/Profile.md)
