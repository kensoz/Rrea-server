// ########################################
//
// * graphql api 単体テスト
// * PASS: 2022.07.08
//
// ########################################

import request from 'supertest'
import server from '../../app'

// ###### graphql api テスト ######
export const graphqlTest = (): void => {
  const code: number = 10011 // レスポンスコード
  const key: string = 'code' // クエリキー

  test('a-graphql', async (): Promise<void> => {
    const res = await request(server)
      .post('/graphql')
      .send({ query: `{ ${key} }` })
    expect(res.status).toBe(200)
    expect(res.body.data.code).toBe(code)
  })
}
