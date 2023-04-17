<script setup lang="ts">
import { computed } from 'vue'
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

const posts = computed(() => (
  props.posts || site.postList).filter(post => import.meta.env.DEV ? true : !post.hide),
)

const displayedPosts = computed(() =>
  posts.value.slice(
    (props.curPage - 1) * pageSize.value,
    props.curPage * pageSize.value,
  ),
)
</script>

<template>
  <Transition v-for="(post, i) in displayedPosts" :key="i" name="fade">
    <AuroraPostCard :post="post" />
  </Transition>

  <!-- 自定义分页组件(未完成) -->
  <AuroraPagination :cur-page="curPage" :page-size="pageSize" :total="posts.length" />
  <ValaxyPagination :cur-page="curPage" :page-size="pageSize" :total="posts.length" />
</template>
