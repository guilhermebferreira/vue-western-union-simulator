import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import fontawesome from './plugins/fontawesome'

Vue.config.productionTip = false

new Vue({
  vuetify,
  fontawesome,
  render: h => h(App)
}).$mount('#app')
