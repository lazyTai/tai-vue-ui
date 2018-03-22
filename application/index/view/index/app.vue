<template>
    <div>
        <yd-layout>
            <yd-navbar slot="navbar" title="主页">
                <router-link to="/" slot="left">
                    <!-- <yd-navbar-back-icon></yd-navbar-back-icon> -->
                    <yd-icon name="home"></yd-icon>
                </router-link>
            </yd-navbar>
            <router-link to="/search">
                <yd-search></yd-search>
            </router-link>

            <List />

            
            <yd-tabbar slot="tabbar">
                <yd-tabbar-item title="首页" link="/app">
                    <yd-icon name="home" slot="icon"></yd-icon>
                </yd-tabbar-item>
                <yd-tabbar-item title="" link="/add">
                    <yd-icon name="compose" slot="icon"></yd-icon>
                </yd-tabbar-item>
                <yd-tabbar-item title="个人中心" link="/user">
                    <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
                </yd-tabbar-item>
            </yd-tabbar>

        </yd-layout>
    </div>
</template>
<script>
import Vue from "vue";
import List from "./index/list.vue";
import { fetch_good_search } from "../util/fetch";
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
      fetch_good_search({
        data: this.$state.search_option,
        success(res) {
          var resJson = JSON.parse(res);
          var { set_index_lists } = self.$actionTypes;
          self.$dispatch(set_index_lists, { index_lists: resJson });
        }
      });
    }
  },
  components: {
    List
  }
};
</script>