<template>
<div class="">
    <p class="copyright">Copyright @ 2024</p>
    
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Footer',
    data() {
        return {
            
            email: "",
            password: ""
        }
    },
    methods: {
        
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
p.copyright {
    color:#f69202;
    text-decoration:none;
}
</style>
