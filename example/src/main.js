import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SoramitsuVuetifyPlugin from 'soramitsu-vuetify-plugin'

Vue.config.productionTip = false
Vue.use(SoramitsuVuetifyPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
