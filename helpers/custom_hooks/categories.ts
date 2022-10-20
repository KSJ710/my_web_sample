import useSWR from 'swr'
import { fetcher } from 'helpers/common'

export function useGetCategories() {
  const { data, error } = useSWR('/api/models/m_categories/index', fetcher)

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}
