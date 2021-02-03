//2、引入并声明使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'

// VueRouter 是路由器对象的构造函数
// this.$router.push 调用的是路由器对象的方法，这个方法并不是路由器实例化对象的方法，而是这个对象原型的方法
// 这个实例化对象原型的方法 就是VueRouter的显式原型的方法

// this.$router是实例化对象  是VueRouter的实例化对象

//将原有的push方法地址，保存起来，后期还能拿到原来的
const originPush = VueRouter.prototype.push   
const originReplace = VueRouter.prototype.replace   
//可以大胆的去修改原型的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function(location,onResolved,onRejected){
  //location就是我们调用 this.$router.push，传递过来的对象
  // {
  //   name: "search",
  //   params: { keyword: this.keyword || undefined},
  //   query: { keyword1: this.keyword.toUpperCase() },
  // }
  if(onResolved === undefined && onRejected === undefined){
    //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
    return originPush.call(this,location).catch(() => {})
  }else{
    //证明调用的时候传递了成功或者失败的回调，或者都有
    return originPush.call(this,location,onResolved,onRejected)
  }
}


VueRouter.prototype.replace = function(location,onResolved,onRejected){
  //location就是我们调用 this.$router.push，传递过来的对象
  // {
  //   name: "search",
  //   params: { keyword: this.keyword || undefined},
  //   query: { keyword1: this.keyword.toUpperCase() },
  // }
  if(onResolved === undefined && onRejected === undefined){
    //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
    return originReplace.call(this,location).catch(() => {})
  }else{
    //证明调用的时候传递了成功或者失败的回调，或者都有
    return originReplace.call(this,location,onResolved,onRejected)
  }
}

//3、需要向外暴露一个路由器的对象
export default new VueRouter({
  routes,
  //配置滚动行为，跳转到新的路由界面滚动条的位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})