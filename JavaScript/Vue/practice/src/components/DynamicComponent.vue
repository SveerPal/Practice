<template>
<h1>################ Dynamic Component ############</h1>
<button @click="tab='Java'">Load Java</button>
<button @click="tab='Php'">Load Php</button>
<button @click="tab='Node'">Load Node</button>
<!--<Java />
<Php />
<Node />-->
<component :is="tab"/>
</template>

<script>
import Php from './Php.vue';
import Node from './Node.vue';
import Java from './Java.vue';
export default {
    name: "DynamicComponent",
    components: {
        Php,
        Node,
        Java
    },
    data() {
        return {

            tab: 'java',

        }
    },

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
