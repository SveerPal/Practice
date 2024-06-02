<template> 
<h1>################ Child Component ############</h1>

Pass Data To Child Component File<br><br>
#Get Parameter
<h3>Pass Parameter and Get {{name}}</h3><br>
#Get Object<br>
{{users}}
<p>{{users.name}}</p><br>
#Get Function<br>
<button v-on:click="getData">Click</button>
</template>

<script>
export default {
    name: "Child ",
    props:{
        name:String,
        users:Object,
        getData:Function
    }
   
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
