import Router from 'koa-router'
import formController from '../../controllers/form.controller'

// ----- フォーム router -----

const formRouter = new Router()

formRouter.get('/', formController)

export default formRouter
