<template>
  <div id="FooterComponent" class="footer-style" :class="layoutMode">
    <p class="footer-right">Motests.Tw ©︎ 2024-2006 All Rights Reserved.</p>
    <ToolsSwitchBtn
      id="footer_switch_btn"
      :switchValue="{on: 'Light', off: 'Dark'}"
      @switchEvent="getColorMode($event)"
    />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    layoutMode: String,
  },
  emit: ['changeLayoutMode'],
  setup(props, ctx) {
    const getColorMode = (value: boolean) => {
      ctx.emit('changeLayoutMode', value ? 'light' : 'dark')
    }

    return {
      getColorMode,
    }
  }
}
</script>
<style lang="scss" scoped>
.footer-style {
  @apply w-full h-[30px] flex items-center justify-center px-5;
  transition: all 0.3s linear;

  &.light {
    @apply bg-slate-300 text-gray-700;
  }

  &.dark {
    @apply bg-gray-900 text-white;
  }

  &-right {
    @apply text-sm text-white;
    font-family: 'Outfit-Regular';
  }
}

#footer_switch_btn {
  @apply absolute right-5 top-[1px];
}
</style>
