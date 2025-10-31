---
title:  Kotlin
layout: single
sidebar:
  nav: main
---
##  独学書

  |Text                                                      |Date      |Status
  |----------------------------------------------------------|----------|---
  |Spring解体新書（バッチ編）                                   |2022/08/08|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/kotlin/spring)
  |Kotlinプログラミング                                        |2019/11/13|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/kotlin/programming)
  |[はじめてのAndroidプログラミング](http://isbn.sbcr.jp/95815) |2019/10/12|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/kotlin/Android)

##  環境

  1. Windows 11

      |Machine         |Env / FW                                                      |Last Updated
      |----------------|--------------------------------------------------------------|----------
      |Windows Insider |[IntelliJ IDEA 2025.3 EAP 7](#intellij-idea)                  |[2025/10/23](https://www.jetbrains.com/ja-jp/idea/)
      |                |- Kotlin 2.2.20                                               |[2025/09/13](https://kotlinlang.org/docs/home.html)
      |                |- PostgreSQL JDBC Driver 42.7.5                               |[2025/03/08](https://mvnrepository.com/artifact/org.postgresql/postgresql)
      |                |- Microsoft Build of Open JDK 21.0.8+9                        |[2025/09/27](https://learn.microsoft.com/ja-jp/java/openjdk/download)
      |                |[Android Studio Otter 2025.2.2 Canary 3](#AndroidStudio)      |[2025/10/31](https://developer.android.com/studio)
      |                |- Kotlin 2.2.20                                               |[2025/09/13](https://kotlinlang.org/docs/home.html)
      |                |- Android SDK Command-line Tools v.19                         |2025/03/14
      |                |- Android Emulator v.36.3.6                                   |2025/10/31

  1. macOS Sequoia 15.6.1

      |Machine         |Env / FW                                                      |Last Updated
      |----------------|--------------------------------------------------------------|----------
      |macOS           |Android Studio Narwhal 4 2025.1.4                             |[2025/10/18](https://developer.android.com/studio)

##  ノウハウ
### IntelliJ IDEA
- Latest Version
  - IntelliJ IDEA 2025.3 EAP
    ```
    Build #IU-253.27864.23, built on October 22, 2025
    Source revision: 1c9706c7059f6
    ライセンス対象: IntelliJ IDEA EAP user: Shinya Watanabe
    有効期限: November 21, 2025
    Runtime version: 21.0.8+9-b1163.62 amd64 (JCEF 137.0.17)
    VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
    Toolkit: sun.awt.windows.WToolkit
    Windows 11.0
    GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
    Memory: 2048M
    Cores: 8
    Registry:
      ide.experimental.ui=true
    Non-Bundled Plugins:
      com.intellij.notebooks.core (253.27864.35)
      com.intellij.debugger.collections.visualizer (253.27864.35)
      JavaScript (253.27864.23)
      com.intellij.java (253.27864.23)
      org.jetbrains.completion.full.line (253.27864.23)
      training (253.27864.35)
      JavaScriptDebugger (253.27864.35)
      intellij.webp (253.27864.23)
      idea.plugin.protoeditor (253.27864.35)
      Subversion (253.27864.37)
      HtmlTools (253.27864.35)
      com.intellij.copyright (253.27864.35)
      org.editorconfig.editorconfigjetbrains (253.27864.35)
      org.jetbrains.plugins.yaml (253.27864.35)
      com.jetbrains.sh (253.27864.35)
      org.toml.lang (253.27864.35)
      com.intellij.kubernetes (253.27864.35)
      com.intellij.jsonpath (253.27864.23)
      org.jetbrains.plugins.javaFX (253.27864.35)
      com.jetbrains.plugins.webDeployment (253.27864.35)
      com.intellij.cron (253.27864.35)
      com.intellij.javaee (253.27864.35)
      Refactor-X (253.27864.35)
      com.intellij.spring (253.27864.37)
      org.jetbrains.plugins.terminal (253.27864.35)
      com.intellij.LineProfiler (253.27864.23)
      com.intellij.properties (253.27864.35)
      com.intellij.freemarker (253.27864.23)
      com.intellij.velocity (253.27864.35)
      com.intellij.spring.boot.initializr (253.27864.23)
      com.intellij.java-i18n (253.27864.23)
      com.intellij.cdi (253.27864.23)
      com.intellij.thymeleaf (253.27864.23)
      com.intellij.javaee.extensions (253.27864.23)
      com.intellij.javaee.el (253.27864.23)
      com.intellij.spring.security (253.27864.23)
      com.intellij.spring.boot (253.27864.23)
      com.intellij.spring.messaging (253.27864.23)
      com.intellij.liquibase (253.27864.23)
      com.intellij.flyway (253.27864.23)
      org.jetbrains.kotlin (253.27864.23-IJ)
      intellij.ktor (253.27864.23)
      com.intellij.spring.batch (253.27864.23)
      com.intellij.spring.cloud (253.27864.23)
      com.intellij.spring.integration (253.27864.23)
      com.intellij.swagger (253.27864.35)
      com.jetbrains.restWebServices (253.27864.23)
      com.jetbrains.restClient (253.27864.35)
      JBoss (253.27864.23)
      Tomcat (253.27864.23)
      XPathView (253.27864.23)
      com.intellij.tasks (253.27864.35)
      com.intellij.tasks.timeTracking (253.27864.35)
      com.intellij.javaee.jpa (253.27864.23)
      com.intellij.javaee.jakarta.data (253.27864.23)
      com.intellij.spring.data (253.27864.23)
      com.intellij.javaee.reverseEngineering (253.27864.23)
      com.intellij.micronaut (253.27864.23)
      com.intellij.hibernate (253.27864.23)
      com.intellij.quarkus (253.27864.23)
      intellij.jupyter (253.27864.35)
      org.jetbrains.plugins.kotlin.jupyter (253.27864.23)
      Docker (253.27864.35)
      tanvd.grazi (253.27864.23)
      org.jetbrains.plugins.gitlab (253.27864.35)
      com.intellij.settingsSync (253.27864.23)
      org.jetbrains.plugins.github (253.27864.35)
      org.jetbrains.plugins.remote-run (253.27864.35)
      org.jetbrains.idea.maven (253.27864.23)
      org.jetbrains.plugins.gradle (253.27864.23)
      com.intellij.reactivestreams (253.27864.23)
      Dart (253.27864.23)
      com.intellij.react (253.27864.23)
      intellij.vitejs (253.27864.37)
      NodeJS (253.27864.35)
      org.jetbrains.plugins.vue (253.27864.35)
      tslint (253.27864.37)
      org.jetbrains.plugins.node-remote-interpreter (253.27864.37)
      com.deadlock.scsyntax (253.27864.37)
      com.intellij.plugins.webcomponents (253.27864.37)
      intellij.prettierJS (253.27864.35)
      org.jetbrains.android (253.27864.23)
      intellij.nextjs (253.27864.37)
      Karma (253.27864.35)
      io.flutter (88.0.0)
      PerforceDirectPlugin (253.27864.35)
      org.jetbrains.security.package-checker (253.27864.35)
      com.intellij.beanValidation (253.27864.23)
      org.jetbrains.plugins.docker.gateway (253.27864.35)
      com.intellij.spring.mvc (253.27864.23)
      com.intellij.microservices.ui (253.27864.35)
    Kotlin: 253.27864.23-IJ
    ```
- History
  - IntelliJ IDEA 2024.3.4.1
    - Update PostgreSQL JDBC Driver
      ```kts
      dependencies {
        ...
        runtimeOnly("org.postgresql:postgresql:42.7.5")
        ...
      }
      ```
  - IntelliJ IDEA 2024.3.2.2
    - Mockito as agent over jdk 21
      - [Support configuring Mockito java agent in java 21+](https://github.com/spring-io/initializr/issues/1590)
        ```kts
        var mockitoAgent = configurations.create("mockitoAgent")

        dependencies {
          ...
          testImplementation("org.mockito.kotlin:mockito-kotlin:5.4.0")
          mockitoAgent("org.mockito:mockito-core") { isTransitive = false }
        }

        tasks {
          test {
            jvmArgs("-javaagent:${mockitoAgent.asPath}")
          }
        }
        ```
  - IntelliJ IDEA 2024.3
    - Kotlin 2.1.0
      ```kts
      plugins {
        ...
        kotlin("jvm") version "2.1.0"
        ...
      }
      ```
  - IntelliJ IDEA 2024.2.3
    - Kotlin 2.0.20
      - kotlinOptions Deprecated - https://kotlinlang.org/docs/gradle-compiler-options.html#target-the-jvm
        ```kts
        tasks.named("compileKotlin", org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask::class.java) {
          compilerOptions {
            freeCompilerArgs.add("-Xjsr305=strict")
            apiVersion.set(org.jetbrains.kotlin.gradle.dsl.KotlinVersion.KOTLIN_2_0)
          }
        }
        ```
  - IntelliJ IDEA 2024.2.0.2
    - PostgreSQL 16.4
    - Gradle 8.8
  - Kotlin 2.0.0
    - Compose Multiplatform
      ![Compose for Desktop](/images/Kotlin/20240529_Kotlin_Compose_Desktop.png)
  - Intellij IDEA 2024.1.1
    - Kotlin 1.9.24
  - Intellij IDEA 2023.3.6
    - Kotlin 1.9.23
      ```
      plugins {
        ...
        kotlin("jvm") version "1.9.23"
        ...
      }
      ```
  - Intellij IDEA 2023.3.4
    - Kotlin 1.9.22
      ![Kotlinコンパイラ](/images/Kotlin/20240223_IntelliJ_IDEA_2023.3.4_KotlinSetting.png)
      ![デバッグ](/images/Kotlin/20240223_IntelliJ_IDEA_2023.3.4_KotlinDebug.png)
      - kotlinc.xml
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <project version="4">
          <component name="Kotlin2JvmCompilerArguments">
            <option name="jvmTarget" value="21" />
          </component>
          <component name="KotlinJpsPluginSettings">
            <option name="version" value="1.9.22-release-704" />
          </component>
        </project>
        ```
  - [履歴](/history/IntelliJIDEA)

###	Visual Studio Code
  - 環境は、Android Studioをインストールし、同時にインストールしたkotlinを利用する
    1. PATH環境変数にJDKおよびkotlinのパスを設定する
        - E200HA
          - F:\ProgramData\jdk-12.0.1\bin
          - F:\Program Files\Android\Android Studio\plugins\Kotlin\kotlinc\bin
        - E230MA
          - C:\Users\taish\AppData\Local\Programs\AdoptOpenJDK\bin
          - C:\Program Files\Android\Android Studio\plugins\Kotlin\kotlinc\bin
    1. VSCodeにcode-runnerをインストールし、code-runnerにkotlinの呼び出しを記述する
        ```
        "kotlin": "cd $dir && kotlinc-jvm.bat $fileName -include-runtime -d $fileNameWithoutExt.jar && java -jar $fileNameWithoutExt.jar"
        ```

### Spring Boot
  - [Spring Boot 3.5.0](https://spring.io/projects/spring-boot)/Spring Batch 5.2.2/Spring Framework 6.2.7 <span style="color: red;">*2025/05/27 updated from 3.4.0*</span>
    - IntelliJ IDEA 2025.2 EAP Build 2
    - [Kotlin 2.1.21](https://kotlinlang.org/docs/home.html)
    - Spring Framework
    - [PostgreSQL 17.5](Database#postgresql)
    - [Gradle 8.8](https://gradle.org/releases/)
    - Amazon Coretto 22.0.1 + 言語レベル 21 / Graal VM Java17-22.2.0
    - [Spring解体新書（バッチ編）](https://www.amazon.co.jp/gp/product/B09D3ZTJTB/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1)
  - History
    - Spring Boot 3.4.0 <span style="color: red;">*2024/12/14 updated from 3.3.4*</span>
      - [Deprecated AssertFile](https://zenn.dev/tatsukiyoshi/articles/040c31b4d1b439) <BR />
        **他の検証同様、AssertJを使用するように修正**
        - 修正前
          ```
          AssertFile.assertFileEquals(
            FileSystemResource(_expectedFilePath),
            FileSystemResource(property.outputPath()))
          ```
        - 修正後
          ```
          val actualContent = Files.readAllBytes(File(property.outputPath()).toPath())
          val expectedContent = Files.readAllBytes(File(_expectedFilePath).toPath())
          assertThat(actualContent).isEqualTo(expectedContent)
          ```
    - Spring Boot 3.2.0/Spring Batch 5.1/Spring Framework 6.1
      - [Spring Boot 3.0 Migration Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide)
      - [Spring Batch 5.0 migration guide](https://github.com/spring-projects/spring-batch/wiki/Spring-Batch-5.0-Migration-Guide)
      - [MyBatis](http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)
    - throttleLimitの非推奨
      - TaskExecutor::setThrottleLimit -> TaskExecutor::setConcurrencyLimit
        - 修正前
          ```java
          @Bean
          fun asyncTaskExecutor(): TaskExecutor {
            return SimpleAsyncTaskExecutor("parallel_")
          }

          StepBuilder(...)
            .taskExecutor(asyncTaskExecutor())      // executor
            .throttleLimit(3)                       // 同時実行数
            ...
          ```
        - 修正後
          ```java
          @Bean
          fun asyncTaskExecutor(): TaskExecutor {
            val executor = SimpleAsyncTaskExecutor("parallel_")
            executor.concurrencyLimit = 3
            return executor
          }

          StepBuilder(...)
            .taskExecutor(asyncTaskExecutor())      // executor
            ...
          ```
    - Kotlin 2.2.0
      - AnnotationのターゲットをParameterに限定する
        - 修正前
          ```java
          @Value("\${retry.num}")
          ```
        - 修正後
          ```java
          @param:Value($$"${retry.num}")
          ```

### Kotlinプログラミング
  - Android
    - Chapter 22 coroutines
    - Chapter 21 [New Character UI](https://www.bignerdranch.com/assets/solutions/activity_new_character.xml)
  - [mavenでマニフェストを作成する方法](https://www.codeflow.site/ja/article/maven__how-to-create-a-manifest-file-with-maven)
  - Hint of Challenges
    - [Tavern Challenge 19](https://forums.bignerdranch.com/t/tavern-challenge/15141/2)
    - [Challenge: Tavern.kt Part 2](https://forums.bignerdranch.com/t/challenge-tavern-kt-part-2/16695)
  - [Lombokを利用する方法](https://stackoverflow.com/questions/60419699)
    ```
    companion object {
        private val log: Logger = LoggerFactory.getLogger(this::class.java)
    }
    ```
  - [Spring Batch+Kotlinの事例](https://nulab.com/ja/blog/nulab/spring-boot-batch/)

### Kotlin Multiplatform Mobile
  - [Kotlin マルチプラットフォームを使ってみる](https://developer.android.com/codelabs/kmp-get-started?hl=ja#0)
    - Android StudioからXCodeでプロジェクトを開く
      ![Open in XCode](/images/Kotlin/20250831_KMP_XCode26.png)
    - XCodeから実行する
      ![Run KMP](/images/Kotlin/20250831_KMP_iPhone16Pro_iOS26.png)

### Gemini
  - Gemini 2.5
    ![Gemini 2.5 Pro](/images/Android/20250628_Gemini_2.5_Pro.png)
  - Gemini 2.0
    ![Vertex AI Studio](/images/Android//20250419_Vertex_AI_Prompt.png)
  - Gemini 1.5
    - 実行時に制限抵触に関する警告メッセージが出て、結果を取得できない
      ![Gemini Warning](/images/Android/20240528_Gemini1.5_Warning.png)
  - Gemini 1.0 Pro
    ![Gemini API Starter](/images/Android/20240410_New_Project_Gemini_API_Starter.png)
    ![Create API Key](/images/Android/20240410_API_Key_Gemini_API_Starter.png)
    ![Pixel 8 Emulator](/images/Android/20240410_Pixel8_Emulator_Gemini_API_Starter.png)

### Android / Android Studio <a id="AndroidStudio"></a>
  - Windows
    - Android Studio Otter 2 Feature Drop | 2025.2.2 Canary 3
      ```
      Build #AI-252.25557.131.2522.14357309, built on October 30, 2025
      Runtime version: 21.0.8+-14196175-b1038.72 amd64
      VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
      Toolkit: sun.awt.windows.WToolkit
      Windows 11.0
      GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
      Memory: 2048M
      Cores: 8
      Registry:
        ide.experimental.ui=true
        com.android.studio.ml.activeModel=com.android.studio.ml.AidaModel
        gradle.phased.sync.enabled=true
      Non-Bundled Plugins:
        Dart (252.25557.23)
        io.flutter (88.0.0)
      ```
  - macOS
    - Android Studio Narwhal 3 Feature Drop | 2025.1.3
      ```
      Build #AI-251.26094.121.2513.14007798, built on August 28, 2025
      Runtime version: 21.0.7+-13880790-b1038.58 aarch64
      VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
      Toolkit: sun.lwawt.macosx.LWCToolkit
      macOS 15.6.1
      Kotlin plugin: K2 mode
      GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
      Memory: 2048M
      Cores: 8
      Metal Rendering is ON
      Registry:
        ide.experimental.ui=true
      ```
      ![Android Studio Narwhal 2025.1.2](/images/Kotlin/20250831_AndroidStudio2025.1.2.png)
  - 共通
    - HyperVisor利用には、機能の有効化が必要
      ![HyperVisor](/images/Android/20250525_Windows_HyperVisor.png)
    - [開発者向けオプション](https://developer.android.com/studio/debug/dev-options?hl=ja)
    - Android Studioの日本語化
      - [JetBrains公式サイト](https://plugins.jetbrains.com/plugin/13964-japanese-language-pack------/versions)からダウンロードする。
    - [Android VersionとAPIの対応](https://developer.android.com/guide/topics/manifest/uses-sdk-element#api-level-table)
    - Gradle設定
      - Gradleに関する設定は、環境変数GRADLE_USER_HOMEで設定したディレクトリを参照するため、変更したい場合、格納先のディレクトリを設定する
    - Android SDK設定
      ![SDK設定](/images/Android/SDK_Setting.png)
    - エミュレータのイメージ退避
      1.  エミュレータのイメージは、ユーザの.androidディレクトリに格納されるため、移動する
      1.  以下のように、イメージの管理ファイル(.ini)にある格納先を変更する
          ```
          path=F:\Program\.android\avd\Nexus_5X_API_28.avd
          ```
    - Kotlin 2.2.0
      - AnnotationのターゲットをParameterに限定する
        - 修正前
          ```java
          @Value("\${retry.num}")
          ```
        - 修正後
          ```java
          @param:Value($$"${retry.num}")
          ```
    - Junit 5
      - [AndroidStudioでJUnit5のテスト(ParameterizedTest)を実行する](https://tiratom.hatenablog.com/entry/2024/01/13/145809)
        - build.gradle(app)
          ```
          testImplementation 'org.junit.jupiter:junit-jupiter-api:5.10.2'
          testImplementation 'org.testng:testng:7.10.2'
          testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.10.2'
          testImplementation 'org.junit.jupiter:junit-jupiter-params:5.10.2'
          ```
  - Android
    - Android Canary
      - API 36 Canary
        ![API Canary Preview](/images/Android/20250808_AndroidAPICanaryPreview.png)
    - Android 16 (API 36.1)
      ![MyApplication](/images/Android/20250928_MyApplication_API36.1.png)
    - Android 16 QPR2 Beta 1(Android Baklava Preview)
      - Android Studio Narwhal Feature Drop 2025.1.4 Canary 2
        ![MyApplication](/images/Android/20250822_MyApplication_BaklavaPreview.png)
        - [EdgeToEdge](/knowhow/sub/Kotlin/EdgeToEdge)
          ![MyScheduler](/images/Android/20250827_MyScheduler_BaklavaPreview.png)
    - Android 15 (API 35)
      - Android Studio Koala / Android SDK 35等を配置し、実行確認
        ![MyApplication](/images/Android/20240724_MyApplication_API35.png)
      - レイアウトが崩れる事象
        - [Behavior changes: Apps targeting Android 15 or higher](https://developer.android.com/about/versions/15/behavior-changes-15) を参照のうえ、見直す
  - 対応履歴
    - Otter
      - Feature Drop 2025.2.2
        - Canary 3
          - Android Gradle Plugin 9.0.0-alpha11 -> 9.0.0-alpha13
          - Android Emulator 36.3.6
        - Canary 1
          - Android Gradle Plugin 9.0.0-alpha10 -> 9.0.0-alpha11
          - Android Emulator 36.3.4
      - 2025.2.1
        - Canary 5
          - Android Gradle Plugin 9.0.0-alpha09 -> 9.0.0-alpha10
        - Canary 4
          - Android Gradle Plugin 9.0.0-alpha08 -> 9.0.0-alpha09
          - Android Emulator 36.3.2
        - Canary 3
          - Android Gradle Plugin 9.0.0-alpha06 -> 9.0.0-alpha08
        - Canary 1
          - Android Gradle Plugin 9.0.0-alpha05 -> 9.0.0-alpha06
          - Android Emulator 36.3.1
    - Narwhal
      - Feature Drop 2025.1.4
        - Canary 5
          - Android Gradle Plugin 9.0.0-alpha04 -> 9.0.0-alpha05
          - Android Emulator 36.2.8
          - [Kotlin Plugin Issue](https://issuetracker.google.com/issues/438678642)            
        - Canary 4
          - Android Gradle Plugin 9.0.0-alpha03 -> 9.0.0-alpha04
          - Android Emulator 36.2.7
        - Canary 3
          - Android Gradle Plugin 9.0.0-alpha02 -> 9.0.0-alpha03
          - Kotlin Pluginの記述が不要になった模様（MySchedulerがビルドできないので、以後変更される可能性あり）
            ```js
            plugins {
              id 'com.android.application'
              // id 'kotlin-android'
            }
            ```
        - Canary 2
          - Android Emulator 36.2.5
          - Android Gradle Plugin 9.0.0-alpha01 -> 9.0.0-alpha02
        - Canary 1
          - Kotlin 2.2.0 -> 2.2.10
          - Android Emulator 36.2.4
          - Gradle 8.13 -> 9.0
          - Android Gradle Plugin 8.13.0-alpha04 -> 9.0.0-alpha01
      - Feature Drop 2025.1.3
        - Android Gradle Plugin 8.12.2 -> 8.13.0
        - Canary 4
          - Android Gradle Plugin 8.13.0-alpha03 -> 8.13.0-alpha04
        - Canary 3
          - Android Gradle Plugin 8.13.0-alpha02 -> 8.13.0-alpha03
          - Android Emulator 36.2.2 / 36.2.3
        - Canary 2
          - Android Gradle Plugin 8.12.0-alpha09 -> 8.13.0-alpha02
          - Android Emulator 36.2.1
      - Feature Drop 2025.1.2 
        - Canary 9
          - Android Gradle Plugin 8.12.0-alpha08 -> 8.12.0-alpha09
        - Canary 8
          - Android Gradle Plugin 8.12.0-alpha07 -> 8.12.0-alpha08
        - Canary 7
          - Android Gradle Plugin 8.12.0-alpha06 -> 8.12.0-alpha07
        - Canary 6
          - [Firebase AI Logic への再構成](https://firebase.google.com/docs/ai-logic?hl=ja)
          - Android Gradle Plugin 8.12.0-alpha04 -> 8.12.0-alpha06
        - Canary 4
          - Android Gradle Plugin 8.12.0-alpha03 -> 8.12.0-alpha04
        - Canary 3
          - Android Gradle Plugin 8.12.0-alpha02 -> 8.12.0-alpha03
        - Canary 2
          - Android Gradle Plugin 8.11.0-alpha10 -> 8.12.0-alpha02
          - Android Emulator 36.1.1
          - Android Emulator HyperVisor Driver 2.2.0
      - 2025.1.1
        - Canary 10
          - Android Gradle Plugin 8.11.0-alpha09 -> 8.11.0-alpha10
        - Canary 9
          - Android Gradle Plugin 8.11.0-alpha08 -> 8.11.0-alpha09
        - Canary 8
          - Android Gradle Plugin 8.11.0-alpha07 -> 8.11.0-alpha08
        - Canary 7
          ![Upgrade_Suggested](/images/Android/20250418_AndroidStudio_UpgradeSuggested.png)
          - Gradle 8.11.1 -> 8.13
          - Android Gradle Plugin 8.10.0-rc02 -> 8.11.0-alpha07
    - Meerkat
      - Meerkat Feature Drop RC 2
        - Android Gradle Plugin 8.10.0-rc01 -> 8.10.0-rc02
      - Meerkat Feature Drop RC 1
        - Android Gradle Plugin 8.9.0 -> 8.9.1 -> 8.10.0-rc01
        - Upgrade Suggested
          Beta 1からRC 1に更新したにもかかわらず、Beta 1へのアップグレードを提案される！
          ![Upgrade Suggested](/images/Android/20250404_AndroidStudio_UpgradeSuggested.png)
      - Meerkat Feature Drop Canary 8
        - Android Gradle Plugin 8.8.2 -> 8.9.0
      - Meerkat Feature Drop Canary 7
        - Android Gradle Plugin 8.8.1 -> 8.8.2
      - Meerkat Feature Drop Canary 5
        - Android Gradle Plugin 8.8.0 -> 8.8.1
      - Meerkat Feature Drop Canary 2
        - Kotlin 2.1.0 -> 2.1.10
        - Update SDK
          ![SDKUpdate](/images/Android/20250131_AndroidStudioUpdate.png)
      - Meerkat Canary 9 対応
        - Android Gradle Plugin 8.7.3 -> 8.8.0
      - Meerkat Canary 4 対応
        - Kotlin 2.1.0
        - Gradle 8.10 -> 8.11.1
        - Android Gradle Plugin 8.7.2 -> 8.7.3
        - Android Emulator v35.4.3
      - Meerkat Canary 3 対応
        - Android Baklava (=Android 16) Preview
        - Android Emulator v35.4.2
    - Ladybug 対応
      - 2024.2.1 Patch 2 対応
        - Android Gradle Plugin 8.7.1 -> 8.7.2
        - CompileSdk 34 -> 35
          - core-ktx および core 1.15.0 は、バージョン35以上のSDKでビルドする必要あり
      - 2024.2.1 Patch 1 対応
        - Android Gradle Plugin 8.7.0 -> 8.7.1
        - Kotlin Gradle Plugin 2.0.20 -> 2.0.21
      - 2024.2.1 対応
        - Android Gradle Plugin 8.6.1 -> 8.7.0
        - Gradle 8.8 -> 8.9 -> 8.10
    - Koala 対応
      - Feature Drop 2024.1.2 Patch 1 対応
        - Android Gradle Plugin 8.6.0 -> 8.6.1
      - Feature Drop 2024.1.2 対応
        - Android Gradle Plugin 8.5.2 -> 8.6.0
        - Kotlin Gradle Plugin 2.0.10 -> 2.0.20
          - Plugin更新には、Gradle 8.8 以上への更新必須
      - 2024.1.1 Patch 2 対応
        - Android Gradle Plugin 8.5.1 -> 8.5.2
        - Kotlin Gradle Plugin 2.0 -> 2.0.10
      - Gradle ビルドエラー
        - Gradle 8.8
          - Gradle 8.7 で metadata.binが見つからないエラーでビルドできないケースがあり、V8.8に更新することで解消
      - 2024.1.1 Patch 1 対応
        - Android Gradle Plugin 8.5.0 -> 8.5.1
      - 2024.1.1 対応
        - Android Gradle Plugin 8.4.1 -> 8.5.0
          - Gradle 8.7
        - Android Gradle Plugin 8.5.0 rc01 -> 8.5.0
        - Android API 35
        - Android SDK Built-Tools 35.0.0
      - RC 1 対応
        - Kotlin 2.0.0
          - [Compose Compiler Gradle plugin](https://developer.android.com/develop/ui/compose/compiler) に従って、Gradle設定ファイルを改修
        - Android Gradle Plugin 8.5.0 beta02 -> 8.5.0 rc01
      - Beta 2 対応
        - Android Gradle Plugin 8.5.0 beta01 -> 8.5.0 beta02
      - Beta 1 対応
        - Android Gradle Plugin 8.5.0 alpha05 -> 8.5.0 beta01
        - Gradle 8.6 -> 8.7 <BR />
          ![Update Assistant](/images/Android/20240515_Android_Studio_Koala_Beta1_AGP_Upgrade.png)
      - Canary 5 対応
        - Android Gradle Plugin 8.5.0 alpha04 -> 8.5.0 alpha05
    - Jellyfish 対応 <BR />
      ![Android Studio Jellyfish](/images/Android/20240501_Android_Studio_Jellyfish.png)
      - Android Gradle Plugin 8.3.2 -> 8.4.0
        - Gradle 8.6
    - Iguana Patch 2 対応
      - Android Gradle Plugin 8.3.1 -> 8.3.2
      - junit4が廃要素になったための変更（junit-ktx）
        ```xml
        dependencies {
            ...
            implementation 'androidx.test.ext:junit-ktx:1.1.5'
            testImplementation 'junit:junit:4.13.2'
            ...
        }
        ```
    - Iguana Patch 1 対応
      - Android Gradle Plugin 8.3.0 -> 8.3.1
    - Iguana 対応
      - Android Gradle Plugin 8.2.2 -> 8.3.0
    - Hedgehog Patch 1 対応
      - Android Gradle Plugin 8.2 -> 8.2.1
        - Gradle 8.4
      - Kotlin Gradle Plugin 1.9.21 -> 1.9.22
        - Java 21
          ![設定/ターゲットJVMバージョン](/images/Android/20240108_Android_Studio_Kotlin.png)
    - Hedgehog 対応
      - Android Gradle Plugin 8.2
        - Gradle 8.4
    - Giraffe 対応
      - Android Gradle Plugin 8.1
    - Flamingo 対応
      - Gradle 8.0 and Android Gradle Plugin 8.0
        - AGPが使用するJVMバージョンが17になるため、プロジェクトのJVMバージョンを変更する必要あり
          プロジェクトのJVMバージョンは、Project Structureで設定する
          ![Project Structure](/images/Android/Project%20Structure%20of%20Flamingo.png)
          設定によって出力される build.gradle は、下記の通り
          ```
          compileOptions {
              sourceCompatibility JavaVersion.VERSION_17
              targetCompatibility JavaVersion.VERSION_17
          }
          ```
        - MySchedulerのみGradle 7.xで据え置き
          - Realm-AndroidがGradle 8.0で廃止になるTransform APIを使用しているため
      - Kotlin 1.8.20
    - Electric Eel 対応
      - Gradle 7.5 and Android Gradle Plugin 7.4.0
      - Kotlin 1.8
    - Dolphin 対応
      - Gradle 7.4.2 and Android Gradle Plugin 7.3.0
      - アップデート対応 **@2022/09/25**
        * 起動時例外発生
          ```
              内部エラーが発生しました。Please refer to https://code.google.com/p/android/issues

          com.intellij.ide.plugins.StartupAbortedException: UI initialization failed
              at com.intellij.idea.StartupUtil.lambda$start$15(StartupUtil.java:268)
              at java.base/java.util.concurrent.CompletableFuture.uniExceptionally(CompletableFuture.java:986)
              at java.base/java.util.concurrent.CompletableFuture$UniExceptionally.tryFire(CompletableFuture.java:970)
              at java.base/java.util.concurrent.CompletableFuture.postComplete(CompletableFuture.java:506)
              at java.base/java.util.concurrent.CompletableFuture.postFire(CompletableFuture.java:610)
              at java.base/java.util.concurrent.CompletableFuture$UniRun.tryFire(CompletableFuture.java:791)
              at java.base/java.util.concurrent.CompletableFuture$Completion.run(CompletableFuture.java:478)
              at java.desktop/java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:313)
              at java.desktop/java.awt.EventQueue.dispatchEventImpl(EventQueue.java:776)
              at java.desktop/java.awt.EventQueue$4.run(EventQueue.java:727)
              at java.desktop/java.awt.EventQueue$4.run(EventQueue.java:721)
              at java.base/java.security.AccessController.doPrivileged(Native Method)
              at java.base/java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:85)
              at java.desktop/java.awt.EventQueue.dispatchEvent(EventQueue.java:746)
              at java.desktop/java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:203)
              at java.desktop/java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:124)
              at java.desktop/java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:113)
              at java.desktop/java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:109)
              at java.desktop/java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
              at java.desktop/java.awt.EventDispatchThread.run(EventDispatchThread.java:90)
          Caused by: java.util.concurrent.CompletionException: java.lang.VerifyError: Expecting a stack map frame
          Exception Details:
          Location:
              com/intellij/openapi/util/text/StringUtil.pluralize(Ljava/lang/String;I)Ljava/lang/String; @7: nop
          Reason:
              Expected stackmap frame at this location.
          Bytecode:
              0000000: 2ab0 0000 a7ff fe00 bf00 00a7 fffe     
          Stackmap Table:
              same_frame(@2)
              same_frame(@9)

              at java.base/java.util.concurrent.CompletableFuture.encodeThrowable(CompletableFuture.java:314)
              at java.base/java.util.concurrent.CompletableFuture.completeThrowable(CompletableFuture.java:319)
              at java.base/java.util.concurrent.CompletableFuture$UniRun.tryFire(CompletableFuture.java:787)
              ... 14 more
          Caused by: java.lang.VerifyError: Expecting a stack map frame
          Exception Details:
          Location:
              com/intellij/openapi/util/text/StringUtil.pluralize(Ljava/lang/String;I)Ljava/lang/String; @7: nop
          Reason:
              Expected stackmap frame at this location.
          Bytecode:
              0000000: 2ab0 0000 a7ff fe00 bf00 00a7 fffe     
          Stackmap Table:
              same_frame(@2)
              same_frame(@9)

              at com.intellij.openapi.util.SystemInfo.isOsVersionAtLeast(SystemInfo.java:51)
              at com.intellij.openapi.util.SystemInfo.<clinit>(SystemInfo.java:54)
              at com.intellij.ui.JreHiDpiUtil.isJreHiDPIEnabled(JreHiDpiUtil.java:58)
              at com.intellij.ui.scale.JBUIScale.getOrComputeUserScaleFactor(JBUIScale.java:190)
              at com.intellij.ui.scale.JBUIScale.scale(JBUIScale.java:314)
              at com.intellij.ui.scale.UserScaleContext.<init>(UserScaleContext.java:26)
              at com.intellij.util.ui.JBUI$BaseScaleContext.<init>(JBUI.java:1408)
              at com.intellij.ui.scale.ScaleContext.<init>(ScaleContext.java:32)
              at com.intellij.ui.scale.ScaleContext.create(ScaleContext.java:108)
              at com.intellij.ui.scale.ScaleContextSupport.<init>(ScaleContextSupport.java:11)
              at com.intellij.openapi.util.IconLoader$CachedImageIcon.<init>(IconLoader.java:702)
              at com.intellij.ui.CoreIconManager$IconWithToolTipImpl.<init>(CoreIconManager.java:91)
              at com.intellij.ui.CoreIconManager.loadRasterizedIcon(CoreIconManager.java:61)
              at com.intellij.icons.AllIcons.load(AllIcons.java:17)
              at com.intellij.icons.AllIcons.<clinit>(AllIcons.java:670)
              at com.intellij.icons.AllIcons$Nodes.<clinit>(AllIcons.java:719)
              at com.intellij.ide.ui.laf.IdeaLaf.initIdeaDefaults(IdeaLaf.java:74)
              at com.intellij.ide.ui.laf.IdeaLaf.initComponentDefaults(IdeaLaf.java:35)
              at java.desktop/javax.swing.plaf.basic.BasicLookAndFeel.getDefaults(BasicLookAndFeel.java:150)
              at java.desktop/javax.swing.plaf.metal.MetalLookAndFeel.getDefaults(MetalLookAndFeel.java:1560)
              at com.intellij.idea.StartupUtil.lambda$scheduleInitUi$21(StartupUtil.java:476)
              at com.intellij.ui.scale.JBUIScale.computeSystemFontData(JBUIScale.java:69)
              at com.intellij.ui.scale.JBUIScale.getSystemFontData(JBUIScale.java:360)
              at com.intellij.idea.StartupUtil.lambda$scheduleInitUi$22(StartupUtil.java:474)
              at java.base/java.util.concurrent.CompletableFuture$UniRun.tryFire(CompletableFuture.java:783)
              ... 14 more

          -----
          Your JRE: 11.0.13+0-b1751.21-8125866 amd64 (JetBrains s.r.o.)
          D:\Program Files\Android\Android Studio\jre
          ```
        * 原因
          非推奨になった日本語化パッケージを適用していたため
        * 対策
          - 一旦、旧バージョンに戻し、公式情報に従って、日本語化パッケージを無効化
            [IntelliJ IDEA 日本語化マニュアル](https://pleiades.io/pages/pleiades_jetbrains_manual.html)
          - アンインストールのうえ、ユーザフォルダ配下にあるファイルを削除
          - 新規インストールを行い、起動確認
          - JetBrainsの日本語化パッケージを適用
            [Android Studio Dolphin 日本語化を行いました（macOS）](https://zenn.dev/kurayasu/articles/c2d3bd2a046596)
    - Chipmunk 対応
      - Gradle 7.3.3 and Android Gradle Plugin 7.2.0
    - Arctic Fox 対応として吸収すべき課題 **@2021/11/23** <span style="color: red;">*updated!*</span>
      - Android Studio Arctic Fox 2020.3.1 (based IntelliJ 2020.3) <span style="color: red;">*Wrote first at 2021.8.20*</span>
        - 環境刷新
          - Kotlin 1.6.0 <span style="color: red;">*Update at 2021.11.23*</span><BR>
          Build.gradleでKotlinバージョンを変更
          - Gradle V7.0 <BR>
          Project Referenceで使用するGradleのバージョンを変更
              - Android Gradle Plugin Version: 7.0.3 <span style="color: red;">*Update at 2021.11.23*</span>
              - Gradle Version: 7.0.2
          - JDK 11 <BR>
          Android Studioに含まれるJDKがJDK11に変更になり、同じJDKをGradle実行にも使用するため、Gradle SettingでAndroid Studioに含まれるJDKを使用するように変更する

          build.gradle(project) <span style="color: red;">*Update at 2021.8.20*</span>
          ```
          buildscript {
              ext.kotlin_version = '1.5.21'
              repositories {
                  google()
                  mavenCentral()
              }
              dependencies {
                  classpath "com.android.tools.build:gradle:7.0.1"
                  classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
              }
          }
          ```
    - Android 12 / 非互換として吸収すべき課題
      - SDKバージョン範囲の見直し <span style="color: red;">*Update at 2021.8.20*</span>
        - ビルド時に下記メッセージが出るため、SDKバージョンを26以上にする
          - "Invoke-customs are only supported starting with Android O (--min-api 26)"
          - "Default interface methods are only supported starting with Android N (--min-api 24)
          - "Static interface methods are only supported starting with Android N (--min-api 24)
      - マニフェスト <span style="color: red;">*Update at 2021.8.20*</span>
        - [アクティビティのエクスポート](https://developer.android.com/guide/topics/manifest/activity-element#exported)
          - manifestでintent-filterを使っている場合、android:exportedをtrueにする必要あり
            ```xml
            <activity android:name=".MainActivity" android:exported="true">
                <intent-filter>
                ...
                </intent-filter>
            </activity>
            ```
      - [ビューバインディング](https://developer.android.com/topic/libraries/view-binding?hl=ja)
        - Android 3.5までの実装を変更する
        - ビューバインディングの使用を宣言する <BR>
          - build.gradle(app)
            ```json
            android {
                viewBinding {
                    enabled = true
                }
            }
            ```
        - ビューバインディング使用により、不要になるkotlin-android-extensionsプラグインを削除する（削除すると、下記のようになる）
          ```json
          plugins {
              id 'com.android.application'
              id 'kotlin-android'
          }
          ```
        - 要素に応じた修正を行う
          1.  アクティビティの場合
              - アクティビティにバインディングクラスのインスタンス変数を追加する
                ```
                class MainActivity : AppCompatActivity() {
                    private lateinit var binding: ActivityMainBinding
                    ...
                }
                ```
              - インポートする名前空間を変更する（上記の変数を追加するとIDEからメッセージが出る）
                ```
                import kotlinx.android.synthetic.main.activity_main.*
                ```
                ```
                import com.example.helloandroid.databinding.ActivityMainBinding
                ```
              - 初期化時にバインディングクラスのインスタンス変数を初期化し、ルートビューへの参照を取得する
                ```
                override fun onCreate(savedInstanceState: Bundle?) {
                    super.onCreate(savedInstanceState)
                    binding = ActivityMainBinding.inflate(layoutInflater)
                    val view = binding.root
                    setContentView(view)
                    ...
                }
                ```
              - アクティビティ内の項目へのアクセスを変更する
                ```
                override fun onCreate(savedInstanceState: Bundle?) {
                    ...
                    tapHere.setOnClickListener {
                        textView.text = "ボタンがタップされました"
                    }
                }
                ```
                ↓
                ```
                override fun onCreate(savedInstanceState: Bundle?) {
                    ...
                    binding.tapHere.setOnClickListener {
                        binding.textView.text = "ボタンがタップされました"
                    }
                }
                ```
          1.  フラグメントの場合
              - フラグメントにバインディングクラスのインスタンス変数を追加する
                ```kt
                private var _binding: ResultProfileBinding? = null
                // This property is only valid between onCreateView and
                // onDestroyView.
                private val binding get() = _binding!!
                ```
              - フラグメントの初期化時にバインディングクラスのインスタンス変数を初期化し、ルートビューへの参照を取得する
                ```kt
                override fun onCreateView(
                    inflater: LayoutInflater,
                    container: ViewGroup?,
                    savedInstanceState: Bundle?
                ): View {
                    _binding = ResultProfileBinding.inflate(inflater, container, false)
                    val view = binding.root
                    return view
                }
                ```
              - フラグメントの破棄時にバインディングクラスのインスタンス変数を解放する
                ```kt
                override fun onDestroyView() {
                    super.onDestroyView()
                    _binding = null
                }
                ```
              - フラグメント内の項目への参照を変更する
                ```kt
                name.text = viewModel.name
                button.setOnClickListener { viewModel.userClicked() }
                ```
                ↓
                ```kt
                binding.name.text = viewModel.name
                binding.button.setOnClickListener { viewModel.userClicked() }
                ```
              - [フラグメントをアクティビティ内で機能させる](https://developer.android.com/guide/fragments/fragmentmanager) <span style="color: red;">*Update at 2021.8.21*</span>              
                - フラグメント生成
                  ```kt
                  val fragment = TitleFragment()
                  fragment.setTitle("フラグメント動物図鑑")
                  ```
                - フラグメントマネージャーの取得
                  ```kt
                  val fragmentManeger = this.supportFragmentManager
                  ```
                - トランザクション実行
                  - 下記例では、トランザクション開始～フラグメント追加～トランザクション終了（コミット）を一連のブロック(commitブロック)で実行する
                    ```kt
                    supportFragmentManager.commit {
                        replace(R.id.fragmentContainerView, fragment)
                        addToBackStack("name") // name can be null
                    }
                    ```
      - 共有プリファレンス
        - build.gradle(app)に以下を追加する        
          ```json
          dependencies {
              ...
              implemetation 'androidx.preference:preference-ktx:1.1.0'
              ...
          }
          ```
        - FragmentStatePagerAdapterの置換 <span style="color: red;">*Update at 2021.8.22*</span>
          - アダプタの継承クラスのコンストラクタの継承元をFragmentStateAdapterに置き換える
            - https://developer.android.com/reference/androidx/fragment/app/FragmentStatePagerAdapter
              ```kt
              class MyAdapter(fm: FragmentManager) : FragmentStatePagerAdapter(fm){
                  ...
                  override fun getCount(): Int {
                      ...
                  }
              }
              ```
            - https://developer.android.com/reference/androidx/viewpager2/adapter/FragmentStateAdapter
              ```kt
              class MyAdapter(fa: FragmentActivity) : FragmentStateAdapter(fa){
                  ...
                  override fun getItemCount(): Int {
                      ...
                  }
              }
              ```
          - アクティビティでのアダプタへのアクセスを変更する
            ```kt
            binding.pager.adapter = MyAdapter(supportFragmentManager)
            ```
            ↓
            ```kt
            binding.pager.adapter = MyAdapter(this)
            ```
        - [タイマ処理におけるハンドラ周りを見直す](https://developer.android.com/reference/kotlin/android/os/Handler?hl=en) <span style="color: red;">*Update at 2021.8.22*</span>
          - ハンドラ生成の見直し
            ```kt
            var handler = Handler()
            ```
            ↓
            ```kt
            Looper.prepare()
            val handler = Looper.myLooper()?.let { Handler(it, null) }
            ```
          - ハンドラ利用の見直し（セーフアクセス修飾子）
            ```kt
            timer(period = 5000){
                handler.post {
                    ...
                }
            }
            ```
            ↓
            ```kt
            timer(period = 5000){
                handler?.post {
                    ...
                }
            }
            ```
        - フラグメント作成後の処理手続きの変更 <span style="color: red;">*Update at 2021.8.22*</span>
          - onActivityCreatedメソッドでの実行は非推奨となったため、フラグメントのビューをタッチするコードは、onActivityCreatedメソッドの実行直前に呼び出されるonViewCreatedメソッドでの実行に変更。その他の初期化コードは onCreate() 内での実行に変更。
            ```kt
            override fun onActivityCreated(...){
                ...
            }
            ```
            ↓
            ```kt
            override fun onViewCreated(...){
                ...
            }
            ```
        - [SoundPool(Lollipopで非推奨)](https://developer.android.com/reference/kotlin/android/media/SoundPool?hl=en) <span style="color: red;">*Update at 2021.8.25*</span>
          ```kt
          soundPool = SoundPool.Builder()
                      .setMaxStreams(1)
                      .setAudioAttributes(audioAttributes)
                      .build()
          ```
        - PendingIntent.getBroadcast <span style="color: red;">*Update at 2021.8.25*</span>
          - lintでMuttable Flagを指定されていないと指摘されるため、指定するように変更
        - SimpleDateFormat <span style="color: red;">*Update at 2021.8.25*</span>
          - lintでロケールを指定するよう指摘されるため、ロケールを指定するように変更
        - [Realm 環境の更新](https://docs.mongodb.com/realm/sdk/android/install/) <span style="color: red;">*Update at 2021.8.28*</span>
          - build.gradle(project)
            ```js
            buildscript {
              repositories {
                google()
                mavenCentral()
                jcenter()
              }
              dependencies {
                classpath "com.android.tools.build:gradle:7.0.1"
                classpath "io.realm:realm-gradle-plugin:10.7.0"
              }
            }
            allprojects {
              repositories {
                google()
                mavenCentral()
                jcenter()
              }
              dependencies {
              }
            }
            task clean(type: Delete) {
              delete rootProject.buildDir
            }
            ```
          - build.gradle(app)
            ```js
            plugins {
              id 'kotlin-kapt'
              id 'realm-android'
            }
            ...
            realm {
              syncEnabled = true
            }
            ```

### Androidプログラミング
  - プロジェクト残課題状況

    AP | Status | Issue
    ---| ------ | ------
    AnimalBook | *Fixed* | [起動時にNullPointerExceptionが発生し、起動できない](https://github.com/Tatsukiyoshi/Weekend_Programming/issues/654) 
    MyCountdownTimer | *No Problem* | リセット時に3:00に表示が戻らない <BR /> リセット後、すぐにカウントダウンするため、2:59になることで問題なし
    MyScheduler | *Fixed* | [入力したスケジュールが保存できない](https://github.com/Tatsukiyoshi/Weekend_Programming/issues/655)
    MySlideshow | *Fixed* | 起動時にNotImplementedErrorで起動できない <BR /> -> Arctic Fox対応でビューバインディングを導入した際のコード移行漏れ

  - `入力したスケジュールが保存できない`の主な修正内容:

    1. 古いライブラリへの依存の解消

        - 問題点:
        
          ビルドエラーの根本的な原因は、現在は利用できなくなった古いRealmデータベースのアダプターライブラリ (RealmRecyclerViewAdapter) を使おうとしていたことでした。
        
        - 解決策:
        
          この古いライブラリの使用をやめ、現在のAndroid開発で標準的に使われる ListAdapter という仕組みに置き換えました。

    1. ScheduleAdapterの近代化

        `ListAdapter` を使うように変更しました。これにより、リストの項目が追加・変更・削除された際に、効率的かつスムーズに画面を更新できるようになります。
        各スケジュール項目が一意のIDを持つことをRecyclerViewに伝え(`setHasStableIds(true)`)、動作を安定させました。

    1. ScheduleListFragment.kt の安定化

        - 問題点:
        
          修正の過程で、データベースの変更通知と画面のライフサイクルのタイミングが競合し、クラッシュが発生していました。
        
        - 解決策:
        
          データベースの変更を監視する `RealmChangeListener` の実装方法を修正しました。具体的には、特定のデータセット（スケジュール一覧）のみを監視し、さらに画面が存在するときだけUIを更新するようにチェック処理を追加して、クラッシュを防ぎました。

    1. MainActivity.kt のクラッシュ修正

        - 問題点:
        
          アプリ起動時に、画面遷移を管理する `NavController` を不適切なタイミングで取得しようとしていたため、クラッシュが発生していました。
        
        - 解決策:
        
          Androidが推奨する安全な方法で `NavController` を取得するように修正し、起動時のクラッシュを解消しました。
