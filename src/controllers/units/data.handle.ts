import dayjs from 'dayjs'
import type { IUserSchema, IDataResponse, ICount, IHandleDataResponse } from '../../types/user.type'
import type { IFormSchema } from '../../types/form.type'

// ----- データCRUD controller unit -----
/**
 *  graphql data 読み取り
 *  @param {Array} data ユーザーのデータ
 *  @param {Array} area エリアのデータ
 *  @param {string} code 選択されたエリア番号
 *  @return data & count
 */

const dataHandle = (data: IDataResponse, area: IFormSchema[], code: string): IHandleDataResponse => {
  let count: ICount[] = []
  for (let i = 0; i < 5; i++) {
    count.push({ count: 0 })
  }

  // 仮エリアデータ作成
  data.map((i: IUserSchema): void => {
    const areaRandom: IFormSchema = area[Math.floor(Math.random() * area.length)]
    Object.assign(i, {
      area: areaRandom.text,
      areaCode: areaRandom.value,
      YYYYMMDD: dayjs().format('YYYY-MM-DD'),
      HHMMss: dayjs().format('HH:mm:ss'),
    })

    // エリアの数集計
    count[Number(areaRandom.value) - 1].count++
  })

  // 指定したエリアを絞り込み、ソート順処理
  const user: IDataResponse = code === '' ? data : data.filter((i: IUserSchema): boolean => i.areaCode === code)
  user.sort((a: IUserSchema, b: IUserSchema): number => {
    return Number(a.areaCode) - Number(b.areaCode)
  })

  // 仮データによって在席情報を作成
  area.map((item: IFormSchema, index: number): void => {
    Object.assign(count[index], { area: item.text }, { value: Number(item.value) })
  })
  // 全員総数作成
  count.unshift({
    count: data.length,
    area: '全員',
    value: 0,
  })

  return {
    count,
    user,
  }
}

export default dataHandle
