<template>
  <div class="head-bar-container">
    <div class="logo-container">
      <div class="logo-wrapper" @click="sendGA">
        <a href="https://udn.com/upf/newmedia/2019_data/digital_rights/index.html" target="_blank">
          <i class="udn-icon udn-icon-logo"></i>
        </a>
      </div>
    </div>
    <div v-if="!isMob" class="links-wrapper">
      <div v-for="(item, index) in outLinkList" :key="index"
        class="link-button"
      >
        <a href="item.link">{{item.name}}</a>
      </div>
    </div>
    <slot name="anchor"></slot>
    <div
      v-if="isMob"
      class="links-mob-toggle-wrapper"
      @click="burgerClick"
    >
      <div class="links-mob-toggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      v-if="isMob"
      class="links-mob-container"
      :style="{
        transform: 'translateX(' + headBarTraslation + 'vw)',
      }">
      <div v-for="(item, index) in outLinkList" :key="index"
        class="link-mob-button"
      >
        <a href="item.link">{{item.name}}</a>
        <hr>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HeadBar',
  props: {
    outLinkList: {
      type: Array,
    },
  },
  data() {
    return {
      isMob: false,
      burgerFlag: false,
      headBarTraslation: 100,
    };
  },
  methods: {
    sendGA() {

    },
    certifyDevice() {
      if (window.innerWidth > 768) {
        return false;
      } else {
        return true;
      }
    },
    burgerClick() {
      if (this.burgerFlag) {
        this.headBarTraslation = 100;
        this.burgerFlag = !this.burgerFlag;
      } else {
        this.headBarTraslation = 0;
        this.burgerFlag = !this.burgerFlag;
      }
    },
  },
  mounted() {
    const vm = this;
    this.isMob = this.certifyDevice();
    window.addEventListener('resize', function() {
      vm.isMob = vm.certifyDevice();
    });
  },
};
</script>

<style lang="scss" scoped>
  .head-bar-container {
    position: fixed;
    z-index: 9998;
    width: 100%;
    height: 50px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
  }
  .logo-container {
    height: 100%;
    width: 50px;
    .logo-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;

      i {
        color: #000000;
        transform: rotate(0deg);
        &:hover {
          transition: transform 288ms ease-in;
          transform: rotate(16deg);
        }
      }
    }
  }
  .links-wrapper {
    height: 100%;
    .link-button {
      height: 100%;
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      a {
        color: #acacac;
        transition: 288ms ease-in;
        &:hover {
          color: #464646;
        }
      }
    }
  }
  .links-mob-toggle-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;

    .links-mob-toggle {
      position: relative;
      z-index: 1;     
      -webkit-user-select: none;
      user-select: none;

      input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        cursor: pointer;
        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        -webkit-touch-callout: none;
      }

      span {
        position: relative;
        z-index: 1;
        display: block;
        width: 30px;
        height: 4px;
        margin-bottom: 5px; 
        background: #000000;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
      }

      span:first-child {
        transform-origin: 0% 0%;
      }

      span:nth-last-child(2) {
        transform-origin: 0% 50%;
      }
      input:checked ~ span {
        opacity: 1;
        margin-bottom: 0;
        margin-right: 5px;
        transform: rotate(45deg) translate(-0%, -381%);
        background: #000000;
      }
      input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(-0%, 381%);
      }
      input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      input:checked ~ ul {
        transform: none;
      }
    }
  }
  .links-mob-container {
    position: absolute;
    top: 50px;
    right: 0;
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #fff;
    padding: 5%;
    box-sizing: border-box;
    transition: transform .666s ease-in-out;

    .link-mob-button {
      font-size: 24px;
      padding: 10px;
      a {
        color: #acacac;
        transition: 288ms ease-in;
      }
    }
  }

</style>

