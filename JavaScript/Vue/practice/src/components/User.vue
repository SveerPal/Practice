<template>
<h1>################ User Component ############</h1>
<button v-on:click="getUser(userName)">Send Your Name</button>
</template>

<script>
export default {
    name: "User",
    props:{
        getUser:Function
    },
    data() {
        return {
            userName: "Coden Skills",
        }
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
