<template>
  <div class="todo-container">
    <TodoHeader :addTodo="addTodo"></TodoHeader>
    <TodoMain :todos="todos" :delTodo="delTodo" :switchTodo="switchTodo"></TodoMain>
    <TodoFooter :todos="todos" :deldone="deldone"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  name: "",
  data() {
    return {
      todos: [
        { id: 1, title: '吃饭', done: false },
        { id: 2, title: '睡觉', done: true },
        { id: 3, title: '打辉辉', done: true },
      ]
    }
  },
  components: { TodoHeader, TodoMain, TodoFooter },
  methods: {
    addTodo(key) {
      // 判读是否已经添加过数据
      let flag = this.todos.some(item => item.title === key.title)
      if (flag) {
        console.log('已经添加过了');
      } else {
        this.todos.unshift(key)
      }
    },

    // 定义删除的方法
    delTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id)
    },

    // 修改选中状态
    switchTodo(id) {
      let item = this.todos.find(item => item.id === id)
      item.done = !item.done
    },

    // 清除已完成任务
    deldone() {
      this.todos = this.todos.filter(item => !item.done)
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
