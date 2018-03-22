<template>
    <div class="header1">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    left_click_function: Function
  },
  data() {
    return {};
  }
};
</script>
<style>
.header1 {
  display: flex;
  line-height: 40px;
  height: 40px;
  background: #eee;
  line-height: 30px;
}
.header1 .left {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header1 .right {
  width: 10%;
}
.header1 .center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
