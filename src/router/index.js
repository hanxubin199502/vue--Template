import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/mytext/index/index'  //  首页 
import login from '@/components/mytext/login/login'  //  登录
Vue.use(Router) 


export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: '/index',
      component: index
    },
    {
      path: '/login',
      name: '/login',
      component: login
    },
  ]
})
