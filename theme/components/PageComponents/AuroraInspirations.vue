<script setup lang="ts">
import { useFrontmatter, useMediumZoom, useThemeConfig } from 'valaxy'
import { useRoute } from 'vue-router'
import { useFetchData } from '../../composables'
import { getMenuQuote, getRandomColorArr } from '../../utils'
import type { inspirationType } from '../../types'

const themeConfig = useThemeConfig()

useMediumZoom()
const frontmatter = useFrontmatter()
const data = typeof (frontmatter.value.inspirations) === 'string' ? useFetchData<inspirationType>(frontmatter.value.inspirations) : frontmatter.value.inspirations as inspirationType[]

const themeColors = themeConfig.value.themeColors
const introductionLength = data.length
const getRandomColors = getRandomColorArr(themeColors, introductionLength)

const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)
</script>

<template>
  <div class="inspirations">
    <AuroraQuote v-if="quote" :quote="quote" />
    <ul class="inspiration-list">
      <li v-for="(d, i) in data" :key="i" class="markdown-body" :style="{ 'color': getRandomColors[i], 'border-top': `2px solid ${getRandomColors[i]}` }">
        <span v-if="d.time" class="time-wrapper">
          <span class="time">{{ d.time }}</span>
        </span>
        <div v-if="d.moment" class="moment" v-html="d.moment" />
        <div v-if="d.imgUrl || d.imgDesc" class="img-box">
          <img :src="d.imgUrl" :alt="d.imgDesc">
          <div v-if="d.imgDesc" class="desc">
            {{ `◭ ${d.imgDesc}` }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
