<template>
  <t-layout>
    <t-button @click.native="toast"> toast</t-button>
  </t-layout>
</template>
<style>

</style>

<script>
export default {
  methods: {
    toast() {
      var a = this.$toast({ mes: "toast" });
    }
  }
};
</script>