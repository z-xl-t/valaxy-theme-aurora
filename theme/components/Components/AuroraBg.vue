<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeConfig } from '../../composables'

const themeConfig = useThemeConfig()

const siteBgImage = computed(() => themeConfig.value.siteBgImage)
</script>

<template>
  <div class="bg">
    <div v-if="siteBgImage" class="bg-image">
      <img :src="siteBgImage" alt="site-background-image">
    </div>
  </div>
</template>
