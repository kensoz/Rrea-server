import users from '../models/users.model'
import areas from '../models/areas.model'
import dataHandle from '../controllers/units/data.handle'
import type { ICTXPost } from '../types/ctx.type'
import type { IDataRequest, IUserSchema, IDataResponse, ICount, IHandleDataResponse } from '../types/user.type'
import type { IFormSchema } from '../types/form.type'

/**
 *  読み取り
 *  @param ctx koaコンテンツ
 */

const dataController = async (ctx: ICTXPost<IDataRequest, IHandleDataResponse>): Promise<void> => {
  if (ctx.request.body === undefined) {
    ctx.app.emit('error', 10019, ctx)
    return
  }

  try {
    // エリア,ユーザー取得
    const req: IDataRequest = ctx.request.body
    const area: IFormSchema[] = await areas.find({}, { _id: 0 })
    const user: IUserSchema[] = await users.find(
      {
        raceCode: req.raceCode.length === 0 ? { $type: 'string' } : { $in: req.raceCode },
        nameCode: req.nameCode.length === 0 ? { $type: 'string' } : { $in: req.nameCode },
        jobCode: req.jobCode.length === 0 ? { $type: 'string' } : { $in: req.jobCode },
      },
      { _id: 0 },
    )

    // データ処理
    const data: IDataResponse = JSON.parse(JSON.stringify(user))
    const result: IHandleDataResponse = dataHandle(data, area, req.areaCode)

    ctx.body = {
      code: 10011,
      message: 'data取得成功',
      result: result,
    }
    ctx.app.emit('log', 'data読み取り')
  } catch {
    ctx.app.emit('error', 10012, ctx)
  }
}

export default dataController
