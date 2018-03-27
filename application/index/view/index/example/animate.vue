<template>
  <div>
    <t-animate :to="value">
      <div slot-scope="scope">
        {{scope}}
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
      value: 1
    };
  },
  methods: {
    button() {
      this.$data.value += 1;
    },
    down() {
      this.$data.value -= 1;
    }
  }
};
</script>