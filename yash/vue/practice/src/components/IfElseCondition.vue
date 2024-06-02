<template> 
<h1>################ If Else ############</h1>

<h4 v-if="show">If</h4>
<h4 v-else>else</h4>

<button v-on:click="show=!show">Toggle</button>

<h4 v-if="show2">I am ddddddddd</h4>
</template>

<script>
export default {
    name: "IfElseCondition",
    data() {
        return {
            show: true,
            //show: false,
            show2:false,
        }
    },
   
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
