<template>
  <div>
    <h1>{{ $store.state.num }}</h1>
    <button @click="addNum">点击加1</button>
    <button>点击减1</button>
    <button @click="addAsOdd">奇数时加1</button>
    <button>2秒后加1</button>
    <hr>
    <h1>{{ computeNum }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions(['addNum', 'addAsOdd'])
  },
  computed: {
    ...mapGetters(['computeNum'])
  }
}
</script>

<style scoped>
</style>
