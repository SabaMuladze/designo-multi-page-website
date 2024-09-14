import { createStore } from "vuex"
const store = createStore({
    state(){
        return{
        hamburger:false
        }
    },
    getters:{
        hamburger(state){
        return state.hamburger
        }
    },
    mutations:{
        toggleMutation(state){
         state.hamburger = !state.hamburger
    },
    hamburgerFalse(state){
        state.hamburger = false
    }
},
actions:{
        toggleHam({commit}){
            commit('toggleMutation')
        },
        hamburgerFalse({commit}){
            commit('hamburgerFalse')
        }
    },
})

export default store