<script setup lang="ts">
defineProps<{ page: string }>()
</script>

<template>
  <AuroraHomePostList :cur-page="parseInt(page)" />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
