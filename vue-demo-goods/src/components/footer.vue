<template>
  <div class="footer">
      <ul class="footer-cont">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  ul {
    text-align: center;
    line-height: 2.5em;
    vertical-align: middle;
    list-style: none;
  }
  li {
    float:left;
    margin-right: 10px;
    color: red;
  }
  li:nth-of-type(1){
    margin-left: 20px;
  }
</style>

