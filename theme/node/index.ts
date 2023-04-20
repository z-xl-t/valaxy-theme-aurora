import type { ThemeConfig } from '../types'

/**
 * Default Config
 */
export const defaultThemeConfig: ThemeConfig = {
  title: '椎咲良田',
  subtitle: '快走吧 趁风停止之前',
  author: '椎咲良田',
  description: '世界并不美丽，却也因此而美丽',
  avatar: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/avatar.jpg',
  favicon: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/favicon.jpg',
  domain: 'aurora.zmxlt.top',
  defaultBgColor: '#cfd0f8',
  pcBgImage: '/pc.png',
  mobileBgImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/mobile.png',
  defaultPostCoverImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/postDefaultImage%20.png',
  menu: [
    {
      text: '首页',
      link: '/',
      quote: '',
      icon: 'icon-index',
    },
    {
      text: '归档',
      link: '/archives/',
      quote: '華枝春滿 天心月圓',
      icon: 'icon-archives',
    }, {
      text: '分类',
      link: '/categories/',
      quote: '桜華月想 暮色蒼然',
      icon: 'icon-categories',
    },
    {
      text: '标签',
      link: '/tags/',
      quote: '灯笼流丽，百鬼夜行',
      icon: 'icon-tags',
    }, {
      text: '书单',
      link: '/books/',
      quote: '追想風景 彼岸帰航',
      icon: 'icon-books',
    },
    {
      text: '灵感',
      link: '/inspirations/',
      quote: '詠奏妖華，明鏡止水',
      icon: 'icon-inspiration',
    }, {
      text: '友链',
      link: '/friends/',
      quote: '青青子衿，悠悠我心',
      icon: 'icon-friends',
    },
    {
      text: '关于',
      link: '/about/',
      quote: '蝉鸣如雨，花宵道中',
      icon: 'icon-about',
    },
  ],
  footer: {
    since: 2022,
    title: '椎咲良田',
    subtitle: '快走吧 趁风停止之前',
    themeName: 'valaxy-theme-aurora',
    themeAddress: 'https://github.com/zmxlt/valaxy-theme-aurora',
  },
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
}
