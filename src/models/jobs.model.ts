import { Schema, model } from 'mongoose'
import type { IFormSchema } from '../types/form.type'

// ----- 職務 -----
// schema
const schema = new Schema<IFormSchema>(
  {
    value: { type: String, required: true },
    text: { type: String, required: true },
  },
  { versionKey: false },
)

// model
const jobs = model<IFormSchema>('jobs', schema)

export default jobs
