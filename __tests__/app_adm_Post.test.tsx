// 非同期コンポーネントのレンダリング出来ず
import { dateToYmd } from 'app/adm/Post'

let date: Date
beforeEach(() => {
  date = new Date(1990, 11, 31)
})

describe('auth/adm/Post dateToYmd', () => {
  it('fn short word', () => {
    const result = dateToYmd(date)
    expect(result).toBe('1990 / 12 / 31')
  })
})
