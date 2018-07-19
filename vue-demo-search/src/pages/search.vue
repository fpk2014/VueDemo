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

<style scoped>
  .search {
    text-align: center;
    margin-top: 12%;
  }
</style>
