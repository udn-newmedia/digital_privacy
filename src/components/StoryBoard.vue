<template>
  <section class="story-board-container">
    <StoryCard>
      <NoiseCover></NoiseCover>
      <h3>數位監控的一天</h3>
      <p>這些3C產品竟會偷走我的個資！</p>
      <p><br></p>
      <p>現代人的生活離不開3C產品，但在享受科技便利性的同時，我們已不自覺地奉上了隱私。</p>
      <p><br></p>
      <p>30歲的馬克是一位重度3C族，科技產品不離身。跟著馬克過一天，看看我們的生活中究竟有哪些意想不到的個資外洩風險。</p>
    </StoryCard>
    <StoryCard>
      <p>上班途中，馬克來到咖啡廳，點了一杯咖啡，使用行動支付App付款。</p>
    </StoryCard>
    <StoryCard>
      <h1>駭客偽造QR Code騙個資</h1>
      <p>行動支付應用程式和裝置的漏洞都是駭客經常鎖定下手的目標，有些不肖人士會置換商家的QR Code，誤導民眾付款到詐騙帳戶，甚至將惡意程式置入連結網站，藉此竊取個資。資安專家建議，民眾在掃碼支付前，可先觀察QR Code是否有被塗改、覆蓋、黏貼等痕跡。</p>
    </StoryCard>
    <StoryCard>
      <p>馬克走進一家無人便利超商買午餐，店內採用臉部辨識，「刷臉」就能完成付款。</p>
    </StoryCard>
    <StoryCard>
      <h1>你的臉孔成為廣告商的數據</h1>
      <p>臉部辨識技術是時下最夯的應用，在中國，不少商店、銀行和機場都利用人臉辨識來購物付款和驗證身分，台灣也已經有無人超商開始營運。當臉孔成為一張張活動的身分證，相關的隱私問題也引發爭議。</p>
      <p><br></p>
      <p>國外有利用臉部辨識的電子廣告看板，能夠紀錄顧客的性別、年齡、臉部表情、以及觀看廣告看板的時間。但不少民眾認為，這種廣告看板沒有明顯通知，使用者也沒有辦法選擇退出不讓廣告看板記錄，無疑是對一般消費者隱私的侵蝕。</p>
    </StoryCard>
    <StoryCard>
      <p>下班後，馬克習慣到河濱公園慢跑，他用運動手環紀錄跑步里程、時間和消耗的卡路里數。</p>
    </StoryCard>
    <StoryCard>
      <h1>運動手環 可能洩漏你的行蹤和ATM密碼</h1>
      <p>非營利組織Open Effect與多倫多大學共同進行的研究發現，包含小米、Fitbit、Garmin等七款運動手環，所搭載的藍牙功能因有固定辨識標籤，只要透過這個標籤，即便在手機上的藍牙功能關閉，沒有與手機配對的情況下，第三方仍然可以追蹤這些運動手環在任何時刻的位置。</p>
      <p><br></p>
      <p>另外，根據國外媒體Tech Times報導，運動手環有可能盜取你的銀行帳戶密碼。這類具有運動追蹤功能的穿戴式裝置能夠準確地記錄用戶的手部動作，使用者在ATM提款機上輸入密碼時，記錄下運動的軌跡可能被發送到其他人手中，利用對運動軌跡的分析，就可以輕而易舉地獲得密碼。</p>
    </StoryCard>
    <StoryCard>
      <p>睡前，小陳習慣玩一下手機遊戲App，直到眼皮沉重才入眠。</p>
    </StoryCard>
    <StoryCard>
      <h1>逾250款手遊App在監聽用戶</h1>
      <p>《紐約時報》揭露，有超過250款遊戲App，都安裝美國軟體開發商Alphonso的外掛程式，該外掛透過手機麥克風辨識電視節目聲音，藉此紀錄用戶收視習慣，以投放廣告。這當中有不少遊戲可以在台灣的iOS及Android手機平台下載。以Google Play商店為例，知名3D遊戲Pool 3D等都搭載Alphonso的軟體。</p>
    </StoryCard>
    <StoryCard>
      <p>小陳玩手遊到快睡著，不用起身關燈，只要對智慧音箱說：「關燈」，燈就熄了。</p>
    </StoryCard>
    <StoryCard>
      <h1>智慧音箱 可能紀錄你的私密對話</h1>
      <p>美國曾經發生亞馬遜的智慧音箱Echo自動錄下用戶談話，並發送給通訊錄名單人員的意外。Google的智慧音箱也曾傳出會在用戶沒有喚醒的情況下不間斷地錄音，並將音檔回傳Google伺服器。相關事件引發外界對智慧音箱侵犯用戶隱私的擔憂。</p>
    </StoryCard>
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
  }
}
</script>

<style lang="scss" scoped>
  .story-board-container {
    // background-color: #000000;
    width: 100%;
    height: 100vh;
  }
</style>

