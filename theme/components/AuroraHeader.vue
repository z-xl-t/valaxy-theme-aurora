<script lang="ts" setup>
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
const menu = themeConfig.value.menu || []
</script>

<template>
  <header>
    <h1 class="title">
      {{ themeConfig.title }}
    </h1>
    <h2 class="description">
      {{ themeConfig.subtitle }}
    </h2>
    <nav class="menu">
      <a v-for="(item, index) in menu" :key="index" :href=" item?.link">
        <i :class=" item?.icon" />
        <span>{{ item?.text }}</span>
      </a>
    </nav>
  </header>
</template>
