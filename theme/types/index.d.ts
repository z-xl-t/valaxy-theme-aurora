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
  iconStyle: iconStyleType
  menu: Partial<MenuType[]>
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
    panelItems?: PanelItemType[]
  }>
}

export interface iconStyleType {
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
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
}

export interface MenuType {
  text: string
  href: string
  quote: string
  icon?: string
}

export interface PanelItemType {
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
