<template>
    <div class="infinitescroll3">
        <t-header-back title="动画滚动--无限加载"></t-header-back>
        <t-infinite-scroll3 class="t-infinite-scroll3" @callbackTop="callbackTop" @callbackBottom="callbackBottom">
            <template scope="scrollviewdata">
                <t-loadding v-show="scrollviewdata.isOverToping">拉取获取数据</t-loadding>
                <t-loadding v-show="scrollviewdata.isOverTop">加载ing...</t-loadding>
                {{scrollviewdata}}
                <div v-for="n in lists" class="item">
                    {{n}}
                </div>
                <t-loadding v-show="scrollviewdata.isOverBottoming">拉取获取数据</t-loadding>
                <t-loadding v-show="scrollviewdata.isOverBottom">加载ing...</t-loadding>
            </template>
        </t-infinite-scroll3>
    </div>

</template>
<style>
.t-infinite-scroll3 {
  max-height: 400px;
  border: 1px solid;
  box-sizing: border-box;
}
.t-infinite-scroll3 .item {
  height: 100px;
  border: 1px salmon solid;
}
</style>

<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4]
    };
  },
  methods: {
    callbackTop(data) {
      var self = this;
      var _array = [];
      for (var i = self.$data.lists[0]; i > self.$data.lists[0] - 10; i--) {
        _array.push(i);
      }
      self.$data.lists = _array.concat(self.$data.lists);
    },
    callbackBottom(data) {
      var self = this;
      var _array = [];
      for (
        var i = self.$data.lists[self.$data.lists.length - 1];
        i < self.$data.lists[self.$data.lists.length - 1] + 3;
        i++
      ) {
        _array.push(i + 1);
      }
      this.$loadding({ mes: "锁屏加载ing" });
      setTimeout(() => {
        self.$data.lists = self.$data.lists.concat(_array);
      }, 1000);
    }
  }
};
</script>