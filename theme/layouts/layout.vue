<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <AuroraHeader />
    <main>
      <div class="main-content">
        <slot name="main-content" />
      </div>
    </main>
    <AuroraFooter />
    <AuroraBg />
  </div>
</template>
