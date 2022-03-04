import { Schema, model } from 'mongoose'
import type { IFormSchema } from '../types/form.type'

// schema
const schema = new Schema<IFormSchema>(
  {
    value: { type: String, required: true },
    text: { type: String, required: true },
  },
  { versionKey: false },
)

// model
const races = model<IFormSchema>('races', schema)

export default races
