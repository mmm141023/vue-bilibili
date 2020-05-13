<template>
  <div>
    <van-button type="warning" size="large" @click="register">{{btnVal}}</van-button>
  </div>
</template>

<script>
export default {
  name: 'LoginBtn',
  props: ['btnVal'],
  methods: {
    register () {
      this.$emit('registerClick')
    }
  }
}
</script>

<style scoped>

</style>
