<template>
  <div class="story-card-container">
    <div class="card-media-wrapper">
      <div
        v-if="imageSrc"
        class="card-image"
        :style="{backgroundImage: 'url(' + imageSrc + ')'}"
      >
        <div
          v-show="storyCardPage !== index"
          :class="{
            'card-button-wrapper': true,
            'active': storyCardPage !== index,
          }"
        >
          <div
            :class="{
              'card-button': true,
              'next-button': certifyDirction === 'next',
              'prev-button': certifyDirction === 'prev',
            }"
            @click="handlePage(certifyDirction)"
          >
            <i
              v-if="certifyDirction === 'next'"
              class="fas fa-arrow-right"
            ></i>
            <i
              v-if="certifyDirction !== 'next'"
              class="fas fa-arrow-left">
            </i>
          </div>
        </div>
      </div>
      <div
        v-if="!imageSrc"
        class="card-video-wrapper"
      >
        <slot name="video"></slot>
        <div
          v-show="storyCardPage !== index"
          :class="{
            'card-video-button-wrapper': true,
            'active': storyCardPage !== index,
          }"
        >
          <div
            :class="{
              'card-button': true,
              'next-button': certifyDirction === 'next',
              'prev-button': certifyDirction === 'prev',
            }"
            @click="handlePage(certifyDirction)"
          >
            <i
              v-if="certifyDirction === 'next'"
              class="fas fa-arrow-right"
            ></i>
            <i
              v-if="certifyDirction !== 'next'"
              class="fas fa-arrow-left">
            </i>
          </div>
        </div>
      </div>
      <div
        v-show="storyCardPage === index"
        class="card-image-description"
      >
        <slot name="description"></slot>
      </div>
    </div>
    <div
      v-show="storyCardPage === index"
      :class="{
        'card-warning-wrapper': true,
        'active': storyCardPage === index,
      }"
    >
      <slot name="title"></slot>
      <div class="card-warning-text"><slot name="text"></slot></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'StoryCard',
  props: {
    index: {
      type: Number,
      required: true,
    },
    imageSrc: {
      type: String,
    },
  },
  computed: {
    ...mapState([
      'storyCardPage',
      'cardNumber',
    ]),
    certifyDirction() {
      if (this.storyCardPage > this.index) {
        return 'prev';
      } 
      if (this.storyCardPage < this.index) {
        return 'next';
      }
    },
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
    }),
    handlePage(direct) {
      if (this.storyCardPage <= this.cardNumber - 1) {
        switch (direct) {
          case 'next':
            this.$parent.next();
            break;
          case 'prev':
            this.$parent.prev();
            break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .story-card-container {
    position: relative;
    height: 80vh;
    padding: 1%;
    cursor: pointer;

    .card-media-wrapper {
      height: 40%;
      padding-bottom: 5%;
      @media screen and (min-width: 1024px) {
        height: 70%;
      }
      .card-image {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
      .card-image-description {
        position: relative;
        width: 100%;
        padding: 5px 0;
        font-size: 17px;
        color: #808080;
        text-align: left;

      }
      .card-button-wrapper {
        width: 100%;
        height: 100%;
        transition: .333s ease-in-out;
        background-color: #000000;
      }
    }

    .card-video-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .card-video-button-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        background-color: #000000;
      }
    }

    .card-button {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      color: #ffffff;
      padding: 1.75vw;
      font-size: 18px;
      cursor: pointer;
      @media screen and (min-width: 1024px) {
        padding: 2.5vw;
        font-size: 36px;
      }
    }

    .next-button {
      justify-content: flex-start;
    }
    .prev-button {
      justify-content: flex-end;
    }
    .active {
      opacity: 0.7;
      animation-name: fadein;
      animation-duration: .333s;
      @keyframes fadein {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 0.7;
        }
      }
    }

    .card-warning-wrapper {
      // height: 40%;
      margin: 5% 0;

      .card-warning-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: bold;
        font-size: 20px;
        color: #ff3309;
        margin: 30px 0;
        text-align: left;
        .title-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          background-color:  #ff3309;
          color: #e5e5e5;
          border-radius: 50%;
          padding: 5px;
          margin-right: 10px;
          font-size: 1em;
        }

        @media screen and (min-width: 1024px) {
          font-size: 24px;
          .title-icon {
            width: 30px;
            height: 30px;
            font-size: 1em;
          }
        }
      }
      .card-warning-text {
        text-align: left;
      }
    }
  }
</style>

