<template> 
<h1>################ Reuse Component ############</h1>
<h3>{{data.name}}</h3>
<h3>{{data.email}}</h3>
<button v-on:click="getDataForRepeat(data.name)">Alert Name</button>
</template>

<script>
export default {
    name: "Repeat",
    props:{
        data:Object,
        getDataForRepeat:Function,
    }
   
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
