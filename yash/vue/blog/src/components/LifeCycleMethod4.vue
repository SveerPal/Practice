<template>
<h1>################ Life Cycle Method ############</h1>

<h3>BeforeUnmount  and unmounted </h3>

<button v-on:click="show=!show">Toggle</button>
<LifeCycleMethodUser v-if="show"/>
</template>

<script>
import LifeCycleMethodUser from "./LifeCycleMethodUser.vue"
export default {
    name: "LifeCycleMethod4",
    components:{
        LifeCycleMethodUser
    },
    data() {
       
        return {
            show: true
        }
    },
    

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
