import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
        el: '#app',
        render: h => h(App)
})
