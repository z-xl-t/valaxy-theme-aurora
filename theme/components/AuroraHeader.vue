<script lang="ts" setup>
import { useThemeConfig } from '../composables'
import type { Menu } from '../types'

const themeConfig = useThemeConfig()
const title = themeConfig.value.title || ''
const subtitle = themeConfig.value.subtitle || ''
const menu = (themeConfig.value.menu || []) as Menu[]
const mobileBgImage = themeConfig.value.mobileBgImage || ''
</script>

<template>
  <header class="header">
    <div v-if="mobileBgImage" class="mobile-bg">
      <img :src="mobileBgImage" alt="mobile-bg">
    </div>
    <h1 v-if="title" class="title">
      {{ title }}
    </h1>
    <h2 v-if="subtitle " class="subtitle">
      {{ subtitle }}
    </h2>
    <nav v-if="menu" class="menu">
      <router-link v-for="(item, index) in menu" :key="index" :to="item.link" class="menu-item">
        <li>
          <i :class=" item?.icon" />
          <span>{{ item?.text }}</span>
        </li>
      </router-link>
    </nav>
  </header>
</template>
