<template>
  <div>
    result: key:{{result}}
    <t-pick :ListData="lists" ListItemKey="value" @callback="callback" :value="pick_value"></t-pick>
  </div>
</template>
<script>
import Bus from "../../util/bus";
export default {
  data() {
    return {
      lists: [
        { id: 0, value: 0 },
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
        { id: 8, value: 8 },
        { id: 9, value: 9 }
      ],
      result: { value: 0, key: 0 },
      pick_value:  { id: 9, value: 9 },
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