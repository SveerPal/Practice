<template>
<h1>################ Slots Component ############</h1>

<ChildSlots>
<h1>hsaaaaaaaaaaaaaa</h1>
</ChildSlots>
<ChildSlots>
<a href="">Coden skills</a>
</ChildSlots>
<ChildSlots>
</ChildSlots>
</template>

<script>
import ChildSlots from './ChildSlots.vue';
export default {
    name: "Slots",
    components:{
        ChildSlots
    },
    data() {
        return {

            count: 0,

        }
    },

    
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
