<template>
<h3>################ API Call Component ############</h3>
<p v-for="item in list" :key="item">
{{item.id}}----
{{item.email}}----

</p>
</template>

<script>
import axios from 'axios'
export default {
    name: "APICall",
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
</style>


