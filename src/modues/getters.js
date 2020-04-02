export default {
    getters: {
        getB(state, getters, rootState, rootGetters){
            return rootState.state.b
        }
    }
}