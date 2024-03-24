<template>
  <div id="BannerComponent" class="banner-style" :class="layoutMode">
    <NuxtLink to="/" class="title">Guu's web</NuxtLink>
    <div class="page-select">
      <NuxtLink 
        class="page-select-btn" 
        :class="page === 'about' ? 'active' : ''"
        to="/about"
      >關於我</NuxtLink >
      <NuxtLink 
        class="page-select-btn" 
        :class="page === 'work' ? 'active' : ''"
        to="/work"
      >經歷</NuxtLink >
      <NuxtLink 
        class="page-select-btn" 
        :class="page === 'skill' ? 'active' : ''"
        to="/skill"
      >技能</NuxtLink >
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    layoutMode: String,
  },
  setup(props, ctx) {
    const page = computed<string>(() => {
      return useRoute().name
    })
    
    return {
      page
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-style {
  @apply px-[10px] flex flex-nowrap items-center justify-between;
  transition: all 0.3s linear;

  &.light {
    @apply bg-slate-300 text-gray-700;
  }

  &.dark {
    @apply bg-gray-900 text-white;
  }
}

.title {
  @apply text-xl font-extrabold cursor-pointer;
  font-family: 'Outfit-Medium';
}

.page-select {
  @apply cursor-pointer;

  &-btn {
    @apply text-sm opacity-75 hover:opacity-90 px-[10px] mr-[10px] last:mr-0;
  }

  &-btn.active {
    border-bottom: 4px solid rgb(0, 191, 216);
  }
}
</style>