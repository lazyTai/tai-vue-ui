<template>
    <t-layout>
        <t-header-back title="无限加载"></t-header-back>
        <t-infinite-scroll2 @callback="callback" :loadding='loadding' :setloadding="setloadding">
            <div v-for="item in lists" :key="item">{{item}}</div>
        </t-infinite-scroll2>
    </t-layout>
</template>
<script>
export default {
  data() {
    return {
      lists: 100,
      loadding: false
    };
  },
  methods: {
    callback() {
      var self = this;
      setTimeout(() => {
        self.$data.lists = self.$data.lists + 10;
        self.$data.loadding = false;
        self.$toast({ mes: "加载完毕" });
      }, 1000);
    },
    setloadding(loadding) {
      this.$data.loadding = loadding;
    }
  }
};
</script>