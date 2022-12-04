// 非同期コンポーネントのレンダリング出来ず
import { replaceOverWordCount } from 'app/adm/Category'
import { act } from 'react-dom/test-utils'

beforeEach(() => {})

afterEach(() => {})

describe('auth/adm replaceOverWordCount', () => {
  it('fn short word', () => {
    const result = replaceOverWordCount('123456789012345')
    expect(result).toBe('123456789012345')
  })
  it('fn long word', () => {
    const result = replaceOverWordCount('1234567890123456')
    expect(result).toBe('123456789012345...')
  })
})
