import Koa from 'koa'
import koaBody from 'koa-body'
import koaLogger from 'koa-logger'

import config from './config'
import routers from './router'
import apolloServer from './graphql'
import error from './error'
import { logInfo } from './log'
import { connectMongoDB } from './database'

const app = new Koa()

// データベース起動
connectMongoDB()

// ミドルウェア
app.use(koaLogger())
app.use(koaBody())
app.use(routers.routes()).use(routers.allowedMethods())

// エラー、ログ処理
app.on('error', error)
app.on('log', logInfo)

// Apollo Graphql起動
apolloServer(app)

// サーバ起動と導出
export default app.listen(config.host, async (): Promise<void> => {
  console.log(`server running on port ${config.host} 🚀`)
  process.env.NODE_ENV === 'production' && logInfo('server start')
})
