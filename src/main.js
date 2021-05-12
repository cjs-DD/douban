import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './icon/icon.css'
import './icon/styles.css'
import store from './store'
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
