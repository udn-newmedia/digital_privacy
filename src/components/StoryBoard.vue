<template>
  <div class="story-board-contianer">
    
    <div class="story-board-article-wrapper">
      <slot name="article"></slot>
    </div>
    <div class="story-board-wrapper">
      <Slick
        ref="slick"
        :options="slickOptions"
        @setPosition="handleSetPosition"
      >
        <StoryCard
          :index="0"
          :imageSrc="'./story_board/day1.jpg'"
        >
          <div slot="description">圖／123RF</div>
          <div slot="title" class="card-warning-title">
            <div class="title-icon">！</div>
            <div>智慧音箱 可能記錄你的私密對話</div>
          </div>
          <p slot="text">
            美國曾經發生亞馬遜的智慧音箱Echo自動錄下用戶談話，並發送給通訊錄名單人員的意外。Google的智慧音箱也曾傳出會在用戶沒有喚醒的情況下不間斷地錄音，並將音檔回傳Google伺服器。
          </p>
        </StoryCard>
        <StoryCard
          :index="1"
          :imageSrc="'./story_board/day2.jpg'"
        >
          <div slot="description">圖／123RF</div>
          <div slot="title" class="card-warning-title">
            <div class="title-icon">！</div>
            <div>運動手環 恐洩個資和ATM密碼</div>
          </div>
          <p slot="text">
            國外<a href="https://www.dailymail.co.uk/sciencetech/article-3429067/Is-fitness-tracker-putting-privacy-risk-Claims-selling-wearables-leaking-data-turned-off.html" @click="sendGA('研究')">研究</a>發現，包含小米、Fitbit、Garmin等7款運動手環，會透過藍牙連接洩漏用戶個資，即使將配對手機上的藍牙功能關閉也無濟於事。此外，駭客透過入侵穿戴式設備的運動傳感器，用戶輸入密碼時的手勢可以被記錄，利用運動軌跡分析，然後盜取ATM密碼。
          </p>
        </StoryCard>
        <StoryCard
          :index="2"
        >
          <div slot="video">
            <FullVideo
              videoSrcMob="./story_board/day3.mp4"
              videoSrcWeb="./story_board/day3.mp4"
              :isFullHeight="true"
            ></FullVideo>
          </div>
          <div slot="description">影音／報系資料庫</div>
          <div slot="title" class="card-warning-title">
            <div class="title-icon">！</div>
            <div>人臉辨識 恐侵犯民眾隱私</div>
          </div>
          <p slot="text">
            台灣近年將人臉辨識技術廣泛運用在公、私部門，如檢警犯罪偵查、捷運廣告看板及無人超商結帳系統，但相關的隱私問題也引發爭議。台北市曾宣布將建置1萬2600盞有人臉辨識功能的<a href="https://udn.com/news/story/7323/3160105" @click="sendGA('智慧路燈')">智慧路燈</a>以維持治安，引發民間反彈，認為此舉等同監控人民的行蹤，北市府隨後緊急喊卡。
          </p>
        </StoryCard>
        <StoryCard
          :index="3"
        >
          <div slot="video">
            <FullVideo
              videoSrcMob="./story_board/day4.mp4"
              videoSrcWeb="./story_board/day4.mp4"
              :isFullHeight="true"
            >
            </FullVideo>
          </div>
          <div slot="description">影音／報系資料庫</div>
          <div slot="title" class="card-warning-title">
            <div class="title-icon">！</div>
            <div>行動支付 當心掃到假QR Code</div>
          </div>
          <p slot="text">
            有些不肖人士會置換商家的QR Code，誤導民眾付款到詐騙帳戶，甚至將惡意程式置入連結網站，藉此竊取個資。資安專家建議，民眾在掃碼支付前，可先觀察QR Code是否有被塗改、覆蓋、黏貼等痕跡。
          </p>
        </StoryCard>
        <StoryCard
          :index="4"
          :imageSrc="'./story_board/day5.jpg'"
        >
          <div slot="description">圖／取自網路</div>
          <div slot="title" class="card-warning-title">
            <div class="title-icon">！</div>
            <div>逾250款手遊App在監聽用戶</div>
          </div>
          <p slot="text">
            <a href="https://www.nytimes.com/2017/12/28/business/media/alphonso-app-tracking.html?_r=1" @click="sendGA('紐約時報')">紐約時報</a>揭露，有超過250款遊戲App，都安裝美國軟體開發商Alphonso的外掛程式，該外掛透過手機麥克風辨識電視節目聲音，藉此紀錄用戶收視習慣，以投放廣告。這當中有不少遊戲可以在台灣的iOS及Android手機平台下載，例如Pool 3D、Honey Quest等。
          </p>
        </StoryCard>
      </Slick>
    </div>
    <div v-if="isMob" class="hint">左右滑動閱讀</div>
  </div>
</template>

<script>
import FullVideo from './FullVideo.vue';
import StoryCard from './StoryCard.vue';
import {mapActions, mapState} from 'vuex';

import Utils from 'udn-newmedia-utils';
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

export default {
  name: 'StoryBoard',
  components: {
    FullVideo,
    StoryCard,
    Slick,
  },
  data() {
    return {
      slickOptions: {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '8vw',
        arrows: false,
      },
    };
  },
  computed: {
    ...mapState([
      'storyCardPage',
      'cardNumber',
    ]),
    isMob() {
      if (window.innerWidth > 768) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
    }),
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
          this.$refs.slick.reSlick();
      });
    },
    handleSetPosition(event, slick) {
      this.updatePage(slick.currentSlide);
      this.sendPageGA(slick.currentSlide)
    },
    sendGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "aTag",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [aTag click]"
      })
    },
    sendPageGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "oneDay",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [情境] [page" + (Number(target) + 1) + "]"
      })
    },
  },
};
</script>

<style lang="scss" scoped>
  .story-board-contianer {
    position: relative;
    width: 100%;
    padding: 0 0 16vh 0;
    
    @media screen and (min-width: 1024px) {
      padding: 0 15vw 16vw 15vh;
    }

    .story-board-article-wrapper {
      position: relative;
      width: 100%;
      text-align: left;
      padding: 64px 15px;
      @media (min-width: 768px) and (max-width: 1023px) {
        padding: 64px 100px;
      }
      @media screen and (min-width: 1024px) {
        width: 800px;
        margin: 0 auto;
        padding: 84px 0;
      }
    }
    .hint {
      margin: 50px 0;
      color: #a7a7a7;
    }
  }
</style>

