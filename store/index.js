export const state = () => ({
    dialog:{
        isShow: false,
        title: '',
        message: ''
    },
    register:{
        Firstname: '',
        Lastname: '',
        gender: 1,
        email: '',
        phone: '',
        birthday: new Date().toISOString().substr(0, 10),
        company: '',
        position: ''
    },
    line: {
        profileUrl: null,
        displayName: null,
        userId: null
    }
})

export const getters = {
    getRegister(state){
        return state.register
    },
    getDialog(state){
        return state.dialog
    },
    getLine(state){
        return state.line
    }
}

export const mutations = {
    SET_REGISTER(state, data){
        state.register = {
            ...state.register,
            ...data
        }
    },
    SET_DIALOG(state, data){
        state.dialog = {
            ...state.dialog,
            ...data
        }
    },
    SET_LINE(state, data){
        state.line = {
            ...state.line,
            ...data
        }
    }
}

export const actions = {
    setRegister({commit}, data){
        commit('SET_REGISTER', data)
    },
    setDialog({commit}, data){
        commit('SET_DIALOG', data)
    },
    setLine({ commit }, data){
        commit('SET_LINE', data)
    }
}