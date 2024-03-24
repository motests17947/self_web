<template>
  <div class="index-page" :class="layoutMode">
    <div class="slanted_bg"></div>
    <div class="slanted">
      <img src="../public/img/self_2.jpg">
    </div>
    <div class="text-content">
      <p>日安，我是 <span class="text-2xl">グウ</span><span class="text-xs"> ( guu )</span></p>
      <p>鑒於當了好一陣子的前端工程師</p>
      <p>適逢轉職期間</p>
      <p>剛好來做個簡單的個人網站</p>
      <p>這裡的內容會適時的更新 <span class="small"> (大概...)</span></p>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
  head() {
    return {
      title: 'Guu',
      meta: [
        { hid: 'description', name: 'description', content: 'This is Guu\'s web.' },
      ],
    };
  },
  props: {
    layoutMode: String,
    isMobile: Boolean,
  },
  setup(props, ctx) {
    const is_mobile = computed<boolean>(() => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    })
    

    return {
      is_mobile,
    }
  },
};
</script>
<style lang="scss" scoped>
.index-page {
  @apply max-w-[100vw] p-0 overflow-x-hidden flex items-center;
}

.slanted{
  @apply absolute z-[10] translate-y-[-30px];
  clip-path: polygon(30% 0%, 100% 0, 100% 100%, 50% 100%);
}

.slanted_bg {
  @apply bg-black bg-opacity-30 w-full h-[80%];

  @media (max-width: 800px) {
    @apply h-[40vh];
  }
}

.text-content {
  @apply absolute z-[20] w-1/2 h-1/2 bg-slate-600 bg-opacity-30 p-5 cursor-default flex flex-wrap items-center content-center;
  backdrop-filter: blur(5px);
  clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%);

  p {
    @apply mb-2 w-full;

    span {
      @apply mx-[5px];
    }

    .small {
      font-size: 10px;
    }
  }

  @media (max-width: 800px) {
    @apply w-2/3 h-[35vh] text-xs;
    clip-path: polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%);
  }
}

.index-page.light {
  .slanted_bg {
    @apply bg-blue-300 bg-opacity-20;
  }

  .text-content {
    @apply bg-white bg-opacity-50 text-blue-900;
  }
}
</style>