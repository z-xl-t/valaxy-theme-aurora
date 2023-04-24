<script lang="ts" setup>
import { useThemeConfig } from 'valaxy'
import { useRoute } from 'vue-router'
import { getMenuQuote } from '../../utils'

const themeConfig = useThemeConfig()
const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)
</script>

<template>
  <div class="categories">
    <AuroraQuote :quote="quote" />
  </div>
</template>
