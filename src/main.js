// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 可以通过这种方式注册一个全局组件
// Vue.component('my-header', {
//   template: '<p>this is my first header component</p>'
// })

const myHeader = {
  template: '<p>this is my first header component</p>'
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, myHeader},
  template: '<App/>'
})
