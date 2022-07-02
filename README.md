# Rrea-Server

![Coverage](https://img.shields.io/badge/Coverage-95%25-84CC16.svg?style=flat-square)  ![npm](https://img.shields.io/badge/npm-0.3.1-84CC16.svg?style=flat-square)  ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

Demo:  **[Client]() | [Admin]()**  ・  GitHub:  **[Client](https://github.com/kensoz/Rrea-client) | [Admin](https://github.com/kensoz/Rrea-admin) | [Client-Collection](https://github.com/kensoz/Rrea-client-collection)**

##### Rrea-Serverとは

メンバー位置と情報の管理システムのAPIサーバ(BE Server)です。\
APIサーバ(Server)、[メンバー用サイト(Client)](https://github.com/kensoz/Rrea-client)、[管理者用サイト(Admin)](https://github.com/kensoz/Rrea-admin)にFEとBEを分けている仕組みです。

##### メイン機能

+ ユーザー認証システム
+ RESTful API & GraphQL API提供
+ DB接続、ログ処理などBEの基本機能



## スタック

- ⚙️ TypeScript
- ⚡️ Koa.js
- 💽 mangoDB + mongoose
- 📑 Eslint + Prettier
- 🔌 Jest
- 🏭 rollup.js
- 📦 Yarn
- 🔻 RESTful API & GraphQL API



## 使用

##### インストール

```bash
yarn install
```

##### 開発（Dev）

[http://localhost:7001](http://localhost:7001)で起動

```bash
yarn dev
```

##### ビルド

rollup.jsによるバンドル、distフォルダを作成

```bash
yarn build
```

##### テスト

```bash
yarn test
```

##### プロジェクト起動（Prod）

```bash
yarn start
```



## 資料

+ [エラーコード対照表](https://github.com/kensoz/Rrea-server/blob/master/docs/error.md)
