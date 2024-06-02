<template> 
<h1>################ For Loop ############</h1>

<ul>
    <li v-for="item in  technology" :key="item">
        {{item}}
    </li>
</ul>
<ul>
    <li v-for="item in users" :key="item.name">
        Name is {{item.name}} and Email is {{item.email}}
    </li>
</ul>
</template>

<script>
export default {
    name: "ForLoop",
    data() {
        return {
            technology: ["php","java","node","javascript","vue"],
            users:[
                {
                    name:"Yash",
                    email:"yash@codenskills.com"
                },
                {
                    name:"Akhil",
                    email:"ak@codenskills.com"
                }
            ]
        }
    },
   
}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
