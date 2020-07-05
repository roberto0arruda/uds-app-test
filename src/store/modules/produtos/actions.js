import api from '@/services/api'

const RESOURCE = '/produtos'

export default {
    getProdutos ({ commit }) {
        return api.get(RESOURCE)
            .then(response => commit('SET_PRODUTOS', response.data))
    }
}