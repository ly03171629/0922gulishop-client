//2、引入并声明使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'


//3、需要向外暴露一个路由器的对象
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]  //配置路由
})