<template> 
<h1>################ Html Binding Component ############</h1>
<h3>{{text}}</h3>
<div v-html="tag" ></div>
<div v-html="tag2"></div>
</template>

<script>
export default {
    name: "HtmlBinding",
    data(){
        return{
            text:"Akhil",
            tag:"<h3>Yash</h3>",
            tag2:"<h3>Pal</h3>"
        }
    },
    props:{
        data:Object,
        getDataForRepeat:Function,
    }
   
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
