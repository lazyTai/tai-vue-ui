<template>
  <div class="t-animate">
    {{animateValue}}
    <slot />
  </div>
</template>
<script>
import TWEEN from "@tweenjs/tween.js";
export default {
  name: "t-animate",
  props: {
    animateValue: {
      type: Number,
      required: true
    }
  },
  model: {
    prop: "animateValue",
    event: "animateChange"
  },
  data() {
    return {};
  },
  methods: {
    setAnimate(oldv, newv) {
      var self = this;
      console.log(oldv, "oldv");
      console.log(newv, "newv");
      var coords = { x: oldv, y: 0 };
      var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
        .to({ x: newv, y: 0 }, 1000) // Move to (300, 200) in 1 second.
        .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
        .onUpdate(function() {
          // Called after tween.js updates 'coords'.
          // Move 'box' to the position described by 'coords' with a CSS translation.
          // box.style.setProperty(
          //   "transform",
          //   "translate(" + coords.x + "px, " + coords.y + "px)"
          // );
          // console.log(oldv, "oldv");
          // console.log("coords.x", coords.x);
          self.$emit("animateChange", coords.x);
          self.$data.oldAnimateValue = coords.x;
        })
        .start();
    }
  },
  updated(oldv, newv) {
    var self = this;
    self.$data.newAnimateValue = self.$props.animateValue;
    /* 如果value改变，就改变default改变，带着动画效果的改变 */
    self.setAnimate(self.$data.oldAnimateValue, self.$data.newAnimateValue);
  },
  watch: {
    // animateValue(oldv, newv) {}
  },
  mounted() {
    var self = this;
    /* 开始初始化tween animate */
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    self.$data.oldAnimateValue = self.$props.animateValue;
  }
};
</script>
