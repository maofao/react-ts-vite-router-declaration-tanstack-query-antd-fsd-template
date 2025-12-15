import { type ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/config'

interface QueryClientProviderProps {
  children: ReactNode
}

export function QueryClientProviderWrapper({ children }: QueryClientProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
