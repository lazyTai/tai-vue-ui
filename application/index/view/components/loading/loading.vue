<template>
  <div class="tai_loading" v-show="loading">
    <t-icon icon="loading"></t-icon>
    <slot />
  </div>
</template>

<script>
export default {
  name: "t-loading",
  props: {
    loading: Boolean
  },
  created() {}
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.tai_loading {
  width: 100%;
  height: 50px;
  background: #fff;
  font-size: 22px;
  text-align: center;
}
</style>
