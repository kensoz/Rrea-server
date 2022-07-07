import Router from 'koa-router'
import userController from '../../controllers/user.controller'
import checkPermission from '../../middleware/jwt/checkPermission'

// ----- メンバー router -----

const userRouter = new Router()

// 読み取り
userRouter.get('/', userController.userFind)

// 追加
userRouter.post('/', checkPermission, userController.userAdd)

// 更新
userRouter.put('/:id', checkPermission, userController.userUpdate)

// 削除
userRouter.delete('/:id', checkPermission, userController.userDelete)

export default userRouter
