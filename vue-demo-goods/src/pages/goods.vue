<template>
  <div class="container">
    <home-header></home-header>
    <div>
      <ul>
        <goods-list v-for="item in items"
              :title="item.title"
              :price="item.price"
              :img="item.img"><</goods-list>
      </ul>
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
