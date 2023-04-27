/**
 * Theme Config
 */
export interface ThemeConfig {
  title: string
  subtitle?: string
  author: string
  defaultSiteBgColor?: string
  defaultSiteColor?: string
  siteBgImage?: string
  themeColors?: String[]
  defaultPostCoverImage?: string
  defaultFriendAvatarImage?:string
  defaultFriendBgImage?: string
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
    panelLeft: string
    panelRight: string
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
  panel: Partial<{
    enable: boolean
    panelIconImage: string,
    panelTitle?: string,
    panelItems?: PanelItem[]
  }>
}

export interface Menu {
  text: string
  href: string
  quote: string
  icon?: string
}

export interface PanelItem {
  desc: string
  qrCodeImage: string
}

/**
 * friend link Type
 */

export interface FriendType {
  name: string
  siteUrl: string
  siteImg: string
  avatar: string
}

/**
 * inspiration Type
 */
export interface InspirationType {
  time: string
  moment: string
  imgUrl?: string
  imgDesc?: string
}

/**
 * book type
 */

export interface BookType {
  name: string
  cover: string
  author: string
  source: string
  publicationTime: string
  description: string
  recommendIndex: number
}

export type ThemeUserConfig = Partial<ThemeConfig>
