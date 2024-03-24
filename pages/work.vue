<template>
  <div class="index-page" :class="layoutMode">
    <h1 class="title">Experience</h1>
    <div class="work-block">
      <div class="row example-basic">
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-info">
                <span>2024/03</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">逆轉科技有限公司 - Frond End Engineer</h3>
                <p>
                  從資策會結訓後，就一直在這家公司當前端工程師。<br>
                  在這從一個連框架都不懂的初心者，到現在已經可以自己做完一整套系統的1轉工程師，雖然還無法稱自己為 Senior，但感覺再過個一兩年應該就能以此自居了!<br>
                </p>
                <br>
                <h3 class="timeline-title">期間的工作經歷:</h3>
                <p>內部使用 - 考勤系統、工單系統、報價單系統、進銷存系統</p>
                <p>客戶專案 - 智慧工宅網路監控系統、官方網站重製、毒氣災害模擬工具、智慧工廠 ( AIot )</p>
                <p>其他事項 - 客戶專案駐點維護、政府相關比賽</p>
                <br>
                <small class="text-red-300">如需更完整的工作經歷，麻煩寄信喔</small>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>2020/06</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">資策會 - 大數據就業養成班第13期</h3>
                <p>軍中退伍後，為了讓自己可以往自己想要的地方發展，就來利用退伍後的補助，參加了資策會的就業養成班，在這之中又再次的接觸 code，這個班裡也真是學相當多的東西，從環境的 windows、linux 到 python 網路爬蟲，甚至是利用 VM 製作 HA 的多工環境，但，在那段時間學到的也都只是一個入門而已。</p>
                <br>
                <h3 class="timeline-title">資策會畢業專題 - IoT數據應用-智慧廁間衛生紙使用量分析 feat.中華電信</h3>
                <p>以中華電信Iot物聯網平台為媒介，利用所搜集之數值，計算各廁間的廁紙補充、更換的時間，並預估該廁所的廁紙月預估量，作為下月採購量的參考，以降低庫存的壓力。</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>2020/01</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">退伍後的小小時光</h3>
                <p></p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>2019/11</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">中華民國陸軍 - 志願役上兵</h3>
                <p>一段真的是某種程度的磨練期，當初為了生活，所以毅然決然的簽了自願役，想不到一樣四年的時間過去了，還是會時不時地夢到曾經在這段時間的經歷(不是什麼好的)，但也多虧了這段時間，讓我對於很多的底線有了更好的解釋，總得來說，就是變得更耐磨了(?)</p>
                <br>
                <h3 class="timeline-title">期間職務經歷:</h3>
                <p>協助處理行政事務 - 因上級請求，協助各業務負責人，將其業務進行整理以提升工作效率。</p>
                <p>帶領同級同仁 - 在幹部不足時，協助幹部帶領同仁完成各項任務。</p>
                <p>獨立業務 - 在負責一項獨立業務期間，能準時且有成效的完成該業務，且無被督導缺失記錄。</p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">學生時期</h2>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>2015/06</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">景文科技大學 - 視覺傳達設計系</h3>
                <p>真的是人生最有最多變化的一段時光，高中時期因不想再被當4年，於是選了個相對符合我興趣的科系，別人在這段時間都在玩社團，而我則是在系辦裡面當助教，幫忙準備評鑑、製作系上網站(開始第一次的接觸code)，也算是在這訂下了個對於未來的目標呢!</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>2012/09</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">內湖高工 - 資訊科</h3>
                <p>在這被當了3年的電學，而且班上都只有男生，因為這兩點讓我再轉考大學的時候做了人生當中相當正確的決定!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    layoutMode: String,
    isMobile: Boolean,
  },
  setup(props, ctx) {

    return {

    }
  },
};
</script>
<style lang="scss" scoped>
.index-page {
  @apply px-10;

  &::-webkit-scrollbar {
    @apply rounded-md w-2 h-2;
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.353)
  }
  
  &::-webkit-scrollbar-thumb{
    @apply rounded-md;
    background: #d1d1d173;
  }
  
  &::-webkit-scrollbar-thumb:hover{
    background: #718096;
  }
}

.title {
  @apply text-6xl mb-5 cursor-default;
  font-family: 'Outfit-ExtraBold';
}

.work-block {
  @apply cursor-default;
  $primary-color: #FF6B6B;
  $primary-color-hover: scale-color($primary-color, $lightness: 32%);
  font-family: 'NotoSansTC-Regular';

  .row {
    padding: 0 0 4em 0;
  }

  .timeline {
    @apply leading-[1.4em] m-0 p-0 w-full;
    list-style: none;
  }

  .timeline-item {
    @apply relative pl-10;

    &:last-child {
      padding-bottom: 0;
    }
  }

  .timeline-info {
    @apply text-base font-bold uppercase whitespace-nowrap m-0 mb-2;
    letter-spacing: 3px;
  }

  .timeline-marker {
    @apply absolute inset-0 w-[15px];

    &:before {
      @apply absolute block rounded-full w-[15px] h-[15px] left-0 top-1;
      content: "";
      background: $primary-color;
      border: 3px solid transparent;
      transition: background 0.3s ease-in-out,
        border 0.3s ease-in-out;
    }

    &:after {
      @apply absolute w-[3px] bg-[#CCD5DB] block top-6 left-[6px] bottom-0;
      content: "";
    }

    .timeline-item:last-child &:after {
      content: none;
    }
  }

  .timeline-item:not(.period):hover .timeline-marker:before {
    background: transparent;
    border: 3px solid $primary-color;
  }

  .timeline-content {
    .timeline-title {
      @apply text-base;
      font-family: 'NotoSansTC-Bold';
      margin: 0;
      letter-spacing: 3px;
    }

    @apply text-sm;
    font-family: 'NotoSansTC-Regular';
    padding-bottom: 40px;

    p:last-child {
      margin-bottom: 0;
    }
  }

  /*----- TIMELINE PERIOD -----*/

  .period {
    padding: 0;

    .timeline-info {
      display: none;
    }

    .timeline-marker {
      
      &:before {
        background: transparent;
        content: "";
        width: 15px;
        height: auto;
        border: none;
        border-radius: 0;
        top: 0;
        bottom: 30px;
        position: absolute;
        border-top: 3px solid #CCD5DB;
        border-bottom: 3px solid #CCD5DB;
      }

      &:after {
        content: "";
        height: 32px;
        top: auto;
      }
    }

    .timeline-content {
      padding: 40px 0 70px;
    }

    .timeline-title {
      @apply text-2xl;
      font-family: 'NotoSansTC-Bold';
      margin: 0;
      letter-spacing: 3px;
    }
  }

  .timeline-split {
    @media (min-width: 800px) {
      .timeline {
        display: table;
      }

      .timeline-item {
        display: table-row;
        padding: 0;
      }

      .timeline-info,
      .timeline-marker,
      .timeline-content,
      .period .timeline-info {
        display: table-cell;
        vertical-align: top;
      }

      .timeline-marker {
        position: relative;
      }

      .timeline-content {
        padding-left: 30px;
      }

      .timeline-info {
        padding-right: 30px;
      }

      .timeline-title {
        @apply text-base;
        letter-spacing: 1px;
      }

      .period .timeline-title {
        position: relative;
        left: -45px;
      }
    }
  }

  @media (min-width: 800px) {
    .timeline-content {
    .timeline-title {
      @apply text-base;
      font-family: 'NotoSansTC-Bold';
      margin: 0;
      letter-spacing: 3px;
    }

    @apply text-sm;
    font-family: 'NotoSansTC-Regular';
    padding-bottom: 40px;

    p:last-child {
      margin-bottom: 0;
    }
  }
  }
}
</style>