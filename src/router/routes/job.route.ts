import Router from 'koa-router'
import jobController from '../../controllers/job.controller'

const jobRouter = new Router()

// 読み取り
jobRouter.get('/', jobController.jobFind)

// 追加
jobRouter.post('/', jobController.jobadd)

// 更新
jobRouter.put('/:value', jobController.jobUpdate)

// 削除
jobRouter.delete('/:value', jobController.jobdelete)

export default jobRouter
