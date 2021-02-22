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
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'
import store from '@/store'

export default [
  {
    path:'/center',
    component:Center,
    children:[
      {
        path:'myorder',
        component:MyOrder
      },
      {
        path:'grouporder',
        component:GroupOrder
      },
      {
        path:'',
        redirect: 'myorder'
      }
    ]
  },
  {
    path:'/trade',
    component:Trade,
    beforeEnter: (to, from, next) => {
      //只有从购物车界面才能跳转到交易页面
      if(from.path === '/shopcart'){
        next()
      }else{
        alert('只有从购物车界面才能跳转到交易页面')
        next(false)
      }
    }
  },
  {
    path:'/pay',
    component:Pay,
    beforeEnter: (to, from, next) => {
      //只有从购物车界面才能跳转到交易页面
      if(from.path === '/trade'){
        next()
      }else{
        alert('只有从交易页面（创建订单）页面才能跳转到支付页面')
        next(false)
      }
    }
  },
  {
    path:'/paysuccess',
    component:PaySuccess,
    beforeEnter: (to, from, next) => {
      //只有从购物车界面才能跳转到交易页面
      if(from.path === '/pay'){
        next()
      }else{
        alert('只有从支付页面才能跳转到支付成功页面')
        next(false)
      }
    }
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess,
    //路由独享守卫
    beforeEnter: (to, from, next) => {
    //只有携带了skuNum和sessionStorage内部有skuInfo数据  才能看到添加购物车成功的界面
      let skuNum = to.query.skuNum
      let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
      if(skuNum && skuInfo){
        next()
      }else{
        alert('必须要携带skuNum参数，也必须得存储skuInfo')
        // next('/')
        next(false) //这个是什么都不做
      }
    }
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
    },
    
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