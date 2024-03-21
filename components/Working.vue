<template>
  <div>
    <div class="self-block">
      <h2 class="self-block-title">網站製作中</h2>
      <div class="self-block-text">目前個人網站正在製作中，請稍過幾天再來看看...</div>
      <div class="contact">
        <p>有問題請寄信至 <a href="mailto:motests17947@gmail.com">motests17947@gmail.com</a></p>
        <p>或前往<a href="https://pda.104.com.tw/profile/share/5e63DaxWeSCD33CXEx8d7a7IFAJ2C6uq" target="_blank">104</a> or <a href="https://alpine-hat-e23.notion.site/76072bc0471841258ff15491a468f971" target="_blank">Notion</a>觀看我的相關內容</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  head() {
    return {
      title: 'About Us',
      meta: [
        { hid: 'description', name: 'description', content: 'This is a page about us.' },
      ],
    };
  },
  setup(props, ctx) {
    
  },
};
</script>
<style lang="scss" scoped>
.top-block {
  @apply relative w-full h-fit min-h-[140px] p-5 bg-slate-600 flex items-center flex-nowrap mb-5 rounded-md;

  .self-content {
    @apply relative h-full flex flex-wrap justify-end bg-slate-500 pr-5;
    width: calc(100% - 100px);
  }

  .img-head {
    @apply w-[100px] h-[100px] rounded-full overflow-hidden;

    img {
      @apply w-full h-full object-contain scale-[2.5] translate-y-5;
    }
  }
}

.self-block {
  @apply relative w-full h-[40vh] p-5 pb-0 bg-slate-600 text-white rounded-md cursor-default;

  &-title {
    @apply text-red-500 text-xl font-semibold;
  }

  &-text {
    @apply text-red-100 text-base;
  }

  .contact {
    @apply w-fit mt-20 text-sm absolute right-5 bottom-2;

    p {
      @apply w-full h-10 text-right;

      a {
        @apply text-blue-400 cursor-pointer font-semibold;
      }
    }
  }
}
</style>