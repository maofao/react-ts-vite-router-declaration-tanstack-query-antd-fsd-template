import { Select, Space } from 'antd'
import { useTheme, type Theme } from '@/shared/lib/store'

const themes: { value: Theme; label: string }[] = [
  { value: 'light', label: 'Светлая' },
  { value: 'dark', label: 'Темная' },
  { value: 'system', label: 'Системная' },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Space>
      <Select
        value={theme}
        onChange={(value) => setTheme(value as Theme)}
        style={{ width: 150 }}
        options={themes}
      />
    </Space>
  )
}
