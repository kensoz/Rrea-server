import Router from 'koa-router'
import nameController from '../../controllers/name.controller'

// ----- ネーム router -----

const nameRouter = new Router()

nameRouter.get('/', nameController)

export default nameRouter
