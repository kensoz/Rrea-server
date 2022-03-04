import type { IResponse } from '../types/ctx.type'

let status: number = 500
let error: IResponse = {
  code: 9999,
  message: 'プログラムエラー',
  result: '',
}

const handle = (code: number): IResponse => {
  switch (code) {
    case 10020:
      status = 404
      error.message = 'データは見つかりません'
      break
    case 10019:
      status = 402
      error.message = '無効なパラメータ'
      break
    case 10003:
      status = 200
      error.message = 'ログイン失敗しました'
      break
    case 10006:
      status = 404
      error.message = '管理者情報取得失敗しました'
      break
    case 10007:
      status = 403
      error.message = 'パスワード修正失敗しました'
      break
    case 10014:
      status = 403
      error.message = '追加失敗'
      break
    case 10012:
      status = 403
      error.message = '取得失敗'
      break
    case 10016:
      status = 403
      error.message = '更新失敗'
      break
    case 10018:
      status = 403
      error.message = '削除失敗'
      break
  }

  error.code = code
  return error
}

const log: string = `${error.code} : ${error.message}`

export default { status, handle, log }
