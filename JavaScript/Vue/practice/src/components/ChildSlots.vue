<template>
<h1>################ Child Slots Component ############</h1>

<!-- <slot>Default value when data not passed </slot>-->
<slot name="header">Default value when data not passed </slot>
<slot name="content">Default value when data not passed </slot>
<slot name="footer">Default value when data not passed </slot>
</template>

<script>
export default {
    name: "ChildSlots",

}
</script>

<style scoped>
h3 {
    color: orange;
}
</style>
