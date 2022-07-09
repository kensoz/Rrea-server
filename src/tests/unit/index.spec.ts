import server from '../../app'
import { disconnectMongoDB } from '../../database'
import { errorTest } from './error.unit'
import { authTest } from './auth.unit'
import { graphqlTest } from './graphQL.unit'
import { restfulTest } from './restful.unit'

// ----- 全テスト完了した後 -----
// データベース & サーバーをクローズ
afterAll(async (): Promise<void> => {
  console.log('🙏 waiting for test closing...')
  await disconnectMongoDB()
  await server.close()
})

// ----- テスト -----
// restfull api
describe('restfull api テスト', (): void => {
  restfulTest()
})

// auth api
describe('管理者関連 api テスト', (): void => {
  authTest()
})

// graphql api テスト
describe('graphql apiテスト', (): void => {
  graphqlTest()
})

// 異常系テスト
describe('異常系テスト', (): void => {
  errorTest()
})
