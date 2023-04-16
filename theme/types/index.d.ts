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
   * 背景图片(电脑页面/手机页面) 默认文章封面, 加载图片
   */
  pcImage: string
  mobileImage: string
  postImage: string
  loadingImage: string
  footer: Partial<{
    since: number
    /**
     * Powered by valaxy & valaxy-theme-${name}, default is yun
     */
    powered: boolean
    title: string
    subtitle: string
    /**
     * Chinese Users | 中国用户
     * 备案 ICP
     * 国内用户需要在网站页脚展示备案 ICP 号
     * https://beian.miit.gov.cn/
     */
    beian: {
    enable: boolean
    icp: string
    }
  }>
}

export interface Menu {
  text: string
  link: string
  quote: string
  icon: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
