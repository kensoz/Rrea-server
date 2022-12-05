// ######################################################
// *
// * 🌞Rrea-Server
// * by renhou 2022
// *
// * github: https://github.com/kensoz/Rrea-server
// * Koa.js(TypeScript) + rollup + Jest + mongoose
// * providing Restful api & GraphQL
// *
// ######################################################

import Koa from 'koa'
import koaBody from 'koa-body'
import koaLogger from 'koa-logger'
import config from './config'
import routers from './router'
import apolloServer from './graphql'
import error from './error'
import jwt from 'koa-jwt'
import { logInfo } from './log'
import { connectMongoDB } from './database'
import jwtErrorHandle from './middleware/jwt/jwtErrorHandle'

const app = new Koa()

// データベース起動
connectMongoDB()

// jwt認証
app.use(jwtErrorHandle)
app.use(
  jwt({
    secret: config.secret,
  }).unless({
    path: [/\/graphql/, /\/auth/, /\/data/, /\/form/],
  }),
)

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
export default app.listen(config.host, (): void => {
  console.log(`server running on port ${config.host} 🚀`)
  console.log(process.env.NODE_ENV === 'development' ? 'Rrea-server dev 💪' : 'Rrea-serverへようこそ！🤣')
  process.env.NODE_ENV === 'development' || logInfo('production server start!')
})
