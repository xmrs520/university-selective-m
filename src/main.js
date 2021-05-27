import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 用于设置 rem 基准值
import 'amfe-flexible'
// 一款 postcss 插件，用于将单位转化为 rem
import './styles/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
