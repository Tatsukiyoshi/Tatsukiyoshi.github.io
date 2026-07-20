---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年7月下期
---
2026年7月下期（2026/7/18～2026/7/31）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- 対象期間中の更新なし

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v9.7.1〜v9.7.4: GitHub Actions secrets/variablesの整理、Instagram収集タイムアウト診断の強化、Amebaブログ新着判定の不具合修正

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

- 対象期間中の更新なし

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v9.7.1〜v9.7.4
- v9.7.1: CIログの日付・URL等がGitHub Actionsのシークレットマスキングにより無差別にマスクされる不具合を修正。曜日番号を保持する`OG_SYNC_WEEKDAYS`・`WEB_SEARCH_SYNC_WEEKDAYS`をRepository secretsからRepository variablesへ移行（#1347, 7/18）
- v9.7.2: Instagram投稿収集で投稿リンク取得がタイムアウトした際の原因切り分け用に、プロフィールURL・遷移先URLをログに追加。Instagramアカウント登録方針（公式アカウントのみ）をドキュメント化（#1348, 7/18）
- v9.7.3: GitHub Actions secretsを棚卸しし、非機密な値（本番URL・SMTP設定・Vercel組織/プロジェクトID）をRepository variablesへ移行。未使用secrets（廃止済みの`ARTIST_MBID`等3件）を削除（#1351, 7/18）
- v9.7.4: TOP画面の新着投稿でAmebaブログが正しく表示されないバグを修正。公式ブログ未登録メンバーの無関係な投稿の誤検出により、公式ブログを持つメンバーの新着が0件扱いになっていた不具合を解消（#1356, 7/18）
