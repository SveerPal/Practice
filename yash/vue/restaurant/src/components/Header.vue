<template>
<div class="nav">
    
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurent</router-link>
    <router-link to="/">About</router-link>
    <router-link to="/">Contact</router-link>
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
    padding: 20px 0px;
    margin: 0px;

}

.nav a {
    color: #f69202;
    text-decoration: none;
}
</style>
