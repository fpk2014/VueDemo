<template>
  <li class="goods-list">
    <router-link to="/msg">
      <div><img :src="img"></div>
      <div>
        <p>{{ title }}</p>
        <p> {{ price }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
  export default {
    props:['price', 'title', 'img']
  }
</script>
