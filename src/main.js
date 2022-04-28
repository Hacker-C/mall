import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './assets/css/base.less'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// TIP fastclick 移动端click事件300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
