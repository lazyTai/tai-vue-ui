<template>
  <div>
    <t-animate :to="value">
      <div slot-scope="scope">
        {{scope}}
        <div :class="scope" :style="{transform:`translate3d(${scope.animateValue.x}px,0,0)`}">
          控制 transform translate3d 动起来
        </div>
      </div>
    </t-animate>
    <button @click='button'>add</button>
    <button @click='down'>down</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: { x: 1, y: 0 }
    };
  },
  methods: {
    button() {
      this.$data.value.x += 100;
    },
    down() {
      this.$data.value.x -= 100;
    }
  }
};
</script>