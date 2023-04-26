<script lang="ts" setup>
defineProps<{
  quote: string
}>()
</script>

<template>
  <div class="quote">
    <span class="quote-icon-left i-ri:double-quotes-l" />
    <span class="quote-content">
      {{ quote }}
    </span>
    <span class="quote-icon-right i-ri:double-quotes-r" />
  </div>
</template>
