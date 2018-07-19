// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

import router from './router/index'
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if(to.meta.title)
    document.title = to.meta.title;
  next();
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
