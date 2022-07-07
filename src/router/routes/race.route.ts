import Router from 'koa-router'
import raceController from '../../controllers/race.controller'
import checkPermission from '../../middleware/jwt/checkPermission'

// ----- 種族 router -----

const raceRouter = new Router()

// 読み取り
raceRouter.get('/', raceController.raceFind)

// 追加
raceRouter.post('/', checkPermission, raceController.raceAdd)

// 更新
raceRouter.put('/:value', checkPermission, raceController.raceUpdate)

// 削除
raceRouter.delete('/:value', checkPermission, raceController.raceDelete)

export default raceRouter
