import jobs from '../models/jobs.model'
import unit from './units/form.crud'
import type { ICTXPost, ICTXPut, ICTXDelete, ICTXGet } from '../types/ctx.type'
import type { IFormSchema, IFormResponse, IFormKey } from '../types/form.type'

// ----- 職務CRUD controller -----
// 読み取り
const jobFind = async (ctx: ICTXGet<{}, IFormResponse>): Promise<void> => {
  await unit.find(jobs, {}, ctx)
}

// 追加
const jobadd = async (ctx: ICTXPost<IFormSchema, ''>): Promise<void> => {
  await unit.create(jobs, ctx)
}

// 更新
const jobUpdate = async (ctx: ICTXPut<IFormKey, IFormSchema, ''>): Promise<void> => {
  await unit.update(jobs, ctx)
}

// 削除
const jobdelete = async (ctx: ICTXDelete<IFormKey, ''>): Promise<void> => {
  await unit.remove(jobs, ctx)
}

export default { jobFind, jobadd, jobUpdate, jobdelete }
