<template>
    <div class="t-date-picker">
        <t-pick :ListData="years" value="" @callback="callback1"></t-pick>
        <t-pick :ListData="months" value="" @callback="callback2"></t-pick>
        <t-pick :ListData="days" value="" @callback="callback3"></t-pick>
    </div>
</template>
<script>
function mGetDate(year, month) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var d = new Date(year, month, 0);
  return d.getDate();
}
export default {
  name: "t-date-picker",
  props: {
    year: {
      type: String,
      default: new Date().getFullYear()
    },
    month: {
      type: String,
      default: new Date().getMonth() + 1
    },
    day: {
      type: String,
      default: new Date().getDay()
    }
  },
  data() {
    var currnetDate = new Date();
    var currentYear = currnetDate.getFullYear();
    var currentMoth = currnetDate.getMonth() + 1;
    var currentDay = currnetDate.getDay();
    var years = [];
    for (var i = currentYear - 10; i < currentYear + 10; i++) {
      years.push(i);
    }
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var days = [];
    for (var i = 1; i < currentDay; i++) {
      days.push(i);
    }
    return {
      years,
      months,
      currentYear,
      currentMoth,
      currentDay,
      days
    };
  },
  methods: {
    callback1(val) {},
    callback2(val) {},
    callback3(val) {}
  }
};
</script>