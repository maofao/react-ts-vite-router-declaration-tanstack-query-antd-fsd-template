import { Typography, Space, theme } from 'antd'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '@/shared/ui'
import { layoutConfig } from '@/shared/config/layout-config'
import { routes } from '@/shared/config/routes'
import { cn } from '@/shared/lib/utils'
import styles from './header.module.css'

const { Title } = Typography
const { useToken } = theme

export function Header() {
  const { token } = useToken()

  return (
    <header
      className={cn(layoutConfig.header.className, styles.header)}
      style={{
        borderBottom: `1px solid ${token.colorBorder}`,
      }}
    >
      <Space>
        <Link to={routes.home} className={styles.link}>
          <Title level={3} className={styles.title}>
            React Template
          </Title>
        </Link>
      </Space>
      <Space>
        <Link to={routes.about}>
          <Typography.Text>О проекте</Typography.Text>
        </Link>
        <ThemeToggle />
      </Space>
    </header>
  )
}
