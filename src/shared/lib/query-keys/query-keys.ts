import { type QueryKey } from '@tanstack/react-query'

export const queryKeys = {
  all: ['api'] as const,
  users: {
    all: ['api', 'users'] as const,
    lists: () => [...queryKeys.users.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.users.lists(), filters] as const,
    details: () => [...queryKeys.users.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.users.details(), id] as const,
  },
  posts: {
    all: ['api', 'posts'] as const,
    lists: () => [...queryKeys.posts.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.posts.lists(), filters] as const,
    details: () => [...queryKeys.posts.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.posts.details(), id] as const,
  },
} as const

export function createQueryKey(baseKey: QueryKey, ...additionalKeys: unknown[]): QueryKey {
  return [...baseKey, ...additionalKeys]
}

export function createApiQueryKey(url: string, ...additionalKeys: unknown[]): QueryKey {
  return ['api', url, ...additionalKeys]
}
