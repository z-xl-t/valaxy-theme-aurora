<script setup lang="ts">
defineProps<{
  categories: string | string[] | undefined
}>()
</script>

<template>
  <span v-if="categories" class="post-categories">
    <i class="icon-bookmark-empty" />
    <span v-for="(c, i) in categories" :key="i" class="category">{{ c || '' }}</span>
  </span>
</template>
