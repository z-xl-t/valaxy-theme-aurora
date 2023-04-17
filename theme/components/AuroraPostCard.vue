<script lang="ts" setup>
import type { Post } from 'valaxy'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article>
    <div class="space-y-5 xl:col-span-3">
      <div class="space-y-6">
        <h2 class="text-2xl leading-8 font-bold tracking-tight">
          <router-link class="st-text" :to="post.path || ''">
            {{ post.title }}
          </router-link>
        </h2>
        <div
          v-if="post.excerpt"
          class="prose max-w-none text-gray-500"
          v-html="post.excerpt"
        />
      </div>
      <div>
        <router-link class="link" aria-label="read more" :to="post.path || ''">
          Read more →
        </router-link>
      </div>
    </div>
  </article>
</template>
