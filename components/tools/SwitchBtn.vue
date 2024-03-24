<template>
  <div class="switch-btn">
    <button 
      type="button" 
      class="btn-toggle"
      :class="btn_status ? 'active' : ''"
      data-toggle="button" 
      :aria-pressed="btn_status" 
      autocomplete="off"
      @click="toggleButton"
      :style="
        `width: ${btn_width};`
      "
    >
      <div class="handle"></div>
      <p v-show="switch_value" class="btn-toggle-value">{{ switch_value }}</p>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  emit: ['switchEvent'],
  props: {
    btnName: String,
    switchValue: {
      on: String,
      off: String
    }
  },
  setup(props, ctx) {
    const switch_value = computed<string>(() => {
      return btn_status.value ? props.switchValue.on : props.switchValue.off
    })
    const btn_width = computed<string>(() =>{
      let length = '2.75rem'
      let on_text = props.switchValue?.on
      let off_text = props.switchValue?.off

      if (on_text || off_text) {
        let count_on: number = 0;
        on_text?.split('').forEach(char => {
          const charCode = char.charCodeAt();
          if (charCode >= 32 && charCode <= 126) {
            count_on++;
          }
        })
        let count_off: number = 0
        off_text?.split('').forEach(char => {
          const charCode = char.charCodeAt();
          if (charCode >= 32 && charCode <= 126) {
            count_off++;
          }
        })

        let final_length = count_on > count_off ? count_on : count_off

        length = `${final_length - 0.5}rem`;
      }

      return length
    })
    const btn_status = ref<boolean>(false)

    const toggleButton = (): void => {
      btn_status.value = !btn_status.value
    };

    watch(btn_status, (value) => {
      ctx.emit('switchEvent', value)
    }, {deep: true})

    return {
      btn_status,
      toggleButton,
      switch_value,
      btn_width
    };
  }
}
</script>
<style lang="scss" scoped>
.btn-toggle {
  @apply relative bg-gray-600 rounded-full h-[1.25rem] p-0 overflow-hidden cursor-pointer;
  border: none;

  .handle {
    @apply absolute top-1/2 left-[0.2rem] translate-y-[-50%] w-[0.75rem] h-[0.75rem] rounded-full bg-[#fff];
    transition: left 0.25s;
  }
}

.btn-toggle-value {
  @apply text-xs text-white m-0 p-0;
}

.btn-toggle.active .btn-toggle-value {
  @apply text-white;
}

.btn-toggle.active {
  background-color: #29b5a8;
}

.btn-toggle.active .handle {
  left: calc(100% - 0.85rem);
}

</style>