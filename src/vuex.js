import { createStore } from "vuex"
const store = createStore({
    state(){
        return{
        hamburger:true
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
},
actions:{
        toggleHam({commit}){
            commit('toggleMutation')
        }
    },
})

export default store