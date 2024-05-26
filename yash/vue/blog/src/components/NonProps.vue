<template>
<h1>################ Non Props Component ############</h1>
<UserNonProps data="some data" id="usernonprops" />


</template>

<script>
import UserNonProps from './UserNonProps.vue'
export default {
    name: "NonProps",
    components:{
        UserNonProps,
    },
    data() {
        return {

            data: "",

        }
    },
    methods: {
        logIn() {

            console.log("")
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
