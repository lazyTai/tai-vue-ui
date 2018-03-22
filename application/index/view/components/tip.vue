<template>
  <div class="tip_tip" :style="tip_tip_style" ref="tip_children">
    <div @mousedown="_mousedown">
      <slot name="children"></slot>
    </div>
    <div v-show="show" :style="tip_style" ref="tip_tiptip">
      <slot name="tip"></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    left: String
  },
  data() {
    return {
      msg: "asda",
      show: false,
      children_top: 0,
      children_left: 0,
      children_width: 0,
      children_height: 0
    };
  },
  methods: {
    _mousedown() {
      this.$data.show = !this.$data.show;
    },
    _mouseup() {}
  },
  mounted() {
    var $tip_children = this.$refs["tip_children"];
    var all_width = document.body.offsetWidth;
    var _height = $tip_children.offsetHeight;
    var _width = $tip_children.offsetWidth;
    var _top = $tip_children.offsetTop;
    var _left = $tip_children.offsetLeft;

    this.$data.children_top = _top;
    this.$data.children_left = _left;
    // if (this.left) {
    //   this.$data.children_left = this.left;
    // }
    if (all_width < 768) {
      /* 小屏幕 */
      this.$data.children_left = 50;
    }
    if (768 < all_width) {
      this.$data.children_left = -100;
    }
    this.$data.children_width = _width;
    this.$data.children_height = _height;

    // if (_width + _left > all_width - 200) {
    //   debugger;
    //   this.$data.children_left = _left - 200;
    // }
  },
  computed: {
    tip_tip_style() {
      return {};
    },
    tip_style() {
      var {
        children_top,
        children_left,
        children_width,
        children_height
      } = this.$data;
      return {
        position: "absolute",
        top: children_height + children_top + "px",
        left: parseInt(children_left) + children_width / 2 + "px"
      };
    }
  }
};
</script>