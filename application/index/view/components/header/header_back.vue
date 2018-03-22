<template>
  <div class="t-header-back">
    <div class="left" @click="click_back">
      <t-icon icon="left"></t-icon>
    </div>
    <div class="title center">
      {{title}}
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  name: "t-header-back",
  props: {
    title: String
  },
  methods: {
    click_back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
@import "./header_back.less";
</style>


