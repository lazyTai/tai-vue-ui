<template>
    <div>
        <Tweezing ref="tweezing" :to="value" tween="tweezer" duration="500">
            <div slot-scope="tweenedValue" :style="{transform:`translate3d(${tweenedValue}px,0,0)`}">
                {{tweenedValue}} tansformtansformtansform
            </div>
        </Tweezing>
        <button @click='button'>add</button>
        <button @click='down'>down</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      tween: "tweezer"
    };
  },
  methods: {
    doSomething() {},
    button() {
      this.$data.value += 1;
    },
    down() {
      this.$data.value -= 1;
    }
  }
};
</script>