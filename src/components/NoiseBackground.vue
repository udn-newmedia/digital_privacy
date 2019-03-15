<template>
  <div class="noise-cover-container"
    :style="{backgroundImage: 'url(' + noiseBackgroundImage + ')'}"
  ></div>
</template>

<script>
export default {
  name: 'NoiseCover',
  props: {
    noiseBackgroundImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .noise-cover-container {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

