---
title:  How to get images and caption from instagram
layout: single
classes: wide
sidebar:
  nav: programming
---
##  Instagram投稿取得への道
検証日：[<span style="color: red;">*2026/04/09*</span>]

## ログイン問題の回避
- ログインしないままアクセスすると、ログインを都度要求されてしまい、取得がうまくいかないことから、一度Webからログインした際の情報を保持し、ログイン状態を継続していると見せかけて取得できるようにする

- 情報保持するためのスクリプト
  ```js
  import { chromium } from 'playwright';

  async function saveAuthState() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.instagram.com/accounts/login/');

    console.log('ブラウザで手動ログインを完了させてください（1分間待ちます）...');
    
    // ログインが完了してホーム画面などに行くまで待つ時間を設ける
    await page.waitForTimeout(60000); 

    // ログイン済みの状態（Cookie等）をファイルに保存
    await context.storageState({ path: 'auth_state.json' });
    console.log('ログイン状態を auth_state.json に保存しました！');

    await browser.close();
  }

  saveAuthState();
  ```

##  投稿取得の検証
Playwrightで画像を取得することができるか検証（取得に先立ち、前項で取得した情報を読み込む）
- Geminiと検討して作成したスクリプトでは、投稿ページのURLを起点にして、ページ内の画像およびキャプション、関連投稿ページの画像を取得

- 検証スクリプト
  ```js
  import { chromium } from 'playwright';
  import * as fs from 'fs';
  import path from 'path';

  async function absoluteCapture(url: string) {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ storageState: 'auth_state.json' });
    const page = await context.newPage();

    console.log(`アクセス開始: ${url}`);

    // 1. 【網を張る】ブラウザが受信する全レスポンスを監視
    page.on('response', async (response) => {
      const responseUrl = response.url();
      // 画像サーバー(scontent)からの画像データ(image/jpeg)だけを狙う
      if (responseUrl.includes('scontent') && response.request().resourceType() === 'image') {
        try {
          const buffer = await response.body();
          // 小さすぎるファイル（22バイトのエラー等）は無視
          if (buffer.length > 5000) { 
            const filePath = path.resolve(process.cwd(), `captured_net_${Date.now()}.jpg`);
            fs.writeFileSync(filePath, buffer);
            console.log(`--- 【通信から直接奪取成功】 ---`);
            console.log(`サイズ: ${buffer.length} bytes`);
            console.log(`保存先: ${filePath}`);
          }
        } catch (e) {
          // bodyが取得できない（古い形式など）はスルー
        }
      }
    });

    try {
      // 2. ページを開く（ここで画像が読み込まれ、上の 'response' イベントが発火する）
      await page.goto(url, { waitUntil: 'load', timeout: 60000 });
      
      // --- 既存の page.goto の後に追加 ---
      await page.goto(url, { waitUntil: 'load' });
      
      // キャプション（本文）をHTMLから抽出
      const caption = await page.evaluate(() => {
        // 1. og:descriptionメタタグから抜く（一番確実で綺麗）
        const metaTag = document.querySelector('meta[property="og:description"]');
        if (metaTag) return metaTag.getAttribute('content');

        // 2. もしメタタグがなければ、投稿本文の要素を探す（予備）
        // 2026年現在の構造に合わせて調整
        const h1Element = document.querySelector('h1'); 
        return h1Element ? h1Element.textContent : '取得失敗';
      });

      console.log('--- 取得したキャプション ---');
      console.log(caption);

      // JSONとして保存しておく
      fs.writeFileSync(`caption_${Date.now()}.txt`, caption || '');

      // 3. 画像が完全に読み込まれるまで少しスクロールして待つ
      await page.mouse.wheel(0, 500);
      await page.waitForTimeout(10000);

      console.log('キャプチャを終了します。');
    } catch (e) {
      console.error('エラー:', e);
    } finally {
      await browser.close();
    }
  }

  absoluteCapture('投稿されたページのURL');
  ```

- 前提条件
  ```sh
  npm install playwright typescript ts-node @types/node
  npx playwright install chromium
  ```
   