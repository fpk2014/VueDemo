import Vue from 'vue'
import Router from 'vue-router'
import Search from '../pages/search'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
    meta: {
      title: this.name
    }
  }
]

export default new Router({
  routes,
  base: './'
})
