import users from '../models/users.model'
import areas from '../models/areas.model'
import dayjs from 'dayjs'
import type { ICTXPost } from '../types/ctx.type'
import type { IDataRequest, IUserSchema } from '../types/user.type'
import type { IFormSchema } from '../types/form.type'

/**
 *  読み取り
 *  @param ctx koaコンテンツ
 */
const dataController = async (ctx: ICTXPost<IDataRequest, any>): Promise<void> => {
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

    // 仮エリアデータ構成
    const data: IUserSchema[] = JSON.parse(JSON.stringify(user))
    data.map((i: IUserSchema): void => {
      const areaRandom: IFormSchema = area[Math.floor(Math.random() * area.length)]
      Object.assign(i, {
        area: areaRandom.text,
        areaCode: areaRandom.value,
        YYYYMMDD: dayjs().format('YYYY-MM-DD'),
        HHMMss: dayjs().format('HH:mm:ss'),
      })
    })

    ctx.body = {
      code: 10011,
      message: 'data取得成功',
      // エリアフィルター
      result: req.areaCode === '' ? data : data.filter((i: IUserSchema): boolean => i.areaCode === req.areaCode),
    }
    ctx.app.emit('log', 'data読み取り')
  } catch {
    ctx.app.emit('error', 10012, ctx)
  }
}

export default dataController
