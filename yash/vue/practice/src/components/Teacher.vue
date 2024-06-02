T<template>
 <h1>################ Teacher Component ############</h1>
{{name}}
</template>

<script>
export default {
    name: "Teacher",
   
    props: {
        name: String,
       
    }

}
</script>


<style scoped>
h3 {
    color: orange;
}

</style>
