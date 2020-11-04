import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Forgotpassword from '../views/Forgotpassword.vue'
import Home from '../views/Home.vue'
import Maps from '../views/Maps.vue'
import Editprofile from '../views/Editprofile.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgotpassword',
    name: 'Forgotpassword',
    component: Forgotpassword
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/editprofile',
    name: 'Editprofile',
    component: Editprofile
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
