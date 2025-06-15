# 2025年5月第2週（2025/5/11～2025/5/17）

2025年5月第2週（2025/5/11～2025/5/17）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic
先週とは打って変わって、堰を切ったように更新のオンパレード
そんな中、地味にコード修正や環境構築ノウハウ習得もあり、まぁまぁ充実な日々

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください
---
# 【5/11】
- **＜TypeScript＞** [ReactNative 0.80.0-rc.0に更新](https://reactnative.dev/)

# 【5/13】
- **＜OS＞**  [Windows 11 Insider Preview (Dev Channel) Build 26200.5600 が配信されたので、アップデート](https://aka.ms/DevLatest)

# 【5/14】
- **＜Database＞** [SQL Server Management Studio 21 Preview を 21.0.107 Preview 7.0に更新](https://learn.microsoft.com/ja-jp/sql/ssms/ssms-21/release-notes-21?view=sql-server-ver16)

- **＜.NET＞** [Visual Studio Community 2022 を 17.14 に更新](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes)
  - .NET 8.0.16 / .NET 9.0.5にそれぞれ更新

- **＜Rust＞** [RustRover 2025.1.2に更新](https://www.jetbrains.com/rust/)
  - **＜Database＞** [MongoDBを8.1.0に更新](https://www.mongodb.com/ja-jp)
    - 更新後、起動できず 調べた結果、格納形式が7.3と互換がなくなったためとのこと
    - Mongoshをインストールし、格納形式を8.0に変更することで起動できた

# 【5/16】
- **＜OS＞** [Mac OS Sequioa 15.5にアップデート](https://www.apple.com/jp/macos/macos-sequoia/)

- **＜開発ツール＞** [Visual Studio Code 1.100.2に更新](https://code.visualstudio.com/)

- **＜Kotlin＞** [IntelliJ IDEA 2025.1.1.1に更新](https://www.jetbrains.com/ja-jp/idea/)、および [Android Studio Narwhal 2025.1.1 Canary 10に更新](https://developer.android.com/studio)
  - どちらも、[Kotlinコンパイラを2.1.21に更新](https://kotlinlang.org/docs/home.html)
  - 検証中に写経したテストコードがなおざりになっていたのか、AssertFileが廃止されていたことに気づき、Jetbrains AIを活用して、修正を実施
    - その過程で、"Jetbrains AI"はまだまだいけてないことが発覚

# 【5/17】
- **＜OS＞** [Chrome OS Flex M-136（136.0.7103.102）にアップデート](https://chromereleases.googleblog.com/search/label/ChromeOS%20Flex)
  - M-135の最終版(135.0.7049.128)にアップデートした後に、M-136へのアップデート

- **＜Database＞** [PostgreSQLを17.5に更新](https://www.enterprisedb.com/downloads/postgres)
  - Kotlin＋Springとの組み合わせで検証

- **＜.NET＞** [Visual Studio Community 2022 を 17.14 Preview 7.0に更新](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes-preview)
  - 17.14公開後にインストーラで気づいたので、意味がないPreview版なのか？
  - .NET 10 Preview 4および .NET MAUI 10 Preview 4を検証
  - 相変わらず、動かない.NET MAUIのコード、いつFixされるのか？
