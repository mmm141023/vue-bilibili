<template>
    <div>
      <login-header middleval="注册"></login-header>
      <input-field placeholder="请输入姓名" label="姓名" rule="^.{6,16}$" style="margin: 4vw 0;"/>
      <input-field placeholder="请输入账号" label="账号" rule="^.{6,16}$" style="margin: 4vw 0;"/>
      <input-field placeholder="请输入密码" label="密码" rule="^.{6,16}$" type="password" />
    </div>
</template>

<script>
import InputField from '../components/common/InputField'
import LoginHeader from '../components/common/LoginHeader'
export default {
  name: 'Register',
  components: {
    LoginHeader,
    InputField
  }
}
</script>

<style scoped>

</style>
