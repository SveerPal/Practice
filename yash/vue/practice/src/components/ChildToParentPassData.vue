<template>
<h1>############ Pass Data Child Component To Parent Component #########</h1>
{{childUser}}
<User :getUser="getUserName" />
</template>

<script>
import User from "./User.vue"
export default {
    name: "ChildToParentPassData",
    components: {
        User
    },
    data() {
        return {
            childUser: "",

        }
    },
    methods:{
        getUserName(name){
            this.childUser=name
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
