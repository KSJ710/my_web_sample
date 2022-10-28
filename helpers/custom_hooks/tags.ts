import useSWR from 'swr'
import { fetcher } from 'helpers/common'

export function useGetPost() {
  const { data, error } = useSWR('/api/models/posts/index', fetcher)

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error
  }
}