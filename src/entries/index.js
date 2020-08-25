import Vue from 'vue'
import App from '@/pages/index.vue'
import router from '@/router'
import store from '@/store'

/*import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)*/

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);


Vue.config.productionTip = false


// vue原型挂载 - 是否PC端
// vue原型挂载 - 是否PC端
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  Vue.prototype.$pc = false
  hostConfig.vconsole && new VConsole()
} else {
  Vue.prototype.$pc = true
  let winWidth = document.documentElement.offsetWidth ||
    document.body.offsetWidth
  winWidth = winWidth < 1366 ? 1366 : winWidth
  let oHtml = document.getElementsByTagName('html')[0]
  oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'
  window.addEventListener('resize', function () {
    let winWidth = document.documentElement.offsetWidth || document.body.offsetWidth
    winWidth = winWidth < 1366 ? 1366 : winWidth
    let oHtml = document.getElementsByTagName('html')[0]
    oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'
  })
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')