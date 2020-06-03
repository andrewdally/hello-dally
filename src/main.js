import Vue from 'vue'
import App from './App.vue'
import router from './router'
import sites from './sites'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$sites = sites;
