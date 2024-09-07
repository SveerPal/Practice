<template>
<h3>################ Profile Component ############</h3>
<h3>################ {{profile}} Profile Component ############</h3>
<p></p>
</template>

<script>
import {useRoute} from 'vue-router';
export default {
    name: "Profile",
    data(){
        return{
            profile:""
        }
    },
    mounted(){
        const route=useRoute();
        //console.log(route)
        console.log(route.params.name)
        this.profile=route.params.name
    }
   

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
