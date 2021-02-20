import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

export default [
  {
    path:'/trade',
    component:Trade
  },
  {
    path:'/pay',
    component:Pay
  },
  {
    path:'/paysuccess',
    component:PaySuccess
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess
  },
  {
    path:'/detail/:goodsId',
    component:Detail
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/search/:keyword?', //?代表我的params参数可传可不传
    component:Search,
    name:'search', //命名路由
    // params:{
    //   keyword:'abc',
    // },
    // query:{
    //   keyword1:'ABC'
    // }
    // props: //这个props是我们在路由组建当中操作params参数和query参数的简化方法
    // props:true, //会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
    // props:{username:'zhaoliying'}  //传递一个对象，传递的是额外你需要的静态数据,不需要就不用
    props:(route) => {
      return {keyword:route.params.keyword,keyword1:route.query.keyword1}
    }
  },
  {
    path:'/login',
    component:Login,
    // 路由对象当中的元配置项，可以配置我们所需要的任何数据
    meta:{
      isHidden:true
    }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHidden:true
    }
  },
  {
    path:'/',
    redirect:'/home'
  }
]  //配置路由