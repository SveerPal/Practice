<template>
<h1>################ Ref Component ############</h1>
<input type="text" ref="input"/>
<button v-on:click="getdata">Click</button>
</template>

<script>
export default {
    name: "Ref",
    props:{
        getUser:Function
    },
    data() {
        return {
            userName: "Coden Skills",
        }
    },
    methods:{
        getdata(){
            this.$refs.input.focus();
            let val=this.$refs.input.value;
            alert(val)
            this.$refs.input.style.color="red";
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
