<template>
  <div>
    <login-header middleval="登录">
      <div slot="changeLogin" style="font-size: 3.73vw" @click="$router.push('/register')">
        去注册
      </div>
    </login-header>
    <input-field placeholder="请输入账号" maxlength="16" @initParam="res => {username = res}" label="账号" rule="^.{6,16}$" style="margin: 4vw 0;"/>
    <input-field placeholder="请输入密码" maxlength="16" @initParam="res => {password = res}" label="密码" rule="^.{6,16}$" style="margin: 4vw 0;" type="password" />
    <login-btn btnVal="登录" @registerClick="loginHandle"></login-btn>
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
      username: '',
      password: ''
    }
  },
  methods: {
    async loginHandle () {
      if (this.username && this.password) {
        const res = await this.$http.post('/login', {
          username: this.username,
          password: this.password
        })
        Toast.fail(res.data.msg)
        if (res.data.msg === '登录成功') {
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('token', res.data.token)
          this.$router.push('/userinfo')
        }
      } else {
        Toast.fail('请重新输入用户名密码')
      }
    }
  }
}
</script>

<style scoped>

</style>
