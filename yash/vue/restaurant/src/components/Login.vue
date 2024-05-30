<template>
<div class="container">
    <h1 class="">Log In</h1>
    
    <input type="email" name="email" placeholder="Email" v-model="email" />
    <input type="password" name="password" placeholder="Password" v-model="password" />
    <button v-on:click="logIn()" class="bg-orange text-white">Log In</button>
    <a href="/signup">Sign Up</a>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            
            email: "",
            password: ""
        }
    },
    methods: {
        async logIn() {
          //console.log(this.email,this.password);
            let result= await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`
              
            );
            console.log(result)
            if(result.status==200 && result.data.length>0){
              //alert("ffff")
            
              localStorage.setItem("user-info",JSON.stringify(result.data[0]))
              this.$router.push({name:"Home"})
            }  
        }
    },
    mounted(){
      let user = localStorage.getItem("user-info")
      //console.log(user)
      if(user){
        this.$router.push({name:"Home"})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
</style>
