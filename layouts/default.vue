<template>
  <div id="default_layout">
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
#default_layout {
  @apply relative w-screen h-screen p-5 bg-slate-200 overflow-auto overflow-x-hidden;
  overflow: overlay;
}
</style>