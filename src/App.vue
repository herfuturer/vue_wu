<template>
  <div class="wrap">
    <Child @hehe="fn"></Child>
    <hr>
    <p>子组件传递过来的消息:{{msg}}</p>
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: 'App',
  components: { Child },
  data() {
    return {
      msg:''
    }
  },
  methods:{
    fn(val){
      this.msg = val
    }
  }
}
</script>

<style>
.wrap {
  padding: 20px;
  background: lightpink;
}
</style>
