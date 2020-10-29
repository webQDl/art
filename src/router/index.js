import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import My from '../views/My.vue'
import PhoneLogin from '../views/PhoneLogin.vue'
import ForgetPwd from '../views/ForgetPwd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      TabbarShow: true // 需要显示 底部导航
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      TabbarShow: false // 需要显示 底部导航
    }
  },
  {
    path: '/my',
    name: 'My',
    component: My,
    meta: {
      TabbarShow: true // 需要显示 底部导航
    }
  },
  {
    path: '/phoneLogin',
    name: 'PhoneLogin',
    component: PhoneLogin,
    meta: {
      TabbarShow: false
    }
  },
  {
    path: '/forgetPwd',
    name: 'ForgetPwd',
    component: ForgetPwd,
    meta: {
      TabbarShow: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
