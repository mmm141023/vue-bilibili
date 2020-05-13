<template>
      <div class="editBar">
        <span>{{editName}}</span>
        <span><slot name="right"></slot></span>
      </div>
</template>

<script>
export default {
  name: 'EditBanner',
  props: ['editName']
}
</script>

<style scoped lang="less">
.editBar{
  font-size: 4vw;
  height: 13vw;
  background-color: white;
  margin-bottom: 1.33vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5.33vw;
}
</style>
