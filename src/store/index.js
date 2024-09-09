import { createStore } from 'vuex'

export default createStore({
    state: {
        showHeader: true,
    },
    getters: {
        SHOW_HEADER: state => {
            return state.showHeader
        }
        // USER: state => {
        //     return state.user
        // }
    },
    mutations: {
        SET_SHOW_HEADER: (state, payload) => {
            state.showHeader = payload
        }
        // SET_AVATAR: (state, payload) => {
        //     state.avatar = payload
        // },
    },
    actions: {
        SET_SHOW_HEADER: (context, payload) => {
            context.commit('SET_SHOW_HEADER', payload)
        }
        // SET_AVATAR: (context, payload) => {
        //     context.commit('SET_AVATAR', payload);
        // },
    },
    modules: {}
})
