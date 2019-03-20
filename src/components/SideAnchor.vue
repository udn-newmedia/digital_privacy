<template>
  <div :class="{
    'anchor-web-container': !certifyDevice,
    'anchor-mob-container': certifyDevice,
    'active': anchorShowFlag,
    }"
  >
    <div v-for="(item, index) in outlineData"
      :key="index"
      :class="{'anchor-web': !certifyDevice, 'anchor-mob': certifyDevice}"
      :ref="'anchorRef' + index"
      @click="anchorEvent(item[0]), sendGA(item[1])"
    >
      {{item[1]}}
    </div>
  </div>  
</template>

<script>
import Vue from 'vue';
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
  computed: {
    certifyDevice() {
      if (window.innerWidth > 768) {
        return false;
      } else {
        return true;
      }
    },
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
      window.scrollTo({
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
  },
  mounted() {
    for(const i in this.outlineData) {
      this.anchorPageYoffset.push(document.getElementById(this.outlineData[i][0]).offsetTop);
      this.anchorFlag.push(false);
    }
    const vm = this;    
    window.addEventListener('scroll', () => {
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
              vm.$router.push({ path: 'self_protection' });
              vm.anchorFlag[i] = true;
              window.ga('newmedia.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/self_protection');
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
              vm.$router.push({ path: 'crisis' });
              vm.anchorFlag[i] = true;
              window.ga('newmedia.send', 'pageview', '/upf/newmedia/2019_data/digital_privacy/crisis');
            }
          } else {
            vm.$refs['anchorRef' + i][0].style.color = '#c8c8c8';
            vm.anchorFlag[i] = false;
          }
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
  .anchor-web-container {
    position: fixed;
    z-index: 9998;
    top: 50px;
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    opacity: 0;

    .anchor-web {
      margin-top: 80px;
      writing-mode: vertical-rl;
      text-orientation: upright;
      letter-spacing: 10px;
      color: #c8c8c8;
      font-size: 15px;
      cursor: pointer;
      transition: .333s ease-in-out;
      
      @media screen and (min-width: 1024px) {
        &:hover {
          transform: scale(1.2);
          font-weight: 700;
        }
      }
    }
  }

  .anchor-mob-container {
    display: flex;
    width: 100%;
    opacity: 0;
    transition: .333s ease-in-out;

    .anchor-mob {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }

  .active {
    opacity: 1;
  }
</style>
