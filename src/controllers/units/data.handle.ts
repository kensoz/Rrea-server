import dayjs from 'dayjs'
import type { IUserSchema, IDataResponse, Icount, ICountDataResponse } from '../../types/user.type'
import type { IFormSchema } from '../../types/form.type'

let countPrototype: Icount = {
  area1: 0,
  area2: 0,
  area3: 0,
  area4: 0,
  area5: 0,
}

/**
 *  graphql data 読み取り
 *  @param {Array} data ユーザーのデータ
 *  @param {Array} area エリアのデータ
 *  @return data & count
 */

const dataHandle = (data: IDataResponse, area: IFormSchema[], code: string): ICountDataResponse => {
  // 仮エリアデータ構成
  const areaKey: string[] = []
  data.map((i: IUserSchema): void => {
    const areaRandom: IFormSchema = area[Math.floor(Math.random() * area.length)]
    Object.assign(i, {
      area: areaRandom.text,
      areaCode: areaRandom.value,
      YYYYMMDD: dayjs().format('YYYY-MM-DD'),
      HHMMss: dayjs().format('HH:mm:ss'),
    })

    areaKey.push(areaRandom.value)
  })

  // 仮データによって在席情報を作成
  const count: Icount = Object.assign(
    countPrototype,
    areaKey.reduce((prev: Icount | {}, next: string): Icount => {
      //@ts-ignore
      prev[`area${next}`] = prev[`area${next}`] + 1 || 1
      return prev
    }, {}),
  )

  return {
    count,
    user: code === '' ? data : data.filter((i: IUserSchema): boolean => i.areaCode === code),
  }
}

export default dataHandle
