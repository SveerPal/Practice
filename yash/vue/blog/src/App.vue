<template>
<img alt="Vue logo" src="./assets/logo.png">
<!-- <HelloWorld msg="Welcome to Coden skills" />-->
<!-- <Home />-->
<!--<Home2 />-->
<!--<TwoWayBinding />-->
<!--<GetInputFieldValue />
<GetCheckboxRadioFieldValue />
<IfElseCondition />
<ForLoop />
<PassDataToChildComponent />
<HtmlBinding />
<ClassBinding />-->
<Props />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Home2 from './components/Home2.vue'
import TwoWayBinding from './components/TwoWayBinding.vue'
import GetInputFieldValue from './components/GetInputFieldValue.vue'
import GetCheckboxRadioFieldValue from './components/GetCheckboxRadioFieldValue.vue'
import IfElseCondition from './components/IfElseCondition.vue'
import ForLoop from './components/ForLoop.vue'
import PassDataToChildComponent from './components/PassDataToChildComponent.vue'
import HtmlBinding from './components/HtmlBinding.vue'
import ClassBinding from './components/ClassBinding.vue'
import Props from './components/Props.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        Home,
        Home2,
        TwoWayBinding,
        GetInputFieldValue,
        GetCheckboxRadioFieldValue,
        IfElseCondition,
        ForLoop,
        PassDataToChildComponent,
        HtmlBinding,
        ClassBinding,
        Props,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
