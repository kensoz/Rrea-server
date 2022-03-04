import Router from 'koa-router'
import formController from '../../controllers/form.controller'

const formRouter = new Router()

formRouter.get('/', formController)

export default formRouter
