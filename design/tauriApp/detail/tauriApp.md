---
title:  詳細検討
layout: single
sidebar:
  nav: main
---
## システムトレイのメニュー

1.  メニュー項目、および選んだ場合の処理

    テキスト|処理
    -------|-----
    Show   |ウィンドウの表示／非表示を切り替える
    Quit   |アプリケーションを終了する

    ShowとQuitの間には、セパレータを設ける

##  実装方法整理
### メニュー
1.  作成方法
    - V2
      ```rust
      MenuBuilder::new().build()
      ```
      - 例
        ```rust
        let tray_menu = MenuBuilder::new(app).items(&[&toggle]).build()?;
        ```
    - V1
      ```rust
      Menu::new()
      ```
      - 例
        ```rust
        let traymenu = Menu::new();
        ```
<div style="page-break-before:always"></div>

### メニュー項目
1.  作成方法
    - V2
      ```rust
      MenuItemBuilder::with_id().build()
      ```
      - 例
        ```rust
        let toggle = MenuItemBuilder::with_id("toggle", "Toggle").build(app)?;
        ```
    - V1
      ```rust
      CustomMenuItem::new()
      ```
      - 例
        ```rust
        let toggle = CustomMenuItem::new("toggle","Toggle");
        ```

1.  メニューへの追加方法
    1.  作成した項目
        - V2
          ```rust
          MenuBuilder.item(MenuItemBuilder)
          ```
          - 例
            ```rust
            traymenu.item(&toggle);
            ```
          <div style="page-break-before:always"></div>
        - V1
          ```rust
          Menu.add_item(CustomMenuItem)
          ```
          - 例
            ```rust
            traymenu.add_item(toggle);
            ```

    1.  Tauriが提供する項目
        - V2
          ```rust
          MenuBuilder.item(PredefinedMenuItem)
          ```
          - 例
            ```rust
            traymenu.item(&PredefinedMenuItem::separator(app)?);
            ```
        - V1
          ```rust
          Menu.add_native_item(MenuItem)
          ```
          - 例
            ```rust
            traymenu.add_native_item(MenuItem::Separator);
            ```
<div style="page-break-before:always"></div>

### メニューイベント
1.  イベント定義方法
    - V2
      - 例
        ```rust
          .on_menu_event(move |app, event| match event.id().as_ref() {
            // 項目と処理の紐づけ    
          })
        ```

1.  項目と処理の紐づけ方法
    - V2
      ```rust
      <項目> => {
        [処理記述]  　
      }
      ```
      - 例
        ```rust
          "toggle" => {
              println!("toggle clicked");
          }
          _ => (),
        ```

### ウィンドウ表示の切り替え

- ウィンドウを取得し、表示する／隠す
  ```rust
  if let Some(webview_window) = app.get_webview_window("main") {
    let _ = webview_window.show();
    let _ = webview_window.set_focus();
  }
  ```

### アプリケーションの終了

- トレイメニューに終了用の項目を追加する
  - 例(V2)
    ```rust
      traymenu.item(&PredefinedMenuItem::quit(app, None)?);
    ```
