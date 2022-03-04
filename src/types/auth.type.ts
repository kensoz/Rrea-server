// auth collection
// 管理者についてのタイプ

export interface IAuth {
  id: string
  passWord: string
  permission?: number
  time?: string
}

export type IAuthKey = 'id'

export type IAuthResponse = Array<IAuth>
