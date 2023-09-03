<script setup lang="ts">
import { useAddonWaline } from 'valaxy-addon-waline'

const addon = useAddonWaline()
</script>

<template>
  <div v-if="addon.options?.comment">
    <div class="comment">
      <div class="waline">
        <WalineClient w="full" :options="addon.options" />
      </div>
    </div>
  </div>
</template>
