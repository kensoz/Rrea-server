import Router from 'koa-router'
import areaController from '../../controllers/area.controller'

const areaRouter = new Router()

areaRouter.get('/', areaController)

export default areaRouter
