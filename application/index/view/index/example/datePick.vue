<template>
    <div class="datepick">
        result:{{value}}
        <t-date-picker @callback="callback"></t-date-picker>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    };
  },
  methods: {
    callback(val) {
      this.value = val;
    }
  }
};
</script>