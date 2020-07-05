import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import produtos from './modules/produtos'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    modules: {
        produtos
    },
})

export default store