<script setup lang="ts">
import { ref } from 'vue'
import type { Category, PostFrontMatter } from 'valaxy'
import { useRouter } from 'vue-router'
import { smoothScrollToSelector } from '../../utils'

const props = withDefaults(defineProps<{
  parentKey: string
  category?: Category
  level?: number
  collapsable?: boolean
}>(), {
  level: 0,
  collapsable: true,
})

const router = useRouter()
const collapse = ref(true)
function jumpToDisplayCategory(category: string) {
  router.push({
    query: {
      category,
    },
  })
  smoothScrollToSelector('.post-collapse-container')
}

const postItems = ref<Partial<PostFrontMatter>[]>([])
const subCategories = ref<Category[]>([])
props?.category?.children.forEach((item) => {
  const i = item as Category
  if (i.children)
    subCategories.value.push(i)
  else
    postItems.value.push(i)
})
</script>

<template>
  <div class="category-header">
    <span @click="collapse = !collapse">
      <div v-if="collapse" i-ri-folder-add-line />
      <div v-else i-ri-folder-reduce-line /></span>
    <span @click="jumpToDisplayCategory(parentKey)">
      {{ category?.name === 'Uncategorized' ? '未分类' : category?.name }} [{{ category?.total }}]
    </span>
  </div>
  <div v-if="!collapse" class="category-container">
    <ul class="category-list">
      <li v-for="(sub, i) in subCategories" :key="i">
        <div class="category-list">
          <AuroraCategory
            :parent-key="parentKey ? `${parentKey}/${sub?.name}` : sub?.name"
            :category="sub"
            :level="level + 1"
            :collapsable="collapsable"
          />
        </div>
      </li>
      <li v-for="(p, j) in postItems" :key="j" class="category-post-item">
        <router-link v-if="p?.title" :to="p?.path || ''">
          <div i-ri-file-text-line />
          <span>{{ p?.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
