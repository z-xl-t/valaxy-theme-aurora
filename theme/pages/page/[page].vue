<script setup lang="ts">
defineProps<{ page: string }>()
</script>

<template>
  <AuroraPage :cur-page="parseInt(page)" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
