<template>
  <div class="layout">
    <AuroraHeader />
    <main>
      <div class="main-content">
        <slot name="main-content" />
      </div>
    </main>
    <AuroraFooter />
    <AuroraBackToTop />
    <AuroraPcBg />
  </div>
</template>
