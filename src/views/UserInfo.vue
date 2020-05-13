<template>
  <div class="userinfo">
    <nav-bar/>
    <img src="@/assets/bannerTop_new.png" class="backImg">
    <user-detail></user-detail>
    <user-article></user-article>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import userDetail from '../components/userComponent/userDetail'
import userArticle from '../components/userComponent/userArticle'
import { mapMutations } from 'vuex'
export default {
  name: 'UserInfo',
  components: {
    NavBar,
    userDetail,
    userArticle
  },
  methods: {
    async getUserDetails () {
      const id = localStorage.getItem('id')
      const token = localStorage.getItem('token')
      const res = await this.$http.get('/user/' + id, {
        headers: { Authorization: 'Bearer ' + token }
      })
      this.setUserDetails(res.data[0])
    },
    ...mapMutations(['setUserDetails'])
  },
  created () {
    this.getUserDetails()
  }
}
</script>

<style scoped lang="less">
  .userinfo{
    .backImg{
      height: 24vw;
      width: 100%;
    }
  }
</style>
