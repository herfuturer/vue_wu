<template>
  <ul class="todo-main">
    <TodoItem 
    v-for="item in todos" 
    :item="item" 
    :key="item.id"
    :delTodo="delTodo"
    :switchTodo="switchTodo"
    ></TodoItem>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: "",
  components: { TodoItem },
  props:['todos', 'delTodo', 'switchTodo']
}
</script>

<style scoped>
/*main*/
.todo-main {
  width: 575px;
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
