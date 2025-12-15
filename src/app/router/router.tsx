import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '@/shared/config/routes'

const HomePage = lazy(() => import('@/pages/home').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(() =>
  import('@/pages/about').then((module) => ({ default: module.AboutPage }))
)

export function AppRouter() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.about} element={<AboutPage />} />
    </Routes>
  )
}
