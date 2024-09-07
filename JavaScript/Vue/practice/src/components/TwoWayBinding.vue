<template>
<h1>################ Two way Binding ############</h1>
<input type="text" v-model="count"/>
<h2>Click Count {{count}}</h2>

</template>

<script>
    export default{
        name:"TwoWayBinding", 
        data()  {
            return {
                count:10
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
