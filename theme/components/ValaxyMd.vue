<script lang="ts" setup>
import type { Ref } from 'vue'
import { inject, onMounted, ref } from 'vue'

import { useCopyCode, useMediumZoom, useThemeConfig, wrapTable } from 'valaxy'
import type { Post } from 'valaxy'
import { setMarkdownBlockquote, setMarkdownHx } from '../composables'

defineProps<{
  frontmatter: Post
  excerpt?: string
}>()

const themeConfig = useThemeConfig().value || {}
const iconStyle = themeConfig.iconStyle || {}
const onContentUpdated = inject('onContentUpdated') as Ref<() => void>
const content = ref()
function updateDom() {
  wrapTable(content.value)
  setMarkdownBlockquote(content.value, iconStyle)
  setMarkdownHx(content.value, iconStyle)
  onContentUpdated.value?.()
}
onMounted(() => {
  updateDom()
})

useCopyCode()
useMediumZoom()
</script>

<template>
  <article v-if="$slots.default" :class="frontmatter.markdown !== false && 'markdown-body'">
    <slot ref="content" @vnode-updated="updateDom" />
  </article>
</template>
