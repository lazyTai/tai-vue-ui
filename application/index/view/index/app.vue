<template>
  <div>
    <t-layout>
      <div slot="top">
        <t-header-back title="t-vue-ui"></t-header-back>
      </div>
      <div>
        <t-grid-group :row="3">
          <t-grid-item>
            <t-icon icon=""/>
            <div>button</div>
          </t-grid-item>
          <t-grid-item>
            <div>2</div>
            <div>shit</div>
          </t-grid-item>
          <t-grid-item>
            <div>3</div>
            <div>shit</div>
          </t-grid-item>

           <t-grid-item>
            <div>1</div>
            <div>shit</div>
          </t-grid-item>
          <t-grid-item>
            <div>2</div>
            <div>shit</div>
          </t-grid-item>
          <t-grid-item>
            <div>3</div>
            <div>shit</div>
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