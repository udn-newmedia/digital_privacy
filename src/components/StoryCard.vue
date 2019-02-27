<template>
  <div class="story-card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'StoryCard',
}
</script>

<style lang="scss" scoped>
  .story-card-container {
    border: solid 1px black;
    width: 100%;
    height: 100%;
  }
</style>

