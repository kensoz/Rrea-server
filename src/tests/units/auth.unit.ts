// ########################################
//
// * auth api 単体テスト
// * PASS: 2022.07.08
//
// ########################################

import request from 'supertest'
import server from '../../app'
import { code, password } from './test.config'
import type { IAuth } from '../../types/auth.type'

// ###### auth api テスト ######
export const authTest = (): void => {
  const post: IAuth = { id: 'guest', passWord: password }
  const put: Record<'passWord', string> = { passWord: 'guest' }

  test('c-auth-info', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/auth')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.nomarl)
  })

  test('c-auth-login', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/auth').send(post)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.login)
  })

  test('c-auth-change-password', async (): Promise<void> => {
    const res = await request(server).patch(`/api/v1/auth/${post.id}`).send(put)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.nomarl)
  })

  test('c-auth-logout', async (): Promise<void> => {
    const res = await request(server).delete(`/api/v1/auth/${post.id}`)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.logout)
  })
}
