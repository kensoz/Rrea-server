// ########################################
//
// * エラー 単体テスト
//
// ########################################

import request from 'supertest'
import server from '../../app'
import { disconnectMongoDB } from '../../database'

// apiごとのテスト完了した後、サーバーをクローズ
afterEach(async (): Promise<void> => {
  await server.close()
})

// 全テスト完了した後、データベースをクローズ
afterAll(async (): Promise<void> => {
  await disconnectMongoDB()
})

// ###### エラーテスト ######
describe('エラーテスト', (): void => {
  const testCase: string = 'unkown'

  test('間違ったapi', async (): Promise<void> => {
    const res = await request(server).get(`/api/v1/${testCase}`)
    expect(res.status).toBe(404)
  })

  test('間違ったパラメータ', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/data').send(testCase)
    expect(res.status).toBe(500)
  })
})
