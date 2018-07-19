import Vue from 'vue';
import VueRouter from 'vue-router';
//import Home from '../pages/home';

Vue.use(VueRouter);

import Msg from '../pages/message.vue'

const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/goods'],resolve),
    meta: {
      title: 'Goods'
    },
  },
  {
    path: '/msg',
    component: Msg,
    meta: {
      title: 'msg'
    },
  },
]

export default new VueRouter({
  routes,
  base: './',
})
