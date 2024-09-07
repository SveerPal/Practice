<template>
<h1>################ Form Validation Component ############</h1>
<p>{{form}}</p>
<ul>
<li v-for="item in error " v-bind:key="item">
{{item}} not valid
</li>
</ul>
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
    name: "FormValidation",

    data() {
        return {
            form: {
                email: "",
                password: "",
                country:"",
                technolgy:[],
                gender:"",
            },
            error:[]
        }
    },
    methods: {
        logIn() {
            this.error=[]
            for(const item in this.form){
                if(this.form[item]===""|| this.form[item].length===0){
                    this.error.push(item)
                }
            }
            if(this.error.length===0){
                alert("data is valid")
            }
            console.log(this.form,this.error)
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
