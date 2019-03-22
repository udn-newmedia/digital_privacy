<template>
  <span class="dictionary-container" @click="descriptionFlag = !descriptionFlag, sendGA('《一般資料保護規則》（GDPR）')">
    <span class="title">
      <slot></slot>
      <i class="fas fa-info-circle"></i>
    </span>
    <div
      v-show="descriptionFlag"
      :class="{
        'description-wrapper': true,
        'description-show': descriptionFlag,
      }"
    >
      {{description}}
    </div>
  </span>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'Dictionary',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      descriptionFlag: false,
    };
  },
  methods: {
    sendGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "dictionary",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [aTag click]"
      })
    },
  },
};
</script>

<style lang="scss" scoped>
  .dictionary-container {
    color: #d53636;
    cursor: pointer;
    .description-wrapper {
      border: solid 1px #d53636;
      padding: 45px;
      margin: 25px 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.9;
      opacity: 0;
      text-decoration: none;
      transition: .666s ease-in-out;
    }
    .description-show {
      opacity: 1;
    }
  }
</style>
