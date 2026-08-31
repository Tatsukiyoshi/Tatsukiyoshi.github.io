---
layout: ../../layouts/KnowhowLayout.astro
title: Tools
nav: environment
---

```
OS/言語を問わず利用するツールの情報
```
[共通](#Common) | [Windows](#Windows) | [macOS](#macOS)

##  共通 <a id="Common"></a>
### エディタ
- [Visual Studio Code 1.135.0](https://code.visualstudio.com/) <span style="color: red;">*<<2026/08/28 updated from 1.134.0>>*</span>
  ```
  Atomをベースに開発された業界標準エディタ（Electonで実装）
  ```
  - 更新モジュールの存在を伝えるメッセージが出るようになった
    ![Update Message](/images/VisualStudioCode/20250308_Update_Message.png)
  - ChromeOS Flex
    - X11で起動するため、ショートカットを変更する
      ```
      sudo sed -i 's|Exec=/usr/share/code/code|Exec=/usr/share/code/code --ozone-platform=x11|g' /usr/share/applications/code.desktop
      ```
      - こうすることでウィンドウが描画でき、日本語入力も問題なくできる
  - [以前の新機能](./history/VSCode)
  - 開発環境は、Visual Studio Codeを中心に使っている。
  - インストールしている拡張機能の一覧は、[VSCode拡張機能](/knowhow/sub/vscodeExtensions)にまとめている。<BR />

- [Zed](https://zed.dev)
  ```
  Atom開発者によるエディタ（Rustで実装）
  ```
  - Windows
    - [Zed 1.17.2](https://zed.dev/windows) <span style="color: red;">*<<2026/08/29 updated from 1.16.3>>*</span>
      ![Claude Tasks](/images/ClaudeCode/20260711_Claude_Task_on_Zed.png)
      ![On boarding](/images/Zed/20251018_Zed_On_boarding.png)
  - macOS
    - [Zed 1.17.2](https://zed.dev) <span style="color: red;">*<<2026/08/27 updated from 1.16.3>>*</span>
  - 解消されたバグ
    - Claude Agentが提示するAskUserQuestionダイアログで、SubmitするとAgent Panelが閉じてしまう
      - 直近の1.17.2で解消された模様
  - 既知の未修正バグ
    - 現象

      Zed利用中にアプリが異常終了（クラッシュ）する

      再起動後、Agent Panelでスレッドを開く（または新規スレッド作成）と Resource not found エラーが発生し、応答なしになる

      新しいスレッドを作っても同じ現象が再発することがある

      ログ（zed: open log で確認可能）には以下のような行が出る

      ```
      ERROR [gpui::app] timed out waiting on app_will_quit
      ...
      WARN  [agent_servers::acp] agent stderr: [session/query] sessionId=<uuid> resume=<uuid> apiType=native baseUrl=native
      ```
    - 原因

      Zedの「Claude」Agent Panelは agent_servers.claude-acp（agentclientprotocol/claude-agent-acp パッケージ、Zedのregistry経由）を使っている。これはあくまでCLI/SDKバックエンドを叩く正規のアダプタであり、「native接続だから壊れる」わけではない（apiType=native は認証方式を示すだけで、正常に動くセッションでも同じ表示になる）。

      実際の原因は claude-agent-acp 側の未解決の既知バグ。Zedクラッシュ→アダプタのワーカープロセスも道連れで異常終了→再起動時にワーカーが実体のない新しいセッションIDでresumeしようとし、Resource not found を返し続ける、という挙動。

    - 関連する既知Issue（agentclientprotocol/claude-agent-acp）
      #906 conversation_reset drops new_conversation_id, causing stale session resume after worker restart — Open。ワーカー再起動後に古い/実体のないセッションIDでresumeしてしまう。今回の直接原因と推測。
      #1011 Orphaned claude subprocess children accumulate under a long-lived agent across repeated session/load resumes — Open。resumeを繰り返すと孤立サブプロセスが溜まる。
      #1019 Resuming a native claude --session-id conversation silently completes without its history instead of loading it or failing — Open。resumeが履歴なしで“成功”してしまう類似症状。
      #363 fix: throw resourceNotFound when loadSession fails to resume — Closed。「Resource not found」というエラー文言自体は、resume失敗時に意図的に投げる設計であることが確認できる。
      #338 Claude CLI subprocess death leaves session permanently broken — Closed。クラッシュでサブプロセスが死ぬとセッションが恒久的に壊れる、という過去の類似バグ（一部修正済み）。

    - Zed本体側の関連Issue:
      - zed-industries/zed #50304 Claude Code Agent Panel Has Frequent Errors and Bugs in Recent Update
      - zed-industries/zed #54327 Claude Agent inaccessible
      - zed-industries/zed #50807 claude-acp agent server not registered after every Zed restart

      設定（settings.json の agent_servers）側で回避できる項目は見当たらない。アダプタのアップデートで直る可能性はあるが、2026-08-27時点では未修正。

    - 対応策
      1. 壊れたスレッドをZedの内部DBでアーカイブする（自動resumeループを止める）
      Zedはスレッド履歴を %LOCALAPPDATA%\Zed\db\0-stable\db.sqlite の sidebar_threads テーブルで管理している。壊れたセッションを archived = 1 にすると、Zedがそれを再度開こうとしなくなる。

          手順:

          - Zedを完全に終了する（プロセスが残っていないか Get-Process -Name "Zed*" で確認）

          - DBをバックアップする（.sqlite 本体に加えて -wal / -shm ファイルも一式コピーしておく）

            ```sh
            Copy-Item "$env:LOCALAPPDATA\Zed\db\0-stable\db.sqlite"     "$env:LOCALAPPDATA\Zed\db\0-stable\db.sqlite.bak-YYYYMMDD"
            Copy-Item "$env:LOCALAPPDATA\Zed\db\0-stable\db.sqlite-wal" "$env:LOCALAPPDATA\Zed\db\0-stable\db.sqlite-wal.bak-YYYYMMDD"
            Copy-Item "$env:LOCALAPPDATA\Zed\db\0-stable\db.sqlite-shm" "$env:LOCALAPPDATA\Zed\db\0-stable\db.sqlite-shm.bak-YYYYMMDD"
            ```

          - 該当スレッドを確認・アーカイブする（sqlite3 CLIが必要）

            ```sh
            # 直近の未アーカイブスレッド一覧を確認
            sqlite3 -separator "|" "C:/Users/<user>/AppData/Local/Zed/db/0-stable/db.sqlite" \
            "SELECT session_id, title, updated_at, archived FROM sidebar_threads WHERE archived = 0 ORDER BY updated_at DESC LIMIT 5;"

            # 壊れているセッションIDをアーカイブ
            sqlite3 "C:/Users/<user>/AppData/Local/Zed/db/0-stable/db.sqlite" \
            "UPDATE sidebar_threads SET archived = 1 WHERE session_id = '<壊れたsession_id>';"
            ```

            Zedを再起動し、直近の未アーカイブスレッドが正常なもの（実体のある .jsonl を持つセッション）になっているか確認する

        1. ターミナルからClaude Code CLIで直接resumeする（確実な復旧手段）

            Zed経由の復旧が失敗する場合、Zedを介さず claude コマンドで直接resumeするのが最も確実。

            ```sh
            # 必ず該当プロジェクトのディレクトリに移動してから実行する
            # （--resume はカレントディレクトリに紐づくプロジェクト単位でセッションを探すため）
            cd <対象プロジェクトのディレクトリ>
            claude --resume <session-id>
            ```
            セッションの実体ファイルは ~/.claude/projects/<プロジェクトディレクトリ名>/<session-id>.jsonl にある
            ファイルが存在し、末尾が正常に完結した形（途中で切れていない）であれば、まず復旧できる
            違うディレクトリで実行すると No conversation found with session ID: ... になるので注意
            resume成功後、「これまでの作業内容を要約して」のように聞いてみると、文脈が正しく読み込まれているか確認できる
            起動時に「Try the new fullscreen renderer?」と聞かれることがあるが、これはCLIのUI機能案内で本題とは無関係（2. Not now で進めてよい）

        1. その他の気づき

            CLIから直接 claude を使うと、アカウント連携しているスマートフォン（Claudeアプリ）に通知が飛ぶことがある（セッションの origin.kind が task-notification の場合）。Zed/VSCode埋め込みのAgent Panel経由では通知は来ない。不要なら端末側の通知設定でオフにできる。

  - New Claude LLM "Fable 5"
    ![Fable 5](/images/Zed/20260610_Zed_Claude_Fable.png)
  - Claude Agent Integration
    - Install
      ![Install](/images/Zed/20260508_Zed_Claude_Agent.png)
    - Select 
      ![Select](/images/Zed/20260508_Zed_Claude_Agent_Select.png)

- [Codex 26.616.81150](https://openai.com/ja-JP/codex/) for macOS <span style="color: red;">*<<2026/06/24 updated from 26.616.41845>>*</span>
  - バージョン情報のダイアログが大きくなった？
    ![Update](/images/OpenAI/20260606_Codex_macOS26.602.40724.png)
  ![Codex](/images/macOS/20260203_macOS_Codex.png)
  - on Windows
    - [Codex 26.429.30905](https://openai.com/ja-JP/codex/)<span style="color: red;">*<<2026/05/02 auto updated from 26.422.62136>>*</span>
      - 新機能
        ![New Feature](/images/OpenAI/20260328_Codex_New_Feature.png)
      - ダウンローダをダウンロードして、ストアから本体をダウンロード
        ![Download](/images/OpenAI/20260305_Windows_Codex.png)
      - 起動後、OpenAIにサインイン
        ![Signed](/images/OpenAI/20260305_Windows_Codex_Signed.png)
        - 3/5に3/2までご利用いただけますって！？

- [Cursor 3.2.21](https://www.cursor.com/) <span style="color: red;">*<<2026/05/04 updated from 3.2.11>>*</span>
  ```
  元祖AIエディタ（Visual Studio Codeクローン）
  ```
  ![Update](/images/Cursor/20260308_Update.png)

- [AntiGravity 2.0.3](https://antigravity.google/)  for ChromeOS Flex / Linux(Debian/Ubuntu) <span style="color: red;">*<<2026/05/29 updated from 1.23.2>>*</span>
  ```
  GoogleによるAIエディタ（Visual Studio Codeクローン）
  ```
  - インストール@ChromeOS Flex / Linux(Debian/Ubuntu)
    1.  Add the repository to sources.list.d
        ```
        sudo mkdir -p /etc/apt/keyrings
        curl -fsSL https://us-central1-apt.pkg.dev/doc/repo-signing-key.gpg | \
        sudo gpg --dearmor --yes -o /etc/apt/keyrings/antigravity-repo-key.gpg
        echo "deb [signed-by=/etc/apt/keyrings/antigravity-repo-key.gpg] https://us-central1-apt.pkg.dev/projects/antigravity-auto-updater-dev/ antigravity-debian main" | \
        sudo tee /etc/apt/sources.list.d/antigravity.list > /dev/null
        ```
    1.  Update the package cache
        ```
        sudo apt update
        ```
    1. Install the package
        ```
        sudo apt install antigravity
        ```
  - 日本語化
    - 拡張機能からMicrosoftが提供するLanguage Packをインストールする
  - 更新
    - Visual Studio Codeのクローンですけど！
      ![Updating](/images/Antigravity/20260205_Antigravity_Updating.png)
  - 不具合報告
    - [[Critical Bug] Windows Issues: UI Clipping (Hidden Buttons) and Text Encoding Corruption](https://discuss.ai.google.dev/t/critical-bug-windows-issues-ui-clipping-hidden-buttons-and-text-encoding-corruption/125030) <span style="color: red;">*<<2026/02/21 posted>>*</span>
  - セットアップ@Windows
    ![Setup](/images/Antigravity/20251120_Antigravity.png)
    ![Google Authenticated](/images/Antigravity/20251120_Antigravity2.png)

### その他
- [Git](/knowhow/sub/Git)

- [HTTPS対応 ローカル開発サーバー](/knowhow/HttpsServer)

- [proto 0.53.1](https://moonrepo.dev/proto) <span style="color: red;">*<<2025/10/05 installed>>*</span>
  - インストール
    - Windows
      ```
      irm https://moonrepo.dev/install/proto.ps1 | iex
      ```
  - ツールのインストール
    - [Pkl 0.29.1](https://pkl-lang.org/) <span style="color: red;">*<<2025/10/05 installed>>*</span>
      ```
      proto plugin add pkl https://raw.githubusercontent.com/milesj/proto-plugins/refs/heads/master/pkl.toml
      proto install pkl --pin
      ```

##  Windows <a id="Windows"></a>
- [PowerShell 7.6.5](https://github.com/PowerShell/PowerShell)<span style="color: red;">*<<2026/08/18 updated from 7.6.3>>*</span>
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

- [GitHub CLI 2.85](https://cli.github.com/) <span style="color: red;">*<<2026/01/24 Installed>>*</span>
  - インストール@Windows
    ```
    winget install --id GitHub.cli
    ```
  - インストール@macOS
    ```
    brew install gh
    ```
  - 更新@macOS
    ```
    brew upgrade gh
    ```

- [Claude Desktop 1.1.1520](https://claude.com/ja-jp/download) <span style="color: red;">*<<2026/01/30 Auto Updated from 1.0.2339 >>*</span>

- [mise 2026.1.6](https://mise.jdx.dev/) <span style="color: red;">*<<2026/01/24 installed >>*</span>
  - インストール
    ```
    winget install jdx.mise
    ```
  - 更新
    ```
    mise self-update
    ```
  - ツールの更新
    - bun upgrade
      ```
      mise use -g bun@latest
      ```

##  macOS <a id="macOS"></a>
- Xcode
  - [Xcode 27.0 Beta 2](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2026/06/26 Updated from 26.4>>*</span>
  - Device Hubに刷新
    ![Device Hub](/images/macOS/20260627_Device_Hub_XCode27.0Beta2.png)
  - iOS Simulatorの更新
    - 追加した直後は検証される
      ![Runtime検証](/images/iOS/20260316_iPhone17_Pro_iOS26.3.1_Init.png)
    - [Xcodeを使用してiOS simulatorを追加する方法](https://qiita.com/shint_1/items/656044190516a3926364)
    - XCodeで新しいバージョンをダウンロードする
    - XCodeで古いバージョンは削除し、単一のバージョンのみとすること（複数存在するとシミュレータでの実行時にエラーとなる模様）
      ![Components Update](/images/macOS/20250301_XCode_Components_Update.png)
      ![Components Updating](/images/macOS/20250301_XCode_Components_Updating.png)
  - 履歴
    - [Xcode 26.4](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2026/03/28 Updated from 26.3>>*</span>
    - [Xcode 26.3](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2026/02/28 Updated from 26.2>>*</span>
    - [Xcode 26.2](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/12/17 Updated from 26.2 Beta>>*</span>
    - [Xcode 26.2 Beta](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/11/08 Updated from 26.1>>*</span>
    - [Xcode 26.1](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/11/08 Updated from 26.1 RC>>*</span>
    - [Xcode 26.1 RC](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/10/31 Updated from 26>>*</span>
    - [Xcode 26](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/09/16 Updated from 26 Beta 7>>*</span>
    - [Xcode 26 Beta 7](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/09/05 Updated from 26 Beta 6>>*</span>
    - [Xcode 16.4](https://developer.apple.com/jp/xcode/) <span style="color: red;">*<<2025/05/31 Updated from 16.3>>*</span>
      ![iOS 18.5 Simulator](/images/macOS/20250531_Download_iOS18.5_Simulator.png)
- Homebrew 5.0.5 <span style="color: red;">*<<2025/12/09 Updated>>*</span>
- [CocoaPods 1.16.2_2](https://github.com/CocoaPods/CocoaPods) <span style="color: red;">*<<2026/02/01 Updated from 1.16.2_1>>*</span>
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
- [GIMP 3.0](https://www.gimp.org/) <span style="color: red;">*<<2025/03/18 updated from 3.0.0 RC1>>*</span>
