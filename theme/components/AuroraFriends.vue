<script setup lang="ts">
import { useFrontmatter, useThemeConfig } from 'valaxy'
import { useFetchData } from '../composables'
import { ImgErrorHander } from '../utils'

interface LinkType {
  name: string
  siteUrl: string
  siteImg: string
  avatar: string
}

const themeConfig = useThemeConfig()
const defaultAvatar = themeConfig.value.defaultFriendAvatarImage || ''
const defaultBg = themeConfig.value.defaultFriendBgImage || ''
const quote = themeConfig.value.menu.find((m: { link: string }) => m.link.includes('friends')).quote || ''

const frontmatter = useFrontmatter()
const data = typeof (frontmatter.value.links) === 'string' ? useFetchData<LinkType>(frontmatter.value.links) : frontmatter.value.links

function onImgError(e: Event, defaultImage: string) {
  ImgErrorHander(e, defaultImage)
}
</script>

<template>
  <div class="friends">
    <AuroraQuote v-if="quote" :quote="quote" />
    <ul v-if="data" class="friend-list">
      <li v-for="(d, i) in data" :key="i" class="friend">
        <div class="site-img">
          <img :src="d?.siteImg" alt="siteImg" @error="(e) => onImgError(e, defaultBg)">
        </div>
        <div class="site-info">
          <div class="avatar">
            <img :src="d.avatar" alt="avatar" @error="(e) => onImgError(e, defaultAvatar)">
          </div>
          <div class="name">
            {{ d.name }}
          </div>
        </div>
        <a :href="d.siteUrl" target="_blank" class="site-link" />
      </li>
    </ul>
  </div>
</template>
