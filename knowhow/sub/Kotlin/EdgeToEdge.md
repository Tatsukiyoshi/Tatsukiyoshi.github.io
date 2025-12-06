---
title:  EdgeToEdge GuideLine
layout: single
classes: wide
sidebar:
  nav: main
---
# Androidアプリでステータスバーを正しく表示し、UIの重なりを防ぐためのガイドライン

Androidアプリで、ステータスバー（時計やバッテリー情報が表示される領域）を常に表示し、アプリケーションのUI（ツールバーなど）が重ならないようにするための手順は以下の通りです。

1.  Activityのウィンドウ設定を変更する

    まず、対象のActivity（通常はMainActivity.kt）のonCreateメソッドで、WindowCompat.setDecorFitsSystemWindows(window, true)を呼び出します。これは、アプリケーションのコンテンツがシステムバー（ステータスバーやナビゲーションバー）の下に描画されないようにするための重要な設定です。

    - 場所: MainActivity.kt の onCreateメソッド内、setContentView()の前が推奨されます。

    ```cs
    import androidx.core.view.WindowCompat

    // ...

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // この行を追加
        WindowCompat.setDecorFitsSystemWindows(window, true)
        
        // ...以降のコード
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }
    ```
1.  AppBarLayoutにIDを設定する

    次に、レイアウトファイル（例: activity_main.xml）で、Toolbarを囲んでいるAppBarLayoutにIDを付与します。これにより、ActivityのコードからAppBarLayoutを直接参照できるようになります。

    - 場所: res/layout/activity_main.xml

    ```xml
    <com.google.android.material.appbar.AppBarLayout
        android:id="@+id/appBarLayout"  <!-- このIDを追加 -->
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        ...

        <androidx.appcompat.widget.Toolbar
            android:id="@+id/toolbar"
        ... />

    </com.google.android.material.appbar.AppBarLayout>
    ```
1.  AppBarLayoutにWindowInsetsを適用する

    最後に、MainActivity.ktに戻り、AppBarLayoutにOnApplyWindowInsetsListenerを設定します。このリスナーを使って、ステータスバーの高さを取得し、その分だけAppBarLayoutの上部にパディングを追加します。これにより、AppBarLayout全体がステータスバーの下に配置され、タイトルやメニューの重なりが解消されます。

    - 場所: MainActivity.kt の onCreateメソッド内、setSupportActionBar()の後など。

        ```cs
        import androidx.core.view.WindowInsetsCompat
        import androidx.core.view.updatePadding

        // ...

        // onCreateメソッド内
        setSupportActionBar(binding.toolbar)

        // このブロックを追加
        binding.appBarLayout.setOnApplyWindowInsetsListener { view, insets ->
            val systemBarInsets = WindowInsetsCompat.toWindowInsetsCompat(insets)
                .getInsets(WindowInsetsCompat.Type.systemBars())
            // 上部にパディングを追加
            view.updatePadding(top = systemBarInsets.top)
            insets
        }
        ```

##  まとめ
この3ステップにより、以下の動作が実現できます。

- ステータスバーが常に表示される。
- アプリケーションのツールバーがステータスバーと重なって表示されることがなくなる。
- ツールバー内のタイトルも正しく表示される。

この方法は、特にCoordinatorLayoutとAppBarLayoutを使用している標準的なAndroidアプリで有効です。
