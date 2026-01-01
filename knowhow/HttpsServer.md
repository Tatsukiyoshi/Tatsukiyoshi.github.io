---
title:  HTTPS-enabled Local Development Server
layout: single
classes: wide
sidebar:
  nav: environment
---
# 🔒 HTTPS対応 ローカル開発サーバー構築・起動手順（PWA対応 & Bun併記）

## 1. 概要
モバイル、Webアプリケーション、そして**PWA (Progressive Web App)** の開発に必要なHTTPS対応のローカル開発サーバー構築手順を整理します。PWA対応を考慮し、HTTPS証明書の設定を必須とします。

---

## 2. 共通事項マトリックス（フレームワーク横断比較）

ローカル環境でのHTTPS化とPWA対応の基本的なステップには共通性があります。

| 項目 | Flutter (Web/PWA) | React Native (Web/PWA) | Astro / React (Viteベース) | Next.js |
| :--- | :--- | :--- | :--- | :--- |
| **PWA対応の重要性** | **高** (Web版の配信に必須) | **高** (Web版の配信に必須) | **高** (デフォルトで考慮) | **高** (静的エクスポートで考慮) |
| **開発サーバー** | DartVM (http_server) | Metro Bundler | Vite Dev Server | Next.js Dev Server |
| **HTTPS化の一般的なアプローチ** | Dartコード内での**TLS設定** | 外部プロキシ**(`mkcert`/`ngrok`)**利用が一般的 | **Vite設定**ファイル内でのTLS設定 | 外部プロキシ**(`mkcert`/`https-proxy`)**利用が一般的 |
| **証明書作成ツール** | **mkcert** | **mkcert** | **mkcert** | **mkcert** |
| **パッケージ管理** | Dart/Flutter CLI | npm/yarn/**Bun** | npm/yarn/**Bun** | npm/yarn/**Bun** |

### 2.1. 共通手順：自己署名証明書の作成（`mkcert`推奨）

ローカルCAを作成し、信頼された証明書を生成するために、**`mkcert`**の使用を推奨します。

| 手順 | macOS (Terminal) | Windows (PowerShell) |
| :--- | :--- | :--- |
| **`mkcert`のインストール** | `brew install mkcert` | `choco install mkcert` |
| **ローカルCAのインストール** | `mkcert -install` | `mkcert -install` |
| **証明書の生成** | `mkcert localhost 127.0.0.1` | `mkcert localhost 127.0.0.1` |

*生成されるファイル名（例：`localhost+1-key.pem`と`localhost+1.pem`）は、以降の手順で共通して使用します。

---

## 3. フレームワーク別：構築・起動手順

### 3.1. Flutter (Web/PWA対応 - `http_server`利用)

**PWA対応**のため、ビルドされたWebアセット（通常`build/web`ディレクトリ）を`http_server`でHTTPS配信します。

| 手順 | macOS (Terminal) | Windows (PowerShell) |
| :--- | :--- | :--- |
| **ビルド** | `flutter build web` | `flutter build web` |
| **依存関係の追加** | `dart pub add http_server` | `dart pub add http_server` |
| **Dartコードの設定** | `http_server`で`build/web`を配信するコード内で`SecurityContext`を設定します。 | `http_server`で`build/web`を配信するコード内で`SecurityContext`を設定します。 |
| **コード例** | ```dart // ... final context = SecurityContext.defaultContext ..usePrivateKey('path/to/key.pem') ..useCertificateChain('path/to/cert.pem'); final server = await HttpServer.bindSecure(InternetAddress.loopbackIPv4, 8080, context); // ... var virtualDirectory = VirtualDirectory('build/web'); // ... ``` | ```dart // ... final context = SecurityContext.defaultContext ..usePrivateKey('path/to/key.pem') ..useCertificateChain('path/to/cert.pem'); final server = await HttpServer.bindSecure(InternetAddress.loopbackIPv4, 8080, context); // ... var virtualDirectory = VirtualDirectory('build/web'); // ... ``` |
| **サーバー起動** | `dart run path/to/server.dart` | `dart run path/to/server.dart` |

### 3.2. React Native (Web/PWA対応)

React Nativeは通常モバイル開発ですが、Web対応（例: Expo Web）の際、Vite/Webpack Dev Serverの設定が必要になります。HTTPS対応はViteベースの手順（3.2）に準じます。

| 手順 | macOS (Terminal) | Windows (PowerShell) |
| :--- | :--- | :--- |
| **Web依存関係の追加** | `bun add -d expo-web` など | `bun add -d expo-web` など |
| **HTTPS設定** | 3.2. React/Astro (Viteベース) の手順を参照。 | 3.2. React/Astro (Viteベース) の手順を参照。 |
| **起動 (PWA)** | `bun run web` (Expo Webの場合) | `bun run web` (Expo Webの場合) |

### 3.3. React / Astro (Viteベースのプロジェクト)

Vite Dev Serverの`vite.config.js`内で証明書ファイルを指定します。PWA対応プラグイン（例：`vite-plugin-pwa`）が容易に導入できます。

| 手順 | macOS (Terminal) | Windows (PowerShell) |
| :--- | :--- | :--- |
| **依存関係の追加** | `bun add -d @vitejs/plugin-basic-ssl` | `bun add -d @vitejs/plugin-basic-ssl` |
| **`vite.config.js`の設定** | パスはUnix形式（`/`）で記述します。 | パスはUnix形式（`/`）で記述します。 |
| **設定例** | ```javascript // ... server: { https: { key: './path/to/key.pem', cert: './path/to/cert.pem', } } // ... ``` | ```javascript // ... server: { https: { key: './path/to/key.pem', cert: './path/to/cert.pem', } } // ... ``` |
| **起動** | `bun run dev` | `bun run dev` |

### 3.4. Next.js

Next.jsは外部プロキシを利用してHTTPS化します。PWA対応には`next-pwa`パッケージなどが使用されます。

| 手順 | macOS (Terminal) | Windows (PowerShell) |
| :--- | :--- | :--- |
| **外部プロキシインストール** | `bun add -g local-ssl-proxy` | `bun add -g local-ssl-proxy` |
| **`package.json`のスクリプト修正** | スクリプトは共通。 | スクリプトは共通。 |
| **スクリプト例** | ```json "scripts": { "dev": "next dev", "dev:https": "bun run dev & local-ssl-proxy --source 8443 --target 3000 --cert localhost+1.pem --key localhost+1-key.pem" } ``` | ```json "scripts": { "dev": "next dev", "dev:https": "bun run dev & local-ssl-proxy --source 8443 --target 3000 --cert localhost+1.pem --key localhost+1-key.pem" } ``` |
| **起動** | `bun run dev:https` | `bun run dev:https` |