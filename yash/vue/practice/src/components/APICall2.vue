<template>
<h3>################ List With API Data Component ############</h3>
<h5>################ User Data  ############</h5>
<ul class="item" v-for="item in list" :key="item.id">
<li>{{item.id}}</li>
<li>{{item.email}}</li>
<li>{{item.first_name}}{{item.last_name}}</li>
<li><img :src="item.avatar"/></li>
</ul>

</template>

<script>
import axios from 'axios'
export default {
    name: "APICall2",
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        let results= await axios.get("https://reqres.in/api/users?page=1")
        console.log("API data",results.data.data);
        this.list=results.data.data
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
.item {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  
}
</style>


