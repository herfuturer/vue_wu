<template>
  <div>
    <h1>{{$store.state.num}}</h1>
    <button @click="addNum">点击加1</button>
    <button>点击减1</button>
    <button @click="addAsOdd">奇数时加1</button>
    <button>2秒后加1</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    addNum(){
      this.$store.dispatch('addNum')
    },

    addAsOdd(){
      this.$store.dispatch('addAsOdd')
    }
  }
}
</script>

<style scoped>

</style>
