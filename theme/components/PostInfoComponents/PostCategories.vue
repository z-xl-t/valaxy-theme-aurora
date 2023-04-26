<script setup lang="ts">
import { useThemeConfig } from 'valaxy'

defineProps<{
  categories: string | string[] | undefined
}>()
const themeConfig = useThemeConfig()
const iconCategory = themeConfig.value.iconStyle.postCategory
</script>

<template>
  <span v-if="categories" class="post-categories">
    <i class="icon-category" :class="iconCategory" />
    <span v-for="(c, i) in categories" :key="i" class="category">{{ c || '' }}</span>
  </span>
</template>
