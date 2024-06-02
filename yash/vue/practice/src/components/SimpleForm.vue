<template>
<h1>################ Simple Form Component ############</h1>
<p>{{form}}</p>
<form>
    <label>Email : </label>
    <input type="text" Placeholder="Enter Email" v-model="form.email" /><br>
    <label>Password : </label>
    <input type="password" Placeholder="Enter Password" v-model="form.password" /><br>
    <button type="button" v-on:click="logIn">Login</button>
</form>
</template>

<script>
export default {
    name: "SimpleForm",

    data() {
        return {
            form: {
                email: "",
                password: "",
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
