/**
 * Theme Config
 */
export interface ThemeConfig {
  title: string
  subtitle?: string
  author: string
  avatar?: string
  favicon?: string
  domain?: string
  /**
   * Header 栏的子页面
   */
  menu: Partial<Menu[]>
  /**
   * 默认背景颜色，背景图片(电脑页面/手机页面) 默认文章封面、默认友链头像和主题背景
   */
  defaultBgColor?: string
  pcBgImage?: string
  mobileBgImage?: string
  defaultPostCoverImage?: string
  defaultFriendAvatarImage?:string
  defaultFriendBgImage?: string
  defaultErrorImage?: string
  
  footer: Partial<{
    since: number
    /**
     * Powered by valaxy & valaxy-theme-${name}, default is yun
     */
    title: string
    subtitle: string
    themeName: string
    themeAddress: string
  }>
  themeColors: String[]
}

export interface Menu {
  text: string
  link: string
  quote: string
  icon: string
}


/**
 * friend link Type
 */

export interface firendType {
  name: string
  siteUrl: string
  siteImg: string
  avatar: string
}

/**
 * inspiration Type
 */
export interface inspirationType {
  time: string
  moment: string
  imgUrl?: string
  imgDesc?: string
}

/**
 * book type
 */

export interface bookType {
  name: string
  cover: string
  author: string
  source: string
  publicationTime: string
  description: string
  recommendIndex: number
}

export type ThemeUserConfig = Partial<ThemeConfig>
