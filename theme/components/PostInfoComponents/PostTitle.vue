<script lang="ts" setup>
defineProps<{
  title: string
  level: string
}>()
</script>

<template>
  <div class="post-title">
    <h1 v-if="level === 'h1'" class="title">
      {{ title }}
    </h1>
    <h2 v-else-if="level === 'h2'" class="title">
      {{ title }}
    </h2>
    <h3 v-else-if="level === 'h3'" class="title">
      {{ title }}
    </h3>
    <p v-else>
      {{ title }}
    </p>
  </div>
</template>
