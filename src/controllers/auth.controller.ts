import dayjs from 'dayjs'
import config from '../config'
import CryptoJS from 'crypto-js'
import auths from '../models/auth.model'
import jsonwebtoken from 'jsonwebtoken'
import type { IAuth, IAuthResponse } from '../types/auth.type'
import type { ICTXPost, ICTXPut, ICTXDelete, ICTXGet } from '../types/ctx.type'

// ----- 管理者認証関係 controller -----

/**
 *  暗号解読
 *  @param {string} word 暗号化したパスワード
 *  @return {string} パスワード
 */

const decrypt = (word: string) => {
  const key = CryptoJS.enc.Utf8.parse(config.passwordKey)
  const iv = CryptoJS.enc.Utf8.parse(config.passwordIV)
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

/**
 *  ログイン
 *  @param {ICTXPost<IAuth, IAuth | ''>} ctx koaコンテンツ
 */

const login = async (ctx: ICTXPost<IAuth, IAuth | ''>): Promise<void> => {
  // 暗号解読
  const password: string = await decrypt(ctx.request.body!.passWord)

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
      if (password === res[0].passWord) {
        // token作成
        const token: string = jsonwebtoken.sign(
          {
            id: res[0].id,
            permission: res[0].permission,
            exp: config.jwtLimitTime,
          },
          config.secret,
        )

        ctx.body = {
          code: 10001,
          message: 'ログイン成功しました',
          result: {
            id: res[0].id,
            passWord: '*****',
            permission: res[0].permission,
            time: res[0].time,
            token: token,
          },
        }

        ctx.app.emit('log', `ログイン--${ctx.request.body?.passWord}`)
        auths.updateOne({ id: res[0].id }, { time: dayjs().format('YYYY-MM-DD HH:mm:ss'), token: token }).then()
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

/**
 *  ログアウト
 *  @param {ICTXDelete<'id', ''>} ctx koaコンテンツ
 */

const logout = async (ctx: ICTXDelete<'id', ''>): Promise<void> => {
  await auths
    .updateOne({ id: ctx.params.id }, { token: '' })
    .then(() => {
      console.log(`${ctx.params.id} is Logout`)
      ctx.app.emit('log', `ログアウト--${ctx.params.id}`)

      ctx.body = {
        code: 10008,
        message: 'ログアウト成功しました',
        result: '',
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10004, ctx)
    })
}

/**
 *  すべての管理者情報取得
 *  @param {ICTXGet<{}, IAuthResponse>} ctx koaコンテンツ
 */

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

/**
 *  管理者のパスワード修正
 *  @param {ICTXPut<'id', Record<'passWord', string>, ''>} ctx koaコンテンツ
 */

const authUpdate = async (ctx: ICTXPut<'id', Record<'passWord', string>, ''>): Promise<void> => {
  const password: string = await decrypt(ctx.request.body!.passWord)
  ctx.app.emit('log', '管理者のパスワード修正')

  await auths
    .updateOne({ id: ctx.params.id }, { passWord: password })
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
