// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App"
import ElementUI from "element-ui"
import VuePhotoZoomPro from "vue-photo-zoom-pro"
import "element-ui/lib/theme-chalk/index.css"
import router from "./router"
import store from "./store"
import axios from "axios"
Vue.use(VuePhotoZoomPro)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.axios=axios
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
 next()
})
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  axios,
  components: { App },
  template: "<App/>"
})
