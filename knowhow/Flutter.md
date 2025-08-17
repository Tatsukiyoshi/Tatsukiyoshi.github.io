---
title:  Dart & Flutter
layout: single
sidebar:
  nav: main
---
##  独学書

  |Text                                                                                |Date      |Status
  |------------------------------------------------------------------------------------|----------|---
  |[動かして学ぶ！Flutter開発入門](https://www.shoeisha.co.jp/book/detail/9784798177366) |2023/12/23|Chapter 4 Firebaseとの連携 <span style="color: red;">*finished*</span> ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/flutter/introduction)

##  コンテンツ

  |Contents                                                                        |Date      |Status
  |--------------------------------------------------------------------------------|----------|---
  |[Flutterで始めるモバイルアプリ開発](https://codezine.jp/article/corner/830)       |2024/12/29|第29回 アプリ名やアイコン設定までFlutterで完結！ 開発者向けツールを紹介<span style="color: red;">*finished*</span>

##  環境
  1. Windows 11

      |Machine        |Env / FW                                                              |Last Updated
      |---------------|----------------------------------------------------------------------|----------
      |Windows Insider|Flutter 3.35.1                                                        |[2025/08/17](https://docs.flutter.dev/release/release-notes)
      |               |[Android Studio Narwhal 2025.1.2 Canary 2](Kotlin#android-studio)     |2025/05/25
      |               |[Visual Studio Community 2022 17.14.2 Preview 1.0](NET)               |2025/05/25

  1. Chrome OS Flex 135.0.7049.104 (Official Build)

      |Machine        |Env / FW                     |Last Updated
      |---------------|-----------------------------|----------
      |Chrome OS Flex |Flutter 3.27.1               |2025/01/02
      |               |Debian clang 14.0.6          |2025/01/02
      |               |cmake 3.25.1                 |2025/01/02
      |               |ninja 1.11.1                 |2025/01/02

  1.  macOS Sequoia 15.6

      |Machine        |Env / FW                     |Last Updated
      |---------------|-----------------------------|----------
      |macOS          |Flutter 3.33.0-1.0.pre-1343  |2025/08/11

##  ノウハウ
### 設定
  - flutter dev
    -  [Get started](https://docs.flutter.dev/get-started/install)
    -  myapp - flutter demo
    -  Startup namer
  - Setup
    ```
    Expand-Archive –Path $env:USERPROFILE\Downloads\flutter_windows_3.27.1-stable.zip -Destination $env:USERPROFILE\dev\
    ```
  - flutterの更新
    ```
    flutter upgrade
    ```
  - flutter doctor -v
    <details>
    <summary>
    Windows Insider
    </summary>

    ```
    [√] Flutter (Channel stable, 3.35.1, on Microsoft Windows [Version 10.0.26200.5751], locale ja-JP) [602ms]
        • Flutter version 3.35.1 on channel stable at C:\Users\taish\dev\flutter
        • Upstream repository https://github.com/flutter/flutter.git
        • Framework revision 20f8274939 (3 days ago), 2025-08-14 10:53:09 -0700
        • Engine revision 1e9a811bf8
        • Dart version 3.9.0
        • DevTools version 2.48.0
        • Feature flags: enable-web, enable-linux-desktop, enable-macos-desktop, enable-windows-desktop, enable-android, enable-ios,   
          cli-animations, enable-lldb-debugging

    [√] Windows Version (Windows 11 or higher, 25H2, 2009) [1,320ms]

    [√] Android toolchain - develop for Android devices (Android SDK version 36.0.0) [2.4s]
        • Android SDK at C:\Users\taish\AppData\Local\Android\Sdk
        • Emulator version 36.2.4.0 (build_id 13899551) (CL:N/A)
        • Platform android-CANARY, build-tools 36.0.0
        • ANDROID_HOME = C:\Users\taish\AppData\Local\Android\Sdk
        • Java binary at: C:\Program Files\Android\Android Studio Narwhal\jbr\bin\java
          This is the JDK bundled with the latest Android Studio installation on this machine.
          To manually set the JDK path, use: `flutter config --jdk-dir="path/to/jdk"`.
        • Java version OpenJDK Runtime Environment (build 21.0.7+-13880790-b1038.58)
        • All Android licenses accepted.

    [√] Chrome - develop for the web [325ms]
        • Chrome at C:\Program Files\Google\Chrome\Application\chrome.exe

    [√] Visual Studio - develop Windows apps (Visual Studio Community 2022 17.14.12 Preview 1.0) [324ms]
        • Visual Studio at C:\Program Files\Microsoft Visual Studio\2022\Preview
        • Visual Studio Community 2022 version 17.14.36408.4
        • The current Visual Studio installation is a pre-release version. It may not be supported by Flutter yet.
        • Windows 10 SDK version 10.0.26100.0

    [√] Android Studio (version 2025.1.4) [93ms]
        • Android Studio at C:\Program Files\Android\Android Studio Narwhal
        • Flutter plugin can be installed from:
          https://plugins.jetbrains.com/plugin/9212-flutter
        • Dart plugin can be installed from:
          https://plugins.jetbrains.com/plugin/6351-dart
        • Java version OpenJDK Runtime Environment (build 21.0.7+-13880790-b1038.58)

    [√] IntelliJ IDEA Ultimate Edition (version 2025.2) [91ms]
        • IntelliJ at C:\Program Files\JetBrains\IntelliJ IDEA 252.23892.248
        • Flutter plugin version 85.3.2
        • Dart plugin version 252.24322.5

    [√] VS Code (version 1.103.1) [13ms]
        • VS Code at C:\Users\taish\AppData\Local\Programs\Microsoft VS Code
        • Flutter extension version 3.116.0

    [√] Connected device (3 available) [438ms]
        • Windows (desktop) • windows • windows-x64    • Microsoft Windows [Version 10.0.26200.5751]
        • Chrome (web)      • chrome  • web-javascript • Google Chrome 139.0.7258.127
        • Edge (web)        • edge    • web-javascript • Microsoft Edge 140.0.3485.11

    [√] Network resources [1,012ms]
        • All expected network resources are available.

    • No issues found!
    ```
    </details>

    <details>
    <summary>
    macOS
    </summary>

    ```
    [!] Flutter (Channel master, 3.33.0-1.0.pre-1343, on macOS 15.6 24G84 darwin-arm64, locale ja-JP) [1,878ms]
        • Flutter version 3.33.0-1.0.pre-1343 on channel master at /Users/taishow2024/src/flutter
        ! Upstream repository https://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:x-oauth-basic@github.com/flutter/flutter.git is not a standard remote.
          Set environment variable "FLUTTER_GIT_URL" to https://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:x-oauth-basic@github.com/flutter/flutter.git to dismiss this error.
        • Framework revision 1590543f67 (2 days ago), 2025-08-08 23:18:19 -0400
        • Engine revision d77a9629f2
        • Dart version 3.10.0 (build 3.10.0-81.0.dev)
        • DevTools version 2.49.0
        • Feature flags: enable-web, enable-linux-desktop, enable-macos-desktop, enable-windows-desktop, enable-android, enable-ios, cli-animations, enable-native-assets,
          enable-lldb-debugging
        • If those were intentional, you can disregard the above warnings; however it is recommended to use "git" directly to perform update checks and upgrades.

    [✗] Android toolchain - develop for Android devices [489ms]
        ✗ Unable to locate Android SDK.
          Install Android Studio from: https://developer.android.com/studio/index.html
          On first launch it will assist you in installing the Android SDK components.
          (or visit https://flutter.dev/to/macos-android-setup for detailed instructions).
          If the Android SDK has been installed to a custom location, please use
          `flutter config --android-sdk` to update to that location.


    [✓] Xcode - develop for iOS and macOS (Xcode 26.0) [1,079ms]
        • Xcode at /Applications/Xcode-beta.app/Contents/Developer
        • Build 17A5295f
        • CocoaPods version 1.16.2

    [✓] Chrome - develop for the web [5ms]
        • Chrome at /Applications/Google Chrome.app/Contents/MacOS/Google Chrome

    [✓] Connected device (3 available) [7.1s]
        • iPhone 16 Pro (mobile) • 105561CA-56A3-4CE1-923F-682DBDD99B52 • ios            • com.apple.CoreSimulator.SimRuntime.iOS-26-0 (simulator)
        • macOS (desktop)        • macos                                • darwin-arm64   • macOS 15.6 24G84 darwin-arm64
        • Chrome (web)           • chrome                               • web-javascript • Google Chrome 138.0.7204.185

    [✓] Network resources [277ms]
        • All expected network resources are available.

    ! Doctor found issues in 2 categories.
    ```
    </details>

    <details>
    <summary>
    Chrome OS Flex
    </summary>

    ```
    [✓] Flutter (Channel stable, 3.27.1, on Debian GNU/Linux 12 (bookworm) 6.6.54-05528-gdd4efe62d86b, locale en_US.UTF-8)
        • Flutter version 3.27.1 on channel stable at /home/taishow2006/src/flutter
        • Upstream repository https://github.com/flutter/flutter.git
        • Framework revision 17025dd882 (2 weeks ago), 2024-12-17 03:23:09 +0900
        • Engine revision cb4b5fff73
        • Dart version 3.6.0
        • DevTools version 2.40.2

    [✗] Android toolchain - develop for Android devices
        ✗ Unable to locate Android SDK.
          Install Android Studio from: https://developer.android.com/studio/index.html
          On first launch it will assist you in installing the Android SDK components.
          (or visit https://flutter.dev/to/linux-android-setup for detailed instructions).
          If the Android SDK has been installed to a custom location, please use
          `flutter config --android-sdk` to update to that location.


    [✗] Chrome - develop for the web (Cannot find Chrome executable at google-chrome)
        ! Cannot find Chrome. Try setting CHROME_EXECUTABLE to a Chrome executable.

    [✓] Linux toolchain - develop for Linux desktop
        • Debian clang version 14.0.6
        • cmake version 3.25.1
        • ninja version 1.11.1
        • pkg-config version 1.8.1

    [!] Android Studio (not installed)
        • Android Studio not found; download from https://developer.android.com/studio/index.html
          (or visit https://flutter.dev/to/linux-android-setup for detailed instructions).

    [✓] VS Code (version 1.96.2)
        • VS Code at /usr/share/code
        • Flutter extension version 3.102.0

    [✓] Connected device (1 available)
        • Linux (desktop) • linux • linux-x64 • Debian GNU/Linux 12 (bookworm) 6.6.54-05528-gdd4efe62d86b

    [✓] Network resources
        • All expected network resources are available.

    ! Doctor found issues in 3 categories.
    ```
    </details>
### 機能
  - flutter gpu
    - [Getting Started](https://medium.com/flutter/getting-started-with-flutter-gpu-f33d497b7c11)
    - flutter gpu(flutter_gpu_shaders)は、native-assetsを有効にする必要あり
      ```
      flutter config --enable-native-assets
      ```
      - サポートは、開発中のチャネル（masterチャネル）となるため、flutter SDKを切り替えることが必要
        ```
        flutter channel master
        ```
      - shaderを自動的にビルドするための設定（hook/build.dart）
        ```dart
        // Copy into: hook/build.dart
        import 'package:native_assets_cli/native_assets_cli.dart';
        import 'package:flutter_gpu_shaders/build.dart';

        void main(List<String> args) async {
          await build(args, (input, output) async {
            await buildShaderBundleJson(
                buildInput: input,
                buildOutput: output,
                manifestFileName: 'my_renderer.shaderbundle.json');
          });
        }
        ```
    - iOS 26 Beta 5
      ```
      flutter run -d 'iPhone 16 Pro'  --enable-impeller
      ```
      ![gpu on iOS 26 Beta 5](/images/flutter/20250811_gpu_iOS26_Beta5.png)
### 履歴
  - flutter 3.27.1
    - Android Studio Meerkat 2024.3.1 Canary 6
      - AndroidManifest.xml に下記追加
        ```xml
        <uses-permission android:name="android.permission.INTERNET"/>
        ```
    - Chrome OS Flex
      ```
      sudo apt install clang cmake ninja-build
      ```
    - iOS Simulator on macOS
      ![iOS Simulator](/images/flutter/20241229_iOS_Simulator.png)
  - flutter 3.24.3 / Android Studio Ladybug
    - Java 21
    - Gradle 8.10
    - Gradle Plugin も考慮する
      - [Android Application Gradle Plugin](https://mvnrepository.com/artifact/com.android.application)
  - Build エラーシューティング
    - flutter環境の確認
      ```
      flutter doctor -v
      ```
    - [JavaのバージョンとGradleのバージョンの対応確認](https://docs.gradle.org/current/userguide/compatibility.html#java)
  - [動かして学ぶ！Flutter開発入門](https://www.shoeisha.co.jp/book/detail/9784798177366)
    - [firebase](https://firebase.google.com)
      - firebase（Webサイト）でプロジェクトを作成する
      - コンソールでfirebaseを利用する設定を行う
        - firebase-toolsをインストールする
          ```
          npm install -g firebase-tools
          ```
        - firebaseにログインする
          ```
          firebase login
          ```
        - firebaseCLIをインストールする
          ```
          dart pub global activate flutterfire_cli
          ```
        - flutterアプリと紐づけるため、プロジェクトを作成する
          ```
          flutter create <Project Name>
          ```
        - flutterアプリと紐づける
          ```
          cd <ProjectDirectory>
          flutterfire configure --project={firebaseのプロジェクト名}
          ```
      - Functions（関数）・・・Blazeプランに変更しないと利用できない
        - デプロイされている関数を一覧で確認
          ![一覧](/images/flutter/20231202_firebase_functions.png)
        - Timerトリガの関数
          - Cloud Schedulerで実行周期を確認
            ![Cloud Scheduler](/images/flutter/20231202_firebase_timer_trigger_functions.png)
    - [flutter icon](https://icons8.jp/icons/set/flutter)
    - 64Kを超えるメソッドを使用する
      [Multidex Support](https://docs.flutter.dev/deployment/android#enabling-multidex-support)
  - カスタムフォントの利用
    [公式ドキュメント](https://docs.flutter.dev/cookbook/design/fonts)
    - Raleway and Roboto Mono(Google Fonts)
      ![Google Fonts](/images/flutter/Custom_Fonts_Google.png)
    - LINESeed JP
      ![LINESeed JP](/images/flutter/Custom_Fonts_LINE.png)
  - Android Studio Update
    - [Kotlin dist downloading failed](https://github.com/flutter/flutter/issues/126248)

##  アプリ作成
  1.  情報収集
      1.  株価取得
          -   [kabuステーションAPI](https://kabu.com/company/lp/lp90.html)
          -   [auカブコム証券のkabuステーションAPIを使ってみる](https://qiita.com/hmdsg/items/c6842fe87ec4e0365241)
      1.  Flutter
          -   [FlutterでAPIリクエストを行う（初心者向け）](https://qiita.com/kitanote/items/c4282b0112fa9d27dcd2)
