<template>
    <div>
      <van-field :label="label" :type="type" :placeholder="placeholder" :rule="rule"/>
    </div>
</template>

<script>
export default {
  name: 'InputField',
  props: ['label', 'type', 'rule', 'placeholder']
}
</script>

<style scoped>

</style>
