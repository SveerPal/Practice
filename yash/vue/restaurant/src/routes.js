import {createRouter,createWebHistory} from 'vue-router'


import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'

const routes=[
    {
        name:"Home",
        component:Home,
        path:"/"
    },
    {
        name:"Signup",
        component:Signup,
        path:"/signup"
    },
    {
        name:"Login",
        component:Login,
        path:"/login"
    },
    {
        name:"AddRestaurant",
        component:AddRestaurant,
        path:"/add-restaurant"
    },
    {
        name:"UpdateRestaurant",
        component:UpdateRestaurant,
        path:"/update-restaurant/:id"
    },

]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router