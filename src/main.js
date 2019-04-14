import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'font-awesome/css/font-awesome.css'
import './plugins/element.js'
import nav from './views/navHeader.js';
Vue.use(nav);
Vue.config.productionTip = false

new Vue({
  alert,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
