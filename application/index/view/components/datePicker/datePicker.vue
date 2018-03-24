<style >
.t-date-picker {
  position: absolute;
  bottom: 0px;
  width: 100%;
  z-index: 99;
}
.t-date-pickers {
  display: flex;
  width: 100%;
}
.t-date-pickers .item {
  width: 30%;
  height: 200px;
  z-index: 99;
  width: 100%;
  height: 200px;
  background: #eeee;
}
.t-date-toolbtns {
  box-sizing: border-box;
  position: absolute;
  bottom: 200px;
  width: 100%;
  background: #fff;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
}
.t-date-toolbtns .t-button {
  margin-right: 10px;
}
</style>

<template>
  <div class="t-date-picker" v-if="show">
    <div class="t-date-toolbtns">
      <t-button type='hollow'>取消</t-button>
      <t-button @click.native="click_save">确定</t-button>
    </div>

    <div class="t-date-pickers">
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

  </div>
</template>
<script>
import Mark from "../mark/mark.js";
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
    show: {
      type: Boolean,
      value: false
    },
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
  model: {
    prop: "show",
    event: "changeShow"
  },
  data() {
    var currnetDate = new Date();
    var currentYear = this.$props.year;
    var currentMonth = this.$props.month;
    var currentDay = this.$props.day;
    var years = [];
    for (var i = currentYear - 10; i < parseInt(currentYear) + 10; i++) {
      years.push(i);
    }
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var days = [];
    for (var i = 1; i < mGetDate(currentYear, currentMonth); i++) {
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
  updated() {
    this.$emit("callback", {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDay
    });
    var self = this;
    if (self.$props.show) {
      if (!self.$mark_el) {
        self.$mark_el = self.$mark();
      }
    }
  },
  mounted() {
    var self = this;
    if (self.$props.show) {
      if (!self.$mark_el) {
        self.$mark_el = self.$mark();
      }
    }
  },
  methods: {
    click_save() {
      this.$emit("sure", {
        year: this.currentYear,
        month: this.currentMonth,
        day: this.currentDay
      });
      this.$data.show = false;
      this.$mark_el.closeMark();
      this.$mark_el = null;
      this.$emit("changeShow", !this.$props.show);
    },
    callback1({ value }) {
      this.currentYear = value;
    },
    callback2({ value }) {
      this.currentMonth = value;
    },
    callback3({ value }) {
      this.currentDay = value;
    }
  }
};
</script>