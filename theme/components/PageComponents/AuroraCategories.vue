<script lang="ts" setup>
import { useCategories, useSiteStore, useThemeConfig } from 'valaxy'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getMenuQuote } from '../../utils'

const themeConfig = useThemeConfig()
const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)
const site = useSiteStore()
const categoryAll = useCategories().value.children
const collapsable = ref(true)
const level = ref(0)

const route = useRoute()
const router = useRouter()
const curCategory = computed(() => (route.query.category as string || ''))

const posts = computed(() => {
  const list = site.postList.filter((post) => {
    if (post.categories && curCategory.value !== 'Uncategorized') {
      if (typeof post.categories === 'string')
        return post.categories === curCategory.value
      else
        return post.categories.join('/').startsWith(curCategory.value) && post.categories[0] === curCategory.value.split('/')[0]
    }
    if (!post.categories && curCategory.value === 'Uncategorized')
      return post.categories === undefined
    return false
  })
  return list
})

function backCategory() {
  const name = route.name
  if (name) {
    router.push({
      name,
    })
  }
}
</script>

<template>
  <div class="categories">
    <AuroraQuote :quote="quote" />
    <ul v-for="(category, i) in categoryAll" :key="i" class="category-list">
      <AuroraCategory
        :parent-key="category.name"
        :category="category"
        :level="level + 1"
        :collapsable="collapsable"
      />
    </ul>
    <AuroraPostCollapse :title="curCategory" :posts="posts" :back="backCategory" />
  </div>
</template>
