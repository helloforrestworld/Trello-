// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import 'semantic-ui-css'
import loadPng from './assets/image/no-result@3x.png'

Vue.use(VueLazyLoad, {
  loading: loadPng,
  preLoad: 1.3
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
