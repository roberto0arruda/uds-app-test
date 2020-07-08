import api from '@/services/api'

const RESOURCE = '/sabores'

const state = {
    data: []
}

const actions = {
    getSabores ({ commit }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando Sabores')

        return api.get(RESOURCE)
            .then(response => commit('SET_SABORES', response.data))
            .finally(() => commit('SET_PRELOADER', false))
    }
}

const mutations = {
    SET_SABORES (state, sabores) {
        state.data = sabores
    }
}

export default {
    state, actions, mutations
}