<template>
    <div class="t-cell-item">
        <div class="icon">
            <slot name="icon" />
        </div>
        <div class="left">
            <slot name="left" />
        </div>
        <div class="right">
            <slot name="right" />
        </div>
        <div class="arrow" :show="arrow">
            <t-icon icon="right-arrow"></t-icon>
        </div>
    </div>
</template>
<style scoped>
.t-cell-item {
  background: #fff;
  display: flex;
  align-self: center;
  align-items: center;
  height: 75px;
  border: 1px solid #eee;
  /* line-height: 45px; */
}
.t-cell-item .icon {
  width: 30px;
  height: 30px;
}
.t-cell-item .left {
  min-width: 30px;
  padding-right: 5px;
}
.t-cell-item .right {
  flex: 1;
}
.t-cell-item .arrow {
  width: 30px;
  height: 30px;
}
</style>

<script>
export default {
  name: "t-cell-item",
  props: {
    arrow: {
      type: Boolean,
      default: false
    }
  }
};
</script>