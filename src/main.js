import Vue from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate.vue'

import router from './routes'

import '@/plugins/element-ui'

Vue.config.productionTip = false

/**
 * Global Components
 */
Vue.component('preloader-component', () => import('./components/Preloader.vue'))

new Vue({
  render: h => h(DefaultTemplate),
  router
}).$mount('#app')
