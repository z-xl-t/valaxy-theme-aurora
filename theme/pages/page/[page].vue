<script setup lang="ts">
import { computed } from 'vue'
import { useSiteConfig, useSiteStore } from 'valaxy'
import type { Post } from 'valaxy/types'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  page: string
}>(), {})

const curPage = parseInt(props.page)
const site = useSiteStore()
const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)

const posts = computed(() => (
  props.posts || site.postList).filter(post => import.meta.env.DEV ? true : !post.hide),
)

const displayedPosts = computed(() =>
  posts.value.slice(
    (curPage - 1) * pageSize.value,
    curPage * pageSize.value,
  ),
)
</script>

<template>
  <div class="home">
    <AuroraHomePostList :posts="displayedPosts" />
    <ValaxyPagination :cur-page="curPage" :page-size="pageSize" :total="posts.length" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
