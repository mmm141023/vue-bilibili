<template>
    <div>
      <van-field :maxlength="maxlength" :label="label" :type="type" :placeholder="placeholder" :rule="rule" v-model="context"/>
    </div>
</template>

<script>
export default {
  name: 'InputField',
  props: ['label', 'type', 'rule', 'placeholder', 'maxlength'],
  data () {
    return {
      context: ''
    }
  },
  methods: {
    ruleText () {
      const reg = new RegExp(this.rule)
      if (reg.test(this.context)) {
        this.$emit('initParam', this.context)
      }
    }
  },
  watch: {
    context () {
      this.ruleText()
    }
  }
}
</script>

<style scoped>

</style>
