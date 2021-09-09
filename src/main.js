import Vue from 'vue'
import App from './pages/Main.vue'
import router from './router'
import axios from 'axios'


export default () => {

  return axios.create({
    baseURL: ''             
  })
}


Vue.config.productionTip = false

new Vue({

  router,
  render: h => h(App)

}).$mount('#app')
