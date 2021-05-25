import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './request'
import Url from './request/url'
import 'view-design/dist/styles/iview.css'
import VueDND from 'awe-dnd'
Vue.use(VueDND)


import { Message } from 'view-design'

Vue.prototype.$Message = Message
Vue.prototype.$axios = axios
Vue.prototype.$url = Url



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')