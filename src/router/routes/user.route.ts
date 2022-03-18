import Router from 'koa-router'
import userController from '../../controllers/user.controller'

const userRouter = new Router()

// 読み取り
userRouter.get('/', userController.userFind)

// 追加
userRouter.post('/', userController.userAdd)

// 更新
userRouter.put('/:id', userController.userUpdate)

// 削除
userRouter.delete('/:id', userController.userDelete)

export default userRouter
