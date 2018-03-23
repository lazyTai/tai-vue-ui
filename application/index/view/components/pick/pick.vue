<template>
  <transition name="slider">
    <div class="t-pick" :show="show">
      <t-pick-item v-for="(item,key) in ListData" :key="key">
        {{ListItemKey?item[ListItemKey]:item}}
      </t-pick-item>
    </div>
  </transition>

</template>
<style scoped>
.t-pick {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 200px;
  bottom: 0px;
  background: #eeee;
}
</style>

<script>
/* 1.生成mark */
/* 2.生成底部div */
/* 3.根据数据生成scroll */
/* 4,操作滚动，一个一个滚动 */
export default {
  name: "t-pick",
  data() {
    return {};
  },
  props: {
    show: Boolean,
    ListData: Array,
    ListItemKey: String
  },
  mounted() {
    this.$mark();
  }
};
</script>