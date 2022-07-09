// ########################################
//
// * テスト用モックデータ
//
// ########################################

import config from '../../config'
import jsonwebtoken from 'jsonwebtoken'

// token作成: admin
export const token: string = jsonwebtoken.sign(
  {
    id: 'admin',
    permission: 1,
    exp: config.jwtLimitTime,
  },
  config.secret,
)

// パスワード暗号化
export const password: string = 'DC8E514E061E589C156F039D95DD0117'

// レスポンスコード
export const code = {
  get: 10011,
  post: 10013,
  put: 10015,
  delete: 10017,
  login: 10001,
  logout: 10008,
  nomarl: 10000,
}
