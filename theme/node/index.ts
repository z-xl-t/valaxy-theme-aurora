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
  domain: 'zmxlt.top',
  pcImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/pc.png',
  mobileImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/mobile.png',
  postImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/postDefaultImage .png',
  loadingImage: 'https://cdn.jsdelivr.net/gh/sanshiliuxiao/blog-static/loading.gif',
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
}
