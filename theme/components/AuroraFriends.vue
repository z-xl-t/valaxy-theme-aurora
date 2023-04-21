<script setup lang="ts">
import { useThemeConfig } from 'valaxy'
import { useFetchData } from '../composables'
import { ImgErrorHander } from '../utils'
import AuroraQuote from './AuroraQuote.vue'

interface LinkType {
  name: string
  siteUrl: string
  siteImg: string
  avatar: string
}

const props = defineProps<{
  links: string | LinkType[]
  random: boolean
}>()

const themeConfig = useThemeConfig()
const defaultAvatar = themeConfig.value.defaultFriendAvatarImage || ''
const defaultBg = themeConfig.value.defaultFriendBgImage || ''
const quote = themeConfig.value.menu.find((m: { link: string }) => m.link.includes('friends')).quote || ''

const data = typeof (props.links) === 'string' ? useFetchData<LinkType>(props.links) : props.links

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
