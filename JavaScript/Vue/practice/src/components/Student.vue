<template>
 <h1>################ Student Component ############</h1>
{{name}}
</template>

<script>
export default {
    name: "Student",   
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
