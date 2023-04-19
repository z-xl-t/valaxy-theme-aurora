<script lang="ts" setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

const props = withDefaults(defineProps<{
  date: string | number | Date | undefined
}>(), { date: '' })

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
const fromNow = dayjs(props.date).fromNow()
</script>

<template>
  <span class="post-date">
    <i class="icon-calendar" />
    <span class="date timeago">{{ fromNow }}</span>
  </span>
</template>
