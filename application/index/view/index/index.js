import Vue from 'vue'
import Vuex from 'vuex';
import App from './app.vue'
import VueRouter from 'vue-router'
import { store } from './vuex/store'

import Tai from '../components/tai.js'
Vue.use(Tai)

const routes = [
    {
        path: '/app', component: App,
    },
    {
        path: '/button',
        component: require('./example/button').default
    },
    {
        path: '/dialog',
        component: require('./example/dialog').default
    },
    {
        path: '/nostop_list',
        component: require('./example/nostoplist').default
    },
    {
        path: '/nostop_list',
        component: require('./example/nostoplist').default
    },
    {
        path: '/nostop_list2',
        component: require('./example/nostop_list2.vue').default
    },
    {
        path: '/pick',
        component: require('./example/pick').default
    },
    {
        path: '/date-picker',
        component: require('./example/datePick').default
    },
    {
        path: '/datetime-picker',
        component: require('./example/datetime.vue').default
    },
    {
        path: '/swiper',
        component: require('./example/swiper.vue').default
    },
    {
        path: '/infinitescrollist2',
        component: require('./example/InfiniteScroll2.vue').default
    },
    {
        path: '/cell',
        component: require('./example/cell.vue').default
    },
    {
        path: '/',
        redirect: '/app'
    },

]
var router = new VueRouter({
    routes
})


const $vm = new Vue({
    el: "#root", router, store
    // template: "<User/>",
    // components: { User },
})

