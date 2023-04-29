<script setup lang="ts">
import { useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
const comment = frontmatter.value.comment || false
</script>

<template>
  <Layout>
    <template #main-content>
      <AuroraInspirations />
      <router-view />
    </template>
    <template #main-comment>
      <AuroraWaline v-if="comment" />
    </template>
  </Layout>
</template>
