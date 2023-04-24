<script setup lang="ts">
import type { Post } from 'valaxy/types'

defineProps<{
  posts?: Post[]
}>()
</script>

<template>
  <div v-if="posts" class="post-list">
    <Transition v-for="(post, i) in posts" :key="i" name="fade">
      <AuroraPostCard :post="post" />
    </Transition>
  </div>
</template>
