<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span> <span>已完成{{allDone}}</span> / 全部{{todos.length}}</span>
    <button class="btn btn-danger" @click="deldone()">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['todos', 'deldone'],
  computed:{
    // 定义选中数量
    allDone:{
      get(){
        return this.todos.filter(item => item.done).length
      }
    },

    checkAll:{
      get(){
        return !this.todos.some(item => !item.done)
      },
      set(newVal){
        this.todos.forEach(item => {item.done = newVal})
      }
    }
  },
  
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  width: 575px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
