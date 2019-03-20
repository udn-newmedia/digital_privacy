<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar
      :outLinkList="outLinkList"
      projectHref="https://udn.com/upf/newmedia/2019_data/digital_privacy/"
    >
      <SideAnchor
        slot="anchor"
        :outlineData="[
          ['anchor-1', '危機篇'],
          ['anchor-2', '自保篇']
        ]"
      >
      </SideAnchor>
    </HeadBar>
    <ProjectCover
      id="anchor-0"
      coverId="anchor-0"
      imgSrcMob="img/cover_mob1_1.jpg"
      imgSrcWeb="img/cover_web1_1.jpg"
      backgroundColor="#011936"
      href="https://udn.com/upf/newmedia/2019_data/digital_privacy/"
    >
      <div slot="title" class="cover-title-wrapper">
        <div class="minor">按讚、打卡、看影音</div>
        <div class="major">你的數位隱私保障了嗎？</div>
      </div>

      <div slot="intro" class="cover-text">
        <p>你是否有過以下經驗？明明沒打卡，手機卻跳出Google要你為餐廳評分的訊息；在網路上買一串衛生紙，隔天立刻接到詐騙電話？小心！你在網路上的一舉一動，都在洩漏隱私。你的喜好、習慣和身分資料，在不知情的情況下，被蒐集、分析、販賣，我們卻不知道誰在跟蹤我們、自己有多少資料外洩。</p>
        <p><br></p>
        <p>而這些「免費」拿走隱私的科技業者，財富卻以驚人速度增加。</p>
        <p><br></p>
        <p><strong style="color: #6495ed;">「隱私是一種基本人權」</strong>，蘋果執行長庫克警告，我們的個資正被「武器化」，用來瞄準我們。當這些數據不斷被累積、組裝與交易，我們面對的未來不但有害、甚至會致命。</p>
      </div>
    </ProjectCover>
    <NoiseCover
      id="anchor-1"
      coverId="anchor-1"
      imgSrcMob="img/mob1_2.jpg"
      imgSrcWeb="img/web1_2.jpg"
      backgroundColor="#011936"
    >
      <div class="glitch glitch-small" data-text="危機篇">危機篇</div>
      <br>
      <div class="glitch glitch-large" data-text="免費的最貴">免費的最貴</div>
      <div class="glitch glitch-large" data-text="你的隱私是他的商品">你的隱私是他的商品</div>
    </NoiseCover>
    <ArticleContent>
      <p>跨年時你也加入臉書（Facebook）上的「#10年挑戰」熱潮嗎？</p>
      <p><br></p>
      <p>喜孜孜地貼上自己十年前後的今昔對照相片，吸引親友按讚，那是必然；但你可能不知道，當大家感嘆「青春像小鳥一樣不回來」時，你的隱私也順便飛走了──<strong>你十年來的變化，臉書正好拿來「練靶」──訓練AI人臉辨識的能力</strong>；更可以吸引醫美診所、減肥業者，利用你十年來的「變化」，退後的髮際線、皺紋、雙下巴，把你列入TA（精準行銷對象）。</p>
      <p><br></p>
      <p>你的隱私，正是科技巨頭的商品。</p>
      <p><br></p>
      <p>僅僅幾張照片、幾句留言，Google、Facebook或各種隱藏在網頁中的數位行銷程式，結合後端的運算力，用戶的照片成就了下一筆新的服務與業績。</p>
      <p><br></p>
      <p>民眾無法避免地將自己的隱私交給網路服務業者；<strong>接收這些個人隱私資料的業者轉手將資料當成商品賣給第三方。這些是我們按了讚之後，無法想像的發展。</strong></p>
      <p><br></p>
      <p>Google曾推出對台灣用戶量身打造的「精享族」，精準圈出某群高端消費者，提供廣告商及業者行銷。這些資料從哪裡來的？Google台灣區總經理陳俊廷說，Google每天提供的Gmail、YouTube、搜尋引擎、App下載等，民眾一使用服務，就提供了各類資訊。</p>
    </ArticleContent>
    <FullImage
      imgSrcMob="img/mob_10YearChallenge@2x.jpg"
      imgSrcWeb="img/web_10YearChallenge@2x.jpg"
    >
      <div class="full-image-text">臉書掀起10年挑戰的熱潮，不少名人都上傳10年前後的照片，比對2009年和2019年的自己有什麼改變。圖／取自網路</div>
    </FullImage>
    <ArticleContent :style="{ paddingBottom: '10px' }">
      <h3>數位足跡變金礦<br>網路巨頭綁架你我的隱私</h3>
      <p><br></p>
      <p>當消費者迫不及待地勾選「我同意」交換免費服務，透過AI、深度學習技術，這些數位足跡成為業者的金礦。</p>
    </ArticleContent>
    <DynamicDigit unit="億元" :amount="330">
      <div><p>2017年台灣數位廣告量330億元</p></div>
    </DynamicDigit>
    <DynamicDigit unit="億元" :amount="120">
      <div><p>Google、Facebook、LINE等社交媒體平台賺走120億元</p></div>
      <div 
        class="source"
        style="
        font-size: 17px;
        font-weight: normal;
        color: #808080;
        ">
        資料來源／2018台灣網路透明度報告
      </div>
    </DynamicDigit>
    <ArticleContent :style="{ paddingTop: '10px' }">
      <p><br></p>
      <p><br></p>
      <p>消費者以自動奉送的個人行為數據，培養出網路世界的超級巨頭，再回過頭來用運算法操作人們的生活習慣，甚至提供假訊息。</p>
      <p><br></p>
      <p>如今網路業者比用戶更了解自己內心的需求。微軟亞洲研究院副院長馬維英形容：「數據（DATA）就是新時代的石油、火藥！企業一定要拿到用戶更多、更新的數據，利用AI去開發商機。」</p>
      <p><br></p>
      <p>這些「原油和火藥」，現在掌握在少數網路科技巨頭的手中：Google、LINE、阿里巴巴、Facebook、Amazon…。我們也相信業者會好好保護個資、信任它們不會濫用。</p>
      <p><br></p>
      <p>但是，這只是消費者的一廂情願。</p>
      <p><br></p>
      <p>2018年Facebook連番爆發用戶個資外洩的醜聞後，用戶才發現，原來Facebook平台上的大量用戶資料，很容易被客戶或一個小遊戲取走，連Facebook也不知道這些資料後續的用途。</p>
      <p><br></p>
      <Quote text="“2018年Facebook連番爆發用戶個資外洩的醜聞後，世人才知Facebook平台上的用戶資料很容易被一個小遊戲取走，連Facebook也不知道這些資料後續的用途。”"></Quote>
      <p><br></p>
      <p>不少台灣學者專家警告，許多企業開發App時，任意向用戶索取授權，取得大量個資，但實際上保護這些資料的能力。駭客可以在任何一個資安保護不佳的小軟體商資料庫裡，取得一堆個人數位資料。</p>
    </ArticleContent>
    <StoryBoard>
      <div slot="article">
        <h3>智慧生活<br>讓你的隱私被看光光？ </h3>
        <p><br></p>
        <p>現代人的生活離不開3C科技產品，從最近正夯的智慧音箱、智慧手環，到買東西結帳時使用的行動支付、人臉辨識技術，但你可知道？這些科技產品和服務潛藏哪些個資外洩的風險？</p>
      </div>
    </StoryBoard>
    <ArticleContent>
      <h3>不滿意就不要用<br>使用者被迫按下「同意」賣身契</h3>
      <p><br></p>
      <p>小企業對資料保護不夠力，但大企業對用戶也是予取予求。台灣使用者大量使用Google、Facebook、Amazon、LINE的各種服務，LINE去年更新隱私權政策並公告用戶，資料將被用來行銷、賣廣告，用戶憤怒於自己的資料被企業拿來賺錢，卻喊不出「不用最大」，人人都按了同意，繼續LINE在一起。</p>
      <p><br></p>
      <p>台灣AI Labs創辦人杜奕瑾去年宣布啟動「ptt.ai」，希望落實「資料正義」。他j撰文指出，幾家網路巨頭寡占了大量的網路資料，即使使用者想拒絕交出個資，也沒有其他服務替代方案。</p>
      <p><br></p>
      <p>新興的新創公司，如果不把自己的App放在巨頭的平台「上架」，就沒有生意；即使幸運成功，往往打不過巨頭們後來居上、推出類似軟體，再砸大錢行銷或直接收購。</p>
      <p><br></p>
      <p>要求這些國際企業向用戶彎腰，幾乎是不可能的事情，它們的態度就是「不滿意可以不要用」；這是全球用戶共同的困境。</p>
    </ArticleContent>
    <FullVideo videoSrcMob="video/OK_mob.mp4" videoSrcWeb="video/OK_web.mp4">
      <div class="full-video-text">天下沒有免費的服務，當你按下「我同意」的那一刻，你已經出賣了你的隱私權。</div>
    </FullVideo>
    <ArticleContent>
      <p><br></p>
      <h3>臉書不當收集用戶個資<br>蘋果出手制裁</h3>
      <p><br></p>
      <p>能夠阻止科技巨頭橫掃市場者，可能只能是同樣巨大的同業或法規。<strong>2019年初蘋果公司出手，取消Facebook內部開發iOS應用程式的資格，控訴Facebook利用蘋果的內部應用程式收集青少年用戶的數據並且監控。</strong></p>
      <p><br></p>
      <p>此舉逼使Facebook承諾停用應用程式，否則舊版軟體可能無法在iPhone上繼續使用，蘋果之怒比國會更能叫臉書低頭。</p>
      <p><br></p>
      <p><strong>2018年5月底正式生效的歐盟<Dictionary description="歐盟「一般資料保護法規」（GDPR）涵蓋所有持有歐盟公民資料的公司，不僅限於總部設在歐盟的企業。GDPR保護歐盟認定的「個人」資料，凡是敏感性、可與個人連結的資料均受保障，例如信用卡號、旅遊紀錄、網路搜尋紀錄、穿戴式裝置紀錄的生物識別資料、IP和個人電腦位址。
      GDPR保障消費者擁有「拒絕權」、「更正權」、「資料可攜權」與「被遺忘權」。其中，最重要的「被遺忘權」賦予資料當事人在特定條件下，有權利要求查看某公司持有與自己有關的所有資訊，並要求修改或刪除。">《一般資料保護規則》（GDPR）</Dictionary>
        ，要求企業需要明確、全面解釋會收集哪些數據、如何使用、並揭露共享的第三方。</strong>企業更要明確獲得用戶同意才能保存和處理用戶的數據，成為第一個以區域的法規力量，抵抗來自科技巨人席捲全球服務對個人數位隱私的侵犯。</p>
      <p><br></p>
      <p><strong>2019年1月，Google就被法國開罰5000萬歐元。</strong>但這些改善能適用於台灣嗎？Google已宣布，在法國被罰是個案，台灣地區並不適用。</p>
    </ArticleContent>
    <FullImage
      imgSrcMob="img/mob1_1.jpg"
      imgSrcWeb="img/web1_1.jpg"
    >
      <div class="full-image-text">臉書利用蘋果的內部應用程式收集用戶資料，引來蘋果大動作制裁──撤銷臉書的App開發商資格。</div>
    </FullImage>
    <ArticleContent>
      <h3>台灣政府怕外資撤離<br>不敢保障數位人權</h3>
      <p><br></p>
      <p>作為服務輸入國的台灣，對科技帝國主義的數位侵略，難道只能束手，自己把資料奉上，成為帝國版圖的一小角？</p>
      <p><br></p>
      <Quote text="“不要怕Facebook撤離台灣，我們要求馬克‧祖克伯也來台灣作證，要把態度和高度拿出來！”" refer="—— 國民黨立法委員許毓仁" img="./img/p01.png"></Quote>
      <p><br></p>
      <p>許毓仁向政府喊話，立法院應該成立跨黨派的「資訊國安諮詢委員會」，比照美國採聽證會模式，要求國內外、大小業者到國會報告，蒐集的消費者巨量資料到底是如何使用。</p>
      <p><br></p>
      <p>「政府有必要在法規上表態、跟進歐盟」，許毓仁說，<strong>政府在保護人民數位資料的努力，「其實是一張白紙」</strong>；台灣應該要響應歐盟保護數位人權精神，「不需要擔心美國的臉色，而是要站在民眾這一邊」。</p>
      <p><br></p>
      <Quote text="“外商企業取得大量台灣民眾的資料，應該要檢視這些美國企業對「非美國」用戶的保護程度，如果保護程度夠，就要要求外商比照辦理；如果保護不足，台灣應訂有法規保護民眾數位隱私，並要求外商配合。”" refer="—— 前行政院長張善政" img="./img/p02.png"></Quote>
      <p><br></p>
      <p>國發會主委陳美伶指出，現在許多企業利用免費服務取得大數據，但當它變成一種商業模式，就要考慮規範和管理，企業可能要給予消費者對等的對價，對公共利益要更加保障。</p>
    </ArticleContent>
    <NoiseCover
      id="anchor-2"
      coverId="anchor-2"
      imgSrcMob="img/mob1_5.jpg"
      imgSrcWeb="img/web1_5.jpg"
      backgroundColor="#ff3d57"
    >
      <div class="glitch glitch-small" data-text="自保篇">自保篇</div>
      <br>
      <div class="glitch glitch-large" data-text="自己的資料自己管">自己的資料自己管</div>
      <div class="glitch glitch-large" data-text="拿回你的數位隱私權">拿回你的數位隱私權</div>
    </NoiseCover>
    <ArticleContent>
      <p>「請問要加入會員嗎？掃這個QR code，加入我們的App成為會員，可以享有會員福利。」</p>
      <p><br></p>
      <p>這是現今消費者最常聽到的銷售台詞。不論賣的是什麼，店員都會來上一句，用會員制的蠅頭小利「圈粉」。在「積點折現金」、「生日禮」利誘下，消費者必須交出的都是重要個資。</p>
      <p><br></p>
      <h3>加會員抽獎、折現金<br>「多想三秒鐘，可以不加入」</h3>
      <p><br></p>
      <p>上班族林柏青說，他曾在快時尚櫃台當場拿出手機加入會員，「因為可以抽機票。」但機票抽獎中獎率很低，「多想三秒鐘，可以不加入。」</p>
      <p><br></p>
      <p>在出版業工作的陳姓太太說，下班去書店，會員問她要不要加入會員，可以打九折。文青店員熱心地指導她如何下載App，她填入手機號碼、職業、收入等級，但卡在生日年份這關，系統不讓她空白。她說：「我立馬放棄打折。」因為她不想讓店員知道眼前這位大嬸幾歲。</p>
      <p><br></p>
      <p>政大法律系副教授劉宏恩說，他原本也對加入會員、下載App沒有警覺性，但當他發現有些App要求的授權也太離譜，<strong>「免費字典的App竟然要你的GPS、麥克風」。</strong></p>
      <p><br></p>
      <p>前行政院長、新時代金融基金會董事長陳冲最常舉他的親身經歷：</p>
      <p><br></p>
      <Quote text="“下載一個手電筒App，但App要求存取的標的包括相機、相片、多媒體檔案、WiFi連線資訊、裝置ID及通話資訊，我不明白手電筒跟通話資訊有什麼關係？”"></Quote>
      <FullImage
        imgSrcMob="img/mob1_02.jpg"
        imgSrcWeb="img/web1_02.jpg"
      >
        <div class="full-image-text">有些手電筒App要求存取過多軟體用不到的權限，可能造成用戶隱私外洩。</div>
      </FullImage>
      <p><br></p>
      <p><br></p>
      <h3>個資有價<br>一不小心，你就把自己賣掉</h3>
      <p><br></p>
      <p>一名上班族說，他對這種加入App會員的招術，一向敬謝不敏，但是，有次例外，在某大百貨公司配眼鏡，立等可取的那種連鎖店，那時加入會員，下載App，「2000多元的眼鏡現折800元！」</p>
      <p><br></p>
      <p>5元折價不夠看，但800元，貢獻個資就可以考慮。</p>
      <p><br></p>
      <p>丹麥大學曾進行<a href="https://www.youtube.com/watch?v=lzqTbS3k-ws&feature=youtu.be" target="_blank" @click="sendGA('社會實驗')">社會實驗</a>，要路人下載一款免費的手電筒App，好幫忙測試。手電筒App會取用使用者的照片、攝影機、麥克風以及GPS定位。就如同遠在台灣的我們，使用者根本不去注意App的取用權限。</p>
      <p><br></p>
      <p>直到數天後，實驗者根據GPS定位就能找到使用者的家，敲門那刻，社會實驗證明「送出個人隱私的，就是你自己」。研究人員解釋，透過這個手電筒App，可以瀏覽用戶和朋友所有對話。使用者的反應包括：</p>
      <p><br></p>
      <p><strong>「我不認識你，你卻入侵我的世界，這很恐怖。」</strong></p>
      <p><br></p>
      <p><strong>「我非常生氣──氣我自己竟然這麼容易就同意了！」</strong></p>
      <p><br></p>
      <p>這正是大部分台灣民眾的生活日常。吃飯要打卡，拍照就要tag別人，把個人及他人的行蹤與資訊，自動送給科技巨頭，科技再把你的資料當成商品賣給第三方。</p>
      <p><br></p>
      <p><br></p>
      <h3>3大原因<br>使用者輕忽個資外洩風險</h3>
      <p><br></p>
      <p>「我又不是什麼咖，企業拿到我的個資，也不會怎麼樣。」台灣駭客協會常務理事翁浩正說，最常聽到這樣的說詞，「大家隨意提供個資換取免費服務，完全不在意」。他說：「<strong>「會覺得自己不是個咖，是因為不懂這些隱私與權限可以做多少事。」</strong></p>
      <p><br></p>
      <p>台灣人權協會專案經理何明諠說，消費者不花時間是把業者的約定條款看完，急著按下同意，是有原因的：</p>
      <p><br></p>
      <p><strong>1. 服務不可取代，LINE同事都在用，你不用就無法工作<br>2. 業者不同意，你就無法用服務<br>3. 使用條款法律文字落落長，很難看得完，看了也不見得看得懂</strong></p>
      <p><br></p>
      <p>另一個民眾毫無戒心的原因是，<strong>「個資外洩的傷害，不會痛，也看不見，外洩了也不會有馬上感覺」</strong>，讓民眾無感，掉以輕心。</p>
    </ArticleContent>
    <FullImage
      imgSrcMob="img/mob1_7.jpg"
      imgSrcWeb="img/web1_7.jpg"
    >
      <div class="full-image-text">許多使用者覺得自己在網路上的資料沒有價值，進而忽略掉顯而易見的個資外洩風險。</div>
    </FullImage>
    <ArticleContent>
      <h3>如何保護個資？<br>你可以做這5件事</h3>
      <p><br></p>
      <p>其實，使用者可以採取一些措施，減少自己的數位隱私被企業收集。</p>
      <p><br></p>
      <p><strong>1.不直接以臉書或Google帳號登入App或網站服務</strong></p>
      <p>資誠智能風險管理諮詢公司執行董事張晉瑞建議，最好盡量避免用同一個Google或臉書帳號登入多種服務或App，因為最後這些帳號會連動到Google或臉書等社交帳戶，或是存有個人通訊錄、行事曆的Google帳戶，讓其他業者取用相關資料。</p>
      <p><br></p>
      <p><strong>2.不玩臉書上的任何心理測驗或小遊戲</strong></p>
      <p>台灣駭客協會常務理事翁浩正說，遇到很想用的服務，卻要奉上自己的個資時，他會先審視「哪些資料被取得」，評估資料可能被外洩的狀況。<strong>「如果服務提供的價值，大於個人資料的外洩價值，使用者就會想要交出自己個資」</strong>。但他自己不會玩臉書上的心理測驗或遊戲。</p>
      <p><br></p>
      <p><strong>3.使用兩階段驗證</strong></p>
      <p>盡量不嫌麻煩的使用兩階段驗證方式。張晉瑞說，一些金融業者現在手機銀行轉帳時，會要求輸入動態密碼或是轉到另一個驗證App去做二度認證，很多用戶覺得麻煩，但其實有助保障交易密碼不外流。</p>
      <p><br></p>
      <p><strong>4.手機也要裝防毒軟體</strong></p>
      <p>國內的趨勢科技和警政署合作，推出手機版的防毒軟體「安全達人」，包含防病毒、防止詐騙、釣魚網站過濾、以及詐騙簡訊來電過濾等項目。趨勢科技表示，<strong>台灣用戶有一種迷思，覺得電腦會中毒、「但手機不會」</strong>，但只要連上數位世界，資安威脅就永遠存在，建議消費者幫手機上道鎖。</p>
      <p><br></p>
      <p><strong>5.不看盜版影音網站</strong></p>
      <p>台灣盜版影音猖獗，不少網站被抄了幾次都能捲土重來，就是因為觀看流量大，帶來的廣告商機驚人。<strong>串流影音業者承認，免費影音網站都會在你的觀看設備如手機、電腦中，埋入追蹤網路行為的cookie</strong>，即使你換到別的網站，廣告也是如影隨形。有些網站更可能帶有病毒，盜取使用者個資。</p>
    </ArticleContent>
    <ArticleContent backgroundColor="#ffffff">
      <p><strong>聯合報系願景工程3/25起一連三天推出「隱私網戰」專題報導<a href="" target="_blank" @click="sendGA('「透明人生─隱私危機」')"></a>，</strong>由民眾對數位足跡的不在意、企業蒐集窺探你的生活，以及政府作為最大的人民個資擁有者，如何在發展大數據時兼顧個資等角度，探討台灣面臨的數位人權難題。</p>
      <p><br></p>
      <p><br></p>
      <Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2019_data/digital_privacy/"></Share>
      <Logo use-vision="yes"></Logo>
      <p><br></p>
      <Editor>
        <div>採訪團隊：梁玉芳、彭慧明、蕭白雪、黃晶琳、馬瑞璿、林彥呈、邱瓊玉、蔡孟妤</div>
        <div>製作人：蔡佩蓉</div>
        <div>影像：林澔一</div>
        <div>視覺設計：張心慈、蘇士堯、黃微庭</div>
        <div>網頁製作：胡凈悟、楊若榆</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.03.25</div>
      </Editor>
      <p><br></p>
      <Relate
        href1="https://udn.com/news/story/6811/3440980"
        img1="./img/webre_01.jpg"
        text1="支持美實施嚴格隱私權法 庫克：個資正被「武器化」"
        href2="https://udn.com/news/story/6809/3671897"
        img2="./img/webre_02.jpg"
        text2="抖音蒐集兒童個資 遭美重罰570萬美元"
        href3="https://udn.com/news/story/11017/3671555"
        img3="./img/webre_03.jpg"
        text3="用臉書帳號登入App 恐曝3大風險"
        href4="https://udn.com/news/story/7088/3233277"
        img4="./img/webre_04.jpg"
        text4="Gmail被踢爆開後門 百萬用戶信件看光光"
      >
      </Relate>
      <p><br></p>
      <FBComment href="https://udn.com/upf/newmedia/2019_data/digital_privacy/"></FBComment>
    </ArticleContent>
    <Footer></Footer>
  </div>
</template>

<script>
import ArticleContent from '@/components/ArticleContent.vue'
import Dictionary from '@/components/Dictionary.vue'
import DynamicDigit from '@/components/DynamicDigit.vue'
import Editor from '@/components/Editor.vue'
import FBComment from '@/components/FBComment.vue'
import FullImage from '@/components/FullImage.vue'
import Footer from '@/components/Footer.vue'
import FullVideo from '@/components/FullVideo.vue'
import HeadBar from './components/HeadBar.vue'
import Indicator from './components/Indicator.vue'
import Logo from './components/Logo.vue'
import NoiseCover from './components/NoiseCover.vue'
import ProjectCover from './components/ProjectCover.vue'
import Question from './components/Question.vue'
import Quote from './components/Quote.vue'
import Relate from '@/components/Relate.vue'
import Share from '@/components/Share.vue'
import SideAnchor from '@/components/SideAnchor.vue'
import StoryBoard from '@/components/StoryBoard.vue'

import Utils from 'udn-newmedia-utils'

export default {
  name: 'app',
  components: {
    ArticleContent,
    Dictionary,
    DynamicDigit,
    Editor,
    FBComment,
    FullImage,
    FullVideo,
    Footer,
    HeadBar,
    Indicator,
    Logo,
    NoiseCover,
    ProjectCover,
    Question,
    Quote,
    Relate,
    Share,
    SideAnchor,
    StoryBoard,
  },
  data() {
    return {
      outLinkList: [
        {
          name: '數位隱私變商品',
          link: 'https://udn.com/upf/newmedia/2019_data/digital_privacy/',
        },
        {
          name: '政府正在監控你',
          link: 'https://udn.com/upf/newmedia/2019_data/digital_privacy/government',
        },
        {
          name: '測驗透明人指數',
          link: 'https://udn.com/upf/newmedia/2019_data/digital_privacy/quiz',
        },
      ],
    };
  },
  methods: {
    sendGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "aTag",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [aTag click]"
      })
    },
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  text-align: center;
}
h3 {
  font-weight: 800;
  line-height: 1.5;
}
</style>
