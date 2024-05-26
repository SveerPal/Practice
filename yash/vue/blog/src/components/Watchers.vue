<template>
<h1>################ Watchers Component ############</h1>

<h3>{{count}}</h3>
<button v-on:click="count=count+1"> + </button>
<button v-on:click="count=count-1"> - </button>
</template>

<script>
export default {
    name: "Watchers",
    data() {
        return {

            count: 0,

        }
    },

    watch: {
        // count() {
        //     alert("")
        // }
        count(Currentval,prevVal){
            if(Currentval>5 && Currentval>prevVal){
                
                alert("Stop Counting")
            }
            if(Currentval<0){
                this.count=0
              //  alert("dddd")
            }
            //alert(Currentval)
            //alert(prevVal)
        }
    }

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
