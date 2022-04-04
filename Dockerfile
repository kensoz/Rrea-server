# イメージ指定
FROM node:16.3.0

# 作者指定
LABEL maintainer="kensoz"

# ワークスペース指定
WORKDIR /usr/src/server

# package.jsonとyarn.lockコピー
COPY ["package.json", "yarn.lock", "./"]

# インストール
RUN yarn

# ファイルコピー
COPY . .

# ビルド
RUN yarn build

# ポートの解放
EXPOSE 7001

# コンテナ実行
ENTRYPOINT [ "yarn", "start" ]
