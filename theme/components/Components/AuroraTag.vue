<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Tags } from 'valaxy'
import { useThemeConfig } from 'valaxy'
import { getTagStyleMap, smoothScrollToSelector } from '../../utils'

const props = withDefaults(defineProps<{
  tags?: Tags
}>(), {})
const themeConfig = useThemeConfig()
const themeColors = themeConfig.value?.themeColors || []
const tagStyleMap = getTagStyleMap(props.tags as Tags, themeColors)

const router = useRouter()
function jumpToDisplayTag(tag: string) {
  router.push({
    query: {
      tag,
    },
  })
  smoothScrollToSelector('.post-collapse-container')
}
</script>

<template>
  <ul class="tag-list">
    <li v-for="[key, tag] in Array.from(props.tags as Tags).sort()" :key="key.toString()" class="tag" :style="tagStyleMap.get(key)?.style" @click="jumpToDisplayTag(key.toString())">
      <span>{{ key }}</span>
      <span class="count">[{{ tag.count }}]</span>
    </li>
  </ul>
</template>
