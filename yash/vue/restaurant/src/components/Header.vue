<template>
<div class="nav">
    <a href="/">Home</a>
    <a href="/">Add Restaurent</a>
    <a href="/">Update Restaurent</a>
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
        logout(){
            //localStorage.clear()
            localStorage.removeItem("user-info")
            this.$router.push({name:"Login"})
        }
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
body {
  margin: 0px;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: black;
  padding: 20px 0px;
   margin:0px;
    
}
.nav a {
    color:#f69202;
    text-decoration:none;
}
</style>
