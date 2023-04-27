<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useSiteConfig, useSiteStore } from 'valaxy'
import type { Post } from 'valaxy/types'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  curPage?: number
}>(), {
  curPage: 1,
})

const site = useSiteStore()
const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)
const allPosts = ref<Post[]>([])
const allPostsLength = ref<number>()
const displayedPosts = ref<Post[]>([])

// 更新页面数据
watch(() => props.curPage, () => {
  allPosts.value = (props.posts || site.postList).filter(post => import.meta.env.DEV ? true : !post.hide)
  displayedPosts.value = allPosts.value?.slice(
    (props.curPage - 1) * pageSize.value,
    props.curPage * pageSize.value,
  )
  allPostsLength.value = allPosts.value.length
}, { immediate: true })
</script>

<template>
  <div class="home">
    <AuroraHomePostList :posts="displayedPosts" />
    <ValaxyPagination :cur-page="props.curPage" :page-size="pageSize" :total="allPostsLength" />
  </div>
</template>
