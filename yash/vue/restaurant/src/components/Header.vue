<template>
<div class="nav">
    
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurent</router-link>
    
    <a v-on:click="logout" href="javascript:void(0)">Logout</a>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Header',
    data() {
        return {

            email: "",
            password: ""
        }
    },
    methods: {
        logout() {
            //localStorage.clear()
            localStorage.removeItem("user-info")
            this.$router.push({
                name: "Login"
            })
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: black;
    padding: 25px 0px;
    margin: 0px;
    height:40px;

}

.nav a {
    color: #f69202;
    text-decoration: none;
}
.nav a:hover{
    color: #000;
    background: #f69202;
    padding:5px;
    border-radius:5px;
}
</style>
