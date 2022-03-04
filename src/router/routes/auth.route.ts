import Router from 'koa-router'
import authController from '../../controllers/auth.controller'

const authRouter = new Router()

// ログイン
authRouter.post('/', authController.login)

// ログアウト
authRouter.delete('/:id', authController.logout)

// すべての管理者情報取得
authRouter.get('/', authController.authFind)

// 管理者のパスワード修正
authRouter.patch('/:id', authController.authUpdate)

export default authRouter
