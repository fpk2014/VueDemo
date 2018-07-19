<template>
  <div class="search">
    <search-panel></search-panel>
  </div>
</template>

<script>
import SearchPanel from '../components/search-panel'
export default {
  components: {SearchPanel}
}
</script>

<style>
  body{
    background: url('../assets/background.png');
  }
  .search {
    text-align: center;
    margin-top: 12%;
  }
</style>
