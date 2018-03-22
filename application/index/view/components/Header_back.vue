<template>
    <div class="header_back">
        <div class="left" @click="  history.back(-1);">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-left"></use>
            </svg>
            返回
        </div>
        <div class="title">
            {{title}}
        </div>
        <div class="right"></div>
    </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      history
    };
  },
  methods: {
    // history: () => {
    //   history.back(-1);
    // }
  }
};
</script>
<style scoped>
.header_back {
  display: flex;
  background: #0099cc;
  color: #fff;
  height: 45px;
  align-items: center;
}
.icon {
  font-size: 30px;
}
.header_back .left {
  display: flex;
  align-items: center;
  width: 20%;
}
.header_back .right {
  display: flex;
  align-items: center;
  width: 20%;
}
.header_back .title {
  flex: 1;
  text-align: center;
}
</style>
