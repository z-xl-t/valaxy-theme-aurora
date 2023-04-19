/**
 * Theme Config
 */
export interface ThemeConfig {
  title: string
  subtitle: string
  author: string
  description: string
  avatar: string
  favicon: string
  domain: string
  /**
   * Header 栏的子页面
   */
  menu: Partial<Menu[]>
  /**
   * 默认背景颜色，背景图片(电脑页面/手机页面) 默认文章封面
   */
  defaultBgColor: string
  pcBgImage: string
  mobileBgImage: string
  postCoverImage: string
  footer: Partial<{
    since: number
    /**
     * Powered by valaxy & valaxy-theme-${name}, default is yun
     */
    powered: boolean
    title: string
    subtitle: string
    themeName: string
    themeAddress: string
  }>
}

export interface Menu {
  text: string
  link: string
  quote: string
  icon: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
