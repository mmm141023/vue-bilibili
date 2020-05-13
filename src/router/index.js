import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Register from '../views/Register'
import { Toast } from 'vant'
import UserInfo from '../views/UserInfo'
import EditUserInfo from '../views/EditUserInfo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/login'
  },
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
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfo,
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    name: 'EditUserInfo',
    component: EditUserInfo,
    meta: {
      istoken: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.istoken === true) {
    router.push('/login')
    Toast.fail('请重新登录')
    return
  }
  next()
})
export default router
