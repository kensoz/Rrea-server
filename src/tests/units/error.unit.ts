// ########################################
//
// * 異常系単体テスト
// * PASS: 2022.07.08
//
// ########################################

import request from 'supertest'
import server from '../../app'
import { token } from './test.config'

// ###### 異常系テスト ######
export const errorTest = (): void => {
  const testCase: string = 'unkown'

  test('間違ったapi', async (): Promise<void> => {
    const res = await request(server)
      .get(`/api/v1/${testCase}`)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(404)
  })

  test('間違ったパラメータ', async (): Promise<void> => {
    const res = await request(server)
      .post('/api/v1/data')
      .send(testCase)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(403)
  })

  test('jwt認証失敗', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/job').send({ text: 'iosエンジニア', value: '8' })
    expect(res.status).toBe(401)
  })
}
