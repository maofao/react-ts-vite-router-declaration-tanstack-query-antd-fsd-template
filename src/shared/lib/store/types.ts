export type Theme = 'light' | 'dark' | 'system'

export interface UIState {
  theme: Theme
  sidebarCollapsed: boolean
  isMobileMenuOpen: boolean
}

export interface UIActions {
  setTheme: (theme: Theme) => void
  toggleSidebar: () => void
  setSidebarCollapsed: (collapsed: boolean) => void
  toggleMobileMenu: () => void
  setMobileMenuOpen: (open: boolean) => void
}

export type UIStore = UIState & UIActions
