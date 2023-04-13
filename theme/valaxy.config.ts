import { defineTheme } from 'valaxy'
import { defaultThemeConfig } from './node'
import type { ThemeConfig } from './types'

export default defineTheme<ThemeConfig>((options) => {
  return {
    themeConfig: defaultThemeConfig,
  }
})
