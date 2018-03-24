<template>
  <div class="t-pick t-pick-container" ref="container" :show="show">
    <div class="t-pick-content" ref="content">
      <t-pick-item v-for="(item,key) in 3" :key="key+'none'"> </t-pick-item>
      <t-pick-item v-for="(item,key) in ListData" :key="key">
        {{ListItemKey?item[ListItemKey]:item}}
      </t-pick-item>
    </div>
    <div class="_center_mark"></div>
  </div>

</template>
<script>
import Bus from "../../util/bus";
/* 1.生成mark */
/* 2.生成底部div */
/* 3.根据数据生成scroll */
/* 4,操作滚动，一个一个滚动 */
import Scroll from "../scroll/scroll";
export default {
  name: "t-pick",
  data() {
    return {
      currentPage: 2,
      childContext: null
    };
  },
  props: {
    show: Boolean,
    ListData: Array,
    ListItemKey: String
  },
  methods: {},
  mounted() {
    var self = this;
    this.$mark();
    this.dom_container = this.$refs["container"];
    this.dom_content = this.$refs["content"];
    self.$scroll = new Scroll(this.dom_container, this.dom_content, {
      start({ top }) {
        /* 加入方向判断，让操作更加准确 */
        this.currentTop = top;
      },
      move({ top }) {
        if (top - this.currentTop > 0) {
          this.dire = "up";
        } else {
          this.dire = "down";
        }
        this.currentTop = top;
      },
      end({ top }) {
        // console.log(this.dire);
        var keli = Math.ceil(top / 40);
        if (this.dire == "down") {
          keli = Math.round(top / 40);
        }

        if (keli <= 0) {
          keli = 1;
        }

        /* 加入最大的拉动长度 */
        if (keli > self.$props.ListData.length) {
          keli = self.$props.ListData.length;
        }

        self.$data.currentPage = keli;
        // console.log("tyop", top);
        // console.log("top / 40", top / 40);
        // console.log("keli", keli);
        self.$scroll.scrollTo(0, keli * 40);
        self.$emit("callback", {
          key: self.$data.currentPage - 1,
          value: self.$props.ListData[self.$data.currentPage - 1]
        });
      }
    });
    self.$scroll.setDimensions(
      this.dom_container.clientWidth,
      this.dom_container.clientHeight,
      this.dom_content.clientWidth,
      this.dom_content.clientHeight + 30 * 3
    );
    /* 一开始滚动3个 */
    this.$data.currentPage = 3;
    self.$scroll.scrollTo(0, this.$data.currentPage * 40);
  }
};
</script>
<style scoped>
._center_mark {
  position: absolute;
  height: 40px;
  background: #222;
  opacity: 0.5;
  width: 100%;
  top: 80px;
}
.t-pick-container {
  height: 200px;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.t-pick-content {
  -webkit-transform-origin: left top;
  -webkit-transform: translateZ(0);
  -moz-transform-origin: left top;
  -moz-transform: translateZ(0);
  -ms-transform-origin: left top;
  -ms-transform: translateZ(0);
  -o-transform-origin: left top;
  -o-transform: translateZ(0);
  transform-origin: left top;
  transform: translateZ(0);
}
.t-pick {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 200px;
  bottom: 0px;
  background: #eeee;
}
</style>