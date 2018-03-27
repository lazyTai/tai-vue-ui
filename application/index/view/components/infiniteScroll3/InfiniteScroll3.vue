<template>
  <div :class="class_container" ref="container">
    <div :class="class_content" ref="content">
      <slot />
      <div class="loading">拉取加载</div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;

  transition: all 1s ease-in-out;
}
.t-infinite-scroll3 .content.relase {
  transform: translate3d(0, 0, 0);
}
</style>

<script>
import Scroll from "../scroll/scroll";
export default {
  name: "t-infinite-scroll3",
  data() {
    return {
      class_container: ["t-infinite-scroll3", "contaier"],
      class_content: ["content"]
    };
  },
  props: {
    height: {
      type: String,
      default: document.body.offsetHeight
    }
  },
  methods: {
    setMove(left, top) {
      var self = this;
      self.dom_content.style.transform = `translate3d(${left}px,${top}px,0)`;
      self.currentTop = top;
    },
    relase() {
      var self = this;
      self.currentTop = 0;
      self.dom_content.style.transform = `translate3d(${0}px,${
        self.currentTop
      }px,0)`;
      self.$data.class_content.push("relase");
    }
  },
  mounted() {
    var self = this;
    self.dom_container = self.$refs["container"];
    self.dom_content = self.$refs["content"];

    self.setMove(0, 100);
    self.relase();
  }
};
</script>