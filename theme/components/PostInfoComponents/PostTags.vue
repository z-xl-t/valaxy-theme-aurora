<script lang="ts" setup>
defineProps<{
  tags: string | string[] | undefined
}>()
</script>

<template>
  <span v-if="tags" class="post-tags">
    <i class="icon-tag" />
    <span v-for="(t, i) in tags" :key="i" class="tag">{{ t || '' }}</span>
  </span>
</template>
