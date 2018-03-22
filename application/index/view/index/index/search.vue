<template>
  <yd-layout>
    <yd-navbar title="搜索">
      <router-link to="/app" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <yd-search v-model="value1" @input="title_input"></yd-search>

    <yd-cell-group>
      <!-- <yd-cell-item>
        <span slot="left">价格</span>
        <span slot="right">
          <yd-spinner max="100" v-model="price1" @input="input_price1"></yd-spinner>
          <span class="_font">到</span>
          <yd-spinner max="100" v-model="price2" @input="input_price2"></yd-spinner>
        </span>
      </yd-cell-item> -->

      <AddressPick />

      <yd-cell-item>
        <span slot="left">时间之前</span>
        <yd-datetime type="date" slot="right" v-model="datetime" :callback="date_callback"></yd-datetime>
      </yd-cell-item>
    </yd-cell-group>

    <yd-button size="large" type="primary" @click.native="click_search">搜索</yd-button>

  </yd-layout>
</template>
<script>
import Vue from "vue";
import AddressPick from "./addressPick";
import { actionTypes } from "../vuex/store";
import { fetch_good_search } from "../../util/fetch";
import { dateFtt } from "../../util/util";
var { set_search_option } = actionTypes;
export default {
  data() {
    return {
      value1: "",
      price1: 0,
      price2: 10,
      datetime: dateFtt("yyyy-MM-dd", new Date())
    };
  },
  mounted() {
    this.$dispatch(set_search_option, {
      search_option: {
        max_price: 0,
        min_price: 0,
        title: "",
        address_sheng: "",
        address_shi: "",
        address_xian: "",
        time: "",
        s_s_x: ""
      }
    });
  },
  methods: {
    click_search() {
      var self = this;
      fetch_good_search({
        data: self.$state.search_option,
        success(res) {
          var resJson = JSON.parse(res);
          var { set_index_lists } = self.$actionTypes;
          self.$dispatch(set_index_lists, { index_lists: resJson });
          self.$router.go(-1);
        }
      });
    },
    title_input(value) {
      this.$dispatch(set_search_option, {
        search_option: {
          title: value
        }
      });
    },
    date_callback(value) {
      if (value) {
        this.$dispatch(set_search_option, {
          search_option: {
            time: value
          }
        });
      }
    },
    input_price1(value) {
      this.$dispatch(set_search_option, {
        search_option: {
          min_price: value
        }
      });
    },
    input_price2(value) {
      this.$dispatch(set_search_option, {
        search_option: {
          max_price: value
        }
      });
    }
  },
  components: {
    AddressPick
  }
};
</script> 
<style  scoped>
._font {
  position: relative;
  top: -8px;
}
</style>


