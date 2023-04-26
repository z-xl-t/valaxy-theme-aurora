import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  url: 'https://aurora.zmxlt.top/',
  pageSize: 10,
  title: 'Aurora Blog',
  favicon: '/favicon.jpg',
  mediumZoom: {
    enable: true,
    selector: 'img',
  },
})
