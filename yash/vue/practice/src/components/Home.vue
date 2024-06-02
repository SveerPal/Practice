<template>
<h3>Home Template </h3>
<h3>Total {{10+10}}</h3>
<h3>String Length Is {{"Yash Pal".length}}</h3>
<h1>################ Using Data Property ############</h1>
<h3>Email is {{email}}</h3>
<h3>Phone is {{phone}}</h3>
<h3>Phone is {{phone=8888888888}}</h3>
<h3>Phone is {{phone==8888888888}}</h3>
<h3>Name is {{getName()}}</h3>
<h3>Name 2 is {{getName2("Yash")}}</h3>
<h1>################ Using Methods ############</h1>
<h3>Name  {{getName11()}}</h3>
<h3>Name  {{getName22("Codenskills")}}</h3>
<h3>Get all Data  {{getData()}}</h3>
<h3>Get Data Name  {{getData().name}}</h3>
<h1>################ Using this keyword with Methods ############</h1>
<h3>Using This Get Data Email  {{getData2().email}}</h3>



</template>

<script>
    export default{
        name:"Home",
        data(){
            return{
                email:"yash@codenskill.com",
                phone:999999999999,
                getName:function(){
                    return "Yash Pal"
                },
                getName2:function(a){
                    return a
                }
            }
        },
        methods:{
            getName11(){
                return "yashvir"
            },
            getName22(name){
                return name
            },
            getData(){
                return {
                    name:"Akhil",
                    email:"ak@test.com"
                }
            },
            getData2(){
                return {
                    email:this.email, 
                }
            }
        }
    }
</script>
<style scoped>
    h3{
        color:orange;
    }
</style>
