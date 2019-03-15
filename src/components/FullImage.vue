<template>
  <div class="full-image-container" :style="{ backgroundColor: backgroundColor }">
    <div class="full-image-wrapper">
      <img :src="certifyDevice" alt="">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FullImage',
  props: {
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
      default: '#f6f6f6',
    },
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
}
</script>

<style lang='scss' scoped>
  .full-image-wrapper {
    position: relative;
    z-index: 150;
    img {
      width: 100%;
    }
    .full-image-text {
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
</style>
