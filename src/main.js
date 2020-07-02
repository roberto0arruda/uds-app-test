import Vue from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate.vue'

import router from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(DefaultTemplate),
  router
}).$mount('#app')
