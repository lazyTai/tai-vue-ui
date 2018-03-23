<template>
  <div>
    <t-layout>
      <div slot="top">
        <t-header-back title="t-vue-ui"></t-header-back>
      </div>
      <div>
        <t-grid-group :row="3">
          <t-grid-item>
            <router-link to="/button">
              <t-icon icon="anniu" size='44' />
              <div>button</div>
            </router-link>
          </t-grid-item>
          <t-grid-item>
            <router-link to="/dialog">
              <t-icon icon="duihuakuang" size='44' />
              <div>dialog</div>
            </router-link>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="icon-test2" size='44' />
            <div>icon</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="grids" size='44' />
            <div>Grids</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="symbols" size='44' />
            <div>List</div>
          </t-grid-item>
          <t-grid-item>
            <router-link to="/nostop_list">
              <t-icon icon="symbols" size='44' />
            </router-link>
            <div>无限加载列表</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="nav" size='44' />
            <div>nav</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="tabs" size='44' />
            <div>tab</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="iconset0497" size='44' />
            <div>actionSheet</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="jindutiao" size='44' />
            <div>进度条</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="slider" size='44' />
            <div>图片silder</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="chengshijianshe" size='44' />
            <div>城市选择</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="heart-copy" size='44' />
            <div>等级</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="lianxiangshuru" size='44' />
            <div>输入</div>
          </t-grid-item>
          <t-grid-item>
            <t-icon icon="404" size='44' />
            <div>布局</div>
          </t-grid-item>

          <t-grid-item>
            <router-link to="/pick">
              <t-icon icon="404" size='44' />
              <div>pick</div>
            </router-link>
          </t-grid-item>

        </t-grid-group>

      </div>
      <div slot="bottom">1</div>
    </t-layout>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var self = this;
    }
  },
  components: {}
};
</script>