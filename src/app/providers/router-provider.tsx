import { type ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from '@/shared/ui'

interface RouterProviderProps {
  children: ReactNode
}

export function RouterProvider({ children }: RouterProviderProps) {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading fullScreen />}>{children}</Suspense>
    </BrowserRouter>
  )
}
