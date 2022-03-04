import type { IConfig } from '../types/common.type'

// 開発環境
const development: IConfig = {
  host: 7001,
  apiPrefix: '/api/v1',
  dataBase: 'areadb',
  dataBaseUrl: 'mongodb://localhost:27017/',
}

// デプロイ
const production: IConfig = {
  host: 7001,
  apiPrefix: '/api/v1',
  dataBase: 'areadb',
  dataBaseUrl: 'mongodb://localhost:27017/',
}

const config: IConfig = process.env.NODE_ENV === 'production' ? production : development
export default config
