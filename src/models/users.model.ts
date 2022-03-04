import { Schema, model } from 'mongoose'
import type { IUserSchema } from '../types/user.type'

// schema
const schema = new Schema<IUserSchema>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    nameSpell: { type: String, required: true },
    nameCode: { type: String, required: true },
    job: { type: String, required: true },
    jobCode: { type: String, required: true },
    race: { type: String, required: true },
    raceCode: { type: String, required: true },
    skill: { type: String, required: true },
    photo: { type: String, required: true },
  },
  { versionKey: false },
)

// model
const users = model<IUserSchema>('users', schema)

export default users
