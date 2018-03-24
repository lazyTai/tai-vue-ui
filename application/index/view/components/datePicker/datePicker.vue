<style >
.t-date-picker {
  display: flex;
  position: relative;
  bottom: 0px;
}
.t-date-picker .item {
  width: 30%;
  height: 200px;
  z-index: 99;
  width: 100%;
  height: 200px;
  background: #eeee;
}
</style>

<template>
  <div class="t-date-picker">
    <div class="item item-year">
      <t-pick :ListData="years" :value="currentYear" @callback="callback1"></t-pick>
    </div>
    <div class="item item-month">
      <t-pick :ListData="months" :value="currentMonth" @callback="callback2"></t-pick>
    </div>
    <div class="item item-day">
      <t-pick :ListData="days" :value="currentDay" @callback="callback3"></t-pick>
    </div>
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
      type: [String, Number],
      default: new Date().getFullYear()
    },
    month: {
      type: [String, Number],
      default: new Date().getMonth() + 1
    },
    day: {
      type: [String, Number],
      default: new Date().getDay()
    }
  },
  data() {
    var currnetDate = new Date();
    var currentYear = currnetDate.getFullYear();
    var currentMonth = currnetDate.getMonth() + 1;
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
      currentMonth,
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