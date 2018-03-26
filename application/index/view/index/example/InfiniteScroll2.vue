<template>
    <div class="demo-infiniteScroll">
        <t-infinite-scroll2 class="lists" @callback="callback">
            <div v-for="item in lists">{{item}}</div>
        </t-infinite-scroll2>
    </div>
</template>
<style scoped>
.lists {
  height: 400px;
  border: 1px solid #eee;
}
</style>

<script>
export default {
  data() {
    return {
      lists: 20
    };
  },
  methods: {
    callback() {
      this.$data.lists += 10;
      console.log("callback");
    }
  }
};
</script>