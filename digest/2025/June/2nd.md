---
title: 2025年6月第2週（2025/6/8～2025/6/14）
layout: single
classes: wide
sidebar:
  nav: main
---
2025年6月第2週（2025/6/8～2025/6/14）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic
- 以前から Preview版で検証していた MAUIのAndroid 16対応

  無事Android 16がリリースされたこともあり、動作確認完了

- 一方、RC版で検証し、手こずっていたReact Native関連

  React Native Windowsは、0.79.0での動作確認完了

  React Nativeは、iOSでの動作が確認できず、継続調査を予定

- 以前、React用に全角入力できる数値入力フィールドをコンポーネント化したので、他のフレームワークとの差異を習得する一環として、展開を推進中
  
  生成AIの精度の理解し、今後のペアプログラミングに生かす目的で、「React対応でGeminiとともに作成した資料」をもとに、Geminiから「修正案」を提示させ、さらにまとめた資料を「レビュー」させる流れで進める

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください
---
# 【6/8】
- **＜コンテナ＞** [Rancher Desktopを1.19.1に更新](https://rancherdesktop.io/)

- **＜Kotlin＞** [Android Studio を Narwhal 2025.1.2 Canary 4に更新](https://developer.android.com/studio)

- **＜TypeScript＞** [Angular を 20.0.2に更新](https://angular.dev/)
  - Angular 20に更新中の最中、リビジョンアップされたので、ターゲットを変更

# 【6/11】
- **＜OS＞**  [Windows 11 Insider Preview (Dev Channel) Build 26200.5641 が配信されたので、アップデート](https://aka.ms/DevLatest)

- **＜.NET＞** [Visual Studio Community 2022 を 17.14.5 Preview 1.0 に更新](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes-preview)
  - 同時に、.NET 9.0.6 / .NET 8.0.17にそれぞれ更新
  - [.NET 10.0.0-preview.5.25277.114 へも更新](https://dotnet.microsoft.com/ja-jp/download/dotnet)
  - Android 16に対応した [MAUI 10.0.0-preview.5も導入](https://github.com/dotnet/maui)、Android 16のEmulatorで対応を確認

- **＜Kotlin＞** [Android Emulator を v.36.1.4に更新](https://developer.android.com/studio)

# 【6/12】
- **＜Kotlin＞** [IntelliJ IDEA 2025.2 を EAP 4に更新](https://www.jetbrains.com/ja-jp/idea/)

# 【6/13】
- **＜TypeScript＞** [React Native Windows を0.79.0に更新](https://microsoft.github.io/react-native-windows/)
  - React 19.0.0 / React Native 0.79.3との組み合わせで、Windowsでの動作を確認

- **＜TypeScript＞** [React Native を0.80.0に更新](https://reactnative.dev/)
  - WindowsのEdgeで確認できたものの、iOSでの動作確認できず
