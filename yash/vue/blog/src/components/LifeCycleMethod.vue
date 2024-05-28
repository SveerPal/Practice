<template>
<h1>################ Life Cycle Method ############</h1>

<teleport to="#footerteleport">
<FooterTeleportComponent />
</teleport>
</template>

<script>
 import FooterTeleportComponent from './FooterTeleportComponent.vue';
export default {
    name: "TeleportComponent",
    beforeCreate(){
        alert("Before Create Component")
    },
    created(){
        alert("Created Component")
    },
    components: {
        FooterTeleportComponent,
    
    },
    data() {
       console.log("ddddddd")
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
