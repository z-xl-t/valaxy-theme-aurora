<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteStore, useThemeConfig } from 'valaxy'

import { getMenuQuote } from '../../utils'

const themeConfig = useThemeConfig()
const site = useSiteStore()
const postList = computed(() => site.postList)
const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)
</script>

<template>
  <div class="archives">
    <AuroraQuote :quote="quote" />
    <ul class="archive-list">
      <AuroraPostCollapse :posts="postList" />
    </ul>
  </div>
</template>
