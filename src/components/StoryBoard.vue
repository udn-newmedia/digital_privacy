<template>
  <section class="story-board">
    <div class="story-card-container" 
      :style="{
        width: cardNumber * 100 + 'vw',
        transform: 'translateX(' + boardTraslation + 'vw)',
      }"
    >
      <StoryCard :cardScript="storyCardScript[0]" fontColor="#ffffff">
        <NoiseCover slot="background"></NoiseCover>
        <div slot="cover" class="cover-text">
          <h2>數位監控的一天</h2>
          <h3>這些3C產品竟會偷走我的個資！</h3>
          <p><br></p>
          <p>現代人的生活離不開3C產品，但在享受科技便利性的同時，我們已不自覺地奉上了隱私。</p>
          <p><br></p>
          <p>30歲的馬克是一位重度3C族，科技產品不離身。跟著馬克過一天，看看我們的生活中究竟有哪些意想不到的個資外洩風險。</p>
        </div>
        <div slot="button" class="cover-button-wrapper">
          <div @click="goNext(0)" class="cover-button">開始 →</div>
          <div class="cover-button-text">左右滑動閱讀</div>
        </div>
      </StoryCard>
      <StoryCard :cardScript="storyCardScript[1]">
        <div slot="background"></div>
        <div slot="video">
          
        </div>
        <div slot="message">
          <p>上班途中，馬克來到咖啡廳，點了一杯咖啡，使用行動支付App付款。</p>
        </div>
        <div slot="button" class="control-button-wrapper">
          <div class="left-control-button-wrapper">
            <button @click="goPrevious(1)">返回</button>
          </div>
          <div class="left-control-button-wrapper">
            <button @click="goNext(1)">繼續</button>
            <div>或回主文</div>
          </div>
        </div>
      </StoryCard>
      <StoryCard :cardScript="storyCardScript[2]">
        <div slot="background"></div>
        <div slot="video">
          
        </div>
        <div slot="warning">
          <h1>駭客偽造QR Code騙個資</h1>
          <p>行動支付應用程式和裝置的漏洞都是駭客經常鎖定下手的目標，有些不肖人士會置換商家的QR Code，誤導民眾付款到詐騙帳戶，甚至將惡意程式置入連結網站，藉此竊取個資。資安專家建議，民眾在掃碼支付前，可先觀察QR Code是否有被塗改、覆蓋、黏貼等痕跡。</p>
        </div>
        <div slot="button" class="control-button-wrapper">
          <div class="left-control-button-wrapper">
            <button @click="goPrevious(2)">返回</button>
          </div>
          <div class="left-control-button-wrapper">
            <button @click="goNext(2)">繼續</button>
            <div>或回主文</div>
          </div>
        </div>
      </StoryCard>
      <StoryCard :cardScript="storyCardScript[3]">
        <div slot="background"></div>
        <div slot="message">
          <p>馬克走進一家無人便利超商買午餐，店內採用臉部辨識，「刷臉」就能完成付款。</p>
        </div>
        <div slot="warning">
          <h1>你的臉孔成為廣告商的數據</h1>
          <p>臉部辨識技術是時下最夯的應用，在中國，不少商店、銀行和機場都利用人臉辨識來購物付款和驗證身分，台灣也已經有無人超商開始營運。當臉孔成為一張張活動的身分證，相關的隱私問題也引發爭議。</p>
          <p><br></p>
          <p>國外有利用臉部辨識的電子廣告看板，能夠紀錄顧客的性別、年齡、臉部表情、以及觀看廣告看板的時間。但不少民眾認為，這種廣告看板沒有明顯通知，使用者也沒有辦法選擇退出不讓廣告看板記錄，無疑是對一般消費者隱私的侵蝕。</p>
        </div>
        <div slot="button" class="control-button-wrapper">
          <div class="left-control-button-wrapper">
            <button @click="goPrevious(3)">返回</button>
          </div>
          <div class="left-control-button-wrapper">
            <button @click="goNext(3)">繼續</button>
            <div>或回主文</div>
          </div>
        </div>
      </StoryCard>
      <StoryCard :cardScript="storyCardScript[4]">
        <div slot="background"></div>
        <div slot="message"></div>
        <p>下班後，馬克習慣到河濱公園慢跑，他用運動手環紀錄跑步里程、時間和消耗的卡路里數。</p>
        <div slot="warning">
          <h1>運動手環 可能洩漏你的行蹤和ATM密碼</h1>
          <p>非營利組織Open Effect與多倫多大學共同進行的研究發現，包含小米、Fitbit、Garmin等七款運動手環，所搭載的藍牙功能因有固定辨識標籤，只要透過這個標籤，即便在手機上的藍牙功能關閉，沒有與手機配對的情況下，第三方仍然可以追蹤這些運動手環在任何時刻的位置。</p>
          <p><br></p>
          <p>另外，根據國外媒體Tech Times報導，運動手環有可能盜取你的銀行帳戶密碼。這類具有運動追蹤功能的穿戴式裝置能夠準確地記錄用戶的手部動作，使用者在ATM提款機上輸入密碼時，記錄下運動的軌跡可能被發送到其他人手中，利用對運動軌跡的分析，就可以輕而易舉地獲得密碼。</p>
        </div>
        <div slot="button" class="control-button-wrapper">
          <div class="left-control-button-wrapper">
            <button @click="goPrevious(4)">返回</button>
          </div>
          <div class="left-control-button-wrapper">
            <button @click="goNext(4)">繼續</button>
            <div>或回主文</div>
          </div>
        </div>
      </StoryCard>
      <StoryCard :cardScript="storyCardScript[5]">
        <div slot="background"></div>
        <div slot="message">
          <p>睡前，小陳習慣玩一下手機遊戲App，直到眼皮沉重才入眠。</p>
        </div>
        <div slot="warning">
          <h1>逾250款手遊App在監聽用戶</h1>
          <p>《紐約時報》揭露，有超過250款遊戲App，都安裝美國軟體開發商Alphonso的外掛程式，該外掛透過手機麥克風辨識電視節目聲音，藉此紀錄用戶收視習慣，以投放廣告。這當中有不少遊戲可以在台灣的iOS及Android手機平台下載。以Google Play商店為例，知名3D遊戲Pool 3D等都搭載Alphonso的軟體。</p>
        </div>
        <div slot="button" class="control-button-wrapper">
          <div class="left-control-button-wrapper">
            <button @click="goPrevious(5)">返回</button>
          </div>
          <div class="left-control-button-wrapper">
            <button @click="goNext(5)">繼續</button>
            <div>或回主文</div>
          </div>
        </div>
      </StoryCard>
      <StoryCard :cardScript="storyCardScript[6]">
        <div slot="background"></div>
        <div slot="message">
          <p>小陳玩手遊到快睡著，不用起身關燈，只要對智慧音箱說：「關燈」，燈就熄了。</p>
        </div>
        <div slot="warning">
          <h1>智慧音箱 可能紀錄你的私密對話</h1>
          <p>美國曾經發生亞馬遜的智慧音箱Echo自動錄下用戶談話，並發送給通訊錄名單人員的意外。Google的智慧音箱也曾傳出會在用戶沒有喚醒的情況下不間斷地錄音，並將音檔回傳Google伺服器。相關事件引發外界對智慧音箱侵犯用戶隱私的擔憂。</p>
        </div>
        <div slot="button" class="control-button-wrapper">
          <div class="left-control-button-wrapper">
            <button @click="goPrevious(6)">返回</button>
          </div>
          <div class="left-control-button-wrapper">
            <button @click="goNext(6)">繼續</button>
            <div>或回主文</div>
          </div>
        </div>
      </StoryCard>
    </div>
  </section>
</template>

<script>
import NoiseCover from './NoiseCover.vue';
import StoryCard from './StoryCard.vue';

export default {
  name: 'StoryBoard',
  components: {
    NoiseCover,
    StoryCard,
  },
  data() {
    return {
      cardNumber: 7,
      boardTraslation: 0,
      storyCardScript: {
        0: {
          video: false,
          warning: false,
          message: false,
          videoFlag: false,
          warningFlag: false,
          messageFlag: false,
        },
        1: {
          video: true,
          warning: true,
          message: true,
          videoFlag: false,
          warningFlag: false,
          messageFlag: false,
        },
        2: {
          video: true,
          warning: true,
          message: true,
          videoFlag: false,
          warningFlag: false,
          messageFlag: false,
        },
        3: {
          video: false,
          warning: true,
          message: true,
          videoFlag: false,
          warningFlag: false,
          messageFlag: false,
        },
        4: {
          video: false,
          warning: true,
          message: true,
          videoFlag: false,
          warningFlag: false,
          messageFlag: false,
        },
        5: {
          video: false,
          warning: true,
          message: true,
          videoFlag: false,
          warningFlag: false,
          messageFlag: false,
        },
        6: {
          video: false,
          warning: true,
          message: true,
          videoFlag: false,
          warningFlag: false,
          messageFlag: false,
        },
      },
    };
  },
  methods: {
    goNext(index) {
      if (this.certifyNextCard(index) && this.boardTraslation > -(this.cardNumber  - 1) * 100) {
        this.boardTraslation -= 100;
        this.storyCardScript[index + 1].warningFlag = true;
      }
    },
    goPrevious(index) {
      if (this.certifyNextCard(index) && this.boardTraslation < 0) {
        this.boardTraslation += 100;
      }
    },
    certifyNextCard(index) {
      if (this.storyCardScript[index].videoFlag === false &&
        this.storyCardScript[index].warningFlag === false &&
        this.storyCardScript[index].messageFlag === false) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .story-board {
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

      @media screen and (min-width: 1024px) {
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
  .control-button-wrapper {

  }
</style>

