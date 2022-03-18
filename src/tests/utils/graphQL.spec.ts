// ########################################
//
// * graphql api 単体テスト
//
// ########################################

import request from 'supertest'
import server from '../../app'
import { disconnectMongoDB } from '../../database'

// レスポンスコード
const code: number = 10011

// クエリキー
const key: string = 'code'

// テスト完了した後、サーバーをクローズ
afterEach(async (): Promise<void> => {
  await server.close()
})

// 全テスト完了した後、データベースをクローズ
afterAll(async (): Promise<void> => {
  await disconnectMongoDB()
})

// ###### graphql apiテスト ######
describe('graphql apiテスト', (): void => {
  test('a-graphql', async (): Promise<void> => {
    const res = await request(server)
      .post('/graphql')
      .send({ query: `{ ${key} }` })
    expect(res.status).toBe(200)
    expect(res.body.data.code).toBe(code)
  })
})
