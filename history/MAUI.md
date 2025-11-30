---
title:  Update History of .NET MAUI
layout: single
sidebar:
  nav: main
---

# .NET MAUI 10
##  .NET MAUI 10.0.10
- 18.0.2 / MAUI 10.0.11 / Pixel 9 Pro (Android 16)
  ![MAUI - Pixel 9 Pro](/images/VisualStudio/20251129_VS2026_18.0.2_MAUI10.0.11_Android16.png)
- 18.0.0 / MAUI 10.0.10 / Pixel 9 Pro (Android 16)
  ![MAUI - Pixel 9 Pro](/images/VisualStudio/20251114_VS2026_18.0.0_MAUI10.0.10_Android16.png)
##  .NET MAUI 10-rc.2
- 18.0.0 Insiders / MAUI 10.0.0-rc.2.25504.7 / Pixel 9a (Android 16)
  ![MAUI - Pixel 9a](/images/VisualStudio/20251017_VS2026_18.0.0_Insiders_MAUI10.0.0rc2_Android16.png)
  - Android SDK設定の見直し
    - 初期値
      ![Default Setting](/images/VisualStudio/20251017_Android_SDK_Setting_Default.png)
    - 実働設定(Android Studioに合わせる)
      ![Fit to Android Studio](/images/VisualStudio/20251017_Android_SDK_Setting.png)

##  .NET MAUI 10-rc.1
- 18.0.0 Insiders / MAUI 10.0.0-rc.1.25452.6 / Pixel 9 Pro (Android 16)
  ![MAUI - Pixel 9 Pro](/images/VisualStudio/20250910_VS2026_18.0.0_Insiders_MAUI10.0.0rc1_Android16.png)

##  .NET MAUI 10-preview.7
- 17.14.13 Preview 1.0 / MAUI 10.0.0-preview.7.25406.3 / Pixel 9a (Android 16 QPR2 Beta 1)
  ![MAUI - Pixel 9a Baklava Preview](/images/VisualStudio/20250823_VS2022_17.14.13_Preview1.0_MAUI10.0.0preview7_Android16_QPR2_Beta1.png)

  <details>
    <summary>
    MAUI Update Log
    </summary>

    ```
    .NET 10.0 へようこそ!
    ---------------------
    SDK バージョン: 10.0.100-preview.7.25380.108

    テレメトリ
    ---------
    .NET ツールは、エクスペリエンスの向上のために利用状況データを収集します。データは Microsoft によって収集され、コミュニティと共有されます。テレメトリをオプトアウトするには、好みのシェルを使用して、DOTNET_CLI_TELEMETRY_OPTOUT 環境変数を '1' または 'true' に 設定できます。

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
    ワークロードのバージョン 10.0.100-preview.7.25411.1 をインストールしています。
    Downloading microsoft.net.workloads.10.0.100-preview.7.msi.x64 (10.100.0-preview.7.25411.1)
    microsoft.net.workloads.10.0.100-preview.7.msi.x64 をインストールしています ...... Done
    Downloading microsoft.net.workload.emscripten.current.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.workload.emscripten.net6.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.workload.emscripten.net7.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.workload.emscripten.net8.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.workload.emscripten.net9.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.sdk.android.manifest-10.0.100-preview.7.msi.x64 (36.0.0-preview.7.229)
    microsoft.net.sdk.android.manifest-10.0.100-preview.7.msi.x64 をインストールしています ..... Done
    Downloading microsoft.net.sdk.ios.manifest-10.0.100-preview.7.msi.x64 (18.5.10601-net10-p7)
    microsoft.net.sdk.ios.manifest-10.0.100-preview.7.msi.x64 をインストールしています ..... Done
    Downloading microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.7.msi.x64 (18.5.10601-net10-p7)
    microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.7.msi.x64 をインストールしています ..... Done
    Downloading microsoft.net.sdk.macos.manifest-10.0.100-preview.7.msi.x64 (15.5.10601-net10-p7)
    microsoft.net.sdk.macos.manifest-10.0.100-preview.7.msi.x64 をインストールしています ..... Done
    Downloading microsoft.net.sdk.maui.manifest-10.0.100-preview.7.msi.x64 (10.0.0-preview.7.25406.3)
    microsoft.net.sdk.maui.manifest-10.0.100-preview.7.msi.x64 をインストールしています .... Done
    Downloading microsoft.net.sdk.tvos.manifest-10.0.100-preview.7.msi.x64 (18.5.10601-net10-p7)
    microsoft.net.sdk.tvos.manifest-10.0.100-preview.7.msi.x64 をインストールしています ..... Done
    Downloading microsoft.net.workload.mono.toolchain.current.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)    
    Downloading microsoft.net.workload.mono.toolchain.net6.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.workload.mono.toolchain.net7.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.workload.mono.toolchain.net8.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    Downloading microsoft.net.workload.mono.toolchain.net9.manifest-10.0.100-preview.7.msi.x64 (10.0.100-preview.7.25380.108)
    この機能バンドにはワークロードがインストールされていません。以前の SDK バージョンでインストールしたワークロードを更新するには、--from-previous-sdk オプションを含めます。
    Visual Studio ワークロードのインストール レコードを書き込み中: 'ios, android, maccatalyst, maui-windows'
    Downloading Microsoft.iOS.Sdk.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Sdk.net10.0_18.5.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.iOS.Sdk.net9.0_18.5.Msi.x64 (18.5.9215)
    Microsoft.iOS.Sdk.net9.0_18.5.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.iOS.Sdk.net9.0_26.0.Msi.x64 (26.0.9251-xcode26.0)
    Microsoft.iOS.Sdk.net9.0_26.0.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.iOS.Windows.Sdk.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Windows.Sdk.net10.0_18.5.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.iOS.Windows.Sdk.net9.0_18.5.Msi.x64 (18.5.9215)
    Microsoft.iOS.Windows.Sdk.net9.0_18.5.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.iOS.Windows.Sdk.net9.0_26.0.Msi.x64 (26.0.9251-xcode26.0)
    Microsoft.iOS.Windows.Sdk.net9.0_26.0.Msi.x64 をインストールしています ............. Done
    Downloading Microsoft.iOS.Ref.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Ref.net10.0_18.5.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.iOS.Runtime.ios.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Runtime.ios.net10.0_18.5.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.iOS.Runtime.ios-arm64.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Runtime.ios-arm64.net10.0_18.5.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.5.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.5.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.iOS.Templates.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.iOS.Templates.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (9.0.8)
    Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (9.0.8)
    Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (9.0.8)
    Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ................. Done
    Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (35.0.92)
    Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ................ Done
    Downloading Microsoft.Android.Ref.36.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Ref.36.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.Android.Runtime.36.android.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.36.android.Msi.x64 をインストールしています ...... Done
    Downloading Microsoft.Android.Runtime.Mono.36.android-arm.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.Mono.36.android-arm.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Android.Runtime.Mono.36.android-arm64.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.Mono.36.android-arm64.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Android.Runtime.Mono.36.android-x86.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.Mono.36.android-x86.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Android.Runtime.Mono.36.android-x64.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.Mono.36.android-x64.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Android.Runtime.CoreCLR.36.android-arm64.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.CoreCLR.36.android-arm64.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.Android.Runtime.CoreCLR.36.android-x64.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.CoreCLR.36.android-x64.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.Android.Runtime.NativeAOT.36.android-arm64.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.NativeAOT.36.android-arm64.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Android.Runtime.NativeAOT.36.android-x64.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Runtime.NativeAOT.36.android-x64.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Android.Templates.Msi.x64 (36.0.0-preview.7.229)
    Microsoft.Android.Templates.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.MacCatalyst.Sdk.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.MacCatalyst.Sdk.net10.0_18.5.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.MacCatalyst.Sdk.net9.0_18.5.Msi.x64 (18.5.9215)
    Microsoft.MacCatalyst.Sdk.net9.0_18.5.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.MacCatalyst.Sdk.net9.0_26.0.Msi.x64 (26.0.9251-xcode26.0)
    Microsoft.MacCatalyst.Sdk.net9.0_26.0.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.MacCatalyst.Ref.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.MacCatalyst.Ref.net10.0_18.5.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.MacCatalyst.Runtime.maccatalyst.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.MacCatalyst.Runtime.maccatalyst.net10.0_18.5.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.5.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.5.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.5.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.MacCatalyst.Templates.Msi.x64 (18.5.10601-net10-p7)
    Microsoft.MacCatalyst.Templates.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (10.0.0-preview.7.25380.108)
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (9.0.8)
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (9.0.8)
    Downloading Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Sdk.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Sdk.Msi.x64 (9.0.82)
    Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Graphics.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Graphics.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Resizetizer.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Resizetizer.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.Maui.Templates.net10.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Templates.net10.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Templates.net9.Msi.x64 (9.0.82)
    Microsoft.Maui.Templates.net9.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Core.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Core.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Controls.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Build.Tasks.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Controls.Build.Tasks.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Core.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Controls.Core.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Xaml.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Controls.Xaml.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Essentials.Msi.x64 (10.0.0-preview.7.25406.3)
    Microsoft.Maui.Essentials.Msi.x64 をインストールしています ..... Done

    ワークロード ios android maccatalyst maui-windows が正常に更新されました。
    ```
  </details>

##  .NET MAUI 10-preview.6
- Status Bar対応改修（Visual Studio 2022 17.14.10 Preview 1.0）
  - 17.14.10 Preview 1.0 / MAUI 10.0.0-preview.6.25359.8 / Pixel 9 Pro API 36(Android 16)
    - Status Barを考慮したレイアウト変更成功（しかし、時計などの表示がない！）
      ![MAUI - Pixel 9 Pro API 36](/images/VisualStudio/20250802_VS2022_17.14.10_Preview1.0_MAUI10.0.0preview6_Android16.png)
    - OSのモードに従ったStatus Bar表示成功
      ![MAUI - Pixel 9 Pro API 36](/images/VisualStudio/20250802_VS2022_17.14.10_Preview1.0_MAUI10.0.0preview6_Android16_2.png)

- 17.14.9 Preview 1.0 / MAUI 10.0.0-preview.6.25359.8 / Pixel 9 Pro API 36(Android 16)
  ![MAUI - Pixel 9 Pro API 36](/images/VisualStudio/20250727_VS2022_17.14.9_Preview1.0_MAUI10.0.0preview6_Android16.png)

##  .NET MAUI 10-preview.5
- 17.14.5 Preview 1.0 / MAUI 10.0.0-preview.5.25306.5 / Pixel 9 Pro API 36(Android 16)
  ![MAUI - Pixel 9 Pro API 36](/images/VisualStudio/20250612_VS2022_17.14.5_Preview1.0_MAUI10.0.0preview5_Android16.png)

## .NET 10 Preview 4
<details>
<summary>
MAUI Update Log
</summary>

```
.NET 10.0 へようこそ!
---------------------
SDK バージョン: 10.0.100-preview.4.25258.110

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

Updated advertising manifest microsoft.net.workloads.
Installing workload version 10.0.100-preview.4.25263.1.
Downloading microsoft.net.workloads.10.0.100-preview.4.msi.x64 (10.100.0-preview.4.25263.1)
Installing microsoft.net.workloads.10.0.100-preview.4.msi.x64 ..... Done
Downloading microsoft.net.workload.emscripten.current.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.emscripten.net6.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.emscripten.net7.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.emscripten.net8.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.emscripten.net9.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.sdk.android.manifest-10.0.100-preview.4.msi.x64 (36.0.0-preview.4.80)
Installing microsoft.net.sdk.android.manifest-10.0.100-preview.4.msi.x64 ..... Done
Downloading microsoft.net.sdk.ios.manifest-10.0.100-preview.4.msi.x64 (18.4.10471-net10-p4)
Installing microsoft.net.sdk.ios.manifest-10.0.100-preview.4.msi.x64 ..... Done
Downloading microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.4.msi.x64 (18.4.10471-net10-p4)
Installing microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.4.msi.x64 ..... Done
Downloading microsoft.net.sdk.macos.manifest-10.0.100-preview.4.msi.x64 (15.4.10471-net10-p4)
Installing microsoft.net.sdk.macos.manifest-10.0.100-preview.4.msi.x64 ..... Done
Downloading microsoft.net.sdk.maui.manifest-10.0.100-preview.4.msi.x64 (10.0.0-preview.4.25263.4)
Installing microsoft.net.sdk.maui.manifest-10.0.100-preview.4.msi.x64 ..... Done
Downloading microsoft.net.sdk.tvos.manifest-10.0.100-preview.4.msi.x64 (18.4.10471-net10-p4)
Installing microsoft.net.sdk.tvos.manifest-10.0.100-preview.4.msi.x64 ..... Done
Downloading microsoft.net.workload.mono.toolchain.current.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.mono.toolchain.net6.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.mono.toolchain.net7.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.mono.toolchain.net8.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
Downloading microsoft.net.workload.mono.toolchain.net9.manifest-10.0.100-preview.4.msi.x64 (10.0.100-preview.4.25258.110)
No workloads installed for this feature band. To update workloads installed with earlier SDK versions, include the --from-previous-sdk option.
Writing install records for Visual Studio workloads: 'ios, android, maccatalyst, maui-windows'
Downloading Microsoft.iOS.Sdk.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.iOS.Sdk.net10.0_18.4.Msi.x64 ......... Done
Downloading Microsoft.iOS.Windows.Sdk.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.iOS.Windows.Sdk.net10.0_18.4.Msi.x64 ......... Done
Downloading Microsoft.iOS.Ref.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.iOS.Ref.net10.0_18.4.Msi.x64 ..... Done
Downloading Microsoft.iOS.Runtime.ios-arm64.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.iOS.Runtime.ios-arm64.net10.0_18.4.Msi.x64 ........ Done
Downloading Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.4.Msi.x64 ....... Done
Downloading Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.4.Msi.x64 ....... Done
Downloading Microsoft.iOS.Templates.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.iOS.Templates.Msi.x64 ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 ........ Done
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 .... Done
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (9.0.5)
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (9.0.5)
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (9.0.5)
Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Sdk.Windows.Msi.x64 .............. Done
Downloading Microsoft.Android.Ref.36.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Ref.36.Msi.x64 ....... Done
Downloading Microsoft.Android.Runtime.36.android.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.36.android.Msi.x64 ...... Done
Downloading Microsoft.Android.Runtime.Mono.36.android-arm.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.Mono.36.android-arm.Msi.x64 ..... Done
Downloading Microsoft.Android.Runtime.Mono.36.android-arm64.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.Mono.36.android-arm64.Msi.x64 ..... Done
Downloading Microsoft.Android.Runtime.Mono.36.android-x86.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.Mono.36.android-x86.Msi.x64 ..... Done
Downloading Microsoft.Android.Runtime.Mono.36.android-x64.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.Mono.36.android-x64.Msi.x64 ..... Done
Downloading Microsoft.Android.Runtime.CoreCLR.36.android-arm64.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.CoreCLR.36.android-arm64.Msi.x64 ..... Done
Downloading Microsoft.Android.Runtime.CoreCLR.36.android-x64.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.CoreCLR.36.android-x64.Msi.x64 ..... Done
Downloading Microsoft.Android.Runtime.NativeAOT.36.android-arm64.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.NativeAOT.36.android-arm64.Msi.x64 ...... Done
Downloading Microsoft.Android.Runtime.NativeAOT.36.android-x64.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Runtime.NativeAOT.36.android-x64.Msi.x64 ..... Done
Downloading Microsoft.Android.Templates.Msi.x64 (36.0.0-preview.4.80)
Installing Microsoft.Android.Templates.Msi.x64 ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 .......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 ....... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 ........ Done
Downloading Microsoft.MacCatalyst.Sdk.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.MacCatalyst.Sdk.net10.0_18.4.Msi.x64 ...... Done
Downloading Microsoft.MacCatalyst.Ref.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.MacCatalyst.Ref.net10.0_18.4.Msi.x64 ...... Done
Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.4.Msi.x64 ....... Done
Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.4.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.4.Msi.x64 ...... Done
Downloading Microsoft.MacCatalyst.Templates.Msi.x64 (18.4.10471-net10-p4)
Installing Microsoft.MacCatalyst.Templates.Msi.x64 ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (10.0.0-preview.4.25258.110)
Installing Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (9.0.5)
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (9.0.5)
Downloading Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 .... Done
Downloading Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 ..... Done
Downloading Microsoft.Maui.Sdk.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Sdk.Msi.x64 ..... Done
Downloading Microsoft.Maui.Sdk.Msi.x64 (9.0.51)
Downloading Microsoft.Maui.Graphics.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Graphics.Msi.x64 ..... Done
Downloading Microsoft.Maui.Resizetizer.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Resizetizer.Msi.x64 ...... Done
Downloading Microsoft.Maui.Templates.net10.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Templates.net10.Msi.x64 ..... Done
Downloading Microsoft.Maui.Templates.net9.Msi.x64 (9.0.51)
Downloading Microsoft.Maui.Core.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Core.Msi.x64 ..... Done
Downloading Microsoft.Maui.Controls.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Controls.Msi.x64 ..... Done
Downloading Microsoft.Maui.Controls.Build.Tasks.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Controls.Build.Tasks.Msi.x64 ..... Done
Downloading Microsoft.Maui.Controls.Core.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Controls.Core.Msi.x64 ..... Done
Downloading Microsoft.Maui.Controls.Xaml.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Controls.Xaml.Msi.x64 ..... Done
Downloading Microsoft.Maui.Controls.Compatibility.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Controls.Compatibility.Msi.x64 ..... Done
Downloading Microsoft.Maui.Essentials.Msi.x64 (10.0.0-preview.4.25263.4)
Installing Microsoft.Maui.Essentials.Msi.x64 ..... Done

Successfully updated workload(s): ios android maccatalyst maui-windows.
```

</details>

##  .NET 10 Preview 2
- 17.14 Preview 2.0 / MAUI 10.0.0-preview.2.25165.1 / Pixel 9 API 35(Android 15)
  ![MAUI - Pixel 9 API 35](/images/VisualStudio/20250324_VS2022_17.14_Preview2.0_MAUI10.0.0preview2_Android15.png)
  - ワークロードを更新するも、デプロイしたアプリが更新されず、デバッガ異常終了
    - エミュレータ上のアプリをアンインストール
    - 今後に備え、アプリ画面にバージョンを表記するように修正
- 17.14 Preview 2.0 / MAUI 10.0.0-preview.1.25122.6 / Pixel 9 API 35(Android 15)
  ![MAUI - Pixel 9 API 35](/images/VisualStudio/20250313_VS2022_17.14_Preview2.0_MAUI10.0.0preview1_Android15.png)
  - ワークロードを更新しないと、デバッガが異常終了
    ![MAUI Debugger Abort - Pixel 9 API 35](/images/VisualStudio/20250313_VS2022_17.14_Preview2.0_MAUI10.0.0preview1_Android15_NG.png)

<details>
<summary>
MAUI Update Log
</summary>

```
.NET 10.0 へようこそ!
---------------------
SDK バージョン: 10.0.100-preview.2.25164.34

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
ワークロードのバージョン 10.0.100-preview.2.25167.2 をインストールしています。
Downloading microsoft.net.workloads.10.0.100-preview.2.msi.x64 (10.100.0-preview.2.25167.2)
microsoft.net.workloads.10.0.100-preview.2.msi.x64 をインストールしています .... Done
Downloading microsoft.net.workload.emscripten.current.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25120.1)
Downloading microsoft.net.workload.emscripten.net6.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25120.1)
Downloading microsoft.net.workload.emscripten.net7.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25120.1)
Downloading microsoft.net.workload.emscripten.net8.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25120.1)
Downloading microsoft.net.sdk.android.manifest-10.0.100-preview.2.msi.x64 (35.99.0-preview.2.205)
microsoft.net.sdk.android.manifest-10.0.100-preview.2.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.ios.manifest-10.0.100-preview.2.msi.x64 (18.2.10552-net10-p2)
microsoft.net.sdk.ios.manifest-10.0.100-preview.2.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.2.msi.x64 (18.2.10552-net10-p2)
microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.2.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.macos.manifest-10.0.100-preview.2.msi.x64 (15.2.10552-net10-p2)
microsoft.net.sdk.macos.manifest-10.0.100-preview.2.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.maui.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25165.1)
microsoft.net.sdk.maui.manifest-10.0.100-preview.2.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.tvos.manifest-10.0.100-preview.2.msi.x64 (18.2.10552-net10-p2)
microsoft.net.sdk.tvos.manifest-10.0.100-preview.2.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.workload.mono.toolchain.current.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25163.2)
Downloading microsoft.net.workload.mono.toolchain.net6.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25163.2)
Downloading microsoft.net.workload.mono.toolchain.net7.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25163.2)
Downloading microsoft.net.workload.mono.toolchain.net8.manifest-10.0.100-preview.2.msi.x64 (10.0.0-preview.2.25163.2)
Downloading microsoft.net.sdk.aspire.manifest-8.0.100.msi.x64 (8.2.2)
この機能バンドにはワークロードがインストールされていません。以前の SDK バージョンでインストールしたワークロードを更新するには、--from-previous-sdk オプションを含めます。
Visual Studio ワークロードのインストール レコードを書き込み中: 'maui-windows, maccatalyst, ios, android'
Downloading Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Sdk.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Graphics.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Graphics.Msi.x64 をインストールしています .... Done
Downloading Microsoft.Maui.Resizetizer.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Resizetizer.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.Maui.Templates.net10.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Templates.net10.Msi.x64 をインストールしています ..... Done
Microsoft.Maui.Templates.net9.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Core.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Core.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Controls.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Build.Tasks.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Controls.Build.Tasks.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Core.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Controls.Core.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Xaml.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Controls.Xaml.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Compatibility.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Controls.Compatibility.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Essentials.Msi.x64 (10.0.0-preview.2.25165.1)
Microsoft.Maui.Essentials.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.MacCatalyst.Sdk.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.MacCatalyst.Sdk.net10.0_18.2.Msi.x64 をインストールしています ...... Done
Microsoft.MacCatalyst.Sdk.net8.0_18.0.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.MacCatalyst.Ref.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.MacCatalyst.Ref.net10.0_18.2.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.MacCatalyst.Templates.Msi.x64 (18.2.10552-net10-p2)
Microsoft.MacCatalyst.Templates.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています .... Done
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (8.0.14)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (8.0.14)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています .......... Done
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (8.0.14)
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (8.0.14)
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (9.0.3)
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (9.0.3)
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.iOS.Sdk.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.iOS.Sdk.net10.0_18.2.Msi.x64 をインストールしています ......... Done
Microsoft.iOS.Sdk.net8.0_18.0.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.iOS.Windows.Sdk.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.iOS.Windows.Sdk.net10.0_18.2.Msi.x64 をインストールしています ........ Done
Microsoft.iOS.Windows.Sdk.net8.0_18.0.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.iOS.Ref.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.iOS.Ref.net10.0_18.2.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.iOS.Runtime.ios-arm64.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.iOS.Runtime.ios-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.2.Msi.x64 (18.2.10552-net10-p2)
Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.iOS.Templates.Msi.x64 (18.2.10552-net10-p2)
Microsoft.iOS.Templates.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (8.0.14)
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています .......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (8.0.14)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (8.0.14)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (35.99.0-preview.2.205)
Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ................ Done
Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ............... Done
Downloading Microsoft.Android.Ref.35.Msi.x64 (35.99.0-preview.2.205)
Microsoft.Android.Ref.35.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-arm.Msi.x64 (35.99.0-preview.2.205)
Microsoft.Android.Runtime.Mono.35.android-arm.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-arm64.Msi.x64 (35.99.0-preview.2.205)
Microsoft.Android.Runtime.Mono.35.android-arm64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-x86.Msi.x64 (35.99.0-preview.2.205)
Microsoft.Android.Runtime.Mono.35.android-x86.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-x64.Msi.x64 (35.99.0-preview.2.205)
Microsoft.Android.Runtime.Mono.35.android-x64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.Android.Templates.Msi.x64 (35.99.0-preview.2.205)
Microsoft.Android.Templates.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (9.0.3)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています .......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています .......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (10.0.0-preview.2.25163.2)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ........ Done

ワークロード maui-windows maccatalyst ios android が正常に更新されました。
```

</details>

##  .NET 10 Preview 1
- 17.14 Preview 1.1 / MAUI 10.0.0-preview.1.25122.6 / Pixel 9 API 35(Android 15)
  ![MAUI - Pixel 9 API 35](/images/VisualStudio/20250227_VS2022_17.14_Preview1.1_MAUI10.0.0preview1_Android15.png)

<details>
<summary>
MAUI Update Log
</summary>

    ```
    広告マニフェスト microsoft.net.sdk.maui を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.net6 を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.net9 を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.current を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.net7 を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.net7 を更新しました。
    広告マニフェスト microsoft.net.sdk.macos を更新しました。
    広告マニフェスト microsoft.net.sdk.aspire を更新しました。
    広告マニフェスト microsoft.net.sdk.maccatalyst を更新しました。
    広告マニフェスト microsoft.net.sdk.tvos を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.net6 を更新しました。
    広告マニフェスト microsoft.net.sdk.android を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.net9 を更新しました。
    広告マニフェスト microsoft.net.sdk.ios を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.net8 を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.current を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.net8 を更新しました。

    ワークロード android ios maccatalyst maui-windows が正常に更新されました。
    ```

</details>

- MAUIワークロードの更新（インストール済ワークロードの更新）
```
dotnet workload update --from-previous-sdk
```
<details>
<summary>
MAUI Update Log
</summary>

```

.NET 10.0 へようこそ!
---------------------
SDK バージョン: 10.0.100-preview.1.25120.13

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

広告マニフェスト microsoft.net.workload.emscripten.net7 を更新しました。
広告マニフェスト microsoft.net.sdk.maui を更新しました。
広告マニフェスト microsoft.net.workload.emscripten.net6 を更新しました。
広告マニフェスト microsoft.net.sdk.android を更新しました。
広告マニフェスト microsoft.net.workload.emscripten.current を更新しました。
広告マニフェスト microsoft.net.workload.mono.toolchain.current を更新しました。
広告マニフェスト microsoft.net.workload.emscripten.net9 を更新しました。
広告マニフェスト microsoft.net.sdk.macos を更新しました。
広告マニフェスト microsoft.net.workload.mono.toolchain.net7 を更新しました。
広告マニフェスト microsoft.net.sdk.maccatalyst を更新しました。
広告マニフェスト microsoft.net.workload.mono.toolchain.net9 を更新しました。
広告マニフェスト microsoft.net.workload.mono.toolchain.net6 を更新しました。
広告マニフェスト microsoft.net.sdk.ios を更新しました。
広告マニフェスト microsoft.net.sdk.tvos を更新しました。
広告マニフェスト microsoft.net.workload.emscripten.net8 を更新しました。
広告マニフェスト microsoft.net.sdk.aspire を更新しました。
広告マニフェスト microsoft.net.workload.mono.toolchain.net8 を更新しました。
Downloading microsoft.net.sdk.android.manifest-10.0.100-preview.1.msi.x64 (35.99.0-preview.1.140)
microsoft.net.sdk.android.manifest-10.0.100-preview.1.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.ios.manifest-10.0.100-preview.1.msi.x64 (18.2.10322-net10-p1)
microsoft.net.sdk.ios.manifest-10.0.100-preview.1.msi.x64 をインストールしています .... Done
Downloading microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.1.msi.x64 (18.2.10322-net10-p1)
microsoft.net.sdk.maccatalyst.manifest-10.0.100-preview.1.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.macos.manifest-10.0.100-preview.1.msi.x64 (15.2.10322-net10-p1)
microsoft.net.sdk.macos.manifest-10.0.100-preview.1.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.maui.manifest-10.0.100-preview.1.msi.x64 (10.0.0-preview.1.25122.6)
microsoft.net.sdk.maui.manifest-10.0.100-preview.1.msi.x64 をインストールしています ..... Done
Downloading microsoft.net.sdk.tvos.manifest-10.0.100-preview.1.msi.x64 (18.2.10322-net10-p1)
microsoft.net.sdk.tvos.manifest-10.0.100-preview.1.msi.x64 をインストールしています ..... Done
Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (35.99.0-preview.1.140)
Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ................ Done
Downloading Microsoft.Android.Ref.35.Msi.x64 (35.99.0-preview.1.140)
Microsoft.Android.Ref.35.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-arm.Msi.x64 (35.99.0-preview.1.140)
Microsoft.Android.Runtime.Mono.35.android-arm.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-arm64.Msi.x64 (35.99.0-preview.1.140)
Microsoft.Android.Runtime.Mono.35.android-arm64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-x86.Msi.x64 (35.99.0-preview.1.140)
Microsoft.Android.Runtime.Mono.35.android-x86.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.Android.Runtime.Mono.35.android-x64.Msi.x64 (35.99.0-preview.1.140)
Microsoft.Android.Runtime.Mono.35.android-x64.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.Android.Templates.Msi.x64 (35.99.0-preview.1.140)
Microsoft.Android.Templates.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (9.0.0)
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (9.0.0)
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (9.0.0)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.iOS.Sdk.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.iOS.Sdk.net10.0_18.2.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.iOS.Sdk.net8.0_18.0.Msi.x64 (18.0.8314)
Microsoft.iOS.Sdk.net8.0_18.0.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.iOS.Windows.Sdk.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.iOS.Windows.Sdk.net10.0_18.2.Msi.x64 をインストールしています ........ Done
Downloading Microsoft.iOS.Windows.Sdk.net8.0_18.0.Msi.x64 (18.0.8314)
Microsoft.iOS.Windows.Sdk.net8.0_18.0.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.iOS.Ref.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.iOS.Ref.net10.0_18.2.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.iOS.Runtime.ios-arm64.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.iOS.Runtime.ios-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.iOS.Templates.Msi.x64 (18.2.10322-net10-p1)
Microsoft.iOS.Templates.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (8.0.8)
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています .......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (8.0.8)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ........... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (8.0.8)
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (8.0.8)
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (8.0.8)
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.MacCatalyst.Sdk.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.MacCatalyst.Sdk.net10.0_18.2.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.MacCatalyst.Sdk.net8.0_18.0.Msi.x64 (18.0.8314)
Microsoft.MacCatalyst.Sdk.net8.0_18.0.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.MacCatalyst.Ref.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.MacCatalyst.Ref.net10.0_18.2.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.2.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.2.Msi.x64 (18.2.10322-net10-p1)
Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.2.Msi.x64 をインストールしています ....... Done
Downloading Microsoft.MacCatalyst.Templates.Msi.x64 (18.2.10322-net10-p1)
Microsoft.MacCatalyst.Templates.Msi.x64 をインストールしています .... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (10.0.0-preview.1.25080.5)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (8.0.8)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ......... Done
Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (8.0.8)
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています .......... Done
Downloading Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Sdk.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Sdk.Msi.x64 (9.0.0)
Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Graphics.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Graphics.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Resizetizer.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Resizetizer.Msi.x64 をインストールしています ...... Done
Downloading Microsoft.Maui.Templates.net10.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Templates.net10.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Templates.net9.Msi.x64 (9.0.0)
Microsoft.Maui.Templates.net9.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Core.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Core.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Controls.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Build.Tasks.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Controls.Build.Tasks.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Core.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Controls.Core.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Xaml.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Controls.Xaml.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Controls.Compatibility.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Controls.Compatibility.Msi.x64 をインストールしています ..... Done
Downloading Microsoft.Maui.Essentials.Msi.x64 (10.0.0-preview.1.25122.6)
Microsoft.Maui.Essentials.Msi.x64 をインストールしています ..... Done
Microsoft.NET.Sdk.iOS.Manifest-9.0.100.Msi.x64 を削除しています ..... Done
Microsoft.NET.Sdk.MacCatalyst.Manifest-9.0.100.Msi.x64 を削除しています ..... Done
Microsoft.NET.Sdk.macOS.Manifest-9.0.100.Msi.x64 を削除しています ..... Done
Microsoft.NET.Sdk.tvOS.Manifest-9.0.100.Msi.x64 を削除しています ..... Done
Microsoft.Android.Ref.35.Msi.x64 を削除しています ..... Done
Microsoft.Android.Ref.35.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.35.android-arm.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.35.android-arm64.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.35.android-x64.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.35.android-x86.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.Mono.35.android-arm.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.Mono.35.android-arm64.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.Mono.35.android-x64.Msi.x64 を削除しています ..... Done
Microsoft.Android.Runtime.Mono.35.android-x86.Msi.x64 を削除しています ..... Done
Microsoft.Android.Sdk.Windows.Msi.x64 を削除しています ......... Done
Microsoft.Android.Sdk.Windows.Msi.x64 を削除しています .......... Done
Microsoft.Android.Sdk.Windows.Msi.x64 を削除しています ........ Done
Microsoft.Android.Templates.Msi.x64 を削除しています ..... Done
Microsoft.Android.Templates.Msi.x64 を削除しています ..... Done
Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Ref.net10.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Ref.net9.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Runtime.ios-arm64.net10.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Runtime.ios-arm64.net9.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Runtime.iossimulator-arm64.net10.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Runtime.iossimulator-arm64.net9.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Runtime.iossimulator-x64.net10.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Runtime.iossimulator-x64.net9.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Sdk.net10.0_18.2.Msi.x64 を削除しています ....... Done
Microsoft.iOS.Sdk.net8.0_18.0.Msi.x64 を削除しています ....... Done
Microsoft.iOS.Sdk.net9.0_18.2.Msi.x64 を削除しています ........ Done
Microsoft.iOS.Templates.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Templates.Msi.x64 を削除しています ..... Done
Microsoft.iOS.Windows.Sdk.net10.0_18.2.Msi.x64 を削除しています ...... Done
Microsoft.iOS.Windows.Sdk.net8.0_18.0.Msi.x64 を削除しています ....... Done
Microsoft.iOS.Windows.Sdk.net9.0_18.2.Msi.x64 を削除しています ....... Done
Microsoft.MacCatalyst.Ref.net10.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.MacCatalyst.Ref.net9.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net10.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net9.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net10.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net9.0_18.2.Msi.x64 を削除しています ..... Done
Microsoft.MacCatalyst.Sdk.net10.0_18.2.Msi.x64 を削除しています ...... Done
Microsoft.MacCatalyst.Sdk.net8.0_18.0.Msi.x64 を削除しています ..... Done
Microsoft.MacCatalyst.Sdk.net9.0_18.2.Msi.x64 を削除しています ....... Done
Microsoft.MacCatalyst.Templates.Msi.x64 を削除しています .... Done
Microsoft.MacCatalyst.Templates.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Controls.Msi.x64 を削除しています .... Done
Microsoft.Maui.Controls.Build.Tasks.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Controls.Compatibility.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Controls.Core.Msi.x64 を削除しています .... Done
Microsoft.Maui.Controls.Xaml.Msi.x64 を削除しています .... Done
Microsoft.Maui.Core.Msi.x64 を削除しています .... Done
Microsoft.Maui.Essentials.Msi.x64 を削除しています .... Done
Microsoft.Maui.Graphics.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 を削除しています .... Done
Microsoft.Maui.Resizetizer.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Sdk.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Sdk.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Templates.net10.Msi.x64 を削除しています ..... Done
Microsoft.Maui.Templates.net9.Msi.x64 を削除しています .... Done
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 を削除しています ..... Done
Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 を削除しています .... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 を削除しています .... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 を削除しています .... Done
Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 を削除しています ..... Done
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 を削除しています ........... Done
Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 を削除しています ........... Done
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 を削除しています ........... Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 を削除しています ........... Done
Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 を削除しています .......... Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 を削除しています ......... Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 を削除しています ........ Done
Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 を削除しています ........ Done

ワークロード android ios maccatalyst maui-windows が正常に更新されました。
```

</details>

#   .NET MAUI 9
##  .NET MAUI 9.0.40
- 17.14 Preview 1.0 / MAUI 9.0.40 / Pixel 9 API 35(Android 15)
  ![MAUI - Pixel 9 API 35](/images/VisualStudio/20250212_VS2022_17.14_Preview1.0_MAUI9.0.40_Android15.png)

<details>
<summary>
MAUI Update Log
</summary>

    ```
    広告マニフェスト microsoft.net.sdk.android を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.net8 を更新しました。
    広告マニフェスト microsoft.net.sdk.tvos を更新しました。
    広告マニフェスト microsoft.net.sdk.maui を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.net7 を更新しました。
    広告マニフェスト microsoft.net.sdk.maccatalyst を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.net7 を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.net6 を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.net8 を更新しました。
    広告マニフェスト microsoft.net.workload.mono.toolchain.current を更新しました。
    広告マニフェスト microsoft.net.sdk.ios を更新しました。
    広告マニフェスト microsoft.net.sdk.aspire を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.current を更新しました。
    広告マニフェスト microsoft.net.workload.emscripten.net6 を更新しました。
    広告マニフェスト microsoft.net.sdk.macos を更新しました。
    Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (35.0.24)
    Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ......................... Done
    Downloading Microsoft.Android.Sdk.Windows.Msi.x64 (34.0.145)
    Microsoft.Android.Sdk.Windows.Msi.x64 をインストールしています ................. Done
    Downloading Microsoft.Android.Ref.35.Msi.x64 (35.0.24)
    Microsoft.Android.Ref.35.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.Android.Runtime.35.android-arm.Msi.x64 (35.0.24)
    Microsoft.Android.Runtime.35.android-arm.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.Android.Runtime.35.android-arm64.Msi.x64 (35.0.24)
    Microsoft.Android.Runtime.35.android-arm64.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.Android.Runtime.35.android-x86.Msi.x64 (35.0.24)
    Microsoft.Android.Runtime.35.android-x86.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.Android.Runtime.35.android-x64.Msi.x64 (35.0.24)
    Microsoft.Android.Runtime.35.android-x64.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.Android.Templates.Msi.x64 (35.0.24)
    Microsoft.Android.Templates.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています .............. Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ............ Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています ............... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (8.0.12)
    Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (8.0.12)
    Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 をインストールしています .............. Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 をインストールしています ............. Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 をインストールしています ............... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 をインストールしています ............. Done
    Downloading Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 (9.0.1)
    Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 (9.0.1)
    Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.iOS.Sdk.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.iOS.Sdk.net9.0_18.2.Msi.x64 をインストールしています ............ Done
    Microsoft.iOS.Sdk.net8.0_17.0.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.iOS.Sdk.net8.0_18.0.Msi.x64 (18.0.8319)
    Microsoft.iOS.Sdk.net8.0_18.0.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.iOS.Sdk.net9.0_18.0.Msi.x64 (18.0.9617)
    Microsoft.iOS.Sdk.net9.0_18.0.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.iOS.Windows.Sdk.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.iOS.Windows.Sdk.net9.0_18.2.Msi.x64 をインストールしています ........... Done
    Microsoft.iOS.Windows.Sdk.net8.0_17.0.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.iOS.Windows.Sdk.net8.0_18.0.Msi.x64 (18.0.8319)
    Microsoft.iOS.Windows.Sdk.net8.0_18.0.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.iOS.Windows.Sdk.net9.0_18.0.Msi.x64 (18.0.9617)
    Microsoft.iOS.Windows.Sdk.net9.0_18.0.Msi.x64 をインストールしています .......... Done
    Downloading Microsoft.iOS.Ref.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.iOS.Ref.net9.0_18.2.Msi.x64 をインストールしています ...... Done
    Downloading Microsoft.iOS.Runtime.ios-arm64.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.iOS.Runtime.ios-arm64.net9.0_18.2.Msi.x64 をインストールしています ......... Done
    Downloading Microsoft.iOS.Runtime.iossimulator-x64.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.iOS.Runtime.iossimulator-x64.net9.0_18.2.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.iOS.Runtime.iossimulator-arm64.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.iOS.Runtime.iossimulator-arm64.net9.0_18.2.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.iOS.Templates.Msi.x64 (18.2.9170)
    Microsoft.iOS.Templates.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ............. Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ............... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 をインストールしています ............ Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 をインストールしています .............. Done
    Downloading Microsoft.MacCatalyst.Sdk.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.MacCatalyst.Sdk.net9.0_18.2.Msi.x64 をインストールしています ........ Done
    Microsoft.MacCatalyst.Sdk.net8.0_17.0.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.MacCatalyst.Sdk.net8.0_18.0.Msi.x64 (18.0.8319)
    Microsoft.MacCatalyst.Sdk.net8.0_18.0.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.MacCatalyst.Sdk.net9.0_18.0.Msi.x64 (18.0.9617)
    Microsoft.MacCatalyst.Sdk.net9.0_18.0.Msi.x64 をインストールしています ...... Done
    Downloading Microsoft.MacCatalyst.Ref.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.MacCatalyst.Ref.net9.0_18.2.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net9.0_18.2.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net9.0_18.2.Msi.x64 (18.2.9170)
    Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net9.0_18.2.Msi.x64 をインストールしています ........ Done
    Downloading Microsoft.MacCatalyst.Templates.Msi.x64 (18.2.9170)
    Microsoft.MacCatalyst.Templates.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ............... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (9.0.1)
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています ........... Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 をインストールしています ............ Done
    Downloading Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 (8.0.12)
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 をインストールしています .............. Done
    Downloading Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 (9.0.14)
    Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 (9.0.14)
    Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Sdk.Msi.x64 (9.0.14)
    Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Sdk.Msi.x64 (8.0.100)
    Microsoft.Maui.Sdk.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Graphics.Msi.x64 (9.0.14)
    Microsoft.Maui.Graphics.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Resizetizer.Msi.x64 (9.0.14)
    Microsoft.Maui.Resizetizer.Msi.x64 をインストールしています ....... Done
    Downloading Microsoft.Maui.Templates.net9.Msi.x64 (9.0.14)
    Microsoft.Maui.Templates.net9.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Templates.net8.Msi.x64 (8.0.100)
    Microsoft.Maui.Templates.net8.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Core.Msi.x64 (9.0.14)
    Microsoft.Maui.Core.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Msi.x64 (9.0.14)
    Microsoft.Maui.Controls.Msi.x64 をインストールしています ...... Done
    Downloading Microsoft.Maui.Controls.Build.Tasks.Msi.x64 (9.0.14)
    Microsoft.Maui.Controls.Build.Tasks.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Core.Msi.x64 (9.0.14)
    Microsoft.Maui.Controls.Core.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Xaml.Msi.x64 (9.0.14)
    Microsoft.Maui.Controls.Xaml.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Controls.Compatibility.Msi.x64 (9.0.14)
    Microsoft.Maui.Controls.Compatibility.Msi.x64 をインストールしています ..... Done
    Downloading Microsoft.Maui.Essentials.Msi.x64 (9.0.14)
    Microsoft.Maui.Essentials.Msi.x64 をインストールしています ..... Done
    Microsoft.Android.Ref.35.Msi.x64 を削除しています ..... Done
    Microsoft.Android.Runtime.35.android-arm.Msi.x64 を削除しています ..... Done
    Microsoft.Android.Runtime.35.android-arm64.Msi.x64 を削除しています ..... Done
    Microsoft.Android.Runtime.35.android-x64.Msi.x64 を削除しています ..... Done
    Microsoft.Android.Runtime.35.android-x86.Msi.x64 を削除しています ..... Done
    Microsoft.Android.Sdk.Windows.Msi.x64 を削除しています ............ Done
    Microsoft.Android.Sdk.Windows.Msi.x64 を削除しています ............ Done
    Microsoft.Android.Templates.Msi.x64 を削除しています ..... Done
    Microsoft.AspNetCore.Components.WebView.Maui.Msi.x64 を削除しています .... Done
    Microsoft.iOS.Ref.net9.0_18.2.Msi.x64 を削除しています .... Done
    Microsoft.iOS.Runtime.ios-arm64.net9.0_18.2.Msi.x64 を削除しています ..... Done
    Microsoft.iOS.Runtime.iossimulator-arm64.net9.0_18.2.Msi.x64 を削除しています ..... Done
    Microsoft.iOS.Runtime.iossimulator-x64.net9.0_18.2.Msi.x64 を削除しています ..... Done
    Microsoft.iOS.Sdk.net8.0_17.0.Msi.x64 を削除しています ........ Done
    Microsoft.iOS.Sdk.net8.0_18.0.Msi.x64 を削除しています ......... Done
    Microsoft.iOS.Sdk.net9.0_18.0.Msi.x64 を削除しています ......... Done
    Microsoft.iOS.Sdk.net9.0_18.2.Msi.x64 を削除しています .......... Done
    Microsoft.iOS.Templates.Msi.x64 を削除しています ..... Done
    Microsoft.iOS.Windows.Sdk.net8.0_17.0.Msi.x64 を削除しています ....... Done
    Microsoft.iOS.Windows.Sdk.net8.0_18.0.Msi.x64 を削除しています ........ Done
    Microsoft.iOS.Windows.Sdk.net9.0_18.0.Msi.x64 を削除しています ........ Done
    Microsoft.iOS.Windows.Sdk.net9.0_18.2.Msi.x64 を削除しています ....... Done
    Microsoft.MacCatalyst.Ref.net9.0_18.2.Msi.x64 を削除しています ..... Done
    Microsoft.MacCatalyst.Runtime.maccatalyst-arm64.net9.0_18.2.Msi.x64 を削除しています ..... Done
    Microsoft.MacCatalyst.Runtime.maccatalyst-x64.net9.0_18.2.Msi.x64 を削除しています ..... Done
    Microsoft.MacCatalyst.Sdk.net8.0_17.0.Msi.x64 を削除しています ...... Done
    Microsoft.MacCatalyst.Sdk.net8.0_18.0.Msi.x64 を削除しています ....... Done
    Microsoft.MacCatalyst.Sdk.net9.0_18.0.Msi.x64 を削除しています ....... Done
    Microsoft.MacCatalyst.Sdk.net9.0_18.2.Msi.x64 を削除しています ........ Done
    Microsoft.MacCatalyst.Templates.Msi.x64 を削除しています ..... Done
    Microsoft.Maui.Controls.Msi.x64 を削除しています .... Done
    Microsoft.Maui.Controls.Build.Tasks.Msi.x64 を削除しています .... Done
    Microsoft.Maui.Controls.Compatibility.Msi.x64 を削除しています ..... Done
    Microsoft.Maui.Controls.Core.Msi.x64 を削除しています ..... Done
    Microsoft.Maui.Controls.Xaml.Msi.x64 を削除しています .... Done
    Microsoft.Maui.Core.Msi.x64 を削除しています .... Done
    Microsoft.Maui.Essentials.Msi.x64 を削除しています .... Done
    Microsoft.Maui.Graphics.Msi.x64 を削除しています ..... Done
    Microsoft.Maui.Graphics.Win2D.WinUI.Desktop.Msi.x64 を削除しています ..... Done
    Microsoft.Maui.Resizetizer.Msi.x64 を削除しています .... Done
    Microsoft.Maui.Sdk.Msi.x64 を削除しています ..... Done
    Microsoft.Maui.Sdk.Msi.x64 を削除しています ...... Done
    Microsoft.Maui.Templates.net8.Msi.x64 を削除しています ..... Done
    Microsoft.Maui.Templates.net9.Msi.x64 を削除しています .... Done
    Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 を削除しています ..... Done
    Microsoft.NET.Runtime.MonoAOTCompiler.Task.Msi.x64 を削除しています ...... Done
    Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 を削除しています ...... Done
    Microsoft.NET.Runtime.MonoTargets.Sdk.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm.Msi.x64 を削除しています ...... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-arm64.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x64.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.AOT.win-x64.Cross.android-x86.Msi.x64 を削除しています ..... Done
    Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 を削除しています ............ Done
    Microsoft.NETCore.App.Runtime.Mono.android-arm.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.android-arm64.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.android-x64.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.android-x86.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 を削除しています ........... Done
    Microsoft.NETCore.App.Runtime.Mono.ios-arm64.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 を削除しています ............ Done
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-arm64.Msi.x64 を削除しています .............. Done
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 を削除しています ............ Done
    Microsoft.NETCore.App.Runtime.Mono.iossimulator-x64.Msi.x64 を削除しています ............. Done
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 を削除しています .............. Done
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-arm64.Msi.x64 を削除しています ............ Done
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 を削除しています .............. Done
    Microsoft.NETCore.App.Runtime.Mono.maccatalyst-x64.Msi.x64 を削除しています .......... Done

    ワークロード android ios maccatalyst maui-windows が正常に更新されました。
    ```

</details>

##  .NET MAUI 9.0.10
- 17.12 / MAUI 9.0.10 / Pixel 9 Pro API 35(Android 15)
![MAUI - Pixel 9 Pro API 35](/images/VisualStudio/20241117_VS2022_17.12_MAUI9.0.10_Android15.png)
<details>
<summary>ビルドログ</summary>

```
18:43 でビルドが開始されました...
1>------ ビルド開始: プロジェクト: MauiApp9, 構成: Debug Any CPU ------
1>ビルドの速度を上げるために、アナライザーをスキップしています。'ビルド' または '再ビルド' コマンドを実行してアナライザーを実行できます。
1>Including assemblies for Hot Reload support
1>MauiApp9 -> D:\Repository\Weekend_Programming\net\MAUI\MauiApp9\MauiApp9\bin\Debug\net9.0-android\MauiApp9.dll
2>------ 配置開始: プロジェクト: MauiApp9, 構成: Debug Any CPU ------
2>Pixel_9_Pro_API_35 に対する配置を開始しています...
2>エミュレーターの準備ができるまで待機しています...
2>Pixel_9_Pro_API_35 に配置しています...
ビルドを開始しました。
プロジェクト "MauiApp9.csproj" (Install ターゲット):
指定された RuntimeIdentifier 'android-arm64' で利用できるアプリケーション ホストはありません。
指定された RuntimeIdentifier 'android-x64' で利用できるアプリケーション ホストはありません。
Found Java SDK version 17.0.12.
Looking for Android NDK...
Looking for Android SDK...
Found Xamarin.Android 13.2.99.932
MonoAndroid Tools: C:\Program Files\dotnet\packs\Microsoft.Android.Sdk.Windows\35.0.7\tools\
Android Platform API level: 35
TargetFrameworkVersion: v9.0
Android NDK: 
Android SDK: C:\Program Files (x86)\Android\android-sdk\
Android SDK Build Tools: C:\Program Files (x86)\Android\android-sdk\build-tools\35.0.0\
Java SDK: C:\Program Files (x86)\Android\openjdk\jdk-17.0.12\
Application Java class: android.app.Application
_OuterIntermediateOutputPath: 
IntermediateOutputPath: obj\Debug
et9.0-android\
"obj\Debug
et9.0-android\staticwebassets.references.upToDateCheck.txt" の 'WriteOnlyWhenDifferent' 属性は、'Overwrite="true"' の場合にのみ有効になります。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_ProcessScopedCssFiles" を省略します。
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\quqdvlarqf-e5tk7yf482.gz' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\app.css'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\7ezkn64cgu-6gzpyzhau4.gz' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\w1cn9yk6jz-8inm30yfxf.gz' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css.map'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\09ivkjf474-knq8i9ludi.gz' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\index.html'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\at5bgn53p2-u4z5qnisnb.gz' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\bundle\MauiApp9.styles.css'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\tshj81g4um-u4z5qnisnb.gz' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\projectbundle\MauiApp9.bundle.scp.css'.
Resolved 6 compressed assets for 6 candidate assets.
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\quqdvlarqf-e5tk7yf482.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\7ezkn64cgu-6gzpyzhau4.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\w1cn9yk6jz-8inm30yfxf.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\09ivkjf474-knq8i9ludi.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\at5bgn53p2-u4z5qnisnb.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\tshj81g4um-u4z5qnisnb.gz
出力がないため、ターゲット "_BuildCopyStaticWebAssetsPreserveNewest" を省略しています。
出力がないため、ターゲット "_BuildCopyStaticWebAssetsPreserveNewest" を省略しています。
The asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\09ivkjf474-knq8i9ludi.gz' with related asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\index.html' was detected as already compressed with format 'gzip'.
The asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\7ezkn64cgu-6gzpyzhau4.gz' with related asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css' was detected as already compressed with format 'gzip'.
The asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\at5bgn53p2-u4z5qnisnb.gz' with related asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\bundle\MauiApp9.styles.css' was detected as already compressed with format 'gzip'.
The asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\quqdvlarqf-e5tk7yf482.gz' with related asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\app.css' was detected as already compressed with format 'gzip'.
The asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\tshj81g4um-u4z5qnisnb.gz' with related asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\projectbundle\MauiApp9.bundle.scp.css' was detected as already compressed with format 'gzip'.
The asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\w1cn9yk6jz-8inm30yfxf.gz' with related asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css.map' was detected as already compressed with format 'gzip'.
Ignoring asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\bundle\MauiApp9.styles.css' because it was already resolved with format 'gzip'.
Ignoring asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\projectbundle\MauiApp9.bundle.scp.css' because it was already resolved with format 'gzip'.
Ignoring asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\app.css' because it was already resolved with format 'gzip'.
Ignoring asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css' because it was already resolved with format 'gzip'.
Ignoring asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css.map' because it was already resolved with format 'gzip'.
Ignoring asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\index.html' because it was already resolved with format 'gzip'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\at5bgn53p2-u4z5qnisnb.br' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\bundle\MauiApp9.styles.css'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\tshj81g4um-u4z5qnisnb.br' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\scopedcss\projectbundle\MauiApp9.bundle.scp.css'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\quqdvlarqf-e5tk7yf482.br' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\app.css'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\7ezkn64cgu-6gzpyzhau4.br' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\w1cn9yk6jz-8inm30yfxf.br' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\css\bootstrap\bootstrap.min.css.map'.
Accepted compressed asset 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\09ivkjf474-knq8i9ludi.br' for 'D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\wwwroot\index.html'.
Resolved 6 compressed assets for 6 candidate assets.
C:\Program Files\dotnet\dotnet.exe "C:\Program Files\dotnet\sdk\9.0.100\Sdks\Microsoft.NET.Sdk.StaticWebAssets\targets\..\tools
et9.0\Microsoft.NET.Sdk.StaticWebAssets.Tool.dll" brotli

Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\09ivkjf474-knq8i9ludi.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\7ezkn64cgu-6gzpyzhau4.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\at5bgn53p2-u4z5qnisnb.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\quqdvlarqf-e5tk7yf482.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\tshj81g4um-u4z5qnisnb.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\w1cn9yk6jz-8inm30yfxf.gz
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\at5bgn53p2-u4z5qnisnb.br
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\tshj81g4um-u4z5qnisnb.br
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\quqdvlarqf-e5tk7yf482.br
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\7ezkn64cgu-6gzpyzhau4.br
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\w1cn9yk6jz-8inm30yfxf.br
Processing compressed asset: D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\compressed\publish\09ivkjf474-knq8i9ludi.br
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "ProcessMauiSplashScreens" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "ProcessMauiFonts" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "ResizetizeImages" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_ResolveLibraryProjectImports" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_BuildLibraryImportsCache" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_GenerateResourceCaseMap" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_GenerateResourceDesignerIntermediateClass" を省略します。
出力がないため、ターゲット "_GenerateLayoutBindings" を省略しています。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_ConvertResourcesCases" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_CompileResources" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_PrepareUpdateAndroidResgen" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_UpdateAndroidResgen" を省略します。
プロジェクト "MauiApp9.csproj" (_ComputeFilesToPublishForRuntimeIdentifiers ターゲット):
_OuterIntermediateOutputPath: obj\Debug
et9.0-android\
IntermediateOutputPath: obj\Debug
et9.0-android\android-x64\
プロジェクト "MauiApp9.csproj" のビルドが終了しました。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_LinkAssembliesNoShrink" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_GenerateJavaStubs" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_ManifestMerger" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_ConvertCustomView" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_AddStaticResources" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_GenerateEmptyAndroidRemapNativeCode" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_GeneratePackageManagerJava" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_GenerateAndroidAssetsDir" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_PrepareCreateBaseApk" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_CreateBaseApk" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_CompileJava" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_CompileNativeAssemblySources" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_CreateApplicationSharedLibraries" を省略します。
すべての出力ファイルが入力ファイルに対して最新なので、ターゲット "_CompileToDalvik" を省略します。
"D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\obj\Debug
et9.0-android\android\bin\com.companyname.mauiapp9.apk" から "D:\Repository\Weekend_Programming
et\MAUI\MauiApp9\MauiApp9\bin\Debug
et9.0-android\com.companyname.mauiapp9.apk" へファイルをコピーしています。
"AlwaysCreate" が指定されたため "obj\Debug
et9.0-android\android_debug_keystore.flag" を作成しています。
"obj\Debug
et9.0-android\android_debug_keystore.flag" のタッチ タスクを実行しています。
C:\Program Files (x86)\Android\android-sdk\build-tools\35.0.0\zipalign.exe -p 16 "obj\Debug
et9.0-android\android\bin\com.companyname.mauiapp9.apk" "bin\Debug
et9.0-android\\com.companyname.mauiapp9-Signed.apk" 
C:\Program Files (x86)\Android\openjdk\jdk-17.0.12\bin\java.exe -jar "C:\Program Files (x86)\Android\android-sdk\build-tools\35.0.0\lib\apksigner.jar" sign --ks "C:\Users\taish\AppData\Local\Xamarin\Mono for Android\debug.keystore" --ks-pass pass:android --ks-key-alias androiddebugkey --key-pass pass:android --min-sdk-version 24 --max-sdk-version 35  bin\Debug
et9.0-android\com.companyname.mauiapp9-Signed.apk 
Signed android package 'bin\Debug
et9.0-android\com.companyname.mauiapp9-Signed.apk'
ディレクトリ "obj\Debug
et9.0-android\diagnostics" を作成しています。
Using cached value from RegisterTaskObject
Found device: emulator-5554
"AlwaysCreate" が指定されたため "obj\Debug
et9.0-android\upload.flag" を作成しています。
2>Pixel_9_Pro_API_35 に対する配置に成功しました。
"obj\Debug
et9.0-android\upload.flag" のタッチ タスクを実行しています。
ディレクトリ "obj\.cache\" を作成しています。
プロジェクト "MauiApp9.csproj" のビルドが終了しました。
ビルドに成功しました。
========== ビルド: 成功 1、失敗 0、最新の状態 0、スキップ 0 ==========
=========== ビルド は 18:46 で完了し、02:48.869 分 掛かりました ==========
========== 展開: 1 正常終了、0 失敗、0 スキップ ==========
```
</details>

##  .NET MAUI 9.0.0-rc.2
- 17.12 Preview 2.1 / MAUI 9.0.0-rc.2 / Pixel 8 API 35(Android 15)
  ![MAUI - Pixel 8 API 35](/images/VisualStudio/20241011_VS2022_17.12_Preview2.1_MAUI9.0.0rc.2_Android15.png)
  - デバイスマネージャではエラーとなっているにもかかわらず、デバッグ実行できている
    ![Emulator - API 35](/images/VisualStudio/20240915_VS2022_17.12_Emulator_Android15.png)

# .NET MAUI 8
##  .NET MAUI 8.0.91
- 17.11.5 / MAUI 8.0.91 / Pixel 5 API 34(Android 14)
  ![MAUI - Pixel 5 API 34](/images/VisualStudio/20241011_VS2022_17.11.5_MAUI91_Android14.png)

##  .NET MAUI 8.0.61
- 17.10.4 / MAUI 8.0.61(SR6.1) / Pixel 8 API 34(Android 14)
  ![MAUI - Pixel 8 API 34](/images/VisualStudio/20240713_VS2022_17.10.4_MAUI_Android.png)

##  .NET MAUI 8.0.40
- 17.10.3 / MAUI 8.0.40(SR5)
  - 8.0.40同梱で、Androidエミュレータでの実行確認
    ![MAUI - Pixel 8](/images/VisualStudio/20240626_VS2022_17.10.3_MAUI_Android.png)
