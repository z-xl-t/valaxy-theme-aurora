<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { formatDate, sortByDate, useSiteStore, useThemeConfig } from 'valaxy'
import type { Post } from 'valaxy'

import { getMenuQuote } from '../../utils'

const themeConfig = useThemeConfig()
const site = useSiteStore()
const postList = site.postList
const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)

const years = ref<number[]>([])
const postListByYear = ref<Record<string, Post[]>>({})

watch(() => postList, () => {
  postListByYear.value = {}
  years.value = []
  postList.forEach((post) => {
    if (post.hide && post.hide !== 'index')
      return
    if (post.date) {
      const year = parseInt(formatDate(post.date, 'YYYY'))
      if (postListByYear.value[year]) {
        postListByYear.value[year].push(post)
      }
      else {
        years.value.push(year)
        postListByYear.value[year] = [post]
      }
    }
  })
}, { immediate: true })

const isDesc = ref(true)
const sortedYears = computed(() => {
  const y = years.value
  const arr = y.sort((a, b) => b - a)
  return isDesc.value ? arr : arr.reverse()
})
</script>

<template>
  <div class="archives">
    <AuroraQuote :quote="quote" />
    <ul class="archive-list">
      <div v-for="year in sortedYears" :key="year" class="collection">
        <div class="collection-title">
          <h2 :id="`#archive-year-${year}`" class="archive-year">
            {{ year }}
          </h2>
        </div>
        <article v-for="post, j in sortByDate(postListByYear[year], isDesc)" :key="j" class="post-item">
          <header class="post-header">
            <div class="post-meta">
              <time v-if="post.date">{{ formatDate(post.date, 'MM-DD') }}</time>
            </div>
            <h2 class="post-title">
              <router-link :to="post.path || ''" class="post-title-link">
                {{ post.title }}
              </router-link>
            </h2>
          </header>
        </article>
      </div>
    </ul>
  </div>
</template>
