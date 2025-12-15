import { type ReactNode } from 'react'
import { QueryClientProviderWrapper } from './query-client-provider'
import { AntdProvider } from './antd-provider'
import { RouterProvider } from './router-provider'
import { AppRouter } from '@/app/router/router'

interface AppProvidersProps {
  children?: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProviderWrapper>
      <AntdProvider>
        <RouterProvider>{children || <AppRouter />}</RouterProvider>
      </AntdProvider>
    </QueryClientProviderWrapper>
  )
}
