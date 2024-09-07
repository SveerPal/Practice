<template>
<h1>################ Simple Form 2 Component ############</h1>
<p>{{form}}</p>
<form>
    <label>Email : </label>
    <input type="text" Placeholder="Enter Email" v-model="form.email" /><br><br>
    <label>Password : </label>
    <input type="password" Placeholder="Enter Password" v-model="form.password" /><br><br>
    <label>Country : </label>
    <select   v-model="form.country" >
    <option>India</option>
    <option>China</option>
    <option>Russia</option>
    </select><br><br>
    <label>Gender : </label>
    <input type="radio" name="gender" value="Male" v-model="form.gender" />Male
    <input type="radio" name="gender" value="FeMale" v-model="form.gender" />FeMale<br><br>
    <label>Technolgy : </label>
    <input type="checkbox" value="Java" v-model="form.technolgy" />Java
    <input type="checkbox" value="PHP" v-model="form.technolgy" />PHP
    <input type="checkbox" value="Node" v-model="form.technolgy" />Node<br><br>
    <button type="button" v-on:click="logIn">Login</button>
</form>
</template>

<script>
export default {
    name: "SimpleForm2",

    data() {
        return {
            form: {
                email: "",
                password: "",
                country:"",
                technolgy:[],
                gender:"",
            }
        }
    },
    methods: {
        logIn() {
            console.log('login data', this.form)
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
