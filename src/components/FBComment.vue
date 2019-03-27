<template>
  <div class="fb-comment-block">
    <div class="fb-comments" :data-href="href" data-numposts="5" data-width="100%" data-order-by="reverse_time"></div>
  </div>
</template>

<script>
export default {
  name: 'FbComment',
  props: {
    href: {
      type: String
    },
  },
}
</script>

<style scoped>
.fb-comment-block{
  position: relative;
  z-index: 50;
}
</style>
