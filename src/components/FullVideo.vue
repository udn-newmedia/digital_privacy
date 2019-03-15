<template>
  <div class="full-video-container" :style="{ backgroundColor: backgroundColor }">
    <div class="video-wrapper">
      <video
        :src="certifyDevice"
        :style="{
          transform: 'translateX(' + calcTranslation + ')',
          height: calcHeight,
          width: calcWidth,
        }"
        autoplay
        muted
        loop
        playsinline
        webkit-playsinline>
      </video>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FullVideo',
  props: {
    videoSrcMob: {
      type: String,
      required: true,
    },
    videoSrcWeb: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: '#f6f6f6',
    },
    isFullHeight: {
      type: Boolean,
    }
  },
  computed: {
    certifyDevice() {
      if (window.innerWidth > 768) {
        return this.videoSrcWeb;
      } else {
        return this.videoSrcMob;
      }
    },
    calcTranslation() {
      // 如果是桌機、且高度佔滿螢幕，並且螢幕尺寸>影片尺寸
      if (window.innerWidth > 768 & this.isFullHeight && window.innerWidth < 1920) {
        return -(1920 - window.innerWidth) * 0.5 + 'px';
      } else return 0;
    },
    calcHeight() {
      if (this.isFullHeight) {
        return '100%';
      } else return '';
    },
    calcWidth() {
      if (!this.isFullHeight) {
        return '100%';
      } else return '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .full-video-container {
    width: 100%;
    overflow: hidden;
    
    .full-video-text {
      position: relative;
      width: 100%;
      padding: 5px 15px;
      font-size: 17px;
      color: #808080;
      text-align: left;
      @media screen and (min-width: 1024px) {
        width: 800px;
        margin: 0 auto;
        padding: 5px 0;
      }
    }
  }
  .video-wrapper {
    width: 100%;
  }
</style>
