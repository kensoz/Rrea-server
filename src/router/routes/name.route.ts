import Router from 'koa-router'
import nameController from '../../controllers/name.controller'

const nameRouter = new Router()

nameRouter.get('/', nameController)

export default nameRouter
