import { ApolloError } from 'apollo-server-errors'

// ----- GraphQL エラー処理 -----

/**
 *  カスタマイズのApollo GraphQLエラー処理
 *  @param {string} message テキスト
 *  @param {string} code エラーコード
 */

class errorGraphQL extends ApolloError {
  constructor(message: string, code: string) {
    super(message, code)

    Object.defineProperty(this, 'name', { value: 'errorGraphQL' })
  }
}

new errorGraphQL('graphqlform読み取り失敗', '10012')

export default errorGraphQL
