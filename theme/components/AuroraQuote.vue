<script lang="ts" setup>
defineProps<{
  quote: string
}>()
</script>

<template>
  <div class="quote">
    <i class="icon-quote-left" />
    <span class="qoute-content">
      {{ quote }}
    </span>
    <i class="icon-quote-right" />
  </div>
</template>
