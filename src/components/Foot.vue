<template>
  <div class="foot">
    <p v-if="normal">请输入用户名进行搜索</p>
    <p v-else-if="wait">请等待搜索结果</p>
    <div v-else class="item" v-for="item in person">
      <a :href="item.userUrl" >
        <img :src="item.userImg" alt="">
      </a>
      <p>{{item.userName}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data() {
    return {
      normal: true,
      wait: false,
      person: []
    }
  },
  mounted() {
    this.$bus.$on('sendKey', val => {
      this.normal = false
      this.wait = true
      axios({
        url: 'https://api.github.com/search/users',
        params: {
          q: val
        }
      })
        .then(res => {
          this.wait = false
          this.person = res.data.items.map(item => {
            return {
              id: item.id,
              userName: item.login,
              userImg: item.avatar_url,
              userUrl: item.url,
            }
          })
          console.log(this.person);
        })
        .catch(err => console.log(err.message))
    })
  }
}
</script>

<style scoped>
.foot {
  margin: 0 30px;
}
.item {
  width: 100px;
  float: left;
  margin: 10px 20px;
}
.item img {
  width: 100%;
}
</style>
