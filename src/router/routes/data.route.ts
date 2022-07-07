import Router from 'koa-router'
import dataController from '../../controllers/data.controller'

// ----- データ router -----

const dataRouter = new Router()

dataRouter.post('/', dataController)

export default dataRouter
