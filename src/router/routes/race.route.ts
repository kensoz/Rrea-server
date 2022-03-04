import Router from 'koa-router'
import raceController from '../../controllers/race.controller'

const raceRouter = new Router()

// 読み取り
raceRouter.get('/', raceController.raceFind)

// 追加
raceRouter.post('/', raceController.raceAdd)

// 更新
raceRouter.put('/:value', raceController.raceUpdate)

// 削除
raceRouter.delete('/:value', raceController.raceDelete)

export default raceRouter
