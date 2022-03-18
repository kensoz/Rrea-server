// ########################################
//
// * restfull api 単体テスト
//
// ########################################

import request from 'supertest'
import server from '../../app'
import { disconnectMongoDB } from '../../database'
import type { IFormSchema } from '../../types/form.type'
import type { IUserSchema } from '../../types/user.type'
import type { IAuth } from '../../types/auth.type'

// レスポンスコード
const code = {
  get: 10011,
  post: 10013,
  put: 10015,
  delete: 10017,
  login: 10001,
  logout: 10008,
  nomarl: 10000,
}

// apiごとのテスト完了した後、サーバーをクローズ
afterEach(async (): Promise<void> => {
  await server.close()
})

// 全テスト完了した後、データベースをクローズ
afterAll(async (): Promise<void> => {
  await disconnectMongoDB()
})

// ###### form apiテスト ######
describe('form apiテスト', (): void => {
  test('c/a-form-find', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/form')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })
})

// ###### data apiテスト ######
describe('data apiテスト', (): void => {
  const post = { areaCode: '', jobCode: [], nameCode: [], raceCode: [] }

  test('c/a-data-find', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/data').send(post)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })
})

// ###### job apiテスト ######
describe('job apiテスト', (): void => {
  const post: IFormSchema = { text: 'iosエンジニア', value: '8' }
  const put: IFormSchema = { text: 'andriodエンジニア', value: '8' }

  test('a-job-find', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/job')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  test('a-job-add', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/job').send(post)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.post)
  })

  test('a-job-update', async (): Promise<void> => {
    const res = await request(server).put(`/api/v1/job/${post.value}`).send(put)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.put)
  })

  test('a-job-delete', async (): Promise<void> => {
    const res = await request(server).delete(`/api/v1/job/${post.value}`)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.delete)
  })
})

// ###### race apiテスト ######
describe('race apiテスト', (): void => {
  const post: IFormSchema = { text: '虫', value: '8' }
  const put: IFormSchema = { text: '虫族', value: '8' }

  test('a-race-find', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/race')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  test('a-race-add', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/race').send(post)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.post)
  })

  test('a-race-update', async (): Promise<void> => {
    const res = await request(server).put(`/api/v1/race/${post.value}`).send(put)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.put)
  })

  test('a-race-delete', async (): Promise<void> => {
    const res = await request(server).delete(`/api/v1/race/${post.value}`)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.delete)
  })
})

// ###### area apiテスト ######
describe('area apiテスト', (): void => {
  test('a-area-find', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/area')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })
})

// ###### name apiテスト ######
describe('name apiテスト', (): void => {
  test('a-name-find', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/name')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })
})

// ###### user apiテスト ######
describe('user apiテスト', (): void => {
  const post: IUserSchema = {
    id: '00008',
    name: '韩旭',
    nameSpell: 'hanxu',
    nameCode: '9',
    job: 'リーダー',
    jobCode: '1',
    race: 'その他',
    raceCode: '5',
    skill: '指導',
    photo: '-',
  }

  const put: IUserSchema = {
    id: '00008',
    name: '韩旭',
    nameSpell: 'hanxu',
    nameCode: '9',
    job: 'リーダー',
    jobCode: '1',
    race: 'その他',
    raceCode: '5',
    skill: '指導',
    photo: '--',
  }

  test('a-user-find', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/user')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  test('a-user-add', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/user').send(post)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.post)
  })

  test('a-user-update', async (): Promise<void> => {
    const res = await request(server).put(`/api/v1/user/${post.id}`).send(put)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.put)
  })

  test('a-user-delete', async (): Promise<void> => {
    const res = await request(server).delete(`/api/v1/user/${post.id}`)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.delete)
  })
})

// ###### auth apiテスト ######
describe('auth apiテスト', (): void => {
  const post: IAuth = { id: 'admin', passWord: 'admin' }
  const put: Record<'passWord', string> = { passWord: 'admin' }

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
})
