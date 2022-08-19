import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  num: 0
}

const mutations = {
  addNum(state){
    state.num++
  }
}

const actions = {
  addNum(context){
    context.commit('addNum')
  },

  addAsOdd({commit,state}){
    //console.log(context); 
    //{commit,dispatch,getters,state}
    if(state.num%2 !== 0){
      commit('addNum')
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})