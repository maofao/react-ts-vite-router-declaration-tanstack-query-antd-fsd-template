import { queryKeys as baseQueryKeys } from '@/shared/lib/query-keys'

export const userQueryKeys = {
  all: baseQueryKeys.users.all,
  lists: () => baseQueryKeys.users.lists(),
  list: (filters?: Record<string, unknown>) => baseQueryKeys.users.list(filters),
  details: () => baseQueryKeys.users.details(),
  detail: (id: string | number) => baseQueryKeys.users.detail(id),
}
