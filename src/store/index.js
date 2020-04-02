import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
import state from "../modues/state.js"
import getters from "../modues/getters.js"
import actions from "../modues/actions.js"
import mutations from "../modues/mutations.js"
export default new Vuex.Store({
    state:{
        a:1
    },
    getters: {
        getA(state){
            return state.a;
        }
    },
    mutations:{
        // 加的方法
        add2(state,n){
            state.a+=n;
        },
        add1(state,n){
            setTimeout(() => {
                state.a+=n;
            }, 1000);
        },
        // 减的方法
        minus2(state,payload){
            state.a-=payload.n;
        }
    },
    actions:{
        // 加的方法
        add3(context,n){
            context.commit("add2",n)
        },
        // 减的方法
        minus3({commit},payload){
            commit("minus2",payload);
        }

    },
    modules: {
        state,
        getters,
        actions,
        mutations
    }
})