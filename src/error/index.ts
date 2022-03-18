import { Context } from 'koa'
import { logError } from '../log'
import errorHandle from './errorHandle'

/**
 *  エラー処理
 *  @param {number}  code グロバルエラーコード
 *  @param {*} ctx koaコンテンツ
 */

const error = async (code: number, ctx: Context): Promise<void> => {
  const { status, handle, log } = errorHandle

  ctx.status = status
  ctx.body = await handle(code)

  logError(log)
  console.log(log)
}

export default error
