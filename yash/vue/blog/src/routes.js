import {createWebHistory,createRouter, createMemoryHistory} from 'vue-router'
import Home from  "./components/Home.vue"
import Login from  "./components/Login.vue"
import Profile from  "./components/Profile.vue"

const routes=[
    { 
        path: '/', 
        component: Home,
        name:"home"
    },
    { 
        path: '/login', 
        component: Login,
        name:"login"
    },
    { 
        path: '/profile', 
        component: Profile,
        name:"profile"
    },
    
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router