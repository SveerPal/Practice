<template>
<h1>################ MultiSlots Component ############</h1>

<ChildSlots>
<template  v-slot:header>
<h3>Product</h3>
</template>
<template  v-slot:content>
<p>vue js product</p>
</template>
<template  v-slot:footer>
<button>Buy Now</button>
</template>
</ChildSlots>
<ChildSlots>
<template  v-slot:header>
<h3>Product2</h3>
</template>
<template  v-slot:content>
<p>vue js product</p>
</template>
<template  v-slot:footer>
<button>Buy Now</button>
</template>
</ChildSlots>

</template>

<script>
import ChildSlots from './ChildSlots.vue';
export default {
    name: "MultipleSlots",
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
