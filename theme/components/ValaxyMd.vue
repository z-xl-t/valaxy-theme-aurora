<script lang="ts" setup>
import type { Ref } from 'vue'
import { inject, onMounted, ref } from 'vue'

import { useCopyCode, useMediumZoom, wrapTable } from 'valaxy'
import type { Post } from 'valaxy'

const props = defineProps<{
  frontmatter: Post
  excerpt?: string
}>()

const onContentUpdated = inject('onContentUpdated') as Ref<() => void>

const content = ref()
function updateDom() {
  wrapTable(content.value)
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

<style>
.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}
</style>
