<template>
    <div :class="classs">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "t-grid-group",
  props: {
    row: {
      type: Number,
      default: 2
    }
  },
  computed: {
    classs: function() {
      var self = this;
      return "t-grid-goup t-grid-group-" + this.row;
    }
  }
};
</script>
<style lang="less">
@import "../less_comm/var";
.@{css-prefix} {
  &-grid-goup {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  &-grid-group-1 {
    .@{css-prefix}-grid-item {
      width: 100%;
      box-sizing: border-box;
    }
  }
  &-grid-group-2 {
    .@{css-prefix}-grid-item {
      width: 50%;
      box-sizing: border-box;
    }
  }
  &-grid-group-3 {
    .@{css-prefix}-grid-item {
      width: 33.333%;
      box-sizing: border-box;
    }
  }
}
</style>


