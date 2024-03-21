<template>
  <div>
    <div class="top-block">
      <div class="self-content">
        <H5>Guu</H5>
      </div>
      <div class="img-head">
        <img src="../public/img/self.jpg" alt="Guu">
      </div>
      
    </div>
    <div class="self-block">
      <h6 class="self-block-title">content title</h6>
      <div class="self-block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laboriosam iusto sunt mollitia quos assumenda necessitatibus! Natus deserunt odit debitis quibusdam aut eius aperiam? Esse aliquid dicta velit delectus fugiat.</div>
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
  @apply w-full h-fit p-5 bg-slate-600 text-white rounded-md;

  &-title {
    @apply text-red-500;
  }

  &-text {
    @apply text-red-100;
  }
}
</style>