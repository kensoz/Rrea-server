import { connect } from 'mongoose'
import config from '../config'

const connectMongoDB = async (): Promise<void> => {
  await connect(config.dataBaseUrl + config.dataBase)
    .then((): void => {
      console.log('mongodb connect suucess')
    })
    .catch((): void => {
      console.log('mongodb connect failed')
    })
}

export default connectMongoDB
