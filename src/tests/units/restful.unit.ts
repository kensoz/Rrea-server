// ########################################
//
// * restfull api 単体テスト
// * PASS: 2022.07.08
//
// ########################################

import request from 'supertest'
import server from '../../app'
import { token, code } from './test.config'
import type { IFormSchema } from '../../types/form.type'
import type { IUserSchema } from '../../types/user.type'

// ----- restfull api CRUD 単体テスト -----
export const restfulTest = () => {
  // ###### form apiテスト ######
  test('c/a-form-find', async (): Promise<void> => {
    const res = await request(server).get('/api/v1/form')
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  // ###### data apiテスト ######
  const postdata = { areaCode: '', jobCode: [], nameCode: [], raceCode: [] }
  test('c/a-data-find', async (): Promise<void> => {
    const res = await request(server).post('/api/v1/data').send(postdata)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  // ###### job apiテスト ######
  const postjob: IFormSchema = { text: 'iosエンジニア', value: '99' }
  const putjob: IFormSchema = { text: 'andriodエンジニア', value: '99' }
  test('a-job-find', async (): Promise<void> => {
    const res = await request(server)
      .get('/api/v1/job')
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  test('a-job-add', async (): Promise<void> => {
    const res = await request(server)
      .post('/api/v1/job')
      .send(postjob)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.post)
  })

  test('a-job-update', async (): Promise<void> => {
    const res = await request(server)
      .put(`/api/v1/job/${postjob.value}`)
      .send(putjob)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.put)
  })

  test('a-job-delete', async (): Promise<void> => {
    const res = await request(server)
      .delete(`/api/v1/job/${postjob.value}`)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.delete)
  })

  // ###### race apiテスト ######
  const postrace: IFormSchema = { text: '虫', value: '99' }
  const putrace: IFormSchema = { text: '虫族', value: '99' }
  test('a-race-find', async (): Promise<void> => {
    const res = await request(server)
      .get('/api/v1/race')
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  test('a-race-add', async (): Promise<void> => {
    const res = await request(server)
      .post('/api/v1/race')
      .send(postrace)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.post)
  })

  test('a-race-update', async (): Promise<void> => {
    const res = await request(server)
      .put(`/api/v1/race/${postrace.value}`)
      .send(putrace)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.put)
  })

  test('a-race-delete', async (): Promise<void> => {
    const res = await request(server)
      .delete(`/api/v1/race/${postrace.value}`)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.delete)
  })

  // ###### area apiテスト ######
  test('a-area-find', async (): Promise<void> => {
    const res = await request(server)
      .get('/api/v1/area')
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  // ###### name apiテスト ######
  test('a-name-find', async (): Promise<void> => {
    const res = await request(server)
      .get('/api/v1/name')
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  // ###### user apiテスト ######
  const postuser: IUserSchema = {
    id: '00099',
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
  const putuser: IUserSchema = {
    id: '00099',
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
    const res = await request(server)
      .get('/api/v1/user')
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.get)
  })

  test('a-user-add', async (): Promise<void> => {
    const res = await request(server)
      .post('/api/v1/user')
      .send(postuser)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.post)
  })

  test('a-user-update', async (): Promise<void> => {
    const res = await request(server)
      .put(`/api/v1/user/${postuser.id}`)
      .send(putuser)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.put)
  })

  test('a-user-delete', async (): Promise<void> => {
    const res = await request(server)
      .delete(`/api/v1/user/${postuser.id}`)
      .set('Authorization', 'Bearer ' + token)
    expect(res.status).toBe(200)
    expect(res.body.code).toBe(code.delete)
  })
}
