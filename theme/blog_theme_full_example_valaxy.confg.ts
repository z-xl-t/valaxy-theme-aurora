import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-aurora'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'aurora',
  themeConfig: {
    title: '椎咲良田',
    subtitle: '快走吧, 趁风停止之前',
    author: '椎咲良田',
    defaultSiteBgColor: '#cfd0f8',
    defaultSiteColor: '#b854d4',
    themeColors: [
      '#B28FCE', // 薄
      '#86C166', // 苗
      '#F596AA', // 桃
      '#F19483', // 曙
      '#F9BF45', // 玉子
      '#FAD689', // 浅黄
      '#E79460', // 洗柿
      '#2EA9DF', // 露草
      '#FB966E', // 洗朱
      '#BC9F77', // 白茶
      '#867835', // 黄海松茶
      '#B9887D', // 水がき
    ],
    siteBgImage: '/pc.png',
    defaultPostCoverImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/postDefaultImage%20.png',
    defaultFriendAvatarImage: '/pc.png',
    defaultFriendBgImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/mobile.png',

    /**
     *
     *  图标 remix icon 图标
     * https://remixicon.com/
     * https://github.com/Remix-Design/RemixIcon
     *
     */
    iconStyle: {
      href: 'https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css',
      postCalendar: 'ri-calendar-2-line',
      postCategory: 'ri-bookmark-line',
      postTag: 'ri-price-tag-3-line',
      quoteLeft: 'ri-double-quotes-l',
      quoteRight: 'ri-double-quotes-r',
      footerCopyright: 'ri-copyright-line',
      footerTitle: 'ri-heart-2-line',
      bookRecIndex: 'ri-star-fill',
      panelLeft: 'ri-arrow-drop-left-line',
      panelRight: 'ri-arrow-drop-right-line',
    },
    menu: [
      {
        text: '首页',
        href: '/',
        quote: '',
        icon: 'ri-home-3-line',
      },
      {
        text: '归档',
        href: '/archives/',
        quote: '華枝春滿 天心月圓',
        icon: 'ri-archive-line',
      }, {
        text: '分类',
        href: '/categories/',
        quote: '桜華月想 暮色蒼然',
        icon: 'ri-bookmark-line',
      },
      {
        text: '标签',
        href: '/tags/',
        quote: '灯笼流丽，百鬼夜行',
        icon: 'ri-price-tag-3-line',
      }, {
        text: '书单',
        href: '/books/',
        quote: '追想風景 彼岸帰航',
        icon: 'ri-book-open-line',
      },
      {
        text: '灵感',
        href: '/inspirations/',
        quote: '詠奏妖華，明鏡止水',
        icon: 'ri-quill-pen-line',
      }, {
        text: '友链',
        href: '/friends/',
        quote: '青青子衿，悠悠我心',
        icon: 'ri-heart-3-line',
      },
      {
        text: '关于',
        href: '/about/',
        quote: '蝉鸣如雨，花宵道中',
        icon: 'ri-centos-line',
      },
    ],
    footer: {
      beian: {
        enable: true,
        icp: '苏ICP备17038157号',
      },
      since: 2022,
      title: '椎咲良田',
      powered: true,
    },
    panel: {
      enable: true,
      panelIconImage: 'https://i.loli.net/2020/12/27/rPA2XaEJsnq5UIC.png',
      panelTitle: '联系方式',
      panelItems: [
        {
          desc: 'Q Q',
          qrCodeImage: '/pc.png',
        },
        {
          desc: '微信',
          qrCodeImage: 'https://i.loli.net/2020/12/27/rPA2XaEJsnq5UIC.png',
        },
        {
          desc: '蓝鸟',
          qrCodeImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/postDefaultImage%20.png',
        }, {
          desc: 'xx',
          qrCodeImage: 'https://i.loli.net/2020/12/27/rPA2XaEJsnq5UIC.png',
        },
        {
          desc: 'yy',
          qrCodeImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/postDefaultImage%20.png',
        },
      ],
    },
  }
  ,
})
