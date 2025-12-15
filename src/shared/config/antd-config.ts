import { theme as antdTheme, type ThemeConfig } from 'antd'

export const createAntdTheme = (
  algorithm: typeof antdTheme.darkAlgorithm | typeof antdTheme.defaultAlgorithm
): ThemeConfig => {
  return {
    algorithm,
    token: {
      colorPrimary: '#1890ff',
    },
  }
}
