<template>
  <div class="story-card-container" :style="{ color: fontColor }">
    <div class="story-card-background">
      <slot name="background"></slot>
    </div>
    <div class="cover-text">
      <slot name="cover"></slot>
    </div>
    <div class="story-card-video">
      <slot name="video"></slot>
    </div>
    <div v-if="cardScript.warning && cardScript.warningFlag" class="story-card-warning">
      <slot name="warning"></slot>
    </div>
    <div  v-if="cardScript.message && cardScript.messageFlag" class="story-card-message">
      <slot name="message"></slot>
    </div>
    <div class="story-card-button">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    fontColor: {
      type: String,
    },
    cardScript: {
      type: Object,
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  .story-card-container {
    border: solid 1px black;
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
    top: 0;
    left: 0;
    z-index: -1;
  }
  .cover-text {
    display: inline;
    text-align: left;
    padding-top: 10%;

    @media screen and (min-width: 1024px) {
      margin-left: 40vw;
    }
  }
  .story-card-warning {

  }
  .story-card-message {

  }
  .story-card-button {
    margin-left: 40vw;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      position: absolute;
      bottom: 10%;
      text-align: center;
      margin-left: 0;
    }
  }
</style>

