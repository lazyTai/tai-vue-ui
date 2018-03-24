<template>
    <div class="t-infinite-scroll2">
        <div class=" container" ref="container">
            <div class="content" ref="content">
                <slot />
                <t-loading class="loading" :loading="isLoadding">拉取加载</t-loading>
                <t-loading class="loading" :loading="loadding">加载ing</t-loading>
                <div style="height:45px"></div>
            </div>
        </div>
        <div class="hook" ref="hook"></div>
    </div>
</template>
<style scoped>
.loading {
  border-top: 1px solid #eee;
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.container .content {
  /* position: absolute; */
}
.hook {
  height: 0px;
}
</style>

<script>
import _ from "underscore";
import Scroll from "../scroll/scroll";
export default {
  name: "t-infinite-scroll2",
  props: {
    loadding: {
      type: Boolean,
      default: false
    },
    setloadding: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isLoadding: false
    };
  },
  updated() {
    var self = this;
    /* callback之后，需要重新渲染，
            todo：如何确定callback执行完成之后？？ */
    self.init();
    self.scroll.scrollTo(0, self.currentScrollTop);
  },
  methods: {
    init() {
      var self = this;
      this.dom_container = this.$refs["container"];
      this.dom_content = this.$refs["content"];
      this.dom_container_height = this.dom_container.offsetHeight;
      this.dom_container_width = this.dom_container.offsetWidth;
      this.dom_hook = this.$refs["hook"];
      var hook_offsetTop = this.dom_hook.offsetTop;
      this.scroll = new Scroll(this.dom_container, this.dom_content, {
        start: ({ top }) => {},
        move: ({ top }) => {
          if (!self.$props.loadding) {
            if (top + hook_offsetTop > self.dom_content.clientHeight) {
              // console.log("top", top);
              /* 出发加载动画 */
              // console.log("出发加载动画");
              self.$nextTick(function() {
                self.$data.isLoadding = true;
                self.currentScrollTop = top;
              });
            }
          } else {
            self.$data.isLoadding = false;
          }
        },
        end: ({ top }) => {
          if (self.$data.isLoadding) {
            self.scroll.scrollTo(0, self.currentScrollTop + 60);
          }
          self.$data.isLoadding = false;
          setTimeout(() => {
            self.scroll.setDimensions(
              self.dom_container_width,
              self.dom_container_height,
              self.dom_content.clientWidth,
              self.dom_content.clientHeight + 60
            );

            if (top + hook_offsetTop - 40 > self.dom_content.clientHeight) {
              //     /* 加入动画完毕之后，才能继续出发callback */
              if (!self.$props.loadding) {
                console.log("可以触发了");
                self.setloadding(true);

                _.throttle(() => {
                  self.$emit("callback");
                });
                setTimeout(() => {
                  self.setloadding(false);
                }, 5000);

                // /* 记录滚动的位置，重新init的时候，重新指定位置 */
                // self.currentScrollTop = top;
              }
            }
          }, 500);

          //top 表示滚动的距离
          //top+最底部的hook的offsetTop > dom_content.clientHeight 就可以加载了
          /*关键点：加入拉到底部，出发加载 
       */
          //   console.log(
          //     "self.dom_content.clientHeight",
          //     self.dom_content.clientHeight
          //   );
          //   console.log("top", top);
          //   console.log("hook_offsetTop", hook_offsetTop);
          /* -40 就更加精确一点 */
          //   if (top + hook_offsetTop - 40 > self.dom_content.clientHeight) {
          //     /* 加入动画完毕之后，才能继续出发callback */
          //     if (!self.$props.loadding) {
          //       console.log("可以触发了");
          //       self.$props.setloadding(true);
          //       self.$emit("callback");
          //       /* 记录滚动的位置，重新init的时候，重新指定位置 */
          //       self.currentScrollTop = top;
          //     }
          //   }
        }
      });
      /* scroll特新，设置边界 */
      self.scroll.setDimensions(
        self.dom_container_width,
        self.dom_container_height,
        self.dom_content.clientWidth,
        self.dom_content.clientHeight
      );
    }
  },
  mounted() {
    this.init();
  }
};
</script>