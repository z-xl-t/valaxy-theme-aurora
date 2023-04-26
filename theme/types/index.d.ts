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
  defaultSiteBgColor?: string
  defaultSiteColor?: string
  siteBgImage?: string
  themeColors?: String[]
  defaultPostCoverImage?: string
  defaultFriendAvatarImage?:string
  defaultFriendBgImage?: string
  defaultErrorImage?: string
  iconStyle: {
    href: string
    postCalendar: string
    postCategory: string
    postTag: string
    quoteLeft: string
    quoteRight: string
    footerCopyright: string
    footerTitle: string
    bookRecIndex: string
  }
  menu: Partial<Menu[]>
  footer: Partial<{
    beian?: {
      enable: boolean
      icp?: string
    }
    since: number
    title: string
    powered: boolean
  }>
}

export interface Menu {
  text: string
  href: string
  quote: string
  icon?: string
}



/**
 * friend link Type
 */

export interface friendType {
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
