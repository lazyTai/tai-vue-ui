<template>
    <div class="datepick">
        result:{{value}}
        <t-button @click.native=" show=!show">show date</t-button>
        <t-date-picker v-model="show" year="2018" month="11" day='4' @callback="callback"></t-date-picker>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: null
    };
  },
  methods: {
    callback(val) {
      this.value = val;
    },
    click_date_btn() {
      this.$data.year = 2011;
    }
  },
  mounted() {}
};
</script>