<template>
    <div class="header">
      <div></div>
      <div>{{middleval}}</div>
      <div></div>
    </div>
</template>

<script>
export default {
  name: 'LoginHeader',
  props: ['middleval']
}
</script>

<style scoped lang="less">
.header{
  height: 12vw;
  background-color: white;
  display: flex;
  div{
    flex: 1;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 4.27vw;
  }
}
</style>
