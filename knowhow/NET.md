---
title:  .NET
layout: single
classes:  wide
sidebar:
  nav: main
---
##  独学書

  |Text                                                         |Date      |Status
  |-------------------------------------------------------------|----------|---
  |[C++ プログラミング入門](http://examples.oreilly.com/core/)    |2021/10/17|Chapter 6 コンストラクタおよびデストラクタを用いた優れた抽象化<span style="color: red;">*finished*</span>
  |[やさしいＣ＃第３版](https://isbn2.sbcr.jp/03922/)             |2022/07/16|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/net/C%23/YCSSample)

##  環境

  |Machine         |Env / FW                                          |Last Updated
  |----------------|--------------------------------------------------|----------
  |Windows         |Visual Studio Community 2022 17.14.14             |[2025/09/10](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes)
  |                |- .NET 9.0.9                                      |[2025/09/10](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |- .NET 8.0.20                                     |[2025/09/10](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |- [Windows App SDK 1.6.3](#windows-app-sdk)       |[2024/11/23](https://learn.microsoft.com/ja-jp/windows/apps/windows-app-sdk/downloads)
  |Windows Insider |Visual Studio Community 2026 18.0.0 Insiders      |[2025/09/12](https://learn.microsoft.com/en-us/visualstudio/releases/vs18/release-notes-insiders)
  |                |- .NET 10.0.100-rc.1.25451.107                    |[2025/09/10](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |  - [MAUI 10.0.0-rc.1.25452.6](#maui)             |[2025/09/10](https://github.com/dotnet/maui)
  |                |  - Android Emulator v.35.5.10                    |2025/06/12
  |                |- .NET 9.0.9                                      |2025/09/10
  |                |- .NET 8.0.20                                     |2025/09/10

## [Visual Studio Insiders](https://visualstudio.microsoft.com/insiders/?rwnlp=ja) / [履歴](/history/VisualStudioInsiders)
- Visual Studio Community 2026 18.0.0 Insiders
  ![VS2026 18.0.0 Insiders](/images/VisualStudio/20250912_Update_VS2026_18.0.0_Insiders.png)

## [Visual Studio](https://visualstudio.microsoft.com/ja/vs/) / [履歴](/history/VisualStudio)
- Visual Studio 2022 17.14.14
  ![VS2022 17.14.14](/images/VisualStudio/20250910_Update_VS2022_17.14.14.png)

- ノウハウ
  - ワークロード
    - .NET マルチプラットフォームアプリ
      ![.NET MultiPlatform](/images/VisualStudio/VS2022_dotnet_MultiPlatform_Workload.png)
    - .NET デスクトップ
      ![.NET Desktop](/images/VisualStudio/VS2022_dotnet_Desktop_Workload.png)
    - C++ デスクトップ
      ![C++ Desktop](/images/VisualStudio/VS2022_C++_Desktop_Workload.png)
    - WinUI アプリケーション
      ![WinUI Application](/images/VisualStudio/VS2022_WinUI_Workload.png)

  - [グローバル パッケージ、キャッシュ、および一時フォルダーを管理する](https://learn.microsoft.com/ja-jp/nuget/consume-packages/managing-the-global-packages-and-cache-folders)
    - NuGetパッケージは、既定では、ユーザフォルダに保存されるため、他のフォルダに保存する場合は、NUGET_PACKAGES環境変数でそのフォルダを指定する。
  - [Visual Studio Client Detector Utility](https://learn.microsoft.com/ja-jp/visualstudio/install/tools-for-managing-visual-studio-instances?view=vs-2022)
    ![Visual Studio Client Detector Utility](/images/VisualStudio/20231006_VisualStudio_ClientDetectorUtility.png)
    -  Visual Studio のインストールを検出して管理するために使用できるツールらしい！
  - Shift-JISで作成していたはずのソースがUnicodeに変換される？
    ![読み込み時の変換メッセージ](/images/VisualStudio/20240403_Csharp_convert_unicode.png)
  - パッケージ管理
    - NuGetパッケージ管理画面にて、「更新プログラム」に表示されるパッケージを更新する
    ![NuGetパッケージマネージャ](/images/VisualStudio/20240407_Update_NuGet_Package.png)

## .NET
  - [.NET 10.0.0-rc.1](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)(*2025/09/10* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 10.0"を指定することで実現
      ![.NET 10 with VS2022](/images/VisualStudio/20250227_VS2022_dotnet10.png)
    - ターゲットフレームワークである".NET 10.0"のバージョンが表示できる
      ![.NET 10.0.0-rc.1](/images/VisualStudio/20250910_dotnet10_rc.1.png)
  - [.NET 9.0.9](https://dotnet.microsoft.com/en-us/download/dotnet/9.0?hl=ja-JP)(*2025/09/10* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 9.0"を指定することで実現
      ![.NET 9 with VS2022](/images/VisualStudio/20240314_VS2022_dotnet9.png)
    - ターゲットフレームワークである".NET 9.0"のバージョンが表示できる
      ![.NET 9.0.9](/images/VisualStudio/20250910_dotnet9.0.9.png)
  - [.NET での破壊的変更](https://learn.microsoft.com/ja-jp/dotnet/core/compatibility/breaking-changes)
  - [.NET 8.0.20](https://dotnet.microsoft.com/ja-jp/download/dotnet/8.0)(*2025/09/10* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 8.0"を指定していれば、".NET 8.0"のバージョンが表示できる
      ![.NET 8.0.20](/images/VisualStudio/20250910_dotnet8.0.20.png)

  - Wingetでのインストール
    ```
    winget install Microsoft.DotNet.SDK.8
    winget install Microsoft.DotNet.SDK.9
    winget install Microsoft.DotNet.SDK.Preview
    ```
  - ワークロードのセット
    ```
    dotnet workload restore
    ```
  - 以前のSDKでインストールしたワークロードの更新
    ```
    dotnet workload restore --from-previous-sdk
    ```
  - .NET 環境情報
    ```
    dotnet --info
    ```
    <details>
    <summary>
    Visual Studio Community 2026 Insiders＠Windows Insider
    </summary>

    ```
    .NET SDK:
    Version:           10.0.100-rc.1.25451.107
    Commit:            2db1f5ee2b
    Workload version:  10.0.100-rc.1.25458.2
    MSBuild version:   17.15.0-preview-25451-107+2db1f5ee2

    ランタイム環境:
    OS Name:     Windows
    OS Version:  10.0.26220
    OS Platform: Windows
    RID:         win-x64
    Base Path:   C:\Program Files\dotnet\sdk\10.0.100-rc.1.25451.107\

    インストール済みの .NET ワークロード:
    [android]
      インストール ソース: SDK 10.0.100-rc.1, VS 18.0.11010.61
      マニフェストのバージョン:    36.0.0-rc.1.285/10.0.100-rc.1
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.1\microsoft.net.sdk.android\36.0.0-rc.1.285\WorkloadManifest.json
      インストールの種類:              Msi

    [ios]
      インストール ソース: SDK 10.0.100-rc.1, VS 18.0.11010.61
      マニフェストのバージョン:    18.5.10727-net10-rc.1/10.0.100-rc.1
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.1\microsoft.net.sdk.ios\18.5.10727-net10-rc.1\WorkloadManifest.json
      インストールの種類:              Msi

    [maccatalyst]
      インストール ソース: SDK 10.0.100-rc.1, VS 18.0.11010.61
      マニフェストのバージョン:    18.5.10727-net10-rc.1/10.0.100-rc.1
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.1\microsoft.net.sdk.maccatalyst\18.5.10727-net10-rc.1\WorkloadManifest.json
      インストールの種類:              Msi

    [maui-windows]
      インストール ソース: SDK 10.0.100-rc.1, VS 18.0.11010.61
      マニフェストのバージョン:    10.0.0-rc.1.25452.6/10.0.100-rc.1
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.1\microsoft.net.sdk.maui\10.0.0-rc.1.25452.6\WorkloadManifest.json
      インストールの種類:              Msi

    Configured to use workload sets when installing new manifests.

    Host:
      Version:      10.0.0-rc.1.25451.107
      Architecture: x64
      Commit:       2db1f5ee2b

    .NET SDKs installed:
      6.0.428 [C:\Program Files\dotnet\sdk]
      8.0.407 [C:\Program Files\dotnet\sdk]
      9.0.202 [C:\Program Files\dotnet\sdk]
      10.0.100-preview.7.25380.108 [C:\Program Files\dotnet\sdk]
      10.0.100-rc.1.25451.107 [C:\Program Files\dotnet\sdk]

    .NET runtimes installed:
      Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 8.0.14 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 9.0.3 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 9.0.9 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 10.0.0-preview.7.25380.108 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 10.0.0-rc.1.25451.107 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 8.0.14 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 9.0.3 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 9.0.9 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 10.0.0-preview.7.25380.108 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 10.0.0-rc.1.25451.107 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.WindowsDesktop.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 8.0.14 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 9.0.3 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 9.0.9 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 10.0.0-preview.7.25380.108 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 10.0.0-rc.1.25451.107 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

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
      <summary>
      Visual Studio 2022@Windows
      </summary>

      ```
      .NET SDK:
      Version:           9.0.305
      Commit:            3fc74f3529
      Workload version:  9.0.300-manifests.6fcb754b
      MSBuild version:   17.14.21+8929ca9e3

      ランタイム環境:
      OS Name:     Windows
      OS Version:  10.0.26100
      OS Platform: Windows
      RID:         win-x64
      Base Path:   C:\Program Files\dotnet\sdk\9.0.305\

      インストール済みの .NET ワークロード:
      表示するインストール済みワークロードはありません。
      新しいマニフェストをインストールするときに loose manifests を使用するように構成されています。

      Host:
        Version:      9.0.9
        Architecture: x64
        Commit:       893c2ebbd4

      .NET SDKs installed:
        6.0.428 [C:\Program Files\dotnet\sdk]
        9.0.305 [C:\Program Files\dotnet\sdk]

      .NET runtimes installed:
        Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
        Microsoft.AspNetCore.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
        Microsoft.AspNetCore.App 9.0.9 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
        Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
        Microsoft.NETCore.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
        Microsoft.NETCore.App 9.0.9 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
        Microsoft.WindowsDesktop.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
        Microsoft.WindowsDesktop.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
        Microsoft.WindowsDesktop.App 9.0.9 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

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
    ![Hello World](/images/VisualStudio/20241011_VS2022_17.11.5_AppSDK1.6.1.png)
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
    <summary>
    Windows App SDK 1.6.3
    </summary>

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
  - [.NET MAUI 10](https://learn.microsoft.com/en-us/dotnet/maui/whats-new/dotnet-10?view=net-maui-9.0) / [履歴](/history/MAUI)
    - Visual Studio Community 2026 Insiders
      - 18.0.0 Insiders / MAUI 10.0.0-rc.1.25452.6 / Pixel 9 Pro (Android 16)
        ![MAUI - Pixel 9 Pro](/images/VisualStudio/20250910_VS2026_18.0.0_Insiders_MAUI10.0.0rc1_Android16.png)
    - MAUIワークロードの更新
      ```
      dotnet workload update
      ```
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

### ASP.NET MVC
  - [ASP.NET MVC でCRUD](https://qiita.com/zaburo/items/610bd34df3c819c67551)

### Azure
  - [Azureポータル](https://portal.azure.com/#home)
  - [Visual Studio Code を使用して Azure Functions を開発する](https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-develop-vs-code?tabs=csharp)
    ![ブラウザから実行してみた](/images/Azure/20230701_FunctionsTrial.png)

### Blazor
  - [Blazor WebAssembly アプリケーションプログラミング自習書](https://qiita.com/jsakamoto/items/244163860b4626c02ba0)
  - [Getting Started with Blazor Scheduler Component](https://blazor.syncfusion.com/documentation/scheduler/getting-started)
    ![SyncFusion Schedule Component](/images/Blazor/20230322_SyncFusionSchedulerInit.png)
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
      ![LINE Seed JP](/images/Windows/LINESeedJP.png)
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
      ![解析結果例](/images/VisualStudio/20230326_Analyze_XML_Resources.png)

### C++
  - C11/C++17 - [C++環境設定](https://code.visualstudio.com/docs/cpp/config-msvc)
    - HelloWorld
    - [Learn C++](https://www.learncpp.com/) **@2019/10/22** 1.5 Introduction to iostream
