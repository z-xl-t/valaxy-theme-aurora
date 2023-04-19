<script lang="ts" setup>
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
const menu = themeConfig.value.menu || []
const mobileBgImage = themeConfig.value.mobileBgImage || ''
</script>

<template>
  <header>
    <div class="mobile-bg">
      <img :src="mobileBgImage" alt="mobile-bg">
    </div>
    <h1 class="title">
      {{ themeConfig.title }}
    </h1>
    <h2 class="description">
      {{ themeConfig.subtitle }}
    </h2>
    <nav class="menu">
      <a v-for="(item, index) in menu" :key="index" class="menu-item" :href=" item?.link">
        <li>
          <i :class=" item?.icon" />
          <span>{{ item?.text }}</span>
        </li>
      </a>
    </nav>
  </header>
</template>
