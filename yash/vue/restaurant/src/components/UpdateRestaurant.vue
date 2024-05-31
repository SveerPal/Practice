<template>
<Header />
<div class="">
    <h1 class="">Update Restaurant</h1>

</div>
<Footer />
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    name: 'UpdateRestaurant',
    components: {
        Header,
        Footer,
    },
    data() {
        return {

            email: "",
        }
    },
    methods: {

    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
