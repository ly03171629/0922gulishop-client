import Vue from 'vue'
import App from '@/App'
import router from '@/router'

// @是一个别名，是个小名  代表的就是我们的src的路径

Vue.config.productionTip = false

var a = 100
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:'#app',
  render: h => h(App),
  router  //我们所有的组件内部都可以使用this.$router和this.$route
})