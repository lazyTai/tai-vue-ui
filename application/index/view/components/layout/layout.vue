<template>
    <div class="t-layout">
        <slot name="top"></slot>
        <div class="center">
            <slot></slot>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>
<script>
export default {
  name: "t-layout"
};
</script>
<style lang="less">
@import "../less_comm/var.less";
.@{css-prefix} {
  &-layout {
    margin: 0 auto;
    max-width: 720px;
    min-width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top {
      height: 40px;
      background: #eee;
    }
    .center {
      flex: 1;
    }
    .botom {
      height: 40px;
      background: #eee;
    }
  }
}
</style>