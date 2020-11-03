import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import My from '../views/My.vue'
import PhoneLogin from '../views/PhoneLogin.vue'
import ForgetPwd from '../views/ForgetPwd.vue'
import News from '../views/News.vue'
import Community from '../views/Community.vue'
import CommunityCommunication from '../views/CommunityCommunication.vue'

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
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      TabbarShow: true
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      TabbarShow: true
    }
  },
  {
    path: '/communityCommunication',
    name: 'CommunityCommunication',
    component: CommunityCommunication,
    meta: {
      TabbarShow: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
