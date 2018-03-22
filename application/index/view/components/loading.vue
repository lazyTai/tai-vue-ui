<template>
 <transition name="fade">
    <div class="tai_loading" v-show="loading">
    <Icon :icon="'loading'" :spin='true' /> loading
  </div>
  </transition>
  
</template>

<script>
import Icon from "./icon.vue";
export default {
  props: {
    loading: Boolean
  },
  created() {},
  components: {
    Icon
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tai_loading {
  width: 100%;
  height: 50px;
  background: #fff;
  font-size: 22px;
  text-align: center;
}
</style>
