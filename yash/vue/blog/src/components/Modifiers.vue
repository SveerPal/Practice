<template>
<h1>################ Form Modifiers Component ############</h1>
<!--
<input type="text" Placeholder="Enter Email" v-model="data" /><br><br>
<input type="text" Placeholder="Enter Email" v-model.lazy="data" /><br><br>
<input type="text" Placeholder="Enter Email" v-model.trim="data" /><br><br>
<p>Data is:{{data}} {{typeof(data)}}</p>
<input type="number" Placeholder="Enter Email" v-model.number="data" /><br><br>
-->
<input type="number" Placeholder="Enter Email" v-model.number.lazy="data" /><br><br>

<p>Data is:{{data}} {{typeof(data)}}</p>
<button type="button" v-on:click="logIn">Login</button>
</template>

<script>
export default {
    name: "Modifiers",

    data() {
        return {

            data: "",

        }
    },
    methods: {
        logIn() {

            console.log("")
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
