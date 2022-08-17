<template>
  <div class="wrap">
    <Child ref="child"></Child>
    <hr>
    <p>子组件传递过来的消息:{{msg}}</p>
    <button @click="divorce">解绑事件</button>
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
      this.msg += val
    },
    divorce(){
      this.$refs.child.$off('hehe')
    }
  },
  mounted(){
    // this.$refs.child.$on('hehe', val => {
    //   this.msg = val
    // })
    this.$refs.child.$on('hehe', this.fn)
  }
}
</script>

<style>
.wrap {
  padding: 20px;
  background: lightpink;
}
</style>
