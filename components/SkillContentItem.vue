<template>
  <div id="content_main">
    <div id="full_pic">
      <img src="../public/img/self_2.jpg" alt="Guu">
    </div>
    <div id="content">
      <SkillCard />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  emits: ['pageChange'],
  setup(props, ctx) {
    const changeContent = (value: number): void => {
      ctx.emit('pageChange', value)
    }
    
    return {
      changeContent,
    }
  },
};
</script>
<style lang="scss" scoped>
$bottom_transition: all 0.3s ease;

#content_main {
  @apply w-full h-full bg-orange-300 overflow-hidden flex items-center flex-wrap justify-center;

  p {
    @apply text-white;
  }
}

#full_pic {
  @apply w-[30%] max-w-[300px] h-auto overflow-hidden rounded-[0.75rem] mr-10;
  border: 3px solid white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);

  img {
    @apply w-full h-fit;
  }
}

#content {
  @apply w-full content-center flex flex-wrap justify-center;
  h1 {
    @apply text-xl mb-5 text-[#005288];
  }

  p {
    @apply mb-5 cursor-default opacity-70;
    font-family: 'NotoSansTC-Regular';
  }

  button {
    // @apply mx-5 first:ml-0;
  }

  .custom-btn {
    @apply relative inline-block w-[130px] h-10 text-white rounded text-sm cursor-pointer outline-none;
    background: transparent;
    transition: $bottom_transition;
    box-shadow: inset 2px 2px 2px 0px #ffffff80,
                7px 7px 20px 0px rgba(0,0,0,.1),
                4px 4px 5px 0px rgba(0,0,0,.1);
  }

  .btn-7 {
    @apply leading-[42px] p-0 border-none;
    background: linear-gradient(0deg, #0066aa 0%, #005288 100%);
  
    &::before,
    &::after {
      @apply absolute right-0 bottom-0 bg-[#005288];
      content: "";
      box-shadow: -7px -7px 20px 0px #ffffffe6,
                  -4px -4px 5px 0px #ffffffe6,
                  7px 7px 20px 0px #00000033,
                  4px 4px 5px 0px #0000004d;
      transition: $bottom_transition;
    }

    &::before { @apply h-0 w-[2px];}

    &::after { @apply w-0 h-[2px];}

    &:hover {
      @apply text-[#015aad];
      background: transparent;

      &::before { @apply h-full;}

      &::after { @apply w-full;}
    }

    span {
      @apply relative block w-full h-full;

      &::before,
      &::after {
        @apply absolute inset-0 bg-[#005288];
        content: "";
        box-shadow: -7px -7px 20px 0px rgba(255,255,255,.9),
                    -4px -4px 5px 0px rgba(255,255,255,.9),
                    7px 7px 20px 0px rgba(0,0,0,.2),
                    4px 4px 5px 0px rgba(0,0,0,.3);
        transition: $bottom_transition;
      }

      &::after { @apply h-[2px] w-0;}

      &::before { @apply w-[2px] h-0;}

      &:hover {
        &::after { @apply w-full;}

        &::before { @apply h-full;}
      }
    }
  }
}
</style>