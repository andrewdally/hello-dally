import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Websites from '../views/Websites.vue'
import Website from '../views/Website.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/websites',
    name: 'Websites',
    component: Websites
  },
  {
    path: '/websites/:website',
    name: 'Website',
    component: Website
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
