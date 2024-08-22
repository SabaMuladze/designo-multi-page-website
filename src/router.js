import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Locations from './components/Locations.vue'
import WebDesign from './components/WebDesign.vue'
import GraphicDesign from './components/GraphicDesign.vue'
import AppDesign from './components/AppDesign.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',component:Home},
        {path:'/home',component:Home},
        {path:'/about',component:About},
        {path:'/contact',component:Contact},
        {path:'/locations',component:Locations},
        {path:'/webdesign',component:WebDesign},
        {path:'/appdesign',component:AppDesign},
        {path:'/graphicdesign',component:GraphicDesign},
    ]
})

export default router