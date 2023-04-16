import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-aurora'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'aurora',
  themeConfig: {},
})
