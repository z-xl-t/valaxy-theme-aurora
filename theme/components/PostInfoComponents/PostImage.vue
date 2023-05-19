<script lang="ts" setup>
import { useThemeConfig } from 'valaxy'

defineProps<{
  imageUrl: string | undefined
}>()

const themeConfig = useThemeConfig()
const defaultPostCoverImage = themeConfig.value.defaultPostCoverImage || ''
</script>

<template>
  <div class="post-image">
    <img v-if="imageUrl" class="post-image" :src="imageUrl">
    <img v-else class="default-image" :src="defaultPostCoverImage">
  </div>
</template>
