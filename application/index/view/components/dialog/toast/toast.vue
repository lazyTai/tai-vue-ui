<template>
    <transition name="slider">
        <div class="t-toast">
            {{mes}}
        </div>
    </transition>

</template>
<script>
export default {
  props: {
    mes: String
  }
};
</script>
<style>
.t-toast {
  position: absolute;
  top: 50%;
  left: 50%;
  background: #333;
  padding: 15px;
  color: #fff;
  border-radius: 3px;
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
