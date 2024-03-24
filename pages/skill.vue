<template>
  <div class="index-page" :class="layoutMode">
    <h1 class="title">Skill</h1>
    <div class="skill">
      <div class="skill-card darker">
        <header class="skill-card_header">
          <div class="skill-card_icon text-4xl">Front End</div>
        </header>
        <section class="skill-card_body">
          <h2 class="skill-card_title">前端相關</h2>
          <ul class="skill-card_knowledge">
            <li>Vue2、Vue3</li>
            <li>Vite</li>
            <li>Nuxt</li>
            <li>CSS、SCSS、Tailwind</li>
            <li>Javascript、Typescript</li>
            <li>RestFul API</li>
          </ul>
        </section>
      </div>
      <div class="skill-card lighter">
        <header class="skill-card_header">
          <div class="skill-card_icon text-4xl">Back End</div>
        </header>
        <section class="skill-card_body">
          <h2 class="skill-card_title">後端相關</h2>
          <ul class="skill-card_knowledge">
            <li>Node.js</li>
            <li>Express</li>
            <li>TypeOrm</li>
          </ul>
        </section>
      </div>
      <div class="skill-card darker">
        <header class="skill-card_header">
          <div class="skill-card_icon text-4xl">Dev env</div>
        </header>
        <section class="skill-card_body">
          <h2 class="skill-card_title">使用環境</h2>
          <ul class="skill-card_knowledge">
            <li>MacOs</li>
            <li>Windows 10</li>
            <li>Linux(Ubuntu)</li>
          </ul>
        </section>
      </div>
      <div class="skill-card lighter">
        <header class="skill-card_header">
          <div class="skill-card_icon text-4xl">3rd Plugn</div>
        </header>
        <section class="skill-card_body">
          <h2 class="skill-card_title">第三方套件</h2>
          <ul class="skill-card_knowledge">
            <li>Rxjs</li>
            <li>e-charts</li>
            <li>i18n</li>
            <li>RTSP 影像串接</li>
            <li>QR reader</li>
          </ul>
        </section>
      </div>
      <div class="skill-card darker">
        <header class="skill-card_header">
          <div class="skill-card_icon text-4xl">Database</div>
        </header>
        <section class="skill-card_body">
          <h2 class="skill-card_title">資料庫</h2>
          <ul class="skill-card_knowledge">
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </section>
      </div>
      <div class="skill-card lighter">
        <header class="skill-card_header">
          <div class="skill-card_icon text-4xl">Other tools</div>
        </header>
        <section class="skill-card_body">
          <h2 class="skill-card_title">其他使用工具</h2>
          <ul class="skill-card_knowledge">
            <li>GitHub、GitLab</li>
            <li>Postman</li>
            <li>Docker</li>
            <li>Figma</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SkillCard from '../components/tools/SkillCard.vue'
  export default {
  props: {
    layoutMode: String,
    isMobile: Boolean,
  },
  components: { SkillCard },
  setup(props, ctx) {

    return {
      
    }
  },
};
</script>
<style lang="scss" scoped>
.index-page {
  @apply px-10;
}

.title {
  @apply text-6xl mb-5 cursor-default;
  font-family: 'Outfit-ExtraBold';
}

.skill {
  @apply relative w-full h-fit rounded-md flex flex-wrap items-center justify-between;

  .skill-card {
    @apply relative p-5 w-[30%] bg-white cursor-pointer overflow-hidden rounded-md mb-5;

    @media (max-width: 800px) {
      width: 100%;
    }
    transition: all 0.3s linear;
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
        height: 210px;

        .skill-card_knowledge li {
          font-family: 'Outfit-Regular';
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

  .skill-card.darker {
    .skill-card_header {
      @apply bg-gray-500;
    }

    .skill-card_body {
      .skill-card_title {
        @apply text-gray-500;
      }
    }
  }

  .skill-card.lighter {
    .skill-card_header {
      @apply bg-gray-300;
    }

    .skill-card_body {
      .skill-card_title {
        @apply text-gray-300;
      }
    }
  }
}

.index-page.light {
  .skill-card_icon {
    @apply text-gray-500;
  }

  .skill-card.darker {
    .skill-card_header {
      @apply bg-gray-300;
    }

    .skill-card_body {
      .skill-card_title {
        @apply text-gray-300;
      }
    }
  }

  .skill-card.lighter {
    .skill-card_header {
      @apply bg-gray-200;

      
    }

    .skill-card_body {
      .skill-card_title {
        @apply text-gray-200;
      }
    }
  }
}
</style>