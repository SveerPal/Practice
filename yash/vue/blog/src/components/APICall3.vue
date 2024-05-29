<template>
<h3>################ Send API Data With POST Method Component ############</h3>
<input type="text" name="email" v-model="email" /><br /><br />
<input type="password" name="password" v-model="password" /><br /><br />
<button v-on:click="addUser()">Add User</button>
</template>

<script>
import axios from 'axios'
export default {
    name: "APICall3",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async addUser() {
            console.log(this.email, this.password)
            let result = await axios.post("https://reqres.in/api/register", {

                "email": this.email,
                "password": this.password

            })
            console.log("Register data= ",result)
        }
    },
    async mounted() {

        let results = await axios.get("https://reqres.in/api/users?page=1")
        //console.log("API data", results.data.data);
        this.list = results.data.data
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}

.item {
    list-style: none;
    display: flex;
    justify-content: space-evenly;

}
</style>
