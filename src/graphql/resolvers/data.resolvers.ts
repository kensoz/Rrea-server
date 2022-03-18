import users from '../../models/users.model'
import areas from '../../models/areas.model'
import errorGraphQL from '../../error/errorGraphQL'
import dataHandle from '../../controllers/units/data.handle'
import { Context } from 'koa'
import type { IFormSchema } from '../../types/form.type'
import type { IDataRequest, IUserSchema, IDataResponse, ICountDataResponse } from '../../types/user.type'

/**
 *  graphql data 読み取り
 *  @param {Object} args areaCode, raceCode, nameCode, jobCode
 *  @param {*} ctx Context
 *  @return data & count
 */

const dataResolver = async (args: IDataRequest, ctx: Context): Promise<ICountDataResponse> => {
  try {
    ctx.app.emit('log', 'graphqldata読み取り')

    // エリア,ユーザー取得
    const area: IFormSchema[] = await areas.find({}, { _id: 0 })
    const user: IUserSchema[] = await users.find(
      {
        raceCode: args.raceCode.length === 0 ? { $type: 'string' } : { $in: args.raceCode },
        nameCode: args.nameCode.length === 0 ? { $type: 'string' } : { $in: args.nameCode },
        jobCode: args.jobCode.length === 0 ? { $type: 'string' } : { $in: args.jobCode },
      },
      { _id: 0 },
    )

    // データ処理
    const data: IDataResponse = JSON.parse(JSON.stringify(user))
    const result: ICountDataResponse = dataHandle(data, area, args.areaCode)

    return result
  } catch {
    throw new errorGraphQL('graphqldata読み取り失敗', '10021')
  }
}

export default dataResolver
