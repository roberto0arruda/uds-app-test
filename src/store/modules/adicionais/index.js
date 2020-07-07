import api from '@/services/api'

const RESOURCE = '/adicionais'

const state = {
    data: []
}

const actions = {
    getAdicionais ({ commit }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando adicionais')

        return api.get(RESOURCE)
            .then(response => commit('SET_ADICIONAIS', response.data))
            .finally(() => commit('SET_PRELOADER', false))
    }
}

const mutations = {
    SET_ADICIONAIS (state, adicionais) {
        state.data = adicionais
    }
}

export default {
    state, actions, mutations
}