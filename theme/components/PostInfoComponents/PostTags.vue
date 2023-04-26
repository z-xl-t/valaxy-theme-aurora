<script lang="ts" setup>
import { useThemeConfig } from 'valaxy'

defineProps<{
  tags: string | string[] | undefined
}>()
const themeConfig = useThemeConfig()
const iconTag = themeConfig.value.iconStyle.postTag
</script>

<template>
  <span v-if="tags" class="post-tags">
    <i class="icon-tag" :class="iconTag" />
    <span v-for="(t, i) in tags" :key="i" class="tag">{{ t || '' }}</span>
  </span>
</template>
