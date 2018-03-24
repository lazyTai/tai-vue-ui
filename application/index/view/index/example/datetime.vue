<template>
    <t-layout>
        result:{{result}}
        <t-button @click.native="show=!show">点击选择时间</t-button>
        <t-datetime-picker v-model="show" @callback="callback"></t-datetime-picker>
    </t-layout>
</template>
<script>
export default {
  data() {
    return {
      result: "",
      show: false
    };
  },
  methods: {
    callback(value) {
      this.$data.result = value;
      console.log(value);
    }
  }
};
</script>