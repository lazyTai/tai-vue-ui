<template>
    <div class="t-infinite-scroll" :style="style">
        <slot/>
        <div ref='tag' style="height:0"></div>
        <div class="loading" v-show="loading">
            <t-icon icon="loading"></t-icon>
            loadding...
        </div>
    </div>
</template>
<style scoped>
.loading {
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import { getScrollview } from "../../util/util";
import _ from "underscore";
export default {
  name: "t-nostop-list",
  props: {
    height: Number,
    callback: Function
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    style: function() {
      var _height = this.$props.height;
      if (!this.$props.height) {
        _height = document.body.offsetHeight;
      }
      return {
        height: _height,
        overflowY: "auto",
        userSelect: "none"
      };
    }
  },
  methods: {
    _callback() {
      var self = this;
      this.callback && this.callback.call(this);
      setTimeout(() => {
        self.$data.loading = false;
      }, 2000);
    },
    scrollEvent() {
      //   console.log("scroll", this.scrollview.scrollTop);
      //   console.log("scrollHeight", this.scrollview.scrollHeight);
      //   console.log("clientHeight", this.scrollview.clientHeight);
      /* 只有在数据没有加载的时候，触发 */
      /* 加入方向判读 */
      console.log("scrollEvent");
      var self = this;
      var afterScrollTop = this.scrollview.scrollTop,
        delta = afterScrollTop - this.beforeScrollTop;
      var direction = null;
      if (delta === 0) return false;
      direction = delta > 0 ? "down" : "up";
      this.beforeScrollTop = afterScrollTop;
      if (direction == "down") {
        if (!this.$data.loading) {
          /* 判断到底部 */
          if (
            this.scrollview.scrollHeight - 1 <=
            this.scrollview.clientHeight + this.scrollview.scrollTop
          ) {
            console.log("到底了");
            /* 1.加入放手才加载数据 */
            /* 1.加载数据 */
            self.$data.loading = true;
            this._callback();
          }
        }
      }
    }
  },
  mounted() {
    var self = this;
    var allHeight = this.$props.maxHeight
      ? document.body.offsetHeight
      : this.$props.maxHeight;
    this.scrollview = getScrollview(this.$el);
    this.dom_tag = this.$refs["tag"];
    console.log(" this.dom_tag.offsetTop", this.dom_tag.offsetTop);
    console.log(" this.scrollview.offsetTop", this.scrollview.offsetTop);
    console.log(" this.scrollview.offsetHeight", this.scrollview.offsetHeight);
    console.log(" this.scrollview.scrollHeight", this.scrollview.scrollHeight);

    /* 滚动事件 */
    this.beforeScrollTop = this.scrollview.scrollTop;
    this.scrollview.addEventListener("scroll", _.throttle(this.scrollEvent));
  }
};
</script>