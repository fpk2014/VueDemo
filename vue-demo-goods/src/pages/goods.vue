<template>
  <div class="container">
    <home-header></home-header>
    <div>
      <ul>
        <goods-list v-for="item in items"
              :title="item.title"
              :price="item.price"
              :img="item.img"></goods-list>
      </ul>
      <div style="clear:both;"></div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import HomeHeader from '../components/header';
  import CommonFooter from '../components/footer';
  import GoodsList from '../components/list';
  export default {
    data(){
      return {
        items: []
      }
    },
    components: {
      HomeHeader,
      CommonFooter,
      GoodsList
    },
    created(){
      this.$http.get('/api/goods').then((data) => {
        this.items = data.body.data;
      });
    }
  }
</script>

<style scoped>
  common-footer {
    position: fixed;
    bottom: 0;
  }
</style>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
