---
title: 2025年8月第4週
layout: single
classes: wide
sidebar:
  nav: main
---
2025年8月第4週（2025/8/24～2025/8/30）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic
- 今週のAI検証は、引き続き、Julesの活用
- Androidアプリの放置されていたバグの改修に効果が確認できていたので、Android 16対応の改修に適用
- 改修のIssueのラベルに"Jules"を設定すれば、作業依頼できることが判明

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください
---
# Daily
##  【8/24】
- **＜Database＞**  [MySQL Community Serverのコンテナを9.4.0に更新](https://dev.mysql.com/downloads/mysql/)
  - MySQLの動作検証に使用している[TypeORMを0.3.26に更新](https://typeorm.io/)し、動作検証

##  【8/26】
- **＜Flutter＞** master channel更新/Flutter gpu 再検証（[Flutter 3.36.0-1.0.pre-263](https://docs.flutter.dev/release/release-notes)）

- **＜TypeScript＞**  [Expo SDKを54.0.0-preview.8に更新](https://github.com/expo/expo)/React Native 0.81.0の動作確認実施

##  【8/30】
- **＜OS＞**  [Windows 11 Insider Preview (Dev Channel) Build 26200.5770 が配信されたので、アップデート](https://aka.ms/DevLatest)

- **＜Container＞** [Rancher Desktopを1.20.0に更新](https://rancherdesktop.io/)

- **＜Kotlin＞**  [Android StudioをNarwhal 4 2025.1.4 Canary 3に更新](https://developer.android.com/studio)
  - GradleファイルでのKotlinプラグインの記述が不要になったらしく、従来記述は削除することに、しかし、関連するコンポーネントがKotlin
  の記述がないとエラーになってしまう、実装不備が発覚！Canary版は次回更新まで様子見

- **＜TypeScript＞**  Angularの次期バージョンの先行リリースである[Angular 21.0.0-next.1に更新](https://angular.dev/)

- **＜TypeScript＞**  [Astroを5.13.5に更新](https://astro.build/)

- **＜TypeScript＞**  [Next.jsを15.5.2に更新](https://nextjs.org/)

- **＜TypeScript＞**  [Lynxを3.4.0に更新](https://lynxjs.org)
  - 検証アプリの画面にバージョンを出力できるように改修
