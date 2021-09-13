import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import BlocksModule from './modules/blocks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        BlocksModule
    }
})