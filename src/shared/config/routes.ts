export const routes = {
  home: '/',
  about: '/about',
} as const

export type RoutePath = (typeof routes)[keyof typeof routes]
