import { useUIStore } from './ui-store'
import type { UIStore } from './types'

export const useTheme = () => {
  const theme = useUIStore((state) => state.theme)
  const setTheme = useUIStore((state) => state.setTheme)
  return { theme, setTheme }
}

export const useSidebar = () => {
  const sidebarCollapsed = useUIStore((state) => state.sidebarCollapsed)
  const toggleSidebar = useUIStore((state) => state.toggleSidebar)
  const setSidebarCollapsed = useUIStore((state) => state.setSidebarCollapsed)
  return { sidebarCollapsed, toggleSidebar, setSidebarCollapsed }
}

export const useMobileMenu = () => {
  const isMobileMenuOpen = useUIStore((state) => state.isMobileMenuOpen)
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu)
  const setMobileMenuOpen = useUIStore((state) => state.setMobileMenuOpen)
  return { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen }
}

export function useUIStoreSelector<T>(selector: (state: UIStore) => T): T {
  return useUIStore(selector)
}
