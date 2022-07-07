// ###########################
// *
// * コンフィグ、コンフィグタイプ
// *
// ###########################

export interface IConfig {
  readonly host: number
  readonly apiPrefix: string
  readonly dataBase: string
  readonly dataBaseUrl: string
  readonly secret: string
  readonly jwtLimitTime: number
  readonly passwordKey: string
  readonly passwordIV: string
}
