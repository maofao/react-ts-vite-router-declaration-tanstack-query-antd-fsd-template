import { Typography, Space, theme } from 'antd'
import { layoutConfig } from '@/shared/config/layout-config'
import { cn } from '@/shared/lib/utils'
import styles from './footer.module.css'

const { Text } = Typography
const { useToken } = theme

export function Footer() {
  const { token } = useToken()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(layoutConfig.footer.className, styles.footer)}
      style={{
        borderTop: `1px solid ${token.colorBorder}`,
      }}
    >
      <Space orientation="vertical" size="small">
        <Text type="secondary">React + TypeScript + Vite + FSD Template</Text>
        <Text type="secondary" className={styles.copyright}>
          © {currentYear} Все права защищены
        </Text>
      </Space>
    </footer>
  )
}
