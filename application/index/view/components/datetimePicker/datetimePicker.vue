<style>
.t-datetime-picker {
  position: absolute;
  bottom: 0px;
  width: 100%;
  max-width: 800px;
  z-index: 99;
}
.t-datetime-pickers {
  display: flex;
  width: 100%;
}
.t-datetime-pickers .item {
  width: 20%;
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
    <div class="t-datetime-picker" v-if="show">
        <div class="t-date-toolbtns">
            <t-button type='hollow'>取消</t-button>
            <t-button @click.native="click_save">确定</t-button>
        </div>
        <div class="t-datetime-pickers">
            <div class="item item-year">
                <t-pick :value="2018" @callback='callback1' :ListData="years"></t-pick>
            </div>
            <div class="item item-month">
                <t-pick :value="11" @callback='callback2' :ListData="months"></t-pick>
            </div>
            <div class="item item-day">
                <t-pick :value="21" @callback='callback3' :ListData="days"></t-pick>
            </div>
            <div class="item item-hour">
                <t-pick :value="12" @callback='callback4' :ListData="hours"></t-pick>
            </div>
            <div class="item item-minutes">
                <t-pick :value="20" @callback='callback5' :ListData="minutesArray"></t-pick>
            </div>
        </div>

    </div>
</template>
<script>
import Mark from "../mark/mark.js";
function mGetDate(year, month) {
  var d = new Date(year, month, 0);
  return d.getDate();
}
export default {
  name: "t-datetime-picker",
  data() {
    var currnetDate = new Date();
    var currentYear = this.$props.year;
    var currentMonth = this.$props.month;
    var currentDay = this.$props.day;
    var currentHour = this.$props.hour;
    var currentMinutes = this.$props.minutes;
    var { years, months, days, hours, minutesArray } = this.fixed_date_list(
      currentYear,
      currentMonth,
      currentDay
    );
    return {
      years,
      months,
      currentYear,
      currentMonth,
      currentDay,
      days,
      hours,
      minutesArray
    };
  },
  model: {
    prop: "show",
    event: "changeShow"
  },
  props: {
    show: {
      type: Boolean,
      default: false
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
    },
    hour: {
      type: [String, Number],
      default: new Date().getHours()
    },
    minutes: {
      type: [String, Number],
      default: new Date().getMinutes()
    }
  },
  updated() {
    this.$emit("callback", {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDay,
      hour: this.currentHour,
      minutes: this.currentMinutes,
      second: "00"
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
    fixed_date_list(currentYear, currentMonth, currentDay) {
      var years = [];
      for (var i = currentYear - 10; i < parseInt(currentYear) + 10; i++) {
        years.push(i);
      }
      var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var days = [];
      for (var i = 1; i < mGetDate(currentYear, currentMonth); i++) {
        days.push(i);
      }
      var hours = [];
      for (var i = 1; i < 25; i++) {
        hours.push(i);
      }
      var minutesArray = [];
      for (var i = 1; i < 61; i++) {
        minutesArray.push(i);
      }
      return {
        years,
        months,
        days,
        hours,
        minutesArray
      };
    },
    callback1({ value }) {
      this.currentYear = value;
      var { years, months, days } = this.fixed_date_list(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback2({ value }) {
      this.currentMonth = value;
      var { years, months, days } = this.fixed_date_list(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback3({ value }) {
      this.currentDay = value;
      var { years, months, days } = this.fixed_date_list(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.$data.years = years;
      this.$data.months = months;
      this.$data.days = days;
    },
    callback4({ value }) {
      this.currentHour = value;
    },
    callback5({ value }) {
      this.currentMinutes = value;
    },
    click_save() {
      this.$emit("callback", {
        year: this.currentYear,
        month: this.currentMonth,
        day: this.currentDay,
        hour: this.currentHour,
        minutes: this.currentMinutes,
        second: "00"
      });
      this.$data.show = false;
      if (this.$mark_el) {
        this.$mark_el.closeMark();
        this.$mark_el = null;
      }
      this.$emit("changeShow", !this.$props.show);
    }
  }
};
</script>
