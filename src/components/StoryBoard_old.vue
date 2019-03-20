<template>
  <section id="story-board" class="story-board">
    <ProgressClock v-show="Number(storyCardPage) !== 0" :currentTime="[time[storyCardPage][0], time[storyCardPage][1]]"></ProgressClock>
    <div class="story-card-container" 
      :style="{
        width: cardNumber * 100 + 'vw',
        transform: 'translateX(' + boardTraslation + 'vw)',
      }"
    >
      <StoryCard
        :cardScript="storyCardScript[0]"
        :backgroundImage="''"
        fontColor="#ffffff"
      >
        <NoiseBackground slot="background"
          :noiseBackgroundImage="certifyDevice('./story_board/day_cover_m.jpg', './story_board/day_cover_web.jpg')"
        ></NoiseBackground>
        <div slot="cover">
          <div class="cover-title">
            <div class="major">沒有隱私的智慧生活</div>
            <!-- <div class="minor"></div> -->
          </div>
          <p><br></p>
          <p>現代人的生活離不開3C科技產品，從最近正夯的智慧音箱、智慧手環，到買東西結帳時使用的行動支付、人臉辨識技術，但你可知道？這些科技產品和服務潛藏哪些個資外洩的風險？</p>
        </div>
        <div slot="button" class="cover-button-wrapper">
          <div @click="goNext(0)" class="cover-button">點按觀看→</div>
          <div class="cover-button-text">左右滑動閱讀</div>
        </div>
      </StoryCard>
      <StoryCard 
        :cardScript="storyCardScript[1]"
        :backgroundImage="certifyDevice('./story_board/day_1_m.jpg', './story_board/day_1_web.jpg')"
      >
        <div slot="message">
          <p>09:00 一早出門，你到咖啡廳買一份早餐搭配一杯咖啡，使用行動支付App付款。</p>
        </div>
      </StoryCard>
      <StoryCard
        :cardScript="storyCardScript[2]"
        :backgroundImage="''"
      >
        <div slot="video">
          <FullVideo
            videoSrcMob="./story_board/day1_m.mp4"
            videoSrcWeb="./story_board/day1_web.mp4"
            :isFullHeight="true">
          </FullVideo>
        </div>
        <div slot="warning">
          <div class="warning-title"><div class="warning-icon">！</div>駭客偽造QR Code騙個資</div>
          <p>行動支付應用程式和裝置的漏洞都是駭客經常鎖定下手的目標，有些不肖人士會置換商家的QR Code，誤導民眾付款到詐騙帳戶，甚至將惡意程式置入連結網站，藉此竊取個資。資安專家建議，民眾在掃碼支付前，可先觀察QR Code是否有被塗改、覆蓋、黏貼等痕跡。</p>
        </div>
      </StoryCard>
      <StoryCard
        :cardScript="storyCardScript[3]"
        :backgroundImage="certifyDevice('./story_board/day_2_m.jpg', './story_board/day_2_web.jpg')"
      >
        <div slot="video">
          <FullVideo
            videoSrcMob="./story_board/day2_m.mp4"
            videoSrcWeb="./story_board/day2_web.mp4"
            :isFullHeight="true">
          </FullVideo>
        </div>
        <div slot="message">
          <p>12:00 中午，你走進無人便利超商買午餐，店內採用人臉辨識，「刷臉」就能完成付款。</p>
        </div>
        <div slot="warning">
          <div class="warning-title"><div class="warning-icon">！</div>人臉辨識 恐侵犯民眾隱私</div>
          <p>台灣近年逐漸將人臉辨識廣泛運用在公、私部門，如檢警犯罪偵查、捷運廣告看板及無人超商，但相關的隱私問題也引發爭議。2018年5月，台北市宣布將建置1萬2600盞有人臉辨識功能的<a href="https://udn.com/news/story/7323/3160105" target="_blank">智慧路燈</a>以維持治安，引發民間反彈，認為此舉等同監控人民的行蹤。北市府隨後改口，表示路燈上將不會有「人臉辨識」。</p>
        </div>
      </StoryCard>
      <StoryCard
        :cardScript="storyCardScript[4]"
        :backgroundImage="certifyDevice('./story_board/day_3_m.jpg', './story_board/day_3_web.jpg')"
      >
        <div slot="message">
          <p>19:00 下班後，你到公園慢跑，使用智慧型運動手環紀錄跑步里程和消耗的卡路里數。</p>
        </div>
        <div slot="warning">
          <div class="warning-title"><div class="warning-icon">！</div>運動手環恐洩個資和ATM密碼</div>
          <p>國外<a href="https://www.dailymail.co.uk/sciencetech/article-3429067/Is-fitness-tracker-putting-privacy-risk-Claims-selling-wearables-leaking-data-turned-off.html" target="_blank">研究</a>發現，包含小米、Fitbit、Garmin等7款運動手環，會透過藍牙連接洩漏用戶個資，即使將配對手機上的藍牙功能關閉也無濟於事。此外，也有<a href="https://www.dailymail.co.uk/sciencetech/article-3429067/Is-fitness-tracker-putting-privacy-risk-Claims-selling-wearables-leaking-data-turned-off.html" target="_blank">研究</a>指出，這類具有運動追蹤功能的穿戴式裝置能夠準確地記錄用戶的手部動作，使用者在ATM提款機上輸入密碼時，記錄下的運動軌跡可能被發送到其他人手中，經過分析就可以輕而易舉地獲得密碼。</p>
        </div>
      </StoryCard>
      <StoryCard
        :cardScript="storyCardScript[5]"
        :backgroundImage="certifyDevice('./story_board/day_4_m.jpg', './story_board/day_4_web.jpg')"
      >
        <div slot="message">
          <p>22:30 睡前，你習慣玩一下手機遊戲App。</p>
        </div>
        <div slot="warning">
          <div class="warning-title"><div class="warning-icon">！</div>逾250款手遊App在監聽用戶</div>
          <p><a href="https://www.nytimes.com/2017/12/28/business/media/alphonso-app-tracking.html?_r=1" target="_blank">《紐約時報》</a>揭露，有超過250款遊戲App，都安裝美國軟體開發商Alphonso的外掛程式，該外掛透過手機麥克風辨識電視節目聲音，藉此紀錄用戶收視習慣，以投放廣告。這當中有不少遊戲可以在台灣的iOS及Android手機平台下載。以Google Play商店為例，知名3D遊戲Pool 3D等都搭載Alphonso的軟體。</p>
        </div>
      </StoryCard>
      <StoryCard
        :cardScript="storyCardScript[6]"
        :backgroundImage="certifyDevice('./story_board/day_5_m.jpg', './story_board/day_5_web.jpg')"
      >
        <div slot="message">
          <p>23:00 你玩手遊玩到快睡著，不用起身關燈，只要對智慧音箱說：「關燈」，燈就熄了。</p>
        </div>
        <div slot="warning">
          <div class="warning-title">
            <div class="warning-icon">！</div>
            智慧音箱 可能紀錄你的私密對話
          </div>
          <p>美國曾經發生亞馬遜的智慧音箱Echo自動錄下用戶談話，並發送給通訊錄名單人員的意外。Google的智慧音箱也曾傳出會在用戶沒有喚醒的情況下不間斷地錄音，並將音檔回傳Google伺服器。相關事件引發外界對智慧音箱侵犯用戶隱私的擔憂。</p>
        </div>
      </StoryCard>
    </div>
  </section>
</template>

<script>
import FullVideo from './FullVideo.vue'
import NoiseBackground from './NoiseBackground.vue';
import ProgressClock from './ProgressClock.vue'
import StoryCard from './StoryCard.vue';
import {mapActions, mapState} from 'vuex';
import * as Hammer from 'hammerjs';

export default {
  name: 'StoryBoard',
  components: {
    FullVideo,
    NoiseBackground,
    ProgressClock,
    StoryCard,
  },
  data() {
    return {
      time: {
        0: [0, 0],
        1: [9, 0],
        2: [9, 0],
        3: [12, 0],
        4: [19, 0],
        5: [22, 30],
        6: [23, 0],
      },
      stickFlag: false,
    };
  },
  computed: {
    ...mapState([
      'cardNumber',
      'storyCardScript',
      'storyCardPage',
    ]),
    boardTraslation() {
      return -this.storyCardPage * 100;
    },
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
    }),
    goNext() {
      this.updatePage(1);
    },
    certifyDevice(imgSrcMob, imgSrcWeb) {
      if (window.innerWidth > 768) {
        return imgSrcWeb;
      } else {
        return imgSrcMob;
      }
    },
    stickStoryBoardEvent() {
      window.scrollTo({
        top: document.getElementById('story-board').offsetTop,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    // 手機左右滑動閱讀事件
    const vm = this;
    const storyBoard = document.getElementById('story-board');
    const mc = new Hammer(storyBoard);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    mc.on('swipeup', () => {
      vm.$children[vm.storyCardPage + 1].goNext();
    });
    mc.on('swipedown', () => {
      if (vm.storyCardPage > 0) {
        vm.$children[vm.storyCardPage + 1].goPrevious();
      }
    });

    // mc.on('swipedown', () => {
    //   window.scrollTo({
    //     top: vm.$el.offsetTop - vm.$el.offsetHeight * 0.5,
    //     behavior: 'smooth',
    //   });
    // });
    // mc.on('swipeup', () => {
    //   window.scrollTo({
    //     top: vm.$el.offsetTop + vm.$el.offsetHeight * 0.5,
    //     behavior: 'smooth',
    //   });
    // });

    window.addEventListener('scroll', () => {
      // 監控進度
      if (!vm.stickFlag) {
        if (window.pageYOffset > document.getElementById('story-board').offsetTop && window.pageYOffset <= document.getElementById('story-board').offsetTop + window.innerHeight) {
          vm.stickFlag = true;
          vm.stickStoryBoardEvent();
          document.body.style.overflow = 'hidden';
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
  .story-board {
    position: relative;
    overflow: hidden;
  }
  .story-card-container {
    height: 100vh;
    display: flex;
    transition: transform 1s ease-in-out;
  }

  .cover-button-wrapper {
    .cover-button {
      width: 35vw;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background-color: #3a67fe;
      box-shadow: 0 0 15px 0 #348ce5;
      cursor: pointer;

      @media screen and (min-width: 1024px) {
        margin-top: 50px;
        width: 150px;
      }
    }
    .cover-button-text {
      width: 35vw;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;

      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
  }
</style>

