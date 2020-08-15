import Vue from 'vue'
import App from './App'

import store from './store'

import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

/**
 * Global Components
 */
Vue.component('preloader-component', () => import('./components/Preloader.vue'))

new Vue({
  render: function(h) {
    return h(App)
  },
  router,
  vuetify,
  store
}).$mount('#app')
