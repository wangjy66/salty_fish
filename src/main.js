import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BScroll from 'better-scroll'
Vue.config.productionTip = false
// Vue.prototype.test = function () {
//   console.log('test');
// }//this.test()所有组件都多了一个这个方法
// Vue.prototype.$store = store // 挂载后实现了这个

new Vue({
  router,
  store,
  BScroll,
  render: h => h(App)
}).$mount('#app')
