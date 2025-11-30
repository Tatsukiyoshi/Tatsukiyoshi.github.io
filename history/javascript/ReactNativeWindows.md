---
title:  Update History of React Native Windows
layout: single
classes: wide
sidebar:
  nav: main
---
- React Native Windows 0.80.0
  - React Native 0.80.0
  - React 19.1.1
    ![React Native Windows 0.80.0](/images/JavaScript/20251123_ReactNativeWindows0.80.0.png)
  - 下記をVS2026 Developer PowerShellで実行
    - React Nativeでプロジェクト再作成
    - React Nativeのバージョンを最新からダウングレード（0.82.1→0.80.0）
    - VS2026に合わせて、最新のWindows SDKをターゲットに変更
    - ログ出力モードで実行(--logging指定：無しだと開発モードでのデプロイに失敗する)
      ```
      Failed to deploy: Enabling Developer Mode
      ```
- React Native Windows 0.80.0
  - React Native 0.80.2
  - React 19.1.0
    ![React Native Windows 0.80.0](/images/JavaScript/20251031_ReactNativeWindows0.80.0.png)
  - 発生しているエラーは、依存パッケージを再インストールすることで解消
- React Native Windows 0.80.0-preview.10
  - React Native 0.80.2
  - React 19.1.0
    ![React Native Windows 0.80.0-preview.10](/images/JavaScript/20251028_ReactNativeWindows0.80.0-preview.10.png)
- React Native Windows 0.80.0-preview.9
  - React Native 0.80.2
  - React 19.1.0
    ![React Native Windows 0.80.0-preview.9](/images/JavaScript/20251025_ReactNativeWindows0.80.0-preview.9.png)
- React Native Windows 0.80.0-preview.8
  - React Native 0.80.2
  - React 19.1.0
    ![React Native Windows 0.80.0-preview.8](/images/JavaScript/20251007_ReactNativeWindows0.80.0-preview.8.png)
- React Native Windows 0.80.0-preview.7
  - React Native 0.80.2
  - React 19.1.0
    ![React Native Windows 0.80.0-preview.7](/images/JavaScript/20250930_ReactNativeWindows0.80.0-preview.7.png)
- React Native Windows 0.80.0-preview.6
  - React Native 0.80.0
  - React 19.1.0
    ![React Native Windows 0.80.0-preview.6](/images/JavaScript/20250909_ReactNativeWindows0.80.0-preview.6.png)
  - Migrate to the New Architecture
    ```
    npx react-native init-windows --template cpp-app --overwrite
    ```
    ![React Native Windows 0.80.0-preview.6 with New Architecture](/images/JavaScript/20250909_ReactNativeWindows0.80.0-preview.6_NewArchitecture.png)
  - with Visual Studio 2026 Insiders
    1.  Use Visual Studio
        - Visual Studio 2026 Insiderでソリューションを開き、ターミナルで以下を実行
          ```
          yarn start
          ```
        - その後、ソリューションを実行すれば、アプリが実行できる
          ![React Native Windows 0.80.0-preview.6 with VS2026](/images/JavaScript/20250914_ReactNativeWindows0.80.0-preview.6_VS2026.png)
    1.  Use x64 Native Tools Command Prompt
        - x64 Native Tools Command Promptを起動し、プロジェクトのディレクトリに移動
        - 下記コマンドで実行
          ```
          npx @react-native-community/cli run-windows
          ```
          ![React Native Windows 0.80.0-preview.6 with x64 Native Tools Command Prompt](/images/JavaScript/20250914_ReactNativeWindows0.80.0-preview.6_VSx64NativePrompt.png)
- React Native Windows 0.79.0
  - React Native 0.79.3
  - React 19.0.0
    ![WindowsSample](/images/JavaScript/20250613_ReactNativeWindows0.79.0.png)
