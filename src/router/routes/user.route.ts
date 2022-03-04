import Router from 'koa-router'
import userController from '../../controllers/user.controller'

const userRouter = new Router()

// 読み取り
userRouter.get('/', userController.userFind)

// 追加
userRouter.post('/', userController.userAdd)

// 更新
userRouter.put('/:numberCode', userController.userUpdate)

// 削除
userRouter.delete('/:numberCode', userController.userDelete)

export default userRouter
