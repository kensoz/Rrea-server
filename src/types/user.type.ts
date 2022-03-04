// user collection
// ユーザー関連のタイプ
export interface IUserSchema {
  id: string
  name: string
  nameSpell: string
  nameCode: string
  job: string
  jobCode: string
  race: string
  raceCode: string
  skill: string
  photo: string
  area?: string
  areaCode?: string
  YYYYMMDD?: string
  HHMMss?: string
}

export type IUserKey = 'numberCode'

export type IDataResponse = Array<IUserSchema>

// data取得apiのパラメータ
export interface IDataRequest {
  areaCode: string
  jobCode: string[]
  nameCode: string[]
  raceCode: string[]
}
