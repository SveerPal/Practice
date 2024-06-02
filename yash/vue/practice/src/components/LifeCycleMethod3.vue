<template>
<h1>################ Life Cycle Method ############</h1>

<h3>BeforeUpdate  and Updated </h3>
<p ref="count">{{counter}}</p>
<button v-on:click="counter=counter+1">Update Counter</button>
</template>

<script>
export default {
    name: "LifeCycleMethod3",
    data() {
       
        return {
            counter: 0
        }
    },
    beforeUpdate() {
        //console.log("Before Update",this.counter)
        console.log("Before Update",this.$refs['count'].textContent)
    },
    updated() {
        console.log("Update",this.counter)
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
