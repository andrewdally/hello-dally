import Vue from 'vue'
import App from './App.vue'
import router from './router'
import sites from './sites'
import VueMobileDetection from 'vue-mobile-detection'

Vue.config.productionTip = false

Vue.use(VueMobileDetection)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$sites = sites;
