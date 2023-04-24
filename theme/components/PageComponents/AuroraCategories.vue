<script setup lang="ts">
import { useFrontmatter, useThemeConfig } from 'valaxy'

const themeConfig = useThemeConfig()
const frontmatter = useFrontmatter()
const quote = themeConfig.value.menu.find((m: { link: string }) => m.link.includes('categories')).quote
</script>

<template>
  <div class="categories">
    <AuroraQuote :quote="quote" />
    {{ frontmatter }}
  </div>
</template>
