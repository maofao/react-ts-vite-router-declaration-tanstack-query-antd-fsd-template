import { AppLayout } from '@/widgets/app-layout'
import { Typography, Space, Card } from 'antd'
import { Link } from 'react-router-dom'
import { routes } from '@/shared/config/routes'
import styles from './about.module.css'

const { Title, Paragraph, Text } = Typography

export function AboutPage() {
  return (
    <AppLayout>
      <div className={styles.container}>
        <Space orientation="vertical" size="large" className={styles.content}>
          <Title level={1}>О проекте</Title>

          <Card>
            <Title level={3}>О шаблоне</Title>
            <Paragraph>
              Это современный шаблон для разработки React-приложений с полной настройкой всех
              необходимых инструментов. Шаблон использует архитектуру Feature-Sliced Design для
              организации кода.
            </Paragraph>
            <Paragraph>
              Все инструменты разработки уже настроены и готовы к использованию: ESLint, Prettier,
              Husky, Vitest. Просто начните разработку!
            </Paragraph>
          </Card>

          <Card>
            <Title level={3}>Навигация</Title>
            <Space>
              <Link to={routes.home}>
                <Text>← Вернуться на главную</Text>
              </Link>
            </Space>
          </Card>

          <Card>
            <Title level={3}>Особенности проекта</Title>
            <Space orientation="vertical" align="start">
              <Text>✅ Архитектура Feature-Sliced Design</Text>
              <Text>✅ Декларативная маршрутизация с типами</Text>
              <Text>✅ Lazy loading компонентов</Text>
              <Text>✅ Code splitting для оптимизации</Text>
              <Text>✅ TypeScript с строгой типизацией</Text>
              <Text>✅ Централизованные пути в routes.ts</Text>
              <Text>✅ Настроенные ESLint и Prettier</Text>
              <Text>✅ Git hooks с Husky</Text>
              <Text>✅ Готовая инфраструктура для тестов</Text>
              <Text>✅ Алиасы путей для удобного импорта</Text>
            </Space>
          </Card>

          <Card>
            <Title level={3}>Технологический стек</Title>
            <Space orientation="vertical" align="start">
              <Text>
                <Text strong>Frontend:</Text> React 19, TypeScript, Vite, Ant Design
              </Text>
              <Text>
                <Text strong>State Management:</Text> TanStack Query, Zustand
              </Text>
              <Text>
                <Text strong>Routing:</Text> React Router DOM 7
              </Text>
              <Text>
                <Text strong>Testing:</Text> Vitest, React Testing Library
              </Text>
              <Text>
                <Text strong>Code Quality:</Text> ESLint, Prettier, Husky
              </Text>
            </Space>
          </Card>
        </Space>
      </div>
    </AppLayout>
  )
}
