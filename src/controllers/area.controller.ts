import areas from '../models/areas.model'
import unit from './units/form.crud'
import type { ICTXGet } from '../types/ctx.type'
import type { IFormResponse } from '../types/form.type'

const areaController = async (ctx: ICTXGet<{}, IFormResponse>): Promise<void> => {
  await unit.find(areas, {}, ctx)
}

export default areaController
