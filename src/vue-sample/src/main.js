import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


Vue.config.errorHandler = function (err, vm, info) {
  console.log('errorHandle:', err)
  unloadError({ error: err })
}

window.addEventListener('error', args => {
  console.log('error', args)
  unloadError(args)
  return true
}, true)

function unloadError({ lineno, colno, error: { stack }, timeStamp, message, filename }) {
  const info = { lineno, colno, stack, timeStamp, message, filename }
  // const str = new Buffer(JSON.stringify(info)).toString('base64')
  const str = window.btoa(JSON.stringify(info))
  const host = 'http://localhost:7001/monitor/error'
  new Image().src = `${host}?info=${str}`
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
