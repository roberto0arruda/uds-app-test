import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import produtos from './modules/produtos'
import sabores from './modules/sabores'
import adicionais from './modules/adicionais'
import pedidos from './modules/pedidos'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    modules: {
        produtos,
        sabores,
        adicionais,
        pedidos
    },
})

export default store