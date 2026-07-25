---
layout: ../../../../layouts/DigestLayout.astro
title: 2026年7月下期
---
2026年7月下期（2026/7/18～2026/7/31）に[リスキリング（プログラミング）](https://tatsukiyoshi.github.io/)として取り組んだことをまとめました。

# Topic

## リスキリング
- **＜開発ツール＞** Windows Insiderで、[Windows 11 Insider Experimental Preview Build 26300.8935](https://blogs.windows.com/windows-insider/2026/07/20/announcing-new-builds-for-20-july-2026/)にアップデート。ウォーターマークがBuild 26300から復活
- **＜開発ツール＞** [Rancher Desktop 1.23.1](https://rancherdesktop.io/)、[Zed 1.12.0](https://zed.dev/windows)@Windows、[Visual Studio Code 1.130.0](https://code.visualstudio.com/)、[PowerShell 7.6.3](https://github.com/PowerShell/PowerShell)に更新

## 営業日報システム
- 対象期間中の更新なし

## 近況確認アプリ
- v9.8.0〜v9.10.5: イベント時刻対応・手動放送回登録の機能拡張に続き、Instagram Reel判定・TikTok新着集計・Amebaブログ新着表示など新着投稿まわりの不具合修正が中心。Windows版インストーラのInno Setupを7へアップグレード

詳細は、[GitHub](https://tatsukiyoshi.github.io/)を参照ください

# Daily

## リスキリング

##  【7/21】
- **＜開発ツール＞** [Windows 11 Insider Experimental Preview Build 26300.8935 (Quality Update)](https://blogs.windows.com/windows-insider/2026/07/20/announcing-new-builds-for-20-july-2026/)にアップデート
  - ウォーターマーク（右下のバージョン情報）がBuild 26300から復活
- **＜開発ツール＞** [Rancher Desktop 1.23.1](https://rancherdesktop.io/)に更新

##  【7/23】
- **＜開発ツール＞** Windowsで、[Zed 1.12.0](https://zed.dev/windows)に更新

##  【7/25】
- **＜開発ツール＞** [Visual Studio Code 1.130.0](https://code.visualstudio.com/)に更新
- **＜開発ツール＞** [PowerShell 7.6.3](https://github.com/PowerShell/PowerShell)に更新

## 営業日報システム

- 対象期間中の更新なし

## 近況確認アプリ

### v9.7.1〜v9.7.4
- v9.7.1: CIログの日付・URL等がGitHub Actionsのシークレットマスキングにより無差別にマスクされる不具合を修正。曜日番号を保持する`OG_SYNC_WEEKDAYS`・`WEB_SEARCH_SYNC_WEEKDAYS`をRepository secretsからRepository variablesへ移行（#1347, 7/18）
- v9.7.2: Instagram投稿収集で投稿リンク取得がタイムアウトした際の原因切り分け用に、プロフィールURL・遷移先URLをログに追加。Instagramアカウント登録方針（公式アカウントのみ）をドキュメント化（#1348, 7/18）
- v9.7.3: GitHub Actions secretsを棚卸しし、非機密な値（本番URL・SMTP設定・Vercel組織/プロジェクトID）をRepository variablesへ移行。未使用secrets（廃止済みの`ARTIST_MBID`等3件）を削除（#1351, 7/18）
- v9.7.4: TOP画面の新着投稿でAmebaブログが正しく表示されないバグを修正。公式ブログ未登録メンバーの無関係な投稿の誤検出により、公式ブログを持つメンバーの新着が0件扱いになっていた不具合を解消（#1356, 7/18）

### v9.8.0〜v9.10.5
- v9.8.0: TOP画面のAmeba新着投稿判定を、当日の暦日一致から新着ウィンドウ（前々回の定期収集〜直近の収集完了時刻）判定に変更。手動収集を挟んでも取りこぼしなく表示され、1メンバーが複数件投稿している場合は全件表示されるよう改善（#1387, 7/20）
- v9.9.0: イベントに時刻を持たせる機能を追加。ライブの開演時刻が年表イベントカードに自動反映されるほか、手動登録イベントも日付に加えて時刻を指定できるように改善（#1381, 7/20）
- v9.10.0: 手動放送回登録スクリプトを拡張。日直メンバーの指定・コマンドライン引数での入力ファイル指定に対応し、番組ごとに別ファイルを用意して複数番組をまとめて登録できるように改善。モーニング女学院向けにエピソードタイトルの指定にも対応（#1394, 7/20）
- Windows版インストーラのInno Setupを6から7へアップグレード。x64ネイティブ対応・MAX_PATH制限撤廃を含むメジャーアップデート（#1406, 7/25）
- v9.10.1: Instagram投稿のReel判定がグリッド内リンクの実際の形式と食い違い、ユーザー名プレフィックス付きのReelを検出できないバグを修正。既存データを補完するバックフィル用スクリプトも追加（#1373, 7/22）
- v9.10.2: Instagram Reelフラグ バックフィルCLIの指定方法を、内部IDでなくInstagramの実アカウント名を指定する形に修正（#1400, 7/23）
- v9.10.3: TikTok投稿の新着通知で複数メンバーが写る投稿の集計漏れを解消。あわせて、新着投稿セクションの各SNS一覧画面へのリンクが新着0件の日に消えてしまう不具合を修正（#1403, #1404, 7/24）
- v9.10.4: 新着投稿セクション（Ameba・TikTok・YouTube）で、投稿された日時ではなく実際に収集された日時を基準に新着判定するよう修正。RSS反映やAPI取得が遅れた投稿が新着から漏れる不具合を解消（#1408, 7/24）
- v9.10.5: Amebaブログの新着投稿がトップページに表示されない不具合を修正。既存データの補正用バックフィルスクリプトも合わせて修正（#1414, 7/25）
