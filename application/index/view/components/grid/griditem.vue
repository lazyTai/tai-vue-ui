<template>
    <div class="t-grid-item" :style="style">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "t-grid-item",
  props: {
    direct: {
      type: String,
      default: "column"
    }
  },
  data() {
    return {
      //   _direct: this.direct || "column"
    };
  },
  computed: {
    style: function() {
      var self = this;
      return {
        flexDirection: self.$props.direct
      };
    }
  }
};
</script>
<style lang="less">
@import "../less_comm/var";
.@{css-prefix} {
  &-grid-item {
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    height: @grid_item_height;
    align-items: center;
    align-self: center;
    justify-content: center;
  }
}
</style>


