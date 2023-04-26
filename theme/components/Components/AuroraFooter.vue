<script lang="ts" setup>
import { useThemeConfig, useValaxyConfig } from 'valaxy'

import valaxyPkg from 'valaxy/package.json'

const themeConfig = useThemeConfig()
const currentYear = new Date().getFullYear()

const valaxyConfig = useValaxyConfig()
</script>

<template>
  <footer class="footer">
    <div v-if="(themeConfig.footer?.beian || themeConfig.footer.beian?.enable) && themeConfig.footer.beian.icp" class="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
        {{ themeConfig.footer.beian.icp }}
      </a>
    </div>
    <div class="footer-info">
      <div class="i-ri-copyright-line" />
      <div class="time">
        <span>{{ themeConfig.footer.since }}</span>
        <span>-</span>
        <span>{{ currentYear }}</span>
      </div>
      <div class="i-ri-heart-2-line" />
      <span class="title">{{ themeConfig.footer.title }}</span>
    </div>

    <div v-if="themeConfig.footer.powered" class="powered">
      <span>由 <a :href="valaxyPkg.repository" target="_blank" rel="noopener">Valaxy</a> v {{ valaxyPkg.version }} 驱动</span>
      <span>| 主题 - </span>
      <span><a :href="themeConfig.pkg.repository" target="_blank" rel="noopener" :title="themeConfig.pkg.name">{{ valaxyConfig.theme }}</a> v {{ themeConfig.pkg.version }}</span>
    </div>
  </footer>
</template>
