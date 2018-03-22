<template>
    <button class="t-button" :style="style" :disabled='disabled'>
        <t-icon :icon='icon' class="_icon"></t-icon>
        <slot></slot>
    </button>
</template>
<style lang="less">
@import "../less_comm/var.less";
.t-button {
  display: flex;
  width: 88px;
  height: 30px;
  line-height: 30px;
  border: none;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  &:active {
    opacity: 0.5;
  }
  ._icon {
    margin-right: 5px;
  }
}
</style>

<script>
export default {
  name: "t-icon-button",
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  computed: {
    disabled: function() {
      return this.$props.type == "disabled";
    },
    style: function() {
      var _bgcolor = "";
      var _color = "#fff";
      var _border = "none";
      var _size_w = 88;
      var _size_h = 30;
      var _font_size = 15;
      if (this.$props.type == "primary") {
        _bgcolor = "green";
      }
      if (this.$props.type == "danger") {
        _bgcolor = "red";
      }
      if (this.$props.type == "infor") {
        _bgcolor = "#f1e110";
      }
      if (this.$props.type == "disabled") {
        _bgcolor = "#eee";
      }
      if (this.$props.type == "hollow") {
        _bgcolor = "#fff";
        _color = "#222";
        _border = "1px solid #eee";
      }
      if (this.$props.color) {
        _bgcolor = this.$props.color;
      }
      if (this.$props.size == "large") {
        _size_w = " 100%";
        _size_h = 30;
      }
      if (this.$props.size == "mini") {
        _size_w = 32;
        _size_h = 30;
        _font_size = 12;
      }
      return {
        background: _bgcolor,
        color: _color,
        border: _border,
        width: _size_w,
        height: _size_h,
        fontSize: _font_size
      };
    }
  }
};
</script>
