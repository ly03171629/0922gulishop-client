//这个是user模块的vuex模块
import {getUserTempId} from '@/utils/userabout'
//vuex当中的4个核心概念  
const state = {
  //存数据
  // getUserTempId() 这个函数就是专门用来生成用户的临时标识的
  userTempId:getUserTempId()

}

const mutations = {
  //直接修改数据
}

const actions = {
  //与组件当中用户对接
  //一般是异步发请求
  //提交mutations
}

const getters = {
  //后面用来简化数据的操作

}

export default {
  state,
  mutations,
  actions,
  getters
}