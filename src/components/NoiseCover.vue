<template>
  <div class="noise-cover-container">
    <div
      v-if="fixedFlag"
      class="cover-image-wrapper sup"
      :style="{ 
        backgroundImage: 'url(' + certifyDevice + ')',
      }"></div>
    <div
      ref="coverImageRef"
      :class="{
        'cover-image-wrapper': true,
        'cover-fixed': fixedFlag
      }"
      :style="{ 
        backgroundImage: 'url(' + certifyDevice + ')',
      }"
    ></div>
    <div ref="coverNoiseRef" id="rlh2h_title" class="noise-wrapper product_title" :style="{backgroundColor: backgroundColor}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoiseCover",
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
    }
  },
  data() {
    return {
      fixedFlag: false,
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
    handleScroll() {
      const vm = this;
      if (
        // 如果圖片不在最上面，且視窗滑到圖片的範圍裡
        document.getElementById(this.coverId).offsetTop >= 0 &&
        window.pageYOffset > document.getElementById(this.coverId).offsetTop &&
        window.pageYOffset <=
          document.getElementById(this.coverId).offsetTop +
            document.getElementById(this.coverId).offsetHeight
      ) {
        vm.fixedFlag = true;
      } else {
        vm.fixedFlag = false;
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
  background-size: cover;
}

.cover-fixed {
  position: fixed;
  top: 0;
}

.noise-wrapper {
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.87;
  color: #e2e2e2;
}

span {
  color: white;
  font: bold 8rem Arial;
  text-transform: uppercase;
  text-align: center;
  width: 500px;
  left: 50%;
  margin-left: -250px;
  height: 155px;
  top: 50%;
  margin-top: -127px;
  position: absolute;
  animation: glitch 2s steps(100) infinite;
}

.glitch {
  color: white;
  position: relative;
  width: 90%;
  margin: 0 auto;

  @keyframes noise-anim {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      }
    }
  }
  &:after {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 2px;
    text-shadow: -10px 0px red;
    top: 0;
    color: white;
    opacity: 0.87;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
  }

  @keyframes noise-anim-2 {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      }
    }
  }
  &:before {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: -2px;
    text-shadow: 10px -3px blue;
    top: 0;
    color: white;
    opacity: 0.87;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 2s infinite linear alternate-reverse;
  }
}

.glitch-small {
  font-size: 18px;
  @media screen and (min-width: 1024px) {
    font-size: 21px;
  }
}

.glitch-large {
  font-size: 32px;
  @media screen and (min-width: 1024px) {
    font-size: 48px;
  }
}
</style>
