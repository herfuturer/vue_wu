<template>
  <ul class="todo-main">
    <TodoItem v-for="todo in todos" :todo="todo"></TodoItem>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: "",
  components: { TodoItem },
  props:['todos']
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
