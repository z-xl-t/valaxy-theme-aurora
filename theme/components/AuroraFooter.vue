<script lang="ts" setup>
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div>
      <p>
        <i class="icon-copyright" />
        <span>{{ themeConfig.footer.since }}</span>
        <span>-</span>
        <span>{{ currentYear }}</span>
      </P>
      <p>
        <a :href="themeConfig.footer.themeAddress">{{ themeConfig.footer.themeName }}</a>
      </p>
    </div>
    <div>
      <p>
        <i class="icon-heart" />
        <span>{{ themeConfig.footer.title }}</span>
      </p>
      <p>
        <span>{{ themeConfig.footer.subtitle }}</span>
      </p>
    </div>
  </footer>
</template>
