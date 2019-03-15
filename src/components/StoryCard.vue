<template>
  <div class="story-card-container" :style="{ color: fontColor }">
    <div v-if="!cardScript.video" class="story-card-background"
      :style="{
        left: calcLeftPositon,
        backgroundImage: 'url(' + backgroundImage + ')',
        filter: backgroundBlur,
      }"
    >
      <slot name="background"></slot>
    </div>
    <div v-if="cardScript.index === 0" class="cover-text">
      <slot name="cover"></slot>
    </div>
    <div v-if="cardScript.video" class="story-card-video"
      :style="{
        left: calcLeftPositon,
        filter: backgroundBlur,
      }"
    >
      <slot name="video"></slot>
    </div>
    <div v-if="cardScript.message && scriptFlags.messageFlag  && !scriptFlags.warningFlag"
      :class="{ 'story-card-message': true, 'text-flyin': textFlyinFlag }"
    >
      <slot name="message"></slot>
    </div>
    <div v-if="cardScript.warning && scriptFlags.warningFlag"
      :class="{ 'story-card-warning': true, 'warning-fadein': warningFadinFlag }"
      :style="{left: calcLeftPositon}"
    >
      <slot name="warning"></slot>
    </div>
    <div class="story-card-cover-button">
      <slot v-if="!cardScript.button" name="button"></slot>
    </div>
    <div v-if="cardScript.button" class="story-card-button">
      <div class="control-button-wrapper">
        <div class="left-control-button-wrapper">
          <div @click="goPrevious" class="back-button">←<span v-show="!certifyDevice">返回</span></div>
        </div>
        <div class="right-control-button-wrapper">
          <div @click="goNext" class="continue-button"><span v-show="!certifyDevice">繼續</span>→</div>
          <div @click="returnMain" class="return-main-button">回主文</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'StoryCard',
  props: {
    fontColor: {
      type: String,
    },
    cardScript: {
      type: Object,
    },
    backgroundImage: {
      type: String,
    },
  },
  data() {
    return {
      scriptFlags: {
        videoFlag: false,
        warningFlag: false,
        messageFlag: true,
      },
      CoverTextTranslation: 100,
      backgroundBlur: '',
      lastCardStep: false,
    };
  },
  computed: {
    ...mapState([
      'cardNumber',
      'storyCardPage',
    ]),
    textFlyinFlag() {
      if (this.cardScript.index === this.storyCardPage) {
        return true;
      } else {
        return false;
      }
    },
    warningFadinFlag() {
      if (this.cardScript.index === this.storyCardPage) {
        return true;
      } else {
        return false;
      }
    },
    calcLeftPositon() {
      return this.cardScript.index * 100 + 'vw';
    },
    certifyDevice() {
      if (window.innerWidth > 768) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
    }),
    goNext() {
      // 順序 video, message, warning
      if (this.lastCardStep) {
        this.returnMain();
      } else {
        if (this.cardScript.message && this.scriptFlags.messageFlag === false) {
          this.scriptFlags.messageFlag = true;
        } else if (this.cardScript.warning && this.scriptFlags.warningFlag === false) {
          this.backgroundBlur = 'blur(12px)';
          this.scriptFlags.warningFlag = true;

          if (this.storyCardPage === this.cardNumber - 1) {
            this.lastCardStep = true;
          }
        } else {        
          if (this.storyCardPage < this.cardNumber - 1) {
            setTimeout(() => {
              this.backgroundBlur = '';
              this.scriptFlags.warningFlag = false;
            }, 2000);

            this.updatePage(1);
          }
        }
      }
    },
    goPrevious() {
      // if (this.scriptFlags.warningFlag === true) {
      //   this.scriptFlags.warningFlag = false;
      // } else if (this.scriptFlags.messageFlag === true) {
      //   this.updatePage(-1);
      // }
      setTimeout(() => {
        this.backgroundBlur = '';
        this.scriptFlags.warningFlag = false;
        this.lastCardStep = false;
      }, 1333);

      this.updatePage(-1);
    },
    returnMain() {
      window.scrollTo({
        top: this.$el.offsetParent.parentNode.offsetTop + this.$el.offsetParent.parentNode.offsetHeight,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .story-card-container {
    width: 100vw;
    height: 100%;
    padding: 5vw;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      align-items: center;    
    }
  }
  .story-card-background {
    position: absolute;
    z-index: 1;
    top: 0;
    height: 100%;
    width: 100vw;
    background-color: #000000;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .cover-text {
    position: relative;
    z-index: 10;
    display: inline;
    text-align: left;
    padding-top: 10%;

    .cover-title {
      font-weight: bold;
      .major {
        font-size: 36px;
      }
      .minor {
        font-size: 24px;
      }
    }

    p {
      text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    }
    @media screen and (min-width: 1024px) {
      margin-left: 40vw;
    }
  }

  .story-card-video {
    position: absolute;
    z-index: -1;
    top: 0;
    height: 100%;
    width: 100vw;
  }
  .story-card-warning {
    position: absolute;
    z-index: 30;
    top: 0;
    height: 100%;
    width: 100vw;
    padding: 25vw 5vw;
    opacity: 0.7;
    background-color: #000000;
    text-align: left;
    
    @media screen and (min-width: 1024px) {
      padding: 20vw;
    }
    .warning-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      color: #ff3309;
      margin: 0;

      .warning-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color:  #ff3309;
        color: #e5e5e5;
        border-radius: 50%;
        padding: 5px;
        margin-right: 10px;
        font-size: 1em;

        @media screen and (max-width: 768px) {
          transform: translateY(-45px);
        }
      }
    }
    p {
      color: #e5e5e5;
      margin-top: 30px;
    }
  }
  .story-card-message {
    position: relative;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 5%;
    background: #ffffff;
    background-position: center;
    text-align: left;

    @media screen and (min-width: 1024px) {
      width: 60%;
      height: 20%;
    }
  }

  .story-card-cover-button {
    position: relative;
    z-index: 40;
    margin-left: 40vw;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      position: absolute;
      bottom: 10%;
      text-align: center;
      margin-left: 0;
    }

    .cover-button-text {
      color:#a7a7a7;
    }
  }

  .story-card-button {
    position: absolute;
    z-index: 40;
    bottom: 10%;
    width: 90vw;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      position: absolute;
      bottom: 8%;
      text-align: center;
      margin-left: 0;
    }

    .control-button-wrapper {
      display: flex;
      justify-content: space-between;

      .left-control-button-wrapper, .right-control-button-wrapper {
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
      .back-button, .continue-button {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 18px;
        margin: 10px;
        border-radius: 5px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        
        @media screen and (min-width: 1024px) {
          width: 150px;
        }
      }
      .continue-button {
        border: solid 1px #ffffff;
        font-weight: 700;
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.7);
      }
      .return-main-button {
        width: 100px;
        margin: 10px;
        color: #ffffff;
        font-size: 18px;
      }
    }
  }

  .text-flyin {
    animation-name: flyin;
    animation-duration: 1.5s;
    @keyframes flyin {
      0% {
        transform: translateY(100vh);
      }
      50% {
        transform: translateY(100vh);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .warning-fadein {
    animation-name: fadein;
    animation-duration: 1.5s;
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.7;
      }
    }
  }
</style>

