---
title: 2025年8月第3週
layout: single
classes: wide
sidebar:
  nav: digest
---
2025年8月第3週（2025/8/17～2025/8/23）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic
- Flutter GPU APIの検証が公開時の情報では、うまくいかないため、Julesとともに、最新情報を取り込んで検証
- ここでも、Gemini 2.5 Proベースのコーディングエージェントの有効性を実証

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください
---
# Daily
##  【8/17】
- **＜OS＞**  [Ubuntu 24.04.3にアップデート](https://www.releases.ubuntu.com/noble/)

- **＜Rust＞**  [Rust 1.89に更新](https://www.rust-lang.org/)@Ubuntu 24.04.3
  - 既存のTauri 2.7.0で動作検証

- **＜Flutter＞** [Flutter 3.35.1に更新](https://docs.flutter.dev/release/release-notes)@Windows
  - いくつかの写経コードを上記バージョンで動作検証

##  【8/18】
- **＜Kotlin＞**  [IntelliJ IDEA 2025.2.1 Previewに更新](https://www.jetbrains.com/ja-jp/idea/)

##  【8/19】
- **＜開発ツール＞**  [Xcode 26 Beta 6に更新](https://developer.apple.com/jp/xcode/)
  - SimulatorにiOS 26 Beta 6をダウンロード

- **＜Database＞**  [MongoDB 8.1.3に更新](https://www.mongodb.com/ja-jp)
  - Rust 1.89単体の検証に活用

- **＜Rust＞**  [Rust 1.89に更新](https://www.rust-lang.org/)@macOS & iOS 26 Beta 6 & Chrome OS Flex
  - [Tauri 2.8.1](https://tauri.app/)が公開されたため、最新版で動作検証

- **＜Flutter＞** [Flutter masterチャネルより、3.33.0-1.0.pre-1468に更新](https://docs.flutter.dev/release/release-notes)@macOS
  - 実験的に開発が進む、Flutter GPUをサポートするiOSで検証
  - 検証は、先週から活用している[Jules](https://jules.google.com/)とともに実施

##  【8/21】
- **＜OS＞**  [Chrome OS Flex 139.0.7258.137にアップデート](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)

##  【8/22】
- **＜OS＞**  [macOS Sequoia 15.6.1にアップデート](https://www.apple.com/jp/macos/macos-sequoia/)

- **＜開発ツール＞** [Visual Studio Code July 2025 Recovery 2(1.103.2)に更新](https://code.visualstudio.com/)

- **＜Rust＞**  [Tauri 2.8.2に更新](https://tauri.app/)
  - Rust 1.89との組み合わせですべての環境で動作検証

- **＜Kotlin＞** [Android Studio Narwhal 4 2025.1.4 Canary 2に更新](https://developer.android.com/studio)

- **＜TypeScript＞** [React Native 0.81.0](https://reactnative.dev/)をサポート予定の[Expo 54](https://github.com/expo/expo)の開発版で検証
  - [Expo SDK 54.0.0-preview.6](https://github.com/expo/expo)

##  【8/23】
- **＜OS＞**  [Windows 11 Insider Preview (Dev Channel) Build 26200.5761 が配信されたので、アップデート](https://aka.ms/DevLatest)

- **＜Database＞** [SQL Server Management Studio 21.4.12に更新](https://learn.microsoft.com/ja-jp/sql/ssms/ssms-21/release-notes-21?view=sql-server-ver16)

- **＜.NET＞** [Visual Studio Community 2022 17.14.13に更新](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes)

- **＜.NET＞**  [Visual Studio Community 2022 17.14.13 Preview 1.0に更新](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes-preview)
  - .NET MAUI 10 Preview 7 + Android 16 QPR2 Beta 1の組み合わせで動作検証

- **＜TypeScript＞**  [Angular 20.2.1に更新](https://angular.dev/)
  - 写経コードからサンプリングして動作検証実施

---
# 生成AIの活用
- 先週の試用結果を糧に再度試すも、改善見られず。いったん、活用を中断。
