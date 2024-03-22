# Dart & Flutter

##  独学書
  |テキスト                                                                             |日付      |進捗状況
  |------------------------------------------------------------------------------------|----------|---
  |[動かして学ぶ！Flutter開発入門](https://www.shoeisha.co.jp/book/detail/9784798177366) |2023/12/23|Chapter 4 Firebaseとの連携 <span style="color: red;">*finished*</span> ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/flutter/introduction)

##  コンテンツ
  |コンテンツ                                                                         |日付     |進捗状況
  |----------------------------------------------------------------------------------|---------|---
  |[Flutterで始めるモバイルアプリ開発](https://codezine.jp/article/corner/830)         |2022/10/23|第13回  Flutterではマテリアルデザインを用いたコンポーネントをどう使うのか【テキスト編】 <span style="color: red;">*finished*</span>

##  環境
  |端末       |環境／FW                                                                  |最終更新
  |-----------|-------------------------------------------------------------------------|----------
  |Mini-S12   |Flutter 3.19.4                                                           |[2024/03/22](https://docs.flutter.dev/get-started/install)
  |           |[Android Studio Iguana 2023.2.1 Patch 1](./Kotlin.md#android-studio)     |[2024/03/05](https://developer.android.com/studio)
  |           |[Visual Studio Community 2022 17.9.4](./NET.md#visual-studio--プレビュー) |2024/03/22

##  ノウハウ
  - flutter dev
    -  [Get started](https://docs.flutter.dev/get-started/install)
    -  myapp - flutter demo
    -  Startup namer
  - flutter doctor -v
    <details>
    <summary>Mini-S12</summary>

    ```
    [√] Flutter (Channel stable, 3.19.4, on Microsoft Windows [Version 10.0.22631.3296], locale ja-JP)
        • Flutter version 3.19.4 on channel stable at C:\Src\flutter
        • Upstream repository https://github.com/flutter/flutter.git
        • Framework revision 68bfaea224 (35 hours ago), 2024-03-20 15:36:31 -0700
        • Engine revision a5c24f538d
        • Dart version 3.3.2
        • DevTools version 2.31.1

    [√] Windows Version (Installed version of Windows is version 10 or higher)

    [√] Android toolchain - develop for Android devices (Android SDK version 34.0.0)
        • Android SDK at C:\Users\taish\AppData\Local\Android\Sdk
        • Platform android-UpsideDownCakePrivacySandbox, build-tools 34.0.0
        • ANDROID_HOME = C:\Users\taish\AppData\Local\Android\Sdk
        • ANDROID_SDK_ROOT = C:\Users\taish\AppData\Local\Android\Sdk
        • Java binary at: C:\Program Files\Android\Android Studio\jbr\bin\java
        • Java version OpenJDK Runtime Environment (build 17.0.9+0--11185874)
        • All Android licenses accepted.

    [√] Chrome - develop for the web
        • Chrome at C:\Program Files\Google\Chrome\Application\chrome.exe

    [√] Visual Studio - develop Windows apps (Visual Studio Community 2022 17.9.4)
        • Visual Studio at C:\Program Files\Microsoft Visual Studio\2022\Community
        • Visual Studio Community 2022 version 17.9.34714.143
        • Windows 10 SDK version 10.0.22621.0

    [√] Android Studio (version 2023.2)
        • Android Studio at C:\Program Files\Android\Android Studio
        • Flutter plugin can be installed from:
          https://plugins.jetbrains.com/plugin/9212-flutter
        • Dart plugin can be installed from:
          https://plugins.jetbrains.com/plugin/6351-dart
        • Java version OpenJDK Runtime Environment (build 17.0.9+0--11185874)

    [√] VS Code (version 1.87.2)
        • VS Code at C:\Users\taish\AppData\Local\Programs\Microsoft VS Code
        • Flutter extension version 3.84.0

    [√] Connected device (3 available)
        • Windows (desktop) • windows • windows-x64    • Microsoft Windows [Version 10.0.22631.3296]
        • Chrome (web)      • chrome  • web-javascript • Google Chrome 122.0.6261.129
        • Edge (web)        • edge    • web-javascript • Microsoft Edge 122.0.2365.92

    [√] Network resources
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
