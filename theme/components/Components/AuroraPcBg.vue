<script lang="ts" setup>
import { useThemeConfig } from '../../composables'

const themeConfig = useThemeConfig()

const defaultBgImage = themeConfig.value.defaultBgColor || '#cfd0f8'
const pcBgImage = themeConfig.value.pcBgImage || ''
</script>

<template>
  <div class="bg" :style="{ 'background-color': defaultBgImage }">
    <div v-if="pcBgImage" class="pc-static-bg">
      <img :src="pcBgImage" alt="bg">
    </div>
  </div>
</template>
