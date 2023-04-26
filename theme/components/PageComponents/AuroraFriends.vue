<script setup lang="ts">
import { useFrontmatter, useThemeConfig } from 'valaxy'
import { useRoute } from 'vue-router'
import { useFetchData } from '../../composables'
import { getMenuQuote, onImgError } from '../../utils'
import type { friendType } from '../../types'

const themeConfig = useThemeConfig()
const defaultAvatar = themeConfig.value.defaultFriendAvatarImage || ''
const defaultBg = themeConfig.value.defaultFriendBgImage || ''

const frontmatter = useFrontmatter()
const data = typeof (frontmatter.value.links) === 'string' ? useFetchData<friendType>(frontmatter.value.links) : frontmatter.value.links as friendType[]

const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)
</script>

<template>
  <div class="friends">
    <AuroraQuote v-if="quote" :quote="quote" />
    <ul v-if="data" class="friend-list">
      <li v-for="(d, i) in data" :key="i" class="friend">
        <div class="site-img">
          <img :src="d.siteImg" alt="siteImg" @error="(e) => onImgError(e, defaultBg)">
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
