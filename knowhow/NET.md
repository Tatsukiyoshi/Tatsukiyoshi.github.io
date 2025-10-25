---
title:  .NET
layout: single
classes:  wide
sidebar:
  nav: main
---
##  独学書

  |Text                                                        |Date      |Status
  |------------------------------------------------------------|----------|---
  |[C++ プログラミング入門](http://examples.oreilly.com/core/)    |2021/10/17|Chapter 6 コンストラクタおよびデストラクタを用いた優れた抽象化<span style="color: red;">*finished*</span>
  |[やさしいＣ＃第３版](https://isbn2.sbcr.jp/03922/)             |2022/07/16|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/net/C%23/YCSSample)

##  環境

  |Machine         |Env / FW                                          |Last Updated
  |----------------|--------------------------------------------------|----------
  |Windows         |Visual Studio Community 2022 17.14.17             |[2025/10/15](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes)
  |                |- .NET 9.0.10                                     |[2025/10/15](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |- .NET 8.0.21                                     |[2025/10/15](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |- [Windows App SDK 1.8.1](#windows-app-sdk)       |[2025/09/24](https://learn.microsoft.com/ja-jp/windows/apps/windows-app-sdk/downloads)
  |                |- [Math.NET 6.0.0-beta2](#mathnet)                |[2025/10/02](https://numerics.mathdotnet.com/)
  |Windows Insider |Visual Studio Community 2026 18.0.0 Insiders      |[2025/10/25](https://learn.microsoft.com/en-us/visualstudio/releases/vs18/release-notes-insiders)
  |                |- .NET 10.0.100-rc.2.25502.107                    |[2025/10/17](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |                |  - [MAUI 10.0.0-rc.2.25504.7](#maui)             |[2025/10/17](https://github.com/dotnet/maui)
  |                |  - Android Emulator v.36.3.3                     |2025/10/17
  |                |- .NET 9.0.10                                     |2025/10/17
  |                |- .NET 8.0.21                                     |2025/10/17

## [Visual Studio Insiders](https://visualstudio.microsoft.com/insiders/?rwnlp=ja) / [履歴](/history/VisualStudioInsiders)
- Visual Studio Community 2026 18.0.0 Insiders [11121.172]
  ![VS2026 18.0.0 Insiders](/images/VisualStudio/20251025_Update_VS2026_18.0.0_Insiders.png)

## [Visual Studio](https://visualstudio.microsoft.com/ja/vs/) / [履歴](/history/VisualStudio)
- Visual Studio 2022 17.14.18 (October 2025)
  ![VS2022 17.14.18](/images/VisualStudio/20251021_Update_VS2022_17.14.18.png)

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
  - [.NET 10.0.0-rc.2](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)(*2025/10/17* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 10.0"を指定することで実現
      ![.NET 10 with VS2022](/images/VisualStudio/20250227_VS2022_dotnet10.png)
    - ターゲットフレームワークである".NET 10.0"のバージョンが表示できる
      ![.NET 10.0.0-rc.2](/images/VisualStudio/20251017_dotnet10_rc.2.png)
  - [.NET 9.0.10](https://dotnet.microsoft.com/en-us/download/dotnet/9.0?hl=ja-JP)(*2025/10/15* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 9.0"を指定することで実現
      ![.NET 9 with VS2022](/images/VisualStudio/20240314_VS2022_dotnet9.png)
    - ターゲットフレームワークである".NET 9.0"のバージョンが表示できる
      ![.NET 9.0.10](/images/VisualStudio/20251015_dotnet9.0.10.png)
  - [.NET での破壊的変更](https://learn.microsoft.com/ja-jp/dotnet/core/compatibility/breaking-changes)
  - [.NET 8.0.21](https://dotnet.microsoft.com/ja-jp/download/dotnet/8.0)(*2025/10/15* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 8.0"を指定していれば、".NET 8.0"のバージョンが表示できる
      ![.NET 8.0.21](/images/VisualStudio/20251015_dotnet8.0.21.png)

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
    Version:           10.0.100-rc.2.25502.107
    Commit:            89c8f6a112
    Workload version:  10.0.100-manifests.4d32cd9e
    MSBuild version:   18.0.0-preview-25502-107+89c8f6a11

    ランタイム環境:
    OS Name:     Windows
    OS Version:  10.0.26220
    OS Platform: Windows
    RID:         win-x64
    Base Path:   C:\Program Files\dotnet\sdk\10.0.100-rc.2.25502.107\

    インストール済みの .NET ワークロード:
    [maui-windows]
      インストール ソース: VS 17.14.36616.10, VS 18.0.11121.172
      マニフェストのバージョン:    10.0.0-rc.2.25504.7/10.0.100-rc.2
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.2\microsoft.net.sdk.maui\10.0.0-rc.2.25504.7\WorkloadManifest.json
      インストールの種類:              Msi

    [maccatalyst]
      インストール ソース: VS 17.14.36616.10, VS 18.0.11121.172
      マニフェストのバージョン:    26.0.10970-net10-rc.2/10.0.100-rc.2
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.2\microsoft.net.sdk.maccatalyst\26.0.10970-net10-rc.2\WorkloadManifest.json
      インストールの種類:              Msi

    [android]
      インストール ソース: VS 17.14.36616.10, VS 18.0.11121.172
      マニフェストのバージョン:    36.0.0-rc.2.332/10.0.100-rc.2
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.2\microsoft.net.sdk.android\36.0.0-rc.2.332\WorkloadManifest.json
      インストールの種類:              Msi

    [ios]
      インストール ソース: VS 17.14.36616.10, VS 18.0.11121.172
      マニフェストのバージョン:    26.0.10970-net10-rc.2/10.0.100-rc.2
      マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\10.0.100-rc.2\microsoft.net.sdk.ios\26.0.10970-net10-rc.2\WorkloadManifest.json
      インストールの種類:              Msi

    新しいマニフェストをインストールするときに workload sets を使用するように構成されています。
    ワークロード セットがインストールされていません。"dotnet workload restore" を実行してワークロード セットをインストールします。      

    Host:
      Version:      10.0.0-rc.2.25502.107
      Architecture: x64
      Commit:       89c8f6a112

    .NET SDKs installed:
      6.0.428 [C:\Program Files\dotnet\sdk]
      8.0.414 [C:\Program Files\dotnet\sdk]
      9.0.205 [C:\Program Files\dotnet\sdk]
      9.0.306 [C:\Program Files\dotnet\sdk]
      10.0.100-preview.7.25380.108 [C:\Program Files\dotnet\sdk]
      10.0.100-rc.1.25451.107 [C:\Program Files\dotnet\sdk]
      10.0.100-rc.2.25502.107 [C:\Program Files\dotnet\sdk]

    .NET runtimes installed:
      Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 8.0.21 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 9.0.6 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 9.0.10 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 10.0.0-preview.7.25380.108 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.AspNetCore.App 10.0.0-rc.2.25502.107 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
      Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 8.0.21 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 9.0.6 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 9.0.10 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 10.0.0-preview.7.25380.108 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.NETCore.App 10.0.0-rc.2.25502.107 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
      Microsoft.WindowsDesktop.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 8.0.20 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 8.0.21 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 9.0.6 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 9.0.10 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 10.0.0-preview.7.25380.108 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
      Microsoft.WindowsDesktop.App 10.0.0-rc.2.25502.107 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

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
      Version:           9.0.306
      Commit:            cc9947ca66
      Workload version:  9.0.300-manifests.abe91478
      MSBuild version:   17.14.28+09c1be848

      ランタイム環境:
      OS Name:     Windows
      OS Version:  10.0.26200
      OS Platform: Windows
      RID:         win-x64
      Base Path:   C:\Program Files\dotnet\sdk\9.0.306\

      インストール済みの .NET ワークロード:
      [maui-windows]
        インストール ソース: VS 17.14.36603.0
        マニフェストのバージョン:    9.0.111/9.0.100
        マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100\microsoft.net.sdk.maui\9.0.111\WorkloadManifest.json
        インストールの種類:              Msi

      [maccatalyst]
        インストール ソース: VS 17.14.36603.0
        マニフェストのバージョン:    26.0.9752/9.0.100
        マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100\microsoft.net.sdk.maccatalyst\26.0.9752\WorkloadManifest.json
        インストールの種類:              Msi

      [android]
        インストール ソース: VS 17.14.36603.0
        マニフェストのバージョン:    35.0.78/9.0.100
        マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100\microsoft.net.sdk.android\35.0.78\WorkloadManifest.json
        インストールの種類:              Msi

      [ios]
        インストール ソース: VS 17.14.36603.0
        マニフェストのバージョン:    26.0.9752/9.0.100
        マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100\microsoft.net.sdk.ios\26.0.9752\WorkloadManifest.json
        インストールの種類:              Msi

      新しいマニフェストをインストールするときに loose manifests を使用するように構成されています。

      Host:
        Version:      9.0.10
        Architecture: x64
        Commit:       e1f19886fe

      .NET SDKs installed:
        6.0.428 [C:\Program Files\dotnet\sdk]
        9.0.306 [C:\Program Files\dotnet\sdk]

      .NET runtimes installed:
        Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
        Microsoft.AspNetCore.App 8.0.21 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
        Microsoft.AspNetCore.App 9.0.10 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
        Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
        Microsoft.NETCore.App 8.0.21 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
        Microsoft.NETCore.App 9.0.10 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
        Microsoft.WindowsDesktop.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
        Microsoft.WindowsDesktop.App 8.0.21 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
        Microsoft.WindowsDesktop.App 9.0.10 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

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
  - Visual Studio Community 2026 Insiders / Windows App SDK 1.8.1
    <video src="/captures/20250924_winappsdk1.80.mp4" controls width="100%" height="auto" poster="/path/to/poster.jpg">
      お使いのブラウザは動画タグをサポートしていません。
      <a href="/captures/20250924_winappsdk1.80.mp4" download>こちら</a>から動画をダウンロードしてください。
    </video>
  - Visual Studio 2022 17.14.14 / Windows App SDK 1.8.0
    ![Hello World](/images/VisualStudio/20250922_VS2022_17.14.14_AppSDK1.8.0.png)
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
      - 18.0.0 Insiders / MAUI 10.0.0-rc.2.25504.7 / Pixel 9a (Android 16)
        ![MAUI - Pixel 9a](/images/VisualStudio/20251017_VS2026_18.0.0_Insiders_MAUI10.0.0rc2_Android16.png)
        - Android SDK設定の見直し
          - 初期値
            ![Default Setting](/images/VisualStudio/20251017_Android_SDK_Setting_Default.png)
          - 実働設定(Android Studioに合わせる)
            ![Fit to Android Studio](/images/VisualStudio/20251017_Android_SDK_Setting.png)
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

### Math.net
  - KDE with WPF
    ![Math.net 6.0.0-beta2](/images/VisualStudio/20251002_Math.NET_VS2022_17.14.16.png)

### Blend & WPF
  - [チュートリアル: Microsoft Expression Blend を使用してボタンを作成する](https://learn.microsoft.com/ja-jp/dotnet/desktop/wpf/controls/walkthrough-create-a-button-by-using-microsoft-expression-blend)
    ![WPF on Blend](/images/VisualStudio/20250923_WPF_Blend.png)

    <video src="/captures/20250924_wpf.mp4" controls width="100%" height="auto" poster="/path/to/poster.jpg">
      お使いのブラウザは動画タグをサポートしていません。
      <a href="/captures/20250924_wpf.mp4" download>こちら</a>から動画をダウンロードしてください。
    </video>

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
