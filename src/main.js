import 'babel-polyfill'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'

import './scss/reset.scss'

Vue.config.productionTip = false

const vm = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})