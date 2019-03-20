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
        <div class="share-btn" @click="shareFacebookGA">
          <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + href" target="_blank">
            <img src="img/btn_fb.svg" alt="">
          </a>
        </div>
        <div class="share-btn" @click="shareLineGA">
          <a :href="'https://social-plugins.line.me/lineit/share?url=' + href" target="_blank">
            <img src="img/btn_line.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { detectPlatform } from 'udn-newmedia-utils';

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
    shareFacebookGA() {
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [特製fb icon] [fb share]`,
      });
    },
    shareLineGA() {
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${detectPlatform()}] [${document.querySelector('title').innerHTML}] [特製line icon] [line share]`,
      });
    },
  },
  mounted() {
    const vm = this;
    window.addEventListener("scroll", () => {
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
    });
  }
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
  animation-duration: .333s;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.87;

  .cover-text {
    position: relative;
    width: 100%;
    padding: 5px 15px;
    font-size: 17px;
    color: #ffffff;
    text-align: left;
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
