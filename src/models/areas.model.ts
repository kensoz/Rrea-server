import { Schema, model } from 'mongoose'
import type { IFormSchema } from '../types/form.type'

// ----- エリア -----
// schema
const schema = new Schema<IFormSchema>(
  {
    value: { type: String, required: true },
    text: { type: String, required: true },
  },
  { versionKey: false },
)

// model
const areas = model<IFormSchema>('areas', schema)

export default areas
