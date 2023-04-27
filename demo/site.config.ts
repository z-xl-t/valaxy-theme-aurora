import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  url: 'https://aurora.zmxlt.top/',
  pageSize: 3,
  title: 'Aurora 主题',
  description: 'Aurora 主题的描述',
  favicon: '/favicon.jpg',
  mediumZoom: {
    enable: true,
    selector: '.markdown img',
  },
})
