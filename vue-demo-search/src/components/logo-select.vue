<template>
  <div class="main-logo">
    <img :src="logoData[selected].imgSrc"  @click="toggleFlag" >
    <span class="logoList-arrow" @click="toggleFlag"></span>
    <transition name="logofade">
      <ul @mouseleave="mouseLeaveList" class="logoList" v-show="logoListFade">
        <li v-for="(item, index) in logoData" :key="index" @click="logoSelected(index)">
          <img :src="item.imgSrc">
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      logoListFade: false,
      selected: 0,
      logoData: [{
        imgSrc: require('../assets/360_logo.png')
      }, {
        imgSrc: require('../assets/baidu_logo.png')
      }, {
        imgSrc: require('../assets/sougou_logo.png')
      }]
    }
  },
  methods: {
    mouseLeaveList: function () {
      this.logoListFade = false
    },
    logoSelected: function (index) {
      this.selected = index
      this.$emit('getindex', this.selected)
      this.logoListFade = !(this.logoListFade)
    },
    toggleFlag: function () {
      this.logoListFade = !(this.logoListFade)
    }
  }
}
</script>

<style scoped>
  .main-logo {
    position: relative;
    width: 100%;
    height: 140px;
  }
  .logoList {
    position: absolute;
    padding: 0;
    top: 100%;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    z-index: 999999;
  }
  ul {
    list-style: none;
  }
  li {
    width: 100%;
    height: 80px;
    background-color: #FEFEFE;
  }
  li img {
    width: 100%;
    margin-top: 10px;
  }
  .logoList-arrow{
    position: absolute;
    border: 8px solid;
    border-color: #000 transparent transparent transparent;
    top: 66px;
    cursor: pointer;
    right: 36%;
  }
  .logofade-enter-active,
  .logofade-leave-active {
    transition: all  .5s;
  }
  .logofade-enter,
  .logofade-leave-active {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
