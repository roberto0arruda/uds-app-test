import actions from './actions'

const state = {
    data: []
}

const mutations = {
    SET_PRODUTOS (state, produtos) {
        state.data = produtos
    }
}

export default {
    state, actions, mutations
}