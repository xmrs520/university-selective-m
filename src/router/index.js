import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/selection',
        name: 'selection',
        component: () => import('@/views/selection/')
      },
      {
        path: '/management',
        name: 'management',
        component: () => import('@/views/management/')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 路由导航守卫 说白了所有页面的导航都会经过这里

router.beforeEach((to, from, next) => {
  // const user = JSON.parse(window.sessionStorage.getItem('user'))
  const user = store.state.user
  if (to.path !== '/login') {
    if (user) {
      // 已登录,允许通过
      next()
    } else {
      next('/login')
    }
  } else {
    // 登录页面,正常允许通过
    next()
  }
})

export default router
