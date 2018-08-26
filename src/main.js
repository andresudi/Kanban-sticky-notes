import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import './firebase'

Vue.use(BootstrapVue)
Vue.use(VueFire)

new Vue({
  el: '#app',
  render: h => h(App)
})
