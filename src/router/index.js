import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Summoner from '../views/Summoner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/summoner/:name',
    name: 'Summoner',
    component: Summoner,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
