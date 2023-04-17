<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: string
  total?: number
  pageSize?: number
  curPage?: number
}>(), {
  curPage: 1,
})
</script>

<template>
  <div>{{ props.total }}</div>
  <div>{{ props.pageSize }}</div>
  <div>{{ props.curPage }}</div>
</template>
