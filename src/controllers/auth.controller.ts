import auths from '../models/auth.model'
import dayjs from 'dayjs'
import type { ICTXPost, ICTXPut, ICTXDelete, ICTXGet } from '../types/ctx.type'
import type { IAuth, IAuthResponse } from '../types/auth.type'

// ログイン
const login = async (ctx: ICTXPost<IAuth, IAuth | ''>): Promise<void> => {
  await auths
    .find({ id: ctx.request.body?.id }, { _id: 0 })
    .then((res): void => {
      // 無効なID
      if (res.length === 0) {
        ctx.body = {
          code: 10002,
          message: 'idは存在しないです',
          result: '',
        }

        return
      }

      // ログイン成功
      if (ctx.request.body?.passWord === res[0].passWord) {
        ctx.body = {
          code: 10001,
          message: 'ログイン成功しました',
          result: Object.assign(res[0], { passWord: '*****' }),
        }

        ctx.app.emit('log', `ログイン--${ctx.request.body?.passWord}`)
        auths.updateOne({ id: res[0].id }, { time: dayjs().format('YYYY-MM-DD HH:mm:ss') }).then()
      } else {
        // 無効なパスワード
        ctx.body = {
          code: 10003,
          message: 'パスワードが間違いました',
          result: '',
        }
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10004, ctx)
    })
}

// ログアウト
const logout = async (ctx: ICTXDelete<'id', ''>): Promise<void> => {
  // TODO console占位，需要添加鉴权
  await console.log(ctx.params.id)
  ctx.app.emit('log', `ログアウト--${ctx.params.id}`)

  ctx.body = {
    code: 10008,
    message: 'ログアウト成功しました',
    result: '',
  }
}

// すべての管理者情報取得
const authFind = async (ctx: ICTXGet<{}, IAuthResponse>): Promise<void> => {
  ctx.app.emit('log', '管理者情報取得')

  await auths
    .find({}, { _id: 0, passWord: 0 })
    .then((res): void => {
      ctx.body = {
        code: 10000,
        message: '管理者情報取得成功',
        result: res,
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10006, ctx)
    })
}

// 管理者のパスワード修正
const authUpdate = async (ctx: ICTXPut<'id', Record<'passWord', string>, ''>): Promise<void> => {
  ctx.app.emit('log', '管理者のパスワード修正')

  await auths
    .updateOne({ id: ctx.params.id }, { passWord: ctx.request.body?.passWord })
    .then((): void => {
      ctx.body = {
        code: 10000,
        message: '管理者のパスワード修正成功',
        result: '',
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10007, ctx)
    })
}

export default { login, logout, authFind, authUpdate }
