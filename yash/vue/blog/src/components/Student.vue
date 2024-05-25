<template>
 <h1>################ Student Component ############</h1>
{{name}}
</template>

<script>
export default {
    name: "Student",   
    props: {
        name: Object,       
    }

}
</script>


<style scoped>
h3 {
    color: orange;
}

</style>
