---
title: 2025年8月第2週
layout: single
classes: wide
sidebar:
  nav: main
---
2025年8月第2週（2025/8/10～2025/8/16）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic
- 先週からトライしていた["Jules"(Geminiベースのコーディングエージェント)](https://jules.google.com/)を活用して、
以前放置していたAndroidアプリの改修を完遂
  - 期待した結果を得ようと思えば、新人エンジニアのように細かく指示を出さないとなりませんが、１週間ほどで解消
  - そんな中、新しい実装方法を提案してくれたので、今後も困ったら活用したい
  - 調査対象のブランチを指示すれば、そのブランチに対するサブブランチにコミットできるコードを提供してくれる

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください
---

##  【8/10】
- **＜開発ツール＞** [Xcodeを26 Beta 5に更新](https://developer.apple.com/jp/xcode/) 

##  【8/11】
- **＜Flutter＞** [Flutter を 3.33.0-1.0.pre-1343に更新](https://docs.flutter.dev/release/release-notes)＠macOS
  - iOSでflutter gpu APIを検証するため、ただいま検証中

##  【8/13】
- **＜.NET＞** [Visual Studio Community 2022 が 17.14.12に自動更新](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes) 

##  【8/14】
- **＜開発ツール＞** [Visual Studio CodeをJuly 2025 Recovery 1(1.103.1)に更新](https://code.visualstudio.com/)  

##  【8/15】
- **＜OS＞** [Chrome OS FlexをM-138系(138.0.7204.232)にアップデート](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)

- **＜Rust＞** [RustRoverを2025.2に更新](https://www.jetbrains.com/rust/) 

- **＜Database＞** [PostgreSQLを17.6に更新](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)＠Chrome OS Flex

##  【8/16】
- **＜OS＞**  [Windows 11 Insider Preview (Dev Channel) Build 26200.5751 が配信されたので、アップデート](https://aka.ms/DevLatest)
  - ファイル選択にて、AIアクションやMy Phoneへの送信が可能に！

- **＜.NET＞** [Visual Studio Community 2022 を 17.14.12 Preview 1.0に更新](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes-preview)  
  - [.NET 10.0.100-preview.7.25380.108](https://dotnet.microsoft.com/ja-jp/download/dotnet)  
  - [.NET MAUI 10.0.0-preview.7.25406.3](https://github.com/dotnet/maui)

- **＜Kotlin＞** [Android Studio Narwhal 4 を 2025.1.4 Canary 1に更新](https://developer.android.com/studio)  
  - Android Emulator v.36.2.4  
  - [利用する Kotlin コンパイラを 2.2.10に更新](https://kotlinlang.org/docs/home.html) 

- **＜TypeScript＞** [React Native 0.81に更新](https://reactnative.dev/) ＠Windows
  - [Bun 1.2.20](https://bun.sh/)  
  - 0.80.2同様の動作が確認できないので、継続調査とする

---
##  生成AIの活用
- 今回、このダイジェストを作成するために、`GitHub Copilot`経由で`GPT 4.1`に以下のプロンプトで指示
  - 2025/08/10～2025/08/16について、knowhow/ 配下の記載をもとに、OS, 開発ツール, .NET, Rust, Kotlin, Java, Flutter, TypeScript, Python, Database等、それぞれの作業内容を抽出して１日単位でまとめてください
  - OS等の更新、アップデートについては、Buildやバージョンを記載に含めてください
  - 記載フォーマットは、1st.mdを参考にしてください
  - 各作業項目の入力となるリンクを追加してください
  - markdownで貼り付けできるように出力してください

##  活用成果
- "OS"という指示だけだったためか、WindowsやChrome OS Flexのアップデート作業が抽出できず
- 一方、"開発ツール"という指示だけで、Visual Studio CodeやXCodeの更新作業を抽出するという一貫性のなさが判明
- 次回以降、プロンプトの内容を見直していくこととする
