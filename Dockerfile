# ----- Rrea-server -----
# Node.jsイメージ指定
FROM node:18.0.0

# 作者指定
LABEL maintainer="renhou"

# ワークスペース指定
WORKDIR /usr/src/Rrea-server

# package.jsonとyarn.lockコピー
COPY ["package.json", "yarn.lock", "./"]

# インストール
RUN yarn

# ファイルコピー
COPY . .

# ビルド
RUN yarn build

# ポートの解放
EXPOSE 7002

# コンテナ実行
ENTRYPOINT [ "yarn", "start" ]
