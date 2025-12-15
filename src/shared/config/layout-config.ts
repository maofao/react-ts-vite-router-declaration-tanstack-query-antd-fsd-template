import styles from './layout.module.css'

export const layoutConfig = {
  layout: {
    className: styles.layout,
  },
  content: {
    className: styles.content,
  },
  header: {
    className: styles.header,
  },
  footer: {
    className: styles.footer,
  },
} as const
