<template>
  <div>
    result: key:{{result}}
    <t-pick :ListData="lists" @callback="callback" :value="pick_value"></t-pick>
  </div>
</template>
<script>
import Bus from "../../util/bus";
export default {
  data() {
    return {
      lists: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      result: { value: 0, key: 0 },
      pick_value: 4
    };
  },
  created() {},
  methods: {
    callback({ value, key }) {
      /* todo
      这里的this会无效
      */
      console.log(this);
      console.log("key", key);
      console.log("value", value);
      this.$data.result.value = value;
      this.$data.result.key = key;
    }
  }
};
</script>