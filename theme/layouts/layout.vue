<script lang="ts" setup>
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()

const defaultBgImage = themeConfig.value.defaultBgColor || '#cfd0f8'
const pcBgImage = themeConfig.value.pcBgImage || ''
</script>

<template>
  <div class="layout">
    <AuroraHeader />
    <main>
      <div class="main-content">
        <slot>
          <router-view />
        </slot>
      </div>
    </main>
    <AuroraFooter />
    <div class="bg" :style="{ 'background-color': defaultBgImage }">
      <div v-if="pcBgImage" class="pc-static-bg">
        <img :src="pcBgImage" alt="bg">
      </div>
    </div>
  </div>
</template>
