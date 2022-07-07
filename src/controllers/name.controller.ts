import names from '../models/names.model'
import unit from './units/form.crud'
import type { ICTXGet } from '../types/ctx.type'
import type { IFormResponse } from '../types/form.type'

// ----- ネームCRUD controller -----
const nameController = async (ctx: ICTXGet<{}, IFormResponse>): Promise<void> => {
  await unit.find(names, {}, ctx)
}

export default nameController
