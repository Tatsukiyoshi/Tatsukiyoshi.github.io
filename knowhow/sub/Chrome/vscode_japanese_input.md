---
title:  Setup Scheme for Japanese Input on vscode
layout: single
sidebar:
  nav: main
---
# ChromeOS Flex での VS Code 日本語入力環境構築手順

## 問題
ChromeOS Flex 上の VS Code で日本語入力ができず、また日本語キーボード（JIS）の記号入力が正しく機能していなかった。

## 解決手順

### 1. fcitx と Mozc のインストール・設定

```bash
# fcitx と Mozc をインストール
sudo apt install fcitx fcitx-mozc

# fcitx をリセット
killall fcitx
rm -rf ~/.config/fcitx
fcitx -d
```

### 2. fcitx-configtool で Mozc を有効化

```bash
# 設定ツールを起動
fcitx-configtool
# または
fcitx-config-gtk3
```

設定画面で：
- 左下の「+」ボタンをクリック
- 「Mozc」を検索して追加
- 「OK」をクリック

### 3. VS Code を X11 モードで起動するよう設定

VS Code のデスクトップファイルを修正：

```bash
sudo sed -i 's|Exec=/usr/share/code/code|Exec=/usr/share/code/code --ozone-platform=x11|g' /usr/share/applications/code.desktop
```

確認：

```bash
grep "^Exec=" /usr/share/applications/code.desktop
```

出力が以下のようになっていればOK：
```
Exec=/usr/share/code/code --ozone-platform=x11 %F
Exec=/usr/share/code/code --ozone-platform=x11 --new-window %F
```

### 4. キーボードレイアウトを日本語（JIS）に設定

```bash
# キーボードレイアウトを JP に設定
setxkbmap jp

# 設定を永続化
echo 'setxkbmap jp' >> ~/.bashrc
source ~/.bashrc
```

システム設定ファイルにも反映させる：

```bash
sudo tee /etc/default/keyboard << EOF
XKBLAYOUT="jp"
XKBMODEL="pc105"
XKBVARIANT=""
XKBOPTIONS=""
BACKSPACE="guess"
EOF
```

### 5. 確認

```bash
# キーボードレイアウトの確認
setxkbmap -query

# 入力メソッドの確認
fcitx-remote -n
```

## 結果

✅ VS Code での日本語入力が機能  
✅ 日本語キーボード（JIS）の記号入力が正常動作  
✅ シェルフからの起動で自動的に X11 モード で起動
