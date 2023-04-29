<script setup lang="ts">
import { useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
const comment = frontmatter.value.comment || false
</script>

<template>
  <Layout>
    <template #main-content>
      <div class="post">
        <AuroraPostCard :post="frontmatter" :if-post-page="true" />
        <router-view />
      </div>
    </template>
    <template #main-comment>
      <AuroraWaline v-if="comment" />
    </template>
  </Layout>
</template>
