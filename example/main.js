import Vue from 'vue'
import App from './App.vue'
import SoramitsuVuetifyPlugin from 'soramitsu-vuetify-plugin'

Vue.config.productionTip = false

Vue.use(SoramitsuVuetifyPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
