// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) { document.title = to.meta.title }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
