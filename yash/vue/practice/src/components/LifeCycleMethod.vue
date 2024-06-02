<template>
<h1>################ Life Cycle Method ############</h1>

<h3>Before Created and Created </h3>
<p>{{name}}</p>
</template>

<script>
 
export default {
    name: "LifeCycleMethod",
    beforeCreate(){
        this.name="Yashvir"
        alert("Before Create Component")
    },
    created(){
        this.name="Yashvir Pal"
        alert("Created Component")
    },
    
    data() {
       console.log("Created")
       
       return{
          
            name:"Yash"
       }
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
