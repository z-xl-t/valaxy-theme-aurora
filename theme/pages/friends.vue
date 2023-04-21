<script setup lang="ts">
import { useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
</script>

<template>
  <AuroraFriends :links="frontmatter.links" :random="frontmatter.random" />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
