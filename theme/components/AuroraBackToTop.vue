<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const isShow = ref(false)

let currentTime = new Date().getTime()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  // 大于 150 毫秒才执行一次
  if (new Date().getTime() - currentTime < 150)
    return
  currentTime = new Date().getTime()
  const distance = window.pageYOffset || document.documentElement.scrollTop
  // console.log(distance)
  // 向下滚动的距离大于 150 才展示小猫
  if (distance > 150)
    isShow.value = true
  else
    isShow.value = false
}
</script>

<template>
  <div class="btt-wrapper" :class="{ show: isShow, hidden: !isShow }">
    <div class="back-to-top cursor" @click="scrollTop" />
  </div>
</template>
