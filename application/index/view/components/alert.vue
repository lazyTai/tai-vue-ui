<template>
  <div class="alert1" :style='style_alert'>
    <div class="alert_header" :style='style_alert_header' @mousedown="_mousedown">
      <span class="header_title_content" :style='style_header_title_content'>header</span>
      <i class="glyphicon glyphicon-remove" @click="_closeAlert1"></i>
    </div>
    <div class="alert_body" :style="alert_body">
      <slot></slot>
    </div>
    <div class="alert_footer" :style="style_alert_footer">
      <button class="btn btn-primary" @click="_sure">确定</button>
      <button class="btn btn-default" @click="_cancel">取消</button>
    </div>
  </div>
</template>
<style>

</style>

<script>
import { uuid } from "../util/util";
export default {
  props: {
    show: Boolean,
    close: Function,
    width: Number,
    height: Number,
    isMark: Boolean,
    sure: Function,
    cancel: Function
    // body: Object
  },
  created() {
    var self = this;
  },
  methods: {
    _cancel() {
      this.cancel && this.cancel.call(this);
      this._closeAlert1();
    },
    _sure() {
      this.sure && this.sure.call(this);
      this._closeAlert1();
    },
    _closeAlert1() {
      var self = this;
      self.$data._show = false;
      self.close && self.close.call(self);
    },
    _mousedown(e) {
      this.startx = e.clientX;
      this.starty = e.clientY;
      this.oldx = e.clientX;
      this.oldy = e.clientY;
      this.diffx = 0;
      this.diffy = 0;
      this.isDown = true;
      document.addEventListener("mouseup", this._mouseUp);
      document.addEventListener("mousemove", this._mouseMove);
    },
    _mouseUp(e) {
      this.isDown = false;
    },
    _mouseMove(e) {
      if (this.isDown) {
        this.startx = e.clientX;
        this.starty = e.clientY;
        this.diffx = this.oldx - this.startx;
        this.diffy = this.oldy - this.starty;
        this.oldx = e.clientX;
        this.oldy = e.clientY;

        this.left -= this.diffx;
        this.top -= this.diffy;
      }
    },
    move(top, left) {
      var _width = this.width || 200;
      var _height = this.height || 200;
      // var $alert = this.$refs[this.$data.uuid];
      this.top = top - _height / 2;
      this.left = left - _width / 2;
      // $alert.style.left = left - $alert.offsetWidth / 2;
      // $alert.style.top = top - $alert.offsetHeight / 2;
    }
  },
  data() {
    var _show = this.show;
    return {
      top: 0,
      left: 0,
      _show
    };
  },
  computed: {
    style_alert() {
      var _uuid = uuid();
      var _width = this.width || 200;
      var _height = this.height || 200;
      var _top = this.top;
      var _left = this.left;
      var _show = this.$data._show;
      return {
        background: "#fff",
        width: `${_width}px`,
        height: `${_height}px`,
        top: _top + "px",
        left: _left + "px",
        boxSizing: "border-box",
        border: "1px solid #eee",
        display: _show ? "flex" : "none",
        position: "absolute",
        flexDirection: "column",
        zIndex: 99
      };
    },
    style_alert_header() {
      var _width = this.width || 200;
      var _height = this.height || 200;
      var _top = this.top;
      var _left = this.left;
      return {
        width: `${_width}px`,
        padding: 10,
        borderBottom: "1px solid #eee",
        display: "flex",
        cursor: "pointer"
        // border: "1px solid #eee"
      };
    },
    style_header_title_content() {
      return {
        width: "100%"
      };
    },
    alert_body() {
      return {
        flex: 1,
        padding: 5
      };
    },
    style_alert_footer() {
      return {
        padding: 10,
        borderTop: "1px solid #eee",
        textAlign: "right"
      };
    }
  },
  mounted() {
    this._mousedown = this._mousedown.bind(this);
    this._mouseUp = this._mouseUp.bind(this);
    this._mouseMove = this._mouseMove.bind(this);
    if (this.isMark) {
      // if (true) {
      var $mark = document.querySelector(".mark");
      if ($mark) {
      } else {
        $mark = document.createElement("div");
        document.body.prepend($mark);
      }

      $mark.style.width = "100%";
      $mark.style.height = "100%";
      $mark.style.position = "absolute";
      $mark.style.background = "#222";
      $mark.style.top = "0";
      $mark.style.left = "0";
      $mark.style.zIndex = "1";
      $mark.style.opacity = ".5";
    }
    this.move.call(
      this,
      document.body.offsetHeight / 2,
      document.body.offsetWidth / 2
    );
  }
};
</script>