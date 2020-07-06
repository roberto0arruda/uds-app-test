import api from '@/services/api'

const RESOURCE = '/produtos'

const state = {
    data: []
}

const actions = {
    getProdutos ({ commit }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando Produtos')

        return api.get(RESOURCE)
            .then(response => commit('SET_PRODUTOS', response.data))
            .finally(() => commit('SET_PRELOADER', false))
    }
}

const mutations = {
    SET_PRODUTOS (state, produtos) {
        state.data = produtos
    }
}

export default {
    state, actions, mutations
}