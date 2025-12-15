import { Spin, type SpinProps } from 'antd'
import styles from './loading.module.css'

interface LoadingProps extends SpinProps {
  fullScreen?: boolean
}

export function Loading({ fullScreen = false, className, ...props }: LoadingProps) {
  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <Spin size="large" {...props} />
      </div>
    )
  }

  return <Spin className={className} {...props} />
}
