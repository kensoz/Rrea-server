import { connect, disconnect } from 'mongoose'
import config from '../config'

// データベース起動
const connectMongoDB = async (): Promise<void> => {
  await connect(config.dataBaseUrl + config.dataBase)
    .then((): void => {
      console.log('mongodb connect success')
    })
    .catch((): void => {
      console.log('mongodb connect failed')
    })
}

// データベースクローズ
const disconnectMongoDB = async (): Promise<void> => {
  await disconnect()
    .then((): void => {
      console.log('mongodb disconnect success')
    })
    .catch((): void => {
      console.log('mongodb disconnect failed')
    })
}

export { connectMongoDB, disconnectMongoDB }
