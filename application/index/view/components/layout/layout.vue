<template>
    <div class="t-layout">
        <div class="top">
            <slot name="top"></slot>
        </div>
        <div class="center">
            <slot></slot>
        </div>
        <div class="botom">
            <slot name="bottom"></slot>
        </div>

    </div>
</template>
<script>
export default {
  name: "t-layout"
};
</script>
<style lang="less">
@import "./layout.less";
</style>