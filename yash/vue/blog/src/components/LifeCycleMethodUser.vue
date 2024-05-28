<template>
<h1>################ Life Cycle Method ############</h1>

<h3 ref="user">User BeforeUnmount  and unmounted user life cycle method </h3>

</template>

<script>
export default {
    name: "LifeCycleMethodUser",
    data() {
       
        return {
            counter: 0
        }
    },
    beforeUnmount() {
        console.log("Before Unmount",this.$refs['user'])
    },
    unmounted() {
        console.log("Unmounted",this.$refs['user'])
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
