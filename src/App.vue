<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  // 非路由组件的注册，必须要注册
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
