import { createStore } from "vuex/types/index.js";

const store = createStore({
    state:{
        return:{
        hamburger:true
        }
    },
    getters:{
        hamburger(state){
            return state.hamburger
        }
    },
    mutations:{
        toggleHam(state){
        state.hamburger = !state.hamburger
    }
    
},
})