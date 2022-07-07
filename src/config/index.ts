import type { IConfig } from '../types/common.type'

// jwt認証制限時間
// 60 seconds * 60 minutes = 1 hour
// 60 seconds * 60 minutes * 60 hour = 60 hour　←
const time: number = Math.floor(Date.now() / 1000) + 60 * 60 * 60

// 開発環境
const development: IConfig = {
  host: 7001,
  apiPrefix: '/api/v1',
  dataBase: 'areadb',
  dataBaseUrl: 'mongodb://127.0.0.1:27017/',
  secret: 'maeda',
  jwtLimitTime: time,
  passwordKey: '1234123412ABCDEF',
  passwordIV: 'ABCDEF1234123412',
}

// 本番環境
// docker環境
const production: IConfig = {
  host: 7001,
  apiPrefix: '/api/v1',
  dataBase: 'areadb',
  dataBaseUrl: 'mongodb://admin:admin@database:27017/',
  secret: 'maeda',
  jwtLimitTime: time,
  passwordKey: '1234123412ABCDEF',
  passwordIV: 'ABCDEF1234123412',
}

const config: IConfig = process.env.NODE_ENV === 'production' ? production : development
export default config
