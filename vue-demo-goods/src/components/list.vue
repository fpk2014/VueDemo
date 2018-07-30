<template>
  <li class="goods-list">
    <router-link to="/msg">
      <div class="goods-refer">
        <div class="goods-name">{{ title }}</div>
        <div class="goods-price"> {{ price }}</div>
        <div style="clear:both;"></div>
      </div>
      <div class="goods-img"><img :src="img"></div>
    </router-link>
  </li>
</template>

<script>
  export default {
    props:['price', 'title', 'img']
  }
</script>

<style scoped>
  li{
    list-style: none;
    display: inline-block;
    width:200px;
    overflow:hidden;
    border: 1px solid #c7b5b5;
    border-radius:10px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .goods-refer {
    width:100%;
    margin-top: 5px;
  }
  .goods-name {
    float:left;
    margin-left: 10px;
  }
  .goods-price {
    float:right;
    margin-right: 10px;
  }
  .goods-img {
    width: 100%;
    height: 300px;
  }
  .goods-img img {
    width: 100%;
    height: 100%;
  }
</style>
