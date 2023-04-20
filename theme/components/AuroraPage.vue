<script lang="ts" setup>
import { computed } from 'vue'
import { useSiteConfig, useSiteStore } from 'valaxy'
import type { Post } from 'valaxy/types'

const props = defineProps<{
  type?: string
  posts?: Post[]
  page?: string
}>()

let curPage = 0
if (props.page === undefined)
  curPage = 1
else
  curPage = parseInt(props.page)

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
