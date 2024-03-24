<template>
  <div class="index-page" :class="layoutMode">
    <h1 class="title">About Guu</h1>
    <p class="murmur">說實在的，我很不擅長介紹自己，所以在這就把我想的到的關於我的東西一條條的列上來吧!</p>
    <div class="text-block">
      <h3 class="text-block-title">基本資料</h3>
      <p class="text-block-value">
        <span class="desc">MBTI:</span> ISFJ (守護者)
      </p>
      <p class="text-block-value">
        <span class="desc">星座:</span> 太陽射手 & 月亮上升天平
      </p>
      <p class="text-block-value">
        <span class="desc">血型:</span> A型
      </p>
      <p class="text-block-value">
        <span class="desc">駕駛工具:</span> 會開車(有駕照)但不會騎車
      </p>
      <p class="text-block-value">
        <span class="desc">身體狀況:</span> 除了有點發福外沒什麼疾病
      </p>
    </div>
    <div class="text-block">
      <h3 class="text-block-title">我的性格組成</h3>
      <p class="text-block-value">
        <span class="desc">●</span>算得上是相當理性
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>營造舒適的氛圍是很重要的事，在前公司甚至有整年播了千百小時的 Spotify 的時候
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>比起社交，更喜歡待在自己的小空間
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>基本除了內臟、苦的東西以外其他都吃，但如果是便當菜裡有的話還是會吃完
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>當個善良的人，而所謂的善良就是「不要影響到其他人」，所以對於像是上下捷運不禮讓的老人很反感
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>喜歡在相對的舒適圈裡嘗試新的事物
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>基本沒有什麼選擇障礙
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>換為思考是很好的事，但很多人不明白
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>對很多事喜歡探究其最根本的原因
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>比起「創造」，更擅長「改動」
      </p>
    </div>
    <div class="text-block">
      <h3 class="text-block-title">苦手的事</h3>
      <p class="text-block-value">
        <span class="desc">●</span>畫畫、唱歌等相對藝術的事
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>面對猶豫不決的人
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>探討太過理論或虛構的事
      </p>
    </div>
    <div class="text-block">
      <h3 class="text-block-title">最近的嘗試</h3>
      <p class="text-block-value">
        <span class="desc">●</span>讓自己能成為 front end senior
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>重拾重訓
      </p>
      <p class="text-block-value">
        <span class="desc">●</span>自學程度達到 N1
      </p>
    </div>
    <div class="text-block">
      <h3 class="text-block-title">喜歡的事物</h3>
      <p class="text-block-value">
        <span class="desc">● 音樂 :</span>聽音樂其實比較是因為喜歡某個歌手的嗓音而喜歡，比起中文英文，喜歡日文歌更多一點
        <p>Aimer、Aimyon、milet、iri、Ado、米津玄師、Reol、Sia、Adele、告五人、茄子蛋</p>
      </p>
      <p class="text-block-value">
        <span class="desc">● 書籍 :</span>書的部分看的大多是小說、漫畫，要說對我影響比較多的，也實在挑不出來，畢竟那些裡面或多或少都有東西影響了我的想法</p>
      <p class="text-block-value">
        <span class="desc">● 動畫 :</span>影響程度如書籍，但還是有幾部會特別覺得想推薦給人的
        <p>來自深淵、86—不存在的戰區、遊戲人生</p>
      </p>
    </div>
    <div class="text-block">
      <h3 class="text-block-title">為什麼叫グウ?</h3>
      <p class="text-block-value">主要是因為以前老婆覺得我的身型像香菇，再來是以前有個挺喜歡的動畫，台灣翻譯為「哈雷小子」，而我覺得裡面的女主角(?)挺可愛的，而她的名字就念作グウ!</p>
    </div>
    <div class="text-block">
      <h3 class="text-block-title">人生的目標</h3>
      <p class="text-block-value">追求的其實也就是個平淡簡單的生活，跟老婆兩人在自己的小窩中，可以的話養隻貓，然後愜意悠閒的躺在床上聽著podcast之類的，雖然大半都已經完成，但為了能擺脫還需要賺錢的這項差事，就只能繼續精進自己，讓自己能賺更多了。</p>
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
  @apply px-10;
}

.title {
  @apply text-6xl mb-5 cursor-default;
  font-family: 'Outfit-ExtraBold';
}

.murmur {
  @apply text-right cursor-default;
  font-family: 'Outfit-Medium';

  @media (max-width: 800px) {
    @apply text-left text-xs;
  }
}

.text-block {
  @apply relative my-5 mx-[10px] bg-white bg-opacity-10 rounded-md p-5; 

  &-title {
    @apply text-xl font-bold text-gray-400;
  }

  &-value {
    @apply mt-[10px];

    .desc {
      @apply font-[700] mr-[10px];
    }
  }

  @media (max-width: 800px) {
    @apply relative p-[10px];

    &-title {
      @apply text-lg font-bold text-gray-400;
    }

    &-value {
      @apply text-sm mt-[5px];
    }
  }
}

.index-page.light {
  .text-block {
    @apply bg-gray-400 bg-opacity-20;
  }

}
</style>