---
layout: page
---
# Unity

##  独学書
  |Text                                                                                                   |Date      |Status
  |-------------------------------------------------------------------------------------------------------|----------|--------
  |[Unityによるモバイルゲーム開発](https://github.com/oreilly-japan/mobile-game-development-with-unity-ja)  |2023/01/21|12章 「小惑星とダメージ」 <span style="color: red;">*finished*</span> ->[Gnome's Well](https://github.com/Tatsukiyoshi/GnomesWell) / [Rockfall](https://github.com/Tatsukiyoshi/Rockfall)

##  環境
  |Machine    |Env / FW          |Last Updated
  |-----------|------------------|----------
  |InsiderDev |Unity 2022.2.15f1 |[2023/04/16](https://unity.com/releases/editor/)
  |           |Unity Hub 3.4.1   |[2022/12/18](https://unity.com/download)
  |           |Blender 3.4.1     |[2023/01/08](https://www.blender.org/)

##  ノウハウ
  - 「Unityによるモバイルゲーム開発」で学習リスタート
    - [アセット](https://www.oreilly.co.jp/pub/9784873118505/MobileGameDevWithUnity1stEd-master.zip)

  - [ライティング設定]
    - Window -> Rendering -> Lightingで表示されるダイアログで設定する。
      ![ライティング設定](/images/Unity/20230109_Lighting_Settings.png)

  - [2D Sprite Editor](https://www.sbcr.jp/support/48959/)
    ![2D Sprite Editor Install](/images/Unity/20230314_2D_Sprite_Editor.png)
  - [アスペクト比や解像度に合わせてUIの位置とサイズを固定する方法](https://pengoya.net/unity/ui-fix/)
  - [スプライトのインポート](https://docs.unity3d.com/ja/2018.4/Manual/Sprites.html)
  - [インポートした画像を使えない](https://teratail.com/questions/98383)
  - [シーンへドラッグアンドドロップする](https://teratail.com/questions/165849)
    - LTSである"2021.3.16f1"でうまくいかないので、"2022.2.1f1"を試す。
    - "2022.2.1f1"で問題なくドラッグアンドドロップできた。
  - マテリアルの従来互換のShaderメニューは、下記にある。
    ![LegacyShaders](/images/Unity/20230121_Shaders_ParticlesAdditive1.png)
    ![Particles](/images/Unity/20230121_Shaders_ParticlesAdditive2.png)
    ![Additive](/images/Unity/20230121_Shaders_ParticlesAdditive3.png)
  
  - 不具合
    - アセットの位置がずれる（ウィンドウの状態と連動しない）
      - 最大化した状態で合わせた場合、最大化した時だけ正しい位置になり、最大化を解除するとずれる
      - 最大化を解除した状態で合わせた場合、最大化した時にずれ、最大化を解除すると正しい位置になる。
      ![最大化](/images/Unity/20230103_2022.2.1f1.png)
      ![最大化解除](/images/Unity/20230103_2022.2.1f1_notmaximized.png)
