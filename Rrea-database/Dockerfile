# ----- database -----
# イメージ指定
FROM mongo:latest

# 作者指定
LABEL maintainer="renhou"

# 管理者アカウント作者
ENV MONGO_INITDB_ROOT_USERNAME root

# 管理者パスワード作者
ENV MONGO_INITDB_ROOT_PASSWORD root

# 使う予定のデータベース名称
ENV MONGO_INITDB_DATABASE rrea

# コンテナ起動の時、スクリプト実行
ADD mongo-init.js /docker-entrypoint-initdb.d/