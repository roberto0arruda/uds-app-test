import api from '@/services/api'

const RESOURCE = '/pedidos'

const state = {
    data: [],
    pedido: {
        produto: {
            nome: ''
        }
    }
}

const actions = {
    getPedidos ({ commit }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando pedidos...')

        return api.get(RESOURCE)
            .then(response => commit('SET_PEDIDOS', response.data))
            .finally(() => commit('SET_PRELOADER', false))
    },

    postPedidos ({ dispatch, commit }, pedido) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Realizando pedido...')

        return api.post(RESOURCE, pedido)
            .then(() => {
                commit('RESET_PEDIDO')
                dispatch('getPedidos')
            })
            .finally(() => commit('SET_PRELOADER', false))
    }
}

const mutations = {
    SET_PEDIDOS (state, pedidos) {
        state.data = pedidos
    },

    RESET_PEDIDO (state) {
        Object.assign(state.pedido, { produto: { nome: '' } })
    },

    SET_SELECT_PRODUTO (state, produto) {
        Object.assign(state.pedido, { produto })
    },

    SET_SELECT_SABOR (state, sabor) {
        Object.assign(state.pedido, { sabor })
    },

    SET_SELECT_ADICIONAIS (state, adicionais) {
        Object.assign(state.pedido, { adicionais })
    }
}

const getters = {
    qtdPedidos (state) {
        return state.data.length
    }
}

export default {
    state, actions, mutations, getters
}