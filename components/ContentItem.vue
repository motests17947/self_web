<template>
  <div class="self-block">
    <h6 class="self-block-title">content title</h6>
    <div class="self-block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laboriosam iusto sunt mollitia quos assumenda necessitatibus! Natus deserunt odit debitis quibusdam aut eius aperiam? Esse aliquid dicta velit delectus fugiat.</div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.self-block {

  &-title {
    @apply text-red-500;
  }

  &-text {
    @apply text-red-100;
  }
}
</style>