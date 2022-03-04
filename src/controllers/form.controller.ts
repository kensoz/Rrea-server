import areas from '../models/areas.model'
import names from '../models/names.model'
import jobs from '../models/jobs.model'
import races from '../models/races.model'
import type { ICTXGet } from '../types/ctx.type'
import type { IFormSchema, IFormGroupResponse } from '../types/form.type'

/**
 *  読み取り
 *  @param ctx koaコンテンツ
 */

const formController = async (ctx: ICTXGet<{}, IFormGroupResponse>): Promise<void> => {
  try {
    const area: IFormSchema[] = await areas.find({}, { _id: 0 })
    const name: IFormSchema[] = await names.find({}, { _id: 0 })
    const race: IFormSchema[] = await races.find({}, { _id: 0 })
    const job: IFormSchema[] = await jobs.find({}, { _id: 0 })
    const formResponseData: IFormGroupResponse = { area, name, race, job }

    ctx.body = {
      code: 10011,
      message: '取得成功',
      result: formResponseData,
    }

    ctx.app.emit('log', 'formController読み取り')
  } catch {
    ctx.app.emit('error', 10012, ctx)
  }
}

export default formController
