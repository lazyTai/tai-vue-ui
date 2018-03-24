<template>
  <div class="t-swiper container" ref="container" :style="style_container">
    <div class="content" ref="content">
      <slot />
    </div>
    <div class="t-swiper-page">
      <div class="item" v-for="(item,index) in childLength" :key="index" :style="{'background':currentPage==index?'blue':'#ccc'}"></div>
    </div>
  </div>
</template>
<style>
.t-swiper {
  overflow: hidden;
  width: 100%;
  user-select: none;
  position: relative;
}
.t-swiper .content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.t-swiper-page {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 5;
  justify-content: center;
}
.t-swiper-page .item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 5px;
}
</style>

<script>
import Scroll from "../scroll/scroll";
import _ from "underscore";
export default {
  name: "t-swiper",
  data() {
    return {
      currentPage: 0,
      childLength: 0
    };
  },
  props: {
    height: {
      type: [String, Number],
      default: 200
    }
  },
  computed: {
    style_container() {
      var height = this.$props.height;
      return {
        height
      };
    }
  },
  mounted() {
    var self = this;
    this.dom_container = this.$refs["container"];
    this.dom_content = this.$refs["content"];
    this.dom_container_height = this.dom_container.offsetHeight;
    this.dom_container_width = this.dom_container.offsetWidth;
    self.scroll = new Scroll(this.dom_container, this.dom_content, {
      start: ({ left }) => {
        this.currentLeft = left;
      },
      move: ({ left }) => {
        this.dire = this.currentLeft - left > 0 ? "right" : "left";
        this.currentLeft = left;
      },
      end: ({ left }) => {
        /* 加入dire控制更加精确 */
        if (this.dire == "left") {
          self.$data.currentPage = Math.ceil(left / this.dom_container_width);
        } else {
          self.$data.currentPage = Math.round(left / this.dom_container_width);
          // console.log(
          //   "left / this.dom_container_width",
          //   left / this.dom_container_width
          // );
        }
        if (self.$data.currentPage > self.$data.childLength - 1) {
          self.$data.currentPage = self.$data.childLength - 1;
        }
        // console.log("self.$data.childLength", self.$data.childLength);
        self.scroll.scrollTo(
          self.$data.currentPage * this.dom_container_width,
          0,
          false
        );
      },
      scrollingX: true,
      scrollingY: false
    });
    /* 1.设置content的大小非常大 */
    /* 1.便利children 让所有的child都是父类的大小 */
    this.$data.childLength = this.dom_content.children.length;
    this.dom_content.style.width =
      this.$data.childLength * self.dom_container_width;
    _.each(this.dom_content.children, child => {
      child.style.width = self.dom_container_width;
      child.style.height = self.dom_container_height;
    });
    /* 插件 scroll特新，定义空间大小 */
    self.scroll.setDimensions(
      self.dom_container_width,
      self.dom_container_height,
      self.dom_content.clientWidth,
      self.dom_content.clientHeight
    );
  }
};
</script>