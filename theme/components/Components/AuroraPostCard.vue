<script lang="ts" setup>
import type { Post } from 'valaxy'

const props = defineProps<{
  post: Post
  ifPostPage?: boolean
}>()

const title = props.post.title
const imageUrl = props.post.imageUrl || ''
const description = props.post.description || ''
const date = props.post.date || ''
const tags = props.post.tags || [] as string[]
const categories = props.post.categories || [] as string[]
const path = props.post.path || '/404'
</script>

<template>
  <article>
    <div v-if="!ifPostPage" class="post-overview">
      <div class="post-header">
        <PostImage :image-url="imageUrl" />
        <PostTitle :title="title" level="h1" />
      </div>
      <PostDescription :description="description" />
      <div class="post-meta-wrapper">
        <div class="post-meta">
          <PostTimeAgo v-if="date" :date="date" />
          <PostCategories v-if="categories.length" :categories="categories" />
          <PostTags v-if="tags.length" :tags="tags" />
        </div>
      </div>
      <router-link :to="path" class="post-link" />
    </div>
    <div v-else class="post-overview">
      <div class="post-header">
        <PostImage :image-url="imageUrl" />
        <div class="post-meta-wrapper">
          <PostTitle v-if="title" :title="title" level="h1" />
          <div class="post-meta">
            <PostTimeAgo v-if="date" :date="date" />
            <PostCategories v-if="categories.length" :categories="categories" />
            <PostTags v-if="tags.length" :tags="tags" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
