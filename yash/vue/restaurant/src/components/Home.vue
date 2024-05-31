<template>
<Header />
<div class="container">
    <h1 class="">Hello {{name}}, Welcome to Restaurents</h1>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.address}}</td>
                <td>
                    <router-link :to="'/update-restaurant/'+item.id">Edit</router-link>&nbsp;

                    <a v-on:click="deleteRestaurant(item.id)">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<Footer />
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            name: "",
            restaurants: [],
        }
    },
    mounted() {

        this.restaurantList()
    },
    methods: {
        async deleteRestaurant(id) {

            let result = await axios.delete(`http://localhost:3000/restaurants/${id}`)
            if (result.status == 200) {
                this.restaurantList()
            }
        },
        async restaurantList() {
            let user = localStorage.getItem("user-info")
            // console.log(user)
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({
                    name: "Signup"
                })
            };
            let result = await axios.get("http://localhost:3000/restaurants");
            this.restaurants = result.data;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
table {
    width: 100%;
}

td {

    height: 40px;
}

/*.container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #f69202;
    padding: 3% 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 30%;
    margin-left: 35%;
}

input {
    border-radius: 5px;
    height: 30px;
    width: 200px;
    padding: 5px
}

button {
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
    box-shadow: none;
    width: 100px;
}

.bg-orange {
    background: #f69202;
}

.text-white {
    color: #fff
}

.text-orange {
    color: #ff6c00
}*/
</style>
