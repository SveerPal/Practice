<template>
 <h1>################ Class Binding Component ############</h1>
 <!--<h3 class="green">Css Binidng</h3><br>
<h3 class="otherClass" :class="{green:colorFull,err:true}">Css Binidng</h3><br>-->
 <h3 class="otherClass" :class="applyStyle">Css Binidng</h3><br>
 <button v-on:click="colorFull=!colorFull">Change Color</button>
</template>

<script>
export default {
    name: "ClassBinding",
    data() {
        return {
            colorFull: true,

        }
    },
    props: {
        data: Object,
        getDataForRepeat: Function,
    },
    computed: {
        applyStyle() {
            return {
                
                    green: this.colorFull,
                    err: true,
                    otherClassnew:false
                
            }
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}

.green {
    background: yellow;
    display: inline-block
}

.err {
    color: black
}
.otherClassnew{
    font-size:19px
}
</style>
