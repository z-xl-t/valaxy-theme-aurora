<script lang="ts" setup>
import { ref } from 'vue'
import type { PanelItem } from 'types'
import { useThemeConfig } from '../../composables'

const themeConfig = useThemeConfig()
const panel = themeConfig.value.panel || {}

const panelIconImage = panel.panelIconImage || ''
const panelTitle = panel.panelTitle || ''
const panelItems = panel.panelItems || [] as PanelItem[]
const panelItemsLength = panelItems.length
const panelLeftIcon = themeConfig.value.iconStyle.panelLeft || ''
const panelRightIcon = themeConfig.value.iconStyle.panelRight || ''
const panelFlag = ref(false)
const currentIndex = ref(0)
const wrapperRef = ref<HTMLUListElement>()
function handlePrev() {
  if (currentIndex.value <= 0)
    return

  currentIndex.value--
  if (wrapperRef.value !== undefined) {
    const distance = wrapperRef.value.offsetWidth / 2
    wrapperRef.value.scrollBy(({ left: -distance, behavior: 'smooth' }))
  }
}

function handleNext() {
  if (currentIndex.value + 2 > panelItemsLength)
    return

  currentIndex.value++
  if (wrapperRef.value !== undefined) {
    const distance = wrapperRef.value.offsetWidth / 2
    wrapperRef.value.scrollBy(({ left: distance, behavior: 'smooth' }))
  }
}
</script>

<template>
  <div class="panel" :class="{ 'show-panel': panelFlag, 'hidden-panel': !panelFlag }">
    <div class="img-container" @click="() => panelFlag = true">
      <img v-if="panelIconImage" :src="panelIconImage" alt="panel-image">
      <i v-else class="ri-shining-line" />
    </div>
    <div class="panel-mask" @click="() => panelFlag = false" />
    <div class="panel-container">
      <div class="wrapper">
        <div class="short-line">
          <div class="line" />
          <div class="line" />
        </div>
        <div class="swiper">
          <header>{{ panelTitle }}</header>
          <main>
            <ul v-if="panelItemsLength" ref="wrapperRef" class="panel-items">
              <li v-for="(p, i) in panelItems" :key="i">
                <h3>{{ p.desc }}</h3>
                <img :src="p.qrCodeImage" :alt="p.desc">
              </li>
            </ul>
            <div v-if="panelItemsLength > 2" class="btn prev" @click="handlePrev">
              <i class="icon-panel-left " :class="panelLeftIcon" />
            </div>
            <div v-if="panelItemsLength > 2" class="btn next" @click="handleNext">
              <i class="icon-panel-right" :class="panelRightIcon" />
            </div>
          </main>
          <footer />
        </div>
        <div class="long-line">
          <div class="line" />
          <div class="line" />
        </div>
      </div>
    </div>
  </div>
</template> ced
