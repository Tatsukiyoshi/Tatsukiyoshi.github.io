# Kotlin

##  独学書
  |テキスト                                                    |日付      |進捗状況
  |-----------------------------------------------------------|----------|---
  |Spring解体新書（バッチ編）                                   |2022/08/08|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/kotlin/spring)
  |Kotlinプログラミング                                        |2019/11/13|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/kotlin/programming)
  |[はじめてのAndroidプログラミング](http://isbn.sbcr.jp/95815) |2019/10/12|*finished* ->[コード](https://github.com/Tatsukiyoshi/Weekend_Programming/tree/main/kotlin/Android)

##  環境
  |端末       |環境／FW                                                       |最終更新      
  |-----------|--------------------------------------------------------------|----------
  |IdeaPad    |[IntelliJ IDEA 2024.1.2](#intellij-idea)                      |[2024/05/27](https://www.jetbrains.com/ja-jp/idea/)
  |           |- Kotlin 1.9.24                                               |[2024/05/08](https://kotlinlang.org/docs/home.html)
  |           |Amazon Coretto 22.0.1                                         |2024/05/04
  |Mini-S12   |[Android Studio Jellyfish 2023.3.1 Patch 1](#android-studio)  |[2024/05/21](https://developer.android.com/studio)
  |           |- Kotlin 1.9.23                                               |[2024/03/30](https://kotlinlang.org/docs/home.html)
  |           |Android Studio Koala 2024.1.1 Beta 1                          |[2024/05/15](https://developer.android.com/studio/preview)
  |ExpertBook |Android Studio Hedgehog 2023.1.1 Patch 2                      |2024/01/27

##  ノウハウ
### IntelliJ IDEA
  - Intellij IDEA 2024.1.1
    - Kotlin 1.9.24
  - Intellij IDEA 2023.3.6
    - Kotlin 1.9.23
      ```
      plugins {
        id("org.springframework.boot") version "3.2.0"
        id("io.spring.dependency-management") version "1.1.3"
        kotlin("jvm") version "1.9.23"
        kotlin("plugin.spring") version "1.8.10"
      }
      ```
  - Intellij IDEA 2023.3.4
    - Kotlin 1.9.22
      ![Kotlinコンパイラ](../images/Kotlin/20240223_IntelliJ_IDEA_2023.3.4_KotlinSetting.png)
      ![デバッグ](../images/Kotlin/20240223_IntelliJ_IDEA_2023.3.4_KotlinDebug.png)
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
  - [履歴](../history/IntelliIDEA.md)
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
### [Spring解体新書（バッチ編）](https://www.amazon.co.jp/gp/product/B09D3ZTJTB/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1)
  - IntelliJ IDEA
  - [Gradle 8.4](https://gradle.org/releases/)
  - [Kotlin 1.9.20](https://kotlinlang.org/docs/home.html)
  - Amazon Coretto 21.0.1 + 言語レベル 21
  - Graal VM Java17-22.2.0
  - [Spring Boot 3.2.0](https://spring.io/projects/spring-boot)/Spring Batch 5.1/Spring Framework 6.1 **2023/11/23**
    - [Spring Boot 3.0 Migration Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide)
    - [Spring Batch 5.0 migration guide](https://github.com/spring-projects/spring-batch/wiki/Spring-Batch-5.0-Migration-Guide)
    - [MyBatis](http://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)
  - [PostgreSQL](Database.md#postgresql)
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
### Androidプログラミング
  - [Kotlin 1.9.23](https://kotlinlang.org/docs/home.html)
  - プロジェクト残課題状況
    - AnimalBook
      - [起動時にNullPointerExceptionが発生し、起動できない](https://github.com/Tatsukiyoshi/Weekend_Programming/issues/654) *Fixed*
    - MyCountdownTimer *No Problem*
      - リセット時に3:00に表示が戻らない
        - リセット後、すぐにカウントダウンするため、2:59になることで問題なし
    - MyScheduler
      - [入力したスケジュールが保存できない](https://github.com/Tatsukiyoshi/Weekend_Programming/issues/655)
    - MySlideshow
      - 起動時にNotImplementedErrorで起動できない *Fixed*
        - Arctic Fox対応でビューバインディングを導入した際のコード移行漏れ
### Android Studio
  - Android Studio Koala | 2024.1.1 Beta 1
    ```
    Build #AI-241.15989.150.2411.11801021, built on May 4, 2024
    Runtime version: 17.0.10+0--11609105 amd64
    VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
    Windows 11.0
    GC: G1 Young Generation, G1 Old Generation
    Memory: 2048M
    Cores: 4
    Registry:
      ide.experimental.ui=true
    Non-Bundled Plugins:
      com.intellij.ja (241.219)
    ```
    - Beta 1 対応
      - Android Gradle Plugin 8.5.0 alpha05 -> 8.5.0 beta01
      - Gradle 8.6 -> 8.7 <BR />
        ![Update Assistant](../images/Android/20240515_Android_Studio_Koala_Beta1_AGP_Upgrade.png)
    - Canary 5 対応
      - Android Gradle Plugin 8.5.0 alpha04 -> 8.5.0 alpha05
    - Gemini 1.0 Pro
      ![Gemini API Starter](../images/Android/20240410_New_Project_Gemini_API_Starter.png)
      ![Create API Key](../images/Android/20240410_API_Key_Gemini_API_Starter.png)
      ![Pixel 8 Emulator](../images/Android/20240410_Pixel8_Emulator_Gemini_API_Starter.png)
  - Android Studio Jellyfish | 2023.3.1
    ![Android Studio Jellyfish](../images/Android/20240501_Android_Studio_Jellyfish.png)
    ```
    Build #AI-233.14808.21.2331.11709847, built on April 13, 2024
    Runtime version: 17.0.10+0--11572160 amd64
    VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
    Windows 11.0
    GC: G1 Young Generation, G1 Old Generation
    Memory: 2048M
    Cores: 4
    Registry:
      debugger.new.tool.window.layout=true
      ide.experimental.ui=true
    Non-Bundled Plugins:
      com.intellij.ja (233.287)
      Dart (233.15123)
      io.flutter (79.0.2)
    ```
  - バージョン共通
    - [開発者向けオプション](https://developer.android.com/studio/debug/dev-options?hl=ja)
    - Android Studioの日本語化 <BR>
      [JetBrains公式サイト](https://plugins.jetbrains.com/plugin/13964-japanese-language-pack------/versions)からダウンロードする。

    - Gradle設定
      - Gradleに関する設定は、環境変数GRADLE_USER_HOMEで設定したディレクトリを参照するため、変更したい場合、格納先のディレクトリを設定する
    - Android SDK設定
      ![SDK設定](../images/Android/SDK_Setting.png)
    - エミュレータのイメージ退避
      1.  エミュレータのイメージは、ユーザの.androidディレクトリに格納されるため、移動する
      1.  以下のように、イメージの管理ファイル(.ini)にある格納先を変更する
          ```
          path=F:\Program\.android\avd\Nexus_5X_API_28.avd
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
  - バージョン対応履歴
    - Jellyfish 対応
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
          ![設定/ターゲットJVMバージョン](../images/Android/20240108_Android_Studio_Kotlin.png)
    - Hedgehog 対応
      - Android Gradle Plugin 8.2
        - Gradle 8.4
    - Giraffe 対応
      - Android Gradle Plugin 8.1
    - Flamingo 対応
      - Gradle 8.0 and Android Gradle Plugin 8.0
        - AGPが使用するJVMバージョンが17になるため、プロジェクトのJVMバージョンを変更する必要あり
          プロジェクトのJVMバージョンは、Project Structureで設定する
          ![Project Structure](../images/Android/Project%20Structure%20of%20Flamingo.png)
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
            [Android Studio Dolphin 日本語化を行いました（Mac）](https://zenn.dev/kurayasu/articles/c2d3bd2a046596)
    - Chipmunk 対応
      - Gradle 7.3.3 and Android Gradle Plugin 7.2.0
    - Arctic Fox 対応として吸収すべき課題 **@2021/11/23** <span style="color: red;">*updated!*</span>
      - Android Studio Arctic Fox 2020.3.1 (based IntelliJ 2020.3) <font color=red><strong>Wrote first at 2021.8.20</strong></font>
        - 環境刷新
          - Kotlln 1.6.0 <font color=red><strong>Update at 2021.11.23</strong></font><BR>
          Build.gradleでKotlinバージョンを変更
          - Gradle V7.0 <BR>
          Project Referenceで使用するGradleのバージョンを変更
              - Android Gradle Plugin Version: 7.0.3 <font color=red><strong>Update at 2021.11.23</strong></font>
              - Gradle Version: 7.0.2
          - JDK 11 <BR>
          Android Studioに含まれるJDKがJDK11に変更になり、同じJDKをGradle実行にも使用するため、Gradle SettingでAndroid Studioに含まれるJDKを使用するように変更する

          build.gradle(project) <font color=red><strong>Update at 2021.8.20</strong></font>
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
        - 非互換として吸収すべき課題
          - SDKバージョン範囲の見直し <font color=red><strong>Update at 2021.8.20</strong></font><BR>
            ビルド時に下記メッセージが出るため、SDKバージョンを26以上にする
            * "Invoke-customs are only supported starting with Android O (--min-api 26)"
            * "Default interface methods are only supported starting with Android N (--min-api 24)
            * "Static interface methods are only supported starting with Android N (--min-api 24)
          - マニフェスト <font color=red><strong>Update at 2021.8.20</strong></font>
            * アクティビティのエクスポート
              manifestでintent-filerを使っているため、下記を参照して設定。<BR>
            https://developer.android.com/guide/topics/manifest/activity-element#exported <BR>
            intent-filterを指定している場合には、android:exportedをtrueにする必要あり
            ```
            <activity android:name=".MainActivity" android:exported="true">
                <intent-filter>
                ...
                </intent-filter>
            </activity>
            ```
          - ビューバインディング <BR>
              Android 3.5までの実装を変更する <BR>
              https://developer.android.com/topic/libraries/view-binding?hl=ja
              - ビューバインディングの使用を宣言する <BR>
              build.gradle(app)
              ```
              android {
                  viewBinding {
                      enabled = true
                  }
              }
              ```
              - ビューバインディング使用により、不要になるkotlin-android-extensionsプラグインを削除する（削除すると、下記のようになる）
              ```
              plugins {
                  id 'com.android.application'
                  id 'kotlin-android'
              }
              ```
              - アクティビティの場合
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
              - フラグメントの場合
                - フラグメントにバインディングクラスのインスタンス変数を追加する
                  ```
                  private var _binding: ResultProfileBinding? = null
                  // This property is only valid between onCreateView and
                  // onDestroyView.
                  private val binding get() = _binding!!
                  ```
                - フラグメントの初期化時にバインディングクラスのインスタンス変数を初期化し、ルートビューへの参照を取得する
                  ```
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
                  ```
                  override fun onDestroyView() {
                      super.onDestroyView()
                      _binding = null
                  }
                  ```
                - フラグメント内の項目への参照を変更する
                  ```
                  name.text = viewModel.name
                  button.setOnClickListener { viewModel.userClicked() }
                  ```
                  ↓
                  ```
                  binding.name.text = viewModel.name
                  binding.button.setOnClickListener { viewModel.userClicked() }
                  ```
                - フラグメントをアクティビティ内で機能させる <font color=red><strong>Update at 2021.8.21</strong></font><BR>
                  https://developer.android.com/guide/fragments/fragmentmanager
                  - フラグメント生成
                    ```
                    val fragment = TitleFragment()
                    fragment.setTitle("フラグメント動物図鑑")
                    ```
                  - フラグメントマネージャーの取得
                    ```
                    val fragmentManeger = this.supportFragmentManager
                    ```
                  - トランザクション実行 <BR>
                    下記例では、トランザクション開始～フラグメント追加～トランザクション終了（コミット）を一連のブロック(commitブロック)で実行する
                    ```
                    supportFragmentManager.commit {
                        replace(R.id.fragmentContainerView, fragment)
                        addToBackStack("name") // name can be null
                    }
                    ```
          - 共有プリファレンス
            - build.gradle(app)に以下を追加する        
                ```
                dependencies {
                    ...
                    implemetation 'androidx.preference:preference-ktx:1.1.0'
                    ...
                }
                ```
            - FragmentStatePagerAdapterの置換 <font color=red><strong>Update at 2021.8.22</strong></font><BR>
              - アダプタの継承クラスのコンストラクタの継承元をFragmentStateAdapterに置き換える <BR>
                https://developer.android.com/reference/androidx/fragment/app/FragmentStatePagerAdapter
                  ```
                  class MyAdapter(fm: FragmentManager) : FragmentStatePagerAdapter(fm){
                      ...
                      override fun getCount(): Int {
                          ...
                      }
                  }
                  ```
                  https://developer.android.com/reference/androidx/viewpager2/adapter/FragmentStateAdapter
                  ```
                  class MyAdapter(fa: FragmentActivity) : FragmentStateAdapter(fa){
                      ...
                      override fun getItemCount(): Int {
                          ...
                      }
                  }
                  ```
              - アクティビティでのアダプタへのアクセスを変更する
                  ```
                  binding.pager.adapter = MyAdapter(supportFragmentManager)
                  ```
                  ↓
                  ```
                  binding.pager.adapter = MyAdapter(this)
                  ```
            - タイマ処理におけるハンドラ周りを見直す <font color=red><strong>Update at 2021.8.22</strong></font><BR> 
              https://developer.android.com/reference/kotlin/android/os/Handler?hl=en
              - ハンドラ生成の見直し
                  ```
                  var handler = Handler()
                  ```
                  ↓
                  ```
                  Looper.prepare()
                  val handler = Looper.myLooper()?.let { Handler(it, null) }
                  ```
              - ハンドラ利用の見直し（セーフアクセス修飾子）
                  ```
                  timer(period = 5000){
                      handler.post {
                          ...
                      }
                  }
                  ```
                  ↓
                  ```
                  timer(period = 5000){
                      handler?.post {
                          ...
                      }
                  }
                  ```
            - フラグメント作成後の処理手続きの変更 <font color=red><strong>Update at 2021.8.22</strong></font><BR>
              onActivityCreatedメソッドでの実行は非推奨となったため、フラグメントのビューをタッチするコードは、onActivityCreatedメソッドの実行直前に呼び出されるonViewCreatedメソッドでの実行に変更。その他の初期化コードは onCreate() 内での実行に変更。
              ```
              override fun onActivityCreated(...){
                  ...
              }
              ```
              ↓
              ```
              override fun onViewCreated(...){
                  ...
              }
              ```
            - SoundPool(Lollipopで非推奨) <font color=red><strong>Update at 2021.8.25</strong></font><BR>
              https://developer.android.com/reference/kotlin/android/media/SoundPool?hl=en
              ```
              soundPool = SoundPool.Builder()
                          .setMaxStreams(1)
                          .setAudioAttributes(audioAttributes)
                          .build()
              ```
            - PendingIntent.getBroadcast <font color=red><strong>Update at 2021.8.25</strong></font><BR>
              lintでMuttable Flagを指定されていないと指摘されるため、指定するように変更
            - SimpleDateFormat <font color=red><strong>Update at 2021.8.25</strong></font><BR>
              lintでロケールを指定するよう指摘されるため、ロケールを指定するように変更
            - Realm 環境の更新 <font color=red><strong>Update at 2021.8.28</strong></font><BR>
              https://docs.mongodb.com/realm/sdk/android/install/
              - build.gradle(project)
                ```
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
                ```
                plugins {
                    id 'kotlin-kapt'
                    id 'realm-android'
                }
                ...
                realm {
                    syncEnabled = true
                }
                ```
