<script setup lang="ts">
import { useThemeConfig } from 'valaxy'

const themeConfig = useThemeConfig()
const panelFlag = themeConfig.value?.panel.enable || false
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
    <AuroraPanel v-if="panelFlag" />
    <AuroraBg />
  </div>
</template>
