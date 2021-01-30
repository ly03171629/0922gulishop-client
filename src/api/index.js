//这个文件写的都是函数，我们叫接口请求函数
//以后，我们的每个接口都对应了一个函数，如果想要拿相关接口的数据，只需要调用相关的接口请求函数
//axios使用   函数用法  对象用法
// 三种参数   params参数  query参数  请求体参数
// params参数 是在url当中携带的,属于路径一部分
// query参数，可以在url当中携带 ？分割，后面就是query参数
              // 也可以在配置对象当中配置，配置的属性名叫params
// 请求体参数，在配置对象当中data里面配置，请求方式是put和post才有请求体参数

// axios({
//   url:'localhost:8080/userinfo/1?name=zhaoliying',
//   method:,
//   params:{
//     //代表的是query参数
//     name:'zhaoliying'
//   },
//   data:{
//     //配的是请求体参数
//   }
// })

import request from './ajax'
import mockAjax from '@/api/mockAjax'
//请求三级分类列表数据
///api/product/getBaseCategoryList
//get
//无参
export const reqCategoryList = () => {
  return request({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}



//验证请求是否成功
// reqCategoryList()    //这里如果要调用，得把模块引入到main当中


//请求获取模拟接口的数据banner和floor

export const reqBannerList = () => {
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}


export const reqFloorList = () => {
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}
