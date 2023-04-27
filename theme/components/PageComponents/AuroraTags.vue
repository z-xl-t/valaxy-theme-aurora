<script lang="ts" setup>
import { useSiteStore, useTags, useThemeConfig } from 'valaxy'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getMenuQuote } from '../../utils'

const themeConfig = useThemeConfig()
const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)
const site = useSiteStore()
const router = useRouter()
const route = useRoute()
const curTag = computed(() => (route.query.tag as string || ''))
const tags = useTags()

const posts = computed(() => {
  const list = site.postList.filter((post) => {
    if (post.tags) {
      if (typeof post.tags === 'string')
        return post.tags === curTag.value
      else
        return post.tags.includes(curTag.value)
    }
    return false
  })
  return list
})

function backTags() {
  const name = route.name
  if (name) {
    router.push({
      name,
    })
  }
}
</script>

<template>
  <div class="tags">
    <AuroraQuote :quote="quote" />
    <AuroraTag :tags="tags" />
    <AuroraPostCollapse :title="curTag" :posts="posts" :back="backTags" />
  </div>
</template>
