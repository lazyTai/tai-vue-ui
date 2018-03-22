<template>
    <t-layout>
        <t-header-back title="无限加载"></t-header-back>
        <t-nostop-list :height="400" :callback="callback">
            <div v-for="n in lists" :key="n">
                <div>{{n}}</div>
            </div>
        </t-nostop-list>
    </t-layout>

</template>
<script>
export default {
  data() {
    return {
      lists: 100
    };
  },
  methods: {
    callback() {
      var self = this;
      setTimeout(function() {
        self.$toast({ mes: "加载结束" });
        self.lists = self.lists + 100;
      }, 2000);
    }
  }
};
</script>