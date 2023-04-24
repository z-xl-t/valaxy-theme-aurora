<script lang="ts" setup>
import { useThemeConfig } from 'valaxy'

defineProps<{
  imageUrl: string | undefined
}>()

const themeConfig = useThemeConfig()
const defaultPostCoverImage = themeConfig.value.defaultPostCoverImage || ''
</script>

<template>
  <img class="default-image" :src="defaultPostCoverImage" alt="default-post-image">
  <img v-if="imageUrl" class="post-image" :src="imageUrl" alt="post-image">
</template>
