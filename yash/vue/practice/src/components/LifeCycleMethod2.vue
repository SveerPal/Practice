<template>
<h1>################ Life Cycle Method ############</h1>
$el Templte Setion in component 
<h3>Before Mount and Mount </h3>
<p>{{name}}</p>
</template>

<script>
export default {
    name: "LifeCycleMethod2",
    data() {
        console.log("Created")

        return {

            name: "Yash"
        }
    },
    beforeMount() {
       
        console.log("Before Mount Component",this.$el)
    },

    mounted() {
        console.log("Before Moun Component",this.$el)
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
