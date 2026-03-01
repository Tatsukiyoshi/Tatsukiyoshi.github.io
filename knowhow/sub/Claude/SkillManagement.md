---
title:  共通スキルの dotfiles 管理手順
layout: single
sidebar:
  nav: main
---
# 共通スキルの dotfiles 管理手順

## 概要

`~/.claude/skills/` に置いたグローバルスキルを GitHub の dotfiles リポジトリで管理し、
複数端末・複数リポジトリで同じスキルを使えるようにする。

---

## 初回セットアップ（現在の端末）

### 1. dotfiles リポジトリを作成する

GitHub で `dotfiles`（または `claude-config`）という名前のリポジトリを新規作成する。

### 2. スキルをリポジトリに移動する

```bash
git clone https://github.com/<your-name>/dotfiles.git ~/dotfiles
mkdir -p ~/dotfiles/claude/skills
cp -r ~/.claude/skills/* ~/dotfiles/claude/skills/
```

### 3. セットアップスクリプトを作成する
~/dotfiles/setup-claude.sh を作成する：

```bash
#!/bin/bash
mkdir -p ~/.claude/skills
cp -r "$(dirname "$0")/claude/skills/"* ~/.claude/skills/
echo "Claude skills installed."

chmod +x ~/dotfiles/setup-claude.sh
```

### 4. コミット＆プッシュ

```bash
cd ~/dotfiles
git add claude/ setup-claude.sh
git commit -m "chore: Claude Code 共通スキルを追加する"
git push origin main
```

##  別端末への適用

```bash
git clone https://github.com/<your-name>/dotfiles.git ~/dotfiles
~/dotfiles/setup-claude.sh
```

##  スキルを更新したとき

### dotfiles リポジトリを更新

```bash
cp -r ~/.claude/skills/<skill-name>/ ~/dotfiles/claude/skills/
cd ~/dotfiles
git add .
git commit -m "chore: <skill-name> スキルを更新する"
git push origin main
```

### 他端末で取り込む

```bash
cd ~/dotfiles && git pull
~/dotfiles/setup-claude.sh
```

---
**構成イメージ**

```
dotfiles/
├── claude/
│   └── skills/
│       ├── implement-issue/
│       │   └── SKILL.md
│       ├── react-best-practices/
│       │   ├── SKILL.md
│       │   └── rules/
│       └── review-pr/
│           └── skill.md
└── setup-claude.sh
```

##  プロジェクト固有スキルとの使い分け

種別|管理場所|例
---|-------|---
共通スキル|~/dotfiles/claude/skills/ → ~/.claude/skills/|review-pr, implement-issue
プロジェクト固有スキル|.claude/skills/（リポジトリ内）|next-issue（#2・#82 参照を含む）

同名スキルがある場合はプロジェクト側が優先される。