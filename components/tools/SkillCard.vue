<template>
  <div class="skill-card">
    <header class="skill-card_header" :class="`bg-[${color}]`">
      <div class="skill-card_icon text-4xl">{{ name }}</div>
    </header>
    <section class="skill-card_body">
      <h2 class="skill-card_title" :class="`text-[${color}]`">{{ skillName }}</h2>
      <ul class="skill-card_knowledge">
        <li
          v-for="(skill, index) in slillList"
          :key="`${name}_${index}`"
        >{{ skill }}</li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    name: String,
    color: String,
    skillName: String,
    skillList: [],
  },
  setup(props, ctx) {
    console.log(props);
    
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.skill-card {
  @apply relative p-5 w-[30%] bg-white cursor-pointer overflow-hidden rounded-md;
  transition: all 0.5s linear;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);

  .skill-card_header {
    @apply relative h-[170px] overflow-hidden text-center;
    position: relative;

    .skill-card_icon {
      @apply mt-[15%] w-full;
      font-family: 'Outfit-ExtraBold';
    }
  }


  &:hover {
    @apply p-5;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);

    .skill-card_header {
      height: 0px;

      .skill-card_icon {
        transform: translateX(-50%) translateY(-50%) scale(3);
      }
    }

    .skill-card_body {
      height: 220px;

      .skill-card_knowledge li {
        transform: translateX(0);
        transition-timing-function: cubic-bezier(0, 1.5, 1, 1);
        transition-duration: .5s;

        @for $i from 1 through 6 {
          &:nth-child(#{$i}) {
            transition-delay: $i * .25s;
          }
        }
      }
    }
  }

  .skill-card_header {
    margin: -20px -20px 20px -20px;
    transition: height .5s;

    .skill-card_icon {
      @apply absolute top-[50%] left-[50%] block w-full h-[128px] translate-x-[-50%] translate-y-[-50%];
      transition: transform .5s;
    }
  }

  .skill-card_body {
    @apply h-10 overflow-hidden;
    transition: height .5s;

    .skill-card_title {
      @apply text-center text-[1.4em] font-[600];
      font-family: 'NotoSansTC-Regular';
      text-transform: uppercase;
    }

    .skill-card_knowledge {
      @apply text-[#424242];

      li {
        @apply mt-[5px] translate-x-[-100%] first:mt-0;
        transition-duration: 0;
        transition-delay: .5s;
      }
    }
  }
}
</style>