---
title:  WPFからWinUI 3への移行手順
layout: single
classes:  wide
sidebar:
  nav: main
---

Windows UI 3 (WinUI 3) への移行手順を具体的に整理するには、まず WPFとWinUI 3の基本的な違い を理解することが重要です

このXAMLは、WPFのUI要素、スタイル、テンプレート、トリガー、およびアニメーションの高度なカスタマイズを示しています

WinUI 3は、これらのWPFの概念の多くを近代化および再設計していますが、一部の機能は直接的な代替がなかったり、異なるアプローチを必要としたりします

# WPFとWinUI 3の基本的な相違点

機能 | WPF (Windows Presentation Foundation)|WinUI 3 (Windows UI Library)|移行時の考慮事項
----|--------------------------------------|----------------------------|--------------
フレームワーク|古典的な.NET Framework/.NET Core|.NET 6以降 |プロジェクトファイルの更新 (.csproj) とターゲットフレームワークの変更
XAML|古典的なXAML|モダンなXAML、異なる名前空間と要素|多くの要素名やプロパティが変更または非推奨になっているため、コードの書き換えが必要
データバインディング|Binding、RelativeSourceなど|x:Bindが推奨される|x:Bindはコンパイル時に処理され、パフォーマンスが向上
描画|DirectX|Composition Engine|WinUI 3はGPUの描画性能をより効率的に利用するため、BitmapEffectなどのWPFの古い描画機能は非推奨
スタイル/テンプレート|ControlTemplate、DataTemplateなど|ControlTemplate、DataTemplateなど 構造は似ている|一部のプロパティやトリガーが異なるため、テンプレートの再構築が必要
アニメーション|Storyboard、DoubleAnimationなど|Storyboard、DoubleAnimationなど VisualStateManagerとの統合が強化|Composition APIを利用したアニメーションがより強力

# 移行手順の整理
WinUI 3に移行するためには、以下のステップを実行する必要があります

1.  プロジェクトの準備

    - 新しいWinUI 3プロジェクトの作成

      まず、Visual Studioで新しいWinUI 3の「`Blank App (WinUI in Desktop)`」プロジェクトを作成します
      このプロジェクトは、必要なSDKや参照を自動的にセットアップします

    - プロジェクトファイルの更新

      WPFプロジェクトをWinUI 3プロジェクトの形式に合わせるために、`.csprojファイル`を編集し、ターゲットフレームワークを`.NET 6`以降に変更し、`WinUI 3 SDK`への参照を追加します

1.  XAMLコードの移行

    - アプリケーションリソース
    
      Application.Resourcesブロックを新しいWinUI 3プロジェクトの`App.xaml`にコピーします

    - ブラシとグラデーション
    
      `GradientStopCollection`、`LinearGradientBrush`、`GradientStop`はWinUI 3でも利用できますが、名前空間や一部のプロパティの互換性を確認する必要があります
      
      このコードの`MyGlassGradientStopsResource`や`GrayBlueGradientBrush`は、WinUI 3でも概ねそのまま移行できます

1.  コントロールテンプレートとスタイルの移行

    このWPFのコードは、`ControlTemplate`を使用してButtonの視覚的な外観を完全に再定義しています
    
    これはWinUI 3でも同じアプローチですが、多くのプロパティや要素が異なります

    - レイアウトパネル

      WPFのGridはWinUI 3でも使用できます

    - 図形

      Rectangleなどの図形要素はWinUI 3でも使用できます

    - テンプレートバインディング
    
      `{TemplateBinding ...}`はWinUI 3でも使用できますが、`TemplatePart`や`VisualStateManager` の使用を考慮することで、より現代的で管理しやすいアプローチになります
    
    - ブラシ

      StrokeやFillプロパティにStaticResourceとして定義したブラシを割り当てる方法は、WinUI 3でも有効です

    - 描画効果
    
      BitmapEffect、特にBevelBitmapEffectは、WinUI 3では非推奨です
      
      代替として、Composition API や Shadows を利用して同様の視覚効果を実装することを検討してください

    - コンテンツプレゼンター
    
      ContentPresenterはWinUI 3でも同様の機能を提供します

1.  トリガーとアニメーションの移行

    - ControlTemplate.Triggersの代替
    
      WPFの`ControlTemplate.Triggers`はWinUI 3では非推奨です
      
      その代替として、`VisualStateManager`とビジュアルステートを使用する必要があります

      - IsMouseOver
      
        VisualStateManager.GoToStateメソッドを使用して、マウスオーバー時に特定のビジュアルステートに遷移させます

      - IsFocused

        キーボードフォーカス時には、対応するビジュアルステートに切り替えます

    - イベントトリガー

      WPFのEventTriggerは、WinUI 3では直接的な代替がありません

      - MouseEnterとMouseLeave

        これらはPointerEnteredとPointerExitedイベントに置き換え、コードビハインドで処理する必要があります

    - アニメーション

      WPFの`DoubleAnimation`はWinUI 3でも使用できますが、Composition APIを利用したアニメーションはより高性能で柔軟です

      - Storyboard.TargetProperty
      
        WinUI 3では、このプロパティのパス指定方法が異なる場合があります

        WPFの`(Rectangle.RenderTransform).(TransformGroup.Children)[0].(ScaleTransform.ScaleX)`のような複雑なパスは、WinUI 3ではシンプルになる場合があります

      - RenderTransform
      
        Rectangle.RenderTransformはWinUI 3でも利用可能ですが、Composition APIに移行することで、より効率的な変換（スケーリング、回転）を実現できます

1.  その他の考慮事項

    - リソースディクショナリ
    
      WinUI 3では、リソースの定義方法がわずかに異なりますが、基本的な概念は同じです

    - コードビハインド
    
      `ControlTemplate.Triggers`の代わりに`VisualStateManager`を使用すると、アニメーションロジックの一部がXAMLからコードビハインドに移行する可能性があります
    
    - エラーと警告の対処

      移行中に発生するXAMLパーサーエラーやコンパイルエラーを一つずつ解決する必要があります
      
      特に、名前空間の変更や非推奨になったプロパティに注意してください
