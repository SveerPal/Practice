import {createWebHistory,createRouter, createMemoryHistory} from 'vue-router'
import Home from  "./components/Home.vue"
import Login from  "./components/Login.vue"
import Profile from  "./components/Profile.vue"
import PageNotFound from  "./components/PageNotFound.vue"

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
        path: '/profile/:name', 
        component: Profile,
        name:"profile"
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: PageNotFound,
        name:"NotFound"
    },
    
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router