<template>
  <div class="app">
    <Header></Header>
    <Footer ref="msg"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
    name: "",
    components: { Header, Footer },
    methods:{
      
    }
}
</script>

<style scoped>
.app{
  background-color: rgb(109, 196, 116);
  padding: 20px;
}
</style>
