# Dart & Flutter

##  独学書
  |テキスト                                                                             |日付      |進捗状況
  |------------------------------------------------------------------------------------|----------|---
  |[動かして学ぶ！Flutter開発入門](https://www.shoeisha.co.jp/book/detail/9784798177366) |2023/12/23|Chapter 4 Firebaseとの連携 <span style="color: red;">*finished*</span> ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/flutter/introduction)

##  コンテンツ
  |コンテンツ                                                                         |日付     |進捗状況
  |----------------------------------------------------------------------------------|---------|---
  |[Flutterで始めるモバイルアプリ開発](https://codezine.jp/article/corner/830)         |2024/05/19|第27回 FlutterのCanvasを使ってみよう！ 基本的な使い方から簡単なチャート作成まで解説<span style="color: red;">*finished*</span>

##  環境
  |端末       |環境／FW                                                                  |最終更新
  |-----------|-------------------------------------------------------------------------|----------
  |Mini-S12   |Flutter 3.22.3                                                           |[2024/07/19](https://docs.flutter.dev/get-started/install)
  |           |[Android Studio Koala 2024.1.1 Patch 1](./Kotlin.md#android-studio)      |[2024/07/19](https://developer.android.com/studio)
  |           |[Visual Studio Community 2022 17.10.4](./NET.md#visual-studio--プレビュー)|2024/07/13

##  ノウハウ
  - flutter dev
    -  [Get started](https://docs.flutter.dev/get-started/install)
    -  myapp - flutter demo
    -  Startup namer
  - flutter doctor -v
    <details>
    <summary>Mini-S12</summary>

    ```
    [✓] Flutter (Channel stable, 3.22.3, on Microsoft Windows [Version 10.0.22631.3880], locale ja-JP)
        • Flutter version 3.22.3 on channel stable at C:\Src\flutter
        • Upstream repository https://github.com/flutter/flutter.git
        • Framework revision b0850beeb2 (2 days ago), 2024-07-16 21:43:41 -0700
        • Engine revision 235db911ba
        • Dart version 3.4.4
        • DevTools version 2.34.3

    [✓] Windows Version (Installed version of Windows is version 10 or higher)

    [✓] Android toolchain - develop for Android devices (Android SDK version 35.0.0)
        • Android SDK at D:\.Android\SDK
        • Platform android-35, build-tools 35.0.0
        • ANDROID_HOME = D:\.Android\SDK
        • ANDROID_SDK_ROOT = D:\.Android\SDK
        • Java binary at: C:\Program Files\Android\Android Studio\jbr\bin\java
        • Java version OpenJDK Runtime Environment (build 17.0.11+0--11852314)
        • All Android licenses accepted.

    [✓] Chrome - develop for the web
        • Chrome at C:\Program Files\Google\Chrome\Application\chrome.exe

    [✓] Visual Studio - develop Windows apps (Visual Studio Community 2022 17.10.4)
        • Visual Studio at C:\Program Files\Microsoft Visual Studio\2022\Community
        • Visual Studio Community 2022 version 17.10.35027.167
        • Windows 10 SDK version 10.0.22621.0

    [✓] Android Studio (version 2024.1)
        • Android Studio at C:\Program Files\Android\Android Studio
        • Flutter plugin can be installed from:
          🔨 https://plugins.jetbrains.com/plugin/9212-flutter
        • Dart plugin can be installed from:
          🔨 https://plugins.jetbrains.com/plugin/6351-dart
        • Java version OpenJDK Runtime Environment (build 17.0.11+0--11852314)

    [✓] VS Code (version 1.91.1)
        • VS Code at C:\Users\taish\AppData\Local\Programs\Microsoft VS Code
        • Flutter extension version 3.92.0

    [✓] Connected device (3 available)
        • Windows (desktop) • windows • windows-x64    • Microsoft Windows [Version 10.0.22631.3880]
        • Chrome (web)      • chrome  • web-javascript • Google Chrome 126.0.6478.182
        • Edge (web)        • edge    • web-javascript • Microsoft Edge 126.0.2592.102

    [✓] Network resources
        • All expected network resources are available.
    ```
    </details>

  - flutterの更新
    ```
    flutter upgrade
    ```
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
          ![一覧](../images/flutter/20231202_firebase_functions.png)
        - Timerトリガの関数
          - Cloud Schedulerで実行周期を確認
            ![Cloud Scheduler](../images/flutter/20231202_firebase_timer_trigger_functions.png)
    - [flutter icon](https://icons8.jp/icons/set/flutter)
    - 64Kを超えるメソッドを使用する
      [Multidex Support](https://docs.flutter.dev/deployment/android#enabling-multidex-support)
  - カスタムフォントの利用
    [公式ドキュメント](https://docs.flutter.dev/cookbook/design/fonts)
    - Raleway and Roboto Mono(Google Fonts)
      ![Google Fonts](../images/flutter/Custom_Fonts_Google.png)
    - LINESeed JP
      ![LINESeed JP](../images/flutter/Custom_Fonts_LINE.png)
  - Android Studio Update
    - [Kotlin dist downloading failed](https://github.com/flutter/flutter/issues/126248)

##  アプリ作成
  1.  情報収集
      1.  株価取得
          -   [kabuステーションAPI](https://kabu.com/company/lp/lp90.html)
          -   [auカブコム証券のkabuステーションAPIを使ってみる](https://qiita.com/hmdsg/items/c6842fe87ec4e0365241)
      1.  Flutter
          -   [FlutterでAPIリクエストを行う（初心者向け）](https://qiita.com/kitanote/items/c4282b0112fa9d27dcd2)
