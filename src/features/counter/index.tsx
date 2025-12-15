import { useState } from 'react'
import { Button } from '@/shared/ui'
import { Space, Typography } from 'antd'

const { Text } = Typography

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Space orientation="vertical" size="middle">
      <Text>Счетчик: {count}</Text>
      <Space>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          Увеличить
        </Button>
        <Button onClick={() => setCount(0)}>Сбросить</Button>
      </Space>
    </Space>
  )
}
