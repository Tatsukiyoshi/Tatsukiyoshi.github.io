---
title:  Update History of React Native
layout: single
sidebar:
  nav: main
---

- React Native 0.81.4 / Expo SDK 54.0.1
  - React 19.1.0
    ![React Native 0.81.4 iOS](/images/Mac/20250911_ReactNative_0.81.4.png)
- React Native 0.81.1 / Expo SDK 54.0.0-preview.16
  - [Mismatch between JavaScript code version and Worklets Babel plugin version](https://docs.swmansion.com/react-native-worklets/docs/guides/troubleshooting)
    ```
    expo start -c
    ```
  - React 19.1.0
    ![React Native 0.81.1 iOS](/images/Mac/20250909_ReactNative_0.81.1.png)
- React Native 0.81.1 / Expo SDK 54.0.0-preview.12
  - EXPO_ROUTER_APP_ROOTに関するエラー
    ```sh
    ERROR node_modules/expo-router/_ctx.ios.js: node_modules/expo-router/_ctx.ios.js:Invalid call at line 2: process.env.EXPO_ROUTER_APP_ROOT
    First argument of `require.context` should be a string denoting the directory to require.
    ```
    苦し紛れにbunで実行したら、解決
    ```
    bun --bun start
    ```
  - React 19.1.0
    ![React Native 0.81.1 iOS](/images/Mac/20250901_ReactNative_0.81.1.png)
- React Native 0.81.0 / Expo SDK 54.0.0-preview.8
  - React 19.1.0
    ![React Native 0.81.0 iOS](/images/Mac/20250826_ReactNative_0.81.0.png)
- React Native 0.81.0 / Expo SDK 54.0.0-preview.6
  - React 19.1.0
    ![React Native 0.81.0 iOS](/images/Mac/20250822_ReactNative_0.81.0.png)
- React Native 0.80.2
  - React 19.1.1
    ![React Native 0.80.2 Windows](/images/JavaScript/20250801_ReactNative_0.80.2.png)
  - React 19.1.0
    ![React Native 0.80.2 iOS](/images/Mac/20250726_ReactNative_0.80.2.png)
- React Native 0.80.0
  - React 19.1.0
    ![React Native 0.80.0 Windows](/images/JavaScript/20250613_ReactNative_0.80.0.png)
    ![React Native 0.80.0 iOS](/images/Mac/20250629_ReactNative_0.80.0.png)
- React Native 0.80.0-rc.2
  - React 19.1.0
    ![React Native 0.80.0-rc.2 iOS](/images/Mac/20250520_ReactNative_0.80.0-rc.2.png)
