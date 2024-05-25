T<template>
 <h1>################ Teacher Component ############</h1>
{{name}}
</template>

<script>
export default {
    name: "Teacher",
   
    props: {
        name: Object,
        getDataForRepeat: Function,
    }

}
</script>


<style scoped>
h3 {
    color: orange;
}

</style>
