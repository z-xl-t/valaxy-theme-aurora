<script lang="ts" setup>
defineProps<{
  description: string | undefined
}>()
</script>

<template>
  <div v-if="description" class="post-description">
    <p><span>{{ description }}</span></p>
  </div>
</template>
