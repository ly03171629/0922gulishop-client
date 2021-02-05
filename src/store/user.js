//这个是user模块的vuex模块
import {getUserTempId} from '@/utils/userabout'
import {reqGetCode, reqUserRegister} from '@/api'
//vuex当中的4个核心概念  
const state = {
  //存数据
  // getUserTempId() 这个函数就是专门用来生成用户的临时标识的
  userTempId:getUserTempId(),
  code:'' //用户注册的验证码信息
}

const mutations = {
  //直接修改数据
  RECEIVE_CODE(state,code){
    state.code = code
  }
}

const actions = {
  //与组件当中用户对接
  //一般是异步发请求
  //提交mutations
  async userRegister({commit},userInfo){
    const result = await reqUserRegister(userInfo)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },

  //请求获取code
  async getCode({commit},phone){
    const result = await reqGetCode(phone)
    if(result.code === 200){
      commit('RECEIVE_CODE',result.data)
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  }

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