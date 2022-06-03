# Rrea-Server

![a Node.js Project](https://img.shields.io/badge/Node.js-Back--End-339933.svg?logo=node.js&style=flat-square) ![License](https://img.shields.io/badge/License-MIT-0284c7.svg?logo=&style=flat-square)

Demo:  **[Client]() | [Admin]()**     GitHub:  **[Client]() | [Admin]() | [Client-Collection]()**

##### Rrea-Serverとは

メンバー位置と情報の管理システムのAPIサーバ(BE Server)です。\
APIサーバ(Server)、[メンバー用サイト(Client)]()、[管理者用サイト(Admin)]()に分けている仕組みです。

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

http://localhost:7001で開発環境を実行

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
