import users from '../models/users.model'
import type { ICTXPost, ICTXPut, ICTXDelete, ICTXGet } from '../types/ctx.type'
import type { IUserSchema, IUserKey } from '../types/user.type'

// ----- メンバーCRUD controller -----
/**
 *  読み取り
 *  @param {ICTXGet<{}, IUserSchema[]>} ctx koaコンテンツget
 */

const userFind = async (ctx: ICTXGet<{}, IUserSchema[]>): Promise<void> => {
  await users
    .find({}, { _id: 0 })
    .then((res): void => {
      ctx.body = {
        code: 10011,
        message: '取得成功',
        result: res,
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10012, ctx)
    })
}

/**
 *  追加
 *  @param {ICTXPost<IUserSchema, ''>} ctx koaコンテンツpost
 */

const userAdd = async (ctx: ICTXPost<IUserSchema, ''>): Promise<void> => {
  const doc = new users(ctx.request.body)

  await doc
    .save()
    .then((): void => {
      ctx.body = {
        code: 10013,
        message: '追加成功',
        result: '',
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10014, ctx)
    })
}

/**
 *  更新
 *  @param {ICTXPut<IUserKey, IUserSchema, ''>} ctx koaコンテンツput
 */

const userUpdate = async (ctx: ICTXPut<IUserKey, IUserSchema, ''>): Promise<void> => {
  console.log(ctx.params.id)

  await users
    .updateOne({ id: ctx.params.id }, ctx.request.body)
    .then((res): void => {
      if (res.matchedCount === 0) {
        ctx.app.emit('error', 10022, ctx)
      } else {
        ctx.body = {
          code: 10015,
          message: '更新成功',
          result: '',
        }
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10016, ctx)
    })
}

/**
 *  削除
 *  @param {ICTXDelete<IUserKey, ''>} ctx koaコンテンツdelete
 */

const userDelete = async (ctx: ICTXDelete<IUserKey, ''>): Promise<void> => {
  ctx.app.emit('log', '削除')

  await users
    .deleteOne({ id: ctx.params.id })
    .then((res): void => {
      if (res.deletedCount === 0) {
        ctx.app.emit('error', 10022, ctx)
      } else {
        ctx.body = {
          code: 10017,
          message: '削除成功',
          result: '',
        }
      }
    })
    .catch((): void => {
      ctx.app.emit('error', 10018, ctx)
    })
}

export default { userFind, userAdd, userUpdate, userDelete }
