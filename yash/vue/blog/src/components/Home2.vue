<template>
<h3 v-on:mousemove="getConsole()">Home 2 Template </h3>

<h1>################ Using Event ############</h1>
<button v-on:click="getData('button single click')">Click Me</button>
<button v-on:dblclick="getData('button double click')">Click Me</button>
<h2>Click Count {{count}}</h2>

</template>

<script>
    export default{
        name:"Home2", 
        data()  {
            return {
                count:0
            }
        },     
        methods:{
            getData(data){
                //alert(data)
                this.count=this.count+1
            },
            getConsole(){
                console.log("ddddddddddd")
            }
           
        }
    }
</script>
<style scoped>
    h3{
        color:orange;
    }
</style>
