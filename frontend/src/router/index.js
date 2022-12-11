import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignupView from '@/views/SignupView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import BurgerView from '@/views/BurgerView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: AboutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView

  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/burger',
    name: 'burger',
    component: BurgerView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router