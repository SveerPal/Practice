<template>
<h1>################ Teleport Component ############</h1>

<teleport to="#footerteleport">
<FooterTeleportComponent />
</teleport>
</template>

<script>
 import FooterTeleportComponent from './FooterTeleportComponent.vue';
export default {
    name: "TeleportComponent",
    components: {
        FooterTeleportComponent,
    
    },
    data() {
        return {
            tab: 'java',
        }
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
