import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      { id: 1, name: '滑雪', done: false },
      { id: 2, name: '游泳', done: true },
      { id: 3, name: '逛街', done: false },
    ]
  },
  mutations: {
    addTodo(state, item) {
      if (state.todos.some(key => key.name === item.name)) {
        console.log('请勿输入重复内容');
        return
      } else {
        state.todos.unshift(item)
      }
    },
    delTodo(state, id) {
      state.todos = state.todos.filter(item => item.id !== id)
    },
    delAllDone(state) {
      state.todos = state.todos.filter(item => item.done === false)
    },
    changeItem(state, id) {
      let pill = state.todos.find(item => item.id === id)
      pill.done = !pill.done
    },
    switchTodos(state, isDone) {
      state.todos.forEach(item => item.done = isDone)
    }
  }
})