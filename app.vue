<template>
  <div>
    <NuxtLayout :isMobile="is_mobile">
      <NuxtPage :isMobile="is_mobile" />
    </NuxtLayout>
  </div>
</template>
<script lang="ts">
  export default {
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