import Router from 'koa-router'
import areaController from '../../controllers/area.controller'

// ----- エリア router -----

const areaRouter = new Router()

areaRouter.get('/', areaController)

export default areaRouter
