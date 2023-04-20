<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { useFrontmatter, useThemeConfig } from 'valaxy'

const frontmatter = useFrontmatter()
const themeConfig = useThemeConfig()
const quote = themeConfig.value.menu.find((m: { link: string }) => m.link === '/about/').quote
const themeColors = themeConfig.value.themeColors
const themeColorsLength = themeColors.length

const getRandomColors = computed(() => {
  const arr = []
  for (let i = 0; i < themeColorsLength; ++i) {
    const index = Math.floor(Math.random() * (themeColorsLength) + 1)
    arr.push(themeColors[index])
  }
  return arr
})
</script>

<template>
  <div class="about">
    <AuroraQuote :quote="quote" />
    <div v-if="frontmatter.info" class="info-header">
      <div class="avatar">
        <img :src="frontmatter.info.avatar" alt="avatar">
      </div>

      <div class="info">
        <span v-if="frontmatter.info.name">
          <i class="icon icon-fort-awesome" />
          <span>{{ frontmatter.info.name }}</span>
        </span>
        <span v-if="frontmatter.info.sign">
          <i class="icon icon-fort-awesome" />
          <span>{{ frontmatter.info.sign }}</span>
        </span>
        <span v-if="frontmatter.info.graduation">
          <i class="icon icon-fort-awesome" />
          <span>{{ frontmatter.info.graduation }}</span>
        </span>
        <span v-if="frontmatter.info.profession">
          <i class="icon icon-fort-awesome" />
          <span>{{ frontmatter.info.profession }}</span>
        </span>
      </div>
    </div>
    <div v-if="frontmatter.contact" class="contact">
      <a v-for="(con, i) in frontmatter.contact" :key="i" :href="con.link">
        <img :src="con.icon" alt="icon" class="icon">
      </a>
    </div>

    <ul v-if="frontmatter.introduction" class="introduction">
      <li v-for="(intro, i) in frontmatter.introduction" :key="i" :style="{ 'color': getRandomColors[i], 'border-top': `2px solid ${getRandomColors[i]}` }" class="intro markdown">
        <span class="name-wrapper">
          <span class="name">{{ intro.name }}</span>
        </span>
        <div v-for="(c, j) in intro.content" :key="j" class="content" v-html="c" />
      </li>
    </ul>
  </div>
</template>
