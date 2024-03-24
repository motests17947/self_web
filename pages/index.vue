<template>
  <div id="index_page">
    <!-- <IndexContentItem v-if="content_value === 0" @page-change="setContent($event)"/>
    <SkillContentItem v-else-if="content_value === 1" @page-change="setContent($event)"/> -->
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
  setup(props, ctx) {
    const is_mobile = computed<boolean>(() => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    })

    const content_value = ref<number>(0)          // 當前內容顯示
    
    /** **********************************************************
     * Set index page content
     * @param content_value value of content
     *************************************************************/
    const setContent = (c_value: number): void => {
      switch (c_value) {
        case 1:
          console.log('work')
          break;
        case 2:
          console.log('about')
          break;
        case 3:
          console.log('skill')
          break;
      
        default:
          break;
      }

      content_value.value = c_value
    }

    onMounted(() => {
      
    })

    return {
      is_mobile,
      content_value,
      setContent,
    }
  },
};
</script>
<style scoped>
#index_page {
  @apply w-full h-full overflow-hidden;
}
</style>
