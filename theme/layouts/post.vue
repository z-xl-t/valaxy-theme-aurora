<script setup lang="ts">
import { useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
</script>

<template>
  <Layout>
    <template #main-content>
      <div class="post">
        <AuroraPostCard :post="frontmatter" :if-post-page="true" />
        <router-view />
      </div>
    </template>
  </Layout>
</template>
