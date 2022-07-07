import { Context } from 'koa'
import { logError } from '../log'
import type { IResponse } from '../types/ctx.type'

// ----- サーバーエラー処理 -----
// エラーコードはerror.mdに参照してください

// デフォルトデータ
let status: number = 500
let body: IResponse = {
  code: 9999,
  message: 'プログラムエラー',
  result: '',
}

/**
 *  エラー処理
 *  @param {number}  code グロバルエラーコード
 *  @param {Context} ctx koaコンテンツ
 */

const error = async (code: number, ctx: Context): Promise<void> => {
  body.code = code

  switch (code) {
    case 10022:
      status = 400
      body.message = '無効なID'
      break
    case 10020:
      status = 404
      body.message = 'データは見つかりません'
      break
    case 10019:
      status = 402
      body.message = '無効なパラメータ'
      break
    case 10003:
      status = 200
      body.message = 'ログイン失敗しました'
      break
    case 10006:
      status = 404
      body.message = '管理者情報取得失敗しました'
      break
    case 10007:
      status = 403
      body.message = 'パスワード修正失敗しました'
      break
    case 10009:
      status = 403
      body.message = 'JWT認証失敗'
      break
    case 10010:
      status = 400
      body.message = 'JWT権限足りません'
      break
    case 10014:
      status = 403
      body.message = '追加失敗'
      break
    case 10012:
      status = 403
      body.message = '取得失敗'
      break
    case 10016:
      status = 403
      body.message = '更新失敗'
      break
    case 10018:
      status = 403
      body.message = '削除失敗'
      break
  }

  ctx.status = status
  ctx.body = body

  const log: string = `${body.code} : ${body.message}`
  logError(log)
  console.log(log)
}

export default error
