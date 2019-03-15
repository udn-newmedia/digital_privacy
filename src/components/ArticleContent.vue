<template>
  <div class="article-content-container" :style="{ backgroundColor: backgroundColor }">
    <div class="article">
      <slot></slot>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'ArticleContent',
  props: {
    backgroundColor: {
      type: String,
      default: '#f6f6f6',
    },
  },
}
</script>

<style lang="scss" scoped>
.article-content-container {
  position: relative;
  z-index: 100;
  width: 100%;
  padding: 64px 15px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 64px 100px;
  }
  @media screen and (min-width: 1024px) {
    padding: 84px 0;
  }
}
.article {
  position: relative;
  width: 100%;
  text-align: left;
  @media screen and (min-width: 1024px) {
    width: 800px;
    margin: 0 auto;
  }
}
</style>

