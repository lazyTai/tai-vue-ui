<template>
  <transition name="slider">
    <div class="t-loadding">
      {{mes}}
    </div>
  </transition>
</template>
<script>
import { Mark } from "../../mark/mark.js";
export default {
  props: {
    mes: String
  },
  mounted() {
    this.$mark = Mark(true);
  },
  destroyed() {
    this.$mark.closeMark();
  }
};
</script>
<style>
.t-loadding {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  /* background: #333; */
  padding: 15px;
  color: #fff;
  border-radius: 3px;
  text-align: center;
  z-index: 99;
}
.slider-enter-active,
.slider-leave-active {
  transition: all 1s;
}
.slider-enter,
.slider-leave {
  opacity: 0;
}
</style>
