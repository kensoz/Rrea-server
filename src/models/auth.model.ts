import { Schema, model } from 'mongoose'
import type { IAuth } from '../types/auth.type'

// ----- 管理者 -----
// schema
const schema = new Schema<IAuth>(
  {
    id: { type: String, required: true },
    passWord: { type: String, required: true },
    permission: { type: Number, required: true },
    time: { type: String, required: true },
    token: { type: String, required: true },
  },
  { versionKey: false },
)

// model
const auths = model<IAuth>('auths', schema)

export default auths
