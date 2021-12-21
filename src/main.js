import Vue from 'vue'
import App from './pages/Main.vue'
import router from './router'
import store from './store'
import BlocksModule from './store/modules/blocks'
import VueWebSocket from 'vue-native-websocket'

if (BlocksModule.state.isWebSocketToggleOn === true) {
  Vue.use(VueWebSocket, "ws://localhost:1337", { store })
  store.$socket = Vue.prototype.$socket
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')