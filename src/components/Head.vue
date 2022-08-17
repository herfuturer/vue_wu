<template>
  <div class="head">
    <h1>Search Github Users</h1>
    <input type="text" v-model="keyword">&nbsp;
    <button @click="handle">Search</button>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
      keyword: 'herfuture'
    }
  },
  methods:{
    handle(){
      this.$bus.$emit('sendKey',this.keyword)
    }
  }
}
</script>

<style scoped>
.head{
  background-color: cyan;
  margin: 20px 15px;
  padding: 20px 10px;
}
</style>
