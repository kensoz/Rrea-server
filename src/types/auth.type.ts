// ###########################
// *
// * auth collection、jwt、管理者関連タイプ
// *
// ###########################

// 管理者
export interface IAuth {
  id: string
  passWord: string
  permission?: number
  time?: string
  token?: string
}

export type IAuthKey = 'id'
export type IAuthResponse = Array<IAuth>

// jwt
export interface IJwt {
  id: string
  permission: number
  exp: number
  iat: number
}
