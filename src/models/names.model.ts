import { Schema, model } from 'mongoose'
import type { IFormSchema } from '../types/form.type'

// ----- ネーム -----
// schema
const schema = new Schema<IFormSchema>(
  {
    value: { type: String, required: true },
    text: { type: String, required: true },
  },
  { versionKey: false },
)
// model
const names = model<IFormSchema>('names', schema)

export default names
