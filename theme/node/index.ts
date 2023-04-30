import type { Menu, PanelItem, ThemeConfig } from '../types'

class ThemeConfigClass implements ThemeConfig {
  title: string
  subtitle?: string
  author: string
  defaultSiteBgColor?: string
  defaultSiteColor?: string
  siteBgImage?: string
  themeColors?: String[]
  defaultPostCoverImage?: string
  defaultFriendAvatarImage?: string
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
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
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
    panelIconImage: string
    panelTitle?: string
    panelItems?: PanelItem[]
  }>

  constructor() {
    this.title = ''
    this.subtitle = ''
    this.author = ''
    this.defaultSiteBgColor = ''
    this.defaultSiteColor = ''
    this.siteBgImage = ''
    this.themeColors = [] as string[]
    this.defaultPostCoverImage = ''
    this.defaultFriendAvatarImage = ''
    this.defaultFriendBgImage = ''
    this.iconStyle = {
      href: '',
      postCalendar: '',
      postCategory: '',
      postTag: '',
      quoteLeft: '',
      quoteRight: '',
      footerCopyright: '',
      footerTitle: '',
      bookRecIndex: '',
      panelLeft: '',
      panelRight: '',
    }
    this.menu = []
    this.footer = {}
    this.panel = {}
  }
}

export const defaultThemeConfig: ThemeConfig = new ThemeConfigClass()
