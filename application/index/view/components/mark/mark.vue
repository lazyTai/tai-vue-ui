<template>
  <div class="t-mark" :show="show">
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    show: Boolean
  },
  created() {}
};
</script>
<style scoped>
.t-mark {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 98;
  background: #222;
  color: #fff;
  opacity: 0;
  bottom: 0;
}
</style>

