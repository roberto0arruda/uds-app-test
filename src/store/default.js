export const state = {
    preloder: false,
    textPreloader: 'Carregando...'
}

export const mutations = {
    SET_PRELOADER (state, status) {
        state.preloder = status
        state.textPreloader = 'Carregando...'
    },

    SET_TEXT_PRELOADER (state, text) {
        state.textPreloader = text
    }
}