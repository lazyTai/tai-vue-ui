<template>
  <div class="t-infinite-scroll2 container" ref="container">
    <div class="content" ref="content">
      <slot />

      <div class="loading" v-show="isLoadding">拉取加载</div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>

<script>
import Scroll from "../scroll/scroll";
export default {
  name: "t-infinite-scroll2",
  data() {
    return {
      isLoadding: false
    };
  },
  methods: {
    init() {
      var self = this;
      self.$scroll = new Scroll(
        this.$refs["container"],
        this.$refs["content"],
        {
          start({ top }) {},
          move({ top }) {
            if (self.isBottom(top)) {
              self.$data.isLoadding = true;
            }
          },
          end({ top }) {
            self.$data.isLoadding = false;
            // self.moveContent(0, -1000);
            self.$emit("callback");
          }
        }
      );

      self.$scroll.dom_container = this.$refs["container"];
      self.$scroll.dom_content = this.$refs["content"];
      self.setDimensions();
    },
    isBottom(top) {
      var self = this;
      if (
        self.$scroll.dom_content.scrollHeight -
          self.$scroll.dom_content.scrollHeight <=
        top
      ) {
        return true;
      } else {
        return false;
      }
    },
    moveContent(left, top) {
      self.$scroll.dom_content.style.transform = `translate3d(${left}px, ${top}px, 0px) scale(1)`;
    },
    setDimensions() {
      var self = this;
      var dom_container_scrollHeight = self.$scroll.dom_container.scrollHeight;
      var dom_container_offsetWidth = self.$scroll.dom_container.offsetWidth;
      var dom_content_offsetWidth = self.$scroll.dom_content.offsetWidth;
      var dom_content_scrollHeight = self.$scroll.dom_content.scrollHeight;
      this.$scroll.setDimensions(
        dom_container_scrollHeight,
        dom_container_offsetWidth,
        dom_content_offsetWidth,
        dom_content_scrollHeight
      );
    }
  },
  updated() {
    var self = this;
    this.$nextTick(function() {
      console.log("updated");
      self.$scroll.destroy();
      self.$scroll = null;
      self.init();
    });
  },
  mounted() {
    this.init();
    // console.log("this.dom_content.offsetHeight", this.dom_content.offsetHeight);
    // console.log("this.dom_content.scrollHeight", this.dom_content.scrollHeight);
  }
};
</script>