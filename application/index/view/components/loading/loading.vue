<template>
  <div class="tai_loading" v-show="loading">
    <t-icon icon="loading"></t-icon>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "t-loadding",
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
  display: flex;
  background: #fff;
  font-size: 22px;
  text-align: center;
  justify-content: center;
}
.tai_loading .content {
  padding-left: 10px;
}
</style>
