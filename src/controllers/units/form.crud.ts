import { Model } from 'mongoose'
import type { ICTXPost, ICTXPut, ICTXDelete, ICTXGet } from '../../types/ctx.type'
import type { IFormSchema, IFormResponse, IFormKey } from '../../types/form.type'

// ----- フォーム類CRUD controller unit -----
/**
 *  読み取り
 *  @param {Model<IFormSchema>}model フォーム類のコレクション
 *  @param {Object | {}} condition 読み取りの条件
 *  @param {*} ctx koaコンテンツ
 */

const find = async (model: Model<IFormSchema>, condition: any = {}, ctx: ICTXGet<{}, IFormResponse>): Promise<void> => {
  ctx.app.emit('log', '読み取り')

  await model
    .find(condition, { _id: 0 })
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
 *  @param {Model<IFormSchema>} model フォーム類のコレクション
 *  @param {*} ctx koaコンテンツ
 */

const create = async (model: Model<IFormSchema>, ctx: ICTXPost<IFormSchema, ''>): Promise<void> => {
  ctx.app.emit('log', '追加')

  const doc = new model(ctx.request.body)
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
 *  @param {Model<IFormSchema>} model フォーム類のコレクション
 *  @param {*} ctx koaコンテンツ
 */

const update = async (model: Model<IFormSchema>, ctx: ICTXPut<IFormKey, IFormSchema, ''>): Promise<void> => {
  ctx.app.emit('log', '更新')

  await model
    .updateOne(ctx.params, { text: ctx.request.body?.text })
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
 *  @param {Model<IFormSchema>} model フォーム類のコレクション
 *  @param {*} ctx koaコンテンツ
 */

const remove = async (model: Model<IFormSchema>, ctx: ICTXDelete<IFormKey, ''>): Promise<void> => {
  ctx.app.emit('log', '削除')

  await model
    .deleteOne(ctx.params)
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

export default { find, create, update, remove }
