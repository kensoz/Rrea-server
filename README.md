# 🌞 Rrea-Server

![Node](https://img.shields.io/badge/Node.js-v18.0.0-fb7185.svg?logo=&style=flat-square)  [![codecov](https://codecov.io/gh/kensoz/Rrea-server/branch/master/graph/badge.svg?token=7ZTUS6Z4WQ)](https://codecov.io/gh/kensoz/Rrea-server)  ![npm](https://img.shields.io/badge/npm-2.0.0-84CC16.svg?style=flat-square)  ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

Demo:  **[Client](http://rrea-client.live) | [Admin](http://rrea-admin.live)**  ・  GitHub:  **[Client](https://github.com/kensoz/Rrea-client) | [Admin](https://github.com/kensoz/Rrea-admin) | [Client-Collection](https://github.com/kensoz/Rrea-client-collection)**

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
- 🔌 Jest
- 🔩 GitHub Actions + Codecov
- 🏭 rollup.js
- 📦 Yarn
- 🔻 RESTful API & GraphQL



## システムアーキテクチャー

![system](https://s2.loli.net/2022/07/16/Y7BqVkciA9MCLQZ.jpg)



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
+ [Docker-Compose.yml](https://github.com/kensoz/Rrea-server/blob/master/docs/docker-compose.yml)
+ [データ](https://github.com/kensoz/Rrea-server/tree/master/docs/Rrea-database)
