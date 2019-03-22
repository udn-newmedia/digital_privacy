<template>
  <div :class="{
    'anchor-container': true,
    'active': anchorShowFlag,
    }"
  >
    <div v-for="(item, index) in outlineData"
      :key="index"
      class="anchor"
      :ref="'anchorRef' + index"
      @click="anchorEvent(item[0]), sendGA(item[1])"
    >
      {{item[1]}}
    </div>
  </div>  
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'SideAnchor',
  props: {
    outlineData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      anchorShowFlag: false,
      anchorPageYoffset: [],
      anchorFlag: [],
    };
  },
  methods: {
    sendGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "anchor",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [anchor click]"
      })
    },
    anchorEvent(id) {
      window.scroll({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth',
      });
    },
    activeFlag() {
      if (window.pageYOffset > 0) {
        return true;
      } else {
        return false;
      }
    },
    handleScroll() {
      const vm = this;    
      // 進入主文才要出現
      if (window.pageYOffset > document.getElementById('anchor-1').offsetTop) {
        vm.anchorShowFlag = true;
      } else vm.anchorShowFlag = false;

      // 監控進度
      for (const i in vm.anchorPageYoffset) {
        vm.anchorPageYoffset[i] = document.getElementById(vm.outlineData[i][0]).offsetTop;

        // 如果是最後一個錨點
        if (Number(i) === vm.anchorPageYoffset.length - 1) {
          // 如果pageYOffset > 錨點位置
          if (window.pageYOffset > vm.anchorPageYoffset[i] - window.innerHeight * 0.05) {
            if (!vm.anchorFlag[i]) {
              
              vm.$refs['anchorRef' + i][0].style.color = '#000000';
              // vm.$router.push({ path: 'self_protection' });
              vm.anchorFlag[i] = true;
              
              // 送出錨點GA
              window.ga('newmedia.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/#/self_protection');
              window.ga('udn.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/#/self_protection');
              window.ga('theme.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/#/self_protection');
            }
          } else {
            vm.$refs['anchorRef' + i][0].style.color = '#c8c8c8';
            vm.anchorFlag[i] = false;
          }
        // 非最後一個錨點
        } else {
          // 如果pageYOffset在錨點短落內
          if (window.pageYOffset > vm.anchorPageYoffset[i] - window.innerHeight * 0.05 && window.pageYOffset <= vm.anchorPageYoffset[Number(i) + 1] - window.innerHeight * 0.05) {
            if (!vm.anchorFlag[i]) {
              vm.$refs['anchorRef' + i][0].style.color = '#000000';
              // vm.$router.push({ path: 'crisis' });
              vm.anchorFlag[i] = true;
              
              // 送出錨點GA
              window.ga('newmedia.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/#/crisis');
              window.ga('udn.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/#/crisis');
              window.ga('theme.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/#/crisis');
            }
          } else {
            vm.$refs['anchorRef' + i][0].style.color = '#c8c8c8';
            vm.anchorFlag[i] = false;
          }
        }
      }
    },
  },
  mounted() {
    for(const i in this.outlineData) {
      this.anchorPageYoffset.push(document.getElementById(this.outlineData[i][0]).offsetTop);
      this.anchorFlag.push(false);
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
};
</script>

<style lang="scss" scoped>
  .anchor-container {
    display: flex;
    width: 100%;
    opacity: 0;
    transition: .333s ease-in-out;

    .anchor {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
    
    @media screen and (min-width: 1023px) {
      position: fixed;
      z-index: 9998;
      top: 50px;
      left: 0px;
      width: 80px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      opacity: 0;

      .anchor {
        margin-top: 80px;
        writing-mode: vertical-rl;
        text-orientation: upright;
        letter-spacing: 10px;
        color: #c8c8c8;
        font-size: 15px;
        cursor: pointer;
        transition: .666s ease-in-out;
        
        &:hover {
          transform: scale(1.2);
          font-weight: 700;
        }
      }
    }
  }

  .active {
    opacity: 1;
  }
</style>
