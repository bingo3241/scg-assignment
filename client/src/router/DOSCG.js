import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sequence from '../views/Sequence.vue'
import Equation from '../views/Equation.vue'
import CV from '../views/CV.vue'
import Maps from '../views/Maps.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sequence',
    name: 'Sequence',
    component: Sequence
  },
  {
    path: '/equation',
    name: 'Equation',
    component: Equation
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
