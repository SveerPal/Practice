<template>
<div>
    <h3>Yash</h3>
    <h3>Akhil</h3>
    <h3>Prince</h3>
    <h3 v-bind="$attrs">{{data}}</h3>
</div>
</template>

<script>
export default {
    name: "UserNonProps",
    inheritAttrs:false,
    props: {
        data: String
    }
}
</script>
