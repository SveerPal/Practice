<template>

 <h2>Sign Up</h2>
 <input type="text" name="name" placeholder="Name" v-model="name"/>
 <input type="email" name="email" placeholder="Name" v-model="email"/>
 <input type="password" name="password" placeholder="Password" v-model="password"/>
</template>

<script>
export default {
  name: 'Signup',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  display:flex,
  
}

</style>
