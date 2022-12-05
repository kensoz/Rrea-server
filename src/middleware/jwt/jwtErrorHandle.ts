import { logError } from '../../log'
import { Context, Next } from 'koa'

/**
 *  jwt 401処理ミドルウェア
 *  @param ctx koaコンテンツ
 *  @param next Next = () => Promise<any>
 */

// Koa.jsのタイプ対応していないため
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (ctx: Context, next: Next): Promise<any> => {
  return next().catch((err): void => {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        code: 10009,
        message: 'JWT認証失敗',
        result: '',
      }

      logError('10009 : JWT認証失敗')
    } else {
      logError('9999 : プログラムエラー')
    }
  })
}
