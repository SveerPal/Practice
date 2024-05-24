<template>
<h1>################ Get Input Field Value ############</h1>
<input type="text" v-model="email"/><br/><br/>
<input type="text" v-model="password"/><br/><br/>
<button v-on:click="getData()" type="button">Get Value</button>

</template>

<script>
    export default{
        name:"GetInputFieldValue", 
        data()  {
            return {
                email:null,
                password:null
            }
        },     
        methods:{
            getData(data){
                //alert(data)
                console.log(this.email,this.password)
            }
           
        }
    }
</script>
<style scoped>
    h3{
        color:orange;
    }
</style>
