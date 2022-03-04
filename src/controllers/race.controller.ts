import races from '../models/races.model'
import unit from './units/form.crud'
import type { ICTXPost, ICTXPut, ICTXDelete, ICTXGet } from '../types/ctx.type'
import type { IFormSchema, IFormResponse, IFormKey } from '../types/form.type'

// 読み取り
const raceFind = async (ctx: ICTXGet<{}, IFormResponse>): Promise<void> => {
  await unit.find(races, {}, ctx)
}

// 追加
const raceAdd = async (ctx: ICTXPost<IFormSchema, ''>): Promise<void> => {
  await unit.create(races, ctx)
}

// 更新
const raceUpdate = async (ctx: ICTXPut<IFormKey, IFormSchema, ''>): Promise<void> => {
  await unit.update(races, ctx)
}

// 削除
const raceDelete = async (ctx: ICTXDelete<IFormKey, ''>): Promise<void> => {
  await unit.remove(races, ctx)
}

export default { raceFind, raceAdd, raceUpdate, raceDelete }
