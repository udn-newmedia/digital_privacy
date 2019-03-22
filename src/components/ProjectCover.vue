<template>
  <div class="cover-container">
    <div
      v-if="fixedFlag"
      class="cover-image-wrapper sup"
    ></div>
    <div
      :class="{
        'cover-image-wrapper': true,
        'cover-fixed': fixedFlag,
        'cover-blur': blurFlag,
      }"
      :style="{ 
        backgroundImage: 'url(' + certifyDevice + ')',
      }"
    >
      <slot name="title"></slot>
    </div>
    <div class="cover-text-wrapper" :style="{backgroundColor: backgroundColor}">
      <slot name="intro"></slot>
      <div class="share-wrapper">
        <div class="share-btn" @click="shareFacebook">
          <a>
            <img src="img/btn_fb.svg" alt="">
          </a>
        </div>
        <div class="share-btn" @click="shareLine">
          <a>
            <img src="img/btn_line.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: "ProjectCover",
  props: {
    coverId: {
      type: String,
      required: true,
    },
    imgSrcMob: {
      type: String,
      required: true,
    },
    imgSrcWeb: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fixedFlag: false,
      blurFlag: false,
    };
  },
  computed: {
    certifyDevice() {
      if (window.innerWidth > 768) {
        return this.imgSrcWeb;
      } else {
        return this.imgSrcMob;
      }
    },
  },
  methods: {
    shareFacebook() {
      window.FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:url': 'https://udn.com/upf/newmedia/2019_data/digital_privacy/index.html',
            'og:title': '按讚、打卡、看影音 你的數位隱私保障了嗎？',
            'og:description': '數位經濟時代，擁有最大資訊者得天下。你的隱私，是科技業者的金礦。數位人權保衛戰，正要開打。',
            'og:image': 'https://udn.com/upf/newmedia/2019_data/digital_privacy/meta.jpg',
          },
        })
      })

      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [特製fb icon] [fb share]`,
      });
    },
    shareLine() {
      if (Utils.detectMob()) {
        // 手機
        window.open(`https://line.me/R/msg/text/?"${document.querySelector('title').innerHTML}%0D%0A%0D%0A${document.querySelector('meta[property="og:description"]').content}%0D%0A%0D%0A${this.href}`);
      } else {
        window.open(`https://lineit.line.me/share/ui?url=${this.href}`);
      }

      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [特製line icon] [line share]`,
      });
    },
    handleScroll() {
      const vm = this;      
      if (
        // 如果圖片不在最上面，且視窗滑到圖片的範圍裡
        window.pageYOffset > document.getElementById(this.coverId).offsetTop &&
        window.pageYOffset <=
          document.getElementById(this.coverId).offsetTop +
            document.getElementById(this.coverId).offsetHeight
      ) {
        vm.fixedFlag = true;
        
        // 滑到圖片一半開啟blur效果
        if (window.pageYOffset > document.getElementById(this.coverId).offsetHeight * 0.2) {
          vm.blurFlag = true;
        }
      } else {
        vm.fixedFlag = false;
        vm.blurFlag = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
};
</script>

<style lang="scss" scoped>
.cover-image-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  transition: .333s ease-in-out;

  .cover-title-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    top: 10%;
    left: 10%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    .major {
      font-size: 36px;
      letter-spacing: 5px;
      color: #2b2b2b;
      font-weight: 700;
    }
    .minor {
      font-size: 22px;
      letter-spacing: 10px;
      color: #3e3e3e;
      margin: 5px;
    }

    @media screen and (min-width: 1024px) {
      top: 20%;
      left: 40%;
      .minor {
        margin: 10px;
      }
    }
  }
}

.cover-fixed {
  position: fixed;
  top: 0;
}

.cover-blur {
  filter: blur(10px);
  animation-name: blur;
  animation-duration: .666s;
  @keyframes blur {
    0% {
      filter: blur(0);
    }
    100% {
      filter: blur(10px);
    }
  }
}

.cover-text-wrapper {
  position: relative;
  z-index: 20;
  width: 100%;
  min-height: 100vh;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.87;
  padding: 100px 0;

  .cover-text {
    position: relative;
    width: 100%;
    padding: 5px 15px;
    font-size: 17px;
    color: #ffffff;
    text-align: justify;
    @media screen and (min-width: 1024px) {
      width: 800px;
      margin: 0 auto;
      padding: 5px 0;
    }
  }
}
.share-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .share-btn {
    margin: 20px;
    opacity: 0.6;
    cursor: pointer;
    transition: .333s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
}


</style>
