import { Context, Request } from 'koa'
import { ParsedUrlQuery } from 'querystring'

// CTXのタイプ
// CTXのRequest
interface IRequest<RequestBody = any> extends Request {
  body?: RequestBody
}

// CTXのResponse
export interface IResponse<Result = any> {
  code: number
  message: string
  result: Result
}

// CTX postの型:
export interface ICTXPost<RequestBody = any, ResponseBody = any> extends Context {
  request: IRequest<RequestBody>
  body: IResponse<ResponseBody>
}

// CTX putの型:
export interface ICTXPut<RequestParamsKey extends string, RequestBody = any, ResponseBody = any> extends Context {
  params: Record<RequestParamsKey, string>
  request: IRequest<RequestBody>
  body: IResponse<ResponseBody>
}

// CTX deleteの型:
export interface ICTXDelete<RequestParamsKey extends string, ResponseBody = any> extends Context {
  params: Record<RequestParamsKey, string>
  body: IResponse<ResponseBody>
}

// CTX getの型:
export interface ICTXGet<QueryBody extends ParsedUrlQuery, ResponseBody = any> extends Context {
  query: QueryBody
  body: IResponse<ResponseBody>
}
