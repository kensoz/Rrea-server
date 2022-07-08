# 🌞 Rrea-Server

![Node](https://img.shields.io/badge/Node.js-v18.0.0-fb7185.svg?logo=&style=flat-square)  ![Coverage](https://img.shields.io/badge/Coverage-92.77%25-84CC16.svg?style=flat-square)  ![npm](https://img.shields.io/badge/npm-0.6.0-84CC16.svg?style=flat-square)  ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

Demo:  **[Client]() | [Admin]()**  ・  GitHub:  **[Client](https://github.com/kensoz/Rrea-client) | [Admin](https://github.com/kensoz/Rrea-admin) | [Client-Collection](https://github.com/kensoz/Rrea-client-collection)**

##### Rrea-Serverとは

メンバー位置と情報の管理システムのAPIサーバ(BE Server)です。\
APIサーバ(Server)、[メンバー用サイト(Client)](https://github.com/kensoz/Rrea-client)、[管理者用サイト(Admin)](https://github.com/kensoz/Rrea-admin)にFEとBEを分けている仕組みです。

##### メイン機能

+ ユーザー認証&権限システム、JWT認証、パスワード暗号化
+ RESTful API & GraphQL提供
+ DB、エラー、ログ処理のサーバー側の基本機能
+ Koa.jsプロジェクトTypeScript化
+ rollup.jsによるバンドル、Jestによる自動テスト



## スタック

- ⚙️ TypeScript
- ⚡️ Koa.js
- 💽 mangoDB + mongoose
- 📑 Eslint + Prettier
- 🔌 Jest（Coverage : **92.77%**）
- 🏭 rollup.js
- 📦 Yarn
- 🔻 RESTful API & GraphQL



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
