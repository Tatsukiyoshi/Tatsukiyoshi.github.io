# .NET

##  独学書
  |Text                                                         |Date      |Status
  |-------------------------------------------------------------|----------|---
  |[C++ プログラミング入門](http://examples.oreilly.com/core/)    |2021/10/17|Chapter 6 コンストラクタおよびデストラクタを用いた優れた抽象化<span style="color: red;">*finished*</span>
  |[やさしいＣ＃第３版](https://isbn2.sbcr.jp/03922/)             |2022/07/16|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/net/C%23/YCSSample)

##  環境
  |Machine         |Env／FW                                          |Last Updated
  |----------------|-------------------------------------------------|----------
  |Windows         |Visual Studio Community 2022 17.13.6             |[2025/04/09](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes)
  |                |- .NET 9.0.4                                     |[2025/04/09](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |- .NET 8.0.15                                    |[2025/04/09](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |- [Windows App SDK 1.6.3](#windows-app-sdk)      |[2024/11/23](https://learn.microsoft.com/ja-jp/windows/apps/windows-app-sdk/downloads)
  |Windows Insider |Visual Studio Community 2022 17.14.0 Preview 6.0 |[2025/05/10](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes-preview)
  |                |- .NET 10.0.0-preview.3.25171.5                  |[2025/04/12](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |  - [MAUI 10.0.0-preview.3](#maui)               |[2025/04/12](https://github.com/dotnet/maui)
  |                |  - Android Emulator v.35.3.11                   |2025/02/12
  |                |- .NET 9.0.3                                     |2025/03/24
  |                |- .NET 8.0.14                                    |2025/03/24

##  ノウハウ
### [Visual Studio](https://visualstudio.microsoft.com/ja/vs/) / [プレビュー](https://visualstudio.microsoft.com/ja/vs/preview/)
  - Visual Studio
    - Visual Studio 2022 17.13.3
      ![VS2022 17.13.3](../images/VisualStudio/20250313_Update_VS2022_17.13.3.png)
  - Visual Studio Preview
    - Visual Studio 2022 17.14 Preview 6.0
      ![VS2022 17.14 preview 6.0](../images/VisualStudio/20250510_Update_VS2022_17.14_Preview6.0.png)
  - [履歴](../history/VisualStudio.md)
  - [グローバル パッケージ、キャッシュ、および一時フォルダーを管理する](https://learn.microsoft.com/ja-jp/nuget/consume-packages/managing-the-global-packages-and-cache-folders)
    - NuGetパッケージは、既定では、ユーザフォルダに保存されるため、他のフォルダに保存する場合は、NUGET_PACKAGES環境変数でそのフォルダを指定する。
  - [Visual Studio Client Detector Utility](https://learn.microsoft.com/ja-jp/visualstudio/install/tools-for-managing-visual-studio-instances?view=vs-2022)
    ![Visual Studio Client Detector Utility](../images/VisualStudio/20231006_VisualStudio_ClientDetectorUtility.png)
    -  Visual Studio のインストールを検出して管理するために使用できるツールらしい！
  - Shift-JISで作成していたはずのソースがUnicodeに変換される？
    ![読み込み時の変換メッセージ](../images/VisualStudio/20240403_Csharp_convert_unicode.png)
  - パッケージ管理
    - NuGetパッケージ管理画面にて、「更新プログラム」に表示されるパッケージを更新する
    ![NuGetパッケージマネージャ](../images/VisualStudio/20240407_Update_NuGet_Package.png)
  - 注目した変更
    - GitHub Copilot (*17.10 Preview 3.0-*) <BR/>
      ![GitHub Copilot](../images/VisualStudio/20240412_GitHub_Copilot.png)    
    - ようこそ画面 (*17.6 Preview 2.0-*)
      ダイアログではなく、IDEにクイックアクションなどをまとめたようこそ画面が。
      ![ようこそ](../images/VisualStudio/20230317_VS2022_17.6_Preview2.0_welcome.png)
    - スペルチェッカ (*17.5 Preview 5.0-*)
      単語レベルでの間違いを指摘し、修正候補を提示する。
      ![スペルチェッカ](../images/VisualStudio/20230121_SpellChecker.png)
### .NET
  - [.NET 10.0.0-preview3](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)(*2025/04/12* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 10.0"を指定することで実現
      ![.NET 10 with VS2022](../images/VisualStudio/20250227_VS2022_dotnet10.png)
    - ターゲットフレームワークである".NET 10.0"のバージョンが表示できる
      ![.NET 10.0.0-preview3](../images/VisualStudio/20250412_dotnet10_Preview3.png)
  - [.NET 9.0.4](https://dotnet.microsoft.com/en-us/download/dotnet/9.0?hl=ja-JP)(*2025/04/09* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 9.0"を指定することで実現
      ![.NET 9 with VS2022](../images/VisualStudio/20240314_VS2022_dotnet9.png)
    - ターゲットフレームワークである".NET 9.0"のバージョンが表示できる
      ![.NET 9.0.4](../images/VisualStudio/20250506_dotnet9.0.4.png)
  - [.NET での破壊的変更](https://learn.microsoft.com/ja-jp/dotnet/core/compatibility/breaking-changes)
  - [.NET 8.0.15](https://dotnet.microsoft.com/ja-jp/download/dotnet/8.0)(*2025/04/09* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 8.0"を指定していれば、".NET 8.0"のバージョンが表示できる
      ![.NET 8.0.15](../images/VisualStudio/20250506_dotnet8.0.15.png)

  - Wingetでのインストール
    ```
    winget install Microsoft.DotNet.SDK.8
    winget install Microsoft.DotNet.SDK.9
    winget install Microsoft.DotNet.SDK.Preview
    ```
  - .NET 環境情報
  ```
  dotnet --info
  ```
  <details>
  <summary>Visual Studio 2022 Preview＠Windows Insider</summary>

  ```
  .NET SDK:
  Version:           10.0.100-preview.3.25201.16
  Commit:            9dee3cf508
  Workload version:  10.0.100-preview.3.25208.1
  MSBuild version:   17.14.0-preview-25177-05+903614e16

  ランタイム環境:
  OS Name:     Windows
  OS Version:  10.0.26200
  OS Platform: Windows
  RID:         win-x64
  Base Path:   C:\Program Files\dotnet\sdk\10.0.100-preview.3.25201.16\

  インストール済みの .NET ワークロード:
  [android]
    インストール ソース: SDK 10.0.100-preview.3, VS 17.14.36105.17
    マニフェストのバージョン:    36.0.0-preview.3.22/10.0.100-preview.3
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-preview.3\microsoft.net.sdk.android\36.0.0-preview.3.22\WorkloadManifest.json
    インストールの種類:              Msi

  [ios]
    インストール ソース: SDK 10.0.100-preview.3, VS 17.14.36105.17
    マニフェストのバージョン:    18.2.10695-net10-p3/10.0.100-preview.3
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-preview.3\microsoft.net.sdk.ios\18.2.10695-net10-p3\WorkloadManifest.json  
    インストールの種類:              Msi

  [maccatalyst]
    インストール ソース: SDK 10.0.100-preview.3, VS 17.14.36105.17
    マニフェストのバージョン:    18.2.10695-net10-p3/10.0.100-preview.3
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-preview.3\microsoft.net.sdk.maccatalyst\18.2.10695-net10-p3\WorkloadManifest.json
    インストールの種類:              Msi

  [maui-windows]
    インストール ソース: SDK 10.0.100-preview.3, VS 17.14.36105.17
    マニフェストのバージョン:    10.0.0-preview.3.25208.1/10.0.100-preview.3
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-preview.3\microsoft.net.sdk.maui\10.0.0-preview.3.25208.1\WorkloadManifest.json
    インストールの種類:              Msi

  新しいマニフェストをインストールするときに workload sets を使用するように構成されています。

  Host:
    Version:      10.0.0-preview.3.25171.5
    Architecture: x64
    Commit:       0a33e18a0b

  .NET SDKs installed:
    8.0.407 [C:\Program Files\dotnet\sdk]
    9.0.202 [C:\Program Files\dotnet\sdk]
    9.0.300-preview.0.25177.5 [C:\Program Files\dotnet\sdk]
    10.0.100-preview.3.25201.16 [C:\Program Files\dotnet\sdk]

  .NET runtimes installed:
    Microsoft.AspNetCore.App 8.0.14 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 9.0.3 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 10.0.0-preview.3.25172.1 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.NETCore.App 8.0.14 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 9.0.3 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 10.0.0-preview.3.25171.5 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.WindowsDesktop.App 8.0.14 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 9.0.3 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 10.0.0-preview.3.25174.1 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

  Other architectures found:
    x86   [C:\Program Files (x86)\dotnet]
      registered at [HKLM\SOFTWARE\dotnet\Setup\InstalledVersions\x86\InstallLocation]

  Environment variables:
    Not set

  global.json file:
    Not found

  Learn more:
    https://aka.ms/dotnet/info

  Download .NET:
    https://aka.ms/dotnet/download
  ```
  </details>
  <details>
  <summary>Visual Studio 2022@Windows</summary>

  ```
  .NET SDK:
  Version:           9.0.203
  Commit:            dc7acfa194
  Workload version:  9.0.200-manifests.12d79ccf
  MSBuild version:   17.13.20+a4ef1e90f

  ランタイム環境:
  OS Name:     Windows
  OS Version:  10.0.26100
  OS Platform: Windows
  RID:         win-x64
  Base Path:   C:\Program Files\dotnet\sdk\9.0.203\

  インストール済みの .NET ワークロード:
  表示するインストール済みワークロードはありません。
  新しいマニフェストをインストールするときに loose manifests を使用するように構成されています。

  Host:
    Version:      9.0.4
    Architecture: x64
    Commit:       f57e6dc747

  .NET SDKs installed:
    6.0.428 [C:\Program Files\dotnet\sdk]
    9.0.203 [C:\Program Files\dotnet\sdk]

  .NET runtimes installed:
    Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 8.0.15 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 9.0.4 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 8.0.15 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 9.0.4 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.WindowsDesktop.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 8.0.15 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 9.0.4 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

  Other architectures found:
    x86   [C:\Program Files (x86)\dotnet]
      registered at [HKLM\SOFTWARE\dotnet\Setup\InstalledVersions\x86\InstallLocation]

  Environment variables:
    Not set

  global.json file:
    Not found

  Learn more:
    https://aka.ms/dotnet/info

  Download .NET:
    https://aka.ms/dotnet/download
  ```
  </details>

### Windows App SDK
  - Windows App SDK
    ![Hello World](../images/VisualStudio/20241011_VS2022_17.11.5_AppSDK1.6.1.png)
  - NET 8.0
    - [.NET SDK で小さい RID グラフを使う](https://learn.microsoft.com/ja-jp/dotnet/core/compatibility/sdk/8.0/rid-graph)
      ```xml
      <PropertyGroup>
        ...
        <RuntimeIdentifier>win-x64</RuntimeIdentifier>
      </PropertyGroup>
      ```
  - バージョン確認
    ```
    get-appxpackage *appruntime.1.6*
    ```
    <details>
    <summary>Windows App SDK 1.6.3</summary>

    ```
    Name              : Microsoft.WindowsAppRuntime.1.6
    Publisher         : CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Architecture      : X86
    ResourceId        :
    Version           : 6000.318.2304.0
    PackageFullName   : Microsoft.WindowsAppRuntime.1.6_6000.318.2304.0_x86__8wekyb3d8bbwe
    InstallLocation   : C:\Program Files\WindowsApps\Microsoft.WindowsAppRuntime.1.6_6000.318.2304.0_x86__8wekyb3d8bbwe
    IsFramework       : True
    PackageFamilyName : Microsoft.WindowsAppRuntime.1.6_8wekyb3d8bbwe
    PublisherId       : 8wekyb3d8bbwe
    IsResourcePackage : False
    IsBundle          : False
    IsDevelopmentMode : False
    NonRemovable      : False
    IsPartiallyStaged : False
    SignatureKind     : Store
    Status            : Ok

    Name              : Microsoft.WindowsAppRuntime.1.6
    Publisher         : CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Architecture      : X64
    ResourceId        :
    Version           : 6000.318.2304.0
    PackageFullName   : Microsoft.WindowsAppRuntime.1.6_6000.318.2304.0_x64__8wekyb3d8bbwe
    InstallLocation   : C:\Program Files\WindowsApps\Microsoft.WindowsAppRuntime.1.6_6000.318.2304.0_x64__8wekyb3d8bbwe
    IsFramework       : True
    PackageFamilyName : Microsoft.WindowsAppRuntime.1.6_8wekyb3d8bbwe
    PublisherId       : 8wekyb3d8bbwe
    IsResourcePackage : False
    IsBundle          : False
    IsDevelopmentMode : False
    NonRemovable      : False
    IsPartiallyStaged : False
    SignatureKind     : Store
    Status            : Ok
    ```
    </details>

### MAUI
  - [.NET MAUI 10](https://learn.microsoft.com/en-us/dotnet/maui/whats-new/dotnet-10?view=net-maui-9.0)
    - Visual Studio
      - Visual Studio 2022 17.14 Preview 2.0 対応
        - 17.14 Preview 2.0 / MAUI 10.0.0-preview.3.25201.16 / Pixel 9 API 35(Android 15)
          ![MAUI - Pixel 9 API 35](../images/VisualStudio/20250412_VS2022_17.14_Preview2.0_MAUI10.0.0preview3_Android15.png)
          - ワークロードを更新するも、APIレベル36が必要とのメッセージで実行できず
          - そもそもSDK Managerでインストールしても、イメージファイルをダウンロードする手段がない
      - [履歴](../history/VisualStudio.md)
    - MAUIワークロードの更新
      ```
      dotnet workload update
      ```

      <details>
        <summary>MAUI Update Log</summary>

        ```
        .NET 10.0 へようこそ!
        ---------------------
        SDK バージョン: 10.0.100-preview.3.25201.16

        テレメトリ
        ---------
        .NET ツールは、エクスペリエンスの向上のために利用状況データを収集します。データは Microsoft によって収集され、コミュニティと共有されます。テレメトリをオプトアウトするには、好みのシェルを使用して、DOTNET_CLI_TELEMETRY_OPTOUT 環境変数を '1' または 'true' に設定できます。

        .NET CLI ツールのテレメトリの詳細をご覧ください: https://aka.ms/dotnet-cli-telemetry

        ----------------
        ASP.NET Core HTTPS 開発証明書をインストールしました。
        証明書を信頼するには、'dotnet dev-certs https --trust' を実行します
        HTTPS の詳細情報: https://aka.ms/dotnet-https

        ----------------
        最初のアプリを作成するには、https://aka.ms/dotnet-hello-world を参照してください
        最新情報については、https://aka.ms/dotnet-whats-new を参照してください
        ドキュメントを探すには、https://aka.ms/dotnet-docs を参照してください
        GitHub で問題の報告とソースの検索を行うには、https://github.com/dotnet/core を参照してください
        'dotnet --help' を使用して使用可能なコマンドを確認するか、https://aka.ms/dotnet-cli にアクセスしてください
        --------------------------------------------------------------------------------------

        広告マニフェスト microsoft.net.workloads を更新しました。
        ワークロードのバージョン 10.0.100-preview.3.25208.1 をインストールしています。
        Downloading microsoft.net.workloads.10.0.100-preview.3.msi.x64 (10.100.0-preview.3.25208.1)
        microsoft.net.workloads.10.0.100-preview.3.msi.x64 をインストールしています ...... Done
        Downloading microsoft.net.workload.emscripten.current.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25168.2)
        Downloading microsoft.net.workload.emscripten.net6.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25168.2)
        Downloading microsoft.net.workload.emscripten.net7.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25168.2)
        Downloading microsoft.net.workload.emscripten.net8.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25168.2)
        Downloading microsoft.net.sdk.android.manifest-10.0.100-preview.3.msi.x64 (36.0.0-preview.3.22)
        microsoft.net.sdk.android.manifest-10.0.100-preview.3.msi.x64 をインストールしています ..... Done
        Downloading microsoft.net.sdk.ios.manifest-10.0.100-preview.3.msi.x64 (18.2.10695-net10-p3)
        microsoft.net.sdk.ios.manifest-10.0.100-preview.3.msi.x64 をインストールしています ..... Done
        Downloading microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.3.msi.x64 (18.2.10695-net10-p3)
        microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.3.msi.x64 をインストールしています ..... Done
        Downloading microsoft.net.sdk.macos.manifest-10.0.100-preview.3.msi.x64 (15.2.10695-net10-p3)
        microsoft.net.sdk.macos.manifest-10.0.100-preview.3.msi.x64 をインストールしています ..... Done
        Downloading microsoft.net.sdk.maui.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25208.1)
        microsoft.net.sdk.maui.manifest-10.0.100-preview.3.msi.x64 をインストールしています ..... Done
        Downloading microsoft.net.sdk.tvos.manifest-10.0.100-preview.3.msi.x64 (18.2.10695-net10-p3)
        microsoft.net.sdk.tvos.manifest-10.0.100-preview.3.msi.x64 をインストールしています ..... Done
        Downloading microsoft.net.workload.mono.toolchain.current.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25171.5)
        Downloading microsoft.net.workload.mono.toolchain.net6.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25171.5)
        Downloading microsoft.net.workload.mono.toolchain.net7.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25171.5)
        Downloading microsoft.net.workload.mono.toolchain.net8.manifest-10.0.100-preview.3.msi.x64 (10.0.0-preview.3.25171.5)
        この機能バンドにはワークロードがインストールされていません。以前の SDK バージョンでインストールしたワークロードを更新するには、--from-previous-sdk オプションを含めます。
        Visual Studio ワークロードのインストール レコードを書き込み中: 'maui-windows, maccatalyst, ios, android'
        Downloading Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 をインストールしています ...... Done
        Downloading Microsoft.Maui.Sdk.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Graphics.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Graphics.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Resizetizer.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Resizetizer.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.Maui.Templates.net10.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Templates.net10.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Core.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Core.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Controls.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Controls.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Controls.Build.Tasks.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Controls.Build.Tasks.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Controls.Core.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Controls.Core.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Controls.Xaml.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Controls.Xaml.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Controls.Compatibility.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Controls.Compatibility.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.Maui.Essentials.Msi.x64 (10.0.0-preview.3.25208.1)
        Microsoft.Maui.Essentials.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.MacCatalyst.Sdk.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.MacCatalyst.Sdk.net10.0_18.2.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.MacCatalyst.Ref.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.MacCatalyst.Ref.net10.0_18.2.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.MacCatalyst.Templates.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.MacCatalyst.Templates.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ........... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (8.0.15)
        Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています .............. Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (8.0.15)
        Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (8.0.15)
        Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (8.0.15)
        Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (9.0.4)
        Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (9.0.4)
        Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.iOS.Sdk.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.iOS.Sdk.net10.0_18.2.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.iOS.Windows.Sdk.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.iOS.Windows.Sdk.net10.0_18.2.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.iOS.Ref.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.iOS.Ref.net10.0_18.2.Msi.x64 をインストールしています ...... Done
        Downloading Microsoft.iOS.Runtime.ios-arm64.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.iOS.Runtime.ios-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.2.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.iOS.Templates.Msi.x64 (18.2.10695-net10-p3)
        Microsoft.iOS.Templates.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ............. Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (8.0.15)
        Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (8.0.15)
        Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (8.0.15)
        Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (36.0.0-preview.3.22)
        Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています .............. Done
        Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (35.0.61)
        Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ............... Done
        Downloading Microsoft.Android.Ref.36.Msi.x64 (36.0.0-preview.3.22)
        Microsoft.Android.Ref.36.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.Android.Runtime.Mono.36.android-arm.Msi.x64 (36.0.0-preview.3.22)
        Microsoft.Android.Runtime.Mono.36.android-arm.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.Android.Runtime.Mono.36.android-arm64.Msi.x64 (36.0.0-preview.3.22)
        Microsoft.Android.Runtime.Mono.36.android-arm64.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.Android.Runtime.Mono.36.android-x86.Msi.x64 (36.0.0-preview.3.22)
        Microsoft.Android.Runtime.Mono.36.android-x86.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.Android.Runtime.Mono.36.android-x64.Msi.x64 (36.0.0-preview.3.22)
        Microsoft.Android.Runtime.Mono.36.android-x64.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.Android.Templates.Msi.x64 (36.0.0-preview.3.22)
        Microsoft.Android.Templates.Msi.x64 をインストールしています ..... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ........... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ........ Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ........ Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ........ Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (9.0.4)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ........ Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています ......... Done
        Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています .......... Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ........ Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ....... Done
        Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (10.0.0-preview.3.25171.5)
        Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ........ Done

        ワークロード maui-windows maccatalyst ios android が正常に更新されました。
        ```
      </details>

    - Visual Studio Code
      - [.NET MAUI 拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-maui)
    - MAUIワークロードのインストール
      ```
      dotnet workload install maui
      ```
    - MAUIワークロードの一覧
      ```
      dotnet workload list
      ```
    - ビルド
      ```
      dotnet build -t:Run -f net8.0-android -p:AndroidSdkDirectory=D:\AndroidSdk
      ```
    - Androidエミュレータ
      ```
      D:\AndroidSdk\emulator\emulator.exe -avd Pixel_3a_API_34_extension_level_7_x86_64
      ```
    - [履歴](../history/MAUI.md)
### ASP.NET MVC
  - [ASP.NET MVC でCRUD](https://qiita.com/zaburo/items/610bd34df3c819c67551)
### Azure
  - [Azureポータル](https://portal.azure.com/#home)
  - [Visual Studio Code を使用して Azure Functions を開発する](https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-develop-vs-code?tabs=csharp)
    ![ブラウザから実行してみた](../images/Azure/20230701_FunctionsTrial.png)
### Blazor
  - [Blazor WebAssembly アプリケーションプログラミング自習書](https://qiita.com/jsakamoto/items/244163860b4626c02ba0)
  - [Getting Started with Blazor Scheduler Component](https://blazor.syncfusion.com/documentation/scheduler/getting-started)
    ![SyncFusion Schedule Component](../images/Blazor/20230322_SyncFusionSchedulerInit.png)
  - Blazor入門（日経ソフトウェア 2021年9月号）**@2021/09/26** <span style="color: red;">*finished*</span>
### C#
  - [やさしいＣ＃第３版](https://isbn2.sbcr.jp/03922/)
    - [サポートページ](http://mana.on.coocan.jp/yasacs.html)
  - ノウハウ
    - フリーアイコン
      - GO(https://www.flaticon.com/free-icon/go_652364)
      - GoBack(https://www.flaticon.com/free-icon/back-button_93634?term=back&page=1&position=6&page=1&position=6&related_id=93634&origin=search)
    - [アプリケーション構成ファイル](https://www.fenet.jp/dotnet/column/language/9654/)
    - ColorDialog
    - [Using custom fonts on a Label on Winforms](https://stackoverflow.com/questions/1297264/using-custom-fonts-on-a-label-on-winforms)
      ![LINE Seed JP](../images/Windows/LINESeedJP.png)
  - リソースファイル（XML形式）の解析
    - [C#でのXML読み込み方法とは](https://www.fenet.jp/dotnet/column/language/8240/)
      ```
      <data name="LINESeedJP_TTF_Bd" type="System.Resources.ResXFileRef, System.Windows.Forms">
        <value>..\Fonts\LINESeedJP_TTF_Bd.ttf;System.Byte[], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
      </data>
      <data name="LINESeedJP_TTF_Rg" type="System.Resources.ResXFileRef, System.Windows.Forms">
        <value>..\Fonts\LINESeedJP_TTF_Rg.ttf;System.Byte[], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
      </data>
      ```
      ![解析結果例](../images/VisualStudio/20230326_Analyze_XML_Resources.png)
### C++
  - C11/C++17 - [C++環境設定](https://code.visualstudio.com/docs/cpp/config-msvc)
    - HelloWorld
    - [Learn C++](https://www.learncpp.com/) **@2019/10/22** 1.5 Introduction to iostream
