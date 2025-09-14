---
title:  Tools
layout: single
sidebar:
  nav: main
---

```
OS/言語を問わず利用するツールの情報
```
[共通](#Common) | [Windows](#Windows) | [macOS](#macOS)

##  共通 <a id="Common"></a>
- [Visual Studio Code August 2025 (1.104)](https://code.visualstudio.com/) <span style="color: red;">*<<2025/09/12 updated from 1.103.2>>*</span>
  - [以前の新機能](/history/VSCode)
  - 開発環境は、Visual Studio Codeを中心に使っている。
  - インストールしている拡張機能の一覧は、[VSCode拡張機能](/knowhow/sub/vscodeExtensions)にまとめている。<BR />
- [Git](https://git-scm.com/download)
  - Windows
    - Git 2.50.0 <span style="color: red;">*<<2025/06/17 updated from 2.49.0>>*</span>
    - Windowsでの更新
      ```
      git update-git-for-windows
      ```
  - macOS
    - Git 2.50.0 <span style="color: red;">*<<2025/06/21 updated from 2.49.0>>*</span>
    - Macでの更新
      ```
      brew upgrade git
      ```
      <details>
      <summary>
      Update Log
      </summary>

      ```
      ==> Auto-updating Homebrew...
      Adjust how often this is run with HOMEBREW_AUTO_UPDATE_SECS or disable with
      HOMEBREW_NO_AUTO_UPDATE. Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
      ==> Downloading https://ghcr.io/v2/homebrew/portable-ruby/portable-ruby/blobs/sha256:fd162df7a06190ee800a9e6afd28f4466d33548821a480ba043cd927b44d60f7
      ######################################################################### 100.0%
      ==> Pouring portable-ruby-3.4.4.arm64_big_sur.bottle.tar.gz
      ==> Auto-updated Homebrew!
      Updated 2 taps (homebrew/core and homebrew/cask).
      ==> New Formulae
      abpoa                                    mcp-inspector
      act_runner                               mender-cli
      addons-linter                            mermaid-cli
      alejandra                                miniflux
      arp-scan-rs                              miniprot
      autocycler                               mongo-c-driver@1
      aws-lc                                   moodle-dl
      benchi                                   mpremote
      bento                                    nelm
      bkmr                                     nerdlog
      blueprint-compiler                       newsraft
      boa                                      nova
      bower-mail                               nx
      breseq                                   osx-trash
      bsc                                      oterm
      btcli                                    ovsx
      camlpdf                                  oxen
      chart-releaser                           pangene
      chawan                                   pdtm
      clang-include-graph                      perbase
      claude-squad                             pieces-cli
      codex                                    pixd
      concurrentqueue                          polaris
      cookcli                                  policy-engine
      cornelis                                 polypolish
      cpdf                                     pulumictl
      cram                                     qnm
      crd2pulumi                               qrkey
      credo                                    rasusa
      desed                                    readerwriterqueue
      diagram                                  readsb
      dvisvgm                                  reckoner
      e2b                                      rna-star
      eask-cli                                 rofi
      elf2uf2-rs                               ropebwt3
      elfio                                    s6-rc
      erlang@27                                samply
      execline                                 sequoia-chameleon-gnupg
      fastga                                   sexpect
      fastk                                    shamrock
      flip-link                                sherif
      flye                                     skalibs
      foxglove-cli                             skani
      gcc@14                                   smenu
      gcli                                     spice-server
      gerust                                   sprocket
      ghalint                                  sqruff
      girara                                   stringtie
      go-rice                                  style-dictionary
      goshs                                    swiftly
      guichan                                  sylph
      hellwal                                  tabixpp
      hexd                                     tdom
      htmlhint                                 tfmcp
      hyper-mcp                                timoni
      iccmax                                   tldx
      infat                                    tmex
      jjui                                     tmuxai
      jwt-hack                                 toml-bombadil
      kargo                                    trimal
      kbt                                      tsnet-serve
      kingfisher                               tun2proxy
      kraken2                                  undercutf1
      ktop                                     unoserver
      kubectl-ai                               urx
      ldcli                                    webdav
      libbsc                                   xml2rfc
      libpq@16                                 yeet
      lima-additional-guestagents              zsh-history-enquirer
      lzsa
      ==> New Casks
      5ire                                     font-savate
      accordance@13                            font-simple-icons
      agentkube                                font-uoqmunthenkhung
      alienator88-sentinel                     font-wdxl-lubrifont-jp-n
      alifix                                   font-wdxl-lubrifont-sc
      alisma                                   font-wdxl-lubrifont-tc
      aloha-browser                            fruit-screensaver
      appexindexer                             gg
      aqua-voice                               hedy
      azookey                                  jetdrive-toolbox
      billy-frontier                           langflow
      bison-wallet                             linqpad
      blankie                                  little-snitch@nightly
      brilliant                                lobehub
      burp-suite-professional@early-adopter    longbridge-pro
      burp-suite@early-adopter                 macsyzones
      cloudpouch                               meru
      clover-chord-systems                     moves
      cmpxat                                   mozilla-vpn
      container                                music-presence
      elemental                                nao
      elemental@6                              nextcloud-talk
      eufymake-studio                          onlook
      feather                                  opensuperwhisper
      firezone                                 pale-moon
      foks                                     passepartout
      font-annotation-mono                     peninsula
      font-asta-sans                           revisionist
      font-bitcount-grid-double                sc-menu
      font-bitcount-grid-single                simpledemviewer
      font-bitcount-prop-double                slideshower
      font-bitcount-prop-single                sparsity
      font-bitcount-single                     status
      font-charis                              tartelet
      font-formudpgothic                       teleport@16
      font-fzhei-b01                           textgrabber2
      font-fzxiheii-z08                        thebrowsercompany-dia
      font-gentium                             timescribe
      font-gentium-book                        tiny-shield
      font-harmonyos-sans                      tourbox-console
      font-harmonyos-sans-naskh-arabic         versatility
      font-harmonyos-sans-sc                   vibemeter
      font-harmonyos-sans-tc                   voicenotes
      font-juisee                              void
      font-juisee-nf                           voiden
      font-leland                              warsaw
      font-lxgw-marker-gothic                  witsy
      font-manufacturing-consent               wrkspace
      font-matangi                             yuanbao
      font-menbere                             zen-privacy
      font-noto-sans-sunuwar                   zoho-cliq
      font-noto-serif-dives-akuru              zoo-design-studio
      font-parastoo

      You have 8 outdated formulae installed.

      ==> Upgrading 1 outdated package:
      git 2.49.0 -> 2.50.0
      ==> Downloading https://ghcr.io/v2/homebrew/core/git/manifests/2.50.0
      ######################################################################### 100.0%
      ==> Fetching dependencies for git: gettext
      ==> Downloading https://ghcr.io/v2/homebrew/core/gettext/manifests/0.25
      ######################################################################### 100.0%
      ==> Fetching gettext
      ==> Downloading https://ghcr.io/v2/homebrew/core/gettext/blobs/sha256:8dba9424a9
      ######################################################################### 100.0%
      ==> Fetching git
      ==> Downloading https://ghcr.io/v2/homebrew/core/git/blobs/sha256:906c8445806396
      ######################################################################### 100.0%
      ==> Upgrading git
        2.49.0 -> 2.50.0 
      ==> Installing dependencies for git: gettext
      ==> Installing git dependency: gettext
      ==> Downloading https://ghcr.io/v2/homebrew/core/gettext/manifests/0.25
      Already downloaded: /Users/taishow2024/Library/Caches/Homebrew/downloads/344607fc5b91bb0c1287d07bb445cc40cc465a163a52e12eed3cc5cd60498f78--gettext-0.25.bottle_manifest.json
      ==> Pouring gettext--0.25.arm64_sequoia.bottle.tar.gz
      🍺  /opt/homebrew/Cellar/gettext/0.25: 2,418 files, 27.7MB
      ==> Installing git
      ==> Pouring git--2.50.0.arm64_sequoia.bottle.tar.gz
      ==> Caveats
      The Tcl/Tk GUIs (e.g. gitk, git-gui) are now in the `git-gui` formula.
      Subversion interoperability (git-svn) is now in the `git-svn` formula.
      ==> Summary
      🍺  /opt/homebrew/Cellar/git/2.50.0: 1,732 files, 55.8MB
      ==> Running `brew cleanup git`...
      Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
      Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
      Removing: /opt/homebrew/Cellar/git/2.49.0... (1,731 files, 55.1MB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/git_bottle_manifest--2.49.0... (14.9KB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/git--2.49.0... (19.9MB)
      ==> `brew cleanup` has not been run in the last 30 days, running now...
      Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
      Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
      Removing: /Users/taishow2024/Library/Caches/Homebrew/cocoapods_bottle_manifest--1.16.2_1... (13.6KB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/cocoapods--1.16.2_1... (7.1MB)
      Removing: /opt/homebrew/Cellar/gettext/0.24... (2,189 files, 19.9MB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/gettext_bottle_manifest--0.24... (12.1KB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/gettext--0.24... (8.1MB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/libunistring_bottle_manifest--1.3... (7KB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/libunistring--1.3... (1.7MB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/portable-ruby-3.3.7.arm64_big_sur.bottle.tar.gz... (11.2MB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/portable-ruby-3.3.6.arm64_big_sur.bottle.tar.gz... (11.2MB)
      Removing: /Users/taishow2024/Library/Caches/Homebrew/bootsnap/058617750296d5389bdd1b26ab283ac6eee2af0d1fcb899486d97bc35fa7b040... (561 files, 4.6MB)
      Removing: /Users/taishow2024/Library/Logs/Homebrew/openssl@3... (64B)
      Removing: /Users/taishow2024/Library/Logs/Homebrew/ca-certificates... (64B)
      Removing: /Users/taishow2024/Library/Logs/Homebrew/ruby... (64B)
      ==> Caveats
      zsh completions and functions have been installed to:
        /opt/homebrew/share/zsh/site-functions
      ==> git
      The Tcl/Tk GUIs (e.g. gitk, git-gui) are now in the `git-gui` formula.
      Subversion interoperability (git-svn) is now in the `git-svn` formula.
      ```

      </details>
  - ユーザ設定
    ```
    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com
    ```
  - [ssh接続について](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - ブランチ確認
    ```
    git branch --contains
    ```
  - ブランチ変更
    ```
    git checkout <ブランチ名>
    ```
  - GitHub
    - Feed
      - フィルタ設定は、PCとモバイルで異なるため、設定はPCで行うべき。(2025/08/26現在)
    - GitHub Copilot Free
      ![GitHub Copilot Free](/images/GitHub/20241220_GitHub_Copilot_Free.png)
    - GitHub Pages
      - コンテンツを更新したにもかかわらず、更新した内容を表示できない
        - ビルドエラーとなっていることが考えられるので、GitHub Actionsが完了しているかを確認する
      - Liquid Error
        - コード例を引用している場合、記述によってLiquidによるパースがエラーとなるため、パース対象から除外する
          ```js
          ...
          {% raw %}
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, p: 3 }}
          {% endraw %}
          ...
          ```
    - GitHub Issue
      - GitHubも改良が進んでおり、Issueを作成すると、そのIssueのためのBranchを作成し、そのBranchをGitHub Desktopで開くとかもできる
        ![GitHub Issue](/images/GitHub/20250223_GitHub_Issue_to_Branch.png)
      - BranchからのMerge Requestを作成すると、Issueに関連付けられる
        ![GitHub PR](/images/GitHub/20250223_GitHub_Pull_Request_to_Issue.png)
      - Sub Issueの並び替え（Issueにカーソルを合わせるとカーソルが手になって並び替えできる）
        ![SubIssue Manually Sort](/images/GitHub/20250301_GitHub_SubIssue_ManuallySort.png)
        - Windows Insider 環境のEdgeではできない模様（カーソルが手に変わらない！）
          ![SubIssue Not Manually Sort](/images/GitHub/20250301_GitHub_SubIssue_NotManuallySort.png)
    - GitHub ProjectsでBoard作成してみた
      ![GitHub Projects Board](/images/GitHub/20250301_GitHub_Projects_Board.png)
 
##  Windows <a id="Windows"></a>
- [PowerShell 7.5.2](https://github.com/PowerShell/PowerShell)<span style="color: red;">*<<2025/06/25 updated from 7.5.1>>*</span>
  - インストール
    ```
    winget install --id Microsoft.Powershell --source winget
    ```
  - 更新
    - 製品版では、ストアアプリとして自動更新される
      ```
      2025/1/25 ストアアプリにて更新できないため、PowerShellの起動時に出るアップデートを通知するメッセージ内のリンクからダウンロード
      ```
    - Windows Insider 環境では、ストアで更新できない。
      - Windowsターミナルに表示されたリンクからインストーラをダウンロードする
        ![New Version Available](/images/Windows/20240728_Windows_PowerShell_7.4.4.png)
      - インストーラを起動して、セットアップする
        ![Setup with Installer](/images/Windows/20240728_Windows_PowerShell_Setup7.4.4.png)
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
- [GitHub Desktop 3.5.0](https://desktop.github.com/release-notes/) <span style="color: red;">*<<2025/06/18 updated from 3.4.16>>*</span>
  - サイトでのリリース通知があってから、アップデートできるまでにはタイムラグがありそう
  - 起動したGitHub Desktopでアップデートできる場合とできない場合があるみたい
    - 3.4.5 -> 3.4.6 OK
    - 3.4.0 -> 3.4.5 OK
    - 3.4.2 -> 3.4.5 NG

##  macOS <a id="macOS"></a>
- Git
  - gitを有効化するには、コマンドラインデベロッパーツールをインストールする
    - [コマンドラインデベロッパツールのインストール](https://tracpath.com/bootcamp/git-install-to-mac.html)
      ![CommandLineDeveloperTools](/images/Mac/20240813_CommandLineDeveloperTools.png)
  - gitを最新化するには、[homebrew](https://brew.sh)を使って、gitをインストールする
  - gitには、PAT(Personal Access Token)を使ってPushする
    -> [アクセストークンがないとGitHubでpushができない](https://qiita.com/masa_code/items/bb935c499f20d0fae7b0)
- XCode
  - [Xcode 16.4](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/05/31 Updated from 16.3>>*</span>
    ![iOS 18.5 Simulator](/images/Mac/20250531_Download_iOS18.5_Simulator.png)
  - [Xcode 26 Beta 7](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/09/05 Updated from 26 Beta 6>>*</span>
  - iOS Simulatorの更新
    - [Xcodeを使用してiOS simulatorを追加する方法](https://qiita.com/shint_1/items/656044190516a3926364)
    - XCodeで新しいバージョンをダウンロードする
    - XCodeで古いバージョンは削除し、単一のバージョンのみとすること（複数存在するとシミュレータでの実行時にエラーとなる模様）
    ![Components Update](/images/Mac/20250301_XCode_Components_Update.png)
    ![Components Updating](/images/Mac/20250301_XCode_Components_Updating.png)
- [CocoaPods 1.16.2](https://github.com/CocoaPods/CocoaPods) <span style="color: red;">*<<2025/01/09 Updated from 1.16.1>>*</span>
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
- watchman <br>
  react native + expoでの実行エラーで watchmanに繋がらないみたいなエラーが出るので、インストール
  ```
  brew install watchman
  ```
- [Zed 0.152.3](https://zed.dev) <span style="color: red;">*<<2024/09/10 installed>>*</span>
- [GIMP 3.0](https://www.gimp.org/) <span style="color: red;">*<<2025/03/18 updated from 3.0.0 RC1>>*</span>
