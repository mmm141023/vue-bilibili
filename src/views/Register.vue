<template>
    <div>
      <login-header middleval="注册">
        <div slot="changeLogin" style="font-size: 3.73vw" @click="$router.push('/login')">
          去登录
        </div>
      </login-header>
      <input-field placeholder="请输入姓名" maxlength="16" @initParam="res => {name = res}" label="姓名" rule="^.{6,16}$" style="margin: 4vw 0;"/>
      <input-field placeholder="请输入账号" maxlength="16" @initParam="res => {username = res}" label="账号" rule="^.{6,16}$" style="margin: 4vw 0;"/>
      <input-field placeholder="请输入密码" maxlength="16" @initParam="res => {password = res}" label="密码" rule="^.{6,16}$" style="margin: 4vw 0;" type="password" />
      <login-btn btnVal="注册" @registerClick="registerHandle"></login-btn>
    </div>
</template>

<script>
import InputField from '../components/common/InputField'
import LoginHeader from '../components/common/LoginHeader'
import LoginBtn from '../components/common/LoginBtn'
import { Toast } from 'vant'
export default {
  name: 'Register',
  components: {
    LoginHeader,
    InputField,
    LoginBtn
  },
  data () {
    return {
      name: '',
      username: '',
      password: ''
    }
  },
  methods: {
    async registerHandle () {
      if (this.name && this.username && this.password) {
        const res = await this.$http.post('/register', {
          name: this.name,
          username: this.username,
          password: this.password
        })
        Toast.fail(res.data.msg)
      } else {
        Toast.fail('请输入用户名密码')
      }
    }
  }
}
</script>

<style scoped>

</style>
