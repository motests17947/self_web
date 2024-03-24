<template>
  <div id="BannerComponent" class="banner-style" :class="layoutMode">
    <div class="title">Guu's web</div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    layoutMode: String,
  },
  setup(props, ctx) {
    
  }
}
</script>
<style lang="scss" scoped>
#BannerComponent {
  @apply w-full h-[30px] px-[10px];
}

.banner-style {
  transition: all 0.3s linear;

  &.light {
    @apply bg-slate-300 text-gray-700;
  }

  &.dark {
    @apply bg-gray-900 text-white;
  }
}

.title {
  @apply text-2xl font-extrabold;
  font-family: 'Outfit-ExtraBold';
}
</style>