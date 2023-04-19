<script lang="ts" setup>
</script>

<template>
  <div class="layout">
    <AuroraHeader />
    <main>
      <div class="main-content">
        <slot>
          <router-view />
        </slot>
      </div>
    </main>
    <AuroraFooter />
    <AuroraBackToTop />
    <AuroraPcBg />
  </div>
</template>
