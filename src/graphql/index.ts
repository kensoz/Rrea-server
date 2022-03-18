import { ApolloServer } from 'apollo-server-koa'
import formResolver from './resolvers/form.resolvers'
import dataResolver from './resolvers/data.resolvers'
import typeDefs from './schema/typeDefs'
import Koa, { DefaultState, DefaultContext, Context } from 'koa'
import type { IDataRequest } from '../types/user.type'

// ctxのタイプ
type ICTX = {
  ctx: Context
}

// graphql resolvers
const resolvers = {
  Query: {
    // リクエスト情報（成功した時のみ）
    code: () => 10011,
    message: () => 'graphql取得成功',

    // form
    area: async (obj: undefined, args: undefined, ctx: ICTX) => await formResolver('area', ctx.ctx),
    name: async (obj: undefined, args: undefined, ctx: ICTX) => await formResolver('name', ctx.ctx),
    race: async (obj: undefined, args: undefined, ctx: ICTX) => await formResolver('race', ctx.ctx),
    job: async (obj: undefined, args: undefined, ctx: ICTX) => await formResolver('job', ctx.ctx),

    // data
    data: async (obj: undefined, args: IDataRequest, ctx: ICTX) => await dataResolver(args, ctx.ctx),
  },
}

// graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }) => ({ ctx }),
  introspection: process.env.NODE_ENV === 'production' ? false : true,
})

/**
 *  apollo graphql起動
 *  @param {*} app koa app
 */

const apolloServer = async (app: Koa<DefaultState, DefaultContext>): Promise<void> => {
  await server.start()
  server.applyMiddleware({ app })
}

export default apolloServer
