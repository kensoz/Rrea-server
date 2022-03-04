import Router from 'koa-router'
import dataController from '../../controllers/data.controller'

const dataRouter = new Router()

dataRouter.post('/', dataController)

export default dataRouter
