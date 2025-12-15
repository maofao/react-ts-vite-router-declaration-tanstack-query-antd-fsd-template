import { useQuery, type UseQueryOptions, type QueryKey } from '@tanstack/react-query'
import { apiClient, type ApiResponse } from '@/shared/api'
import { type AxiosError } from 'axios'
import { createApiQueryKey } from '@/shared/lib/query-keys'

type UseApiQueryOptions<TData, TError = unknown> = Omit<
  UseQueryOptions<ApiResponse<TData>, AxiosError<TError>, ApiResponse<TData>>,
  'queryFn' | 'queryKey'
> & {
  url: string
  queryKey?: QueryKey
  enabled?: boolean
}

export function useApiQuery<TData, TError = unknown>(options: UseApiQueryOptions<TData, TError>) {
  const { url, queryKey, enabled = true, ...queryOptions } = options

  const finalQueryKey = queryKey || createApiQueryKey(url)

  return useQuery<ApiResponse<TData>, AxiosError<TError>, ApiResponse<TData>>({
    ...queryOptions,
    queryKey: finalQueryKey,
    queryFn: async () => {
      const response = await apiClient.get<TData>(url)
      return response
    },
    enabled,
  })
}
