import Router from 'koa-router'
import config from '../config'
import formRouter from './routes/form.route'
import dataRouter from './routes/data.route'
import jobRouter from './routes/job.route'
import raceRouter from './routes/race.route'
import userRouter from './routes/user.route'
import areaRouter from './routes/area.route'
import nameRouter from './routes/name.route'
import authRouter from './routes/auth.route'

const router = new Router()
router.prefix(config.apiPrefix)

// client
router.use('/form', formRouter.routes(), formRouter.allowedMethods())
router.use('/data', dataRouter.routes(), dataRouter.allowedMethods())

// admin
router.use('/job', jobRouter.routes(), jobRouter.allowedMethods())
router.use('/race', raceRouter.routes(), raceRouter.allowedMethods())
router.use('/user', userRouter.routes(), userRouter.allowedMethods())
router.use('/area', areaRouter.routes(), areaRouter.allowedMethods())
router.use('/name', nameRouter.routes(), nameRouter.allowedMethods())
router.use('/auth', authRouter.routes(), authRouter.allowedMethods())

export default router
