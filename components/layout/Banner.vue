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
      <button v-show="is_mobile_mode" class="mode_change" @click="getColorMode()">{{ layout_mode === 'dark' ? 'Dark' : 'Light' }}</button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    layoutMode: String,
  },
  emit: ['changeLayoutMode'],
  setup(props, ctx) {
    const layout_mode = computed<string>(() => {return props.layoutMode})
    const page = computed<string>(() => {
      return useRoute().name
    })

    const is_mobile_mode = computed<boolean>(() => {
      const mediaQuery = window.matchMedia("(max-width: 800px)");

      return mediaQuery.matches
    })

    const getColorMode = () => {
      ctx.emit('changeLayoutMode', layout_mode.value === 'dark' ? 'light' : 'dark')
    }
    
    return {
      page,
      layout_mode,
      getColorMode,
      is_mobile_mode
    }
  }
}
</script>
<style lang="scss" scoped>
.mode_change {
  @apply w-[50px] bg-black bg-opacity-60 hover:bg-opacity-100 border-white border-[1px] text-xs rounded-md;
}

.banner-style {
  @apply px-[10px] flex flex-nowrap items-center justify-between;
  transition: all 0.3s linear;

  &.light {
    @apply bg-slate-300 text-gray-700;

    .mode_change {
      @apply bg-white text-[text-gray-700];
    }
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