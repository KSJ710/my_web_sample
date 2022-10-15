import axios from 'axios'

// useSWRが受け取る関数でapiルートURLが渡される
export const fetcher: Fetcher = (url: string) =>
  axios.get(url).then((res) => {
    return res.data
  })

// stringDate→yyyy/mm/dd
export function stringDateToYmd(stringDate: string) {
  let numberDate = Date.parse(stringDate)
  let date = new Date(numberDate)
  let yyyy = date.getFullYear()
  let MM = ('00' + (date.getMonth() + 1)).slice(-2)
  let dd = ('00' + date.getDate()).slice(-2)
  return yyyy + ' / ' + MM + ' / ' + dd
}

// ダミー画像読み込み
export const dummyImage = () => {
  return `https://prtimes.jp/i/2663/1169/resize/d2663-1169-349d5248bc5915b3c06c-0.jpg`
}
