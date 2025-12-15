import { type ReactNode, useEffect, useMemo, useSyncExternalStore } from 'react'
import { ConfigProvider, theme as antdTheme } from 'antd'
import { useUIStore, type Theme } from '@/shared/lib/store'
import { getSystemTheme, subscribeToSystemTheme } from '@/shared/lib/utils'
import { createAntdTheme } from '@/shared/config/antd-config'

interface AntdProviderProps {
  children: ReactNode
}

const getEffectiveTheme = (theme: Theme, systemTheme: 'light' | 'dark'): 'light' | 'dark' => {
  if (theme === 'system') {
    return systemTheme
  }
  return theme
}

export function AntdProvider({ children }: AntdProviderProps) {
  const theme = useUIStore((state) => state.theme)

  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme,
    (): 'light' | 'dark' => 'light'
  )

  const effectiveTheme = useMemo(() => getEffectiveTheme(theme, systemTheme), [theme, systemTheme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', effectiveTheme)
  }, [effectiveTheme])

  const algorithm = effectiveTheme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm

  const antdThemeConfig = useMemo(() => createAntdTheme(algorithm), [algorithm])

  return <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
}
