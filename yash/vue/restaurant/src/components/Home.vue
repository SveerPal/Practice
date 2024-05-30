<template>
<Header/>
<div class="container">
    <h1 class="">Welcome to Home</h1>
   
</div>
<Footer/>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    name: 'Home',
    components:{
        Header,
        Footer,
    },
    mounted(){
      let user = localStorage.getItem("user-info")
      //console.log(user)
      if(!user){
        this.$router.push({name:"Signup"})
      }
    },
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!--<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #f69202;
    padding: 3% 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 30%;
    margin-left: 35%;
}

input {
    border-radius: 5px;
    height: 30px;
    width: 200px;
    padding: 5px
}

button {
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
    box-shadow: none;
    width: 100px;
}

.bg-orange {
    background: #f69202;
}

.text-white {
    color: #fff
}

.text-orange {
    color: #ff6c00
}
</style>-->
