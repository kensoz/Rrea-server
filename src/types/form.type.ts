// area,name,race,job collection
// フォーム関連のタイプ

export interface IFormSchema {
  value: string
  text: string
}

export interface IFormGroupResponse {
  area: Array<IFormSchema>
  job: Array<IFormSchema>
  name: Array<IFormSchema>
  race: Array<IFormSchema>
}

export type IFormKey = 'value'

export type IFormResponse = Array<IFormSchema>
