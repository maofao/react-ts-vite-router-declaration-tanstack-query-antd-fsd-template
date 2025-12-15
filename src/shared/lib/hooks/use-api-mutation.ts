import {
  useMutation,
  type UseMutationOptions,
  type QueryKey,
  useQueryClient,
} from '@tanstack/react-query'
import { apiClient, type ApiResponse, type ApiRequestConfig } from '@/shared/api'
import { type AxiosError } from 'axios'
import { useEffect } from 'react'

type UseApiMutationOptions<TData, TVariables, TError = unknown> = Omit<
  UseMutationOptions<ApiResponse<TData>, AxiosError<TError>, TVariables>,
  'mutationFn'
> & {
  url: string
  method?: 'post' | 'put' | 'patch' | 'delete'
  invalidateQueries?: QueryKey[]
}

export function useApiMutation<TData, TVariables = void, TError = unknown>(
  options: UseApiMutationOptions<TData, TVariables, TError>
) {
  const { url, method = 'post', invalidateQueries, ...mutationOptions } = options
  const queryClient = useQueryClient()

  const mutation = useMutation<ApiResponse<TData>, AxiosError<TError>, TVariables>({
    ...mutationOptions,
    mutationFn: async (variables: TVariables) => {
      const config: ApiRequestConfig = {
        url,
        method,
        data: variables,
      }
      const response = await apiClient.request<TData>(config)
      return response
    },
  })

  useEffect(() => {
    if (mutation.isSuccess && invalidateQueries && invalidateQueries.length > 0) {
      invalidateQueries.forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey })
      })
    }
  }, [mutation.isSuccess, invalidateQueries, queryClient])

  return mutation
}
