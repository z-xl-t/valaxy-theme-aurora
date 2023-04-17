<template>
  <div class="layout">
    <AuroraHeader />
    <main>
      <div class="main-content">
        <slot>
          <router-view />
        </slot>
      </div>
    </main>
    <AuroraFooter />
  </div>
</template>
