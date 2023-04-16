<script lang="ts" setup>
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
</script>

<template>
  <footer>
    <p>
      <i class="icon-copyright" />
      <span>{{ themeConfig.footer.since }}</span>
      <span>&nbsp; | &nbsp;</span>
      <i class="icon-heart" />
      <span>{{ themeConfig.footer.title }}</span>
    </p>
    <p>
      <a href="">valaxy-theme-aurora</a>
      <span>&nbsp; | &nbsp;</span>
      <span>{{ themeConfig.footer.subtitle }}</span>
    </p>
  </footer>
</template>
