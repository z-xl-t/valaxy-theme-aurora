<script setup lang="ts">
import { useFrontmatter, useMediumZoom, useThemeConfig } from 'valaxy'
import { useFetchData } from '../composables'
import { getRandomColorArr } from '../utils'

interface InspirationType {
  time: string
  moment: string
  imgUrl: string
  imgDesc: string
}

const themeConfig = useThemeConfig()
const quote = themeConfig.value.menu.find((m: { link: string }) => m.link.includes('inspirations')).quote || ''

useMediumZoom()
const frontmatter = useFrontmatter()
const data = typeof (frontmatter.value.inspirations) === 'string' ? useFetchData<InspirationType>(frontmatter.value.inspirations) : frontmatter.value.inspirations

const themeColors = themeConfig.value.themeColors
const introductionLength = data.length
const getRandomColors = getRandomColorArr(themeColors, introductionLength)
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
