<template>
  <div id="default_layout" :class="layout_mode">
    <LayoutBanner 
      :layoutMode="layout_mode"
      id="layout_banner"
      @changeLayoutMode="layout_mode = $event"
    />
    <NuxtPage id="page" :layoutMode="layout_mode" />
    <LayoutFooter
      id="layout_footer"
      :layoutMode="layout_mode"
      @changeLayoutMode="layout_mode = $event"
    />
  </div>
</template>
<script lang="ts">
export default {
  setup(props, ctx) {
    const layout_mode = ref<string>('dark')

    return {
      layout_mode
    }
  }
}
</script>
<style>
#default_layout {
  @apply relative w-screen h-screen p-0 m-0 overflow-hidden;
  transition: all 0.3s linear;
  font-family: 'NotoSansTC-Medium';
}

#layout_banner {
  @apply fixed inset-0 w-full h-[30px];
}

#page {
  @apply w-full relative overflow-auto;
  overflow: overlay;
  height: calc(100% - 60px);
}

#layout_footer {
  @apply fixed bottom-0 left-0;
}

.light {
  @apply bg-slate-100;
}

.dark {
  @apply bg-slate-700;
}
</style>