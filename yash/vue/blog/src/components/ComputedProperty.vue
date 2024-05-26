<template>
<h1>################ Computed Property Component ############</h1>
// By data normal
<h3>{{(dollors*ruppe)-discount}}</h3>
 //By mehthod property 
<h3>{{getResults}}</h3>
 //By Cumputed method #Wiil improve speed
<h3>{{getResults}}</h3>
</template>

<script>
export default {
    name: "ComputedProperty",
    data() {
        return {

            dollors: 100,
            ruppe: 70,
            discount: 10,

        }
    },
    methods: {
        getResultsMethod() {
            return (this.dollors * this.ruppe) - this.discount
        }
    },
    computed: {
        getResults() {
            return (this.dollors * this.ruppe) - this.discount
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
