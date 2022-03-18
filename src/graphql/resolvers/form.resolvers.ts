import areas from '../../models/areas.model'
import names from '../../models/names.model'
import jobs from '../../models/jobs.model'
import races from '../../models/races.model'
import errorGraphQL from '../../error/errorGraphQL'
import { Context } from 'koa'
import type { IFormSchema, IFormGroupResponse } from '../../types/form.type'

type key = 'area' | 'name' | 'race' | 'job'

/**
 *  graphql form 読み取り
 *  @param {string} key 'area' | 'name' | 'race' | 'job'
 *  @param {*} ctx Context
 *  @return area | name | race | job
 */

const formResolver = async (key: key, ctx: Context): Promise<IFormSchema[]> => {
  try {
    ctx.app.emit('log', 'graphqlform読み取り')

    const area: IFormSchema[] = await areas.find({}, { _id: 0 })
    const name: IFormSchema[] = await names.find({}, { _id: 0 })
    const race: IFormSchema[] = await races.find({}, { _id: 0 })
    const job: IFormSchema[] = await jobs.find({}, { _id: 0 })
    const result: IFormGroupResponse = { area, name, race, job }

    return result[key]
  } catch {
    throw new errorGraphQL('graphqlform読み取り失敗', '10021')
  }
}

export default formResolver
