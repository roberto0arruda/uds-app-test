import Vue from 'vue'
import App from './App'
import DefaultTemplate from './layouts/DefaultTemplate.vue'

import router from './routes'
import store from './store'

import '@/plugins/element-ui'
import '@/plugins/vue-toastify'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

/**
 * Global Components
 */
Vue.component('preloader-component', () => import('./components/Preloader.vue'))

new Vue({
  render: function (h) { return h(App) },
  router,
  vuetify,
  store
}).$mount('#app')
