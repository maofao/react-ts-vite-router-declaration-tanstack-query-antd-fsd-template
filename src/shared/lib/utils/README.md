# Утилиты

## cn() - Объединение классов

Утилита для условного объединения CSS классов. Основана на `clsx` и полностью совместима с Ant Design и CSS modules.

### Использование с CSS Modules

```typescript
import { cn } from '@/shared/lib/utils'
import styles from './component.module.css'

function Component({ isActive, variant }: Props) {
  return (
    <div className={cn(styles.base, isActive && styles.active, variant === 'primary' && styles.primary)}>
      Content
    </div>
  )
}
```

### Использование с Ant Design

```typescript
import { Button } from 'antd'
import { cn } from '@/shared/lib/utils'
import styles from './button.module.css'

function CustomButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(styles.customButton, className)}
      {...props}
    />
  )
}
```

### Условные классы

```typescript
import { cn } from '@/shared/lib/utils'
import styles from './component.module.css'

function Component({ error, disabled }: Props) {
  return (
    <div className={cn(
      styles.base,
      error && styles.error,
      disabled && styles.disabled,
      !disabled && styles.enabled
    )}>
      Content
    </div>
  )
}
```

### Объединение с классами Ant Design

```typescript
import { Space } from 'antd'
import { cn } from '@/shared/lib/utils'
import styles from './space.module.css'

function CustomSpace({ className, ...props }: SpaceProps) {
  return (
    <Space
      className={cn('ant-space-custom', styles.customSpace, className)}
      {...props}
    />
  )
}
```
