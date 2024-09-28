# .NET

##  独学書

  |テキスト                                                      |日付      |進捗状況
  |-------------------------------------------------------------|----------|---
  |[C++ プログラミング入門](http://examples.oreilly.com/core/)    |2021/10/17|Chapter 6 コンストラクタおよびデストラクタを用いた優れた抽象化<span style="color: red;">*finished*</span>
  |[やさしいＣ＃第３版](https://isbn2.sbcr.jp/03922/)             |2022/07/16|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/net/C%23/YCSSample)

##  環境
  |端末       |環境／FW                                          |最終更新
  |-----------|-------------------------------------------------|----------
  |IdeaPad    |Visual Studio Community 2022 17.12.0 Preview 2.1 |[2024/09/27](https://learn.microsoft.com/ja-jp/visualstudio/releases/2022/release-notes-preview)
  |           |- .NET 9.0.0 rc.1                                |[2024/09/11](https://dotnet.microsoft.com/en-us/download/dotnet/9.0?hl=ja-JP)
  |           |  - MAUI 9.0.0 rc.1                              |2024/09/14
  |           |- .NET 8.0.8                                     |2024/09/11
  |Mini-S12   |Visual Studio Community 2022 17.11.4             |[2024/09/19](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes)
  |           |- .NET 8.0.8                                     |[2024/08/14](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  |           |  - [MAUI 8.0.90](#maui)                         |[2024/09/14](https://github.com/dotnet/maui)
  |           |- [Windows App SDK 1.5.5](#windows-app-sdk)      |[2024/07/14](https://learn.microsoft.com/ja-jp/windows/apps/windows-app-sdk/downloads)

##  ノウハウ
### [Visual Studio](https://visualstudio.microsoft.com/ja/vs/) / [プレビュー](https://visualstudio.microsoft.com/ja/vs/preview/)
  - Visual Studio 2022 17.12 Preview 2.1
    ![VS2022 17.12 preview 2.1](../images/VisualStudio/20240927_Update_VS2022_17.12_Preview2.1.png)
  - Visual Studio 2022 17.11.4
    ![VS2022 17.11.4](../images/VisualStudio/20240919_Update_VS2022_17.11.4.png)
  - Visual Studio 2022 17.10.3
    - GitHub Copilotの利用
      - 早速、無料試用版の利用開始を促される <BR />
        ![VS2022_Copilot](../images/VisualStudio/20240704_GitHub_Copilot.png)
      - GitHub側でGitHub Copilotの利用を開始することで、Visual Studioで利用できるらしい！
        ![GitHub Copilot](../images/VisualStudio/20240704_GitHub_Copilot_Setting.png)
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
  - [.NET での破壊的変更](https://learn.microsoft.com/ja-jp/dotnet/core/compatibility/breaking-changes)
  - [.NET 9.0.0 rc.1](https://dotnet.microsoft.com/en-us/download/dotnet/9.0?hl=ja-JP)(*2024/08/14* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 9.0"を指定することで実現
      ![.NET 9 with VS2022](../images/VisualStudio/20240314_VS2022_dotnet9.png)
    - ターゲットフレームワークである".NET 9.0"のバージョンが表示できる
      ![.NET 9.0.0 rc.1](../images/VisualStudio/20240911_dotnet9_rc.1.png)
  - [.NET 8.0](https://dotnet.microsoft.com/ja-jp/download/dotnet/8.0)(*2024/06/22* <span style="color: red;">Updated!</span>)
    - ターゲットフレームワークに".NET 8.0"を指定していれば、".NET 8.0"のバージョンが表示できる
      ![.NET 8.0.8](../images/VisualStudio/20240814_dotnet8.0.8.png)

  - .NET 環境情報
  ```
  dotnet --info
  ```
  <details>
  <summary>Visual Studio 2022 Preview / IdeaPad</summary>

  ```
  .NET SDK:
  Version:           9.0.100-rc.1.24452.12
  Commit:            81a714c6d3
  Workload version:  9.0.100-manifests.67cd1eb6
  MSBuild version:   17.12.0-preview-24422-09+d17ec720d

  ランタイム環境:
  OS Name:     Windows
  OS Version:  10.0.26120
  OS Platform: Windows
  RID:         win-x64
  Base Path:   C:\Program Files\dotnet\sdk\9.0.100-rc.1.24452.12\

  インストール済みの .NET ワークロード:
  新しいマニフェストをインストールするときに loose manifests を使用するように構成されています。
  [maui-windows]
    インストール ソース: VS 17.12.35323.107
    マニフェストのバージョン:    9.0.0-rc.1.24453.9/9.0.100-rc.1
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100-rc.1\microsoft.net.sdk.maui\9.0.0-rc.1.24453.9\WorkloadManifest.json
    インストールの種類:              Msi

  [maccatalyst]
    インストール ソース: VS 17.12.35323.107
    マニフェストのバージョン:    17.5.9270-net9-rc1/9.0.100-rc.1
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100-rc.1\microsoft.net.sdk.maccatalyst\17.5.9270-net9-rc1\WorkloadManifest.json
    インストールの種類:              Msi

  [ios]
    インストール ソース: VS 17.12.35323.107
    マニフェストのバージョン:    17.5.9270-net9-rc1/9.0.100-rc.1
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100-rc.1\microsoft.net.sdk.ios\17.5.9270-net9-rc1\WorkloadManifest.json
    インストールの種類:              Msi

  [android]
    インストール ソース: VS 17.12.35323.107
    マニフェストのバージョン:    35.0.0-rc.1.80/9.0.100-rc.1
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\9.0.100-rc.1\microsoft.net.sdk.android\35.0.0-rc.1.80\WorkloadManifest.json
    インストールの種類:              Msi


  Host:
    Version:      9.0.0-rc.1.24431.7
    Architecture: x64
    Commit:       static

  .NET SDKs installed:
    8.0.302 [C:\Program Files\dotnet\sdk]
    9.0.100-preview.6.24328.19 [C:\Program Files\dotnet\sdk]
    9.0.100-rc.1.24452.12 [C:\Program Files\dotnet\sdk]

  .NET runtimes installed:
    Microsoft.AspNetCore.App 8.0.6 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 8.0.8 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 9.0.0-preview.6.24328.4 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 9.0.0-rc.1.24452.1 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.NETCore.App 8.0.6 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 8.0.8 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 9.0.0-preview.6.24327.7 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 9.0.0-rc.1.24431.7 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.WindowsDesktop.App 8.0.6 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 8.0.8 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 9.0.0-preview.6.24327.6 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 9.0.0-rc.1.24452.1 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

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
  <summary>Visual Studio 2022 / Mini-S12</summary>

  ```
  .NET SDK:
  Version:           8.0.400
  Commit:            36fe6dda56
  Workload version:  8.0.400-manifests.251308be
  MSBuild version:   17.11.3+0c8610977

  ランタイム環境:
  OS Name:     Windows
  OS Version:  10.0.22631
  OS Platform: Windows
  RID:         win-x64
  Base Path:   C:\Program Files\dotnet\sdk\8.0.400\

  インストール済みの .NET ワークロード:
  新しいマニフェストをインストールするときに loose manifests を使用するように構成されています。
  [maccatalyst]
    インストール ソース: VS 17.11.35312.102
    マニフェストのバージョン:    17.5.8030/8.0.100
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.maccatalyst\17.5.8030\WorkloadManifest.json
    インストールの種類:        FileBased

  [ios]
    インストール ソース: VS 17.11.35312.102
    マニフェストのバージョン:    17.5.8030/8.0.100
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.ios\17.5.8030\WorkloadManifest.json
    インストールの種類:        FileBased

  [android]
    インストール ソース: VS 17.11.35312.102
    マニフェストのバージョン:    34.0.113/8.0.100
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.android\34.0.113\WorkloadManifest.json
    インストールの種類:        FileBased

  [maui-windows]
    インストール ソース: VS 17.11.35312.102
    マニフェストのバージョン:    8.0.82/8.0.100
    マニフェスト パス:       C:\Program Files\dotnet\sdk-manifests\8.0.100\microsoft.net.sdk.maui\8.0.82\WorkloadManifest.json
    インストールの種類:        FileBased


  Host:
    Version:      8.0.8
    Architecture: x64
    Commit:       08338fcaa5

  .NET SDKs installed:
    6.0.425 [C:\Program Files\dotnet\sdk]
    8.0.400 [C:\Program Files\dotnet\sdk]

  .NET runtimes installed:
    Microsoft.AspNetCore.App 6.0.33 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.AspNetCore.App 8.0.8 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.NETCore.App 6.0.33 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.NETCore.App 8.0.8 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.WindowsDesktop.App 6.0.33 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
    Microsoft.WindowsDesktop.App 8.0.8 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

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
  - Windows App SDK 1.5.5
    ![Hello World](../images/VisualStudio/20240714_VS2022_17.10.4_AppSDK1.5.5.png)
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
    get-appxpackage *appruntime.1.5*
    ```
    <details>
    <summary>Windows App SDK 1.5.5</summary>

    ```
    RunspaceId             : 2773dd3c-ca8c-4c77-819b-0d79e556d281
    Name                   : Microsoft.WindowsAppRuntime.1.5
    Publisher              : CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    PublisherId            : 8wekyb3d8bbwe
    Architecture           : X64
    ResourceId             :
    Version                : 5001.119.156.0
    PackageFamilyName      : Microsoft.WindowsAppRuntime.1.5_8wekyb3d8bbwe
    PackageFullName        : Microsoft.WindowsAppRuntime.1.5_5001.119.156.0_x64__8wekyb3d8bbwe
    InstallLocation        : C:\Program Files\WindowsApps\Microsoft.WindowsAppRuntime.1.5_5001.119.156.0_x64__8wekyb3d8bbwe
    IsFramework            : True
    PackageUserInformation : {}
    IsResourcePackage      : False
    IsBundle               : False
    IsDevelopmentMode      : False
    NonRemovable           : False
    Dependencies           : {}
    IsPartiallyStaged      : False
    SignatureKind          : Store
    Status                 : Ok

    RunspaceId             : 2773dd3c-ca8c-4c77-819b-0d79e556d281
    Name                   : Microsoft.WindowsAppRuntime.1.5
    Publisher              : CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    PublisherId            : 8wekyb3d8bbwe
    Architecture           : X64
    ResourceId             :
    Version                : 5001.159.55.0
    PackageFamilyName      : Microsoft.WindowsAppRuntime.1.5_8wekyb3d8bbwe
    PackageFullName        : Microsoft.WindowsAppRuntime.1.5_5001.159.55.0_x64__8wekyb3d8bbwe
    InstallLocation        : C:\Program Files\WindowsApps\Microsoft.WindowsAppRuntime.1.5_5001.159.55.0_x64__8wekyb3d8bbwe
    IsFramework            : True
    PackageUserInformation : {}
    IsResourcePackage      : False
    IsBundle               : False
    IsDevelopmentMode      : False
    NonRemovable           : False
    Dependencies           : {}
    IsPartiallyStaged      : False
    SignatureKind          : Store
    Status                 : Ok

    RunspaceId             : 2773dd3c-ca8c-4c77-819b-0d79e556d281
    Name                   : Microsoft.WindowsAppRuntime.1.5
    Publisher              : CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    PublisherId            : 8wekyb3d8bbwe
    Architecture           : X86
    ResourceId             :
    Version                : 5001.178.1908.0
    PackageFamilyName      : Microsoft.WindowsAppRuntime.1.5_8wekyb3d8bbwe
    PackageFullName        : Microsoft.WindowsAppRuntime.1.5_5001.178.1908.0_x86__8wekyb3d8bbwe
    InstallLocation        : C:\Program Files\WindowsApps\Microsoft.WindowsAppRuntime.1.5_5001.178.1908.0_x86__8wekyb3d8bbw
                            e
    IsFramework            : True
    PackageUserInformation : {}
    IsResourcePackage      : False
    IsBundle               : False
    IsDevelopmentMode      : False
    NonRemovable           : False
    Dependencies           : {}
    IsPartiallyStaged      : False
    SignatureKind          : Store
    Status                 : Ok

    RunspaceId             : 2773dd3c-ca8c-4c77-819b-0d79e556d281
    Name                   : Microsoft.WindowsAppRuntime.1.5
    Publisher              : CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    PublisherId            : 8wekyb3d8bbwe
    Architecture           : X64
    ResourceId             :
    Version                : 5001.178.1908.0
    PackageFamilyName      : Microsoft.WindowsAppRuntime.1.5_8wekyb3d8bbwe
    PackageFullName        : Microsoft.WindowsAppRuntime.1.5_5001.178.1908.0_x64__8wekyb3d8bbwe
    InstallLocation        : C:\Program Files\WindowsApps\Microsoft.WindowsAppRuntime.1.5_5001.178.1908.0_x64__8wekyb3d8bbw
                            e
    IsFramework            : True
    PackageUserInformation : {}
    IsResourcePackage      : False
    IsBundle               : False
    IsDevelopmentMode      : False
    NonRemovable           : False
    Dependencies           : {}
    IsPartiallyStaged      : False
    SignatureKind          : Store
    Status                 : Ok
    ```
    </details>

### MAUI
  - Visual Studio
    - [.NET MAUI 9](https://learn.microsoft.com/en-us/dotnet/maui/whats-new/dotnet-9?view=net-maui-8.0)
    - 17.12 Preview 2.0 / MAUI 9.0.0-rc.1 / Pixel 8 API 35(Android 15)
        ![MAUI - Pixel 8 API 35](../images/VisualStudio/20240915_VS2022_17.12_Preview2.0_MAUI9.0.0rc.1_Android15.png)
        - デバイスマネージャではエラーとなっているにもかかわらず、デバッグ実行できている
          ![Emulator - API 35](../images/VisualStudio/20240915_VS2022_17.12_Emulator_Android15.png)
    - 17.11.3 
      - MAUI 8.0.90 / Pixel 8 API 34(Android 14)
        ![MAUI - Pixel 8 API 34](../images/VisualStudio/20240914_VS2022_17.11.3_MAUI90_Android14.png)
      - MAUI 8.0.72 / Pixel 8 API 34(Android 14)
        ![MAUI - Pixel 8 API 34](../images/VisualStudio/20240914_VS2022_17.11.3_MAUI72_Android14.png)
    - 17.10.4 / MAUI 8.0.61(SR6.1) / Pixel 8 API 34(Android 14)
        ![MAUI - Pixel 8 API 34](../images/VisualStudio/20240713_VS2022_17.10.4_MAUI_Android.png)
    - 17.10.3 / MAUI 8.0.40(SR5)
      - 8.0.40同梱で、Androidエミュレータでの実行確認
        ![MAUI - Pixel 8](../images/VisualStudio/20240626_VS2022_17.10.3_MAUI_Android.png)
    - 17.9.6
      - エミュレータを動作させるには、Hyper-Vの有効化が必要 <BR />
        ![Hyper-V](../images/VisualStudio/20240412_Android_HyperV.png)
        ![HyperVisorPlatform](../images/VisualStudio/20240412_Android_HyperVisor_Platform.png)
      - デバイスマネージャーでAndroid Studioで作成したイメージは使えず、新たにイメージを作成
        ![AndroidDeviceManager](../images/VisualStudio/20240412_Android_Device_Manager.png)
      - サンプルコードのままでは、Androidターゲットはビルドできない (*2024/04/12*)
  - Visual Studio Code
    - [.NET MAUI 拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-maui)
    - MAUIワークロードのインストール
      ```
      dotnet workload install maui
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
