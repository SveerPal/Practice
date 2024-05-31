<template>
<Header />
<div class="">
    <h1 class="">Update Restaurant</h1>
    <form>
        <input type="text" name="name" placeholder="Name" v-model="restaurants.name" />
        <input type="email" name="email" placeholder="Email" v-model="restaurants.email" />
        <input type="text" name="phone" placeholder="Phone" v-model="restaurants.phone" />
        <input type="text" name="address" placeholder="Address" v-model="restaurants.address" />
        <button type="button" class="bg-orange text-white" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
    <span>{{message}}</span>
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
            restaurants: {
                name: "",
                email: "",
                phone: "",
                address: "",
            },
            message: "",
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info")

        if (!user) {
            this.$router.push({
                name: "Login"
            })
        };
        //console.log(this.$route.params.id) // id define in route.js file
        let result = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}` );       
        this.restaurants = result.data;

    },
    methods: {
        async updateRestaurant(){
              let result = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
                name: this.restaurants.name,
                email: this.restaurants.email,
                phone: this.restaurants.phone,
                address: this.restaurants.address,
            });
           // console.log(result)
            if (result.status==200) {
                this.message="Restaurant Update Successfully";
                this.$router.push({name:"Home"})
            }
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
form {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    padding: 3% 0;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     border: 1px solid #f69202;
    width: 30%;
    margin-left: 35%;*/
}

input {
    border-radius: 5px;
    height: 30px;
    width: 250px;
    padding: 5px
}

button {
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
    box-shadow: none;
    width: 160px;
}

.bg-orange {
    background: #f69202;
}

.text-white {
    color: #fff
}

.text-orange {
    color: #ff6c00
}
</style>
