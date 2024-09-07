<template>
 <h1>################ Props Component ############</h1>
<Student :name="name"/>
<Teacher  :name="name"/>
</template>

<script>
import Student from './Student.vue'
import Teacher from './Teacher.vue'
export default {
    name: "Props",
    components:{
        Student,
        Teacher
    },
    data() {
        return {
            name: "Johnson",

        }
    },    

}
</script>

<style scoped>
h3 {
    color: orange;
}

</style>
