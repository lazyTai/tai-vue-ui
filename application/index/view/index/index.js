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

