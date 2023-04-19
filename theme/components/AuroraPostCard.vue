<script lang="ts" setup>
import type { Post } from 'valaxy'

const props = withDefaults(defineProps<{
  post: Post
}>(), {})

const title = props.post.title
const imageUrl = props.post.imageUrl || ''
const description = props.post.description || ''
const date = props.post.date || ''
const tags = props.post.tags || [] as string[]
const categories = props.post.categories || [] as string[]
</script>

<template>
  <article>
    <div class="post-overview">
      <div class="post-header">
        <PostImage :image-url="imageUrl" />
        <PostTitle :title="title" level="h1" />
      </div>
      <PostDescription :description="description" />
      <div class="post-meta-wrapper">
        <div class="post-meta">
          <PostTimeAgo :date="date" />
          <PostTags :tags="tags" />
          <PostCategories :categories="categories" />
        </div>
      </div>
    </div>
  </article>
</template>
