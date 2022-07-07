import Router from 'koa-router'
import jobController from '../../controllers/job.controller'
import checkPermission from '../../middleware/jwt/checkPermission'

// ----- 職務 router -----

const jobRouter = new Router()

// 読み取り
jobRouter.get('/', jobController.jobFind)

// 追加
jobRouter.post('/', checkPermission, jobController.jobadd)

// 更新
jobRouter.put('/:value', checkPermission, jobController.jobUpdate)

// 削除
jobRouter.delete('/:value', checkPermission, jobController.jobdelete)

export default jobRouter
