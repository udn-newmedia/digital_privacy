<template>
  <div :class="{
    'anchor-web-container': !certifyDevice,
    'anchor-mob-container': certifyDevice,
    'active': anchorFlag,
    }"
  >
    <div v-for="(item, index) in outlineData"
      :key="index"
      :class="{'anchor-web': !certifyDevice, 'anchor-mob': certifyDevice}"
      :ref="'anchorRef' + index"
      @click="anchorEvent(item[0])"
    >
      <span v-show="!certifyDevice">｜｜｜｜｜｜｜</span>{{item[1]}}
    </div>
  </div>  
</template>

<script>
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
      anchorPageYoffset: [],
      anchorFlag: false,
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
    }
    const vm = this;    
    window.addEventListener('scroll', () => {
      // 進入主文才要出現
      if (window.pageYOffset > document.getElementById('anchor-1').offsetTop) {
        this.anchorFlag = true;
      } else this.anchorFlag = false;

      // 監控進度
      for (const i in vm.anchorPageYoffset) {
        vm.anchorPageYoffset[i] = document.getElementById(vm.outlineData[i][0]).offsetTop;

        if (Number(i) === vm.anchorPageYoffset.length - 1) {            
          if (window.pageYOffset > vm.anchorPageYoffset[i] - window.innerHeight * 0.05) {
            vm.$refs['anchorRef' + i][0].style.color = '#000000';
          } else {
            vm.$refs['anchorRef' + i][0].style.color = '#c8c8c8';
          }
        } else {
          if (window.pageYOffset > vm.anchorPageYoffset[i] - window.innerHeight * 0.05 && window.pageYOffset <= vm.anchorPageYoffset[Number(i) + 1] - window.innerHeight * 0.05) {
            vm.$refs['anchorRef' + i][0].style.color = '#000000';
          } else {
            vm.$refs['anchorRef' + i][0].style.color = '#c8c8c8';              
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
    transition: .333s ease-in-out;

    .anchor-web {
      margin-top: 80px;
      writing-mode: vertical-rl;
      text-orientation: upright;
      letter-spacing: 10px;
      color: #c8c8c8;
      cursor: pointer;

      span {
        margin-bottom: 10px; 
        letter-spacing: 0px;
      }
      
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
