<script lang="ts" setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import { useThemeConfig } from 'valaxy'

const props = withDefaults(defineProps<{
  date: string | number | Date | undefined
}>(), { date: '' })

const themeConfig = useThemeConfig()
const iconCalendar = themeConfig.value.iconStyle.postCalendar

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
const fromNow = dayjs(props.date).fromNow()
</script>

<template>
  <span class="post-date">
    <i class="icon-calendar" :class="iconCalendar" />
    <span class="date timeago">{{ fromNow }}</span>
  </span>
</template>
