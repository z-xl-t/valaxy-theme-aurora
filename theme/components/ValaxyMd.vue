<script lang="ts" setup>
import { onMounted, onUpdated, ref } from 'vue'

import { onContentUpdated, runContentUpdated, useCopyCode, useMediumZoom, useThemeConfig, wrapTable } from 'valaxy'
import type { Post } from 'valaxy'
import { setMarkdownBlockquote, setMarkdownHx } from '../composables'

defineProps<{
  frontmatter: Post
  excerpt?: string
}>()

const themeConfig = useThemeConfig().value || {}
const iconStyle = themeConfig.iconStyle || {}
const content = ref()
onContentUpdated(() => {
  wrapTable(content.value)
  setMarkdownBlockquote(content.value, iconStyle)
  setMarkdownHx(content.value, iconStyle)
})
onMounted(() => {
  runContentUpdated()
})

onUpdated(() => {
  runContentUpdated()
})
useCopyCode()
useMediumZoom()
</script>

<template>
  <article v-if="$slots.default" :class="frontmatter.markdown !== false && 'markdown-body'">
    <slot ref="content" @vue:updated="runContentUpdated" />
  </article>
</template>
