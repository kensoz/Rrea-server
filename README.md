# Rrea-Server

### Rreaとは

rreaとはメンバー位置管理システムで
メンバー用のチームメンバー確認サイトと、管理者用の管理サイトのFE
APIを提供しているBE、二つの部分で構成

### メイン機能

+ ユーザー認証システム
+ APIサーバ－（RESTful API & GraphQL）
+ データベース接続、ログ処理などBEの基本機能

### スタック

- ⚙️ TypeScript
- ⚡️ Koa.js
- 💽 mangoDB + mongoose
- 📑 Eslint + Prettier
- 🔌 Jest
- 📦 Yarn
- 🔻 RESTful API & GraphQL

### 使用

###### インストール

```bash
yarn install
```

###### 開発（NODE_ENV=development）

```bash
yarn dev
```

###### TSコンパイラ（TSC）

```bash
yarn compile
```

###### プロジェクトコンパイラ

```bash
yarn build
```

###### テスト

```bash
yarn test
```

###### プロジェクト起動（NODE_ENV=production）

```bash
yarn start
```

###### ログクリア

```bash
yarn resetLog
```

