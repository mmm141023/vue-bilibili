<template>
    <div>
      <div style="margin-bottom: 2.67vw">
        <nav-bar></nav-bar>
      </div>
      <edit-banner editName="姓名" class="headImg">
        <img src="@/assets/default_img.jpg" slot="right">
      </edit-banner>
      <edit-banner editName="昵称"><span slot="right">{{userDetails.name}}</span></edit-banner>
      <edit-banner editName="用户名"><span slot="right">{{userDetails.username}}</span></edit-banner>
      <edit-banner editName="性别"></edit-banner>
      <edit-banner editName="个性签名"></edit-banner>
    </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import EditBanner from '../components/common/EditBanner'
import { mapState } from 'vuex'
export default {
  name: 'EditUserInfo',
  components: {
    NavBar,
    EditBanner
  },
  computed: {
    ...mapState(['userDetails'])
  }
}
</script>

<style scoped lang="less">
  .headImg{
    img{
      margin-top: 3px;
      width: 10.67vw;
      height: 10.67vw;
      border-radius: 50%;
    }
  }
</style>
