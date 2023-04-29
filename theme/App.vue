<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useThemeConfig } from 'valaxy'
import { useCssVar } from '@vueuse/core'

const themeConfig = useThemeConfig()
const iconHref = themeConfig.value.iconStyle.href
const defaultSiteBgColor = computed(() => themeConfig.value.defaultSiteBgColor)
const defaultSiteColor = computed(() => themeConfig.value.defaultSiteColor)
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: iconHref,
    },
  ],
})

const bgColor = useCssVar('--aurora-default-bg-color')
bgColor.value = defaultSiteBgColor.value
const color = useCssVar('--aurora-default-color')
color.value = defaultSiteColor.value
</script>

<template>
  <div style="position: absolute; top: 0; left: 0; width: 0; height: 0; z-index: -1; overflow: hidden;">
    Valaxy Theme Aurora
  </div>
</template>
