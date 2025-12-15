import { AppLayout } from '@/widgets/app-layout'
import { Counter } from '@/features/counter'
import { Typography, Space, Divider } from 'antd'
import styles from './home.module.css'

const { Title, Paragraph, Text } = Typography

export function HomePage() {
  return (
    <AppLayout>
      <div className={styles.container}>
        <Space orientation="vertical" size="large" className={styles.content}>
          <div>
            <Title level={1}>React + TypeScript + Vite</Title>
            <Title level={2}>FSD Template</Title>
          </div>

          <Divider />

          <div>
            <Title level={3}>О шаблоне</Title>
            <Paragraph>
              <Text strong>Feature-Sliced Design (FSD)</Text> — архитектурная методология для
              организации frontend-кода. Шаблон включает все необходимые инструменты для современной
              разработки React-приложений.
            </Paragraph>
          </div>

          <div>
            <Title level={3}>Технологии</Title>
            <Space orientation="vertical" size="small">
              <Text>⚛️ React 19.2.0</Text>
              <Text>📘 TypeScript 5.9.3</Text>
              <Text>⚡ Vite 7.2.4</Text>
              <Text>🎨 Ant Design 6.1.1</Text>
              <Text>🔄 TanStack Query 5.90.12</Text>
              <Text>🛣️ React Router DOM 7.10.1</Text>
              <Text>🐻 Zustand 5.0.9</Text>
              <Text>📡 Axios 1.13.2</Text>
            </Space>
          </div>

          <Divider />

          <div>
            <Title level={3}>Инструменты разработки</Title>
            <Space orientation="vertical" size="small">
              <Text>🧪 Vitest 4.0.15 - Тестирование</Text>
              <Text>🔍 ESLint 9.39.1 - Линтинг кода</Text>
              <Text>💅 Prettier 3.7.4 - Форматирование</Text>
              <Text>🐕 Husky 9.1.7 - Git hooks</Text>
              <Text>🎯 FSD - Feature-Sliced Design архитектура</Text>
            </Space>
          </div>

          <Divider />

          <div>
            <Title level={3}>Структура проекта</Title>
            <Paragraph>
              Проект организован по методологии Feature-Sliced Design с разделением на слои:
              <Text code>app</Text>, <Text code>pages</Text>, <Text code>widgets</Text>,{' '}
              <Text code>features</Text>, <Text code>entities</Text>, <Text code>shared</Text>.
            </Paragraph>
            <Paragraph>
              Каждый слой имеет четкие правила импортов и ответственности, что обеспечивает
              масштабируемость и поддерживаемость кода.
            </Paragraph>
          </div>

          <Divider />

          <div>
            <Title level={3}>Возможности</Title>
            <Space orientation="vertical" align="start" size="small">
              <Text>✅ Готовая архитектура FSD</Text>
              <Text>✅ TypeScript с строгой типизацией</Text>
              <Text>✅ Настроенные ESLint и Prettier</Text>
              <Text>✅ Git hooks с Husky</Text>
              <Text>✅ Тестирование с Vitest</Text>
              <Text>✅ Декларативная маршрутизация</Text>
              <Text>✅ Lazy loading компонентов</Text>
              <Text>✅ Code splitting</Text>
              <Text>✅ Алиасы путей для удобного импорта</Text>
            </Space>
          </div>

          <Divider />

          <Counter />
        </Space>
      </div>
    </AppLayout>
  )
}
