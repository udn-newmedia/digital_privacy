<template>
  <div class="noise-cover-container"></div>
</template>

<script>
export default {
  name: 'NoiseCover',
};
</script>

<style lang="scss" scoped>
  .noise-cover-container {
    background-image: url("../assets/story_board/day_cover_m.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    @media screen and (min-width: 1024px) {
      background-image: url("../assets/story_board/day_cover_web.jpg");
    }
  }
</style>

