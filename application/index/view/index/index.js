import Vue from 'vue'
import Vuex from 'vuex';
import App from './app.vue'
import Add from './add.vue'
import Search from './index/search'
import VueRouter from 'vue-router'
import { store } from './vuex/store'

import YUI from 'vue-ydui/dist/ydui.px.js'
Vue.use(YUI)
const routes = [
    {
        path: '/app', component: App,
    },
    {
        path: '/add', component: Add,
    },
    {
        path: "/search", component: Search,
    },
    {
        path: "/user", component: require('./user.vue').default,
    },
    {
        path: "/login", component: require('./login.vue').default,
    },
    {
        path: "/detail", component: require('./detail.vue').default,
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

