<template>
  <div class="dynamic-digit-container" :style="{ backgroundColor: backgroundColor }">
    <div class="dynamic-digit-wrapper" :style="{ color: color }">
      <span class="dynamic-digit">
        {{count}}
        <span class="digit-unit">{{unit}}</span>
      </span>
    </div>
    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicDigit',
  props: {
    unit: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "#4356ff",
    },
    backgroundColor: {
      type: String,
      default: '#f6f6f6',
    },
  },
  data() {
    return {
      count: 0,
      startFlag: false,
    };
  },
  methods: {
    digitIncrement() {
      setInterval(() => {
        if (this.count === this.amount) {
          clearInterval();
        } else {
          this.count++;
        }
      }, 0.003);
    },
    handleScroll() {
      const vm = this;
      // 滑到才開始跑數字
      if ( window.pageYOffset >= vm.$el.offsetTop - window.innerHeight && window.pageYOffset <= vm.$el.offsetTop) {
        
        if (!vm.startFlag) {
          vm.digitIncrement();
          vm.startFlag = true;
        }
      } else {
        vm.count = 0;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
};
</script>

<style lang="scss" scoped>
  .dynamic-digit-container {
    position: relative;
    width: 100%;
    text-align: left;
    padding: 20px 15px;
    margin: 0 auto;
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 20px 100px;
    }
    @media screen and (min-width: 1024px) {
      padding: 20px 0;
    }
  }

  .dynamic-digit-wrapper, .description {
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 800px;
      margin: 0 auto;
    }
  }
  .dynamic-digit-wrapper {
      display: flex;
    .dynamic-digit {      
      display:inline-block;
      height: 60px;
      font-size: 48px;
      font-weight: bold;
      @media screen and (min-width: 1024px) {
        height: 80px;
        font-size: 64px;
      }
    }
    .digit-unit {
      font-size: 18px;
    }
  }

  .description {
    color: #8489b1;
    p {
      margin: 0;
    }
  }
  .source {
    margin: 20px 0;
  }
</style>
