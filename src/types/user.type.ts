// ###########################
// *
// * user collection
// * ユーザー関連のタイプ
// *
// ###########################

// data取得apiのパラメータ
export interface IDataRequest {
  areaCode: string
  jobCode: string[]
  nameCode: string[]
  raceCode: string[]
}

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

// 在席情報
export interface ICount {
  count: number
  area?: string
  value?: number
}

export type IUserKey = 'id'
export type IDataResponse = Array<IUserSchema>
export interface IHandleDataResponse {
  count: ICount[]
  user: IDataResponse
}
