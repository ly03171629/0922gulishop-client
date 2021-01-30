import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import 'swiper/css/swiper.css' //引入swiper的css

import '@/mock/mockServer'  //引入mockServer，让模拟的接口生效

// import '@/api'

//第二种测试接口请求函数方式
// import {reqCategoryList} from '@/api'
// reqCategoryList()


import TypeNav from '@/components/TypeNav'
import SlideLoop from  '@/components/SlideLoop'
//全局注册的组件，如果一个非路由组件被多个组件使用，那么定义在components，注册在全局
Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)



// @是一个别名，是个小名  代表的就是我们的src的路径
Vue.config.productionTip = false






// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:'#app',
  render: h => h(App),
  router,  //我们所有的组件内部都可以使用this.$router和this.$route
  store   //注册上我们所有的组件都可以拿到this.$store
})