<template>
  <div class="clock-container">
    <div class="clock-wrapper">
      <div class="clock-border"></div>
      <div
        class="clock-hour"
        :style="{
          transform: calcHourAngle
        }"
      ></div>
      <div
        class="clock-minute"
        :style="{
          transform: calcMinuteAngle
        }"
      ></div>
    </div>
    <div class="clock-text">{{currentTime[0]}}:{{currentTime[1] === 0 ? '00' : currentTime[1]}}</div>
  </div>
</template>

<script>
export default {
  name: 'ProgressClock',
  props: {
    currentTime: {
      type: Array,
      required: true,
    },
  },
  computed: {
    calcHourAngle() {
      return 'rotate(' + ((this.currentTime[0] * 30) + (this.currentTime[1] * 0.5) - 90 + 1) + 'deg)';
    },
    calcMinuteAngle() {
      return 'rotate(' + (this.currentTime[1] * 6 - 90 + 1) + 'deg)';
    },
  },
};
</script>

<style lang="scss" scoped>
  .clock-container {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    width: 50px;
    height: 70px;
    margin: 10px;
    border-radius: 50%;

    .clock-wrapper {
      width: 100%;
      height: 50px;

      .clock-border {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        border: solid 1px #ffffff;
        min-width: 100%;
        min-height: 50px;
        border-radius: 50%;
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.7);
      }

      .clock-hour, .clock-minute {
        position: absolute;
        top: 25px;
        left: 25px;
        height: 1px;
        // border: solid 1px #ffffff;
        // border-radius: 1px;
        transform-origin: 0 0;
        background-color: #ffffff;
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.7);
        transition: .666s ease-in-out;
      }

      .clock-hour {
        width: 25%;
      }

      .clock-minute {
        width: 40%;
      }

    }

    .clock-text {
      width: 100%;
      padding: 5px 0;
      color: #ffffff;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
    }
  }
</style>
