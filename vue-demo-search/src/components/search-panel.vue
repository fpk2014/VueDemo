<template>
  <div>
    <!-- 自定义事件 -->
    <logo-select @getindex='getIndex'></logo-select>
    <form v-on:submit.prevent="goSearch">
      <input v-model="searchText"/>
      <button>搜索</button>
    </form>
  </div>
</template>

<script>
import LogoSelect from './logo-select'
export default {
  data: function () {
    return {
      searchText: '',
      selected: 0
    }
  },
  methods: {
    goSearch: function () {
      if (this.selected === 0) { location.href = 'https://www.so.com/s?q=' + this.searchText }
      if (this.selected === 1) { location.href = 'https://www.baidu.com/s?wd=' + this.searchText }
      if (this.selected === 2) { location.href = 'https://www.sogou.com/web?query=' + this.searchText }
    },
    getIndex: function (index) {
      this.selected = index
    }
  },
  components: {LogoSelect}
}
</script>

<style scoped>
  form {
    font-size: 0
  }
  input {
    width:30%;
    height:3em;
    vertical-align: top;
    border: 1px solid #e4e4e4;
  }
  button {
    width:8%;
    line-height:3em;
    color: white;
    border: 1px solid #3cb371;
    background-color: #3cb371;
  }
</style>
