import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import BlocksModule from './modules/blocks'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
let store
store = new Vuex.Store({
            modules: {
                BlocksModule
            },
            plugins: [createPersistedState({
                key: 'blocks',
                paths: ['BlocksModule.isWebSocketToggleOn']
            })]
        })
export default store;