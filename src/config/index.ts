import type { IConfig } from '../types/common.type'

// jwt認証制限時間
// 60 seconds * 60 minutes = 1 hour
// 60 seconds * 60 minutes * 60 hour = 60 hour　←
const time: number = Math.floor(Date.now() / 1000) + 60 * 60 * 60

// コンフィグ
const config: IConfig = {
  host: process.env.NODE_ENV === 'development' ? 7001 : 7002,
  apiPrefix: '/api/v1',
  dataBase: process.env.NODE_ENV === 'development' ? 'areadb' : 'rrea',
  dataBaseUrl:
    process.env.NODE_ENV === 'development' ? 'mongodb://127.0.0.1:27017/' : 'mongodb://admin:admin@database:27017/',
  secret: 'maeda',
  jwtLimitTime: time,
  passwordKey: '1234123412ABCDEF',
  passwordIV: 'ABCDEF1234123412',
}

export default config
