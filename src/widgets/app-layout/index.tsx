import { type ReactNode } from 'react'
import { Layout } from 'antd'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { layoutConfig } from '@/shared/config/layout-config'

const { Content } = Layout

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Layout className={layoutConfig.layout.className}>
      <Header />
      <Content className={layoutConfig.content.className}>{children}</Content>
      <Footer />
    </Layout>
  )
}
