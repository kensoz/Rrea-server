import config from '../../config'
import jsonwebtoken from 'jsonwebtoken'
import { logError } from '../../log'
import { Context, Next } from 'koa'
import type { IJwt } from '../../types/auth.type'

/**
 *  jwt 権限処理ミドルウェア
 *  @param ctx koaコンテンツ
 *  @param next Next = () => Promise<any>
 */

export default (ctx: Context, next: Next): Promise<Next> | undefined => {
  const token = ctx.header.authorization?.split(' ')[1] as string

  try {
    const authorization = jsonwebtoken.verify(token, config.secret) as IJwt

    if (authorization.permission === 2) {
      // guest
      logError('10010 : JWT権限足りません')

      ctx.status = 400
      ctx.body = {
        code: 10010,
        message: 'JWT権限足りません',
        result: '',
      }
    } else {
      // admin&master
      return next()
    }
  } catch {
    ctx.app.emit('error', 10004, ctx)
  }
}
