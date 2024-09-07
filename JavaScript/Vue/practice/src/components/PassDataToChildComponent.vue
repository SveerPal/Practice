<template> 
<h1>################ Pass Data To Child Component ############</h1>
<Child name="Yash Pal" :users="users" :getData="getData"/>


<ul>
    <li v-for="item in userForRepeat" :key="item.name">
    <Repeat :data="item" :getDataForRepeat="getDataForRepeat"/>
    </li>
</ul>

</template>

<script>
import Child from './Child.vue'
import Repeat from './Repeat.vue'
export default {
    name: "PassDataToChildComponent ",
    components:{
        Child,
        Repeat
    },
    data() {
        return {           
            users:
                {
                    name:"Yash",
                    email:"yash@codenskills.com"
                },
            userForRepeat:[
                {
                    name:"Yash",
                    email:"yash@codenskills.com"
                },{
                    name:"AK",
                    email:"ak@codenskills.com"
                }        
            ] 
            
        }
    },
    methods:{
        getData(){
            //return{
                console.log("eeeeeeeeeeee")
            //}
        },
        getDataForRepeat(name){
            alert(name)
        }
        
    },
   
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
